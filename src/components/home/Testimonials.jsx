import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';


const Testimonials = () => {

    const [testimonials, setTestimonials] = useState()

    useEffect(() => {
        fetch('https://polling-survey-server.vercel.app/testimonial')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div className='my-16 bg-[#F3F3F3] '>
            <div className="p-10">
                <h1 className="text-5xl font-semibold w-2/4 m-4 mt-8  border-b-2 border-dark-03 p-2 mx-auto text-center text-rose-500">Our Testimonials</h1>
                <div className=''>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        {testimonials?.map(item => <SwiperSlide key={item._id}>
                            <div className='w-full md:w-3/5 mx-auto'>
                                <div className="mx-auto w-28">
                                    <img className='w-28 rounded-full h-28 object-cover' src={item?.avatar} alt="" />
                                </div>
                                <p >{item.testimonial}</p>
                                <div className="text-center">
                                    <h6 className='text-xl mt-4 font-semibold'>Name: {item?.customer?.name}</h6>
                                    <h6 className='text-xl mt-4 font-semibold'>position: {item?.customer?.position}</h6>
                                </div>
                            </div>
                        </SwiperSlide>)}

                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;