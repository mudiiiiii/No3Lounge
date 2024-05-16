import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import menuimgone from '../../assets/images/03photos/food/1Z6A1109.jpg';
import menuimgtwo from '../../assets/images/03photos/food/1Z6A0697.jpg';
import menuimgthree from '../../assets/images/03photos/food/1Z6A0729.jpg';
import menuimgfour from '../../assets/images/03photos/food/1Z6A0787.jpg';
import menuimgfive from '../../assets/images/03photos/drinks/1Z6A0601.jpg';
import menuimgsix from '../../assets/images/03photos/drinks/1Z6A0620.jpg';
import menuimgseven from '../../assets/images/03photos/food/1Z6A0979.jpg';
import menuimgeight from '../../assets/images/03photos/food/1Z6A0721.jpg';
import menuimgnine from '../../assets/images/03photos/drinks/1Z6A0643.jpg';
import menuimgten from '../../assets/images/03photos/food/1Z6A1029.jpg';
import menuimgeleven from '../../assets/images/03photos/drinks/1Z6A0653.jpg';
import menuimgtwelve from '../../assets/images/03photos/food/1Z6A1038.jpg';
import menuimgthirteen from '../../assets/images/03photos/drinks/1Z6A0676.jpg';
import menuimgfourteen from '../../assets/images/03photos/food/1Z6A1056.jpg';
import menuimgfifteen from '../../assets/images/03photos/drinks/1Z6A0692.jpg';
import menuimgsixteen from '../../assets/images/03photos/drinks/1Z6A0738.jpg';
import menuimgseventeen from '../../assets/images/03photos/drinks/1Z6A0817.jpg';
import menuimgeighteen from '../../assets/images/03photos/food/1Z6A1059.jpg';
import menuimgnineteen from '../../assets/images/03photos/food/1Z6A1061.jpg';
import menuimgtwenty from '../../assets/images/03photos/drinks/1Z6A0836.jpg';
import menuimgtwentyone from '../../assets/images/03photos/drinks/1Z6A0876.jpg';
import menuimgtwentytwo from '../../assets/images/03photos/food/1Z6A1069.jpg';
import menuimgtwentythree from '../../assets/images/03photos/food/1Z6A1092.jpg';
import menuimgtwentyfour from '../../assets/images/03photos/food/1Z6A1114.jpg';
import menuimgtwentyfive from '../../assets/images/03photos/food/1Z6A1139.jpg';
import menuimgtwentysix from '../../assets/images/03photos/drinks/1Z6A0918.jpg';
import menuimgtwentyseven from '../../assets/images/03photos/food/1Z6A1146.jpg';
import menuimgtwentyeight from '../../assets/images/03photos/drinks/1Z6A0945.jpg';
import menuimgtwentynine from '../../assets/images/03photos/drinks/1Z6A0988.jpg';



SwiperCore.use([Navigation]);


function Special() {
  const options = {
    slidesPerView: 4,
    spaceBetween: 45,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 7000,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };


  return (
    <>
      <section className="special-offer">
        <div className="outer-container">
          <div className="auto-container">
            <div className="title-box centered">
              <div className="subtitle">
                <span>our gallery</span>
              </div>
              <div className="pattern-image">
                <img src={require('../../assets/images/icons/separator.svg').default} alt="mySvgImage" />
              </div>
              <h2>Special Cuisines</h2>

            </div>
            <Swiper className="dish-gallery-slider" {...options}
              loop={true}
              spaceBetween={45}
              slidesPerView={4}
              navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            >

              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgone} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Greek Salad</Link>
                  </h4> */}
                  {/* <div className="text desc">Avocados with crab meat, red onion, crab salad red bell pepper...</div>
                  <div className="price">$39.00</div> */}
                </div>
              </SwiperSlide>

              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgtwo} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Tokusen Wagyu</Link>
                  </h4>
                  <div className="text desc">Tomatoes, green bell pepper, sliced cucumber onion, olives...</div>
                  <div className="price">$45.00</div> */}
                </div>
              </SwiperSlide>

              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgthree} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$15.00</div> */}
                </div>
              </SwiperSlide>

              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgfour} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Opu Fish</Link>
                  </h4>
                  <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$12.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgfive} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$15.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgsix} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Opu Fish</Link>
                  </h4>
                  <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$12.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgseven} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$15.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgeight} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Opu Fish</Link>
                  </h4>
                  <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$12.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgnine} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$15.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgten} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Opu Fish</Link>
                  </h4>
                  <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$12.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgeleven} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$15.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgtwelve} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Opu Fish</Link>
                  </h4>
                  <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$12.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgthirteen} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$15.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgfourteen} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Opu Fish</Link>
                  </h4>
                  <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$12.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgfifteen} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$15.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgsixteen} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Opu Fish</Link>
                  </h4>
                  <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$12.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgseventeen} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$15.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgeighteen} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Opu Fish</Link>
                  </h4>
                  <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$12.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgnineteen} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$15.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgtwenty} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Opu Fish</Link>
                  </h4>
                  <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$12.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgtwentyone} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$15.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgtwentytwo} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Opu Fish</Link>
                  </h4>
                  <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$12.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgtwentythree} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$15.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgtwentyfour} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Opu Fish</Link>
                  </h4>
                  <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$12.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgtwentyfive} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$15.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgtwentysix} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Opu Fish</Link>
                  </h4>
                  <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$12.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgtwentyseven} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$15.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two margin-top">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgtwentyeight} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Opu Fish</Link>
                  </h4>
                  <div className="text desc">Vegetables, cheeses, ground meats, tomato sauce, seasonings...</div>
                  <div className="price">$12.00</div> */}
                </div>
              </SwiperSlide>
              <SwiperSlide className="offer-block-two">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/">
                      <img src={menuimgtwentynine} alt="" />
                    </Link>
                  </div>
                  {/* <h4>
                    <Link to="#">Butternut Pumpkin</Link>
                  </h4>
                  <div className="text desc">Avocados with crab meat, red onion, crab salad stuffed bell pepper...</div>
                  <div className="price">$15.00</div> */}
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev">
              <span className="fal fa-angle-left"></span>
            </div>
            <div className="swiper-button-next">
              <span className="fal fa-angle-right"></span>
            </div>
            <div className="lower-link-box text-center">
              <Link to="#" className="theme-btn btn-style-two clearfix">
                <span className="btn-wrap">
                  <span className="text-one">view all menu</span>
                  <span className="text-two">view all menu</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}

export default Special;
