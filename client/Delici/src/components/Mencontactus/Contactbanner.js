import React from 'react'
import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'
import bg25 from '../../assets/images/03photos/logos/Wisemen Logo Black.png'
// import bg6 from '../../assets/images/03'
import restro from '../../assets/images/03photos/food/1Z6A1109.jpg'

function Contactbanner() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
    
        try {
          const response = await fetch('https://no3lounge-9eeef24429d5.herokuapp.com/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (response.ok) {
            alert('Your inquiry has been sent successfully!');
          } else {
            alert('Failed to send your inquiry.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while sending your inquiry.');
        }
      };
    return (
        <>
            <div className="contact-map">
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.03567326086!2d3.37910417568!3d6.517168823235463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf8e2902ed7%3A0x8b3c3038395b0c2b!2s3%20University%20Rd%2C%20opposite%20First%20City%20Monument%20Bank%2C%20Yaba%2C%20Lagos%20101245%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sca!4v1720718553501!5m2!1sen!2sca" width="100%" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>
            </div>

            <section className="contact-page">
                <div className="left-bg"><img src={bg25} alt="" title="" /></div>
                {/* <div className="right-bg"><img src={bg6} alt="" title="" /></div> */}

                <div className="location-center">
                    <div className="auto-container">
                        <div className="cinfo-box">
                            <div className="row clearfix">

                                <div className="contactinfo-block col-lg-4 col-md-4 col-sm-12">
                                    <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                        <h4>Opening Hours</h4>
                                        <div className="text"> Monday to Sunday <br /> 4.00 pm - 12.00am</div>
                                    </div>
                                </div>


                                <div className="contactinfo-block col-lg-4 col-md-4 col-sm-12">
                                    <div className="inner-box cp-seprator wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                                        <h4>Contact Info</h4>
                                        <div className="text">#3 University Road, Akoka Lagos<br />Email : info@no3lounge.com</div>
                                        <div className="more-link"><Link to="#">Booking : +234 901 000 6669</Link></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="auto-container">
                    <div className="c-page-form-box">
                        <div className="row clearfix">

                            <div className="loc-block col-lg-6 col-md-12 col-sm-12">
                                <div className="title-box centered">
                                    <h2>Message us</h2>
                                    <div className="text desc">Have a question about our service? We're here to help, contact us today</div>
                                </div>
                                <div className="default-form reservation-form">
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <div className="clearfix">
  <div className="form-group">
    <div className="field-inner">
      <i className="fas fa-user"></i>
      <input type="text" name="name" placeholder="Your Name" required="" />
    </div>
  </div>
  <div className="form-group">
    <div className="field-inner">
      <i className="fas fa-envelope"></i>
      <input type="text" name="email" placeholder="Your Email" required="" />
    </div>
  </div>
  <div className="form-group">
    <div className="field-inner">
      <i className="fas fa-phone"></i>
      <input type="text" name="number" placeholder="Phone Number" required="" />
    </div>
  </div>



                                            <div className="form-group ">
                                                <div className="field-inner">
                                                <i className="fas fa-tasks"></i>
                                                    <textarea name="message" placeholder="Special Request" required=""></textarea>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <button type="submit" className="theme-btn btn-style-one clearfix">
                                                    <span className="btn-wrap">
                                                        <span className="text-one">send your message</span>
                                                        <span className="text-two">send your message</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>


                            <div className="loc-block col-lg-6 col-md-12 col-sm-12">
                                <img src={restro} alt="" />
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contactbanner