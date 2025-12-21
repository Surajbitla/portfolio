import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaCloud, FaBrain, FaTools, FaServer } from 'react-icons/fa';
import './Skills.css';

const skillCategories = [
  {
    icon: <FaCode />,
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "C++", "C", "R"]
  },
  {
    icon: <FaCode />,
    title: "Frontend Development",
    skills: ["React 19", "React.js", "HTML5", "CSS3", "Tailwind CSS", "Redux", "Webpack"]
  },
  {
    icon: <FaServer />,
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "FastAPI", "Spring Boot", "REST APIs", "GraphQL", "Django", "Flask"]
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "Oracle DB", "Redis", "MongoDB", "SQL Server"]
  },
  {
    icon: <FaBrain />,
    title: "AI & Machine Learning",
    skills: ["LangChain", "GPT-4", "RAG Pipelines", "PyTorch", "TensorFlow", "Ollama", "FAISS", "Computer Vision"]
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS)", "DigitalOcean", "Docker", "Kubernetes", "Nginx", "CI/CD", "Jenkins", "Linux/Ubuntu"]
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
