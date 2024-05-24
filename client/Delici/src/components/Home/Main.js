import React from "react";
import Videosection from "../Menhome/Videosection";
import Special from "../Menhome/Special";
import Contact from "../Menhome/Contact";
import Banner from "../Menhome/Banner";
import Offer from "../Menhome/Offer";
import Story from "../Menhome/Story";
import Specialdish from "../Menhome/Specialdish";
import Menusection from "../Menhome/Menusection";
// import Whyus from "../Menhome/Whyus";
import Teem from "../Menhome/Teem";
import Reacntupdate from "../Menhome/Recntupdates";
import { Link } from "react-router-dom";
import sidebarlogo from "../../assets/images/03photos/logos/Number 3_ Black.png";
import Feature from "../Menhome/Feature";

function Main() {
  return (
    <>
      <div className="menu-backdrop"> </div>

      <section className="hidden-bar">
        <div className="inner-box">
          <div className="cross-icon hidden-bar-closer">
            <span className="far fa-close"></span>
          </div>
          <div className="logo-box">
            <Link to="/" title="No3 Lounge">
              <img
                src={sidebarlogo}
                alt=""
                title="No3 Lounge"
              />
            </Link>
          </div>

          <div className="side-menu">
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menuone">Menu</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/ourchefs">Gallery</Link>
              </li>
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
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <h2>Visit Us</h2>
          <ul className="info">
            <li>
              #3 University Road, <br /> Akoka Lagos{" "}
            </li>
            <li>Open: 9.30 am - 2.30pm</li>
            <li>
              <Link to="mailto:booking@domainame.com">coming soon</Link>
            </li>
          </ul>
          <div className="separator">
            <span></span>
          </div>
          <div className="booking-info">
            <div className="bk-title">Booking request</div>
            <div className="bk-no">
              <Link to="tel:+88-123-123456">+234-coming-soon</Link>
            </div>
          </div>
        </div>
      </section>

      <Banner />
      <Offer />
      <Story />
      {/* <Specialdish /> */}
      <Menusection />
      <Special />
      <Contact />
      {/* <Whyus /> */}
      {/* <Feature />
      <Teem /> */}
      <Videosection />
      {/* <Reacntupdate /> */}
    </>
  );
}

export default Main;
