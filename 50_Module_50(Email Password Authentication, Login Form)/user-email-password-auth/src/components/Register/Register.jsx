import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted=e.target.terms.checked;
        console.log(email, password,accepted);
        // reset error and success
        setRegisterError('');
        setSuccess('');
        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have atleast one upper case character');
            return;
        }
        else if(!accepted){
            setRegisterError('Please accept our terms and conditions');
            return;
        }
        

        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully');
                // update profile
                updateProfile(result.user,{
                    displayName:name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                } )
                .then(()=>
                    console.log('Profile Updated')
                )
                .catch()
                // send verification email
                sendEmailVerification(result.user)
                .then(()=>{
                    alert('Please check your email and verify your account');
                })
            })
            .catch(error => {
                console.log(error);
                setRegisterError(error.message);
            })

    }
    return (
        <div>
            <div className="mx-auto md:w-1/2">
                <h2 className="text-3xl ">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 w-full py-2 px-4" type="text" placeholder="Your Name" name="name" id="" required />
                    <br />
                    <input className="mb-4 w-full py-2 px-4" type="email" placeholder="email address" name="email" id="" required />
                    <br />
                    <div className="mb-4 relative">
                        <input
                            className="w-full py-2 px-4"
                            type={showPassword ? "text" : "password"}
                            placeholder="password"
                            name="password" required />
                        <span className="absolute top-3  right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }

                        </span>
                    </div>
                    <br />
                    <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept our terms and conditions</label>
                    </div>
                    <br />
                    <input className="btn btn-secondary mb-4 w-full" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-600">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
                <p>Aleady have an account? <Link to="/login">Please Login</Link></p>
            </div>
        </div>
    );
};

export default Register;