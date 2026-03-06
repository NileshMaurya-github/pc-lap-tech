import React from 'react';
import SEOHead from '../../components/SEOHead';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'How much does laptop keyboard repair cost in Delhi?', a: 'Laptop keyboard repair at PC LAP TECH starts from ₹799 in Delhi NCR. Individual key replacement costs less; full keyboard replacement depends on the model.' },
  { q: 'Can individual keys be replaced without replacing the full keyboard?', a: 'Yes! If only a few keys are missing or broken, we can replace individual keys. Full keyboard replacement is recommended only when multiple keys fail.' },
  { q: 'How long does keyboard repair take?', a: 'Keyboard repair or replacement is typically completed in 1–3 hours, making it a same-day service in most cases.' },
  { q: 'Do you repair backlit and RGB keyboards?', a: 'Yes! We repair and replace backlit, RGB, and mechanical keyboards on gaming and premium laptops including MSI, Asus ROG, Dell XPS, and HP Omen.' },
];

export default function KeyboardRepair() {
  return (
    <>
      <SEOHead
        title="Laptop Keyboard Repair Delhi NCR | Key Replacement ₹799+ | PC LAP TECH"
        description="Laptop keyboard repair and key replacement in Delhi NCR starting ₹799. Broken, stuck, or not working keys repaired same day. All brands. Call PC LAP TECH: 6306372863."
        keywords="laptop keyboard repair Delhi, laptop key replacement Delhi NCR, keyboard not working laptop repair, laptop keyboard replacement Noida, keyboard repair Faridabad"
        canonical="/laptop-keyboard-repair-delhi"
        faqSchema={faqs}
      />
      <SEOPageLayout
        heroTag="Laptop Keyboard Repair in Delhi NCR"
        subtitle="Broken, stuck, or non-responsive keys? Same-day keyboard repair and replacement for all laptop brands. Starting ₹799."
        faqs={faqs}
        breadcrumb={[{ label: 'Laptop Keyboard Repair Delhi', href: '/laptop-keyboard-repair-delhi' }]}
      >
        <h2 className="font-display font-black text-3xl text-gray-900 mb-4">Laptop Keyboard Repair & Replacement – Delhi NCR</h2>
        <p className="text-slate-600 leading-relaxed mb-6">Whether your laptop keyboard has sticky keys, missing keycaps, or a completely non-functional keyboard, <strong>PC LAP TECH</strong> provides expert keyboard repair and replacement in Delhi, Noida, Greater Noida, and Faridabad. We fix all brands including HP, Dell, Lenovo, Asus, Acer, Apple, and gaming laptops with backlit or RGB keyboards.</p>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Common Keyboard Problems We Fix</h3>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
          <li>Keys not registering when typed (ghost typing or no response)</li>
          <li>Broken, missing, or stuck keycaps</li>
          <li>Keyboard typing wrong characters</li>
          <li>Water damaged keyboard — keys corroding or sticking</li>
          <li>Keyboard backlight not working on premium/gaming laptops</li>
          <li>Spacebar or Enter key not working properly</li>
          <li>Multiple keys failing after a drop</li>
        </ul>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Keyboard Repair Price in Delhi</h3>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          {[
            { label: 'Individual Key Replacement', price: '₹799+' },
            { label: 'Full Keyboard Replacement', price: '₹1,299+' },
            { label: 'Backlit Keyboard Replacement', price: '₹1,999+' },
            { label: 'RGB Gaming Keyboard', price: '₹2,499+' },
            { label: 'MacBook Keyboard Replacement', price: '₹4,999+' },
            { label: 'Water Damage Keyboard Clean', price: '₹999+' },
          ].map((i, x) => (
            <div key={x} className="surface-subtle rounded-xl p-4 flex justify-between items-center">
              <span className="font-semibold text-gray-800">{i.label}</span>
              <span className="text-green-600 font-black">Starting {i.price}</span>
            </div>
          ))}
        </div>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Doorstep Keyboard Repair Delhi NCR</h3>
        <p className="text-slate-600 leading-relaxed mb-4">We offer doorstep keyboard repair service across Delhi NCR. Our technician will come to your home or office with the right keyboard for your laptop model. No need to leave your laptop for days at a service center.</p>

        <div className="mt-6 p-5 rounded-2xl" style={{ background: '#eff6ff', border: '1.5px solid #bfdbfe' }}>
          <p className="font-bold text-blue-900 mb-1">⌨️ Keyboard Not Working?</p>
          <p className="text-blue-700 text-sm">Call <strong>6306372863</strong> or <Link to="/book-repair" className="underline font-semibold">book online</Link>. Same day keyboard repair across Delhi NCR.</p>
        </div>

        <div className="mt-8">
          <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Screen Replacement', href: '/laptop-screen-replacement-delhi' },
              { label: 'Battery Replacement', href: '/laptop-battery-replacement-delhi' },
              { label: 'Motherboard Repair', href: '/laptop-motherboard-repair-delhi' },
              { label: 'SSD Upgrade', href: '/laptop-ssd-upgrade-delhi' },
            ].map((s, i) => (
              <Link key={i} to={s.href} className="badge badge-blue hover:bg-blue-100 transition-colors">{s.label} →</Link>
            ))}
          </div>
        </div>
      </SEOPageLayout>
    </>
  );
}
