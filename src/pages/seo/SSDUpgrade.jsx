import React from 'react';
import SEOHead from '../../components/SEOHead';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'How much does laptop SSD upgrade cost in Delhi?', a: 'Laptop SSD upgrade at PC LAP TECH starts from ₹1,499 for the service charge. The SSD itself is priced separately: 256GB ₹1,800, 512GB ₹2,800, 1TB ₹4,500. We handle data migration too.' },
  { q: 'Will my data be safe during SSD upgrade?', a: 'Yes! We clone your existing HDD/SSD to the new SSD, so all your files, OS, and software are preserved. No reinstallation required.' },
  { q: 'How much faster will my laptop be after SSD upgrade?', a: 'An SSD upgrade can make your laptop 5–10x faster. Boot time reduces from 60+ seconds to under 10 seconds. Apps open instantly.' },
  { q: 'Can any laptop be upgraded with an SSD?', a: 'Most laptops can be upgraded. We first check your laptop\'s storage slot compatibility (SATA/NVMe/M.2) before recommending the right SSD.' },
];

export default function SSDUpgrade() {
  return (
    <>
      <SEOHead
        title="Laptop SSD Upgrade Delhi NCR | 5x Faster Laptop | PC LAP TECH"
        description="Upgrade your laptop with an SSD in Delhi NCR. Make your laptop 5x faster. 256GB, 512GB, 1TB SSD installation with data migration. Starting ₹1,499. Call 6306372863."
        keywords="laptop SSD upgrade Delhi, SSD upgrade Noida, laptop SSD installation Delhi NCR, laptop speed upgrade Delhi, HDD to SSD upgrade, NVMe SSD upgrade laptop"
        canonical="/laptop-ssd-upgrade-delhi"
        faqSchema={faqs}
      />
      <SEOPageLayout
        heroTag="Laptop SSD Upgrade in Delhi NCR"
        subtitle="Make your slow laptop 5–10x faster with an SSD upgrade. 256GB, 512GB, 1TB options with data migration. Starting ₹1,499."
        faqs={faqs}
        breadcrumb={[{ label: 'Laptop SSD Upgrade Delhi', href: '/laptop-ssd-upgrade-delhi' }]}
      >
        <h2 className="font-display font-black text-3xl text-gray-900 mb-4">Speed Up Your Laptop with SSD Upgrade – Delhi NCR</h2>
        <p className="text-slate-600 leading-relaxed mb-6">If your laptop takes forever to boot or open applications, an <strong>SSD (Solid State Drive) upgrade</strong> is the single best investment you can make. At <strong>PC LAP TECH</strong> in Delhi NCR, we install high-performance SSDs in your laptop with complete data migration — no data loss, no reinstallation required.</p>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">SSD Upgrade Pricing in Delhi NCR</h3>
        <div className="grid sm:grid-cols-2 gap-4 my-6">
          {[
            { label: '128GB SSD (SATA)', price: '₹1,499' },
            { label: '256GB SSD (SATA/NVMe)', price: '₹2,499' },
            { label: '512GB SSD (SATA/NVMe)', price: '₹3,999' },
            { label: '1TB SSD (NVMe)', price: '₹5,999' },
            { label: '2TB SSD (NVMe)', price: '₹8,999' },
            { label: 'Data Migration (HDD→SSD)', price: '₹799' },
          ].map((i, x) => (
            <div key={x} className="surface-subtle rounded-xl p-4 flex justify-between items-center">
              <span className="font-semibold text-gray-800">{i.label}</span>
              <span className="text-green-600 font-black">{i.price}</span>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-sm mb-6">* Includes installation. Data migration priced separately if needed.</p>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Benefits of SSD Upgrade</h3>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
          <li><strong>5–10x faster boot time</strong> — Windows starts in under 10 seconds</li>
          <li><strong>Applications load instantly</strong> — Chrome, Word, Excel open in 1–2 seconds</li>
          <li><strong>Longer battery life</strong> — SSDs consume less power than HDDs</li>
          <li><strong>Silent operation</strong> — No moving parts, completely silent</li>
          <li><strong>More durable</strong> — No risk of HDD clicking or head crashes</li>
          <li><strong>Works great for gaming</strong> — Faster game load times</li>
        </ul>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Our SSD Upgrade Process</h3>
        <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
          <li>We check your laptop's storage slot (M.2 NVMe, M.2 SATA, or 2.5" SATA)</li>
          <li>You choose the SSD size — we recommend based on your usage</li>
          <li>We clone your current drive so all data is preserved</li>
          <li>Install the new SSD and boot test to confirm everything works</li>
          <li>Old HDD is optionally installed in secondary slot or returned to you</li>
        </ol>

        <div className="mt-6 p-5 rounded-2xl" style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0' }}>
          <p className="font-bold text-green-900 mb-1">⚡ Speed Up Your Laptop Today!</p>
          <p className="text-green-700 text-sm">Call <strong>6306372863</strong> or <Link to="/book-repair" className="underline font-semibold">book online</Link>. SSD upgrade done in 1–2 hours.</p>
        </div>

        <div className="mt-8">
          <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[{ label: 'RAM Upgrade', href: '/laptop-ram-upgrade-delhi' }, { label: 'Screen Replacement', href: '/laptop-screen-replacement-delhi' }, { label: 'Battery Replacement', href: '/laptop-battery-replacement-delhi' }].map((s, i) => (
              <Link key={i} to={s.href} className="badge badge-blue hover:bg-blue-100 transition-colors">{s.label} →</Link>
            ))}
          </div>
        </div>
      </SEOPageLayout>
    </>
  );
}
