import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, Laptop2, FileText, MapPin, Home, Store, CheckCircle2 } from 'lucide-react';
import { useDB } from '../context/DatabaseContext';

const up = (d = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: d } });
const brands = ['HP', 'Dell', 'Lenovo', 'Asus', 'Acer', 'Samsung', 'MSI', 'Apple', 'Toshiba', 'Sony', 'Other'];

export default function BookRepair() {
  const { addBooking } = useDB();
  const [form, setForm] = useState({ name: '', phone: '', email: '', brand: '', model: '', problem: '', address: '', service: 'Home Visit' });
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())                         e.name = 'Name is required';
    if (!/^\d{10}$/.test(form.phone))              e.phone = 'Enter valid 10-digit mobile number';
    if (!/\S+@\S+\.\S+/.test(form.email))          e.email = 'Enter a valid email';
    if (!form.brand)                                e.brand = 'Select laptop brand';
    if (!form.model.trim())                         e.model = 'Enter laptop model';
    if (!form.problem.trim())                       e.problem = 'Describe the problem';
    if (!form.address.trim())                       e.address = 'Enter your address';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setBookingId(addBooking(form));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: '#f8fafc', paddingTop: '5rem' }}>
        <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200 }}
          className="surface-card rounded-3xl p-12 text-center max-w-md w-full">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6" style={{ border: '3px solid #bbf7d0' }}>
            <CheckCircle2 size={40} className="text-green-500" />
          </div>
          <h2 className="font-display font-black text-3xl text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-slate-500 mb-6">A technician will call you within 30 minutes.</p>
          <div className="bg-blue-50 rounded-xl px-6 py-3 mb-6 inline-block" style={{ border: '1.5px solid #bfdbfe' }}>
            <p className="text-xs text-blue-500 mb-0.5">Booking ID</p>
            <p className="text-blue-700 font-black text-2xl">{bookingId}</p>
          </div>
          <div className="text-slate-500 text-sm">
            <p>For urgent queries:</p>
            <a href="tel:6306372863" className="text-blue-600 font-black text-2xl block mt-1 hover:text-blue-700 transition-colors">6306372863</a>
          </div>
        </motion.div>
      </div>
    );
  }

  const F = ({ label, icon: Icon, name, type = 'text', placeholder, children }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
      <div className="relative">
        {Icon && <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />}
        {children || (
          <input type={type} value={form[name]} placeholder={placeholder}
            onChange={e => setForm({ ...form, [name]: e.target.value })}
            className={`input ${Icon ? 'pl-10' : ''} ${errors[name] ? 'error' : ''}`} />
        )}
      </div>
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen" style={{ background: '#f8fafc' }}>
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #0891b2 100%)', padding: '8rem 0 4rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...up()}>
            <h1 className="font-display font-black text-white mb-3" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', letterSpacing: '-0.03em' }}>
              Book Repair Service
            </h1>
            <p className="text-blue-100 text-xl">Our technician will contact you within 30 minutes.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <motion.div {...up(0.1)} className="surface-card rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <F label="Full Name" icon={User} name="name" placeholder="Rahul Sharma" />
              <F label="Phone Number" icon={Phone} name="phone" type="tel" placeholder="10-digit number" />
            </div>
            <F label="Email Address" icon={Mail} name="email" type="email" placeholder="you@email.com" />
            <div className="grid sm:grid-cols-2 gap-5">
              <F label="Laptop Brand" icon={Laptop2} name="brand">
                <select value={form.brand} onChange={e => setForm({ ...form, brand: e.target.value })}
                  className={`input pl-10 ${errors.brand ? 'error' : ''}`} style={{ appearance: 'none' }}>
                  <option value="">Select Brand</option>
                  {brands.map(b => <option key={b}>{b}</option>)}
                </select>
              </F>
              <F label="Laptop Model" name="model" placeholder="e.g. Dell Inspiron 15" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Problem Description</label>
              <textarea value={form.problem} onChange={e => setForm({ ...form, problem: e.target.value })} rows={4}
                placeholder="Describe the issue in detail..."
                className={`input resize-none ${errors.problem ? 'error' : ''}`} />
              {errors.problem && <p className="text-red-500 text-xs mt-1">{errors.problem}</p>}
            </div>
            <F label="Your Address" icon={MapPin} name="address" placeholder="House No, Street, City" />

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type</label>
              <div className="grid grid-cols-2 gap-3">
                {[{ val: 'Home Visit', icon: Home, desc: 'Technician comes to you' }, { val: 'Shop Visit', icon: Store, desc: 'Come to our center' }].map(o => (
                  <button type="button" key={o.val} onClick={() => setForm({ ...form, service: o.val })}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                      form.service === o.val ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300'
                    }`}>
                    <o.icon size={18} />
                    <div>
                      <p className="font-semibold text-sm">{o.val}</p>
                      <p className="text-xs opacity-70">{o.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-blue w-full justify-center py-4 text-base" style={{ borderRadius: '14px', marginTop: '0.5rem' }}>
              Submit Repair Request
            </button>
            <p className="text-slate-400 text-xs text-center">No advance payment. A technician will call to confirm details.</p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
