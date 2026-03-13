import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';

export default function FloatingButtons() {
  const [open, setOpen] = useState(false);
  const msg = encodeURIComponent('Hi! I need laptop repair service. Can you help me book a repair?');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 no-print">
      <AnimatePresence>
        {open && (
          <>
            <motion.a key="wa" href={`https://wa.me/916306372860?text=${msg}`} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.8 }} transition={{ delay: 0.05, type: 'spring', stiffness: 300 }}
              className="flex items-center gap-2.5 font-semibold text-sm text-white px-4 py-2.5 whitespace-nowrap"
              style={{ background: '#25D366', borderRadius: '12px', boxShadow: '0 4px 16px rgba(37,211,102,0.4)' }}>
              <MessageCircle size={16} /> WhatsApp Chat
            </motion.a>
            <motion.a key="call" href="tel:6306372863"
              initial={{ opacity: 0, y: 16, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.8 }} transition={{ type: 'spring', stiffness: 300 }}
              className="flex items-center gap-2.5 font-semibold text-sm text-white px-4 py-2.5 whitespace-nowrap"
              style={{ background: '#2563eb', borderRadius: '12px', boxShadow: '0 4px 16px rgba(37,99,235,0.4)' }}>
              <Phone size={16} /> Call Now
            </motion.a>
          </>
        )}
      </AnimatePresence>

      <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.93 }} onClick={() => setOpen(!open)}
        className="w-14 h-14 flex items-center justify-center text-white"
        style={{ background: 'linear-gradient(135deg, #1d4ed8, #0891b2)', borderRadius: '50%', boxShadow: '0 6px 24px rgba(37,99,235,0.45)' }}>
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={24} /></motion.div>
            : <motion.div key="p" initial={{ rotate: 90,  opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Phone size={24} /></motion.div>
          }
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
