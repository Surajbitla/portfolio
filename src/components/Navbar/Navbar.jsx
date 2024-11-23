import React, { useState, useEffect } from 'react';
import './Navbar.css';
import ProfileModal from '../ProfileModal/ProfileModal';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const sections = document.querySelectorAll('section[id]');
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const scrollPosition = window.scrollY + navHeight + 50;
        let current = '';
        
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');
          
          const modalOverlay = document.querySelector('.modal-overlay');
          if (!modalOverlay && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = sectionId;
          }
        });

        if (current !== '') {
          setActiveSection(current);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
      const closeButton = modalOverlay.querySelector('.modal-close');
      if (closeButton) {
        closeButton.click();
      }
    }

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
        <img 
          src="./images/pic.jpg" 
          alt="Suraj" 
          className="profile-pic"
          onClick={() => setIsProfileModalOpen(true)}
        />
        <div className="brand-info">
          <span className="brand-title">My Portfolio</span>
          <span className="brand-role">Graduate Research Assistant</span>
        </div>
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
      
      <ProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;


