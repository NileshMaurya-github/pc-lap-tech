import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, ArrowRight, Star, MessageCircle } from 'lucide-react';

const up = (d = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: d } });

const DEFAULT_FAQS = [
  { q: 'How much does laptop screen replacement cost in Delhi?', a: 'Laptop screen replacement at PC LAP TECH starts from ₹1,999 in Delhi NCR. The final price depends on your laptop brand, model, and screen type (HD, FHD, 4K, touch). We offer free diagnosis before quoting a price.' },
  { q: 'Do you repair all laptop brands?', a: 'Yes! We repair all laptop brands including HP, Dell, Lenovo, Asus, Acer, Samsung, MSI, Apple MacBook, Toshiba, Sony, and more. Our certified technicians are trained for all major brands.' },
  { q: 'How long does laptop repair take?', a: 'Most common repairs like screen replacement, battery replacement, and keyboard repair are completed the same day (2–4 hours). Complex repairs like motherboard or water damage may take 1–2 days.' },
  { q: 'Do you offer home service in Delhi NCR?', a: 'Yes! We offer free doorstep pickup and delivery service across Delhi, Noida, Greater Noida, Faridabad, Gurugram, and Ghaziabad. Book online or call 6306372860.' },
  { q: 'What warranty do you provide on repairs?', a: 'We provide a 3-month warranty on all spare parts and labor. If any issue recurs within the warranty period, we fix it for free.' },
  { q: 'Do you use genuine parts for repairs?', a: 'Yes. We use only OEM-quality or original certified spare parts. We never use low-quality third-party components that reduce your laptop performance or lifespan.' },
];

const reviews = [
  { name: 'Rahul Sharma',  area: 'Noida',         rating: 5, text: 'Screen replaced in 2 hours. Fair price and professional technician. Highly recommend PC LAP TECH!' },
  { name: 'Priya Gupta',   area: 'Faridabad',     rating: 5, text: 'Doorstep service for MacBook battery. Saved so much time. Excellent service!' },
  { name: 'Amit Singh',    area: 'Greater Noida', rating: 5, text: 'Laptop repaired at my home. Transparent pricing, no hidden charges. 5 stars!' },
];

/**
 * SEO Service/Location page layout.
 * Props:
 *   heroTag      – H1 text
 *   subtitle     – subtitle below H1
 *   children     – main content area (H2/H3/paragraphs)
 *   faqs         – array of {q, a} (falls back to defaults)
 *   breadcrumb   – array of {label, href}
 */
export default function SEOPageLayout({ heroTag, subtitle, children, faqs = DEFAULT_FAQS, breadcrumb = [] }) {
  return (
    <div className="min-h-screen" style={{ background: '#f8fafc' }}>

      {/* Breadcrumb */}
      {breadcrumb.length > 0 && (
        <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }} className="pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
              {breadcrumb.map((b, i) => (
                <React.Fragment key={i}>
                  <span>/</span>
                  {i === breadcrumb.length - 1
                    ? <span className="text-slate-700 font-medium">{b.label}</span>
                    : <Link to={b.href} className="hover:text-blue-600 transition-colors">{b.label}</Link>}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #0891b2 100%)',
        padding: breadcrumb.length ? '3rem 0 4rem' : '8rem 0 4rem'
      }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...up()}>
            <h1 className="font-display font-black text-white mb-4"
              style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.03em' }}>
              {heroTag}
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-8">{subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/book-repair" className="btn-white text-base px-6 py-3" style={{ borderRadius: '12px' }}>
                Book Repair Now <ArrowRight size={16} />
              </Link>
              <a href="tel:6306372860"
                className="flex items-center gap-2 font-semibold text-white px-6 py-3 rounded-xl transition-all hover:bg-white/10"
                style={{ border: '2px solid rgba(255,255,255,0.4)', borderRadius: '12px' }}>
                <Phone size={16} /> 6306372860
              </a>
            </div>
            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {['Free Diagnosis', 'Same Day Repair', '3-Month Warranty', 'Doorstep Service'].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5 text-blue-100 text-sm">
                  <CheckCircle2 size={14} className="text-green-300" /> {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <motion.article {...up()} className="surface-card rounded-3xl p-8 md:p-12 prose-custom">
          {children}
        </motion.article>

        {/* Reviews */}
        <motion.div {...up(0.1)} className="mt-12">
          <h2 className="font-display font-black text-3xl text-gray-900 mb-6 text-center">Customer Reviews</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="surface-card rounded-2xl p-5">
                <div className="flex gap-0.5 mb-3">
                  {Array(5).fill(0).map((_, j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div style={{ borderTop: '1px solid #f1f5f9' }} className="pt-3">
                  <p className="text-gray-900 font-semibold text-sm">{r.name}</p>
                  <p className="text-slate-400 text-xs">{r.area}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div {...up(0.15)} className="mt-12">
          <h2 className="font-display font-black text-3xl text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...up(0.2)} className="mt-12 rounded-3xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg,#1e3a8a,#1d4ed8,#0891b2)' }}>
          <h3 className="font-display font-black text-3xl text-white mb-3">Ready to Fix Your Laptop?</h3>
          <p className="text-blue-100 mb-7 text-lg">Book online or call us now — same day service available.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-repair" className="btn-white">Book Repair <ArrowRight size={16} /></Link>
            <a href={`https://wa.me/916306372860`} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-all"
              style={{ background: '#25D366', borderRadius: '12px' }}>
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href="tel:6306372860" className="btn-white">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="surface-card rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-blue-50/50 transition-colors">
        <span className="font-semibold text-gray-900 pr-4">{q}</span>
        <span className="text-blue-600 text-xl flex-shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed" style={{ borderTop: '1px solid #f1f5f9' }}>
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}
