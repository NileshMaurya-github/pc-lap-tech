import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone, ArrowRight, Star, MapPin, CheckCircle2,
  Zap, Shield, Wrench, Truck, Clock, Award, Users, TrendingUp,
  Monitor, Keyboard, Battery, HardDrive, Cpu
} from 'lucide-react';

const up = (d = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay: d, ease: [0.25, 0.25, 0, 1] },
});

const brands = [
  { name: 'HP',      color: '#0096D6', initial: 'H' },
  { name: 'Dell',    color: '#007DB8', initial: 'De' },
  { name: 'Lenovo',  color: '#E2231A', initial: 'Le' },
  { name: 'Asus',    color: '#00539B', initial: 'As' },
  { name: 'Acer',    color: '#83B81A', initial: 'Ac' },
  { name: 'Samsung', color: '#1428A0', initial: 'Sa' },
  { name: 'MSI',     color: '#D3262D', initial: 'MS' },
  { name: 'Apple',   color: '#555',    initial: '' },
];

const highlights = [
  { icon: Zap,    title: 'Same Day Repair',      desc: 'Most repairs done in 2-4 hours right at our service center.' },
  { icon: Shield, title: 'Genuine Parts Only',   desc: 'OEM-quality components backed with a 3-month warranty.' },
  { icon: Wrench, title: 'All Brands Supported', desc: 'HP, Dell, Lenovo, Asus, Acer, Apple, MSI & more.' },
  { icon: Truck,  title: 'Doorstep Pickup',      desc: 'Free pickup and delivery across complete Delhi NCR.' },
];

const services = [
  { icon: Monitor,   label: 'Screen Repair',    from: 1999 },
  { icon: Battery,   label: 'Battery Replace',  from: 999 },
  { icon: HardDrive, label: 'SSD Upgrade',      from: 1499 },
  { icon: Cpu,       label: 'RAM Upgrade',      from: 2499 },
  { icon: Keyboard,  label: 'Keyboard Repair',  from: 799 },
  { icon: Wrench,    label: 'Motherboard Fix',  from: 2999 },
];

const reviews = [
  { name: 'Rahul Sharma', area: 'Noida',         rating: 5, text: 'Got my Dell XPS screen replaced in 2 hours. Price was fair and the technician was super professional!' },
  { name: 'Priya Gupta',  area: 'Faridabad',     rating: 5, text: 'MacBook battery replaced perfectly. Doorstep service saved me so much time. Highly recommend!' },
  { name: 'Amit Singh',   area: 'Greater Noida', rating: 5, text: 'My Lenovo ThinkPad was repaired at my home. Very transparent pricing, no hidden charges at all.' },
  { name: 'Sneha Verma',  area: 'Delhi',         rating: 5, text: 'HP motherboard issue fixed for much less than other shops quoted. Genuine service, honest team.' },
];

const areas = ['Delhi', 'Noida', 'Greater Noida', 'Faridabad', 'Gurugram', 'Ghaziabad'];

export default function Home() {
  return (
    <div className="overflow-hidden">

      {/* ── HERO ── */}
      <section className="hero-pattern relative min-h-screen flex items-center justify-center pt-24 pb-20">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.06) 0%, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div {...up(0)}>
            <span className="badge badge-blue mb-6">
              <CheckCircle2 size={13} />
              #1 Trusted Laptop Repair in Delhi NCR · 10,000+ Happy Customers
            </span>
          </motion.div>

          <motion.h1 {...up(0.08)}
            className="font-display font-black text-gray-900 mt-4 mb-6 leading-none"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}>
            Professional Laptop<br />
            <span className="text-gradient">Repair Services</span>
          </motion.h1>

          <motion.p {...up(0.16)}
            className="text-slate-500 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Fast, Reliable & Affordable — We fix all brands with genuine parts,<br className="hidden md:block" />
            certified technicians, and doorstep service across Delhi NCR.
          </motion.p>

          <motion.div {...up(0.22)} className="flex flex-wrap justify-center gap-4 mb-14">
            <Link to="/book-repair" className="btn-blue text-base px-8 py-4" style={{ borderRadius: '14px', fontSize: '1.05rem' }}>
              Book Repair Now <ArrowRight size={18} />
            </Link>
            <a href="tel:6306372863" className="btn-outline text-base px-8 py-4" style={{ borderRadius: '14px', fontSize: '1.05rem' }}>
              <Phone size={18} /> Call Now
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div {...up(0.28)} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Users,       value: '10,000+', label: 'Happy Customers' },
              { icon: Wrench,      value: '50+',     label: 'Expert Technicians' },
              { icon: Award,       value: '5+ Yrs',  label: 'Experience' },
              { icon: TrendingUp,  value: '98%',     label: 'Success Rate' },
            ].map((s, i) => (
              <div key={i} className="surface-card rounded-2xl p-5 text-center">
                <s.icon size={20} className="text-blue-600 mx-auto mb-2" />
                <p className="font-display font-black text-2xl text-gray-900">{s.value}</p>
                <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...up()} className="text-center mb-14">
            <span className="badge badge-blue mb-3">Why PC LAP TECH</span>
            <h2 className="font-display font-black text-4xl text-gray-900 mt-3">
              Why Thousands Choose <span className="text-gradient">Us</span>
            </h2>
            <p className="text-slate-500 mt-3 text-lg max-w-xl mx-auto">The most trusted laptop care brand in Delhi NCR</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <motion.div key={i} {...up(i * 0.08)} className="surface-card rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  <h.icon size={22} className="text-blue-600" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{h.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK SERVICES ── */}
      <section className="section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...up()} className="text-center mb-14">
            <span className="badge badge-blue mb-3">Services</span>
            <h2 className="font-display font-black text-4xl text-gray-900 mt-3">
              What We <span className="text-gradient">Fix</span>
            </h2>
            <p className="text-slate-500 mt-3 text-lg">Transparent pricing on every service</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {services.map((s, i) => (
              <motion.div key={i} {...up(i * 0.06)} className="surface-card rounded-2xl p-5 text-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  <s.icon size={22} className="text-blue-600" />
                </div>
                <p className="text-gray-800 font-semibold text-sm mb-1">{s.label}</p>
                <p className="text-green-600 font-bold text-sm">From ₹{s.from.toLocaleString('en-IN')}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="btn-outline">View All Services <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...up()} className="text-center mb-12">
            <h2 className="font-display font-black text-4xl text-gray-900">
              Brands We <span className="text-gradient">Repair</span>
            </h2>
            <p className="text-slate-500 mt-3 text-lg">Expert certified repair for every major brand</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {brands.map((b, i) => (
              <motion.div key={i} {...up(i * 0.06)}
                className="surface-card rounded-2xl p-6 flex flex-col items-center gap-3 cursor-default">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black font-display text-lg"
                  style={{ background: b.color }}>
                  {b.name === 'Apple' ? (
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  ) : b.initial}
                </div>
                <p className="font-display font-bold text-gray-800">{b.name}</p>
                <p className="text-slate-400 text-xs">Expert Repair</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...up()}>
              <span className="badge badge-blue mb-4">Service Coverage</span>
              <h2 className="font-display font-black text-4xl text-gray-900 mt-3 mb-4">
                We Cover All of<br /><span className="text-gradient">Delhi NCR</span>
              </h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Doorstep pickup, on-site repair, and drop-off service available across the entire National Capital Region. Book a slot and we come to you.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-8">
                {areas.map((a, i) => (
                  <div key={i} className="surface-card rounded-xl px-3 py-3 flex items-center gap-2">
                    <MapPin size={14} className="text-blue-600 flex-shrink-0" />
                    <span className="text-gray-800 text-sm font-medium">{a}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/book-repair" className="btn-blue">Book Home Visit <ArrowRight size={16} /></Link>
                <a href="tel:6306372863" className="btn-outline"><Phone size={15} /> 6306372863</a>
              </div>
            </motion.div>
            <motion.div {...up(0.15)}>
              <div className="rounded-3xl overflow-hidden" style={{ border: '2px solid #e2e8f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1701000000000!5m2!1sen!2sin"
                  width="100%" height="380" style={{ border: 'none' }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Delhi NCR Service Area" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...up()} className="text-center mb-12">
            <span className="badge badge-blue mb-3">Testimonials</span>
            <h2 className="font-display font-black text-4xl text-gray-900 mt-3">
              What Customers <span className="text-gradient">Say</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-0.5">{Array(5).fill(0).map((_, i) => <Star key={i} size={18} className="text-amber-400 fill-amber-400" />)}</div>
              <span className="text-slate-500 text-sm font-medium">4.9 / 5 based on 500+ reviews</span>
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <motion.div key={i} {...up(i * 0.08)} className="surface-card rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array(r.rating).fill(0).map((_, j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">"{r.text}"</p>
                <div className="pt-4" style={{ borderTop: '1px solid #f1f5f9' }}>
                  <p className="text-gray-900 font-semibold text-sm">{r.name}</p>
                  <p className="text-slate-400 text-xs flex items-center gap-1 mt-0.5"><MapPin size={11} /> {r.area}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #0891b2 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...up()}>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4">
              Book Laptop Repair Today
            </h2>
            <p className="text-blue-100 text-xl mb-10 max-w-xl mx-auto">
              Same-day service available. Our expert team is ready to fix your device.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/book-repair" className="btn-white text-lg px-8 py-4" style={{ borderRadius: '14px' }}>
                Book Repair Now <ArrowRight size={18} />
              </Link>
              <a href="tel:6306372863"
                className="flex items-center gap-2 font-bold text-lg text-white px-8 py-4 rounded-xl transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.4)', borderRadius: '14px' }}>
                <Phone size={18} /> Call 6306372863
              </a>
            </div>
            <div className="flex justify-center gap-8 mt-10">
              {[{ icon: CheckCircle2, text: 'Free Diagnosis' }, { icon: Shield, text: '3-Month Warranty' }, { icon: Zap, text: 'Same Day Service' }].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-blue-100 text-sm">
                  <b.icon size={16} className="text-white" />
                  {b.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
