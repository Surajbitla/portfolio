import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import './Hero.css';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="particles-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0
          }}
          options={{
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
                onClick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                grab: { distance: 200, links: { opacity: 0.4 } },
                push: { quantity: 4 },
              },
            },
            particles: {
              color: { value: "#3b82f6" }, // Accent Blue
              links: {
                color: "#8b5cf6", // Accent Purple
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "bounce" },
              },
              number: {
                density: { enable: true, area: 800 },
                value: 80,
              },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      <motion.div
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-text-wrapper">
          <motion.p className="hero-greeting">Hello, world. I am</motion.p>
          <motion.h1 className="hero-name">
            Suraj <span className="highlight">Bitla</span>
          </motion.h1>
          <motion.h2 className="hero-title">
            Architecting the <span className="gradient-text">Future of AI</span>.
          </motion.h2>
          <motion.p className="hero-description">
            Senior Full Stack Developer & AI Engineer creating scalable, intelligent systems.
            Transforming complex problems into elegant solutions.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="#projects" className="btn btn-primary">
              View Work
            </a>
            <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </motion.div>

          <motion.div className="hero-socials" variants={itemVariants}>
            <a href="https://github.com/SurajBitla" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/suraj-bitla" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:surajb.5639@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
