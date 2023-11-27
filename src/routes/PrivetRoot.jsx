/* eslint-disable react/prop-types */
import { Navigate, useLocation, } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRoot = ({ children }) => {

    const { isLoading, user } = useAuth()
    const location = useLocation()
    // console.log(location)

    if (isLoading) {
        return <div className="flex justify-center items-center h-[40vh]">
            <button className="btn">
                <span className="loading loading-spinner "></span>
                loading...
            </button>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={location.pathname} replace></Navigate>
};

export default PrivetRoot;