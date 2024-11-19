import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections and navbar height for offset
      const sections = document.querySelectorAll('section[id]');
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const scrollPosition = window.scrollY + navHeight + 50;

      // Find the current section
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        // Don't update active section if modal is open
        const modalOverlay = document.querySelector('.modal-overlay');
        if (!modalOverlay && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = sectionId;
        }
      });

      if (current !== '') {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    // Close any open modal
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
      const closeButton = modalOverlay.querySelector('.modal-close');
      if (closeButton) {
        closeButton.click();
      }
    }

    // After a small delay to allow modal to close
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const scrollPosition = section.offsetTop - navHeight;
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });

      setActiveSection(sectionId);
    }, 100);
  };

  // Navigation items array
  const navItems = [
    ['About', 'about'],
    ['Skills', 'skills'],
    ['Experience', 'experience'],
    ['Education', 'education'],
    ['Publications', 'publications'],
    ['Projects', 'projects'],
    ['Certifications', 'certifications'],
    ['Patents', 'patents'],
    ['Awards', 'awards'],
    ['Activities', 'activities'],
    ['Contact', 'contact']
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className={activeSection === 'home' ? 'active' : ''}
        >
          Suraj Bitla
        </a>
      </div>
      <div className="navbar-menu">
        {navItems.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? 'active' : ''}
            onClick={(e) => handleNavClick(e, id)}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
