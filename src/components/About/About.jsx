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
              Pursuing a Master's degree in Computer Science from Rowan University, I bring extensive experience in Python, Java, C++, JavaScript, ReactJS, and ASP.NET. With a strong foundation in machine learning, web development, and cloud technologies (AWS and Azure), I have developed applications that enhance user experience and project efficiency, including advanced driver-assistance systems and edge computing.
            </p>
            <p className="about-description">
              My roles at Creditsafe Technology and Accenture have honed my skills in client collaboration, problem-solving, and agile project delivery. Committed to continuous learning, I have completed multiple certifications in data science and programming. Anticipating my graduation in December 2024, I am eager to take on new challenges and contribute to innovative projects.
            </p>
          </div>

          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <div className="highlight-card" key={index}>
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
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
