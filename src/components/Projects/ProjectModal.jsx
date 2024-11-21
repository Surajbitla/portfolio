import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowLeft, FaArrowRight, FaPause, FaPlay, FaExpand } from 'react-icons/fa';

import './ProjectModal.css';



const ProjectModal = ({ project, onClose }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [isAutoPlaying, setIsAutoPlaying] = useState(true);



  // Function to get all screenshots for a project

  const getProjectScreenshots = () => {

    try {

      // This will return all screenshots from the project's directory

      const screenshots = project.screenshots || [];

      return screenshots.map(screenshot => `projects/${project.id}/screenshots/${screenshot}`);

    } catch (error) {

      console.error('Error loading screenshots:', error);

      return [];

    }

  };



  const screenshots = getProjectScreenshots();



  // Handle image click to open in new tab

  const handleImageClick = (imageSrc) => {

    window.open(imageSrc, '_blank');

  };



  // Auto-slide functionality

  useEffect(() => {

    let interval;

    if (isAutoPlaying && screenshots.length > 1) {

      interval = setInterval(() => {

        setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);

      }, 3000);

    }

    return () => clearInterval(interval);

  }, [isAutoPlaying, screenshots.length]);



  const nextImage = () => {

    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);

    setIsAutoPlaying(false);

  };



  const prevImage = () => {

    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);

    setIsAutoPlaying(false);

  };



  // Only show navigation if there are multiple images

  const showNavigation = screenshots.length > 1;



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

          className="project-modal"

          initial={{ y: 50, opacity: 0 }}

          animate={{ y: 0, opacity: 1 }}

          exit={{ y: 50, opacity: 0 }}

          onClick={e => e.stopPropagation()}

        >

          <button className="modal-close" onClick={onClose}>

            <FaTimes />

          </button>



          <div className="image-section">

            {screenshots.length > 0 ? (

              <>

                <motion.img 

                  key={currentImageIndex}

                  src={screenshots[currentImageIndex]}

                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}

                  initial={{ opacity: 0 }}

                  animate={{ opacity: 1 }}

                  transition={{ duration: 0.3 }}

                  onClick={() => handleImageClick(screenshots[currentImageIndex])}

                  className="screenshot-image"

                />

                <div className="image-expand-hint">

                  <FaExpand /> Click to view full size

                </div>



                {showNavigation && (

                  <>

                    <div className="image-navigation">

                      <button className="nav-btn prev" onClick={prevImage}>

                        <FaArrowLeft />

                      </button>

                      <button 

                        className={`play-pause-btn ${!isAutoPlaying ? 'paused' : ''}`}

                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}

                      >

                        {isAutoPlaying ? <FaPause /> : <FaPlay />}

                      </button>

                      <button className="nav-btn next" onClick={nextImage}>

                        <FaArrowRight />

                      </button>

                    </div>



                    <div className="carousel-dots">

                      {screenshots.map((_, index) => (

                        <motion.span 

                          key={index} 

                          className={`dot ${index === currentImageIndex ? 'active' : ''}`}

                          onClick={() => {

                            setCurrentImageIndex(index);

                            setIsAutoPlaying(false);

                          }}

                          whileHover={{ scale: 1.2 }}

                        />

                      ))}

                    </div>



                    <div className="image-counter">

                      {currentImageIndex + 1} / {screenshots.length}

                    </div>

                  </>

                )}

              </>

            ) : (

              <div className="no-screenshots">

                No screenshots available

              </div>

            )}

          </div>



          <div className="project-details">

            <motion.h2 

              initial={{ y: 20, opacity: 0 }}

              animate={{ y: 0, opacity: 1 }}

              transition={{ delay: 0.2 }}

            >

              {project.title}

            </motion.h2>



            <div className="project-links">

              {project.github && (

                <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn github">

                  <FaGithub /> GitHub

                </a>

              )}

              {project.link && (

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-btn demo">

                  <FaExternalLinkAlt /> Live Demo

                </a>

              )}

            </div>



            <div className="project-description">

              <h3>Project Overview</h3>

              <p>{project.description}</p>

            </div>



            <div className="project-tech">

              <h3>Technologies Used</h3>

              <div className="tech-tags">

                {project.technologies.map((tech, index) => (

                  <motion.span 

                    key={index}

                    className="tech-tag"

                    initial={{ scale: 0 }}

                    animate={{ scale: 1 }}

                    transition={{ delay: 0.2 + index * 0.05 }}

                  >

                    {tech}

                  </motion.span>

                ))}

              </div>

            </div>



            {project.links?.part1 && (

              <div className="additional-links">

                <h3>Additional Resources</h3>

                <div className="resource-links">

                  <a href={project.links.part1} target="_blank" rel="noopener noreferrer" className="link-btn resource">

                    <FaExternalLinkAlt /> Notebook Part 1

                  </a>

                  {project.links.part2 && (

                    <a href={project.links.part2} target="_blank" rel="noopener noreferrer" className="link-btn resource">

                      <FaExternalLinkAlt /> Notebook Part 2

                    </a>

                  )}

                </div>

              </div>

            )}

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>

  );

};



export default ProjectModal; 


