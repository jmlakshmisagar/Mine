'use client';

import { motion } from 'framer-motion';

export default function Links() {
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 4.5 + (i * 0.2),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const links = [
    { href: "https://github.com/YOUR_USERNAME", icon: "fa-brands fa-github", newTab: true },
    { href: "https://linkedin.com/in/YOUR_USERNAME", icon: "fa-brands fa-linkedin", newTab: true },
    { href: "mailto:your.email@example.com", icon: "fa-solid fa-envelope", newTab: true },
    { href: "https://instagram.com/YOUR_USERNAME", icon: "fa-brands fa-instagram", newTab: true },
    { 
      href: "https://drive.google.com/file/d/YOUR_FILE_ID/view", 
      icon: "fa-regular fa-file",
      isResume: true,
      newTab: false  // This ensures resume opens in same page
    }
  ];

  return (
    <motion.div 
      className="center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4.5, duration: 0.5 }}
    >
      <ul>
        {links.map((link, index) => (
          <motion.li
            key={index}
            custom={index}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            className={link.isResume ? 'resume-link' : ''}
          >
            <a 
              href={link.href} 
              target={link.newTab ? "_blank" : "_self"}
              rel={link.newTab ? "noopener noreferrer" : undefined}
              className={link.isResume ? 'resume-button' : ''}
            >
              <i className={link.icon}></i>
              {link.isResume }
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}