import React from 'react';



const Project = ({ title, description, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <div className='image-wrapper'>
        <img src={image} alt={title} />
        <div className='details'>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-globe"></i>
          </a>
            
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <i className='fab fa-github'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

