import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop2, Phone, Mail, MapPin, ChevronRight, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#0f172a', color: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Laptop2 size={22} className="text-white" />
              </div>
              <div>
                <span className="font-display font-black text-white text-xl">PC LAP</span>
                <span className="font-display font-black text-blue-400 text-xl">TECH</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Delhi NCR's most trusted laptop repair experts. Genuine parts, transparent pricing, certified technicians.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 font-display text-base">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: '/',            label: 'Home' },
                { href: '/services',    label: 'Our Services' },
                { href: '/parts',       label: 'Parts & Pricing' },
                { href: '/book-repair', label: 'Book Repair' },
                { href: '/about',       label: 'About Us' },
                { href: '/contact',     label: 'Contact' },
              ].map(l => (
                <li key={l.href}>
                  <Link to={l.href}
                    className="text-slate-400 hover:text-blue-400 text-sm flex items-center gap-1.5 transition-colors group">
                    <ChevronRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 font-display text-base">Services</h4>
            <ul className="space-y-3">
              {['Screen Replacement', 'Battery Replacement', 'Motherboard Repair', 'Water Damage', 'RAM & SSD Upgrade', 'Windows Installation'].map(s => (
                <li key={s}>
                  <Link to="/services" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5 font-display text-base">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Helpline (24×7)</p>
                  <a href="tel:6306372863" className="text-white font-bold hover:text-blue-400 transition-colors">6306372863</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Email</p>
                  <a href="mailto:Pclaptech000@gmail.com" className="text-white text-sm hover:text-blue-400 transition-colors break-all">Pclaptech000@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Service Areas</p>
                  <p className="text-white text-sm">Delhi NCR, Noida, Greater Noida, Faridabad</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} PC LAP TECH. All rights reserved.</p>
          <p className="text-slate-600 text-sm">Laptop Repair Experts · Delhi NCR</p>
        </div>
      </div>
    </footer>
  );
}
