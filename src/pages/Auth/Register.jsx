import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utilitis/AuthProvider";
import regBgImg from '../../assets/images/signupBg.jpg'
// import { ToastContainer, toast } from 'react-toastify';

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
        const userAggreeTerms = form.get('terms')
        // console.log(userRegEmail, userRegPassword)
        setRegInputError('');
        setRegError('');
        setSuccess('');

        if (userRegPassword.length < 6) {
            setRegInputError('Weak-password!! Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(userRegPassword)) {
            setRegInputError('Enter at least one uppercase letter');
            return;
        }
        else if (!/[0-9]/.test(userRegPassword)) {
            setRegInputError('Enter at least one digit');
            return;
        }
        else if (!/[@#^*.-]/.test(userRegPassword)) {
            setRegInputError('Enter at least one of these @#^*.- characters ');
            return;
        }
        else if (!userAggreeTerms) {
            setRegInputError('Accept the Terms & Conditions');
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
                // toast("Wow so easy!")
                // console.log(error.code)
                // const errorCode = error.code;

            })
    }
    return (
        <div style={{
            backgroundImage: `url(${regBgImg}`,
            backgroundSize: 'cover',
        }} className="py-4 px-2">
            <div className="hero max-h-max py-4">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegisterForm} className="card-body">
                        <h3 className="text-xl font-semibold text-primary text-center">Create a new account here</h3>
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
                                <p><span><input type="checkbox" name="terms" id="2" /> Accept the Terms & Condition</span></p>
                            </label>
                            <span className="text-sm link link-hover"><Link>See the terms & condition</Link></span>
                        </div>
                        <div>
                            {
                                regInputError && <p className="text-red-400 font-semibold text-center">{regInputError}</p>
                            }
                            {
                                regError && <p className="text-red-400  font-semibold text-center">{regError}</p>
                            }
                            {
                                success && <p className="text-green-400  font-semibold text-center">
                                    <p>{success}</p><Link to='/'>Go to Home</Link></p>
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

            {/* <ToastContainer /> */}
        </div>
    );
};

export default Register;