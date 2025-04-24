'use client';

import { motion } from 'framer-motion';

export default function Links() {
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 4.5 + (i * 0.2), // Start after subtitle animation + stagger
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const links = [
    { href: "https://github.com/YOUR_USERNAME", icon: "fa-brands fa-github" },
    { href: "https://linkedin.com/in/YOUR_USERNAME", icon: "fa-brands fa-linkedin" },
    { href: "mailto:your.email@example.com", icon: "fa-solid fa-envelope" },
    { href: "https://instagram.com/YOUR_USERNAME", icon: "fa-brands fa-instagram" }
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
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <i className={link.icon}></i>
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}