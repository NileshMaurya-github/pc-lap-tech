import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User, Phone, Mail, Laptop2, FileText, MapPin,
  Home, Store, CheckCircle2, MessageCircle, ArrowRight
} from 'lucide-react';
import { useDB } from '../context/DatabaseContext';

const up = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: d },
});

const brands = ['HP', 'Dell', 'Lenovo', 'Asus', 'Acer', 'Samsung', 'MSI', 'Apple', 'Toshiba', 'Sony', 'Other'];

const WHATSAPP_NUMBER = '916306372860'; // Country code + number

function buildWhatsAppMessage(form, bookingId) {
  const line = '─────────────────────────';
  return (
    `🔧 *NEW LAPTOP REPAIR BOOKING* 🔧\n` +
    `${line}\n\n` +
    `📋 *Booking ID:* ${bookingId}\n\n` +
    `👤 *Customer Details*\n` +
    `• Name       : ${form.name}\n` +
    `• Phone      : ${form.phone}\n` +
    `• Email      : ${form.email}\n` +
    `• Address    : ${form.address}\n\n` +
    `💻 *Device Details*\n` +
    `• Brand      : ${form.brand}\n` +
    `• Model      : ${form.model}\n\n` +
    `🛠️ *Problem Description*\n` +
    `${form.problem}\n\n` +
    `🚗 *Service Type:* ${form.service}\n\n` +
    `${line}\n` +
    `📱 PC LAP TECH — Professional Laptop Repair\n` +
    `⚡ Please confirm the booking and contact the customer soon.`
  );
}

/* ── Form field helper ── */
const F = ({ label, icon: Icon, name, type = 'text', placeholder, value, onChange, error, children }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
    <div className="relative">
      {Icon && <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />}
      {children || (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`input ${Icon ? 'pl-10' : ''} ${error ? 'error' : ''}`}
        />
      )}
    </div>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default function BookRepair() {
  const { addBooking } = useDB();
  const [form, setForm] = useState({
    name: '', phone: '', email: '', brand: '', model: '',
    problem: '', address: '', service: 'Home Visit',
  });
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())                        e.name    = 'Name is required';
    if (!/^\d{10}$/.test(form.phone))             e.phone   = 'Enter valid 10-digit mobile number';
    if (!/\S+@\S+\.\S+/.test(form.email))         e.email   = 'Enter a valid email';
    if (!form.brand)                               e.brand   = 'Select laptop brand';
    if (!form.model.trim())                        e.model   = 'Enter laptop model';
    if (!form.problem.trim())                      e.problem = 'Describe the problem';
    if (!form.address.trim())                      e.address = 'Enter your address';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const id = addBooking(form);
    setBookingId(id);

    // Build and send WhatsApp message
    const message = buildWhatsAppMessage(form, id);
    const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waURL, '_blank');

    setSubmitted(true);
  };

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-transparent" style={{ paddingTop: '5rem' }}>
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="surface-card rounded-3xl p-12 text-center max-w-md w-full"
        >
          {/* Success icon */}
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6"
            style={{ border: '3px solid #bbf7d0' }}>
            <CheckCircle2 size={40} className="text-green-500" />
          </div>

          <h2 className="font-display font-black text-3xl text-gray-900 mb-2">Booking Confirmed!</h2>
          <p className="text-slate-500 mb-6">A technician will call you within 30 minutes.</p>

          {/* Booking ID badge */}
          <div className="bg-blue-50 rounded-xl px-6 py-3 mb-6 inline-block" style={{ border: '1.5px solid #bfdbfe' }}>
            <p className="text-xs text-blue-500 mb-0.5">Booking ID</p>
            <p className="text-blue-700 font-black text-2xl">{bookingId}</p>
          </div>

          {/* WhatsApp sent notice */}
          <div className="mb-6 flex items-center justify-center gap-2 bg-green-50 rounded-xl px-5 py-3"
            style={{ border: '1.5px solid #bbf7d0' }}>
            <MessageCircle size={18} className="text-green-600 flex-shrink-0" />
            <p className="text-green-700 text-sm font-medium">Booking details sent on WhatsApp!</p>
          </div>

          {/* Contact */}
          <div className="text-slate-500 text-sm">
            <p>For urgent queries:</p>
            <a href="tel:6306372860" className="text-blue-600 font-black text-2xl block mt-1 hover:text-blue-700 transition-colors">
              6306372860
            </a>
          </div>

          {/* WhatsApp re-send button */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(form, bookingId))}`}
            target="_blank" rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 font-semibold text-white px-6 py-3 rounded-xl transition-all w-full"
            style={{ background: '#25D366', borderRadius: '12px', boxShadow: '0 4px 16px rgba(37,211,102,0.35)' }}
          >
            <MessageCircle size={18} /> Resend on WhatsApp
          </a>
        </motion.div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-transparent">

      {/* ── Hero ── */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #0891b2 100%)', padding: '8rem 0 4rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...up()}>
            <h1 className="font-display font-black text-white mb-3" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', letterSpacing: '-0.03em' }}>
              Book Repair Service
            </h1>
            <p className="text-blue-100 text-xl">Fill the form below — we'll WhatsApp you the confirmation instantly.</p>
          </motion.div>
        </div>
      </div>

      {/* ── Form card ── */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        <motion.div {...up(0.1)} className="surface-card rounded-3xl p-8">

          {/* WhatsApp notice banner */}
          <div className="flex items-center gap-3 mb-6 px-4 py-3 rounded-xl"
            style={{ background: 'linear-gradient(135deg,#ecfdf5,#d1fae5)', border: '1.5px solid #6ee7b7' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#25D366' }}>
              <MessageCircle size={16} className="text-white" />
            </div>
            <div>
              <p className="text-green-800 font-semibold text-sm">WhatsApp Booking Confirmation</p>
              <p className="text-green-700 text-xs">Your booking details will be sent to our team on WhatsApp instantly.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <F label="Full Name" icon={User} name="name" placeholder="Rahul Sharma"
                 value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} error={errors.name} />
              <F label="Phone Number" icon={Phone} name="phone" type="tel" placeholder="10-digit number"
                 value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} error={errors.phone} />
            </div>

            <F label="Email Address" icon={Mail} name="email" type="email" placeholder="you@email.com"
               value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} error={errors.email} />

            <div className="grid sm:grid-cols-2 gap-5">
              <F label="Laptop Brand" icon={Laptop2} name="brand" error={errors.brand}>
                <select
                  value={form.brand}
                  onChange={e => setForm({ ...form, brand: e.target.value })}
                  className={`input pl-10 ${errors.brand ? 'error' : ''}`}
                  style={{ appearance: 'none' }}
                >
                  <option value="">Select Brand</option>
                  {brands.map(b => <option key={b}>{b}</option>)}
                </select>
              </F>
              <F label="Laptop Model" name="model" placeholder="e.g. Dell Inspiron 15"
                 value={form.model} onChange={e => setForm({ ...form, model: e.target.value })} error={errors.model} />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Problem Description</label>
              <textarea
                value={form.problem}
                onChange={e => setForm({ ...form, problem: e.target.value })}
                rows={4}
                placeholder="Describe the issue in detail..."
                className={`input resize-none ${errors.problem ? 'error' : ''}`}
              />
              {errors.problem && <p className="text-red-500 text-xs mt-1">{errors.problem}</p>}
            </div>

            <F label="Your Address" icon={MapPin} name="address" placeholder="House No, Street, City"
               value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} error={errors.address} />

            {/* Service Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: 'Home Visit', icon: Home, desc: 'Technician comes to you' },
                  { val: 'Shop Visit', icon: Store, desc: 'Come to our center' },
                ].map(o => (
                  <button
                    type="button"
                    key={o.val}
                    onClick={() => setForm({ ...form, service: o.val })}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                      form.service === o.val
                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300'
                    }`}
                  >
                    <o.icon size={18} />
                    <div>
                      <p className="font-semibold text-sm">{o.val}</p>
                      <p className="text-xs opacity-70">{o.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 font-bold text-white py-4 text-base transition-all hover:opacity-90 active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #1db954 100%)',
                borderRadius: '14px',
                marginTop: '0.5rem',
                boxShadow: '0 6px 24px rgba(37,211,102,0.4)',
              }}
            >
              <MessageCircle size={20} />
              Book Now &amp; Send on WhatsApp
              <ArrowRight size={18} />
            </button>

            <p className="text-slate-400 text-xs text-center">
              No advance payment. Your details will be sent to our team via WhatsApp instantly.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
