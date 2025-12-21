import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import './Experience.css';

const ExperienceCard = ({ exp, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.2 1"]
  });

  const xContent = index % 2 === 0 ? -50 : 50;

  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
      initial={{ opacity: 0, x: xContent }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
    >
      <div className="timeline-content glass-card">
        <div className="date-badge">{exp.period}</div>
        <div className="role-header">
          <div className="icon-box">
            {exp.icon}
          </div>
          <div>
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
          </div>
        </div>

        <p className="location">{exp.location}</p>

        <ul className="responsibilities">
          {exp.responsibilities.map((resp, i) => (
            <li key={i}>{resp}</li>
          ))}
        </ul>

        <div className="tech-stack">
          {exp.technologies.slice(0, 8).map((tech, i) => (
            <span key={i} className="tech-pill">{tech}</span>
          ))}
          {exp.technologies.length > 8 && (
            <span className="tech-pill more">+{exp.technologies.length - 8}</span>
          )}
        </div>
      </div>
      <div className="timeline-dot"></div>
    </motion.div>
  );
};

const Experience = () => {
  const experiences = [
    {
      icon: <FaCode />,
      title: "Software Engineer",
      company: "Kruse Construction Co. Inc.",
      location: "New Jersey, USA",
      period: "Feb 2025 – Present",
      responsibilities: [
        "Designed and engineered Trakvu, a full AI-powered SaaS platform comparison, contractor evaluation, and risk analysis using React 19, TypeScript, Node.js, and MySQL.",
        "Built intelligent document-processing features using LangChain, FAISS, and sentence-transformers for semantic proposal comparison and risk tagging.",
        "Integrated multiple LLMs (GPT-4, Gemini, Llama/Ollama) with a custom multi-model fallback system for reliable inference.",
        "Architected a secure cloud environment with Nginx, PM2, SSL, DigitalOcean Spaces, and hardened Ubuntu configurations.",
        "Implemented Stripe subscription billing and automated onboarding flows with SendGrid.",
        "Led and mentored a 3-member engineering team, improving internal workflows and delivery standards."
      ],
      technologies: ["React 19", "TypeScript", "Node.js", "MySQL", "LangChain", "GPT-4", "DigitalOcean", "Nginx", "Stripe"]
    },
    {
      icon: <FaGraduationCap />,
      title: "Graduate Research Assistant",
      company: "Rowan University",
      location: "New Jersey, USA",
      period: "Jun 2023 – Dec 2024",
      responsibilities: [
        "Conducted research in edge AI, cooperative inference, and agricultural robotics on low-power IoT devices.",
        "Built and evaluated CV models (classification, detection, segmentation) using PyTorch and TensorFlow for precision agriculture.",
        "Designed split-inference pipelines that cut latency by 40% and energy by 35%.",
        "Developed ROS modules for NVIDIA Jetson TX2/Orin for real-time sensing and inference.",
        "Published peer-reviewed work at IEEE ICFEC 2024 and ICEP 2025."
      ],
      technologies: ["PyTorch", "TensorFlow", "ROS", "NVIDIA Jetson", "Edge AI", "Computer Vision", "Python"]
    },
    {
      icon: <FaBriefcase />,
      title: "Full Stack Engineer",
      company: "Creditsafe",
      location: "Hyderabad, India",
      period: "Jul 2022 – Dec 2022",
      responsibilities: [
        "Built enterprise analytics dashboards using ReactJS, ExpressJS, Python, and Oracle DB.",
        "Implemented dynamic UI rendering, improving page performance by 40%.",
        "Automated recurring ETL processes using Python scripts, reducing manual workload by 50%.",
        "Tuned database performance across Oracle and PostgreSQL through indexing and query optimization.",
        "Used AWS and Azure services for hosting, monitoring, and scaling microservices."
      ],
      technologies: ["ReactJS", "ExpressJS", "Python", "Oracle DB", "AWS", "Azure", "ETL", "PostgreSQL"]
    },
    {
      icon: <FaBriefcase />,
      title: "Application Development Associate",
      company: "Accenture",
      location: "Hyderabad, India",
      period: "Oct 2020 – Jul 2022",
      responsibilities: [
        "Modernized legacy enterprise applications by migrating front-end modules from ASP.NET to React.js.",
        "Developed reusable UI components and integrated APIs for multi-client enterprise systems.",
        "Improved CI/CD reliability by enhancing Azure DevOps pipelines and automating builds.",
        "Delivered features across 10+ sprints and mentored junior associates on React workflows."
      ],
      technologies: ["React.js", "ASP.NET", "Azure DevOps", "SQL Server", "CI/CD", "JavaScript"]
    },
    {
      icon: <FaCode />,
      title: "Full Stack Developer",
      company: "Cipla",
      location: "Hyderabad, India",
      period: "Oct 2019 – Oct 2020",
      responsibilities: [
        "Developed enterprise applications using Java, Spring Boot, and microservices for manufacturing operations.",
        "Created secure backend APIs integrated with ERP/MIS systems for real-time tracking.",
        "Built dashboards using React.js to visualize plant metrics and production KPIs.",
        "Managed deployments using Jenkins and Docker on AWS EC2/RDS."
      ],
      technologies: ["Java", "Spring Boot", "Microservices", "React.js", "AWS", "Docker", "Jenkins", "PostgreSQL"]
    }
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8]);

  return (
    <section className="experience-section" id="experience" ref={targetRef}>
      <motion.div style={{ opacity, scale }} className="container">
        <h2 className="section-title">Professional Journey</h2>
        <div className="timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
