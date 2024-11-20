import React from 'react';
import './About.css';
import { FaCode, FaCloud, FaBrain, FaUsers } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Full Stack Development",
      description: "Expertise in Python, Java, ReactJS, and ASP.NET"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Technologies",
      description: "Proficient in AWS and Azure cloud services"
    },
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      description: "Specialized in ML, computer vision, and ADAS systems"
    },
    {
      icon: <FaUsers />,
      title: "Team Collaboration",
      description: "Strong experience in agile development and team leadership"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-summary">
            Pursuing a Master’s degree in Computer Science from Rowan University, I am an AI Engineer and Full Stack Developer with a passion for building innovative solutions. With a strong foundation in machine learning, web development, and cloud technologies, I have successfully designed and implemented scalable systems, edge computing frameworks, and advanced driver-assistance systems (ADAS). My expertise lies in creating high-performance applications that enhance user experience and operational efficiency.
            </p>
            <p className="about-description">
            I bring hands-on experience from my roles at Creditsafe Technology and Accenture, where I collaborated with clients to solve complex challenges through agile methodologies. Committed to continuous learning, I have earned multiple certifications in data science, AI, and programming, fueling my drive for innovation and growth. As I anticipate my graduation in December 2024, I am eager to apply my skills to cutting-edge projects that make a meaningful impact.
            </p>
          </div>

          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <div className="highlight-card" key={index}>
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <h3>{highlight.title}</h3>
                <p className="highlight-description">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Certifications</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Publications</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Patent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
