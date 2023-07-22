import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className='social-links'>
                    <a href="https://github.com/michaelayers3" target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-github'></i>
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} Michael Ayers. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;