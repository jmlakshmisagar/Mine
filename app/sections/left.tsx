'use client';

import { motion } from 'framer-motion';

export default function LeftSection({ onClose }: { onClose: () => void }) {
  const projects = [
    {
      title: "Portfolio Website", 
      shortDescription: "Next.js & Framer Motion Next.js & Framer Motion Next.js & Framer Motion Next.js & Framer Motion",
      technologies: ["Next.js", "TypeScript"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://portfolio.demo.com"
    },
    {
      title: "E-Commerce Platform",
      shortDescription: "Next.js & Framer Motion Next.js & Framer Motion Next.js & Framer Motion Next.js & Framer Motion",
      technologies: ["React", "Node.js"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce.demo.com"
    },
    {
      title: "AI Chat Application",
      shortDescription: "Real-time AI chat",
      technologies: ["Python", "TensorFlow"],
      github: "https://github.com/yourusername/ai-chat",
      live: "https://ai-chat.demo.com"
    },
    {
      title: "Task Management",
      shortDescription: "Team collaboration app",
      technologies: ["Vue.js", "Firebase"],
      github: "https://github.com/yourusername/task-app",
      live: "https://task-app.demo.com"
    }
  ];

  return (
    <motion.div
      className="section-content jakarta"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.button 
        className="close-button"
        onClick={onClose}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(188, 170, 164, 0.2)" }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="close-icon">X</span>
      </motion.button>
      <div className="section-inner">
        <h1 className="section-title fondamento">Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className='fondamento' style={{fontSize:'24px'}}>{project.title}</h2>
              <p>{project.shortDescription}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <motion.a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fab fa-github"></i>
                </motion.a>
                <motion.a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-external-link-alt"></i>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}