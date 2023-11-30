import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../utilitis/AuthProvider";


const Navbar = () => {

    const { user, signOutUser, } = useContext(AuthContext);


    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch()
    }
    const handleClick = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    };

    const linkHorizontal = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="">Service</div>
            <ul className="dropdown-content z-[1] p-2 shadow bg-blue-400 rounded-box space-y-1 min-w-max">
                <li className="px-2"><NavLink to='/events'>Events</NavLink></li>
                <li className="px-2"><NavLink to='/blog'>Blog</NavLink></li>
                <li className="px-2"><NavLink to='/undcons'>Become A Volunteer</NavLink></li>
                <li className="px-2"><NavLink to='/undcons'>Become A Sponsors</NavLink></li>
            </ul>
        </div>
        <li><NavLink to='/speakers'>Speakers</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        {!user && <>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
        </>
        }

    </>

    const linksVartical = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li>
            <a>Service</a>
            <ul className="p-2 ms-4">
                <li><NavLink to='/events'>Events</NavLink></li>
                <li><NavLink to='/blog'>Blog</NavLink></li>
                <li><NavLink to='/undcons'>Become A Volunteer</NavLink></li>
                <li><NavLink to='/undcons'>Become A Sponsors</NavLink></li>
            </ul>
        </li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/speakers'>Speakers</NavLink></li>
        {!user && <>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
        </>
        }

    </>

    return (
        <div
        // style={{ background: 'linear-gradient(to right, rgba(255, 153, 51, 0.2), rgba(255, 153, 51, 0.8))'}}
        >
            <div className="navbar py-14 px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul onClick={handleClick} className="font-bold text-l  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
                            {linksVartical}
                        </ul>
                    </div>
                    <h2 className="hidden md:block text-5xl font-bold  flex gap-4 text-green-400"><span><span className="text-red-400">e</span>VENTS</span> </h2>

                </div>
                <div className="navbar-end md:gap-20">
                    <div className="hidden lg:flex">
                        <ul onClick={handleClick} className="menu-horizontal text-white text-xl font-bold tracking-wide px-1 space-x-6">
                            {linkHorizontal}
                        </ul>
                    </div>
                    <div className=" dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-14 rounded-full">
                                <img className="bg-slate-200" alt={`User`} src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className={`mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-2`}>
                            <li className={`${user ? "font-bold text-lg" : "hidden"}`}>
                                {user && <>{user.displayName}</>}
                            </li>
                            <li className={`${user ? "" : "hidden"}`}>
                                {user && <>{user.email}</>}
                            </li>
                            <li >{user ? <><Link to="/" onClick={handleSignOut} className="bg-slate-300 rounded my-1">Logout</Link>
                            </> : <>
                                <Link to="/login" className="font-bold bg-slate-300 rounded my-2">Login</Link>
                                <Link to="/register" className="font-bold bg-slate-300 rounded my-2">Register</Link>

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

