'use client';

import { motion } from 'framer-motion';

export default function TopSection({ onClose }: { onClose: () => void }) {
  const education = [
    {
      degree: "Master of Computer Applications",
      school: "RV College of Engineering, Bengaluru",
      university: "VTU",
      year: "Feb 2024 - Present",
      description: "Currently pursuing MCA with CGPA: 8.96"
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "Govt. Science College, Chitradurga",
      university: "Davanagere University",
      year: "Sep 2020 - Jul 2023",
      description: "Completed BCA with CGPA: 7.92"
    },
    {
      degree: "Pre-University Course",
      school: "Govt. PU College, Chitradurga",
      university: "Karnataka Pre-University Board",
      year: "2018 - 2020",
      description: "PCMB with 81%"
    },
    {
      degree: "SSLC",
      school: "Govt. High School (Fort), Chitradurga",
      university: "Karnataka Secondary Education Examination Board",
      year: "2018",
      description: "School topper with 89.28%"
    }
  ];

  return (
    <motion.div
      className="section-content jakarta"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "-100%", opacity: 0 }}
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
        <h1 className="section-title fondamento">Education</h1>
        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="education-year">{edu.year}</div>
              <h2 className="education-degree fondamento">{edu.degree}</h2>
              <h3 className="education-school">
                {edu.school}
                {edu.university && (
                  <span className="education-university"> | {edu.university}</span>
                )}
              </h3>
              <p className="education-description">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}