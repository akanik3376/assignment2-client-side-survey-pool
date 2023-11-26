import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const CreateSurvey = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const [questionCount, setQuestionCount] = useState(2); // Initial number of questions

    const handleCreateSurvey = async (event) => {
        event.preventDefault();
        const form = event.target;

        const createSurvey = {
            name: user?.displayName,
            image: user?.photoURL,
            email: form.email.value,
            surveyTitle: form.surveyTitle.value,
            category: form.category.value,
            date: form.date.value,
            description: form.description.value,
        };


        for (let i = 1; i <= questionCount; i++) {
            createSurvey[`question${i}`] = form[`question${i}`].value;
        }


        // console.log(createSurvey);

        const res = await axiosPublic.post("/api/v1/survey", createSurvey)
        console.log(res.data);
        if (res.data.insertedId) {
            Swal.fire('Survey successfully created!')
        }


    };



    //   add question 
    const handleAddQuestion = () => {
        setQuestionCount((prevCount) => {
            if (prevCount < 5) {
                return prevCount + 1;
            } else {
                // You can add a message or handle the case when prevCount is 7 here
                console.log("Maximum question count reached (7).");
                return prevCount;
            }
        });
    };


    //   delete question 
    const handleDeleteQuestion = (questionIndex) => {
        setQuestionCount((prevCount) => prevCount - 1);

    };


    return (
        <div className="my-10 p-6">
            <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-[#1a202c]">
                    CREATE <span className="text-[#79C23F]">SURVEY</span>
                </h2>

                <div className="bg-gray-200 p-6 my-5 rounded-md">
                    <form onSubmit={handleCreateSurvey}>
                        <div className="flex flex-col md:flex-row gap-5 my-5">
                            <div className="flex-1">
                                <input
                                    className="bg-white p-2 rounded-sm w-full outline-none"
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    defaultValue={user?.email}
                                />
                            </div>
                            <div className="flex-1">
                                <input
                                    className="bg-white p-2 rounded-sm w-full outline-none"
                                    type="text"
                                    name="surveyTitle"
                                    placeholder="Survey Title" required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-5 my-5">
                            <div className="flex-1">
                                <select className="bg-white w-full p-2 rounded-sm outline-none" name="category" required>
                                    <option value="" >Select Category</option>
                                    <option value="Education">Education</option>
                                    <option value="Health-Care">Health Care</option>
                                    <option value="Ecommerce">Ecommerce</option>
                                    <option value="Human-Resources">Human Resources</option>
                                    <option value="Customers">Customers</option>
                                    <option value="Market-Research">Market Research</option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <input className="bg-white w-full p-2 rounded-sm outline-none" type="date" name="date" />
                            </div>
                        </div>

                        <div className="my-5">
                            <textarea
                                className="w-full rounded-sm resize-none p-2 outline-none"
                                name="description"
                                rows="10"
                                placeholder="Description"
                            ></textarea>
                        </div>

                        {[...Array(questionCount)].map((_, index) => (
                            <div className="my-5 " key={index}>
                                <p className="text-[2a2a2a] font-bold">Question {index + 1}:</p>
                                <input
                                    className="w-full rounded-sm p-2 outline-none "
                                    name={`question${index + 1}`}
                                    placeholder={`Enter your question ${index + 1} ?`}
                                />

                                {/* delete */}
                                <button className="text-red-500" type="button" onClick={() => handleDeleteQuestion(index)}>
                                    Delete Question
                                </button>
                            </div>
                        ))}

                        <button className="bg-[#79C23F] px-3 py-2 text-lg" type="button" onClick={handleAddQuestion}>
                            Add More Question
                        </button>

                        <div className="my-5">
                            <input
                                className="bg-[#79C23F] w-full rounded-sm p-2 text-white font-simibold text-xl cursor-pointer"
                                type="submit"
                                value="Create"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default CreateSurvey