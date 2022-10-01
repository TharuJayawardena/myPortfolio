// @flow
import * as React from 'react';
import './testimonials.css'
import AVATAR1 from '../../assest/Avatar1.jpg'
import AVATAR2 from '../../assest/Avatar2.jpg'
import AVATAR3 from '../../assest/Avatar3.png'
import AVATAR4 from '../../assest/Avatar4.jpg'


import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {

    const data = [
        {
            avatar: AVATAR1,
            name: 'Shehani Smith',
            review: 'Portfolio deep dive with observations and recommendations to better match the clients’ desired outcomes.\n' +
                '                            All too often portfolios are built and rarely revisited for suitability and changes in ones’ situation.\n' +
                '                            This often presents less than advantageous results that are out of alignment with the clients’ needs and goals.'
        },
        {
            avatar: AVATAR2,
            name: 'Sheron Smith',
            review: 'Portfolio deep dive with observations and recommendations to better match the clients’ desired outcomes.\n' +
                '                            All too often portfolios are built and rarely revisited for suitability and changes in ones’ situation.\n' +
                '                            This often presents less than advantageous results that are out of alignment with the clients’ needs and goals.'
        },
        {
            avatar: AVATAR3,
            name: 'Pahasara Smith',
            review: 'Portfolio deep dive with observations and recommendations to better match the clients’ desired outcomes.\n' +
                '                            All too often portfolios are built and rarely revisited for suitability and changes in ones’ situation.\n' +
                '                            This often presents less than advantageous results that are out of alignment with the clients’ needs and goals.'
        },
        {
            avatar: AVATAR4,
            name: 'Maduwanthi Smith',
            review: 'Portfolio deep dive with observations and recommendations to better match the clients’ desired outcomes.\n' +
                '                            All too often portfolios are built and rarely revisited for suitability and changes in ones’ situation.\n' +
                '                            This often presents less than advantageous results that are out of alignment with the clients’ needs and goals.'
        },

    ]
    return (
        <section id='testimonials'>
           <h5>Review from client5</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_container"
                // install Swiper modules
                    modules={[ Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                {
                    data.map(({avatar,name,review},index) => {
                        return(
                            <SwiperSlide key={index}className="testimonials">
                                <div className="client_avatar">
                                    <img src={avatar}/>
                                </div>
                                <h5 className="client_name">{name}</h5>
                                <small className="client_review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>
    );
};
export default Testimonials