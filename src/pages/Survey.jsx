import React from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useSurvey from '../Hooks/useSurvey';
import { Helmet } from 'react-helmet';
import Container from '../Share/Container';
import SurveyCart from '../components/SurveyCart/SurveyCart';

const Survey = () => {

    const [survey, loading] = useSurvey()
    // console.log(survey)
    if (loading) {
        return ("loading...")
    }
    // const Education = survey?.filter(item => item.category === 'Education')

    // const Healt = survey?.filter(item => item.category === 'Health-Care')
    // // console.log(pizza)
    // const Ecommerce = survey?.filter(item => item.category === 'Ecommerce')
    // const Human = survey?.filter(item => item.category === 'Human-Resources')
    // const Customers = survey?.filter(item => item.category === 'Customers')
    // const Market = survey?.filter(item => item.category === 'Market-Research')

    return (
        <div>
            <Helmet>
                <title>Polling-Survey| survey</title>
            </Helmet>

            <Container>
                <h1 className="text-3xl font-semibold text-center my-5 border-b-2 border-blue-500 w-full md:w-1/5 mx-auto">Our Survey </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                    {survey?.map(item => <SurveyCart key={item._id} item={item}></SurveyCart>)}
                </div>
            </Container>
        </div>
    );
};

export default Survey;