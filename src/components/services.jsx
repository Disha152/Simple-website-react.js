import React from 'react';
import {Carousel} from "react-responsive-carousel";
import img1 from "../assets/3.png";
import img2 from "../assets/4.jpg";
import "../styles/services.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Services() {
  return (<>
    <div className='services' id='services'>
     <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000}
     showThumbs={false}>
      
      <div>
        <img src = {img1} alt = "Item1" style={{ width: '500px', height: '400px' }} />
        <p className="legend">Full Stack</p>
      
        </div>
        <div>
        <img src = {img2} alt = "Item2" style={{ width: '500px', height: '400px' }} />
        <p className="legend">Peer to Peer Support .</p>
      
        </div>
        </Carousel> 
       
    </div>
    </>
  )
}
