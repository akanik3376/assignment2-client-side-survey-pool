/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoot = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isLoading] = useAdmin()

    const location = useLocation()

    if (loading || isLoading) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading...
        </button>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoot;