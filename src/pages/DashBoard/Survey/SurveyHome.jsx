import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useSurvey from '../../../Hooks/useSurvey';
import { Link } from 'react-router-dom';

const SurveyHome = () => {
    const [survey, refetch] = useSurvey()
    const axiosPublic = useAxiosPublic()

    const HandelDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/api/v1/survey/${id}`)
                    .then(res => {
                        refetch()
                        if (res.data.deletedCount > 0) {

                            Swal.fire(
                                'Deleted!',
                                `${name}`,
                                'success'
                            )

                        }
                    })
            }
        })

    }




    return (
        <div>
            <h1 className="text-3xl font-semibold text-center my-5 border-b-2 border-blue-500 w-full md:w-1/5 mx-auto">Our Survey </h1>
            <div className="overflow-x-auto mt-4">
                <table className="table w-full">
                    <thead className="bg-yellow-500 ">

                        <tr >

                            <th></th>
                            <th>Category</th>
                            <th>Title</th>
                            <th>Update</th>
                            <th>Delete</th>



                        </tr>
                    </thead>
                    {
                        survey?.map((user, index) => <tbody key={user._id}>
                            {/* row 1 */}
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    {user?.category}
                                </td>
                                <td>
                                    {user?.surveyTitle}

                                </td>

                                <td>

                                    <Link to={`/update/${user._id}`}>
                                        <button className="btn bg-yellow-500">Update</button>
                                    </Link>

                                </td>
                                <td>

                                    <button onClick={() => HandelDelete(user._id)}
                                        className="btn bg-yellow-500">Delete</button>

                                </td>



                            </tr>
                        </tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default SurveyHome;