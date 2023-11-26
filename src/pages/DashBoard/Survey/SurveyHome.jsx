import React from 'react';
import useSurvey from '../../../Hooks/useSurvey';
import { Container } from 'postcss';
import SurveyCart from '../../../components/SurveyCart/SurveyCart';
import { Link } from 'react-router-dom';

const SurveyHome = () => {
    const [survey, loading] = useSurvey()
    // console.log(survey)

    return (
        <div>
            <h1 className="text-3xl font-semibold text-center my-5 border-b-2 border-blue-500 w-full md:w-1/5 mx-auto">Our Survey </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                {survey?.map(item => <div>

                    <div className='flex-col space-y-2  rounded-md bg-blue-400 p-4'>
                        <h2 className="text-xl font-semibold"><span className='border-b-2 border-red-500 font-bold text-xl'>Category:</span>
                            {item?.category}</h2>
                        <p><span className='border-b-2 border-red-500 font-bold text-xl'>Description:</span> {item?.description}</p>

                        <h2 className="text-xl"><span className='border-b-2 border-red-500 font-bold text-xl'>Title:</span> {item?.surveyTitle}</h2>

                        <h2 className="text-xl mb-5"><span className='border-b-2 border-black font-bold text-xl'>Question:</span> {item?.question1}</h2>
                        <div>
                            <Link to={`survey-home/survey/update/${item?._id}`}><button className='btn bg-white mt-4'>Update</button></Link>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default SurveyHome;