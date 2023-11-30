import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const axiosSecure = useAxiosSecure()
    // const { user } = useAuth()
    //use tans tak query
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/users`)

            return response.data
        }
    })
    return [users, refetch, isLoading]
};

export default useUser;