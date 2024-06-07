import React from 'react'
import { Link } from 'react-router-dom'
// import bg1 from '../../assets/images/background/bg-1.png'
// import bg2 from '../../assets/images/background/bg-2.png'
import offerimg1 from '../../assets/images/03photos/food/1Z6A0862.jpg'
import offerimg2 from '../../assets/images/03photos/food/1Z6A1006.jpg'
import offerimg3 from '../../assets/images/03photos/drinks/1Z6A0876.jpg'
import drinkpdf from '../../assets/pdf/New Drink menu 2024.pdf';
import entreepdf from '../../assets/pdf/New Food menu 2024.pdf';
import apppdf from '../../assets/pdf/New Food menu 2024.pdf';

function Offer() {

  const offers = [
    {
      image: offerimg1,
      title: 'Appetizers',
      link: `${apppdf}`,
      internal: false
    },
    {
      image: offerimg2,
      title: 'Entree',
      link: `${entreepdf}#page=4`,
      internal: false
    },
    {
      image: offerimg3,
      title: 'Desserts & Drinks',
      link: drinkpdf
    }
  ];

  return (
    <>
      <section className="we-offer-section">
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle"><span>Flavors for royalty</span></div>
            <div className="pattern-image">
              <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
            </div>
            <h2>We Offer Top Notch</h2>
            <div className="text">We have a diverse group of products & services that promises to give our customers a different experience every time.</div>
          </div>
          <div className="row justify-content-center clearfix">
            {offers.map((offer, index) => (
              <div key={index} className="offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay={`${index * 300}ms`}>
                  <div className="image">
                    {offer.internal ? (
                      <Link to={offer.link}><img src={offer.image} alt="" /></Link>
                    ) : (
                      <a href={offer.link} target="_blank" rel="noopener noreferrer"><img src={offer.image} alt="" /></a>
                    )}
                  </div>
                  <h3>
                    {offer.internal ? (
                      <Link to={offer.link}>{offer.title}</Link>
                    ) : (
                      <a href={offer.link} target="_blank" rel="noopener noreferrer">{offer.title}</a>
                    )}
                  </h3>
                  <div className="more-link">
                    {offer.internal ? (
                      <Link to={offer.link}>view menu</Link>
                    ) : (
                      <a href={offer.link} target="_blank" rel="noopener noreferrer">view menu</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Offer
