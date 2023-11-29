import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useLoaderData, useParams } from "react-router-dom";
import Container from "../../Share/Container";
import swal from "sweetalert";
// import { useEffect, useState } from "react";
import useUser from "../../Hooks/useUser";


const CreateSurvey = () => {
    // const [survey, setSurvey] = useState()
    const axiosPublic = useAxiosPublic()
    const [users] = useUser()
    console.log(users)
    // const { user, isLoading } = useUser()
    const data = useLoaderData()
    // console.log(data)
    const { id } = useParams()


    const handleCreateSurvey = async (event) => {
        event.preventDefault();
        const form = event.target;

        const createSurvey = {
            email: data.email,
            surveyTitle: form.surveyTitle.value,
            category: form.category.value,
            date: form.date.value,
            description: form.description.value,
            question1: form.question1.value,

            disLike: form.disLike.value,
            like: form.like.value,

        };

        const createSurveyRes = await axiosPublic.patch(`/api/v1/survey/${id}`, createSurvey)
        // console.log(createSurveyRes.data);
        if (createSurveyRes.data.modifiedCount) {
            swal('Survey successfully Updated!')
        }


    };


    return (
        <Container>
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
                                        defaultValue={data.email}
                                        readOnly

                                    />
                                </div>
                                <div className="flex-1">
                                    <input
                                        className="bg-white p-2 rounded-sm w-full outline-none"
                                        type="text"
                                        name="surveyTitle"
                                        placeholder="Survey Title" required
                                        defaultValue={data.surveyTitle}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-5 my-5">
                                <div className="flex-1">
                                    <select defaultValue={data.category} className="bg-white w-full p-2 rounded-sm outline-none" name="category" required>
                                        <option value="" >Select Category</option>
                                        <option value="Education">Education</option>
                                        <option value="Health Care">Health Care</option>
                                        <option value="Ecommerce">Ecommerce</option>
                                        <option value="Human Resources">Human Resources</option>
                                        <option value="Customers">Customers</option>
                                        <option value="Market Research">Market Research</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <input className="bg-white w-full p-2 rounded-sm outline-none" type="date" name="date" required defaultValue={data.date} />
                                </div>
                            </div>

                            <div className="my-5">
                                <textarea
                                    className="w-full rounded-sm resize-none p-2 outline-none"
                                    name="description"
                                    rows="10"
                                    placeholder="Description"
                                    defaultValue={data.description}
                                ></textarea>
                            </div>

                            {/* question */}
                            <div className="space-y-2" >

                                <div>
                                    <p className="text-lg text-[#2a2a2a]" >Question 1:</p>
                                    <input className="bg-white w-full p-2 rounded-sm outline-none" type="text" name="question1" placeholder="Enter Your Question  ?" required defaultValue={data.question1} />
                                </div>
                            </div>


                            <div className="flex gap-4 justify-between">
                                <div className="my-5 ">
                                    <p className="text-[2a2a2a] font-bold">Like</p>
                                    <input
                                        className="w-full rounded-sm p-2 outline-none "
                                        name='like'
                                        placeholder='0'
                                        value={0}
                                        readOnly
                                    />
                                </div>
                                <div className="my-5 ">
                                    <p className="text-[2a2a2a] font-bold">Dis Like</p>
                                    <input
                                        className="w-full rounded-sm p-2 outline-none "
                                        name='disLike'
                                        placeholder='0'

                                        readOnly
                                        value={0}
                                    />
                                </div>
                            </div>

                            <div className="my-5">
                                <input
                                    className="bg-[#79C23F] w-full rounded-sm p-2 text-white font-simibold text-xl cursor-pointer"
                                    type="submit"
                                    value="Update Survey"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default CreateSurvey