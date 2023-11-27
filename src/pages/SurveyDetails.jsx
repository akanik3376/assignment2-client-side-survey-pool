import { useLoaderData, useParams } from 'react-router-dom';
import Container from '../Share/Container';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import useAuth from '../Hooks/useAuth';
// import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../Hooks/useAxiosPublic';
// import Swal from 'sweetalert2';
import Comments from '../components/Comments';
import { useState } from 'react';
import Swal from 'sweetalert2';
import StartSurvey from './DashBoard/QUE/QUE';
import useUser from '../Hooks/useUser';

const SurveyDetails = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState(false)
    const item = useLoaderData()
    const [users] = useUser()
    // console.log(item)
    const axiosPublic = useAxiosPublic()
    const { user, loading } = useAuth()
    const { id } = useParams()

    const [likesCount, setLikesCount] = useState(0);

    const handleLikeClick = async (id) => {
        setLikesCount((likesCount) => likesCount + 1);
        try {
            const info = {
                userId: user?.userId, // Assuming you have a userId in your user object
                userName: user?.displayName,
                userEmail: user?.email,
                // item,
                likesCount
            };

            // Send the PUT request to update likes count
            const res = await axiosPublic.put(`/api/v1/survey/${id}`, info);

            // Update the state by directly incrementing the count

            // Log the response data
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };
    // console.log(likesCount)
    const handleCreateSurvey = async (event) => {
        event.preventDefault();
        const form = event.target;

        const createSurvey = {
            name: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
            description: form.description.value,
        };
        const res = await axiosPublic.post('/comments', createSurvey)
        console.log(res.data)
    };

    const handleReport = async (event) => {
        event.preventDefault();
        const form = event.target;

        const createSurvey = {
            name: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
            description: form.description.value,
        };
        const res = await axiosPublic.post('/reports', createSurvey)
        if (res.data.insertedId) {
            Swal.fire('report added success fully')
        }
    }



    if (loading) {
        return ('Loading...')
    }

    return (
        <div>
            <Container>
                <div className='bg-slate-100 w-full my-12 full md:w-2/3 mx-auto p-5'>

                    <div className='flex-col space-y-2   rounded-md'>
                        <h2 className="text-xl font-semibold "><span className='mr-2 text-black border-b-2 border-red-500 font-bold text-xl'>Category:</span>
                            {item?.category}</h2>
                        <p><span className='mr-2 text-black border-b-2 border-red-500 font-bold text-xl'>Description:</span> {item?.description}</p>

                        <h2 className="text-xl"><span className='mr-2 text-black border-b-2 border-red-500 font-bold text-xl'>Title:</span> {item?.surveyTitle}</h2>


                    </div>


                    <div className="flex justify-center items-center gap-x-6 text-2xl mt-4">
                        <div onClick={() => handleLikeClick(id)} className="flex items-center">
                            <AiFillLike className='text-red-500'></AiFillLike>
                            <p>{1}</p>
                        </div>

                        <div className="flex items-center">
                            <AiFillDislike className='text-black'></AiFillDislike >
                            <p>{1}</p>
                        </div>
                    </div>



                </div>
                <h1 onClick={() => setOpen(!open)} className="mb-12 w-full md:w-2/3 mx-auto text-2xl font-bold ">Click To See All Question Hare</h1>
                {open && <div className='mb-10 w-full md:w-2/3 mx-auto'>
                    <h1 className="text-2xl text-center font-semibold">Question</h1>
                    <StartSurvey item={item}></StartSurvey>
                </div>}

                <h1 className="w-full border border-red-500 mb-10 "></h1>
                {isOpen && <form onSubmit={handleReport} className='w-full md:w-2/3 mx-auto'>
                    <div className="my-5 border ">
                        <textarea
                            className="w-full h-14 rounded-sm resize-none p-2 outline-none"
                            name="description"
                            rows="10"
                            placeholder="Left your report hare"
                        ></textarea>
                    </div>


                    <div className="my-5">
                        <input
                            className="bg-violet-500 w-full rounded-sm p-2 text-white font-simibold text-xl cursor-pointer"
                            type="submit"
                            value="submit"
                        />
                    </div>
                </form>}
                <div onClick={() => setIsOpen(!isOpen)} className="text-purple-600 w-full mb-12 md:w-2/3 mx-auto"><button>Report us hare !</button></div>

                <form onSubmit={handleCreateSurvey} className='w-full md:w-2/3 mx-auto'>
                    <div className="my-5 border ">
                        <textarea
                            className="w-full h-14 rounded-sm resize-none p-2 outline-none"
                            name="description"
                            rows="10"
                            placeholder="Left your comments hare"
                        ></textarea>
                    </div>

                    {
                        users.filter(user => user?.role == 'pro-user' ? <div className="my-5">
                            <input
                                className="bg-[#79C23F] w-full rounded-sm p-2 text-white font-simibold text-xl cursor-pointer"
                                type="submit"
                                value="Comment"
                            />
                        </div> :
                            ""
                        )
                    }

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