import React from 'react';
import './Activities.css';
import { FaUsers, FaLaptopCode, FaHandsHelping, FaGamepad } from 'react-icons/fa';

const Activities = () => {
  const activities = [
    {
      icon: <FaLaptopCode />,
      title: "Hackathon Volunteer",
      description: "Volunteered in multiple hackathons conducted on campus and in other universities."
    },
    {
      icon: <FaUsers />,
      title: "ECA Club Member",
      description: "Active member of the Emerging Computer's Arena (ECA) Club in College."
    },
    {
      icon: <FaHandsHelping />,
      title: "Street Cause NGO",
      description: "Participated in various events and fundraising activities to assist the underprivileged. Responsible for ticket sales and fund collection for charitable events."
    },
    {
      icon: <FaGamepad />,
      title: "Event Organizer",
      description: "Conducted LAN gaming events during college fest, promoting student engagement and community building."
    }
  ];

  return (
    <section className="activities" id="activities">
      <div className="activities-container">
        <h2 className="section-title">Extra-Curricular Activities</h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div className="activity-card" key={index}>
              <div className="activity-icon">
                {activity.icon}
              </div>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
