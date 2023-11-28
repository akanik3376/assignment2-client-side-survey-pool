import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const usePayment = () => {
    const axiosPublic = useAxiosPublic()
    // const { user } = useAuth()
    //use tans tak query
    const { data: payments = [], refetch, isLoading } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/payments`)
            return response.data
        }
    })
    return [payments, refetch, isLoading]
};

export default usePayment;