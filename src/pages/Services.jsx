import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monitor, Keyboard, Battery, Zap, Cpu, Droplets, Wind, Link2, Download, RotateCcw, Shield, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useDB } from '../context/DatabaseContext';

const up = (d = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: d, ease: [0.25, 0.25, 0, 1] } });

const iconMap = { 'srv-screen': Monitor, 'srv-keyboard': Keyboard, 'srv-battery': Battery, 'srv-charging': Zap, 'srv-mobo': Cpu, 'srv-water': Droplets, 'srv-fan': Wind, 'srv-hinges': Link2, 'srv-software': Download, 'srv-windows': RotateCcw, 'srv-virus': Shield, 'srv-upgrade': TrendingUp };
const catStyle = { Hardware: 'badge-blue', Software: 'bg-purple-50 text-purple-700 border border-purple-200', Upgrade: 'badge-green' };

export default function Services() {
  const { db } = useDB();
  return (
    <div className="min-h-screen" style={{ background: '#f8fafc' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #0891b2 100%)', padding: '8rem 0 5rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...up()}>
            <span className="inline-flex items-center gap-1.5 text-blue-100 bg-white/10 border border-white/20 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              <CheckCircle2 size={13} /> What We Fix
            </span>
            <h1 className="font-display font-black text-white mt-3 mb-4" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', letterSpacing: '-0.03em' }}>
              Our Repair Services
            </h1>
            <p className="text-blue-100 text-xl max-w-xl mx-auto">Transparent pricing, genuine parts, expert technicians.</p>
          </motion.div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {db.services.map((svc, i) => {
            const Icon = iconMap[svc.id] || Cpu;
            return (
              <motion.div key={svc.id} {...up(i * 0.05)} className="surface-card rounded-2xl p-7 flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Icon size={22} className="text-blue-600" />
                  </div>
                  <span className={`badge text-xs ${catStyle[svc.category] || 'badge-blue'}`}>{svc.category}</span>
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{svc.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{svc.desc}</p>
                <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid #f1f5f9' }}>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">Starting from</p>
                    <p className="text-green-600 font-black text-xl">₹{svc.price.toLocaleString('en-IN')}</p>
                  </div>
                  <Link to="/book-repair" className="flex items-center gap-1.5 text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 border border-blue-200 hover:border-blue-600 font-semibold px-4 py-2 rounded-xl text-sm transition-all">
                    Book <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div {...up()} className="mt-14 surface-card rounded-3xl p-10 text-center">
          <h3 className="font-display font-bold text-3xl text-gray-900 mb-3">Don't see your issue?</h3>
          <p className="text-slate-500 mb-7 text-lg">We repair all types of laptop problems. Contact us for a free diagnosis.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-repair" className="btn-blue">Book Free Diagnosis <ArrowRight size={16} /></Link>
            <a href="tel:6306372863" className="btn-outline">Call: 6306372863</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
