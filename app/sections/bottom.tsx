'use client';

import { motion } from 'framer-motion';

export default function BottomSection({ onClose }: { onClose: () => void }) {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Leading frontend development team, implementing modern web solutions using React and Next.js"
    },
    {
      role: "Software Developer",
      company: "Digital Solutions Inc",
      period: "2020 - 2022",
      description: "Full-stack development with focus on scalable applications and cloud infrastructure"
    },
    {
      role: "Junior Developer",
      company: "StartUp Tech",
      period: "2019 - 2020",
      description: "Worked on various web development projects using modern technologies and best practices"
    },
    {
      role: "Intern Developer",
      company: "Tech Solutions",
      period: "2018 - 2019",
      description: "Gained hands-on experience with web development and software engineering principles"
    }
  ];

  return (
    <motion.div
      className="section-content jakarta"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
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
        <h1 className="section-title fondamento">Experience</h1>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="experience-header">
                <h2 className="experience-role fondamento">{exp.role}</h2>
                <span className="experience-period">{exp.period}</span>
              </div>
              <h3 className="experience-company">{exp.company}</h3>
              <p className="experience-description">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}