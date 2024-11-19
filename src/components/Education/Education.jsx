import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Rowan University",
      location: "Glassboro-New Jersey",
      year: "2023",
      gpa: "4/4",
      specialization: "Data Mining, Web Development, Data Warehousing, Agile Software Development"
    },
    {
      degree: "Bachelor of Technology (B. Tech), Computer Science",
      school: "Sreenidhi Institute of Science & Technology",
      location: "Ghatkesar-Hyderabad",
      year: "2016 - 2020",
      gpa: "9.35/10"
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
                <FaGraduationCap />
              </div>
              <h3>{edu.degree}</h3>
              <h4>{edu.school}</h4>
              <p className="education-location">{edu.location}</p>
              <p className="education-year">{edu.year}</p>
              <p className="education-gpa">GPA: {edu.gpa}</p>
              {edu.specialization && (
                <p className="education-specialization">
                  Specialization: {edu.specialization}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
