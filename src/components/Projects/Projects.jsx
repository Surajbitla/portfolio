import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';
import './Projects.css';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    id: 'trakvu',
    title: 'Trakvu — AI Construction Intelligence SaaS',
    description: 'Multi-tenant AI SaaS for proposal comparison, contractor evaluation, and risk analysis.',
    fullDescription: 'Architected and built Trakvu from concept to production — a multi-tenant SaaS platform for the construction industry. Built with React 19, TypeScript, and Node.js, it uses LangChain and FAISS for semantic proposal comparison, automated risk tagging, and LLM-driven insights across GPT-4, Gemini, and Llama with a custom multi-model fallback. Includes Stripe subscription billing, role-based access control, background workers, and hardened cloud deployment.',
    technologies: ["React 19", "TypeScript", "Node.js", "LangChain", "GPT-4", "FAISS", "MySQL", "Stripe", "Docker", "Nginx"],
    features: [
      "AI-Powered Proposal Analysis: Automated comparison using GPT-4 and embedding models.",
      "Smart Risk Tagging: Semantic search surfaces potential risks in contractor proposals.",
      "Multi-LLM Architecture: Fallback across GPT-4, Gemini, and Llama for resilient inference.",
      "Multi-Tenant Isolation: Role-based access control with per-tenant data separation.",
      "Subscription Billing: Stripe integration with tiered pricing and automated onboarding.",
      "Secure Cloud Infra: Nginx reverse proxy, PM2 process management, hardened Ubuntu droplets."
    ],
    link: "https://trakvu.com",
    screenshots: ['screenshot1.jpg', 'screenshot2.jpg', 'screenshot3.jpg', 'screenshot4.jpg', 'screenshot5.jpg', 'screenshot6.jpg', 'screenshot7.jpg',]
  },
  {
    id: 'chantro',
    title: 'Chantro — AI Estimating & Document Intelligence',
    description: 'Generative-AI platform automating construction estimating and document workflows.',
    fullDescription: 'Designed and built Chantro end to end — a SaaS platform that applies generative AI to construction estimating, document intelligence, and project operations. Uses RAG over vector databases to extract structured data from plans, specs, and bid documents, then drives automated estimating and knowledge retrieval. Built on Next.js and Node.js with tRPC APIs, PostgreSQL, and background job processing.',
    technologies: ["Next.js", "TypeScript", "Node.js", "tRPC", "PostgreSQL", "RAG", "Vector DBs", "Redis", "AWS"],
    features: [
      "Document Intelligence: RAG pipelines extract structured data from plans, specs, and bids.",
      "Automated Estimating: LLM-assisted quantity takeoff and cost projection from source documents.",
      "Knowledge Retrieval: Semantic search across a project's full document history.",
      "Background Workers: Queued processing for long-running document ingestion jobs.",
      "Production Infrastructure: Dockerized services with Redis caching and CI/CD deployment."
    ],
    screenshots: []
  },
  {
    id: 'forgetting-llm',
    title: 'Forgetting LLM System',
    description: 'Machine unlearning framework for privacy compliance in LLMs.',
    fullDescription: 'Built a system to remove sensitive data from LLMs without full retraining. Features modular workflows for pattern removal, user deletion, and retention rules. Includes a React interface and Docker deployment with CI/CD.',
    technologies: ["Python", "LLMs", "Machine Unlearning", "React", "Docker", "CI/CD"],
    features: [
      "Selective Amnesia: Remove specific data points without retraining the entire model.",
      "Privacy Compliance: Automates GDPR 'Right to be Forgotten' requests.",
      "Modular Workflows: Configurable pipelines for pattern matching and entity removal.",
      "Interactive Dashboard: React-based UI for monitoring unlearning progress.",
      "Containerized Deployment: Dockerized services for consistent testing and production."
    ],
    github: "https://github.com/Surajbitla/llm",
    screenshots: ['screenshot1.png', 'screenshot2.png', 'screenshot3.png', 'screenshot4.png', 'screenshot5.png', 'screenshot6.png', 'screenshot7.png', 'screenshot8.png']
  },
  {
    id: 'precision-agriculture',
    title: 'Cooperative Inference Framework',
    description: 'Split computing framework for deep learning in precision agriculture.',
    fullDescription: 'Engineered a framework to split deep learning workloads (AlexNet, ResNet, YOLO) between edge devices and servers. Reduces latency and energy consumption by dynamically adapting to network conditions.',
    technologies: ["Python", "PyTorch", "Edge AI", "YOLO", "IoT"],
    features: [
      "Dynamic Split Computing: Offloads heavy NN layers to the cloud based on network latency.",
      "Energy Optimization: Reduces edge device power consumption by 35%.",
      "Real-time Inference: Optimized for low-latency agricultural robotics tasks.",
      "Model Support: Works with AlexNet, ResNet50, and YOLOv5 architectures."
    ],
    github: "https://github.com/Surajbitla/racr_ai",
    screenshots: ['screenshot1.png', 'screenshot2.png', 'screenshot3.png', 'screenshot4.png', 'screenshot5.png', 'screenshot6.png']
  },
  {
    id: 'splittracr',
    title: 'SplitTracr',
    description: 'Experimental test-bed for cooperative inference using split computing.',
    fullDescription: 'Designed a scalable framework enabling distributed AI experiments. Optimizes resource utilization across edge devices and servers, supporting complex models like YOLO with automated performance tracking.',
    technologies: ["Python", "Edge Computing", "AI", "Networking"],
    features: [
      "Automated Benchmarking: Tracks latency, jitter, and throughput in real-time.",
      "Scalable Architecture: Supports multiple edge nodes and centralized inference servers.",
      "Resource Profiling: Granular monitoring of CPU/GPU and network usage.",
      "Custom Protocols: Optimized data transmission for split neural network tensors."
    ],
    github: "https://github.com/Surajbitla/tracr",
    screenshots: ['screenshot1.jpg', 'screenshot2.jpg', 'screenshot3.jpg']
  },
  {
    id: 'ecommerce',
    title: 'ShopRight E-Commerce',
    description: 'Scalable e-commerce platform with secure auth and cart management.',
    fullDescription: 'Developed a full-featured e-commerce app with ReactJS and Node.js. Implemented JWT authentication, role-based access, product catalogs, and optimized MySQL queries for high concurrency. Deployed on AWS.',
    technologies: ["ReactJS", "Node.js", "AWS", "MySQL", "JWT"],
    features: [
      "Secure Authentication: JWT-based login with role-based access control (RBAC).",
      "High-Performance Cart: State management optimized for instant updates.",
      "Optimized Queries: Indexed MySQL database for fast product search and filtering.",
      "AWS Deployment: Hosted on EC2 with S3 for static asset delivery."
    ],
    github: "https://github.com/Surajbitla/shopright",
    screenshots: ['screenshot1.png', 'screenshot2.png', 'screenshot3.png', 'screenshot4.png', 'screenshot5.png', 'screenshot6.png', 'screenshot7.png', 'screenshot8.png', 'screenshot9.png', 'screenshot10.png']

  },
  {
    id: 'real-estate',
    title: 'Real Estate Analytics',
    description: 'Databricks pipeline for analyzing real estate trends.',
    fullDescription: 'Built a pipeline to clean and aggregate Connecticut real estate data. Analyzed pricing trends and sales ratios using SQL and Python. Delivered insights via dashboards on AWS.',
    technologies: ["Databricks", "SQL", "Python", "AWS", "Data Engineering"],
    features: [
      "Data Ingestion Pipeline: Automated cleaning of raw real estate CSV datasets.",
      "Trend Analysis: SQL-based aggregation of pricing trends over 10 years.",
      "Visual Dashboards: Interactive charts showing sales ratios by county/town.",
      "Cloud Integration: Seamlessly integrated with AWS S3 and Databricks clusters."
    ],
    links: {
      part1: "https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/7526939016945756/1723055041762845/6396259126306231/latest.html",
      part2: "https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/7526939016945756/1723055041763209/6396259126306231/latest.html"
    },
    screenshots: ['screenshot1.png', 'screenshot2.jpg', 'screenshot3.jpg', 'screenshot4.jpg']
  },
  {
    id: 'dc-travel',
    title: 'DC Travel Guide',
    description: 'Travel guide utilizing crime data for visitor safety.',
    fullDescription: 'Innovative guide using crime statistics to visualize safety trends in Washington DC. Features heat maps and recommendations for safe neighborhoods and hotels.',
    technologies: ["Python", "Data Visualization", "Pandas", "Matplotlib"],
    features: [
      "Safety Heatmaps: Visualizes high-crime areas to avoid for tourists.",
      "Data-Driven Recommendations: Suggests hotels based on historical safety metrics.",
      "Interactive Maps: Zoomable overlays of crime density vs. tourist attractions.",
      "Pandas & Seaborn: Advanced statistical analysis for accurate trend forecasting."
    ],
    screenshots: ['screenshot1.jpg', 'screenshot2.jpg', 'screenshot3.jpg']
  },
  {
    id: 'enhanced-vision',
    title: 'Enhanced Assisted Vision',
    description: 'Object detection app for visually challenged individuals.',
    fullDescription: 'Python app using deep learning for object detection. Integrated text-to-speech for real-time audio feedback to assist visually challenged users.',
    technologies: ["Python", "Deep Learning", "OpenCV", "Text-to-Speech"],
    features: [
      "Real-Time Detection: YOLO-based object recognition with <100ms latency.",
      "Audio Feedback: Text-to-Speech engine announces obstacles and distances.",
      "Navigation Assist: Identifies doorways, stairs, and pedestrian crossings.",
      "Lightweight Model: Optimized to run on portable hardware/laptops."
    ],
    screenshots: ['screenshot1.jpg', 'screenshot2.jpg', 'screenshot3.jpg']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Selected Works</h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map(project => (
            <motion.div
              key={project.id}
              className="project-card glass-card"
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
              layoutId={project.id}
            >
              <div className="card-content">
                <div className="card-header">
                  <div className="folder-icon">
                    <FaFolderOpen />
                  </div>
                  <div className="project-links-mini">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <FaGithub />
                      </a>
                    )}
                    {(project.link || project.links?.part1) && (
                      <a href={project.link || project.links?.part1} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech-stack">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-mini-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-mini-tag">+{project.technologies.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
