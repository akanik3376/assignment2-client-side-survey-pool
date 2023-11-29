import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useUser from "../../../Hooks/useUser";


const CreateSurvey = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const [users] = useUser()
    console.log(users)
    let singleUser
    users?.forEach(item => {
        if (item?.email === user?.email) {
            singleUser = item
        }

        // console.log(singleUser)
    });

    const handleCreateSurvey = async (event) => {
        event.preventDefault();

        const form = event.target;

        const createSurvey = {
            surveyorEmail: singleUser?.email,
            surveyTitle: form.surveyTitle.value,
            category: form.category.value,
            date: form.date.value,
            description: form.description.value,
            question1: form.question1.value,

            likesCount: parseInt(form.like.value,),
            disLike: parseInt(form.disLike.value),
            time: new Date().toLocaleTimeString(),
        };


        if (singleUser.role == 'surveyor') {
            const res = await axiosPublic.post("/api/v1/survey", createSurvey)
            console.log(res.data);
            if (res.data.insertedId) {
                Swal.fire('Survey successfully created!')
            }
        }
        else {
            Swal.fire('You are not a surveyor!')
        }


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
                                    placeholder="Email" readOnly
                                    defaultValue={singleUser?.email}
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


                        <div className="my-5 ">
                            <p className="text-[2a2a2a] font-bold">Question 1:</p>
                            <input
                                className="w-full rounded-sm p-2 outline-none "
                                name='question1'
                                placeholder={`Enter your question 1 ?`}
                            />



                        </div>

                        <div className="flex gap-4 justify-between">
                            <div className="my-5 ">
                                <p className="text-[2a2a2a] font-bold">Like</p>
                                <input
                                    className="w-full rounded-sm p-2 outline-none "
                                    name='like'

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
                                    value={0}
                                    readOnly
                                />
                            </div>
                        </div>


                        <div className="my-5">
                            <input
                                className="bg-[#79C23F] w-full rounded-sm p-2 text-white font-simibold text-xl cursor-pointer"
                                type="submit"
                                value="Add Survey"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default CreateSurvey