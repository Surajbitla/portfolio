import React, { useState } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    id: 'ecommerce',
    title: 'E-commerce Platform (ShopRight)',
    description: 'Developed a dynamic e-commerce web application focused on enhancing user experience with robust search functionality and streamlined purchase processes.',
    technologies: ["ReactJS", "Node.js", "AWS", "MySQL", "Git", "HTML5", "JavaScript", "DBMS"],
    github: "https://github.com/Surajbitla/shopright",
    link: "#",
    screenshots: ['screenshot1.png', 'screenshot2.png', 'screenshot3.png'],
    documents: []
  },
  {
    id: 'real-estate',
    title: "Real Estate Sales Analysis in Connecticut",
    description: "Created a data processing pipeline model to analyze historical real estate sales trends in Connecticut. Focused on average sale amounts, sales ratios, and distribution across property types and towns. Leveraged Databricks for SQL, Python, and cloud services integration.",
    technologies: ["Python", "SQL", "AWS S3", "Databricks", "Data Warehousing", "Data Modeling", "Information Visualization"],
    links: {
      part1: "https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/7526939016945756/1723055041762845/6396259126306231/latest.html",
      part2: "https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/7526939016945756/1723055041763209/6396259126306231/latest.html"
    }
  },
  {
    id: 'dc-travel',
    title: "DC Travel Guide",
    description: "Developed an innovative travel guide utilizing comprehensive crime data to enhance visitor safety. Created visualizations including crime heat maps and trends for major attractions. Provides recommendations on safe neighborhoods, hotels, and optimal visiting times.",
    technologies: ["Python", "Information Visualization", "Computer Vision", "Matplotlib", "Seaborn", "NumPy", "Pandas"],
    link: "#"
  },
  {
    id: 'enhanced-vision',
    title: "Enhanced Assisted Vision",
    description: "Python application with object detection and recognition using image processing and deep learning for visually challenged people. Integrated text-to-speech API for real-time audio feedback, providing distance information and enhanced user assistance.",
    technologies: ["Python", "TensorFlow", "Object Detection", "Image Processing", "Text-to-Speech API"],
    link: "#"
  },
  {
    id: 'integrated-cooling',
    title: "Integrated Cooling System",
    description: "Developed an innovative cooling system combining ceiling fan with custom-built air conditioner. Cool air is funneled through pipes connected to the fan, using an accelerator for enhanced airflow. Improves cooling performance while reducing energy consumption.",
    technologies: ["Mechanical Engineering", "Energy Efficiency", "Innovation"],
    type: "Patent"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies?.map((tech, techIndex) => (
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
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
