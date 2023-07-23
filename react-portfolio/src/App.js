// App.js

import React, { useState } from 'react';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Navigation from './Navigation/Navigation.js';
import Project from './Project/Project.js';
import AboutMe from './AboutMe/AboutMe.js';
import Contact from './Contact/Contact.js';
import Resume from './Resume/Resume.js';
import './reset.css';
import './styles.css';
// import * as images from './images';

const App = () => {
  const [showAboutMe, setShowAboutMe] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const projects = [
    {
      title: 'Remind Me',
      description: 'Email based reminder app',
      image: './images/remind.PNG',
      deployedLink: 'https://monthlyreminders.herokuapp.com/',
      githubLink: 'https://github.com/jmichaeldavis/remind-me',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      image: './images/me.jpg',
      deployedLink: 'https://project2-demo.com',
      githubLink: 'https://github.com/your-username/project2',
    },
    // Add more project data here as needed
  ];

  return (
    <div>
      <Header />      
      <Navigation
      setShowAboutMe={setShowAboutMe}
      setShowPortfolio={setShowPortfolio}
      setShowContact={setShowContact}
      setShowResume={setShowResume}
      />
      {showAboutMe && (
        <section id="about">
         <AboutMe />
        </section>
      )}

      {showPortfolio && (
        <section id="portfolio">
          <h2>Portfolio</h2>
          <div className="portfolio-section">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </section>
      )}

      {showContact && (
        <section id="contact">
         <Contact />
        </section>
      )}

      {showResume && (
        <section id="resume">
        <Resume />
        </section>
      )}

      <Footer />
    </div>
  );
};

export default App;
