'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Hero from './hero';
import Arrows from './components/Arrows';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 2000);
  }, []);

  return (
    <main>
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              className="loading-screen"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
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

              <AnimatePresence>
                {showContent && (
                  <>
                    <Hero />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <Arrows />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
