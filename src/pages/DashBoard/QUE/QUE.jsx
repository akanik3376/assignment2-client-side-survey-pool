import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import swal from "sweetalert";

const StartSurvey = () => {
    const axiosPublic = useAxiosPublic()
    const surveyDetails = useLoaderData()
    // console.log(surveyDetails);
    const { question1, question2, question3 } = surveyDetails || {}


    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.target
        // question 
        const question1 = form.question1.value
        // const question2 = form.question2.value
        // const question3 = form.question3.value
        // const question4 = form.question4.value
        // const question5 = form.question5.value
        // answer
        const answer1 = form.answer1.value
        const answer2 = form.answer2.value
        const answer3 = form.answer3.value
        // const answer4 = form.answer4.value
        // const answer5 = form.answer5.value

        const surveyQNA = {
            question1,
            answer1,
            question2,
            answer2,
            question3,
            answer3,
            // question4,
            // answer4,
            // question5,
            // answer5
        }
        const res = await axiosPublic.post('/user-vote', surveyQNA)
        if (res.data.insertedId) {
            swal('Your answer has been saved')
        }


    }

    return (
        <div>

            {/* Navbar */}



            <form onSubmit={handleSubmit}  >

                {/* question 1 */}
                <input
                    className="  text-2xl text-[#2a2a2a] font-bold outline-none" readOnly defaultValue={question1} name="question1" />

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



                {/* question 2 */}
                <input
                    className="  text-2xl text-[#2a2a2a] font-bold outline-none" readOnly defaultValue={question2} name="question2" />


                <div className="flex my-2">
                    <label className="mr-3">
                        <input type="radio" value="yes" name="answer2" />
                        Yes
                    </label>
                    <label>
                        <input type="radio" name="answer2" value="no" />
                        No
                    </label>
                </div>

                {/* question 3 */}
                <input
                    className="  text-2xl text-[#2a2a2a] font-bold outline-none" readOnly defaultValue={question3} name="question3" />


                <div className="flex my-2">
                    <label className="mr-3">
                        <input type="radio" value="yes" name="answer3" />
                        Yes
                    </label>
                    <label>
                        <input type="radio" name="answer3" value="no" />
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