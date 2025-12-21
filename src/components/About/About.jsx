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
          <div className="about-card">
            <div className="about-text">
              <p className="about-summary">
                Software Engineer with 5+ years of experience in full-stack development, backend engineering, AI integration, and cloud-based deployment. Skilled in building scalable, production-ready systems using React 19, Node.js, Express.js, and MySQL, with a strong focus on performance and maintainability.
              </p>
              <p className="about-description">
                Experienced in integrating LLM-driven features using LangChain, GPT-4, and RAG pipelines for intelligent decision support. My background spans edge AI optimization on Jetson devices, cloud infrastructure on AWS/DigitalOcean, and secure API design. I thrive in leading engineering teams, delivering measurable improvements in reliability and user experience.
              </p>
            </div>
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
              <span className="stat-number">5+</span>
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
