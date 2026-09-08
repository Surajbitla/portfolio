import React from 'react';
import './About.css';
import { FaCode, FaCloud, FaBrain, FaBook } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Full Stack Development",
      description: "React, Angular, Next.js, Node.js, NestJS, Java, and Python"
    },
    {
      icon: <FaCloud />,
      title: "Cloud & Distributed Systems",
      description: "AWS, Azure, DigitalOcean, Docker, and federated service architectures"
    },
    {
      icon: <FaBrain />,
      title: "AI & LLM Engineering",
      description: "RAG pipelines, LangChain, multi-model LLM systems, and edge AI"
    },
    {
      icon: <FaBook />,
      title: "Published Research",
      description: "5 peer-reviewed IEEE & ACM papers on split computing and edge AI"
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
                Software engineer with 5+ years across enterprise, startup, and research engineering, and three years building applied AI systems. Currently developing enterprise investment platforms at Vanguard while leading AI product engineering for Trakvu and Chantro — multi-tenant SaaS platforms serving the construction industry.
              </p>
              <p className="about-description">
                My work spans LLM-driven features built with LangChain, GPT-4, and RAG pipelines; distributed services using Apollo Federation, GraphQL, and Kong; and edge AI optimization on NVIDIA Jetson hardware. That last thread became five peer-reviewed IEEE and ACM publications on split computing — research that cut inference latency by up to 94% on CPU-only edge devices. I care about systems that stay fast, stay maintainable, and actually reach production.
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
              <span className="stat-number">5</span>
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
