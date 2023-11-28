import { useQuery } from '@tanstack/react-query';

import { Helmet } from 'react-helmet';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
// import { MdDelete } from "react-icons/md";
// import { BiSolidUser } from "react-icons/bi";
import useUser from '../../../Hooks/useUser';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaUserEdit } from 'react-icons/fa';
import { GrUserAdmin } from 'react-icons/gr';
import DataTable from "react-data-table-component";


const ManageUsers = () => {
    const [selectedRole, setSelectedRole] = useState('')
    const axiosPublic = useAxiosPublic()
    const [user] = useUser()
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
    const HandelDeleteUser = row => {
        console.log(row)
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
                axiosPublic.delete(`/users/${row}`)
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

    // Step 3: Filter users based on the selected role
    const filteredUsers = user.filter(user => {
        if (selectedRole === '') {
            return true; // Display all users if no role is selected
        } else {
            return user.role === selectedRole;
        }
    });

    const columns = [
        {
            name: "No",
            selector: (row, index) => index + 1
        },
        {
            name: "Name",
            selector: (row) => row.name
        },
        {
            name: "Email",
            selector: (row) => row.email
        },
        {
            name: "User",
            selector: (row) => row.role === 'user' ? 'user' : ''
        },
        {
            name: "Pro User",
            selector: (row) => row.role === 'pro-user' ? 'pro-user' : ''
        },
        {
            name: "Admin Role",
            cell: (row) => {
                return row.role === "admin" ? 'Admin'
                    : (
                        <button onClick={() => HandelMakeAdmin(row._id)} className=" text-xl text-[#5ae4a7]  flex ">
                            <GrUserAdmin />
                        </button>
                    )
            }


        },
        {
            name: "Surveyor Role",
            cell: (row) => {
                return row.role === "surveyor" ? 'Surveyor' : (
                    <button onClick={() => HandelMakeSavior(row._id)} className=" text-xl text-[#2a2a2a]  flex ">
                        <FaUserEdit />
                    </button>
                )
            }

        },
        {
            name: "Action",
            cell: (row) => (
                <button onClick={() => HandelDeleteUser(row._id)} className="bg-[#ed5e68] px-3 py-1 rounded text-white flex items-center gap-1">
                    <AiFillDelete className="text-lg" />  Delete
                </button>
            )
        }
    ]

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | ManageUser</title>
            </Helmet>

            <div>
                <button className="btn btn-ghost font-semibold text-3xl ">Total Users:{users.length}</button>
                <div className="px-6 mb-5 fob">
                    <label className="text-lg font-medium" htmlFor="roleFilter">Filter by Role: </label>
                    <select className=" text-base md:text-lg"
                        id="roleFilter"
                        onChange={(e) => setSelectedRole(e.target.value)}
                        value={selectedRole}
                    >
                        <option value="">All</option>
                        <option value="user">User</option>
                        <option value="pro-user">Pro User</option>
                        <option value="admin">Admin</option>
                        <option value="surveyor">Surveyor</option>
                    </select>
                </div>
                {/* table */}
                <div className="my-10 px-6" >
                    <DataTable
                        columns={columns}
                        data={filteredUsers}
                        pagination
                        highlightOnHover
                        responsive
                    />
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;