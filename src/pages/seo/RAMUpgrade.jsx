import React from 'react';
import SEOHead from '../../components/SEOHead';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'How much does laptop RAM upgrade cost in Delhi?', a: 'Laptop RAM upgrade at PC LAP TECH starts from ₹2,499 (8GB DDR4) in Delhi NCR. 16GB upgrade starts from ₹4,499 and 32GB from ₹7,999. We first check compatibility before recommending.' },
  { q: 'Will upgrading RAM make my laptop faster?', a: 'Yes! If your laptop has 4GB RAM and struggles with multitasking, upgrading to 8GB or 16GB RAM will significantly improve performance for browsing, apps, and gaming.' },
  { q: 'What is the maximum RAM for my laptop?', a: 'Maximum RAM depends on your laptop model and motherboard. We check your laptop\'s specifications before recommending the best upgrade option.' },
  { q: 'Can RAM be upgraded in MacBook?', a: 'For most Intel MacBooks, RAM can be upgraded. For Apple Silicon (M1/M2/M3) MacBooks, RAM is soldered and cannot be upgraded.' },
];

export default function RAMUpgrade() {
  return (
    <>
      <SEOHead
        title="Laptop RAM Upgrade Delhi NCR | 8GB, 16GB, 32GB | PC LAP TECH"
        description="Laptop RAM upgrade in Delhi NCR. 8GB, 16GB, 32GB DDR4/DDR5 RAM installation. Fix slow laptop performance. Starting ₹2,499. Doorstep service. Call 6306372863."
        keywords="laptop RAM upgrade Delhi, RAM upgrade Noida, 8GB RAM upgrade laptop, 16GB RAM upgrade Delhi NCR, laptop slow performance upgrade, DDR4 RAM upgrade"
        canonical="/laptop-ram-upgrade-delhi"
        faqSchema={faqs}
      />
      <SEOPageLayout
        heroTag="Laptop RAM Upgrade in Delhi NCR"
        subtitle="Fix slow laptop performance with a RAM upgrade. 8GB, 16GB, 32GB options for all brands. Starting ₹2,499."
        faqs={faqs}
        breadcrumb={[{ label: 'Laptop RAM Upgrade Delhi', href: '/laptop-ram-upgrade-delhi' }]}
      >
        <h2 className="font-display font-black text-3xl text-gray-900 mb-4">Laptop RAM Upgrade Service – Delhi NCR</h2>
        <p className="text-slate-600 leading-relaxed mb-6">Slow laptop making you unproductive? Upgrading your laptop RAM is one of the most effective ways to boost performance for multitasking, gaming, and creative work. <strong>PC LAP TECH</strong> provides professional RAM upgrade services in Delhi, Noida, Greater Noida, and Faridabad with same-day service.</p>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">RAM Upgrade Pricing – Delhi NCR</h3>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          {[
            { label: '4GB DDR4 RAM', price: '₹1,499' },
            { label: '8GB DDR4 RAM', price: '₹2,499' },
            { label: '16GB DDR4 RAM', price: '₹4,499' },
            { label: '32GB DDR4 RAM', price: '₹7,999' },
            { label: '8GB DDR5 RAM', price: '₹3,499' },
            { label: '16GB DDR5 RAM', price: '₹5,999' },
          ].map((i, x) => (
            <div key={x} className="surface-subtle rounded-xl p-4 flex justify-between items-center">
              <span className="font-semibold text-gray-800">{i.label}</span>
              <span className="text-green-600 font-black">{i.price}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-sm mb-6">* Prices include installation. Final price quoted after compatibility check.</p>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Signs You Need More RAM</h3>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
          <li>Laptop becomes very slow when multiple tabs are open</li>
          <li>Programs crash or freeze frequently</li>
          <li>100% RAM usage shown in Task Manager</li>
          <li>Gaming performance drops or stutters</li>
          <li>Video editing or rendering takes extremely long</li>
          <li>Laptop fans spin loudly under light load</li>
        </ul>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">RAM Upgrade for All Laptops</h3>
        <p className="text-slate-600 leading-relaxed mb-6">We upgrade RAM for HP, Dell, Lenovo, Asus, Acer, Samsung, MSI, and Intel-based MacBooks. We carry DDR3, DDR4, and DDR5 RAM modules in 4GB, 8GB, 16GB, and 32GB capacities.</p>

        <div className="mt-6 p-5 rounded-2xl" style={{ background: '#eff6ff', border: '1.5px solid #bfdbfe' }}>
          <p className="font-bold text-blue-900 mb-1">🚀 Slow Laptop? Upgrade Your RAM!</p>
          <p className="text-blue-700 text-sm">Call <strong>6306372863</strong> or <Link to="/book-repair" className="underline font-semibold">book online</Link>. RAM upgrade done in under 1 hour.</p>
        </div>

        <div className="mt-8">
          <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'SSD Upgrade', href: '/laptop-ssd-upgrade-delhi' }, { label: 'Screen Replacement', href: '/laptop-screen-replacement-delhi' }, { label: 'Battery Replacement', href: '/laptop-battery-replacement-delhi' }].map((s, i) => (
              <Link key={i} to={s.href} className="badge badge-blue hover:bg-blue-100 transition-colors">{s.label} →</Link>
            ))}
          </div>
        </div>
      </SEOPageLayout>
    </>
  );
}
