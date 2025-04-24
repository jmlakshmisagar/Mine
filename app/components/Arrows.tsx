'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import './arrows.css';

import TopSection from '../sections/top';
import RightSection from '../sections/right';
import BottomSection from '../sections/bottom';
import LeftSection from '../sections/left';

export default function Arrows() {
  const [activeArrows, setActiveArrows] = useState<string[]>([]);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const arrows = [
    { direction: 'top', rotation: 270, titleRotation: 0 },
    { direction: 'right', rotation: 0, titleRotation: -90 },
    { direction: 'bottom', rotation: 90, titleRotation: 0 },
    { direction: 'left', rotation: 180, titleRotation: 90 },
  ];

  useEffect(() => {
    // Delay arrows until after main title (3.5s), subtitle (4s), and icons (4.5s + stagger)
    const startDelay = 7000; // Start after all other animations

    setTimeout(() => {
      const directions = arrows.map(arrow => arrow.direction);
      directions.forEach((direction, index) => {
        setTimeout(() => {
          setActiveArrows(prev => [...prev, direction]);
        }, index * 500); // Increased delay between arrows for better visibility
      });
    }, startDelay);
  }, []);

  const handleArrowClick = (direction: string) => {
    setSelectedSection(direction);
  };

  const handleClose = () => {
    setSelectedSection(null);
  };

  return (
    <>
      <div className="arrows-container">
        {arrows.map(({ direction, rotation, titleRotation }) => (
          activeArrows.includes(direction) && (
            <motion.div
              key={direction}
              className={`arrow-wrapper arrow-${direction}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                duration: 0.5,
                ease: "easeOut"
              }}
              onClick={() => handleArrowClick(direction)}
            >
              <motion.div 
                className="arrow-container"
                animate={{ 
                  x: direction === 'left' || direction === 'right' ? [0, 10, 0] : 0,
                  y: direction === 'top' || direction === 'bottom' ? [0, 10, 0] : 0 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="/images/right-arrow.svg"
                  alt={direction}
                  width={50}
                  height={50}
                  className="arrow-svg"
                  style={{ transform: `rotate(${rotation}deg)` }}
                />
              </motion.div>
            </motion.div>
          )
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedSection === 'top' && <TopSection onClose={handleClose} />}
        {selectedSection === 'right' && <RightSection onClose={handleClose} />}
        {selectedSection === 'bottom' && <BottomSection onClose={handleClose} />}
        {selectedSection === 'left' && <LeftSection onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
}