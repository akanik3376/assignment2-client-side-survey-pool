import { Helmet } from 'react-helmet';
import useSurvey from '../../../Hooks/useSurvey';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import Hero from '../../../Share/Hero';
import img from './../../../assets/images/modern-technology-concept_23-2147505141.jpg'

const AdminHome = () => {

    const [survey, refetch] = useSurvey()
    const axiosPublic = useAxiosPublic()
    const feedback = 'This survey is not to good, You need to approve more'

    const HandelApprove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You wont be able to post this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/api/v1/survey/${id}`, { status: 'Publish' })
                    .then(res => {
                        refetch()
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Yes!',
                                `${name}`,
                                'success'
                            )

                        }
                    })
            }
        })
    }

    const HandelUnpublish = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You wont be able to unpublished this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/api/v1/survey/${id}`, { status: 'unpublish', feedback })
                    .then(res => {


                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Unpublished!',
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
            <Helmet>
                <title>Bistro Boss | AdminHome</title>
            </Helmet>
            <Hero img={img} title='Survey Management' subTitle='Publish And Unpublished post management'></Hero>

            <div>

                <div className="overflow-x-auto mt-4">
                    <table className="table w-full">
                        <thead className="bg-yellow-500 ">

                            <tr >

                                <th></th>
                                <th>Category</th>
                                <th>Title</th>


                                <th>Publish</th>
                                <th>unpublish</th>


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

                                        <button onClick={() => HandelApprove(user._id)}
                                            className={`${user.status == 'Publish' ? 'btn ' : "btn bg-green-500"}`}>Publish</button>

                                    </td>
                                    <td>

                                        <button onClick={() => HandelUnpublish(user._id)}
                                            className={`${user.status == 'unpublish' ? 'btn ' : "btn bg-red-600"}`}>Unpublished</button>

                                    </td>


                                </tr>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;