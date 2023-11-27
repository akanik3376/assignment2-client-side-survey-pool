import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
    const { user, loading } = useAuth()
    // const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const result = await axiosPublic.get(`/users/admin/${user?.email}`)
            return result.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;