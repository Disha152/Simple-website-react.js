import React from 'react';
import '../styles/home.scss';
import '../styles/divider.scss';

import imageSrc from '../assets/2.png'; // Replace this with the actual path to your image

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
    </>
  );
}
