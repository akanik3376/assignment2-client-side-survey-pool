import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from '../Share/Container';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import Comments from '../components/Comments';

const SurveyDetails = () => {
    const item = useLoaderData()
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get('/users');
                // console.log(res.data)
                return res.data;
            } catch (error) {
                console.error('Error fetching user data:', error);
                // if (error) {
                //     await logoutUser()
                //     navigate('/login')
                // }
                // throw error;
            }
        },
    });

    const HandelDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/api/v1/survey/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                `${name}`,
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handleCreateSurvey = async (event) => {
        event.preventDefault();
        const form = event.target;

        const createSurvey = {
            photo: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
            description: form.description.value,
        };
        const res = await axiosPublic.post('/comments', createSurvey)
        // console.log(res.data)
    };


    if (isLoading) {
        return ('Loading...')
    }

    return (
        <div>
            <Container>
                <div className='bg-slate-500 w-full my-12 md:w-2/3 mx-auto p-5'>

                    <div className='flex-col space-y-2 text-white  rounded-md'>
                        <h2 className="text-xl font-semibold "><span className='mr-2 text-black border-b-2 border-red-500 font-bold text-xl'>Category:</span>
                            {item?.category}</h2>
                        <p><span className='mr-2 text-black border-b-2 border-red-500 font-bold text-xl'>Description:</span> {item?.description}</p>

                        <h2 className="text-xl"><span className='mr-2 text-black border-b-2 border-red-500 font-bold text-xl'>Title:</span> {item?.surveyTitle}</h2>

                        {item?.question1 && <>
                            <h2 className="text-xl mb-8"><span className='mr-2 text-black border-b-2 border-black font-bold text-xl'>Question:</span> {item?.question1} ?</h2>

                        </>}

                    </div>


                    <div className="flex justify-center items-center gap-x-6 text-2xl mt-4">
                        <div className="flex items-center">
                            <AiFillLike className='text-red-500'></AiFillLike>
                            <p>{1}</p>
                        </div>

                        <div className="flex items-center">
                            <AiFillDislike className='text-black'></AiFillDislike >
                            <p>{1}</p>
                        </div>
                    </div>

                    {/* <div>
                        {users.map(user => <div key={user._id}>
                            {user.role === 'admin' &&
                                <div className='flex justify-around items-center gap-5'>
                                    <Link to={`/survey/update/${item._id}`}>
                                        <button
                                            className="btn border-b-4 hover:text-white font-semibold hover:bg-[#f78da7] border-b-[#f78da7] ">Update</button>
                                    </Link>


                                    <button onClick={() => HandelDelete(item._id)} className='btn border-b-4 border-b-red-500 hover:bg-red-500 btn-outline'>Delete</button>
                                </div >

                            }
                        </div>)}
                    </div> */}
                </div>

                <form onSubmit={handleCreateSurvey} className='w-full md:w-2/3 mx-auto'>
                    <div className="my-5 border ">
                        <textarea
                            className="w-full rounded-sm resize-none p-2 outline-none"
                            name="description"
                            rows="10"
                            placeholder="Left your comments hare"
                        ></textarea>
                    </div>


                    <div className="my-5">
                        <input
                            className="bg-[#79C23F] w-full rounded-sm p-2 text-white font-simibold text-xl cursor-pointer"
                            type="submit"
                            value="Add Survey"
                        />
                    </div>
                </form>

                <div className=' w-full md:w-2/3 mx-auto mt-5'>
                    <h6 className="text-xl mb-5">Comments</h6>
                    <Comments></Comments>
                </div>
            </Container>
        </div>
    );
};

export default SurveyDetails;