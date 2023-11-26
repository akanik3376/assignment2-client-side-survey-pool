import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SurveyDetails = () => {
    const item = useLoaderData()
    console.log(item)
    return (
        <div>

        </div>
    );
};

export default SurveyDetails;