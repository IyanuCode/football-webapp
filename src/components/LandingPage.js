import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

export const LandingPage = () => {

  useEffect(() => {
      
    
    AOS.init({
      duration:1000,
    })
  }, [])

  return (
    <div data-aos = "fade-down" className='landingPageContainer'>
      <nav className='landingPage'>
        <div className="logo">
          <h3>X <span className='pink'>Predict</span></h3>
        </div>

        <div className="navBtn">
          <ul>
            {/* <Link to="#featured">Home</Link> */}
            {/* <li> <Link to="#featured" /> <a href="#featured"></a> Home</Link> </li> */}

            <li><a href="#">Featured Picks</a></li>
            <li><a href="#">Subscribe</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      <div data-aos="fade-right" className="landingPageContent">
        <h3>ENGLISH FANTASY</h3>
        <p>CROSS-PLATFORM SECURE<br/>
          FANTASY LEAGUE</p>
          <  hr />
          <p className='small'> You can join and perticipate in our special Fantacy leages</p>
          <button className="firstBtn">Join FPL</button>
          <button  className='secondBtn'>Join Uefa League</button>
      </div>
    </div>

  )
}
