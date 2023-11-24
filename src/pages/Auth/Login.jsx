import { useContext, useState } from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utilitis/AuthProvider";

const Login = () => {
    const {signInUser, signInWithGoogle} =useContext(AuthContext);
    const [showpassword, setShowPassword] = useState(false);
    const location =useLocation();
    const navigate= useNavigate();
    

    const handleLogInForm = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userLogInEmail = form.get('email')
        const userLogInPassword = form.get('password')
        signInUser(userLogInEmail, userLogInPassword)
        .then(
            navigate(location?.state ? location.state : '/')
        )
        .catch()
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then()
        .catch()
    }
    return (
        <div>
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
                        <p >Do not have account? <span className="btn-link  "><Link to='/register'>Resister Here</Link></span>
                        </p>
                        <p >Login with <button onClick={handleGoogleSignIn} className="btn-link">Google</button></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;