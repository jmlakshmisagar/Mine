'use client';

import { motion } from 'framer-motion';

export default function LeftSection({ onClose }: { onClose: () => void }) {
  const projects = [
    {
      title: "Employee-Management-Auto-Code-Generator",
      shortDescription: "A web prototype application that generates code for employee management systems for the client.",
      technologies: ["Angular", "Node.js", "Express", "MySQL"],
    },
    {
      title: "Smart-Irrigation-and-Fartigation-in-Arecanut-Farm", 
      shortDescription: "PERN stack IoT-based Smart Irrigation System",
      technologies: ["PostgreSQL", "Express", "React", "Node.js"],
      github: "https://github.com/CISCO-RVCE-CoE-IoT/Smart-Irrigation-and-Fartigation-in-Arecanut-Farm",
    },
    {
      title: "Eazymass",
      shortDescription: "A full-stack web application to monitor and visualize daily weight data",
      technologies: ["Next.js", "Tailwind CSS", "Firebase"],
      github: "https://github.com/jmlakshmisagar/Eazymass",
      live: "https://jmlakshmisagar.github.io/EazymassLive/"
    },
    {
      title: "Seat-Allotment-Process",
      shortDescription: "A seat allocation system that assigns students seats based on rank, preferred college, category, and priority according to KEA guidelines, streamlining the merit-based process.",
      technologies: ["Python", "Jupyter Notebook"],
      github: "https://github.com/jmlakshmisagar/Seat-Allotment-Process",
    },
    
  ];

  return (
    <motion.div
      className="section-content jakarta"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
              transition={{ delay: index * 0.2 }}
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