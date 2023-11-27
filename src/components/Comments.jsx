import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const Comments = () => {
    const axiosPublic = useAxiosPublic()
    const { data: comments = [], refetch, isLoading } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get('/comments');

                return res.data;

            } catch (error) {
                console.error('Error fetching user data:', error);

            }
            refetch()
        },

    });

    if (isLoading) {
        return ('loading...')
    }

    return (
        <div>
            {comments?.map(comment => <div key={comment._id} className='mb-6'>
                <img className='w-16 rounded-full' src={comment?.photo} alt="" />
                <h2 className="text-xl font-bold my-2">{comment?.email}</h2>
                <p>{comment?.description}</p>
            </div>)}
        </div>
    );
};

export default Comments;