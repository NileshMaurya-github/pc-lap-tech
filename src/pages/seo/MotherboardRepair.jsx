import React from 'react';
import SEOHead from '../../components/SEOHead';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'How much does laptop motherboard repair cost in Delhi?', a: 'Laptop motherboard repair at PC LAP TECH starts from ₹2,999 in Delhi NCR. Complex chip-level repairs may cost more. We diagnose first and give a transparent quote.' },
  { q: 'Is it worth repairing a laptop motherboard?', a: 'Yes, in most cases. Motherboard replacement at a local shop costs 60-80% less than buying a new laptop. We assess and advise you honestly on whether repair is worthwhile.' },
  { q: 'What causes laptop motherboard failure?', a: 'Common causes include water damage, power surge, overheating, and physical damage from drops. We offer specialized water damage repair and chip-level motherboard repair.' },
  { q: 'Do you do chip-level motherboard repair?', a: 'Yes! Our technicians are trained in chip-level and BGA soldering repairs. We can fix GPU chips, charging ICs, power management ICs, and more.' },
];

export default function MotherboardRepair() {
  return (
    <>
      <SEOHead
        title="Laptop Motherboard Repair Delhi NCR | Chip Level Repair | PC LAP TECH"
        description="Expert laptop motherboard repair in Delhi NCR. Chip-level repair, water damage, GPU failure, power issues. Starting ₹2999. Same day diagnosis. Call 6306372863."
        keywords="laptop motherboard repair Delhi, laptop motherboard repair Delhi NCR, chip level repair Delhi, water damage laptop repair, GPU repair laptop Delhi"
        canonical="/laptop-motherboard-repair-delhi"
        faqSchema={faqs}
      />
      <SEOPageLayout
        heroTag="Laptop Motherboard Repair in Delhi NCR"
        subtitle="Expert chip-level motherboard repairs for all brands. Water damage, GPU failure, power issues fixed. Starting ₹2,999."
        faqs={faqs}
        breadcrumb={[{ label: 'Laptop Motherboard Repair Delhi', href: '/laptop-motherboard-repair-delhi' }]}
      >
        <h2 className="font-display font-black text-3xl text-gray-900 mb-4">Professional Laptop Motherboard Repair – Delhi NCR</h2>
        <p className="text-slate-600 leading-relaxed mb-6"><strong>PC LAP TECH</strong> specializes in advanced laptop motherboard repair including chip-level and BGA-level repairs in Delhi, Noida, Greater Noida, and Faridabad. Our trained technicians have years of experience diagnosing and fixing complex motherboard failures that other shops simply replace.</p>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Motherboard Problems We Repair</h3>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
          <li>Laptop not turning on — dead motherboard diagnosis</li>
          <li>Water damaged laptop — corrosion cleaning and component replacement</li>
          <li>GPU failure — no display, artifacting graphics, overheating GPU</li>
          <li>Charging IC failure — laptop not charging even with genuine charger</li>
          <li>Power management IC failure — sudden shutdowns</li>
          <li>RAM slot failure — RAM not detected</li>
          <li>USB, HDMI, and port failures due to motherboard damage</li>
          <li>Laptop restarting or freezing randomly</li>
        </ul>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Motherboard Repair Price Delhi NCR</h3>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          {[
            { label: 'Basic Motherboard Repair', price: '₹2,999+' },
            { label: 'Chip-Level Repair', price: '₹3,499+' },
            { label: 'Water Damage Treatment', price: '₹1,999+' },
            { label: 'GPU Reballing/Reflow', price: '₹3,999+' },
            { label: 'Charging IC Replacement', price: '₹2,499+' },
            { label: 'Full Motherboard Replacement', price: '₹5,999+' },
          ].map((i, x) => (
            <div key={x} className="surface-subtle rounded-xl p-4 flex justify-between items-center">
              <span className="font-semibold text-gray-800">{i.label}</span>
              <span className="text-green-600 font-black">Starting {i.price}</span>
            </div>
          ))}
        </div>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Why PC LAP TECH for Motherboard Repair?</h3>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
          <li>Specialized chip-level and BGA repair equipment</li>
          <li>Free motherboard diagnosis — know the problem before paying</li>
          <li>Genuine replacement ICs and components</li>
          <li>3-month warranty on motherboard repairs</li>
          <li>Most motherboard repairs completed in 24–48 hours</li>
          <li>Save 60–80% vs buying a new laptop</li>
        </ul>

        <div className="mt-6 p-5 rounded-2xl" style={{ background: '#eff6ff', border: '1.5px solid #bfdbfe' }}>
          <p className="font-bold text-blue-900 mb-1">🔧 Motherboard Issues? Get Free Diagnosis!</p>
          <p className="text-blue-700 text-sm">Call <strong>6306372863</strong> or <Link to="/book-repair" className="underline font-semibold">book online</Link>. We diagnose for free before quoting a price.</p>
        </div>

        <div className="mt-8">
          <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Screen Replacement', href: '/laptop-screen-replacement-delhi' },
              { label: 'Battery Replacement', href: '/laptop-battery-replacement-delhi' },
              { label: 'SSD Upgrade', href: '/laptop-ssd-upgrade-delhi' },
              { label: 'RAM Upgrade', href: '/laptop-ram-upgrade-delhi' },
            ].map((s, i) => <Link key={i} to={s.href} className="badge badge-blue hover:bg-blue-100 transition-colors">{s.label} →</Link>)}
          </div>
        </div>
      </SEOPageLayout>
    </>
  );
}
