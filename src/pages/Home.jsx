import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone, ArrowRight, Star, MapPin, CheckCircle2,
  Zap, Shield, Wrench, Truck, Clock, Award, Users, TrendingUp,
  Monitor, Keyboard, Battery, HardDrive, Cpu, Droplets, Download, Link2, Database, MousePointer2, Wind
} from 'lucide-react';
import { SiHp, SiDell, SiLenovo, SiAsus, SiAcer, SiSamsung, SiMsi, SiApple } from 'react-icons/si';
import ImageSlider from '../components/ImageSlider';

const up = (d = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay: d, ease: [0.25, 0.25, 0, 1] },
});

const brands = [
  { name: 'HP',      color: '#0096D6', logo: <SiHp size={38} color="white" /> },
  { name: 'Dell',    color: '#007DB8', logo: <SiDell size={38} color="white" /> },
  { name: 'Lenovo',  color: '#E2231A', logo: <SiLenovo size={42} color="white" /> },
  { name: 'Asus',    color: '#00539B', logo: <SiAsus size={38} color="white" /> },
  { name: 'Acer',    color: '#83B81A', logo: <SiAcer size={38} color="white" /> },
  { name: 'Samsung', color: '#1428A0', logo: <SiSamsung size={42} color="white" /> },
  { name: 'MSI',     color: '#D3262D', logo: <SiMsi size={38} color="white" /> },
  { name: 'Apple',   color: '#555555', logo: <SiApple size={36} color="white" /> },
];

const highlights = [
  { icon: Zap,    title: 'Same Day Repair',      desc: 'Most repairs done in 2-4 hours right at our service center.' },
  { icon: Shield, title: 'Genuine Parts Only',   desc: 'OEM-quality components backed with a 3-month warranty.' },
  { icon: Wrench, title: 'All Brands Supported', desc: 'HP, Dell, Lenovo, Asus, Acer, Apple, MSI & more.' },
  { icon: Truck,  title: 'Doorstep Pickup',      desc: 'Free pickup and delivery across complete Delhi NCR.' },
];

const services = [
  { icon: Monitor,       label: 'Screen Repair',    from: 1999 },
  { icon: Battery,       label: 'Battery Replace',  from: 999 },
  { icon: HardDrive,     label: 'SSD Upgrade',      from: 1499 },
  { icon: Cpu,           label: 'RAM Upgrade',      from: 499 },
  { icon: Keyboard,      label: 'Keyboard Repair',  from: 799 },
  { icon: Wrench,        label: 'Motherboard Fix',  from: 2999 },
  { icon: Droplets,      label: 'Water Damage',     from: 1499 },
  { icon: Wind,          label: 'Fan & Cooling',    from: 499 },
  { icon: Download,      label: 'OS Installation',  from: 399 },
  { icon: Link2,         label: 'Hinges Repair',    from: 799 },
  { icon: Database,      label: 'Data Recovery',    from: 1499 },
  { icon: MousePointer2, label: 'Touchpad Repair',  from: 899 },
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
      <section className="hero-pattern relative flex flex-col items-center justify-start pt-16 sm:pt-20 pb-6 sm:pb-10">
        <div className="hidden sm:block absolute top-20 right-10 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)' }} />
        <div className="hidden sm:block absolute bottom-20 left-10 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.06) 0%, transparent 70%)' }} />

        {/* IMAGE SLIDER */}
        <div className="w-full">
          <ImageSlider />
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10 pt-4 sm:pt-6">

          {/* Trust badge */}
          <motion.div {...up(0)} className="mb-3">
            <span className="inline-flex items-center gap-1.5 flex-wrap justify-center badge badge-blue text-[11px] sm:text-sm leading-snug px-3 py-1.5">
              <CheckCircle2 size={12} className="shrink-0" />
              <span>#1 Trusted Laptop Repair in Delhi NCR · 10,000+ Happy Customers</span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 {...up(0.08)}
            className="font-display font-black text-gray-900 mb-2 sm:mb-3 leading-tight"
            style={{ fontSize: 'clamp(1.6rem, 5vw, 3.8rem)', letterSpacing: '-0.02em' }}>
            Professional Laptop <span className="text-gradient">Repair Services</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p {...up(0.16)}
            className="text-slate-500 text-sm sm:text-lg mb-5 sm:mb-8 max-w-xl mx-auto leading-relaxed px-2">
            Fast, Reliable &amp; Affordable — Genuine parts, certified technicians &amp; doorstep service across Delhi NCR.
          </motion.p>

          {/* CTA Buttons — stacked on mobile, side by side on sm+ */}
          <motion.div {...up(0.22)} className="flex flex-col sm:flex-row justify-center gap-3 mb-4 px-4 sm:px-0">
            <Link to="/book-repair" className="btn-blue text-sm sm:text-base px-6 py-3 sm:py-4 w-full sm:w-auto" style={{ borderRadius: '14px' }}>
              Book Repair Now <ArrowRight size={16} />
            </Link>
            <a href="tel:6306372863" className="btn-outline text-sm sm:text-base px-6 py-3 sm:py-4 w-full sm:w-auto" style={{ borderRadius: '14px' }}>
              <Phone size={16} /> Call Now
            </a>
          </motion.div>

        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section pt-4 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...up()} className="text-center mb-8 sm:mb-12">
            <span className="badge badge-blue mb-2">Why PC LAP TECH</span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-gray-900 mt-2">
              Why Thousands Choose <span className="text-gradient">Us</span>
            </h2>
            <p className="text-slate-500 mt-2 text-sm sm:text-lg max-w-xl mx-auto">The most trusted laptop care brand in Delhi NCR</p>
          </motion.div>

          {/* 2-col on mobile, 2-col on sm, 4-col on lg */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {highlights.map((h, i) => (
              <motion.div key={i} {...up(i * 0.08)}
                whileHover={{ y: -6, scale: 1.02, boxShadow: '0 12px 24px -8px rgba(37,99,235,0.25)', borderColor: '#bfdbfe' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="surface-card rounded-2xl p-3 sm:p-7 flex flex-col items-start gap-2 sm:block">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 sm:mb-5">
                  <h.icon size={18} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-gray-900 text-sm sm:text-lg mb-0.5 sm:mb-2 leading-tight">{h.title}</h3>
                  <p className="text-slate-500 text-[11px] sm:text-sm leading-relaxed">{h.desc}</p>
                </div>
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
              <motion.div key={i} {...up(i * 0.06)} 
                whileHover={{ y: -8, scale: 1.03, boxShadow: '0 12px 24px -8px rgba(37,99,235,0.3)', borderColor: '#bfdbfe' }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="surface-card rounded-2xl p-5 text-center cursor-pointer">
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
      <section className="section">
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
                whileHover={{ y: -8, scale: 1.03, boxShadow: '0 12px 24px -8px rgba(37,99,235,0.3)', borderColor: '#bfdbfe' }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="surface-card rounded-2xl p-6 flex flex-col items-center gap-3 cursor-pointer">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner"
                  style={{ background: b.color }}>
                  {b.logo}
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
      <section className="section">
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
              <motion.div key={i} {...up(i * 0.08)} 
                whileHover={{ y: -8, scale: 1.03, boxShadow: '0 12px 24px -8px rgba(37,99,235,0.3)', borderColor: '#bfdbfe' }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="surface-card rounded-2xl p-6">
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
