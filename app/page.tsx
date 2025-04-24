'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Hero from './hero';
import Arrows from './components/Arrows';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 500);
      // Show cursor after all animations
      setTimeout(() => setShowCursor(true), 5500);
    }, 2000);
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: showContent ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/my-pic.jpg"
            alt="My Picture"
            className="my-pic"
            fill
            priority
            quality={100}
            sizes="100vw"
            style={{ 
              objectFit: 'cover',
              zIndex: -1 
            }}
          />
        </motion.div>
        
        {showContent && (
          <>
            <Hero />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 0.5 }}
            >
              <Arrows />
            </motion.div>
          </>
        )}

        {showCursor && (
          <motion.div
            className="cursor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
          />
        )}
      </div>
    </main>
  );
}
