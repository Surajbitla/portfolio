import React, { useState, useEffect } from 'react';
import './Certifications.css';
import { FaGraduationCap, FaMicrosoft } from 'react-icons/fa';
import { SiIbm, SiUdemy, SiSololearn, SiAmazon, SiReact } from 'react-icons/si';
import Modal from '../Modal/Modal';

const Certifications = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);

  // Function to scroll to top of certifications section when modal opens
  const handleOpenModal = (provider) => {
    const certificationsSection = document.getElementById('certifications');
    certificationsSection.scrollIntoView({ behavior: 'smooth' });
    setSelectedProvider(provider);
  };

  // Update the image paths to use public URL
  const getPublicImageUrl = (imagePath) => {
    return process.env.PUBLIC_URL + imagePath;
  };

  const certifications = [
    {
      provider: "University of Michigan",
      icon: <FaGraduationCap />,
      logo: "/images/logos/umich.png",
      certCount: "5 Certifications",
      description: "Python for Everybody Specialization",
      certificates: [
        {
          title: "Programming for Everybody",
          image: "/images/certificates/Programming for Everybody (Getting Started with Python).jpg",
          link: "https://coursera.org/verify/Q7WDUA8UHEPM",
          grade: "100%",
          duration: "3-6 weeks"
          // ,date: "2023"
        },
        {
          title: "Python Data Structures",
          image: "/images/certificates/Python Data Structures.jpg",
          link: "https://coursera.org/verify/WSWPLW359PDW",
          grade: "100%",
          duration: "3-6 weeks"
          // ,date: "2023"
        },
        {
          title: "Using Python to Access Web Data",
          image: "/images/certificates/Using Python to Access Web Data.jpg",
          link: "https://coursera.org/verify/8HCDECQXCT6X",
          grade: "100%",
          duration: "3-6 weeks"
          // ,date: "2023"
        },
        {
          title: "Using Databases with Python",
          image: "/images/certificates/Using Databases with Python.jpg",
          link: "https://coursera.org/verify/W57NLCY5FLRN",
          grade: "100%",
          duration: "3-6 weeks"
          // ,date: "2023"
        },
        {
          title: "Capstone: Retrieving, Processing, and Visualizing Data with Python",
          image: "/images/certificates/Capstone Python.jpg",
          link: "https://coursera.org/verify/X4NV7ZNZQ6TM",
          grade: "97.5%",
          duration: "3-6 weeks"
          // ,date: "2023"
        },
        {
          title: "Python for Everybody - specialization",
          image: "/images/certificates/Python for Everybody.jpg",
          link: "https://coursera.org/verify/specialization/HSVEETP3LRFL",
          grade: "97.5% - 100%",
          duration: "3-6 weeks"
          // ,date: "2023"
        }
      ]
    },
    {
      provider: "IBM",
      icon: <SiIbm />,
      logo: "/images/logos/ibm.png",
      certCount: "8 Certifications",
      description: "Data Science Professional Certificate",
      certificates: [
        {
          title: "What is Data Science",
          image: "/images/certificates/What is Data Science.jpg",
          link: "https://coursera.org/verify/ST6UE9QFT2FU",
          grade: "100%",
          duration: "3-6 weeks"
          // ,date: "2023"
        },
        {
          title: "Tools for Data Science",
          image: "/images/certificates/Tools for Data Science.jpg",
          link: "https://coursera.org/verify/PBBJ4Z8YQ6SL",
          grade: "99.25",
          duration: "3-6 weeks"
          // ,date: "2023"
        },
        {
          title: "Data Science Methodology",
          image: "/images/certificates/Data Science Methodology.jpg",
          link: "https://coursera.org/verify/3HREKNSFK3N5",
          grade: "100%",
          duration: "3-6 weeks"
          // ,date: "2023"
        },
        {
          title: "Python for Data Science, AI & Development",
          image: "/images/certificates/Python for Data Science AI & Development.jpg",
          link: "https://coursera.org/verify/ELUQUXSJBG7L",
          grade: "98.88%",
          duration: "3-6 weeks"
          // ,date: "2023"
        },
        {
          title: "Databases and SQL for Data Science with Python",
          image: "/images/certificates/Databases and SQL for Data Science with Python.jpg",
          link: "https://coursera.org/verify/5P8X864EXEJW",
          grade: "98.95%",
          duration: "3-6 weeks"
          // ,date: "2023"
        },
        {
          title: "Data Analysis with Python",
          image: "/images/certificates/Data Analysis with Python.jpg",
          link: "https://coursera.org/verify/YRDS2RUCLAW4",
          grade: "95.64%",
          duration: "3-6 weeks"
          // ,date: "2023"
        },
        {
          title: "Data Visualization with Python",
          image: "/images/certificates/Data Visualization with Python.jpg",
          link: "https://coursera.org/verify/2MGWAHFGY6F5",
          grade: "100%",
          duration: "3-6 weeks"
          // ,date: "2023"
        },
        {
          title: "Machine Learning with Python",
          image: "/images/certificates/Machine Learning with Python.jpg",
          link: "https://coursera.org/verify/9HLALGE75QZZ",
          grade: "100%",
          duration: "3-6 weeks"
          // ,date: "2023"
        }
      ]
    },
    {
      provider: "Microsoft",
      icon: <FaMicrosoft />,
      logo: "/images/logos/microsoft.png",
      certCount: "4 Certifications",
      description: "Azure & Development Certifications",
      certificates: [
        {
          title: "Azure Fundamentals",
          image: "/images/certificates/Azure Fundamentals.jpg",
          date: "2023"
        },
        {
          title: "Power Platform Fundamentals",
          image: "/images/certificates/Power Platform Fundamentals.jpg",
          // ,date: "2023"
        },
        {
          title: "Data Science Certification",
          image: "/images/certificates/Data Science Certification.jpg",
          // ,date: "2023"
        },
        {
          title: "JavaScript Certification",
          image: "/images/certificates/JavaScript Certification.jpg",
          // ,date: "2023"
        }
      ]
    },
    {
      provider: "Sololearn",
      icon: <SiSololearn />,
      logo: "/images/logos/sololearn.png",
      certCount: "6 Certifications",
      description: "Programming Language Certifications",
      certificates: [
        {
          title: "Python Course",
          image: "/images/certificates/Python Course.jpg",
          // ,date: "2023"
        },
        {
          title: "C Programming",
          image: "/images/certificates/C Programming.jpg",
          // ,date: "2023"
        },
        {
          title: "C++ Course",
          image: "/images/certificates/C++ Course.jpg",
          // ,date: "2023"
        },
        {
          title: "SQL",
          image: "/images/certificates/SQL.jpg",
          // ,date: "2023"
        },
        {
          title: "HTML",
          image: "/images/certificates/HTML.jpg",
          // ,date: "2023"
        },
        {
          title: "CSS",
          image: "/images/certificates/CSS.jpg",
          // ,date: "2023"
        }
      ]
    },
    {
      provider: "Udemy",
      icon: <SiUdemy />,
      logo: "/images/logos/udemy.png",
      certCount: "4 Certifications",
      description: "Development & Data Science Courses",
      certificates: [
        {
          title: "Machine Learning & Data Science with Python & R",
          image: "/images/certificates/Machine Learning & Data Science with Python & R.jpg",
          // ,date: "2023"
        },
        {
          title: "Python Best Parts",
          image: "/images/certificates/Python Best Parts.jpg",
          // ,date: "2023"
        },
        {
          title: "HTML & CSS Foundations",
          image: "/images/certificates/HTML & CSS Foundations.jpg",
          // ,date: "2023"
        },
        {
          title: "PHP Development",
          image: "/images/certificates/PHP Development.jpg",
          // ,date: "2023"
        }
      ]
    },
    {
      provider: "Amazon Web Services",
      icon: <SiAmazon />,
      logo: "/images/logos/amazon.png",
      certCount: "2 Certifications",
      description: "AWS Fundamentals",
      certificates: [
        {
          title: "AWS Cloud Technical Essentials",
          image: "/images/certificates/AWS Cloud Technical Essentials.jpg",
          link: "https://www.coursera.org/account/accomplishments/verify/FDUNFJSJ0CNV",
          grade: "100%",
          date: "2024"
        },
        {
          title: "Migrating to the AWS Cloud",
          image: "/images/certificates/Migrating to the AWS Cloud.jpg",
          link: "https://www.coursera.org/account/accomplishments/verify/YXELCFR311XH",
          grade: "100%",
          date: "2024"
        }
      ]
    },
    // {
    //   provider: "NPTEL",
    //   icon: <SiReact />,
    //   logo: "/images/logos/amazon.png",
    //   certCount: "2 Certifications",
    //   description: "NPTEL Online Certification",
    //   certificates: [
    //     {
    //       title: "Problem Solving Through Programming in C",
    //       image: "/images/certificates/Problem Solving Through Programming in C.jpg",
    //       grade: "84%"
    //       // ,date: "2024"
    //     },
    //     {
    //       title: "Database Management System",
    //       image: "/images/certificates/Database Management System.jpg",
    //       grade: "89%" 
    //       // ,date: "2024"
    //     }
    //   ]
    // }
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>
        <div className="certification-providers">
          {certifications.map((provider, index) => (
            <div 
              className="provider-card" 
              key={index}
              onClick={() => handleOpenModal(provider)}
            >
              <div className="provider-header">
                <div className="provider-icon">{provider.icon}</div>
                <h3 className="provider-name">{provider.provider}</h3>
                <p className="cert-count">{provider.certCount}</p>
              </div>
              <div className="provider-content">
                <p className="provider-desc">{provider.description}</p>
                <button className="view-certs-btn">View Certificates</button>
              </div>
            </div>
          ))}
        </div>

        {selectedProvider && (
          <Modal onClose={() => setSelectedProvider(null)}>
            <div className="certificates-modal">
              <div className="modal-header">
                <div className="modal-provider-info">
                  {selectedProvider.icon}
                  <h3>{selectedProvider.provider}</h3>
                  <p>{selectedProvider.description}</p>
                </div>
              </div>
              <div className="certificates-grid">
                {selectedProvider.certificates.map((cert, index) => (
                  <div className="certificate-card" key={index}>
                    <div className="certificate-image">
                      <img src={getPublicImageUrl(cert.image)} alt={cert.title} />
                      <div className="certificate-overlay">
                        {cert.link ? (
                          <a href={cert.link} target="_blank" rel="noopener noreferrer">
                            Verify Certificate
                          </a>
                        ) : (
                          <a href={getPublicImageUrl(cert.image)} target="_blank" rel="noopener noreferrer">
                            View Certificate
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="certificate-info">
                      <h4>{cert.title}</h4>
                      {cert.grade && <p className="grade">Grade: {cert.grade}</p>}
                      {cert.duration && <p className="duration">Duration: {cert.duration}</p>}
                      {/* <p className="date">Completed: {cert.date}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Certifications;
