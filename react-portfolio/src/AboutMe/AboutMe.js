
import React from 'react';
import meImg from '../images/megc.jpg';
import headshot from '../images/headshot.jpeg';
const AboutMe = () => {
  return (
    <div class = 'about'>
      <h2>About Me</h2>
      <div className = 'image-wrapper'>
      <img src ={headshot} alt = 'itsme' />
      <div className ='details'>
      <p>I recently graduated from the </p>
      <p> University of Utah's Fullstack Coding Bootcamp</p>
       <p> and am eager to learn more about the world of coding!</p>
       <p> I love coding, basketball, skateboarding, and yoga. </p>
      </div>
      </div>
      {/* Add other content for the "About Me" section */}
    </div>
  );
};

export default AboutMe;
