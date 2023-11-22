import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { image, price, recipe, name, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure= useAxiosSecure();
    const [,refetch]= useCart();
    const handleAddToCart = () => {
        if (user && user?.email) {
            // DONE: send cart item to the database.
            
            const cartItem= {
                menuId: _id,
                email: user.email,
                name, image, price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refetch the cart to update the cart items count:
                    refetch();
                }
            });
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page.
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }
    return (
        <div className=" flex justify-center items-center">
            <div className="card w-96 h-96 bg-base-100 rounded-md border-2 p-2">

                <figure><img src={image} alt="Shoes" /></figure>

                <p className="absolute right-0 mr-4 mt-4 bg-white shadow-xl rounded-md text-orange-600 font-bold px-4">${price}</p>
                <div className="text-center">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p>{recipe}</p>
                    <div className="text-center">
                        <button onClick={handleAddToCart} className="btn btn-outline bg-slate-300 border-0 border-b-4 border-orange-600 w-full">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard; 