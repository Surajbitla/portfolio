import React, { useState, useEffect } from 'react';
import './Navbar.css';
import ProfileModal from '../ProfileModal/ProfileModal';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const sections = document.querySelectorAll('section[id]');
        const nav = document.querySelector('.navbar');
        if (!nav) return;
        const navHeight = nav.offsetHeight;
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
    setIsMobileMenuOpen(false); // Close mobile menu on click

    // Check for modal closure logic if needed (simplified here)
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
      // ... (existing modal logic if feasible to keep, otherwise simplify)
    }

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const scrollPosition = section.offsetTop - navHeight;

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
        setActiveSection(sectionId);
      }
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
          <span className="brand-title">Suraj Bitla</span>
          <span className="brand-role">Senior Software Engineer</span>
        </div>
      </div>

      <div className="navbar-right">
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
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

        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {darkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
        </button>

        <button
          className="navbar-burger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
