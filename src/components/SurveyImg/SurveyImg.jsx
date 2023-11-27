import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const SurveyImg = () => {
    const [team, setTeam] = useState()
    useState(() => {
        fetch('.././../../public/avarter.json')
            .then(res => res.json())
            .then(data => {

                setTeam(data)
            })
    }, [])
    return (



        <Swiper
            effect={'flip'}
            grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
        >

            {team?.map(item => <SwiperSlide key={item.name}>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-64">
                        <img className='w-full object-cover rounded-lg' src={item?.image} />
                    </div>
                    <h3 className='text-2xl font-semibold mt-3'>{item.name}</h3>
                    <h3 className='text-2xl font-semibold mt-3'>{item.position}</h3>
                </div>
            </SwiperSlide>)}

        </Swiper>



    );
};

export default SurveyImg;