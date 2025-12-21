import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://linkedin.com/in/suraj-bitla" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/SurajBitla" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:surajb.5639@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-text">
          © {currentYear} Suraj Bitla. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
