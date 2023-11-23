import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../Shared/Navbar";

const Login = () => {
    const [showpassword, setShowPassword] = useState(false);
    const { signInUser } = useContext(AuthContext)
    // const { signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogInForm = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userLogInEmail = form.get('email')
        const userLogInPassword = form.get('password')


        // Login user email password in firebase 
        signInUser(userLogInEmail, userLogInPassword)
            .then(() => {
                e.target.reset();
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message)
            })

    }
    // const handleGoogleSignIn = () => {
    //     signInWithGoogle()
    //         .then(result => {
    //             console.log(result.user);
    //         })
    //         .catch(error => {
    //             console.log(error.massage)
    //         })

    // }
    return (
        <div className="w-full">
            <Navbar></Navbar>
            <div className="min-h-max flex justify-center">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleLogInForm} className="card-body">
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
                                <a href="#" className=" link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                    </form>
                    <div className="text-center space-y-4 mb-6 ">
                    <p >Are you new user? <span className="btn-link  "><Link to='/register'>Resister Here</Link></span>
                    </p>
                    <p >You can login with <button onClick={'handleGoogleSignIn'} className="btn-link">Google Login</button></p>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Login;