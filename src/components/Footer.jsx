import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Laptop2, Phone, Mail, MapPin, ChevronRight, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

function BillAccessButton() {
  const [show, setShow] = React.useState(false);
  const [pwd, setPwd] = React.useState('');
  const [error, setError] = React.useState(false);
  const [shake, setShake] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pwd === 'VV4455') {
      setShow(false);
      setPwd('');
      navigate('/bill');
    } else {
      setError(true);
      setPwd('');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <>
      <button
        onClick={() => { setShow(true); setError(false); setPwd(''); }}
        title="Bill Generator"
        className="flex items-center gap-1.5 transition-colors text-xs opacity-30 hover:opacity-70"
        style={{ color: '#94a3b8' }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
        Bill
      </button>

      {show && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(8px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) { setShow(false); setPwd(''); } }}
        >
          <div
            className="bg-white rounded-2xl p-8 w-80 shadow-2xl"
            style={{ animation: shake ? 'billshake 0.4s ease' : 'none' }}
          >
            <div className="flex flex-col items-center mb-6">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-3">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Bill Generator</h3>
              <p className="text-slate-500 text-sm text-center mt-1">Enter password to access</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="password"
                value={pwd}
                onChange={e => { setPwd(e.target.value); setError(false); }}
                placeholder="Enter password"
                autoFocus
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                  error
                    ? 'border-red-400 bg-red-50 text-red-700 placeholder:text-red-300'
                    : 'border-slate-200 bg-slate-50 focus:border-blue-500 focus:bg-white'
                }`}
              />
              {error && (
                <p className="text-red-500 text-xs font-medium text-center">
                  Incorrect password. Try again.
                </p>
              )}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-colors"
              >
                Open Bill Generator
              </button>
              <button
                type="button"
                onClick={() => { setShow(false); setPwd(''); setError(false); }}
                className="w-full py-2 text-slate-500 hover:text-slate-700 text-sm transition-colors"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes billshake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }
      `}</style>
    </>
  );
}

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
          <BillAccessButton />
        </div>
      </div>
    </footer>
  );
}
