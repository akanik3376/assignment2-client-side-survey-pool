import React from 'react';
import errorImage from '../assets/images/night-sky-full-twinkling-stars_1048-14690.avif'
import Container from '../Share/Container';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Container>
            <div className='w-full object-cover ' style={{ backgroundImage: `url(${errorImage})` }}>
                <div className="flex flex-col items-center justify-center min-h-[99vh]">
                    <h1 className="text-5xl text-white font-bold">404</h1>
                    <h1 className="text-3xl mt-7 text-center text-white font-bold">

                        The Page You Are Looking Is <br />
                        <span className='text-red-600'>Not Available Or Has Been Removed</span>

                    </h1>
                    <p className='text-xl mt-7 text-gray-700'> Try going to Home Page by using the button below.</p>

                    <Link to='/'>
                        <button className='mt-7 btn bg-pink-700 text-white font-semibold'>Go to Home Page</button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};

export default ErrorPage;
