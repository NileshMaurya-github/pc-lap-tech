import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

const up = (d = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: d } });

export default function Contact() {
  return (
    <div className="min-h-screen bg-transparent">
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #0891b2 100%)', padding: '8rem 0 5rem' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...up()}>
            <h1 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', letterSpacing: '-0.03em' }}>
              Contact Us
            </h1>
            <p className="text-blue-100 text-xl">Available 7 days a week. Call, WhatsApp, or email us.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              { href: 'tel:6306372860', icon: Phone, color: 'blue', label: 'Call / WhatsApp', value: '6306372860', sub: 'Available 24×7' },
              { href: 'https://wa.me/916306372860', icon: MessageCircle, color: 'green', label: 'WhatsApp Chat', value: 'Chat Now', sub: 'Instant response guaranteed' },
              { href: 'mailto:Pclaptech000@gmail.com', icon: Mail, color: 'purple', label: 'Email Support', value: 'Pclaptech000@gmail.com', sub: 'Reply within 2 hours' },
            ].map((c, i) => {
              const bg = { blue: 'bg-blue-50', green: 'bg-green-50', purple: 'bg-purple-50' }[c.color];
              const text = { blue: 'text-blue-600', green: 'text-green-600', purple: 'text-purple-600' }[c.color];
              return (
                <motion.a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  {...up(i * 0.07)} className="surface-card rounded-2xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center flex-shrink-0`}>
                    <c.icon size={22} className={text} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-0.5">{c.label}</p>
                    <p className={`font-bold text-gray-900 break-all ${c.value.length > 15 ? 'text-sm' : 'text-xl'}`}>{c.value}</p>
                    <p className="text-slate-400 text-xs flex items-center gap-1 mt-0.5"><Clock size={10} />{c.sub}</p>
                  </div>
                </motion.a>
              );
            })}

            <motion.div {...up(0.2)} className="surface-card rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <MapPin size={18} className="text-cyan-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Service Areas</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Delhi', 'Noida', 'Greater Noida', 'Faridabad', 'Gurugram', 'Ghaziabad'].map((a, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-slate-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />{a}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div {...up(0.1)} className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden" style={{ border: '2px solid #e2e8f0', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', height: '100%', minHeight: '440px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1701000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 'none', minHeight: '440px' }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="PC LAP TECH Service Area" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
