import Container from '../Share/Container';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { FaEyeSlash } from 'react-icons/fa'
// import { IoEyeSharp } from "react-icons/io5";
import loginImg from '../assets/login/access-control-system-abstract-concept_335657-3180.avif'
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Login = () => {

    const [isShow, setIsShow] = useState(false)
    const { googleLogin, LoginUser } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    // login with google
    const HandelGoogleLogin = () => {
        googleLogin()
            .then(res => {
                if (res) {
                    Swal.fire("User login success fully");
                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch(err => console.log(err))
    }

    // login with email and password
    const HandelSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        // login user
        LoginUser(email, password)
            .then(res => {
                if (res) {
                    Swal.fire("User login success fully");
                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch(err => console.log(err))

    }


    return (
        <Container>

            <div className='mb-8 text-center'>
                <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                <p className='text-sm text-gray-400'>
                    Sign in to access your account
                </p>
            </div>

            <div className='flex flex-col md:flex-row justify-around'>
                <div className='w-full md:w-2/4'>
                    <img className='object-cover' src={loginImg} alt="" />
                </div>

                <div >
                    <div className='flex flex-col  p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>

                        <form onSubmit={HandelSubmit}
                            noValidate=''
                            action=''
                            className='space-y-6 ng-untouched ng-pristine ng-valid'
                        >
                            <div className='space-y-4'>
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
                                    <FaEyeSlash onClick={() => setIsShow(!isShow)}
                                        className='-mt-7 ml-60 absolute text-gray-600 '></FaEyeSlash>
                                </div>


                            </div>


                            <div>
                                <button
                                    type='submit'
                                    className='bg-rose-500 w-full rounded-md py-3 font-semibold text-white'
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className='space-y-1'>
                            <button className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
                                Forgot password?
                            </button>
                        </div>
                        <div className='flex items-center pt-4 space-x-1'>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            <p className='px-3 text-sm dark:text-gray-400'>
                                Login with social accounts
                            </p>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        </div>
                        <div onClick={HandelGoogleLogin}
                            className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                            <FcGoogle size={32} />

                            <p>Continue with Google</p>
                        </div>
                        <p className='px-6 text-sm text-center text-gray-400'>
                            Don&apos;t have an account yet?{' '}
                            <Link
                                to='/register'
                                className='hover:underline hover:text-rose-500 text-gray-600'
                            >
                                Register
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;