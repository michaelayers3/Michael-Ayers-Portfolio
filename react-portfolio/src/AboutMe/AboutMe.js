
import React from 'react';
import meImg from '../images/me.jpeg';

const AboutMe = () => {
  return (
    <div class = 'about'>
      <h2>About Me</h2>
      <div className = 'image-wrapper'>
      <img src ={meImg} alt = 'itsme' />
      <div className ='details'>
      <p>Here's a short bio about me...</p>
      </div>
      </div>
      {/* Add other content for the "About Me" section */}
    </div>
  );
};

export default AboutMe;
