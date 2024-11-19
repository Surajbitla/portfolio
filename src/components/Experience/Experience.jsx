import React from 'react';
import './Experience.css';
import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      icon: <FaGraduationCap />,
      title: "Graduate Research Assistant",
      company: "Rowan University",
      location: "Glassboro, NJ",
      period: "June 2023 – Present",
      responsibilities: [
        "Worked on Cooperative Inference for Advanced Driver-Assistance Systems within Vehicular Edge Networks",
        "Utilized Robot Operating System on Jetson TX2 to optimize neural network models (AlexNet, ResNet, R-CNN, YOLO) for image classification",
        "Worked on optimizing layer positioning to enhance efficiency and accuracy in edge computing for vehicular applications"
      ],
      technologies: ["Python", "ROS", "Deep Learning", "Neural Networks", "Edge Computing"]
    },
    {
      icon: <FaCode />,
      title: "Full Stack Engineer",
      company: "Creditsafe Technology Private Limited",
      location: "Remote",
      period: "July 2022 – December 2022",
      responsibilities: [
        "Worked as a full stack developer on the development of the industry platform for creditsafe",
        "Collaborated with clients to understand and meet their requirements",
        "Developed and maintained scalable web applications"
      ],
      technologies: ["ASP.NET", "ReactJS", "Python", "AWS", "Azure", "Oracle", "MySQL"]
    },
    {
      icon: <FaLaptopCode />,
      title: "Application Development Associate",
      company: "Accenture",
      location: "Remote",
      period: "October 2020 – July 2022",
      responsibilities: [
        "Developed user interfaces for multiple clients, focusing on user story implementation",
        "Proactively resolved bugs and delivered optimal solutions",
        "Facilitated knowledge transfer sessions for new team members",
        "Recognized for outstanding contributions and commitment to excellence"
      ],
      technologies: ["Python", "ReactJS", "ASP.NET", "JavaScript", "HTML5", "CSS3", "MySQL"]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-icon">
                {exp.icon}
              </div>
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="experience-location">{exp.location}</p>
                <p className="experience-period">{exp.period}</p>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
                <div className="experience-tech">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
