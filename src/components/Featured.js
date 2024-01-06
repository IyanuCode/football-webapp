import React, { useEffect } from 'react'
import goalPost from "../img/goalPost.jpg";
import {BiSolidMeteor} from "react-icons/bi";


import AOS from "aos";
import "aos/dist/aos.css";

export const Featured = () => {

  useEffect(() => {
      
    
    AOS.init({
      duration:1000,
    })
  }, [])
  return (
   <div>
     <div id='featured' className='featuredHeader'>
       <h3>FEATURED PICKS</h3>
        <p>X-predict Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi labore, harum officiis error quia cupiditate?</p>
     </div>

    <div className='featuredLandingPage'>
      <div  data-aos="fade-right"  className="right">
        <img src={goalPost} alt="goal post" />
      </div>
      
      <div data-aos="fade-left"className="left">
       
        <p><BiSolidMeteor size="12px"/> CHELSEA - SPURS <br/>2x <br/></p>
        <p><BiSolidMeteor size="12px"/>  WATFORD - CHELSEA<br/>1</p>
        <p><BiSolidMeteor size="12px"/> WATFORD - WESTHAM<br/>2HH</p>
        <p><BiSolidMeteor size="12px"/> WATFORD - CHELSEA<br/>O2.5</p>
        <p><BiSolidMeteor size="12px"/> WATFORD - CHELSEA<br/>Home win</p>
        <p><BiSolidMeteor size="12px"/> WATFORD - CHELSEA<br/>2HH</p>
        <p><BiSolidMeteor size="12px"/> WATFORD - CHELSEA<br/>2HH</p>
        <p><BiSolidMeteor size="12px"/> WATFORD - CHELSEA<br/>2HH</p>
        <p><BiSolidMeteor size="12px"/> WATFORD - CHELSEA<br/>2HH</p>
        <p><BiSolidMeteor size="12px"/> WATFORD - CHELSEA<br/>2HH</p>
      </div>
     </div>
     


    </div>
  )
}
