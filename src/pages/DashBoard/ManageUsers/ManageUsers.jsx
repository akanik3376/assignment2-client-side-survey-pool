import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { MdDelete } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";


const ManageUsers = () => {
    const axiosPublic = useAxiosPublic()
    // const [user] = useUser()
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get('/users');
                // console.log(res.data)
                return res.data;
            } catch (error) {
                console.error('Error fetching user data:', error);

            }
        },
    });
    if (isLoading) {
        return ('Loading...')
    }

    // make admin user
    const HandelMakeAdmin = user => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes !'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Role Updated!',
                                `${name}`,
                                'success'
                            )
                        }
                    })
            }
        })
    }
    // make admin user
    const HandelMakeSavior = user => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes !'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/users/surveyor/${user._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Role Updated!',
                                `${name}`,
                                'success'
                            )
                        }
                    })
            }
        })
    }


    //delete user
    const HandelDeleteUser = user => {
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
                axiosPublic.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
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
            <Helmet>
                <title>Bistro Boss | ManageUser</title>
            </Helmet>
            <div>
                <button className="btn btn-ghost font-semibold text-3xl">Total Users:{users.length}</button>

                {/* table */}
                <div className="overflow-x-auto mt-4">
                    <table className="table w-full">
                        <thead className="bg-yellow-500 ">

                            <tr >

                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin Role</th>
                                <th>Surveyor Role</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        {
                            users?.map((user, index) => <tbody key={user._id}>
                                {/* row 1 */}
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        {user?.name}
                                    </td>
                                    <td>
                                        {user?.email}

                                    </td>

                                    <td>
                                        {
                                            user.role === 'admin' ? 'admin' :
                                                <button onClick={() => HandelMakeAdmin(user)}
                                                    className="btn bg-yellow-500"><BiSolidUser></BiSolidUser></button>
                                        }
                                    </td>
                                    <td>
                                        {
                                            user.role === 'surveyor' ? 'surveyor' :
                                                <button onClick={() => HandelMakeSavior(user)}
                                                    className="btn bg-yellow-500">User</button>
                                        }
                                    </td>

                                    <th>
                                        <button onClick={() => HandelDeleteUser(user)}
                                            className="btn text-red-600 font-3xl">
                                            <MdDelete></MdDelete>
                                        </button>
                                    </th>
                                </tr>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;