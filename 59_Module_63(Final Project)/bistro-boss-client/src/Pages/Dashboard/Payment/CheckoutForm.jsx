import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const navigate= useNavigate();
    const { user } = useAuth();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log('payment error', error);
            setError(error.message);
        } else {
            console.log('payment method', paymentMethod);
            setError('');
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })
        if (confirmError) {
            console.log('confirm error');
        } else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                // now save the payment in the database.
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    data: new Date(), //utc date convert. use moment js
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payments', payment);
                console.log('payment saved', res.data);
                refetch();
                if(res.data?.paymentResult?.insertedId){
                    Swal.fire({
                        title: "Thank you for paying us!",
                        text: "Payment successful",
                        icon: "success"
                    });
                    navigate('/dashboard/paymentHistory');
                }
            }
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '30px',
                                color: 'white',
                                '::placeholder': {
                                    color: 'white',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                ></CardElement>
                <button className="btn btn-outline border-0 border-b-4 text-white w-[200px] text-2xl" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;