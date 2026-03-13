import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all images from assets
import img1 from '../assets/IMG_20260312_213446.png'; // First image
import img2 from '../assets/IMG_20260312_222157.png';
import img3 from '../assets/IMG_20260312_222237.png';
import img4 from '../assets/IMG_20260312_222319.png';

const images = [img1, img2, img3, img4];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Change image every 4 seconds
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-slate-50 pb-0 border-b border-slate-200">
      
      {/* Full Screen Edge-to-Edge Image Container */}
      <div className="relative w-full overflow-hidden shadow-xl bg-white flex items-center justify-center min-h-[50vh]">
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{ opacity: 0.3, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.3, x: 150 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-auto max-h-[88vh] object-contain m-auto"
            alt={`Repair facility view ${currentIndex + 1}`}
          />
        </AnimatePresence>

        {/* Optional: Navigation Dots at the bottom */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-blue-600 scale-125' : 'bg-white/60 hover:bg-white'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
