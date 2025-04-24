'use client';

import { motion } from 'framer-motion';

export default function RightSection({ onClose }: { onClose: () => void }) {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fa-code",
      skills: [
        { name: "React/Next.js", icon: "fa-react" },
        { name: "TypeScript", icon: "fa-code" },
        { name: "CSS/SASS", icon: "fa-css3-alt" },
        { name: "Framer Motion", icon: "fa-wave-square" }
      ]
    },
    {
      title: "Backend",
      icon: "fa-server",
      skills: [
        { name: "Node.js", icon: "fa-node-js" },
        { name: "Python", icon: "fa-python" },
        { name: "MongoDB", icon: "fa-database" },
        { name: "SQL", icon: "fa-database" }
      ]
    },
    {
      title: "Tools & Others",
      icon: "fa-toolbox",
      skills: [
        { name: "Git/GitHub", icon: "fa-github" },
        { name: "Docker", icon: "fa-docker" },
        { name: "AWS", icon: "fa-aws" },
        { name: "Testing", icon: "fa-vial" }
      ]
    }
  ];

  return (
    <motion.div
      className="section-content jakarta"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
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
        <h1 className="section-title fondamento">Skills</h1>
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="skills-category"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
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
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
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