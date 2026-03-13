import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Zap, GraduationCap, Briefcase, Building, Gamepad2, ArrowRight, CheckCircle2 } from 'lucide-react';

const up = (d = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: d } });

const values = [
  { icon: Shield, title: 'Genuine Parts',       desc: 'OEM-quality certified spare parts for every repair with 3-month warranty.' },
  { icon: Award,  title: 'Expert Technicians',  desc: 'Certified professionals with 5+ years of hands-on repair experience.' },
  { icon: Zap,    title: 'Fast Turnaround',     desc: 'Same-day repairs with transparent time estimates upfront.' },
  { icon: Users,  title: 'Customer First',      desc: 'Honest assessments, no unnecessary repairs, never a hidden charge.' },
];

const audience = [
  { icon: GraduationCap, title: 'Students',      desc: 'Affordable repairs to get study laptops back up fast.' },
  { icon: Briefcase,     title: 'Professionals', desc: 'Priority service for work laptops with minimal downtime.' },
  { icon: Building,      title: 'Businesses',    desc: 'Bulk repair contracts for office laptop fleets.' },
  { icon: Gamepad2,      title: 'Gamers',        desc: 'Specialized high-performance gaming laptop upgrades.' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-transparent">
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #0891b2 100%)', padding: '8rem 0 5rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...up()}>
            <h1 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', letterSpacing: '-0.03em' }}>
              About PC LAP TECH
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto">Delhi NCR's most trusted laptop repair service since 5+ years</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...up()}>
            <h2 className="font-display font-black text-4xl text-gray-900 mb-5">Our Story</h2>
            <p className="text-slate-500 leading-relaxed mb-4 text-lg">PC LAP TECH was founded to fix a real problem — overpriced, unreliable laptop repairs that leave customers in the dark.</p>
            <p className="text-slate-500 leading-relaxed mb-7">We built our business around transparency, technical excellence, and genuine customer care. Every technician is trained, certified, and committed to getting your device back to peak performance at an honest price.</p>
            <ul className="space-y-3">
              {['Free diagnosis — no consultation fee', '3-month warranty on every repair', 'Doorstep service across Delhi NCR', 'Transparent pricing, zero hidden costs'].map((t, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 size={17} className="text-green-500 flex-shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...up(0.15)}>
            <div className="surface-card rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[{ val: '10,000+', label: 'Laptops Repaired' }, { val: '5+', label: 'Years Experience' }, { val: '50+', label: 'Expert Technicians' }, { val: '98%', label: 'Satisfaction Rate' }].map((s, i) => (
                  <div key={i} className="bg-blue-50 rounded-2xl p-6 text-center" style={{ border: '1.5px solid #bfdbfe' }}>
                    <p className="font-display font-black text-3xl text-blue-700 mb-1">{s.val}</p>
                    <p className="text-slate-500 text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div>
          <motion.div {...up()} className="text-center mb-10">
            <h2 className="font-display font-black text-4xl text-gray-900">Our Core Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={i} {...up(i * 0.07)} className="surface-card rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Audience */}
        <div>
          <motion.div {...up()} className="text-center mb-10">
            <h2 className="font-display font-black text-4xl text-gray-900">Who We Repair For</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {audience.map((a, i) => (
              <motion.div key={i} {...up(i * 0.07)} className="surface-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                  <a.icon size={22} className="text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{a.title}</h3>
                <p className="text-slate-500 text-sm">{a.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/book-repair" className="btn-blue text-lg px-8 py-4" style={{ borderRadius: '14px' }}>
              Book Your Repair <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
