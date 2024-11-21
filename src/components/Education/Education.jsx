import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      icon: <FaGraduationCap />,
      degree: "Master of Science in Computer Science",
      university: "Rowan University",
      location: "Glassboro-New Jersey",
      period: "2023-2024",
      gpa: "GPA: 4/4",
      specialization: "Specialization: Data Mining, Web Development, Data Warehousing, Agile Software Development"
    },
    {
      icon: <FaGraduationCap />,
      degree: "Bachelor of Technology in Computer Science",
      university: "Sreenidhi Institute of Science and Technology",
      location: "Hyderabad, India",
      period: "2016-2020",
      gpa: "GPA: 9.35/10",
      specialization: "Specialization: Software Engineering, Database Management, Computer Networks, Web Development"
    }
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-icon">
                {edu.icon}
              </div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <h4 className="education-university">{edu.university}</h4>
                <p className="education-location">{edu.location}</p>
                <p className="education-period">{edu.period}</p>
                <h4 className="education-gpa">{edu.gpa}</h4>
                <p className="education-specialization">{edu.specialization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
