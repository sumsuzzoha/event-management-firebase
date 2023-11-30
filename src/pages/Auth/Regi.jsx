import { useContext, useState } from 'react';
import { AuthContext } from '../../utilitis/AuthProvider';

function Regi() {
    const { createUser } = useContext(AuthContext)
    const [regInputError, setRegInputError] = useState();
    const [regError, setRegError] = useState();
    const [success, setSuccess] = useState('');
    const [showpassword, setShowPassword] = useState(false);
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRegisterForm = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userRegEmail = form.get('email')
        const userRegPassword = form.get('password')
        const userAggreeTerms = form.get('terms')
        setRegInputError('');
        setRegError('');
        setSuccess('');

        // if () {
        //     setRegInputError("Enter at least one capital letter")
        //     return;
        // }
        // else
        if (userRegPassword.length < 6) {
            setRegInputError('Weak-password!! Password should be at least 6 or more characters');
            return;
        }
        else if (!/[A-Z]/.test(userRegPassword)) {
            setRegInputError("Enter at least one capital letter")
            return;
        }
        else if (!/[0-9]/.test(userRegPassword)) {
            setRegInputError("Enter at least one digit")
            return;
        }
        else if (!/[@#^*.-]/.test(userRegPassword)) {
            setRegInputError("Enter at least one special characters. Ex: @#^*.-")
            return;
        }
        else if (!userAggreeTerms) {
            setRegInputError('Please accept the Terms & Conditions')
            return;
        }


        createUser(userRegEmail, userRegPassword)
            .then(() => {
                setSuccess('Your account create successfully');
                // document.getElementById('my_modal_5').showModal();
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

    const handleSignup = () => {
        // Simulating successful email signup
        // Replace this with your signup logic
        // For demonstration, let's set a dummy email and open the modal
        if(success){
            document.getElementById('my_modal_5')
            // .showModal();

        }
        return;
        // setIsModalOpen(true);
    };




    return (
        <div className="App">
            <h1>Welcome to My App</h1>
            <button 
            onClick={handleSignup}>Sign Up</button>
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
                            <p><span><input type="checkbox" name="terms" id="2" required /> Accept the Terms & Condition</span></p>
                        </label>

                    </div>
                    {/* {console.log(regInputError)} */}

                    <div onClick={handleSignup}
                        className="form-control mt-6">
                        <input type="submit" value="Register" className="btn btn-primary" />
                    </div>


                    {/* <div

                            onClick={"success" && (() => document.getElementById('my_modal_5').showModal())}

                            className="form-control mt-6"
                        >
                            <input type="submit" value="Register" className="btn btn-primary"
                            // onClick={() => document.getElementById('my_modal_5').showModal()} 
                            />
                        </div> */}
                </form>

            </div>

            {success && 
            <dialog

                id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* message show here */}
                    <div className="py-4">
                        success1
                    </div>
                    <div className="text-center mx-auto">
                        <form method="dialog">
                            <button className="btn btn-sm">Close</button>

                        </form>
                    </div>
                </div>
            </dialog>
            
            }
            {/* <div

                            onClick={"success" && (() => document.getElementById('my_modal_5').showModal())}

                            className="form-control mt-6"
                        >
                            <input type="submit" value="Register" className="btn btn-primary"
                            // onClick={() => document.getElementById('my_modal_5').showModal()} 
                            />
                        </div> */}
        </div>
    );
}

export default Regi;
