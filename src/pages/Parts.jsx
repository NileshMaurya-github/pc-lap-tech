import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, Battery, Monitor, Wrench, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { useDB } from '../context/DatabaseContext';

const up = (d = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: d, ease: [0.25, 0.25, 0, 1] } });
const cats = [
  { key: 'ram',     label: 'RAM Upgrades',       icon: Cpu,       desc: 'Boost multitasking instantly' },
  { key: 'ssd',     label: 'SSD Storage',         icon: HardDrive, desc: 'Lightning fast upgrades' },
  { key: 'battery', label: 'Battery Replacement', icon: Battery,   desc: 'Restore full battery life' },
  { key: 'display', label: 'Display Panels',      icon: Monitor,   desc: 'Crystal clear screens' },
  { key: 'other',   label: 'Other Parts',         icon: Wrench,    desc: 'Keys, fans, chargers & more' },
];

export default function Parts() {
  const { db } = useDB();
  const [active, setActive] = useState('ram');

  return (
    <div className="min-h-screen" style={{ background: '#f8fafc' }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #0891b2 100%)', padding: '8rem 0 5rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...up()}>
            <h1 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', letterSpacing: '-0.03em' }}>
              Parts & Pricing
            </h1>
            <p className="text-blue-100 text-xl">No hidden charges. All prices include professional installation.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Tabs */}
        <motion.div {...up()} className="flex flex-wrap gap-2 mb-8">
          {cats.map(c => (
            <button key={c.key} onClick={() => setActive(c.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                active === c.key ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}>
              <c.icon size={15} /> {c.label}
            </button>
          ))}
        </motion.div>

        {/* Table */}
        <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
          className="surface-card rounded-2xl overflow-hidden">
          <div className="p-6" style={{ borderBottom: '1px solid #f1f5f9', background: '#fafbff' }}>
            {(() => { const c = cats.find(x => x.key === active); return (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <c.icon size={20} className="text-blue-600" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-gray-900">{c.label}</h2>
                  <p className="text-slate-400 text-sm">{c.desc}</p>
                </div>
              </div>
            )})()}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead style={{ background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                <tr>
                  {['Part Name', 'Price (Incl. Installation)', 'Availability', 'Action'].map(h => (
                    <th key={h} className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider py-3.5 px-6">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {db.parts[active].map((item, i) => (
                  <tr key={item.id} style={{ borderBottom: '1px solid #f8fafc' }}
                    className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-4 px-6 text-gray-900 font-medium">{item.name}</td>
                    <td className="py-4 px-6">
                      <span className="text-green-600 font-black text-lg">₹{item.price.toLocaleString('en-IN')}</span>
                    </td>
                    <td className="py-4 px-6">
                      {item.inStock
                        ? <span className="badge badge-green"><CheckCircle2 size={12} /> In Stock</span>
                        : <span className="badge badge-red"><XCircle size={12} /> Out of Stock</span>}
                    </td>
                    <td className="py-4 px-6">
                      <Link to="/book-repair"
                        className="inline-flex items-center gap-1.5 text-blue-600 hover:text-white hover:bg-blue-600 bg-blue-50 border border-blue-200 hover:border-blue-600 font-semibold px-3.5 py-1.5 rounded-lg text-sm transition-all">
                        Install <ArrowRight size={12} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Overview cards */}
        <motion.div {...up(0.1)} className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {cats.map((c, i) => (
            <motion.button key={c.key} {...up(i * 0.05)} onClick={() => setActive(c.key)}
              className={`surface-card rounded-2xl p-5 text-left transition-all ${active === c.key ? 'border-blue-400 bg-blue-50' : ''}`}>
              <div className="flex items-center gap-2.5 mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${active === c.key ? 'bg-blue-100' : 'bg-slate-100'}`}>
                  <c.icon size={16} className={active === c.key ? 'text-blue-600' : 'text-slate-500'} />
                </div>
                <p className={`font-semibold text-sm ${active === c.key ? 'text-blue-700' : 'text-gray-700'}`}>{c.label}</p>
              </div>
              <div className="flex gap-4 text-xs">
                <span className="text-slate-400">{db.parts[c.key].length} items</span>
                <span className="text-green-600 font-medium">{db.parts[c.key].filter(p => p.inStock).length} in stock</span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
