import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import {FaFacebook} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";


export const Subscribe = () => {
  useEffect(() => {
      
    
    AOS.init({
      duration:1000,
    })
  }, [])
  return (
    <div  className='subscribeContainer'>
      <div data-aos="zoom-out-left">
      <h2>SUBSCRIBE NOW!</h2>
      <input type="email" name="" placeholder='Enter Your Email' id="" />
      <input type="submit" value="Subscribe" />
      </div>
      <div className='icons'>
        <FaFacebook color='white' size="30px"/>
        <AiFillTwitterCircle color='white' size="30px"/>
        <AiFillInstagram color='white' size="30px"/>
      </div>
    </div>
  )
}
