import React from 'react';
import SEOHead from '../../components/SEOHead';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'How much does laptop battery replacement cost in Delhi?', a: 'Laptop battery replacement at PC LAP TECH starts from ₹999 in Delhi NCR. Price depends on your laptop brand and battery model. We provide a free quote before starting.' },
  { q: 'How long does a new laptop battery last?', a: 'A new quality replacement battery typically lasts 2–4 years depending on usage and charging habits. We recommend original OEM batteries for best longevity.' },
  { q: 'Do you offer battery replacement at home?', a: 'Yes! We offer doorstep laptop battery replacement across Delhi, Noida, Greater Noida, Faridabad, and all Delhi NCR areas. Book online or call 6306372863.' },
  { q: 'How long does battery replacement take?', a: 'Battery replacement is typically completed in 30–60 minutes. It\'s one of our fastest services and can be done at your location.' },
  { q: 'What warranty is given on battery replacement?', a: 'We provide a 3-month warranty on all battery replacements. If the battery fails within this period, we replace it at no extra cost.' },
];

export default function BatteryReplacement() {
  return (
    <>
      <SEOHead
        title="Laptop Battery Replacement Delhi NCR | Starting ₹999 | PC LAP TECH"
        description="Get laptop battery replaced in Delhi NCR at the best price. Starting from ₹999. HP, Dell, Lenovo, Asus, Apple MacBook battery replacement. Doorstep service available. Call 6306372863."
        keywords="laptop battery replacement Delhi, laptop battery repair Delhi NCR, laptop battery replacement Noida, MacBook battery replacement Delhi, HP laptop battery replacement"
        canonical="/laptop-battery-replacement-delhi"
        faqSchema={faqs}
      />
      <SEOPageLayout
        heroTag="Laptop Battery Replacement in Delhi NCR"
        subtitle="Battery draining fast or not charging? Get genuine battery replacement same day across Delhi NCR. Starting ₹999."
        faqs={faqs}
        breadcrumb={[{ label: 'Laptop Battery Replacement Delhi', href: '/laptop-battery-replacement-delhi' }]}
      >
        <h2 className="font-display font-black text-3xl text-gray-900 mb-4">Expert Laptop Battery Replacement in Delhi NCR</h2>
        <p className="text-slate-600 leading-relaxed mb-6">Is your laptop battery dying too fast, not charging, or swelling? At <strong>PC LAP TECH</strong>, we provide affordable and reliable laptop battery replacement services across Delhi, Noida, Greater Noida, and Faridabad. We stock genuine batteries for all major laptop brands and offer same-day doorstep service.</p>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Signs Your Laptop Battery Needs Replacement</h3>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
          <li>Battery draining in 30 minutes or less even when fully charged</li>
          <li>Laptop dies suddenly without warning</li>
          <li>Battery showing 0% even when plugged in for hours</li>
          <li>Laptop only works when connected to charger</li>
          <li>Battery bulging or swollen (replace immediately — fire hazard!)</li>
          <li>Battery health below 40% in Windows Battery Report</li>
          <li>Laptop getting extremely hot during charging</li>
        </ul>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Laptop Battery Replacement Price in Delhi</h3>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          {[
            { brand: 'HP Battery Replacement', price: '₹999+' },
            { brand: 'Dell Battery Replacement', price: '₹1,099+' },
            { brand: 'Lenovo Battery Replacement', price: '₹999+' },
            { brand: 'Asus Battery Replacement', price: '₹1,199+' },
            { brand: 'Acer Battery Replacement', price: '₹999+' },
            { brand: 'MacBook Battery Replacement', price: '₹3,999+' },
          ].map((i, x) => (
            <div key={x} className="surface-subtle rounded-xl p-4 flex justify-between items-center">
              <span className="font-semibold text-gray-800">{i.brand}</span>
              <span className="text-green-600 font-black">Starting {i.price}</span>
            </div>
          ))}
        </div>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Why Choose PC LAP TECH for Battery Replacement?</h3>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
          <li>OEM-quality and genuine batteries for all models</li>
          <li>30–60 minute replacement — fastest in Delhi NCR</li>
          <li>3-month warranty on all battery replacements</li>
          <li>Doorstep service across complete Delhi NCR</li>
          <li>Transparent pricing — no hidden charges</li>
          <li>Post-service battery health report provided</li>
        </ul>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Doorstep Battery Replacement Service</h3>
        <p className="text-slate-600 leading-relaxed mb-6">Our technicians come equipped with the correct battery for your model. We offer doorstep laptop battery replacement in <strong>Delhi, Noida, Greater Noida, Faridabad, Gurugram, and Ghaziabad</strong>. No need to visit a repair shop — we come to you at your convenience.</p>

        <div className="mt-6 p-5 rounded-2xl" style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0' }}>
          <p className="font-bold text-green-900 mb-1">🔋 Get Battery Replaced Today!</p>
          <p className="text-green-700 text-sm">Call <strong>6306372863</strong> or <Link to="/book-repair" className="underline font-semibold">book online</Link>. Same day doorstep service across Delhi NCR.</p>
        </div>

        <div className="mt-8">
          <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Screen Replacement', href: '/laptop-screen-replacement-delhi' },
              { label: 'Keyboard Repair', href: '/laptop-keyboard-repair-delhi' },
              { label: 'SSD Upgrade', href: '/laptop-ssd-upgrade-delhi' },
              { label: 'RAM Upgrade', href: '/laptop-ram-upgrade-delhi' },
            ].map((s, i) => (
              <Link key={i} to={s.href} className="badge badge-blue hover:bg-blue-100 transition-colors">{s.label} →</Link>
            ))}
          </div>
        </div>
      </SEOPageLayout>
    </>
  );
}
