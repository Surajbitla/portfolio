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
      title: "Research Assistant",
      company: "Rowan University",
      employment: "Part-time",
      location: "Glassboro, New Jersey, USA",
      period: "Jun 2023 – Dec 2024",
      summary: "Research in edge AI, computer vision, and cooperative inference — making deep learning models run efficiently on resource-constrained hardware. Produced five peer-reviewed IEEE and ACM publications.",
      responsibilities: [
        "Designed split-computing systems partitioning deep learning inference between edge devices and servers, cutting inference latency 94%, energy 93%, and edge memory use 90% on COCO 2017 and a precision-agriculture dataset — enabling transformer-based object detection on CPU-only edge hardware.",
        "Built SplitTracr, an evaluation framework for cooperative inference measuring latency and energy across edge, network, and server tiers, and quantifying AES-CBC/CTR encryption overhead for privacy-sensitive deployments.",
        "Developed and evaluated classification, detection, and segmentation models (AlexNet, ResNet, Faster R-CNN, Mask R-CNN, DETR) in PyTorch and TensorFlow.",
        "Built ROS applications on NVIDIA Jetson TX2/Orin for real-time sensing, preprocessing, and on-device inference in agricultural robotics.",
        "Co-authored five IEEE/ACM publications; mentored junior researchers and maintained reproducible, version-controlled research pipelines."
      ],
      technologies: ["PyTorch", "TensorFlow", "ROS", "NVIDIA Jetson", "Edge AI", "Computer Vision", "Python", "DETR"]
    },
    {
      icon: <FaBriefcase />,
      title: "Full Stack Engineer",
      company: "Creditsafe Technology",
      employment: "Full-time",
      location: "Hyderabad, India",
      period: "Jul 2022 – Dec 2022",
      summary: "Built full-stack enterprise applications for financial risk and reporting, deployed across AWS and Azure.",
      responsibilities: [
        "Built full-stack enterprise applications for financial risk and reporting using ReactJS, Python, ASP.NET, and Oracle Database, deployed across AWS and Microsoft Azure.",
        "Designed and secured REST APIs for authentication, analytics, and data synchronization across distributed services.",
        "Tuned Oracle Database performance through indexing strategy and query restructuring.",
        "Delivered in Agile sprints alongside QA and DevOps, covering feature work, testing, debugging, and continuous delivery."
      ],
      technologies: ["ReactJS", "Python", "ASP.NET", "Oracle DB", "REST APIs", "AWS", "Azure", "Agile"]
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
        "Migrated legacy ASP.NET front-end modules to React across multi-client enterprise systems, building responsive applications and reusable UI components.",
        "Improved CI/CD reliability through Azure DevOps pipeline work, build automation, and Git branching strategy.",
        "Resolved production issues and ran functional and regression testing across multiple client accounts.",
        "Mentored junior associates through knowledge-transfer sessions on React, version control, and deployment workflows."
      ],
      technologies: ["React.js", "ASP.NET", "Azure DevOps", "SQL Server", "CI/CD", "JavaScript"]
    },
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
