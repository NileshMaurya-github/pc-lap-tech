import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop2, Phone, Menu, X, Settings, ChevronRight, Search } from 'lucide-react';
import { useDB } from '../context/DatabaseContext';

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
  const { db } = useDB();
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Derive search results from database
  const searchResults = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    
    const matchedServices = db.services.filter(s => s.name.toLowerCase().includes(q) || (s.category && s.category.toLowerCase().includes(q)));
    
    const matchedParts = [];
    Object.entries(db.parts).forEach(([category, items]) => {
      items.forEach(p => {
        if (p.name.toLowerCase().includes(q)) {
          matchedParts.push({ ...p, category });
        }
      });
    });
    
    return [
      ...matchedServices.map(s => ({ ...s, type: 'service', routeCategory: s.category || 'Hardware' })),
      ...matchedParts.map(p => ({ ...p, type: 'part', routeCategory: p.category }))
    ].slice(0, 6); // Limit to top 6 results
  }, [searchQuery, db.services, db.parts]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchQuery('');
    setShowResults(false);
  }, [location.pathname]);

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

        {/* Search Bar */}
        <div className="hidden lg:block relative w-64 xl:w-80">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search services, repairs, parts..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowResults(true);
              }}
              onFocus={() => setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
              className="w-full pl-10 pr-4 py-2 bg-slate-100/80 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner placeholder:text-slate-400 text-slate-700"
            />
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>

          {/* Search Dropdown */}
          <AnimatePresence>
            {showResults && searchQuery.trim() && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute top-full mt-2 left-0 right-0 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden py-2 z-50"
              >
                {searchResults.length > 0 ? (
                  searchResults.map((item, i) => (
                    <Link 
                      key={i} 
                      to={item.type === 'service' ? `/services#${item.routeCategory}` : `/parts#${item.routeCategory}`}
                      className="block px-4 py-2 hover:bg-slate-50 border-l-2 border-transparent hover:border-blue-500 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-800 line-clamp-1 pr-4">{item.name}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {item.type}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        {item.type === 'service' ? `Starts at ₹${item.price}` : `₹${item.price} • ${item.status}`}
                      </span>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-5 text-center text-sm text-slate-500">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
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
