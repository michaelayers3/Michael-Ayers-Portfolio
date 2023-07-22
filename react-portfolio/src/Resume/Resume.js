import React from 'react';

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      {/* Add a link to your resume for download */}
      <a href="/path/to/your/resume.pdf" download>
        Download My Resume
      </a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </div>
  );
};

export default Resume;
