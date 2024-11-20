import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetailModal = ({ project, onClose }) => {
  if (!project) return null;
  
  return (
    <AnimatePresence>
      <motion.div 
        className="project-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="project-modal-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <button className="modal-close-btn" onClick={onClose}>
            <FaTimes />
          </button>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="modal-title">{project.title}</h2>
            
            {project.images && (
              <div className="modal-image-carousel">
                {project.images.map((img, index) => (
                  <motion.img 
                    key={index}
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                ))}
              </div>
            )}

            <div className="modal-content-grid">
              <div className="modal-main-content">
                <h3>Project Overview</h3>
                <p className="modal-description">{project.description}</p>
                
                {project.fullDescription && (
                  <div className="modal-full-description">
                    <h3>Detailed Description</h3>
                    <p>{project.fullDescription}</p>
                  </div>
                )}
              </div>

              <div className="modal-sidebar">
                {project.technologies && (
                  <div className="modal-technologies">
                    <h3>Technologies Used</h3>
                    <div className="modal-tech-tags">
                      {project.technologies.map((tech, index) => (
                        <motion.span 
                          key={index} 
                          className="tech-tag"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="modal-links-section">
                  <h3>Project Links</h3>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                      <FaGithub /> View on GitHub
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {project.pdfUrl && (
                    <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" className="modal-link">
                      Documentation PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Project 1",
      description: "Short description here...",
      fullDescription: "Detailed description of the project...",
      images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
      pdfUrl: "/path/to/documentation.pdf",
      links: {
        "GitHub": "https://github.com/...",
        "Live Demo": "https://..."
      }
    },
    {
      title: "E-commerce Platform (ShopRight)",
      description: "Developed a dynamic e-commerce web application focused on enhancing user experience with robust search functionality and streamlined purchase processes. Implemented secure user authentication and authorization mechanisms. Followed agile methodologies for iterative development and continuous integration.",
      technologies: ["ReactJS", "Node.js", "AWS", "MySQL", "Git", "HTML5", "JavaScript", "DBMS"],
      github: "https://github.com/Surajbitla/shopright",
      link: "#"
    },
    {
      title: "Real Estate Sales Analysis in Connecticut",
      description: "Created a data processing pipeline model to analyze historical real estate sales trends in Connecticut. Focused on average sale amounts, sales ratios, and distribution across property types and towns. Leveraged Databricks for SQL, Python, and cloud services integration.",
      technologies: ["Python", "SQL", "AWS S3", "Databricks", "Data Warehousing", "Data Modeling", "Information Visualization"],
      links: {
        part1: "https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/7526939016945756/1723055041762845/6396259126306231/latest.html",
        part2: "https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/7526939016945756/1723055041763209/6396259126306231/latest.html"
      }
    },
    {
      title: "DC Travel Guide",
      description: "Developed an innovative travel guide utilizing comprehensive crime data to enhance visitor safety. Created visualizations including crime heat maps and trends for major attractions. Provides recommendations on safe neighborhoods, hotels, and optimal visiting times.",
      technologies: ["Python", "Information Visualization", "Computer Vision", "Matplotlib", "Seaborn", "NumPy", "Pandas"],
      link: "#"
    },
    {
      title: "Enhanced Assisted Vision",
      description: "Python application with object detection and recognition using image processing and deep learning for visually challenged people. Integrated text-to-speech API for real-time audio feedback, providing distance information and enhanced user assistance.",
      technologies: ["Python", "TensorFlow", "Object Detection", "Image Processing", "Text-to-Speech API"],
      link: "#"
    },
    {
      title: "Integrated Cooling System",
      description: "Developed an innovative cooling system combining ceiling fan with custom-built air conditioner. Cool air is funneled through pipes connected to the fan, using an accelerator for enhanced airflow. Improves cooling performance while reducing energy consumption.",
      technologies: ["Mechanical Engineering", "Energy Efficiency", "Innovation"],
      type: "Patent"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              onClick={() => setSelectedProject({
                ...project,
                images: [
                  'https://picsum.photos/800/600',
                  'https://picsum.photos/800/601',
                  'https://picsum.photos/800/602'
                ],
                fullDescription: `${project.description}\n\nThis is an extended description of the project with more details about the implementation, challenges faced, and solutions provided. You can add multiple paragraphs here to properly explain the project scope and achievements.`,
                pdfUrl: project.type === "Patent" ? "/path-to-patent.pdf" : null
              })}
            >
              <h3>{project.name || project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies && project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.links?.part1 && (
                  <a href={project.links.part1} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Notebook Part 1
                  </a>
                )}
                {project.links?.part2 && (
                  <a href={project.links.part2} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Notebook Part 2
                  </a>
                )}
              </div>
              {project.type && (
                <div className="project-type">
                  <span className="type-badge">{project.type}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectDetailModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
