import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import {AiFillApple} from "react-icons/ai"
import {FcPhoneAndroid} from "react-icons/fc"
import {AiFillWindows} from "react-icons/ai"


export const AppDownload = () => {
  useEffect(() => {
      
    
    AOS.init({
      duration:1000,
    })
  }, [])
  
  return (
    <div  className='appDownloadContainer'>
     <div className="center" data-aos="fade-up-right">
     <h3>XPREDICT APP DOWNLOAD</h3>
      <hr />
      <p>Our apps will soon be available for download on all stores.</p>
      <button data-aos="flip-left"><AiFillApple/>iOS</button>
      <button data-aos="flip-left"> <FcPhoneAndroid />Android</button>
      <button data-aos="flip-left"> <AiFillWindows /> Windows</button>
     </div>
    </div>
  )
}
