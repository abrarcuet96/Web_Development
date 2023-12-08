import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    // start of react hook form
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database.
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "You are successfully signed up",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
                    .catch(err => console.log(err));
            })
    };
    // end of react hook form
    return (
        <>
            <Helmet>
                <title>Bistro-Boss | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">SignUp now!</h1>
                    </div>
                    <div className="card flex-shrink-0 shadow-2xl bg-gradient-to-r from-indigo-300 to-purple-400 w-96">
                        <div className='border-2 m-1 rounded-xl border-gradient-to-r from-purple-400 to-indigo-300 '>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600">photoURL is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} name="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === "required" && <span className="text-red-600">password is required</span>}
                                    {errors.password?.type === "minLength" && <span className="text-red-600">password must be 6 characters</span>}
                                    {errors.password?.type === "maxLength" && <span className="text-red-600">password must be less then 20 characters</span>}
                                    {errors.password?.type === "pattern" && <span className="text-red-600">password must have one uppercase one lowercase one number and one special character</span>}
                                </div>
                                <div className="form-control mt-2">
                                    <input className="btn btn-primary" type="submit" value="SignIn" />
                                </div>
                                <div className='flex items-center justify-center text-xl font-semibold'>
                                    or, sign in with google <SocialLogin></SocialLogin>
                                </div>
                                <p className="text-center text-xl font-semibold"><small>Already have an account? <Link to="/login" className="font-semibold text-orange-600">Login</Link> </small></p>
                            </form>
                        </div>
                    </div>
                    <div>
                        <p className="text-xl text-white">Go To Home <span className="text-orange-600 font-semibold"><Link to='/'>Home</Link></span></p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default SignUp;