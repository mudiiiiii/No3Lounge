import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bg5 from '../../assets/images/03photos/logos/Wisemen Logo Black.png'
import bg6 from '../../assets/images/background/bg-6.png'
import toronto from '../../assets/images/resource/toronto.png'
import paris from '../../assets/images/resource/paris.png'
import dubai from '../../assets/images/resource/dubai.png'
import ny from '../../assets/images/resource/ny.png'

function Book() {
    const [date, setDate] = useState('');  // State to hold the date input

    const handleDateChange = (event) => {
        const input = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
        let formattedInput = '';
        
        if (input.length > 4) {
            formattedInput += input.slice(0, 4); // Year
            if (input.length > 6) {
                formattedInput += '-' + input.slice(4, 6); // Month
                formattedInput += '-' + input.slice(6, 8); // Day
            } else if (input.length > 4) {
                formattedInput += '-' + input.slice(4); // Month so far
            }
        } else {
            formattedInput = input; // Only year so far
        }
        
        setDate(formattedInput);
    };
    return (
        <>
            <section className="online-reservation inner-page">
                <div className="left-bg"><img src={bg5} alt="" title="" /></div>
                {/* <div className="right-bg"><img src={bg6} alt="" title="" /></div> */}
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle"><span>Reservation</span></div>
                        <div className="pattern-image"><img src={require('../../assets/images/icons/separator.svg').default} alt="" title="" /></div>

                        <h2>Book A Table</h2>
                        <div className="text desc">Restaurant will be open for all days, All booking payment is secured with credit card, no refundable.</div>
                        <div className="text request-info">Booking request <Link to="#">+234-coming-soon</Link> or fill out the order form</div>
                    </div>
                    <div className="default-form reservation-form">
                        <form method="post" action="/api/reserve">
                            <div className="row clearfix">
                                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                    <div className="field-inner">
                                        <span className="alt-icon far fa-user"></span>
                                        <select className="l-icon">
                                            <option>1 Person</option>
                                            <option>2 Person</option>
                                            <option>3 Person</option>
                                            <option>4 Person</option>
                                            <option>5 Person</option>
                                            <option>6 Person</option>
                                            <option>7 Person</option>
                                            <option>8 Person</option>
                                            <option>9 Person</option>
                                            <option>10 or more Person</option>
                                        </select>
                                        <span className="arrow-icon far fa-angle-down"></span>
                                    </div>
                                </div>
                                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                    <div className="field-inner">
                                        <span className="alt-icon far fa-calendar"></span>
                                        <input
                                            className="l-icon"
                                            type="text"
                                            name="date"
                                            placeholder="YYYY-MM-DD"
                                            value={date}
                                            onChange={handleDateChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-lg-4 col-md-12 col-sm-12">
                                    <div className="field-inner">
                                        <span className="alt-icon far fa-clock"></span>
                                        <select className="l-icon">
                                            <option>04 : 00 pm</option>
                                            <option>04 : 30 pm</option>
                                            <option>05 : 00 pm</option>
                                            <option>05 : 30 pm</option>
                                            <option>06 : 00 pm</option>
                                            <option>06 : 30 pm</option>
                                            <option>07 : 00 pm</option>
                                            <option>07 : 30 pm</option>
                                            <option>08 : 00 pm</option>
                                            <option>08 : 30 pm</option>
                                            <option>09 : 00 pm</option>
                                            <option>09 : 30 pm</option>
                                            <option>10 : 00 pm</option>
                                            <option>10 : 30 pm</option>
                                            <option>11 : 00 pm</option>
                                            <option>11 : 30 pm</option>
                                        </select>
                                        <span className="arrow-icon far fa-angle-down"></span>
                                    </div>
                                </div>

                                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <div className="field-inner">
                          <span className="alt-icon far fa-user"></span>
                            <input
                              type="text"
                              name="name"
                              placeholder="   Your Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <div className="field-inner">
                          <span className="alt-icon far fa-envelope"></span>
                            <input
                              type="text"
                              name="emailAddress"
                              placeholder="   Email Address"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group col-lg-6 col-md-6 col-sm-12">
                          <div className="field-inner">
                          <span className="alt-icon far fa-phone"></span>
                            <input
                              type="text"
                              name="phoneNumber"
                              placeholder="   Phone Number"
                              required
                            />
                          </div>
                        </div>
                            </div>
                            <button type="submit" className="theme-btn btn-style-one clearfix">
                                <span className="btn-wrap">
                                    <span className="text-one">book a table</span>
                                    <span className="text-two">book a table</span>
                                </span>
                            </button>
                        </form>
                        {/* <div className="powered-by">*Powered by OpenTable</div> */}
                    </div>
                </div>

                <div className="map-location-section">
                    <div className="auto-container">
                        <div className="outer-box">
                            <div className="row clearfix">
                                <div className="reserv-col col-lg-8 col-md-12 col-sm-12">
                                    <div className="inner">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3964.0235196180947!2d3.3838336148358974!3d6.518706360090378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x103b8cfbe0dd4343%3A0x5dfece8f7a221bcd!2sUniversity%20Rd%2C%20Yaba%2C%20Lagos%20101245%2C%20Lagos%2C%20Nigeria!3m2!1d6.5177077!2d3.3842290999999998!5e0!3m2!1sen!2sca!4v1715819648149!5m2!1sen!2sca" width="100%" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                                <div className="info-col col-lg-4 col-md-12 col-sm-12">
                                    <div className="inner">
                                        <div className="title">
                                            <h2>Lagos</h2>
                                        </div>
                                        <div className="data">
                                            <ul className="info">
                                                <li><strong>Contact Us</strong><br />#3 University Road, <br /> Akoka Lagos <br /> Call : +234-coming-soon <br /> Email : coming soon </li>
                                                <div className="separator"><span></span></div>
                                                <li><strong>Restaurant Time</strong><br />Monday to Sunday <br />04.00 pm - 12:00 am</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="location-center">
                    <div className="auto-container">
                        <div className="row clearfix">

                            {/* <div className="location-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                    <div className="icon-box"><img src={ny} alt="" /></div>
                                    <h4>New York</h4>
                                    <div className="text">Restaurant St, Delicious City, NY. <br /> +88-123-123456<br />booking@domainname.com</div>
                                    <div className="more-link"><Link to="#">get direction</Link></div>
                                </div>
                            </div>


                            <div className="location-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                    <div className="icon-box"><img src={dubai} alt="" /></div>
                                    <h4>Dubai</h4>
                                    <div className="text">520, Delicious City, Revenu Db.<br />+88-123-123456<br />booking@domainname.com</div>
                                    <div className="more-link"><Link to="#">get direction</Link></div>
                                </div>
                            </div>


                            <div className="location-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                                    <div className="icon-box"><img src={paris} alt="" /></div>
                                    <h4>Paris</h4>
                                    <div className="text">589, Delicious Avenue PS.<br />+88-123-123456 <br /> booking@domainname.com</div>
                                    <div className="more-link"><Link to="#">get direction</Link></div>
                                </div>
                            </div>


                            <div className="location-block col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="900ms">
                                    <div className="icon-box"><img src={toronto} alt="" /></div>
                                    <h4>Toronto</h4>
                                    <div className="text">Restaurant St, Delicious City, CA <br /> +88-123-123456 <br /> booking@domainname.com</div>
                                    <div className="more-link"><Link to="#">get direction</Link></div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Book