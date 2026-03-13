import React, { useMemo, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monitor, Keyboard, Battery, Zap, Cpu, Droplets, Wind, Link2, Download, RotateCcw, Shield, TrendingUp, ArrowRight, CheckCircle2, Volume2, MousePointer2, Camera, Database, Activity, Settings, Wifi, Sliders, HardDrive, Thermometer, Search } from 'lucide-react';
import { useDB } from '../context/DatabaseContext';

const up = (d = 0) => ({ 
  initial: { opacity: 0, y: 20 }, 
  whileInView: { opacity: 1, y: 0 }, 
  viewport: { once: true }, 
  transition: { duration: 0.4, delay: d, ease: "easeOut" } 
});

const iconMap = { 
  'srv-screen': Monitor, 'srv-keyboard': Keyboard, 'srv-battery': Battery, 
  'srv-charging': Zap, 'srv-mobo': Cpu, 'srv-water': Droplets, 
  'srv-fan': Wind, 'srv-hinges': Link2, 'srv-software': Download, 
  'srv-windows': RotateCcw, 'srv-virus': Shield, 'srv-upgrade': TrendingUp,
  'srv-speaker': Volume2, 'srv-touchpad': MousePointer2, 'srv-camera': Camera,
  'srv-data-rec': Database, 'srv-os-repair': Activity, 'srv-bios': Settings,
  'srv-network': Wifi, 'srv-app-config': Sliders, 'srv-ram-up': Cpu,
  'srv-ssd-up': HardDrive, 'srv-thermal-up': Thermometer, 'srv-wifi-up': Wifi
};

const categoryLabels = {
  Hardware: "Hardware Repairs",
  Software: "Software & OS",
  Upgrade: "Performance Upgrades"
};

const catStyle = { 
  Hardware: 'bg-blue-50 text-blue-700', 
  Software: 'bg-purple-50 text-purple-700', 
  Upgrade: 'bg-green-50 text-green-700' 
};

export default function Services() {
  const { db } = useDB();

  const [searchQuery, setSearchQuery] = useState('');

  // Group services by category, filtered by search query
  const groupedServices = useMemo(() => {
    const q = searchQuery.toLowerCase();
    const filtered = db.services.filter(svc => 
      svc.name.toLowerCase().includes(q) || 
      (svc.desc && svc.desc.toLowerCase().includes(q))
    );

    return filtered.reduce((acc, svc) => {
      const cat = svc.category || 'Hardware';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(svc);
      return acc;
    }, {});
  }, [db.services, searchQuery]);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-transparent pb-20">
      
      {/* Compact Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 pt-28 pb-16 border-b-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...up()}>
            <span className="inline-flex items-center gap-1.5 text-blue-100 bg-white/10 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <CheckCircle2 size={12} /> Complete Repair Catalog
            </span>
            <h1 className="font-display font-black text-white text-3xl md:text-5xl mb-3 tracking-tight">
              Our Services
            </h1>
            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto opacity-90">
              Browse our transparent pricing by category. Genuine parts & expert technicians.
            </p>
            
            {/* Local Page Search Bar */}
            <div className="mt-8 max-w-xl mx-auto relative">
              <input
                type="text"
                placeholder="Find a specific repair (e.g. Broken Screen, Battery...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all shadow-xl text-lg"
              />
              <Search size={22} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-200" />
            </div>

          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
        
        {/* Category Sections */}
        {Object.entries(groupedServices).map(([category, services], catIndex) => (
          <motion.div key={category} id={category} {...up(0.1 * catIndex)} className="mb-12 scroll-mt-28">
            
            <div className="flex items-center gap-3 mb-6 pl-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${catStyle[category]}`}>
                {category === 'Hardware' && <Cpu size={16} />}
                {category === 'Software' && <Download size={16} />}
                {category === 'Upgrade' && <TrendingUp size={16} />}
              </div>
              <h2 className="font-display font-bold text-2xl text-slate-800">
                {categoryLabels[category] || category}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {services.map((svc, i) => {
                const Icon = iconMap[svc.id] || Cpu;
                return (
                  <motion.div 
                    key={svc.id} 
                    whileHover={{ y: -8, scale: 1.02, boxShadow: '0 12px 24px -8px rgba(37,99,235,0.2)', borderColor: '#bfdbfe' }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm transition-shadow flex flex-col group"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${catStyle[category]}`}>
                        <Icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-slate-900 text-sm truncate" title={svc.name}>{svc.name}</h3>
                        <p className="text-slate-500 text-xs line-clamp-2 mt-0.5" title={svc.desc}>{svc.desc}</p>
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Starts at</span>
                        <span className="text-slate-900 font-black text-base">₹{svc.price.toLocaleString('en-IN')}</span>
                      </div>
                      <Link 
                        to="/book-repair" 
                        state={{ selectedService: svc.id }} 
                        className="text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 group-hover:bg-blue-600 group-hover:text-white"
                      >
                        Book <ArrowRight size={12} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
          </motion.div>
        ))}

        {Object.keys(groupedServices).length === 0 && (
          <div className="text-center py-20">
            <Search size={48} className="mx-auto text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">No services found</h3>
            <p className="text-slate-500">We couldn't find any repairs matching "{searchQuery}". Try a different keyword or contact us.</p>
          </div>
        )}

        {/* Footer CTA */}
        <motion.div {...up()} className="mt-10 bg-white border border-blue-100 shadow-sm rounded-2xl p-8 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-display font-bold text-xl text-slate-900 mb-1">Don't see your specific issue?</h3>
            <p className="text-slate-500 text-sm">We repair all types of laptop problems. Contact us for a free expert diagnosis.</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link to="/book-repair" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2">
              Free Diagnosis <ArrowRight size={14} />
            </Link>
            <a href="tel:6306372863" className="border border-slate-300 hover:border-slate-400 text-slate-700 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
              Call 6306372863
            </a>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
