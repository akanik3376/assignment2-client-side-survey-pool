
import { Helmet } from 'react-helmet';
import Container from '../Share/Container';
import SurveyCart from '../components/SurveyCart/SurveyCart';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const Survey = () => {
    const axiosPublic = useAxiosPublic()
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');

    const { data: survey = [] } = useQuery({
        queryKey: ['survey', selectedCategory, selectedTitle], // Include both category and title in the query key
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/v1/survey?category=${selectedCategory}&title=${selectedTitle}`); // Include both parameters in the API call
            return res.data;
        },
    });

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleTitleChange = (title) => {
        setSelectedTitle(title);
    };

    const filteredSurveys = survey.filter((item) => {
        const categoryMatch = selectedCategory ? item.category === selectedCategory : true;
        const titleMatch = selectedTitle ? item.title.toLowerCase().startsWith(selectedTitle.toLowerCase()) : true;
        return categoryMatch && titleMatch;
    });
    return (
        <div>
            <Helmet>
                <title>Polling-Survey| survey</title>
            </Helmet>

            <div className='my-5 flex gap-10'>


                <Container>
                    <div>
                        <label className='text-lg font-bold' htmlFor="category">Select Category: </label>
                        <select

                            id="category"
                            name="category"
                            value={selectedCategory}
                            onChange={(e) => handleCategoryChange(e.target.value)}
                        >
                            <option value="" >Select Category</option>
                            <option value="Education">Education</option>
                            <option value="Health-Care">Health Care</option>
                            <option value="Ecommerce">Ecommerce</option>
                            <option value="Human-Resources">Human Resources</option>
                            <option value="Customers">Customers</option>
                            <option value="Market-Research">Market Research</option>
                            {/* Add more categories as needed */}
                        </select>
                    </div>

                    {/* title */}
                    <div>
                        <label className='text-lg font-bold' htmlFor="title">Enter Title: </label>
                        <input
                            className='border-[1px] border-gray-300 outline-[#5ae4a7]'
                            type="text"
                            id="title"
                            name="title"
                            value={selectedTitle}
                            onChange={(e) => handleTitleChange(e.target.value)}
                        />
                    </div>
                </Container>
            </div>
            <Container>
                <h1 className="text-3xl font-semibold text-center my-5 border-b-2 border-blue-500 w-full md:w-1/5 mx-auto">Our Survey </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
                    {filteredSurveys?.map(item => item?.status === 'Publish' && <SurveyCart key={item._id} item={item}></SurveyCart>)}
                </div>
            </Container>
        </div>
    );
};

export default Survey;