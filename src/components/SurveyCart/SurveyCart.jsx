/* eslint-disable react/prop-types */
import { AiFillDislike, AiFillLike, } from "react-icons/ai";
import { Link } from 'react-router-dom';

// import surveyImg from '../../assets/images/online-survey-tablet_3446-296.avif';

const SurveyCart = ({ item }) => {
    // console.log(item)
    const { _id, category, description, question1, question2, question3, surveyTitle, likesCount, disLike } = item || {}
    // console.log(item)
    return (

        <div>
            {
                item?.status === 'Publish' && <div className=' bg-blue-300 p-5 rounded-lg'>
                    <Link to={`/survey/details/${_id}`}>
                        <div className='flex-col space-y-2  rounded-md'>
                            <h2 className="text-xl font-semibold"><span className='border-b-2 border-red-500 font-bold text-xl'>Category:</span>
                                {category}</h2>
                            <p><span className='border-b-2 border-red-500 font-bold text-xl'>Description:</span> {description}</p>

                            <h2 className="text-xl"><span className='border-b-2 border-red-500 font-bold text-xl'>Title:</span> {surveyTitle}</h2>

                            <div>
                                <h2 className="text-sm mb-5"><span className=' border-b-2 border-black font-bold text-xl'>Question1:</span> {question1}</h2>
                                <h2 className="text-sm mb-5"><span className=' border-b-2 border-black font-bold text-xl'>Question2:</span> {question2}</h2>
                                <h2 className="text-sm mb-5"><span className=' border-b-2 border-black font-bold text-xl'>Question3:</span> {question3}</h2>
                            </div>

                        </div>
                    </Link>

                    <div className="flex gap-x-6 text-2xl mt-4">
                        <div className="flex items-center">
                            <AiFillLike className={`${likesCount > 0 && "text-green-900"}`}></AiFillLike>
                            <p>{likesCount}</p>
                        </div>

                        <div className="flex items-center">
                            <AiFillDislike className={`${likesCount > 0 && "text-red-500"}`}></AiFillDislike >
                            <p>{disLike}</p>
                        </div>
                    </div>


                </div>
            }
        </div>

    );
};

export default SurveyCart;