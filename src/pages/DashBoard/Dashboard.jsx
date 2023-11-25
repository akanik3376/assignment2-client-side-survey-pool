import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaLock, FaFileContract, FaUser, FaBookDead } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { IoMdContact, IoMdMenu } from "react-icons/io";


const Dashboard = () => {
    //TO DO:
    const isAdmin = true

    return (
        <div className="flex gap-12 ">
            {/* side bar */}
            <div className="w-64 bg-yellow-500 min-h-screen">
                <ul className="menu uppercase font-bold flex flex-col   space-y-2  mt-9">
                    {
                        isAdmin ? <>

                            <li>
                                <NavLink to='/dashboard/admin-home'><FaHome />Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manage-users'><FaUser />
                                    Manage User</NavLink>
                            </li>



                        </>
                            : <>

                                {/* main menu clint side */}

                                <li>
                                    <NavLink to='/user-home'><FaHome />User Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/about-us'><FaBookDead />About Us</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/dashboard/payment-history'><FaLock />payment history</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'><IoMdMenu />My cart {cart?.length}</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/user-add-review'><FaLock />add review</NavLink>
                                </li>

                                <li>
                                    <NavLink to='/user-booking'><MdContactMail />my booking</NavLink>
                                </li>

                            </>
                    }

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
                        <NavLink to='/menu'><FaFileContract />Survey Page</NavLink>
                    </li>
                </ul>


            </div>

            {/* dash board */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;