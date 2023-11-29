import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUser, FaBookDead, FaEdit, FaPager, FaCcAmazonPay } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";

import { IoMdContact } from "react-icons/io";
import useAuth from "../../Hooks/useAuth";


const Dashboard = () => {
    const { logoutUser } = useAuth()
    const HandelLogout = () => {
        logoutUser()

    }
    return (
        <div className="flex gap-7 m-3">
            {/* side bar */}
            <div className="w-64 bg-[#FF00001A] min-h-screen">
                <ul className="menu uppercase font-bold flex flex-col   space-y-2  mt-9">



                    <li>
                        <NavLink to='/dashboard/admin-home'><FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/admin-home'><MdOutlineManageAccounts />Survey Management</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/payments'><FaCcAmazonPay />payments of pro-user</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manage-users'><FaUser />
                            Manage User</NavLink>
                    </li>



                    <h1>survey</h1>

                    {/* main menu clint side */}

                    <li>
                        <NavLink to='/dashboard/survey-home'><FaHome />Survey Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/dashboard/add-survey'><FaBookDead />Add Survey</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to={`/dashboard/survey/update`}><FaBookDead />Update Survey</NavLink>
                    </li> */}
                    <li>
                        <NavLink to='/dashboard/feed-back'><IoNotifications />all feedback</NavLink>
                    </li>
                    <li>
                        <NavLink to='admin-fed-back '><IoNotifications />Survey responses</NavLink>
                    </li>






                    <hr className="my-5 mx-5 border" />

                    <li>
                        <NavLink to='/'><FaHome />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about-us'><FaBookDead />About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact-us'><IoMdContact /> Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'><FaPager />Survey Page</NavLink>
                    </li>
                    <li onClick={HandelLogout}>
                        <NavLink to='/menu'><FaEdit />Logout</NavLink>
                    </li>
                </ul>


            </div>

            {/* dash board */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;