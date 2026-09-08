import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import './Experience.css';

const ExperienceCard = ({ exp, index }) => {
  const ref = useRef(null);
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
        <div className="badge-row">
          <div className="date-badge">{exp.period}</div>
          {exp.current && <div className="current-badge"><span className="pulse-dot" />Current</div>}
        </div>
        <div className="role-header">
          <div className="icon-box">
            {exp.icon}
          </div>
          <div>
            <h3>{exp.title}</h3>
            <h4>
              {exp.company}
              {exp.employment && <span className="employment-type">{exp.employment}</span>}
            </h4>
          </div>
        </div>

        <p className="location">{exp.location}</p>

        {exp.summary && <p className="role-summary">{exp.summary}</p>}

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
      icon: <FaBriefcase />,
      title: "Full Stack Developer",
      company: "Vanguard",
      employment: "Contract",
      location: "Malvern, Pennsylvania, USA · Hybrid",
      period: "May 2026 – Present",
      current: true,
      summary: "Building enterprise-scale investment platforms and internal applications, while driving AI adoption through reusable engineering workflows and developer productivity tooling.",
      responsibilities: [
        "Developed enterprise web applications using React, Angular, TypeScript, Java 17, Python, NestJS, Next.js, Fastify, and GraphQL.",
        "Built scalable frontend and backend capabilities within an Nx monorepo using reusable shared libraries, modern state management, and component-driven architecture.",
        "Designed and integrated distributed services using Apollo Federation, Kong API Gateway, DynamoDB, Amazon Redshift, and Amazon S3.",
        "Developed AI-assisted engineering solutions, including reusable AI skills, MCP-based integrations, and developer workflows that measurably improved engineering productivity and software quality.",
        "Collaborated across engineering teams to deliver secure, maintainable software under enterprise development and compliance standards."
      ],
      technologies: ["React", "Angular", "TypeScript", "Java 17", "NestJS", "Next.js", "Fastify", "GraphQL", "Apollo Federation", "Kong", "DynamoDB", "Redshift", "Nx", "MCP"]
    },
    {
      icon: <FaCode />,
      title: "Software Engineer",
      company: "Kruse Construction Co. Inc.",
      employment: "Full-time",
      location: "Downingtown, Pennsylvania, USA",
      period: "Feb 2025 – Present",
      current: true,
      summary: "Led end-to-end development of Trakvu and Chantro — multi-tenant SaaS platforms combining full stack engineering, cloud infrastructure, and generative AI to automate proposal analysis, estimating, and document intelligence.",
      responsibilities: [
        "Architected and developed Trakvu and Chantro from concept to production, designing scalable multi-tenant SaaS architectures for the construction industry.",
        "Built full stack applications using React, Next.js, Node.js, TypeScript, PostgreSQL, and MySQL with cloud-native development practices.",
        "Developed AI-powered capabilities using LangChain, GPT-4, Gemini, Llama, vector databases, and RAG to automate document analysis, proposal comparison, estimating, and risk assessment.",
        "Designed secure backend services with role-based access control, multi-tenant isolation, REST/tRPC APIs, background workers, and production-grade database design.",
        "Deployed and maintained production infrastructure on AWS and DigitalOcean using Docker, Nginx, Redis, PM2, Stripe, SendGrid, and CI/CD pipelines.",
        "Led technical design and delivery while mentoring developers and establishing engineering best practices."
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "LangChain", "GPT-4", "RAG", "Vector DBs", "PostgreSQL", "AWS", "Docker", "Redis", "Stripe"]
    },
    {
      icon: <FaGraduationCap />,
      title: "Graduate Research Assistant",
      company: "Rowan University",
      employment: "Research",
      location: "Glassboro, New Jersey, USA",
      period: "Jun 2023 – Dec 2024",
      summary: "Researched edge AI, cooperative inference, and split computing for resource-constrained devices — work that produced five peer-reviewed IEEE and ACM publications.",
      responsibilities: [
        "Conducted research in edge AI, cooperative inference, and agricultural robotics on low-power IoT devices.",
        "Built and evaluated computer vision models (classification, detection, segmentation) using PyTorch and TensorFlow for precision agriculture.",
        "Designed split-inference pipelines that cut inference latency by 40% and energy consumption by 35%.",
        "Developed ROS modules for NVIDIA Jetson TX2/Orin for real-time sensing and inference.",
        "Published peer-reviewed work at IEEE ICFEC, ICEP, ICDMW, and ICMLA."
      ],
      technologies: ["PyTorch", "TensorFlow", "ROS", "NVIDIA Jetson", "Edge AI", "Computer Vision", "Python", "DETR"]
    },
    {
      icon: <FaBriefcase />,
      title: "Full Stack Engineer",
      company: "Creditsafe",
      employment: "Full-time",
      location: "Hyderabad, India",
      period: "Jul 2022 – Dec 2022",
      summary: "Built enterprise analytics dashboards and automated data pipelines for commercial credit reporting.",
      responsibilities: [
        "Built enterprise analytics dashboards using ReactJS, ExpressJS, Python, and Oracle DB.",
        "Implemented dynamic UI rendering, improving page performance by 40%.",
        "Automated recurring ETL processes using Python, reducing manual workload by 50%.",
        "Tuned database performance across Oracle and PostgreSQL through indexing and query optimization.",
        "Used AWS and Azure services for hosting, monitoring, and scaling microservices."
      ],
      technologies: ["ReactJS", "ExpressJS", "Python", "Oracle DB", "AWS", "Azure", "ETL", "PostgreSQL"]
    },
    {
      icon: <FaBriefcase />,
      title: "Application Development Associate",
      company: "Accenture",
      employment: "Full-time",
      location: "Hyderabad, India",
      period: "Oct 2020 – Jul 2022",
      summary: "Modernized legacy enterprise applications for multi-client systems and strengthened CI/CD reliability.",
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
      employment: "Full-time",
      location: "Hyderabad, India",
      period: "Oct 2019 – Oct 2020",
      summary: "Developed manufacturing operations software and real-time production dashboards for pharmaceutical plants.",
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

  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.97, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.05, 0.97, 1], [0.96, 1, 1, 0.96]);

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
