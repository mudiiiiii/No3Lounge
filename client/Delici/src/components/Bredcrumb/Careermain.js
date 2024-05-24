import React from "react";
import { Link } from "react-router-dom";

function Main({ subtitle, Img, title }) {
  return (
    <>
      <section className="inner-banner">
        <div
          className="image-layer img-fluid"
          style={{ backgroundImage: `url(${Img})` }}
        ></div>
        <div className="auto-container">
          <div className="inner">
            <div className="subtitle">
              <span> {title} </span>
            </div>

            <div className="pattern-image">
              <img
                src={require("../../assets/images/icons/separator.svg").default}
                alt="mySvgImage"
              />
            </div>

            <h1>
              <span>{subtitle}</span>
            </h1>
            <div
            className="links-box wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
          </div>
          </div>
          
        </div>
        
      </section>
    </>
  );
}

export default Main;
