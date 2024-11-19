import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections and navbar height for offset
      const sections = document.querySelectorAll('section[id]');
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const scrollPosition = window.scrollY + navHeight + 50; // Added extra offset for better detection

      // Find the current section
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
          console.log('Current section:', current); // Debug log
        }
      });

      if (current !== '') {
        setActiveSection(current);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once on mount to set initial active section
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    // Calculate the scroll position accounting for navbar height
    const scrollPosition = section.offsetTop - navHeight;
    
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });

    setActiveSection(sectionId);
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
