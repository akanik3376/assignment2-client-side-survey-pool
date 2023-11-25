import React from 'react';
import ContactUs from './ContactUs';
import Container from '../Share/Container';
import aboutUs from '../assets/images/top-view-business-people-formal-wear-stacking-hands-table_232070-6057.jpg';
import Hero from '../Share/Hero';
import SurveyImg from '../components/SurveyImg/SurveyImg';

const AboutUs = () => {
    return (

        <div className="my-12">
            <Container>
                <Hero img={aboutUs} title="About Us" subTitle='Welcome to Polling and Survey!' />

                <div className="text-center w-full md:w-2/3 mx-auto  mt-8">
                    <h3 className='text-3xl font-semibold mx-auto mt-8 mb-3 border-b-2  border-red-500 w-2/3 md:w-3/6'>Our Mission</h3>
                    <p>At Polling and Survey, we are passionate about briefly describe the main goal or mission of your survey project. Our mission is to state the broader purpose and impact you aim to achieve through surveys.</p>
                </div>

                <div className="text-center w-full md:w-2/3 mx-auto  mt-8">
                    <h3 className='text-3xl font-semibold mx-auto mt-8 mb-3 border-b-2  border-red-500 w-2/3 md:w-3/6'>Why Surveys?</h3>
                    <p>
                        Surveys are a vital tool in understanding [relevant industry or topic] and gathering valuable opinions from people like you. By participating in our surveys, you become an essential part of a community-driven effort to [explain the broader impact or change you hope to enact through the survey results].</p>
                </div>

                <div className='text-center'>
                    <h1 className="text-3xl font-semibold mx-auto my-8  border-b-2  border-red-500 w-2/3 md:w-2/6">Meet the Team</h1>

                    <div className="w-1/3 mx-auto">
                        <SurveyImg />
                    </div>
                </div>
                <h3 className="text-center font-semibold text-xl mt-8">Stay with us and give feedback </h3>
            </Container>


        </div>
    );
};

export default AboutUs;