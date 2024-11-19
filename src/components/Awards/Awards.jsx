import React from 'react';
import './Awards.css';
import { FaTrophy, FaMedal } from 'react-icons/fa';

const Awards = () => {
  const awards = [
    {
      icon: <FaTrophy />,
      title: "Upsilon Pi Epsilon Honor Society",
      organization: "Rowan University",
      date: "March 2024",
      description: "Received International Honor Society award for outstanding academic research, achievements, and scholarly excellence in Computing and Information Science."
    },
    {
      icon: <FaMedal />,
      title: "NPTEL Online Certification",
      achievements: [
        {
          course: "Problem Solving Through Programming in C",
          score: "84%",
          rank: "Top 2%"
        },
        {
          course: "Database Management System",
          score: "89%",
          rank: "Top 5%"
        }
      ]
    }
  ];

  return (
    <section className="awards" id="awards">
      <div className="awards-container">
        <h2 className="section-title">Awards & Honors</h2>
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div className="award-card" key={index}>
              <div className="award-icon">
                {award.icon}
              </div>
              <h3>{award.title}</h3>
              {award.organization && (
                <p className="award-org">{award.organization}</p>
              )}
              {award.date && (
                <p className="award-date">{award.date}</p>
              )}
              {award.description && (
                <p className="award-description">{award.description}</p>
              )}
              {award.achievements && (
                <div className="achievements-list">
                  {award.achievements.map((achievement, achIndex) => (
                    <div className="achievement-item" key={achIndex}>
                      <h4>{achievement.course}</h4>
                      <p>Score: {achievement.score}</p>
                      <p className="achievement-rank">Rank: {achievement.rank}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
