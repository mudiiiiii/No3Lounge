import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bgone from '../../assets/images/background/bg-5.png'
import Bgtwo from '../../assets/images/background/bg-6.png'
import five from '../../assets/images/03photos/food/1Z6A0721.jpg'
import six from '../../assets/images/03photos/food/1Z6A0702.jpg'
import seven from '../../assets/images/03photos/food/1Z6A1069.jpg'
import eight from '../../assets/images/03photos/food/1Z6A1029.jpg'
import nine from '../../assets/images/03photos/food/1Z6A0979.jpg'
import ten from '../../assets/images/03photos/food/1Z6A0729.jpg'
import eleven from '../../assets/images/03photos/food/1Z6A1139.jpg'
import twelve from '../../assets/images/03photos/food/1Z6A0787.jpg'
import thirteen from '../../assets/images/03photos/food/1Z6A0862.jpg'
import fourteen from '../../assets/images/03photos/food/1Z6A1146.jpg'
import fifteen from '../../assets/images/03photos/food/1Z6A1152.jpg'
import sixteen from '../../assets/images/03photos/drinks/1Z6A0817.jpg'
import seventeen from '../../assets/images/03photos/drinks/1Z6A0918.jpg'
import eighteen from '../../assets/images/03photos/drinks/1Z6A0836.jpg'
import nineteen from '../../assets/images/03photos/drinks/1Z6A0692.jpg'
import twenty from '../../assets/images/03photos/drinks/1Z6A0876.jpg'
import twentyone from '../../assets/images/03photos/drinks/1Z6A0945.jpg'
import twentytwo from '../../assets/images/03photos/desserts/cheesecake.jpg'
import twentythree from '../../assets/images/03photos/desserts/IMG_9552.jpeg'
import twentyfour from '../../assets/images/03photos/desserts/IMG_9599.jpeg'
import twentyfive from '../../assets/images/03photos/desserts/IMG_2258.jpeg'
import pdfFile from '../../assets/pdf/Full Pdf.pdf';

function Menusection() {
    const [tabMenu, tabActive] = useState({ a: true });

    return (
        <>
            <section className="menu-section">

                {/* <div className="left-bg"><img src={bgone} alt="" title="" /></div>

                <div className="right-bg"><img src={Bgtwo} alt="" title="" /></div> */}

                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>Special items</span></div>

                        <div className="pattern-image">
                            <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Delicious Menu</h2>
                    </div>

                    <div className="tabs-box menu-tabs">
                        <div className="buttons">
                            <ul className="tab-buttons clearfix">
                                <li className={`tab-btn ${tabMenu.a && "active-btn"}`} onClick={() => tabActive({ a: true })} data-tab="#tab-1"><span>APPETIZERS</span></li>
                                <li className={`tab-btn ${tabMenu.b && "active-btn"}`} onClick={() => tabActive({ b: true })} data-tab="#tab-2"><span>ENTREE</span></li>
                                <li className={`tab-btn ${tabMenu.c && "active-btn"}`} onClick={() => tabActive({ c: true })} data-tab="#tab-3"><span>DESSERT</span></li>
                                <li className={`tab-btn ${tabMenu.d && "active-btn"}`} onClick={() => tabActive({ d: true })} data-tab="#tab-4"><span>DRINKS</span></li>
                            </ul>
                        </div>
                        <div className="tabs-content">

                            <div className={`tab ${tabMenu.a && "active-tab"}`} id="tab-1">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Chicken and Meat Croquette</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">Scrumptious and cheezy sauteed vegetables with diced chicken, moulded with bread crumbs.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={six} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Spring Rolls - Chicken, vegetable, Prawns </Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">Tender fried parcels of flaky pastry rolls made with fresh vegetables, stuffed chicken or prawns.
Served with our special sweet chili sauce.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={ten} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Crispy Wings</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">Well marinated and breaded chicken wings, served with an option of our special chili sauce or
creamy mayonnaise.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={fifteen} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Spicy Gizzard </Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#"></Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={fourteen} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Chicken Satay</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#"></Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                <div className="dish-image"><Link to="#"><img src={eleven} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Classic Burger</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#"></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab ${tabMenu.b && "active-tab"}`} id="tab-2">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                        <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={eleven} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Classic Beef Burger</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">Juicy mouth-watering beef burger: it comes with fresh bread rolls stuffed with minced meat,
fresh lettuce and melted mozzarella cheese, Severed with French fries and chili mayo dip.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={seven} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Savory Roast Pasta</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">Full of flavor pasta prepared in Roasted bell pepper sauce and severed with boneless chicken</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={nine} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Grilled Croaker Fish</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">Well marinated croaker fish in hot and spicy pepper sauce, served with sweet potatoe fries or
yam chips.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={eight} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Shredded Beef In Mushroom Sauce </Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">Delicious shredded beef in creamy mushroom sauce with mixed vegetables and special spices
served with rice options.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={twelve} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">AbuleOja Platter</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">A relish to share with friends. Well marinated and spicy goat meat, snails, gizzards, grilled
prawns and fried yam served on a platter with our special chili and mayo dip.</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={thirteen} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">03 Platter (For 2)</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">A platter to unwind and reconnect with friends. Well prepared spring rolls, samosa, chicken
satay, wings, meat croquette, chicken croquette, and French fries.</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab ${tabMenu.c && "active-tab"}`} id="tab-3">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                        <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={twentytwo} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Cheese Cake</Link></h5></div><div className="price"></div></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={twentythree} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Fruit Tart </Link></h5></div><div className="price"></div></div>
                                                    
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={twentyfour} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Carrot Cake</Link></h5></div><div className="price"></div></div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={twentyfive} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Red Velvet Cake </Link></h5></div><div className="price"></div></div>
                                                    
                                                </div>
                                            </div>

                                            {/* <div className="dish-block">
                                                <div className="inner-box">
                                                    
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">coming soon</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">coming soon coming soon coming soon coming soon coming soon coming soon</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                               
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">coming soon</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">coming soon coming soon coming soon coming soon coming soon coming soon</Link></div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`tab ${tabMenu.d && "active-tab"}`} id="tab-4">
                                <div className="row clearfix">
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                        <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={sixteen} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">From Lagos With Love</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">White rum, cinnamon syrup, orange juice, pineapple juice, lemon juice, drop of 
grenadine, cranberry juice, passion fruit
</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={seventeen} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Pornstar Martini </Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">Vodka, passion fruit, vanilla syrup, lemon juice, pineapple juice,drop of grenadine</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={eighteen} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Strawberry Diaquari</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">White rum, lime, strawberry mix,
grenadine syrup</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                                        <div className="inner">

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={twenty} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Miami Vice </Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">Fresh pineapple, Bacardi, pina colada
mix, coconut milk, simple syrup, lemon
juice, strawberry mix, lime</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={nineteen} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Green Apple Smoothie</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">Fresh apple, sour youghut, fresh
banana, whipping cream, simple syrup</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    <div className="dish-image"><Link to="#"><img src={twentyone} alt="" /></Link></div>
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">Gingersour
</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">Whiskey, lemon juice, ginger syrup,
pineapple juice, blue curaçao</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="open-timing">
                        {/* <div className="hours">During winter daily from <span className="theme_color">7:00 pm</span> to <span className="theme_color">9:00 pm</span></div> */}
                        <div className="link-box">
                        <a href={pdfFile} target="_blank" className="theme-btn btn-style-two clearfix" rel='noopener noreferrer'>
    <span className="btn-wrap">
        <span className="text-one">view full menu</span>
        <span className="text-two">view full menu</span>
    </span>
</a>
                            <Link to="https://no3lounge.africa.restaurant/" className="theme-btn btn-style-two clearfix" target="_blank"  rel='noopener noreferrer'>
                                <span className="btn-wrap">
                                    <span className="text-one">order now</span>
                                    <span className="text-two">order now</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Menusection