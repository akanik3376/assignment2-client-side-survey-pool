import React from 'react';
import Container from '../Share/Container';
import { Helmet } from 'react-helmet-async';
import Hero from '../Share/Hero';
import contact from '../assets/images/contact-register-feedback-support-help-concept_53876-124243.jpg'
import { FaPlane, FaPhoneAlt } from 'react-icons/fa';
import { TfiEmail } from "react-icons/tfi";
import Form from '../components/ContactUs/Form';

const ContactUs = () => {
    return (
        <div>
            <Helmet> <title>Polling-Survey | Contact</title></Helmet>
            <Container>
                <div className="my-12">
                    <Hero img={contact} title='Contact Us'></Hero>
                </div>
                <div className="my-12 grid grid-cols-1 md:grid-cols-4 gap-7 text-[#f78da7] bg-gray-200 p-10">
                    <div className='flex flex-col text-center justify-center items-center gap-4'>
                        <FaPlane className='text-5xl'></FaPlane>
                        <div><h1 className='text-2xl font-semibold'>Where We Are</h1><p className='text-xl font-medium mt-2'>Santo Claro, Selo</p></div>
                    </div>

                    {/* Phone */}
                    <div className='flex flex-col  justify-center text-center md:col-span-2 items-center gap-4'>
                        <FaPhoneAlt className='text-5xl'></FaPhoneAlt>
                        <div><h1 className='text-2xl font-semibold'>What’s The Phone Number</h1><p className='text-xl font-medium mt-2'>0-8-000-000-2</p></div>
                    </div>

                    {/* message */}
                    <div className='flex flex-col text-center justify-center items-center gap-4'>
                        <TfiEmail className='text-5xl'></TfiEmail>
                        <div><h1 className='text-2xl font-semibold'>Email</h1><p className='text-xl font-medium mt-2'>Yourgreat@email.com</p></div>
                    </div>
                </div>

                <Form />
            </Container>
        </div>
    );
};

export default ContactUs;