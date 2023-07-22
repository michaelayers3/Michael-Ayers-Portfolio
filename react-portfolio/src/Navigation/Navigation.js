import React, { useState } from 'react';

const Navigation = ({
  setShowAboutMe,
  setShowPortfolio,
  setShowContact,
  setShowResume,
}) => {
  const [activeSection, setActiveSection] = useState('');

  const handleNavigationClick = (section) => {
    setActiveSection(section);

    // Toggle the visibility of each section based on the clicked navigation link
    setShowAboutMe(section === 'about');
    setShowPortfolio(section === 'portfolio');
    setShowContact(section === 'contact');
    setShowResume(section === 'resume');
  };

  return (
    <nav>
      <a
        href="#about"
        className={activeSection === 'about' ? 'active' : ''}
        onClick={() => handleNavigationClick('about')}
      >
        About Me
      </a>
      <a
        href="#portfolio"
        className={activeSection === 'portfolio' ? 'active' : ''}
        onClick={() => handleNavigationClick('portfolio')}
      >
        Portfolio
      </a>
      <a
        href="#contact"
        className={activeSection === 'contact' ? 'active' : ''}
        onClick={() => handleNavigationClick('contact')}
      >
        Contact
      </a>
      <a
        href="#resume"
        className={activeSection === 'resume' ? 'active' : ''}
        onClick={() => handleNavigationClick('resume')}
      >
        Resume
      </a>
    </nav>
  );
};

export default Navigation;
