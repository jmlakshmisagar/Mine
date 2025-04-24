'use client';

import { motion } from 'framer-motion';

export default function BottomSection({ onClose }: { onClose: () => void }) {
  const experiences = [
    {
      role: "Trainee Software Engineer",
      company: "Mphasis",
      period: "Jan 2024 - Present",
      description: "Java Full Stack training (Spring Boot, Angular). Working on Centralized Internship Program.",
      location: "Onsite"
    },
    {
      role: "Software Engineer Intern",
      company: "Center of Excellence IoT, CISCO - RVCE",
      period: "Aug - Dec 2024",
      description: "Developed IoT-based Smart Irrigation System using PERN stack for JJ Infrastructure.",
      location: "Onsite"
    },
    {
      role: "Campus Ambassador",
      company: "KRAYONNZ",
      period: "Feb - Apr 2023",
      description: "Led student onboarding and content creation for educational platform.",
      location: "Remote"
    },
    {
      role: "Stock Helper",
      company: "Shri shrinivasa sports and computer peripherals",
      period: "2019 - 2020",
      description: "Managed inventory and assisted sales.",
      location: "Onsite"
    }
  ];

  return (
    <motion.div
      className="section-content jakarta"
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
        <h1 className="section-title fondamento">Experience</h1>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="experience-header">
                <h2 className="experience-role fondamento">{exp.role}</h2>
                <span className="experience-period">{exp.period}</span>
              </div>
              <div className="experience-subheader">
                <h3 className="experience-company">{exp.company}</h3>
                {exp.location && <span className="experience-location">{exp.location}</span>}
              </div>
              <p className="experience-description">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}