import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";


export const Footer = () => {
  useEffect(() => {
      
    
    AOS.init({
      duration:1000,
    })
  }, [])
  return (
    <div data-aos="zoom-out" className='footerContainer'>
      <div className="links">
        <h5>USEFUL LINKS</h5>
        <ul>
          <li><a href="#">EPL PREDICTION</a></li>
          <li><a href="#">TODAY'S PREDICTION</a></li>
          <li><a href="#">TOMORROW'S PREDICTION</a></li>
          <li><a href="#">EPL </a></li>
          <li><a href="#">ABOUT US</a></li>
        </ul>
      </div>

      <div className="support">
        <h5>SUPPORT CENTER</h5>
        <ul>
          <li><a href="#">CONTACT US</a></li>
          <li><a href="#">TERMS AND CONDITION </a></li>
          <li><a href="#">PRIVACY POLICY</a></li>
          <li><a href="#">SUBSCRIBE </a></li>
          <li><a href="#">ABOUT US</a></li>
        </ul>
      </div>

      <div className="links">
        <h5>CONTACT US</h5>
        <p>Phone: +233 33434</p>
        <p>Email: xpredict@gmail.com</p>
        <p>Website:www.Xpredict.com</p>       
      </div>

      <div className="predict">
        <h5>X</h5>
        <h5 className='pink'>Predict</h5>
        <p>© Copyright 2021. Xpredict.com</p>
      </div>
    </div>
  )
}
