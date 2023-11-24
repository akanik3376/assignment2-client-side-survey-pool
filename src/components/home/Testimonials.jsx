import React, { useEffect, useState } from 'react';

const Testimonials = () => {

    const [comments, setComments] = useState()

    useEffect(() => {
        fetch('/avarter.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div className='my-16'>
            Testimonials
        </div>
    );
};

export default Testimonials;