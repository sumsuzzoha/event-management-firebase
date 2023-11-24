import { Link, NavLink } from "react-router-dom";
import { FaCcDiscover } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../utilitis/AuthProvider";


const Navbar = () => {

    const {user, signOutUser, }= useContext(AuthContext);
    

    const handleSignOut = ()=>{
        signOutUser()
        .then()
        .catch()
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/events'>Events</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to=''>Blog</NavLink></li>
        <li><NavLink to=''>Contact</NavLink></li>
       {
        user &&    <>
                <li><NavLink to='/enroled'>Enroled</NavLink></li>
            </>
        }
    </>

    return (
        <div>
            <div className="navbar p-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }

                        </ul>
                    </div>
                    <h2 className="text-5xl font-bold flex gap-4 text-green-400"><FaCcDiscover /><span><span className="text-red-400">Digi</span>VENTS</span> </h2>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className=" dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img className="bg-slate-200" alt="Tailwind CSS Navbar component" src={'user?.photoURL'} />
                            </div>
                        </label>
                        <ul tabIndex={0} className={`mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52`}>
                            <li className={`${user ? "" : "hidden"}`}>
                                {user && <>{user.email}</>}
                            </li>
                            <li className={`${user ? "" : "hidden"}`}>
                                {user && <>{user.displayName}</>}
                            </li>

                            <li>{user ? <><span onClick={handleSignOut} >Logout</span>
                            </> : <><Link to="/login"><span>Login</span></Link>

                            </>}


                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;



// import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../provider/AuthProvider";

// const Navbar = () => {

//     const { user, signOutUser } = useContext(AuthContext);

//     const handleSignOut = () => {
//         signOutUser()
//             .then(() => <Link to='/'></Link>)
//             .catch(error => {
//                 console.log(error.message)
//             })
//     }
//     console.log(user);

//     const links = <>
//         <li><NavLink to='/'>Home</NavLink></li>
//         <li><NavLink to='/events'>Events</NavLink></li>
//         <li><NavLink to='/about'>About</NavLink></li>
//         <li><NavLink to='/blog'>Blog</NavLink></li>
//         <li><NavLink to='/contact'>Contact</NavLink></li>
//         {
//             user && <>
//                 <li><NavLink to='/enroled'>Enroled</NavLink></li>
//             </>
//         }
//     </>



//     return (
//         <div>
//             <div className="navbar p-6">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                             {
//                                 links
//                             }

//                         </ul>
//                     </div>
//                     <a className="btn btn-ghost text-xl">daisyUI</a>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {
//                             links
//                         }
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <div className=" dropdown dropdown-end ">
//                         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
//                             <div className="w-10 rounded-full">
//                                 <img className="bg-slate-200" alt="Tailwind CSS Navbar component" src={user?.photoURL} />
//                             </div>
//                         </label>
//                         <ul tabIndex={0} className={`mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52`}>
//                             <li className={`${user ? "" : "hidden"}`}>
//                                 {user && <>{user.email}</>}
//                             </li>
//                             <li className={`${user ? "" : "hidden"}`}>
//                                 {user && <>{user.displayName}</>}
//                             </li>

//                             <li>{user ? <><span onClick={handleSignOut} >Logout</span>
//                             </> : <><Link to="/login"><span>Login</span></Link>

//                             </>}


//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;