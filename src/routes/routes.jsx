import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ContactUs from '../pages/ContactUs';
import Service from '../pages/Service';
import AboutUs from '../pages/AboutUs';
import Dashboard from '../pages/DashBoard/Dashboard';
import AdminHome from '../pages/DashBoard/AdminHome/AdminHome';
import ManageUsers from '../pages/DashBoard/ManageUsers/ManageUsers';
import SurveyHome from '../pages/DashBoard/Survey/SurveyHome';
import AddSurvey from '../pages/DashBoard/Survey/AddSurvey';
import Survey from '../pages/Survey';


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
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: '/terms-service',
                element: <Service />
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
        errorElement: <ErrorPage />,
        children: [
            //users roots
            // {
            //     path: 'cart',
            //     element: <Cart></Cart>
            // },
            // {
            //     path: 'pay',
            //     element: <Payment></Payment>
            // },
            // {
            //     path: 'payment-history',
            //     element: <PaymentHistory></PaymentHistory>
            // },


            // admin roots
            {
                path: 'admin-home',
                element: <AdminHome />
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
        ]
    }
])

export default routes;
