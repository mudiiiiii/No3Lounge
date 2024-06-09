import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/03photos/logos/No3 logo B.png'
import logonew from '../../assets/images/03photos/logos/No3 logo B.png'
// import imgone from '../../assets/images/resource/menu-image-1.jpg'
// import imgtwo from '../../assets/images/resource/menu-image-2.jpg'
// import Imgthree from '../../assets/images/resource/menu-image-3.jpg'
// import Imgfour from '../../assets/images/resource/menu-image-4.jpg'
// import Banner from '../Menhome/Banner'
// import Offer from '../Menhome/Offer'
// import Story from '../Menhome/Story'
// import Specialdish from '../Menhome/Specialdish'
// import Menusection from '../Menhome/Menusection'
// import Whyus from '../Menhome/Whyus'
// import Teem from '../Menhome/Teem'
// import Reacntupdate from '../Menhome/Recntupdates'
// import Special from '../Menhome/Special'
// import Contact from '../Menhome/Contact'
// import Videosection from '../Menhome/Videosection'

function Main() {

    const [active, setActive] = useState();
    const [show, setShow] = useState();
    const [menu, setMenu] = useState();
    const [page, setPage] = useState();
    const [drop, setDrop] = useState();

    const [scrolled, setScrolled] = useState(false);
    const [Nav, setNav] = useState(true);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 1000) {
            setNav(false)
        }
        else if (offset > 200) {
            setNav(true);
            setScrolled(true);
        }
        else {
            setScrolled(false);
            setNav(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <>
            {/* {active &&
            <div className="menu-backdrop" style={{ opacity: "1", visibility: "visible" }} onClick={() => setActive(false)}></div>} */}
            <section className={`hidden-bar ${active && "visible-sidebar"}`} onClick={() => setActive(false)} >
                <div className="inner-box">
                    {/* <div className="cross-icon hidden-bar-closer" onClick={() => setActive(false)} ><span className="far fa-close"> </span></div> */}
                    <div className="logo-box"><Link to="/" title="No3 Lounge"><img src={logo} alt="" title="No3 Lounge" />
                    </Link></div>

                    <div className="side-menu">
                        <ul className="navigation clearfix">
                            <li><Link to="/applications" onClick={() => setActive(false)}>Applications</Link></li>
                            <li><Link to="/reservations" onClick={() => setActive(false)}>Reservations</Link></li>
                            <li><Link to="/feedbacks" onClick={() => setActive(false)}>Feedbacks</Link></li>
                            
                        </ul>
                    </div>

                </div>
            </section>

            {Nav &&
                <header className={`main-header ${scrolled && "fixed-header"} header-down`}>
                <div className="header-top">
                    <div className="auto-container">
                        <div className="inner clearfix">
                        </div>
                    </div>
                </div>

                <div className="header-upper header-fixed" >
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
                                <div className="logo"><Link to="/" title="No3 Lounge"><img src={logonew} alt="" title="No3 Lounge" /></Link></div>
                            </div>

                            <div className="nav-box clearfix">

                                <div className="nav-outer clearfix">
                                    <nav className="main-menu">
                                        <ul className="navigation clearfix">
                                            {/* <li className="current dropdown"><Link to="/">Home</Link>
                                                <ul>
                                                    <li> <Link to="/hometwo">Home 1 Left Header</Link></li>
                                                    <li> <Link to="/">Home 1 Center Header</Link></li>
                                                    <li> <Link to="/homethree">Home 3 Video Hero</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown has-mega-menu"><Link to="/menu">Menus</Link>
                                                <ul>
                                                    <li>
                                                        <div className="mega-menu">
                                                            <div className="menu-inner">
                                                                <div className="auto-container">
                                                                    <div className="row clearfix">
                                                                        <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                            <div className="image"><Link to="/menuone"><img src={imgone} alt="" /></Link></div>
                                                                            <div className="title"><Link to="/menuone">Menu list 1</Link></div>
                                                                        </div>
                                                                        <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                            <div className="image"><Link to="/menutwo"><img src={imgtwo} alt="" /></Link></div>
                                                                            <div className="title"><Link to="menutwo">Menu list 2</Link></div>
                                                                        </div>
                                                                        <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                            <div className="image"><Link to="/menuthree"><img src={Imgthree} alt="" /></Link></div>
                                                                            <div className="title"><Link to="menuthree">Menu list 3</Link></div>
                                                                        </div>
                                                                        <div className="menu-block col-lg-3 col-md-6 col-sm-6">
                                                                            <div className="image"><Link to="/menufour"><img src={Imgfour} alt="" /></Link></div>
                                                                            <div className="title"><Link to="/menufour">Menu list 4</Link></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            {/* <li><Link to="/">Home</Link></li> */}
                                            {/* <li><Link to="/menuone">Menu</Link></li> */}
                                            {/* <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/ourchefs">Gallery</Link></li> */}
                                            {/* <li className="dropdown"><Link to="/">Pages</Link>
                                                <ul>
                                                    <li> <Link to="#">Dropdown Menu 1</Link></li>
                                                    <li> <Link to="#">Dropdown Menu 2</Link></li>
                                                    <li> <Link to="#">Dropdown Menu 3</Link></li>
                                                    <li className="dropdown"><Link to="#">Dropdown Menu 4</Link>
                                                        <ul>
                                                            <li> <Link to="#">Dropdown Menu level 2</Link></li>
                                                            <li> <Link to="#">Dropdown Menu level 2</Link></li>
                                                            <li> <Link to="#">Dropdown Menu Level 3</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li><Link to="#">Dropdown Lorem 5</Link></li>
                                                </ul>
                                            </li> */}
                                            {/* <li><Link to="#">Blog</Link></li> */}
                                            {/* <li><Link to="/contact">Contact</Link></li>
                                            <li><Link to="/careers">Career</Link></li> */}
                                        </ul>
                                    </nav>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </header>
            }

            {/* <Banner />
            <Offer />
            <Story />
            <Specialdish />
            <Menusection />
            <Special />
            <Contact />
            <Whyus />
            <Teem />
            <Videosection />
            <Reacntupdate /> */}
        </>
    )
}

export default Main