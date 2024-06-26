import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/03photos/logos/No3 logo B.png';
import logonew from '../../assets/images/03photos/logos/No3 logo B.png';
import imgone from '../../assets/images/resource/menu-image-1.jpg';
import imgtwo from '../../assets/images/resource/menu-image-2.jpg';
import Imgthree from '../../assets/images/resource/menu-image-3.jpg';
import Imgfour from '../../assets/images/resource/menu-image-4.jpg';


function Main() {
    const [active, setActive] = useState();
    const [show, setShow] = useState();
    const [menu, setMenu] = useState();
    const [page, setPage] = useState();
    const [drop, setDrop] = useState();
    const [lastScroll, setLastScroll] = useState(0);

    const [scrolled, setScrolled] = useState(false);
    const [Nav, setNav] = useState(true);

    const handleScroll = () => {
        const offset = window.scrollY;
        setLastScroll(offset);

        if (offset > 1000 && offset < lastScroll) {
            setNav(true);
            setScrolled(true);
        } else if (offset > 1000) {
            setNav(false);
        } else if (offset > 200) {
            setNav(true);
            setScrolled(true);
        } else {
            setScrolled(false);
            setNav(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {active && <div className="menu-backdrop" style={{ opacity: '1', visibility: 'visible' }}></div>}
            <section className={`hidden-bar ${active && 'visible-sidebar'}`}>
                <div className="inner-box">
                    <div className="cross-icon hidden-bar-closer" onClick={() => setActive(false)}>
                        <span className="far fa-close" onClick={() => setActive(false)}></span>
                    </div>
                    <div className="logo-box">
                        <Link to="/" title="No3 Lounge">
                            <img src={logo} alt="No3 Lounge" title="No3 Lounge"  />
                        </Link>
                    </div>

                    <div className="side-menu">
                        <ul className="navigation clearfix">
                            <li><Link to="/" onClick={() => setActive(false)}>Home</Link></li>
                            <li><Link to="/about" onClick={() => setActive(false)}>About Us</Link></li>
                            <li><Link to="/ourchefs" onClick={() => setActive(false)}>Gallery</Link></li>
                            <li><Link to="/contact" onClick={() => setActive(false)}>Contact</Link></li>
                            <li><Link to="/careers" onClick={() => setActive(false)}>Career</Link></li>
                        </ul>
                    </div>

                    <h2>Visit Us</h2>
                    <ul className="info">
                        <li>#3 University Road, <br /> Akoka Lagos</li>
                        <li>Open: 4.00 pm - 12.00 am</li>
                        <li><Link to="mailto:info@no3lounge.com">info@no3lounge.com</Link></li>
                        <li><Link to="mailto:events@no3lounge.com">events@no3lounge.com</Link></li>
                    </ul>
                    <div className="separator"><span></span></div>
                    <div className="booking-info">
                        <div className="bk-title">Booking request</div>
                        <div className="bk-no"><Link to="tel:+234 901 000 6669">+234 901 000 6669</Link></div>
                    </div>
                </div>
            </section>
            {Nav && (
                <header className={`main-header ${scrolled && 'fixed-header'} header-down`}>
                    <div className="header-top">
                        <div className="auto-container">
                            <div className="inner clearfix">
                                <div className="top-left clearfix">
                                    <ul className="top-info clearfix">
                                        <li><i className="icon far fa-map-marker-alt"></i> #3 University Road, Akoka Lagos</li>
                                        <li><i className="icon far fa-clock"></i> Daily : 4.00 pm to 12.00 am</li>
                                    </ul>
                                </div>
                                <div className="top-right clearfix">
                                    <ul className="top-info clearfix">
                                        <li><Link to="tel:+234 901 000 6669"><i className="icon far fa-phone"></i> +234 901 000 6669</Link></li>
                                        <li><Link to="mailto:info@no3lounge.com"><i className="icon far fa-envelope"></i> info@no3lounge.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-upper header-fixed">
                        <div className="auto-container">
                            <div className="main-box d-flex justify-content-between align-items-center flex-wrap">
                                <div className="links-box clearfix">
                                    <div className="nav-toggler">
                                        <button className="hidden-bar-opener">
                                            <span className="hamburger" onClick={() => setActive(true)}>
                                                <span className="top-bun"></span>
                                                <span className="meat"></span>
                                                <span className="bottom-bun"></span>
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                <div className="logo-box">
                                    <div className="logo">
                                        <Link to="/" title="No3 Lounge">
                                            <img src={logonew} alt="No3 Lounge" title="No3 Lounge" style={{ width: '100px', height: 'auto' }} />
                                        </Link>
                                    </div>
                                </div>

                                <div className="nav-box clearfix">
                                    <div className="nav-outer clearfix">
                                        <nav className="main-menu">
                                            <ul className="navigation clearfix">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/about">About Us</Link></li>
                                                <li><Link to="/ourchefs">Gallery</Link></li>
                                                <li><Link to="/contact">Contact</Link></li>
                                                <li><Link to="/careers">Career</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                <div className="link link-btn">
  <a href="https://no3lounge.africa.restaurant/" target="_blank" rel="noopener noreferrer" className="theme-btn btn-style-one clearfix">
    <span className="btn-wrap">
      <span className="text-one">order now</span>
      <span className="text-two">order now</span>
    </span>
  </a>
</div>

                            </div>
                        </div>
                    </div>
                </header>
            )}
        </>
    );
}

export default Main;
