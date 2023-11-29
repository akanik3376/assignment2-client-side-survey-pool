import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
    const axiosPublic = useAxiosPublic()
    // const { user } = useAuth()
    //use tans tak query
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/users`, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem('access-token')}`
                }
            })
            return response.data
        }
    })
    return [users, refetch, isLoading]
};

export default useUser;