import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utilitis/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginBg from '../../assets/images/loginBg.jpg'

const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    const [showpassword, setShowPassword] = useState(false);
    // const [success, setSuccess] = useState('');
    const [signInError, setSignInError] = useState();
    // const [signInInputError, setSignInInputError] = useState();

    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();

    const notify = () => toast.error("Email or Password not valid. Try again..", {
        position: toast.POSITION.TOP_CENTER
    });

    const handleLogInForm = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userLogInEmail = form.get('email')
        const userLogInPassword = form.get('password')
        console.log(userLogInEmail, userLogInPassword)
        setSignInError('')

        signInUser(userLogInEmail, userLogInPassword)
            .then(() => {
                navigate(location?.state ? location.state : '/')
            }
            )
            .catch(error => {
                notify();
                setSignInError(error.message);
                return;

            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then()
            .catch()
    }
    return (
        <div style={{
            backgroundImage: `url(${loginBg}`,
            backgroundSize: 'cover',
        }} className="py-4 px-2"
        >
            <div className="min-h-max flex justify-center">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleLogInForm} className="card-body">
                    <h3 className="text-xl font-semibold text-primary text-center">Login here</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showpassword ? 'text' : "password"} name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label label-text-alt">
                                <span><input onClick={() => setShowPassword(!showpassword)} type="checkbox" name="" id="1" /> Show Password</span>
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <Link to='/error' className=" link link-hover">Forgot password?</Link>
                                {/* <a href="#" ></a> */}
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                {
                                    signInError && <p className="text-red-400  font-semibold text-center">{signInError}</p>
                                }

                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                    </form>
                    <div className="text-center space-y-4 mb-6 ">
                        <p >Do not have account? <span className="btn-link  "><Link to='/register'>Resister Here</Link></span>
                        </p>
                        <p >Login with <button onClick={handleGoogleSignIn} className="btn-link">Google</button></p>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;