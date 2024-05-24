import React from 'react'
import Bredcrumb from '../Bredcrumb/Main'
import Feedbackform from "./Form"
import Img from '../../assets/images/03photos/food/1Z6A1114.jpg'



function Main() {
    return (
      <>
        <Bredcrumb title="WE CARE ABOUT YOUR OPINION" subtitle="Feedback" Img={Img}  />
        <Feedbackform />
      </>
    )
  }
  
  export default Main