import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utilitis/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const [regInputError, setRegInputError] = useState();
    const [regError, setRegError] = useState();
    const [success, setSuccess] = useState('');
    const [showpassword, setShowPassword] = useState(false);

    const handleRegisterForm = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        // const userLogInName = form.get('name')
        const userRegEmail = form.get('email')
        const userRegPassword = form.get('password')
        console.log(userRegEmail, userRegPassword)
        setRegError('');

        if (userRegPassword < 6) {
            setRegInputError('Your Password should be minimum 6 charecter');
            return;
        }
        createUser(userRegEmail, userRegPassword)
            .then(() => {
                setSuccess('Account create Successfully')
                // console.log(result)
                // const user = userCredential.user;
            })
            .catch((error) => {
                setRegError(error.message)
                toast("Wow so easy!")
                console.log(error.code)
                // const errorCode = error.code;

            })
    }
    return (
        <div>
            <div className="hero max-h-screen py-4 bg-base-200">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegisterForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showpassword ? 'text' : "password"} name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <label className="label label-text-alt">
                                <span><input onClick={() => setShowPassword(!showpassword)} type="checkbox" name="" id="1" /> Show Password</span>
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span><input type="checkbox" name="" id="2" /> Accept the Terms & Condition</span>
                            </label>
                        </div>
                        <div>
                            {
                                regInputError && <p className="text-green-400 text-lg font-semibold text-center">{regError}</p>
                            }
                            {
                                regError && <p className="text-green-400 text-lg font-semibold text-center">{regError}</p>
                            }
                            {
                                success && <p className="text-green-400 text-lg font-semibold text-center">{success}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-primary" />
                        </div>
                    </form>
                    <div className="text-center space-y-4 mb-6 ">
                        <p>Go to <span className="btn-link"><Link to='/login'>Login Page</Link></span>
                        </p>
                    </div>
                </div>

            </div>

            <ToastContainer />
        </div>
    );
};

export default Register;