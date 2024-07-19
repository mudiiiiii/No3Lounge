import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slidethree from '../../assets/images/03photos/banners/slidethree.jpg';
import Slidetwo from '../../assets/images/03photos/banners/slidetwo.jpg';
import Slideone from '../../assets/images/03photos/banners/slideone.jpg';
import Slidefour from '../../assets/images/03photos/banners/slidefour.jpg';
import Slidefive from '../../assets/images/03photos/banners/slidefive.jpg';
import pdfFile from '../../assets/pdf/Full Pdf.pdf';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation]);

const adjustTextColor = (bgColor) => {
    // Function to calculate the brightness of a color
    const getBrightness = (color) => {
        const rgb = color.match(/\d+/g);
        const brightness = Math.round(((parseInt(rgb[0]) * 299) +
                                      (parseInt(rgb[1]) * 587) +
                                      (parseInt(rgb[2]) * 114)) / 1000);
        return brightness;
    };

    const root = document.documentElement;
    const brightness = getBrightness(bgColor);
    if (brightness > 125) {
        root.style.setProperty('--dynamic-text-color', '#000'); // Set text color to black for light backgrounds
    } else {
        root.style.setProperty('--dynamic-text-color', '#fff'); // Set text color to white for dark backgrounds
    }
};

const Banner = () => {
    useEffect(() => {
        adjustTextColor('rgb(228, 197, 144)'); 
    }, []);

    return (
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
                        {[Slideone, Slidetwo, Slidethree, Slidefour, Slidefive].map((image, index) => (
                            <SwiperSlide key={index} className="swiper-slide slide-item img-fluid" style={{ backgroundImage: `url(${image})` }}>
                                <div className="auto-container">
                                    <div className="content-box">
                                        <div className="content">
                                            <div className="clearfix">
                                                <div className="inner">
                                                    <div className="subtitle">
                                                        <span>delightful experience</span>
                                                    </div>
                                                    <div className="pattern-image">
                                                        <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                                    </div>
                                                    <h1>
                                                        <span>{index === 0 ? 'Flavors Inspired by' : index === 1 ? 'Where every flavor' : 'For the love of'}<br />{index === 0 ? 'the Seasons' : index === 1 ? 'tells a story' : 'delicious food'}</span>
                                                    </h1>
                                                    <div className="text">From mouthwatering food to handcrafted drinks & signature cocktails</div>
                                                    <div className="links-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="link">
                                                            <a href={pdfFile} target="_blank" className="theme-btn btn-style-two clearfix" rel='noopener noreferrer'>
                                                                <span className="btn-wrap">
                                                                    <span className="text-one">view our menu</span>
                                                                    <span className="text-two">view our menu</span>
                                                                </span>
                                                            </a>
                                                            <Link to="/reservation" className="theme-btn btn-style-two clearfix">
                                                                <span className="btn-wrap">
                                                                    <span className="text-one">book a table</span>
                                                                    <span className="text-two">book a table</span>
                                                                </span>
                                                            </Link>
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
            <div className="swiper-button-prev">
                <span className="fal fa-angle-left"></span>
            </div>
            <div className="swiper-button-next">
                <span className="fal fa-angle-right"></span>
            </div>
        </Swiper>
    );
};

export default Banner;
