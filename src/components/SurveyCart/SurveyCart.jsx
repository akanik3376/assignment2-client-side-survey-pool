import Container from 'postcss/lib/container';
import React from 'react';
import { AiFillDislike, AiFillLike, AiOutlineLike } from "react-icons/ai";
import { Link } from 'react-router-dom';

// import surveyImg from '../../assets/images/online-survey-tablet_3446-296.avif';

const SurveyCart = ({ item }) => {
    // console.log(item)
    const { _id, category, date, description, question1, question2, question3, question4, question5, surveyTitle } = item || {}

    return (

        <div className=' bg-blue-300 p-5'>
            <Link to={`/survey/details/${_id}`}>
                <div className='flex-col space-y-2  rounded-md'>
                    <h2 className="text-xl font-semibold"><span className='border-b-2 border-red-500 font-bold text-xl'>Category:</span>
                        {category}</h2>
                    <p><span className='border-b-2 border-red-500 font-bold text-xl'>Description:</span> {description}</p>

                    <h2 className="text-xl"><span className='border-b-2 border-red-500 font-bold text-xl'>Title:</span> {surveyTitle}</h2>

                    {question1 && <h2 className="text-xl mb-5"><span className='border-b-2 border-black font-bold text-xl'>Question:</span> {question1}</h2>}


                    {/* <h2 className="text-xl"><span className='border-b-2 border-black font-bold text-xl'>Question:</span> {question2}</h2>

            <h2 className="text-xl"><span className='border-b-2 border-black font-bold text-xl'>Question:</span> {question3}</h2>

            <h2 className="text-xl"><span className='border-b-2 border-black font-bold text-xl'>Question:</span> {question4}</h2>

            <h2 className="text-xl"><span className='border-b-2 border-black font-bold text-xl'>Question:</span> {question5}</h2> */}

                </div>
            </Link>

            <div className="flex gap-x-6 text-2xl mt-4">
                <div className="flex items-center">
                    <AiFillLike className='text-red-500'></AiFillLike>
                    <p>{1}</p>
                </div>

                <div className="flex items-center">
                    <AiFillDislike className='text-black'></AiFillDislike >
                    <p>{1}</p>
                </div>
            </div>
        </div>

    );
};

export default SurveyCart;