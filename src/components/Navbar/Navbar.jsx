import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home" onClick={closeMenu}>Suraj Bitla</a>
      </div>
      
      <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#publications" onClick={closeMenu}>Publications</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#certifications" onClick={closeMenu}>Certifications</a>
        <a href="#patents" onClick={closeMenu}>Patents</a>
        <a href="#awards" onClick={closeMenu}>Awards</a>
        <a href="#activities" onClick={closeMenu}>Activities</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <div className="navbar-burger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
