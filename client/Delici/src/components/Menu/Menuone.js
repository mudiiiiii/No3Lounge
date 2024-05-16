import React from 'react'
import Startermenu from '../Allmenus/FirstMenu/Startermenu';
import Offer from '../Allmenus/FirstMenu/Offers'
import Reservation from '../Allmenus/FirstMenu/Reservation';
import Bredcom from '../Bredcrumb/Main'
import Img from '../../assets/images/03photos/food/1Z6A1108.jpg'

function Menuone() {
  return (
    <>
      <Bredcom subtitle="Our Menu" title="DELICIOUS & AMAZING" Img={Img} />
      <Startermenu />
      <Offer />
      <Reservation />
    </>
  )
}

export default Menuone