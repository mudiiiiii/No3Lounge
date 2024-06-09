import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slidethree from '../../assets/images/background/bigdd.jpg';
import Slidetwo from '../../assets/images/background/bigdd.jpg';
import Slideone from '../../assets/images/background/bigdd.jpg';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';

import Reservations from '../Reservation/Main';
import Applications from '../Application/Main';
import Feedbacks from '../Feedback/Main';

SwiperCore.use([Navigation]);

function Banner() {
    const [activeComponent, setActiveComponent] = useState('');

    return (
        <div>
            <Swiper
                className="banner-section banner-section-coustm"
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            >
                <div className="banner-container">
                    <div className="banner-slider">
                        <div className="swiper-wrapper">
                            {[Slideone, Slidetwo, Slidethree].map((image, index) => (
                                <SwiperSlide key={index} className="swiper-slide slide-item img-fluid" style={{ backgroundImage: `url(${image})` }}>
                                    <div className="auto-container">
                                        <div className="content-box">
                                            <div className="content">
                                                <div className="clearfix">
                                                    <div className="inner">
                                                        <div className="subtitle">
                                                            <span>Welcome Admin</span>
                                                        </div>
                                                        <div className="pattern-image">
                                                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                                        </div>
                                                        <div className="text">View All Data Below, Scroll after click</div>
                                                        <div className="links-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                            <div className="link">
                                                                <button onClick={() => setActiveComponent('Applications')} className="theme-btn btn-style-two clearfix">
                                                                    View Applications
                                                                </button>
                                                                <button onClick={() => setActiveComponent('Reservations')} className="theme-btn btn-style-two clearfix">
                                                                    View Reservations
                                                                </button>
                                                                <button onClick={() => setActiveComponent('Feedbacks')} className="theme-btn btn-style-two clearfix">
                                                                    View Feedbacks
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </div>
                </div>
            </Swiper>
            <div>
                {activeComponent === 'Applications' && <Applications />}
                {activeComponent === 'Reservations' && <Reservations />}
                {activeComponent === 'Feedbacks' && <Feedbacks />}
            </div>
        </div>
    );
}

export default Banner;
