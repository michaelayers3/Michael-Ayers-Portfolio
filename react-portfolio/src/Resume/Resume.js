import React from 'react';
import myResume from './AYERSRESUME.pdf';

const Resume = () => {
  return (
    <div className = 'resume'>
      <h2>Resume</h2>
      {/* Add a link to your resume for download */}
     
      <a href={myResume} download>
        Download My Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Node</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>SQL</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </div>
  );
};

export default Resume;
