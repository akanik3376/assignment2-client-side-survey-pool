/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

// import surveyImg from '../../assets/images/online-survey-tablet_3446-296.avif';

const SurveyCart = ({ item }) => {
    // console.log(item)
    const { _id, category, surveyTitle, likesCount, disLike } = item || {}
    console.log(item)
    return (



        <Link to={`/survey/details/${_id}`} className="flex flex-col min-h-full">
            <div className="bg-[#f7f7f7] p-8 rounded flex flex-col justify-between h-full">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-[#c4739e]">Title: {surveyTitle}</h2>

                    <h2 className="text-2xl font-bold text-[#76757a]"><span className="text-red-500" >Category:</span> {category}</h2>


                </div>

                <div className="flex justify-between" >

                    <p className="font-bold text-blue-500">Total Like: {likesCount}</p>
                    <p className="font-bold text-blue-500">Dis Like:{disLike}</p>

                </div>

            </div>
        </Link>



    );
};

export default SurveyCart;