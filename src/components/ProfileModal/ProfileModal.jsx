import React from 'react';
import { 
  FaTimes, FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, 
  FaCode, FaClock, FaGlobe, FaServer, FaDatabase, FaAward,
  FaUserGraduate, FaChartLine, FaBrain, FaBolt, FaCloud, FaLayerGroup
} from 'react-icons/fa';
import './ProfileModal.css';

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

//   const stats = [
//     { label: 'Code Coverage', value: '95%', icon: <FaCode /> },
//     { label: 'Uptime', value: '99.9%', icon: <FaClock /> },
//     { label: 'API Response', value: '<100ms', icon: <FaServer /> },
//     { label: 'DB Queries', value: '500K+', icon: <FaDatabase /> },
//     { label: 'Global Users', value: '10K+', icon: <FaGlobe /> },
//     { label: 'ML Accuracy', value: '97%', icon: <FaBrain /> }
//   ];

 const stats = [
    { label: 'AI Model Latency', value: '<30ms', icon: <FaBolt /> }, // Optimized model performance.
    { label: 'Edge AI Efficiency Boost', value: '40%', icon: <FaChartLine /> }, // Efficiency improvement in edge devices.
    { label: 'Cloud Scalability Projects', value: '15+', icon: <FaCloud /> }, // Cloud systems you've scaled and deployed.
    { label: 'Optimized Neural Layers', value: '10+', icon: <FaLayerGroup /> }, // Layers optimized in neural networks.
    { label: 'Real-Time Data Processing', value: '50K+ ops/sec', icon: <FaServer /> }, // Real-time data handling capability.
    { label: 'Database Speed Improvement', value: '30% Faster', icon: <FaDatabase /> } // Query performance optimization.
  ];

  const achievements = [
    { title: 'Publications', value: 2, trend: '+2 in 2024' },
    { title: 'Projects Delivered', value: 10, trend: '+3 this quarter' },
    { title: 'Certifications', value: 30, trend: '+5 in progress' },
    { title: 'Code Contributions', value: 100, trend: '+9 this week' }
  ];

  return (
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="profile-header">
          <div className="profile-picture-container">
            <img 
              src="/images/pic.jpg" 
              alt="Suraj" 
              className="profile-picture"
            />
            <div className="status-indicator">Available for Opportunities</div>
          </div>
          <h2>Suraj Kumar</h2>
          <div className="title-container">
            <span className="profile-title">Full Stack Developer</span>
            <span className="title-separator">|</span>
            <span className="profile-title">AI Engineer</span>
          </div>
        </div>

        <div className="profile-info">
          <div className="status-badges">
            <span className="status-badge">
              <FaUserGraduate /> Graduate Researcher
            </span>
            <span className="status-badge">
              <FaChartLine /> Tech Innovator
            </span>
            <span className="status-badge">
              <FaAward /> Top Performer
            </span>
          </div>

          <div className="metrics-grid">
            {stats.map((stat, index) => (
              <div key={index} className="metric-card">
                {stat.icon}
                <div className="metric-value">{stat.value}</div>
                <div className="metric-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="achievements-section">
            <h3>Growth Metrics</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-value">{achievement.value}</div>
                  <div className="achievement-title">{achievement.title}</div>
                  <div className="achievement-trend">{achievement.trend}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-section">
            <div className="info-item">
              <FaMapMarkerAlt />
              <span>New Jersey, United States</span>
            </div>
            <div className="info-item">
              <FaEnvelope />
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal; 