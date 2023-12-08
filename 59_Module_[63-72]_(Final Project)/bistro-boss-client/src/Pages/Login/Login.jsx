import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are successfully logged in",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    }
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }
    return (
        <>
            <Helmet>
                <title>Bistro-Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-white">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 shadow-2xl bg-gradient-to-r from-indigo-300 to-purple-400 w-96">
                        <div className='border-2 m-1 rounded-xl border-gradient-to-r from-purple-400 to-indigo-300 '>
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the text above" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-2">
                                    <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                                </div>

                                <div className="divider"></div>
                                <div className='flex items-center justify-center text-xl font-semibold'>
                                    or, sign in with google <SocialLogin></SocialLogin>
                                </div>
                                <p className="text-center text-xl font-semibold"><small>New Here? <Link to="/signup" className="font-semibold text-orange-600">Create a new account</Link> </small></p>
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

export default Login;