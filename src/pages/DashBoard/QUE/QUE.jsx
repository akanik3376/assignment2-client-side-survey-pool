import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import swal from "sweetalert";
import useAuth from "../../../Hooks/useAuth";

const StartSurvey = () => {
    const axiosPublic = useAxiosPublic()
    const surveyDetails = useLoaderData()
    const { user } = useAuth()
    // console.log(user);
    const { question1 } = surveyDetails || {}


    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.target

        // answer
        const answer1 = form.answer1.value


        const surveyQNA = {
            question1,
            answer1,
            time: new Date().toLocaleTimeString(),
            name: user?.displayName,
            email: user.email

        }

        const res = await axiosPublic.post('/user-vote', surveyQNA)
        if (res.data.insertedId) {
            swal('Your answer has been saved')
        }


    }

    return (
        <div className="mt-5">




            <form onSubmit={handleSubmit}  >

                {/* question 1 */}
                <h2
                    className="  text-xl text-[#2a2a2a] font-medium outline-none">{question1}
                </h2>
                <div className="flex my-2">
                    <label className="mr-3">
                        <input type="radio" value="yes" name="answer1" />
                        Yes
                    </label>
                    <label>
                        <input type="radio" name="answer1" value="no" />
                        No
                    </label>
                </div>

                {/* submit button */}
                <div className="my-5" >
                    <input className="bg-[#5ae4a7] text-lg font-bold px-4 py-2 rounded" type="submit" value="Submit" />
                </div>

            </form>
        </div>
    );
};

export default StartSurvey;