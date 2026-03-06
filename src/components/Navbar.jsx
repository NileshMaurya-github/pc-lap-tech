import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop2, Phone, Menu, X, Settings, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Home',          href: '/' },
  { label: 'Services',      href: '/services' },
  { label: 'Parts & Price', href: '/parts' },
  { label: 'Book Repair',   href: '/book-repair' },
  { label: 'About',         href: '/about' },
  { label: 'Contact',       href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background:   scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(18px)',
        borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid rgba(226,232,240,0.5)',
        boxShadow:    scrolled ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
        transition:   'all 0.3s ease',
        padding:      scrolled ? '0.5rem 0' : '0.875rem 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src="/logo.png"
            alt="PC LAP TECH Logo"
            style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover', boxShadow: '0 2px 8px rgba(37,99,235,0.25)' }}
          />
          <div className="leading-tight">
            <span className="font-display font-black text-gray-900 text-xl tracking-tight">PC LAP</span>
            <span className="font-display font-black text-blue-600 text-xl tracking-tight">TECH</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map(l => (
            <Link key={l.href} to={l.href}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === l.href
                  ? 'text-blue-600 bg-blue-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5">
          <a href="tel:6306372863"
            className="btn-blue text-sm px-4 py-2.5" style={{ borderRadius: '10px', padding: '0.6rem 1.25rem' }}>
            <Phone size={14} /> 6306372863
          </a>
          <Link to="/admin"
            className="p-2.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
            <Settings size={18} />
          </Link>
        </div>

        <button className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: '#fff', borderTop: '1px solid #e2e8f0', overflow: 'hidden' }}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map(l => (
                <Link key={l.href} to={l.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === l.href
                      ? 'text-blue-600 bg-blue-50 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}>
                  {l.label}
                </Link>
              ))}
              <a href="tel:6306372863" className="btn-blue mt-2 text-sm justify-center">
                <Phone size={15} /> Call: 6306372863
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
