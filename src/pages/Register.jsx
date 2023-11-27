import Container from '../Share/Container';
import { FcGoogle } from 'react-icons/fc'

import registerImg from '../assets/login/sign-concept-illustration_114360-125.avif'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { IoEyeSharp } from 'react-icons/io5';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Register = () => {
    const [isShow, setIsShow] = useState(false)
    const { createUser } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const HandelSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        // create user
        createUser(email, password)
            .then(res => {
                if (res) {
                    Swal.fire("User create success fully");
                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch(err => console.log(err))

    }

    return (
        <Container>
            <div className='mb-8 text-center'>
                <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                <p className='text-sm text-gray-400'>Welcome to my site</p>
            </div>
            <div className="flex flex-col md:flex-row justify-around">
                <div className='w-full md:w-2/4'>
                    <img className='object-cover' src={registerImg} alt="" />
                </div>
                <div>
                    <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>

                        <form onSubmit={HandelSubmit}
                            noValidate=''
                            action=''
                            className='space-y-6 ng-untouched ng-pristine ng-valid'
                        >
                            <div className='space-y-4'>
                                <div>
                                    <label htmlFor='email' className='block mb-2 text-sm'>
                                        Name
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        placeholder='Enter Your Name Here'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                                {/* <div>
                                    <label htmlFor='image' className='block mb-2 text-sm'>
                                        Select Image:
                                    </label>
                                    <input
                                        required
                                        type='file'
                                        id='image'
                                        name='image'
                                        accept='image/*'
                                    />
                                </div> */}
                                <div>
                                    <label htmlFor='email' className='block mb-2 text-sm'>
                                        Email address
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        required
                                        placeholder='Enter Your Email Here'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>

                                <div>
                                    <div className='flex justify-between'>
                                        <label htmlFor='password' className='text-sm mb-2'>
                                            Password
                                        </label>
                                    </div>
                                    <input
                                        type={isShow ? 'text' : 'password'}
                                        name='password'
                                        autoComplete='current-password'
                                        id='password'
                                        required
                                        placeholder='*******'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 relative'

                                    />
                                    <IoEyeSharp onClick={() => setIsShow(!isShow)}
                                        className='-mt-7 ml-60 absolute text-gray-600 '></IoEyeSharp>
                                </div>
                            </div>

                            <div>
                                <button
                                    type='submit'
                                    className='bg-rose-500 w-full rounded-md font-semibold py-3 text-white'
                                >
                                    Sing Up
                                </button>
                            </div>
                        </form>
                        <div className='flex items-center pt-4 space-x-1'>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            <p className='px-3 text-sm dark:text-gray-400'>
                                Signup with social accounts
                            </p>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        </div>
                        <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                            <FcGoogle size={32} />

                            <p>Continue with Google</p>
                        </div>
                        <p className='px-6 text-sm text-center text-gray-400'>
                            Already have an account?{' '}
                            <Link
                                to='/login'
                                className='hover:underline hover:text-rose-500 text-gray-600'
                            >
                                Login
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Register;