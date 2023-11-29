import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useSurveyor = () => {
    const { user, loading } = useAuth()
    // const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const { data: isSurveyor, isPending: isSurveyorLoading } = useQuery({
        queryKey: [user?.email, 'isSurveyor'],
        enabled: !loading,
        queryFn: async () => {
            const result = await axiosPublic.get(`/users/admin/${user?.email}`)
            return result.data?.admin
        }
    })
    return [isSurveyor, isAdminLoading]
};

export default useSurveyor;