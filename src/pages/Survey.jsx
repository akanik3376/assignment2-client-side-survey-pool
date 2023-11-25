import React from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useSurvey from '../Hooks/useSurvey';
import { Helmet } from 'react-helmet';
import Container from '../Share/Container';

const Survey = () => {

    const [survey, loading] = useSurvey()
    console.log(survey)
    if (loading) {
        return ("loading...")
    }
    const Education = survey?.filter(item => item.category === 'Education')

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

            </Container>
        </div>
    );
};

export default Survey;