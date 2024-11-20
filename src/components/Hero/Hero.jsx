import React, { useCallback } from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
import CustomCursor from '../CustomCursor/CustomCursor';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="hero" id="home">
      <CustomCursor />
      <div className="particles-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              detect_on: "canvas", // Ensure interaction is only on canvas
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                  parallax: {
                    enable: true,
                    force: 40,
                    smooth: 10
                  }
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 150,
                  links: {
                    opacity: 0.5
                  }
                },
                push: {
                  quantity: 4,
                },
              },
            },
            particles: {
              color: {
                value: "#007bff",
              },
              links: {
                color: "#007bff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: false,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.8,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1000,
                },
                value: 143,
              },
              opacity: {
                value: 0.5,
                random: {
                  enable: true,
                  minimumValue: 0.2,
                },
                animation: {
                  enable: true,
                  speed: 0.8,
                  minimumValue: 0.2,
                  sync: false,
                }
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 2 },
                random: {
                  enable: true,
                  minimumValue: 1
                }
              }
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="animate-slide-down">
            Hi, I'm <span className="highlight">Suraj Bitla</span>
          </h1>
          <h2 className="animate-slide-down-delay-1">
            AI Engineer & Full Stack Developer
          </h2>
          <p>
            Specializing in AI-Driven Solutions, Scalable Systems, and Web Development
          </p>
          <div className="hero-buttons animate-slide-up">
            <a href="#contact" className="btn primary">Contact Me</a>
            <a href="#projects" className="btn secondary">View Projects</a>
          </div>
          <div className="hero-badges animate-fade-in">
            <span className="badge">AWS</span>
            <span className="badge">Azure</span>
            <span className="badge">Python</span>
            <span className="badge">ReactJS</span>
            <span className="badge">Machine Learning</span>
          </div>
        </div>
        <div className="hero-social animate-fade-in-delay">
          <a href="https://github.com/SurajBitla" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/suraj-bitla" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:surajbitla@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
