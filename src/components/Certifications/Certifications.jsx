import React, { useState } from 'react';
import './Certifications.css';
import { FaCertificate, FaMicrosoft, FaGoogle, FaAws } from 'react-icons/fa';
import { SiIbm, SiUdemy } from 'react-icons/si';
import Modal from '../Modal/Modal';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      provider: "University of Michigan",
      icon: <FaCertificate />,
      items: [
        {
          title: "Python for Everybody Specialization",
          image: "/images/certificates/python.jpg",
          grade: "97.5% - 100%",
          date: "2023",
          credential: "Credential ID: ABC123"
        }
        // Add more certificates with their images
      ]
    },
    {
      provider: "IBM",
      icon: <SiIbm />,
      items: [
        {
          title: "Data Science Professional Certificate",
          image: "/images/certificates/ibm.jpg",
          grade: "97.5% - 100%",
          date: "2023",
          credential: "Credential ID: XYZ789"
        }
        // Add more certificates
      ]
    }
    // Add other providers
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="certification-provider" key={index}>
              <div className="provider-header">
                <div className="provider-icon">{cert.icon}</div>
                <h3>{cert.provider}</h3>
              </div>
              
              <div className="certificates-list">
                {cert.items.map((item, itemIndex) => (
                  <div 
                    className="certificate-card" 
                    key={itemIndex}
                    onClick={() => setSelectedCert(item)}
                  >
                    <div className="certificate-preview">
                      <img src={item.image} alt={item.title} />
                      <div className="certificate-overlay">
                        <span>Click to view</span>
                      </div>
                    </div>
                    <h4>{item.title}</h4>
                    <p className="certificate-grade">{item.grade}</p>
                    <p className="certificate-date">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <Modal onClose={() => setSelectedCert(null)}>
          <div className="certificate-modal">
            <img src={selectedCert.image} alt={selectedCert.title} />
            <h3>{selectedCert.title}</h3>
            <p>{selectedCert.credential}</p>
            <p>Grade: {selectedCert.grade}</p>
            <p>Issued: {selectedCert.date}</p>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Certifications;
