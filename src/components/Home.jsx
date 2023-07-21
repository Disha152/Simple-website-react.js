import React from 'react';
import '../styles/home.scss';
import '../styles/divider.scss';

import imageSrc from '../assets/2.png'; 
import{AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div className="home">
        <main>
          <h1>Welcome to TechStar</h1>
          <p>Here at TechStar we offer a wide range of services to help you with your technology needs.</p>
        </main>
      </div>
      <div className="divider"/>
      <div className="home2">
        <img src={imageSrc} alt="Graphics" />
        <div><p>
          We are your one and only soluiton to the tech problems you face everyday. We are leading tech companu whose aim is to increase the problem solving ability in children.
          </p></div>
      </div>
      <div className="divider"/>
    <div className='home3'>
    <div>
          <h1>Who are we?</h1>
          <p>We are a group of tech enthusiasts who want to help you with your tech problems.
            We are a group of tech enthusiasts who want to help you with your tech problems.
            We are a group of tech enthusiasts who want to help you with your tech problems.
            We are a group of tech enthusiasts who want to help you with your tech problems.
            We are a group of tech enthusiasts who want to help you with your tech problems.
          </p>
        </div>
      </div>
     
      <div className='home4'>

        <h1>Brands</h1>
        <div>
     
         <article>
          <div style={{animationDelay :"0.35s"}}>
            <AiFillGoogleCircle/>
            <p>Google</p>
            <br/>
          </div>
         </article>

         <article>
          <div style={{animationDelay :"0.55s"}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
            <br/>

          </div>
         </article>

         <article>
          <div style={{animationDelay :"0.75s"}}>
            <AiFillYoutube/>
            <p>Youtube</p>
            <br/>

          </div>
         </article>

         <article>
          <div style={{animationDelay :"0.95s"}}>
            <AiFillInstagram/>
            <p>Instagram</p>
            <br/>

          </div>
         </article>
        </div>
      </div>

    </>
  );
}
