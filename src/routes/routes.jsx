import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ContactUs from '../pages/ContactUs';
// import Service from '../pages/Service';
import AboutUs from '../pages/AboutUs';
import Dashboard from '../pages/DashBoard/Dashboard';
import AdminHome from '../pages/DashBoard/AdminHome/AdminHome';
import ManageUsers from '../pages/DashBoard/ManageUsers/ManageUsers';
import SurveyHome from '../pages/DashBoard/Survey/SurveyHome';
import AddSurvey from '../pages/DashBoard/Survey/AddSurvey';
import Survey from '../pages/Survey';
import SurveyDetails from '../pages/SurveyDetails';
import Update from '../components/SurveyCart/Update';
import GetPro from '../pages/GetPro/GetPro';
import PrivetRoot from './PrivetRoot';
import Payments from '../pages/DashBoard/Payments/Payments';
import FeetBack from '../pages/DashBoard/FeetBack';
import AdminFedBack from '../pages/DashBoard/AdminFedBack/AdminFedBack';
import Admin from '../pages/DashBoard/Admin';
import Tables from '../pages/DashBoard/Tables';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/survey',
                element: <Survey />
            },
            {
                path: '/survey/details/:id',
                element: <PrivetRoot> <SurveyDetails /></PrivetRoot>,
                loader: ({ params }) => fetch(`https://polling-survey-server.vercel.app/api/v1/survey/${params.id}`)
            },

            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            // {
            //     path: '/terms-service',
            //     element: <Service />
            // },
            {
                path: '/get-pro',
                element: <PrivetRoot><GetPro /></PrivetRoot>
            }
        ]
    },
    //login page
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },

    // DashBoard

    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,

        // errorElement: <ErrorPage />,
        children: [
            // admin roots
            {
                path: 'admin-home',
                element: <AdminHome />
            },
            {
                path: 'admin',
                element: <Admin />
            },
            {
                path: 'payments',
                element: <Payments />
            },
            {
                path: 'manage-users',
                element: <ManageUsers />
            },

            // Survey role
            {
                path: 'survey-home',
                element: <SurveyHome />
            },
            {
                path: 'add-survey',
                element: <AddSurvey />
            },
            {
                path: 'feed-back',
                element: <FeetBack />
            },
            {
                path: 'admin-fed-back',
                element: <AdminFedBack />
            },
            {
                path: ' responses',
                element: <Tables />
            },



        ]
    },
    {
        path: '/update/:id',
        element: <Update />,
        loader: ({ params }) => fetch(`https://polling-survey-server.vercel.app/api/v1/survey/${params.id}`)
    },

])

export default routes;
