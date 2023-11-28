import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";




const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',

});
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logoutUser } = useAuth()
    //interceptors use hare for verify user
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')

        config.headers.authorization = `Barrera ${token}`

        return config;
    }, function (error) {

        return Promise.reject(error);
    });

    //status code caking hare for 401 || 403
    axios.interceptors.response.use(function (response) {

        return response;
    }, async (error) => {
        // if (error) {
        //     await logoutUser()
        //     navigate('/login')
        // }

        const status = error.response.status //get status code in a variable

        // status == 401 || 403 then user logout and navigate login page
        if (status == 401 || status == 403) {
            await logoutUser()
            navigate('/login')
        }
        return Promise.reject(error);
    });
    return axiosSecure
};

export default useAxiosSecure;