import Container from "./Container";
// import avatar from '../assets/images/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.avif';
import Logo from '../assets/logo/survey.svg';
import useAuth from "../Hooks/useAuth";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const { user, logoutUser } = useAuth()

    const HandelLogout = () => {
        logoutUser()
    }


    const navLink = <>
        <li> <NavLink to='/'>Home</NavLink></li>
        <li> <NavLink to='/survey'>Surveys Page</NavLink></li>
        <li> <NavLink to='/about-us'>About Us</NavLink></li>
        <li> <NavLink to='/contact-us'>Contact Us</NavLink></li>
        {/* <li> <NavLink to='terms-service'>Terms and Service</NavLink></li> */}
        <li> <NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>

    return (


        <Container>
            <div className={`navbar bg-black  z-20 max-w-[1081px] mx-auto bg-opacity-40 text-white `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-40 rounded-box w-52">


                            {navLink}
                        </ul>
                    </div>
                    <img className="w-24" src={Logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal px-1 ">
                        {navLink}
                    </ul>


                </div>

                <div className="navbar-end ">
                    {user ? <>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-16 rounded-full">
                                    {user ? <img src={user.photoURL} /> : <img src={avatar} />}
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-pink-100 text-xl font-semibold">
                                {/* <li> <a>Name: {user?.displayName}</a></li> */}

                                <li> <a className=" mr-2">{user?.email}</a></li>
                                {/* <li> <a>Profile</a></li> */}
                                {/* <li><a>Settings</a></li> */}
                                <li onClick={HandelLogout}><a>Logout</a></li>
                            </ul>
                        </div>
                    </> : <Link to='/login'>
                        <button className="btn text-white font-semibold bg-pink-500">Login</button>
                    </Link>}
                </div>

            </div>
        </Container >

    );
};

export default Navbar;