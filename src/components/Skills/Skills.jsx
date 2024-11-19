import React from 'react';
import './Skills.css';
import { FaCode, FaDatabase, FaCloud, FaBrain, FaTools, FaServer } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C++", "C#", "R"]
    },
    {
      icon: <FaServer />,
      title: "Frameworks & Libraries",
      skills: ["ReactJS", "Node.js", "Django", "ASP.NET", "PyTorch", "ROS"]
    },
    {
      icon: <FaCloud />,
      title: "Cloud Technologies",
      skills: ["AWS", "Azure", "EC2", "S3", "Lambda", "RDS"]
    },
    {
      icon: <FaDatabase />,
      title: "Databases",
      skills: ["MySQL", "MongoDB", "SQL Server", "PostgreSQL"]
    },
    {
      icon: <FaBrain />,
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "Keras", "Computer Vision", "Data Mining", "Neural Networks"]
    },
    {
      icon: <FaTools />,
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "VS Code", "Jupyter"]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                {category.icon}
              </div>
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
