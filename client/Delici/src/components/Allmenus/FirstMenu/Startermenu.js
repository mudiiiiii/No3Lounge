import React from 'react'
import { Link } from 'react-router-dom'
import bgone from '../../../assets/images/background/bg-16.png'
import bgtwo from '../../../assets/images/background/bg-17.png'
import bgthree from '../../../assets/images/background/bg-18.png'
import menuone from '../../../assets/images/03photos/food/1Z6A0862.jpg'
import menutwo from '../../../assets/images/03photos/food/1Z6A1069.jpg'

function Startermenu() {
    return (
        <>
            <section className="menu-one">
                {/* <div className="right-bg"><img src={bgone} alt="" title="" /></div> */}
                <div className="auto-container">
                    <div className="title-box centered">
                        {/* <div className="subtitle"><span>STARTER MENU</span></div> */}
                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Appetizers</h2>
                    </div>

                    <div className="row clearfix">
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image"><img src={menuone} alt="" /></div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner">
                            <div className="dish-block">
                                                <div className="inner-box">
                                                    {/* <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div> */}
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">coming soon</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">coming soon coming soon coming soon coming soon coming soon coming soon</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    {/* <div className="dish-image"><Link to="#"><img src={six} alt="" /></Link></div> */}
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">coming soon </Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">coming soon coming soon coming soon coming soon coming soon coming soon</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    {/* <div className="dish-image"><Link to="#"><img src={seven} alt="" /></Link></div> */}
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">coming soon</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">coming soon coming soon coming soon coming soon coming soon coming soon</Link></div>
                                                </div>
                                            </div>
                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    {/* <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div> */}
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">coming soon</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">coming soon coming soon coming soon coming soon coming soon coming soon</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    {/* <div className="dish-image"><Link to="#"><img src={six} alt="" /></Link></div> */}
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">coming soon </Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">coming soon coming soon coming soon coming soon coming soon coming soon</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    {/* <div className="dish-image"><Link to="#"><img src={seven} alt="" /></Link></div> */}
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">coming soon</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">coming soon coming soon coming soon coming soon coming soon coming soon</Link></div>
                                                </div>
                                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="menu-one alternate">
                {/* <div className="left-bg"><img src={bgtwo} alt="" title="" /></div>
                <div className="right-bg-2"><img src={bgthree} alt="" title="" /></div> */}
                <div className="auto-container">
                    <div className="title-box centered">
                        {/* <div className="subtitle"><span>Delicious</span></div> */}

                        <div className="pattern-image">
                            <img src={require('../../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                        </div>

                        <h2>Main Dishes</h2>

                    </div>

                    <div className="row clearfix">
                        <div className="image-col col-lg-7 col-md-12 col-sm-12">
                            <div className="inner">
                                <div className="image"><img src={menutwo} alt="" /></div>
                            </div>
                        </div>
                        <div className="menu-col col-lg-5 col-md-12 col-sm-12">
                            <div className="inner">

                            <div className="dish-block">
                                                <div className="inner-box">
                                                    {/* <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div> */}
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">coming soon</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">coming soon coming soon coming soon coming soon coming soon coming soon</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    {/* <div className="dish-image"><Link to="#"><img src={six} alt="" /></Link></div> */}
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">coming soon </Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">coming soon coming soon coming soon coming soon coming soon coming soon</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    {/* <div className="dish-image"><Link to="#"><img src={seven} alt="" /></Link></div> */}
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">coming soon</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">coming soon coming soon coming soon coming soon coming soon coming soon</Link></div>
                                                </div>
                                            </div>
                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    {/* <div className="dish-image"><Link to="#"><img src={five} alt="" /></Link></div> */}
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">coming soon</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">coming soon coming soon coming soon coming soon coming soon coming soon</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    {/* <div className="dish-image"><Link to="#"><img src={six} alt="" /></Link></div> */}
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">coming soon </Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">coming soon coming soon coming soon coming soon coming soon coming soon</Link></div>
                                                </div>
                                            </div>

                                            <div className="dish-block">
                                                <div className="inner-box">
                                                    {/* <div className="dish-image"><Link to="#"><img src={seven} alt="" /></Link></div> */}
                                                    <div className="title clearfix"><div className="ttl clearfix"><h5><Link to="#">coming soon</Link></h5></div><div className="price"></div></div>
                                                    <div className="text desc"><Link to="#">coming soon coming soon coming soon coming soon coming soon coming soon</Link></div>
                                                </div>
                                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Startermenu