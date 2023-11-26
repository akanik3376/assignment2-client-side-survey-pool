import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { FaHome, FaFileContract, FaUser, FaBookDead } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";


const Dashboard = () => {
    const item = useLoaderData()
    //TO DO:
    const isAdmin = true
    const isSurvey = false

    return (
        <div className="flex gap-12 p-8">
            {/* side bar */}
            <div className="w-64 bg-[#FF00001A] min-h-screen">
                <ul className="menu uppercase font-bold flex flex-col   space-y-2  mt-9">



                    <li>
                        <NavLink to='/dashboard/admin-home'><FaHome />Admin Home</NavLink>
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
                        <NavLink to={`/dashboard/feedback`}><FaBookDead />all feedback</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/dashboard/feedback`}><FaBookDead />Survey responses</NavLink>
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
                        <NavLink to='/menu'><FaFileContract />Survey Page</NavLink>
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