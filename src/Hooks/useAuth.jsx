import { useContext } from "react";
import { AuthContext } from "../Providor/AuthProvidor";

const useAuth = () => {
    const userInfo = useContext(AuthContext)

    return userInfo
};

export default useAuth;