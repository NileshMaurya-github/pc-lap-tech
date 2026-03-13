import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '../assets/IMG_20260312_213446.png';
import img2 from '../assets/IMG_20260312_222157.png';
import img3 from '../assets/IMG_20260312_222237.png';
import img4 from '../assets/IMG_20260312_222319.png';

const images = [img1, img2, img3, img4];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Use a 16:5 aspect-ratio box so the banner images show fully without cropping */}
      <div className="relative w-full overflow-hidden bg-slate-900" style={{ aspectRatio: '16 / 5' }}>
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0.4, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.4, x: 60 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full object-contain"
            alt={`Repair facility banner ${currentIndex + 1}`}
          />
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-blue-500 w-5 h-2'
                  : 'bg-white/50 w-2 h-2 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
