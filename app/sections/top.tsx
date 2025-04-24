'use client';

import { motion } from 'framer-motion';

export default function TopSection({ onClose }: { onClose: () => void }) {
  const education = [
    {
      degree: "Master of Computer Science",
      school: "University Name",
      year: "2020 - 2022",
      description: "Specialized in Artificial Intelligence and Machine Learning"
    },
    {
      degree: "Bachelor of Engineering",
      school: "University Name",
      year: "2016 - 2020",
      description: "Computer Science and Engineering"
    },
    {
      degree: "Higher Secondary Education",
      school: "School Name",
      year: "2014 - 2016",
      description: "Science and Mathematics"
    },
    {
      degree: "Secondary Education",
      school: "School Name",
      year: "2014",
      description: "CBSE Board"
    }
  ];

  return (
    <motion.div
      className="section-content"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.button 
        className="close-button"
        onClick={onClose}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(188, 170, 164, 0.2)" }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="close-icon">×</span>
      </motion.button>
      <div className="section-inner">
        <h1 className="section-title fondamento">Education</h1>
        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="education-year">{edu.year}</div>
              <h2 className="education-degree fondamento">{edu.degree}</h2>
              <h3 className="education-school">{edu.school}</h3>
              <p className="education-description">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}