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
import remindImage from './images/remind.PNG';
import jsImage from './images/JS quiz.png';
import WTFimage from './images/WTF.PNG';
import WorkDay from './images/Work-Day-Scheduler.png';
import pwImage from './images/Password-Generator.png';
import weatherImage from './images/Weather-Dashboard.png';
import designerAI from './images/designerai.png';
const App = () => {
  const [showAboutMe, setShowAboutMe] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const projects = [
    {
      title: 'Designer AI',
      description: 'React based app for designing websites',
      image: designerAI,
      deployedLink: 'https://designer-ai-a4b729b9dfd7.herokuapp.com/',
      githubLink: 'https://github.com/michaelayers3/project-3',
    },
    {
      title: 'Remind Me',
      description: 'Email based reminder app',
      image: remindImage,
      deployedLink: 'https://monthlyreminders.herokuapp.com/',
      githubLink: 'https://github.com/jmichaeldavis/remind-me',
    },
    {
      title: 'Where the Flick',
      description: 'Streaming movie search using APIs',
      image: WTFimage,
      deployedLink: 'https://ashtreid.github.io/where-the-flick/',
      githubLink: 'https://github.com/ashtreid/where-the-flick',
    },
    {
      title: 'JavaScript Quiz',
      description: 'Simple quiz using JavaScript',
      image: jsImage,
      deployedLink: 'https://michaelayers3.github.io/Web-APIs-Code-Quiz/',
      githubLink: 'https://github.com/michaelayers3/Web-APIs-Code-Quiz',
    },
    {
      title: 'Work Day Scheduler',
      description: 'Hourly work day scheduler',
      image: WorkDay,
      deployedLink: 'https://michaelayers3.github.io/Work-Day-Scheduler/',
      githubLink: 'https://github.com/michaelayers3/Work-Day-Scheduler',
    },
    {
      title: 'Password Generator',
      description: 'Password generator based on user input',
      image: pwImage,
      deployedLink: 'https://michaelayers3.github.io/Password-Generator/',
      githubLink: 'https://github.com/michaelayers3/Password-Generator',
    },
    {
      title: 'Weather Dashboard',
      description: 'Weekly weather forecast',
      image: weatherImage,
      deployedLink: 'https://michaelayers3.github.io/Weather-Dashboard/',
      githubLink: 'https://github.com/michaelayers3/Weather-Dashboard',
    },

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
          <div className="portfolio">
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
