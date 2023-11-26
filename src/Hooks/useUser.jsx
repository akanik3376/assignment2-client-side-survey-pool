import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
    const axiosPublic = useAxiosPublic()
    // const { user } = useAuth()
    //use tans tak query
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/users`)
            return response.data
        }
    })
    return [users, refetch]
};

export default useUser;