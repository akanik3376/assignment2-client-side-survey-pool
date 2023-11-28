import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useSarvaior = () => {
    const { user, loading } = useAuth()
    // const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const { data: surveyor, isPending: surveyorLoading } = useQuery({
        queryKey: [user?.email, 'surveyor'],
        enabled: !loading,
        queryFn: async () => {
            const result = await axiosPublic.get(`/users/surveyor/${user?.email}`)
            console.log(result)
            return result.data?.admin
        }
    })
    return [surveyor, surveyorLoading]

};

export default useSarvaior;