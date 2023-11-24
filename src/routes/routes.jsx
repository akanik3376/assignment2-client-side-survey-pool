import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
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
                element: <Survey></Survey>
            },
            {
                path: '/is',
                element: <h3>This is about dfhfgtjutrfyhre page</h3>
            },
            {
                path: '/isis',
                element: <h3>dfhykyukytut dfhfgtjutrfyhre page</h3>
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
    }
])

export default routes;
