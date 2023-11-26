import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

const Form = () => {
    return (
        <div className='bg-gray-200 p-10'>
            <h1 className="text-4xl font-semibold text-center">Contact Us</h1>
            <form className="w-full md:w-2/3 mx-auto mt-6">
                <div className="form-control">

                    <input type="text" placeholder="name" className="border-b-2 my-2 p-3" required />
                </div>
                <div className="form-control">

                    <input type="email" placeholder="email" className="border-b-2 my-2 p-3" required />
                </div>
                <div className="form-control">

                    <input type="number" placeholder="phone" className="border-b-2 my-2 p-3" required />

                </div>
                <div className="form-control">


                    <textarea className="textarea border-b-2" placeholder="message"></textarea>
                </div>

                <div className="form-control mt-6">
                    <button className="btn border-b-4 hover:text-white font-semibold hover:bg-[#f78da7] border-b-[#f78da7] ">Get in touch <FaLongArrowAltRight className='text-2xl'></FaLongArrowAltRight></button>
                </div>
            </form>
        </div>
    );
};

export default Form;