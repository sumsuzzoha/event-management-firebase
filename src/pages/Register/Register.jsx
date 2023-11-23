import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
// import { ToastContainer, toast } from "react-toastify";

const Register = () => {

    const [regError, setRegError] = useState()
    // const toastify = ()=> toast(regError);
    // console.log(regError);

    const [showpassword, setShowPassword] = useState(false);

    // const authInfo = useContext(AuthContext);
    const { createUser } = useContext(AuthContext);

    const handleRegisterForm = e => {
        e.preventDefault();
        const userRegInName = e.target.name.value;
        const userRegInEmail = e.target.email.value;
        const userRegInPassword = e.target.password.value;
        const userRegInRePassword = e.target.re_password.value;
        console.log(userRegInName, userRegInEmail);

        setRegError('');

        if (userRegInPassword !== userRegInRePassword) {
            setRegError('Your Password is not matched. Try Again');
            return;
        }

        // create user in firebase
        // console.log(authInfo);
        // console.log(createUser);
        createUser(userRegInEmail, userRegInPassword)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <h2 className="text-xl font-bold text-center border my-4">This is register page</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text-alt">
                                        {regError ? <p>{regError}</p> : <p>{setRegError('Enter Password again')}</p>}
                                    </span>


                                </label>
                                <input type={showpassword ? 'text' : "password"} name='re_password' placeholder="password" className="input input-bordered" required />
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
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-primary" />
                        </div>
                    </form>
                    <p className="text-center">Go to
                        <span className=" link link-hover"><Link to='/login'>Login Page</Link></span>
                    </p>
                </div>

            </div>

            {/* <ToastContainer></ToastContainer> */}
        </div>
    );
};

export default Register;