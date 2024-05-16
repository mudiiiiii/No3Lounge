import React from 'react'
import Chefsection from '../Menchefs/Chefsection'
import Quotesection from '../Menchefs/Quotesection'
import Teem from '../Menhome/Teem'
import Special from "../Menhome/Special";
import Bredcrumb from '../Bredcrumb/Main'
import Img from '../../assets/images/03photos/food/1Z6A1108.jpg'

function Main() {
  return (

    <>
      <Bredcrumb subtitle="View Our Gallery" title="GALLERY" Img={Img} />
      {/* <Chefsection />
      <Quotesection />
      <Teem /> */}
      <Special />
    </>

  )
}

export default Main