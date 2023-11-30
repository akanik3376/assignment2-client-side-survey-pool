/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const RecentSurveyCard = ({ item }) => {
    const { surveyTitle, _id, category, likesCount } = item || {};
    // console.log(item)
    return (
        <div>
            <Link to={`/survey/details/${_id}`} className="flex flex-col min-h-full">
                <div className="bg-[#f7f7f7] p-8 rounded flex flex-col justify-between h-full">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-[#c4739e]">Title: {surveyTitle}</h2>

                        <h2 className="text-2xl font-bold text-[#76757a]"><span className="text-red-500" >Category:</span> {category}</h2>


                    </div>

                    <div className="flex justify-between" >
                        <p className="font-bold text-[#84ae7f]">Total Voted: 0</p>

                        <p className="font-bold text-blue-500">Total Like:{likesCount}</p>
                    </div>

                </div>
            </Link>
        </div>
    );
};

export default RecentSurveyCard;