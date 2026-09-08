import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCloud, FaBrain, FaTools, FaServer } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
  {
    icon: <FaCode />,
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java 17", "SQL", "C#", "C++"]
  },
  {
    icon: <FaBrain />,
    title: "AI & LLM Engineering",
    skills: ["LangChain", "LangGraph", "RAG Pipelines", "MCP Servers", "Agentic Systems", "Context Engineering", "GPT-4", "Gemini", "Llama / Ollama", "AWS Bedrock", "GCP Vertex AI", "Hugging Face", "sentence-transformers", "FAISS", "Pinecone", "PyTorch", "TensorFlow", "Computer Vision", "Split Computing"]
  },
  {
    icon: <FaTools />,
    title: "AI Tooling",
    skills: ["Claude Code", "Cursor", "Codex / Codex CLI", "Gemini CLI", "GitHub Copilot"]
  },
  {
    icon: <FaCode />,
    title: "Frontend",
    skills: ["React 19", "Next.js", "Angular", "Redux", "Tailwind CSS", "HTML/CSS", "Component-Driven Architecture"]
  },
  {
    icon: <FaServer />,
    title: "Backend & APIs",
    skills: ["Node.js / Express", "NestJS", "Fastify", "FastAPI", "Django", "Spring Boot", "GraphQL", "Apollo Federation", "tRPC", "REST APIs", "Microservices"]
  },
  {
    icon: <FaDatabase />,
    title: "Data",
    skills: ["PostgreSQL", "MySQL", "Oracle Database", "Redis", "DynamoDB", "Amazon Redshift"]
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS, Bedrock)", "Azure / Azure DevOps", "GCP (Vertex AI)", "DigitalOcean", "Docker", "Terraform", "Nginx", "PM2", "Kong API Gateway", "Nx Monorepo", "GitHub Actions", "Jenkins", "Linux / Ubuntu", "CI/CD"]
  },
  {
    icon: <FaTools />,
    title: "Practices",
    skills: ["Multi-tenant SaaS Architecture", "Role-Based Access Control", "Stripe Billing Integration", "Agile / Scrum", "Design & Code Review", "Technical Mentorship"]
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

const itemVariants = {
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

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              className="skill-card glass-card"
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="skill-icon-wrapper">
                {category.icon}
              </div>
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
