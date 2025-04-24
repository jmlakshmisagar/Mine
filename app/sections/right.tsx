'use client';

import { motion } from 'framer-motion';

export default function RightSection({ onClose }: { onClose: () => void }) {
  const skillCategories = [
    {
      title: "Languages & Core",
      icon: "fa-code",
      skills: [
        { name: "C++", icon: "fa-code" },
        { name: "JavaScript", icon: "fa-js" },
        { name: "Python", icon: "fa-python" },
        { name: "Java", icon: "fa-java" },
        { name: "HTML", icon: "fa-html5" },
        { name: "CSS", icon: "fa-css3-alt" }
      ]
    },
    {
      title: "Technologies & Tools",
      icon: "fa-layer-group",
      skills: [
        { name: "Bootstrap", icon: "fa-bootstrap" },
        { name: "Docker", icon: "fa-docker" },
        { name: "Git", icon: "fa-git-alt" },
        { name: "VSCode", icon: "fa-code" },
        { name: "Postman", icon: "fa-paper-plane" },
        { name: "DevTools", icon: "fa-browser" }
      ]
    },
    {
      title: "Databases & Backend",
      icon: "fa-database",
      skills: [
        { name: "MySQL", icon: "fa-database" },
        { name: "MongoDB", icon: "fa-leaf" },
        { name: "Node.js", icon: "fa-node-js" },
        { name: "Express", icon: "fa-node-js" },
        { name: "Spring JPA", icon: "fa-database" },
        { name: "Firebase", icon: "fa-fire" }

      ]
    }
  ];

  return (
    <motion.div
      className="section-content jakarta"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
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
        <h1 className="section-title fondamento">Skills</h1>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skills-category"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h2 className="fondamento category-title">
                <i className={`fas ${category.icon}`}></i>
                {category.title}
              </h2>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <i className={`fab ${skill.icon}`}></i>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}