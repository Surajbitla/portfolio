import React from 'react';
import ReactDOM from 'react-dom';
import {
  FaTimes, FaGithub, FaLinkedin,
  FaServer, FaDatabase, FaAward,
  FaUserGraduate, FaChartLine, FaBolt, FaCloud, FaLayerGroup
} from 'react-icons/fa';
import './ProfileModal.css';
import PropTypes from 'prop-types';

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const stats = [
    { label: 'AI Model Latency', value: '<30ms', icon: <FaBolt /> },
    { label: 'Edge AI Efficiency Boost', value: '40%', icon: <FaChartLine /> },
    { label: 'Cloud Scalability Projects', value: '15+', icon: <FaCloud /> },
    { label: 'Optimized Neural Layers', value: '10+', icon: <FaLayerGroup /> },
    { label: 'Real-Time Data Processing', value: '50K+ ops/sec', icon: <FaServer /> },
    { label: 'Database Speed Improvement', value: '30% Faster', icon: <FaDatabase /> }
  ];

  const achievements = [
    { title: 'Publications', value: 2, trend: '+2 in 2024' },
    { title: 'Projects Delivered', value: 10, trend: '+3 this quarter' },
    { title: 'Certifications', value: 30, trend: '+5 in progress' },
    { title: 'Code Contributions', value: 100, trend: '+9 this week' }
  ];

  return ReactDOM.createPortal(
    <div className="profile-modal-overlay" onClick={onClose}>
      <div className="profile-modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="profile-header">
          <div className="profile-picture-container">
            <img
              src="./images/pic.jpg"
              alt="Suraj"
              className="profile-picture"
            />
            <div className="status-indicator">Available for Opportunities</div>
          </div>
          <h2>Suraj Bitla</h2>
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

          <div className="social-links">
            <a href="https://github.com/SurajBitla" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/suraj-bitla" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

ProfileModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default ProfileModal;