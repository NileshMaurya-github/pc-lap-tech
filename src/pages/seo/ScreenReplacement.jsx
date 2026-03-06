import React from 'react';
import SEOHead from '../../components/SEOHead';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'How much does laptop screen replacement cost in Delhi?', a: 'Laptop screen replacement at PC LAP TECH starts from ₹1,999 depending on your laptop brand, screen size, and display type (HD, FHD, 4K). We offer free diagnosis before any fix.' },
  { q: 'How long does screen replacement take?', a: 'In most cases, laptop screen replacement is done in 2–4 hours at our service center. We also offer doorstep service across Delhi NCR for your convenience.' },
  { q: 'Do you replace screens for all laptop brands?', a: 'Yes! We replace screens for HP, Dell, Lenovo, Asus, Acer, Samsung, MSI, Apple MacBook and all other brands.' },
  { q: 'Will my laptop warranty be affected?', a: 'If your laptop is under manufacturer warranty, accidental screen damage is usually not covered. Our repair carries its own 3-month warranty.' },
  { q: 'Do you use original laptop screens?', a: 'We use OEM-quality and original LCD/IPS displays. All screens are tested before and after installation.' },
];

export default function ScreenReplacement() {
  return (
    <>
      <SEOHead
        title="Laptop Screen Replacement Delhi NCR | Starting ₹1999 | PC LAP TECH"
        description="Get your laptop screen replaced in Delhi NCR starting at ₹1999. HP, Dell, Lenovo, Asus, Acer, MacBook screen replacement with same day service. Call PC LAP TECH: 6306372863."
        keywords="laptop screen replacement Delhi, laptop screen repair Delhi NCR, laptop display replacement Noida, broken laptop screen repair, laptop LCD replacement"
        canonical="/laptop-screen-replacement-delhi"
        faqSchema={faqs}
        serviceSchema={{
          '@type': 'Service',
          name: 'Laptop Screen Replacement Delhi',
          description: 'Professional laptop screen and display replacement service in Delhi NCR. All brands supported.',
          areaServed: 'Delhi NCR',
          offers: { '@type': 'Offer', priceCurrency: 'INR', price: '1999', description: 'Starting price for laptop screen replacement' },
        }}
      />
      <SEOPageLayout
        heroTag="Laptop Screen Replacement in Delhi NCR"
        subtitle="Cracked or broken screen? Get a crystal-clear display replacement same day. All brands. Starting ₹1,999."
        faqs={faqs}
        breadcrumb={[{ label: 'Laptop Screen Replacement Delhi', href: '/laptop-screen-replacement-delhi' }]}
      >
        <h2 className="font-display font-black text-3xl text-gray-900 mb-4">Professional Laptop Screen Replacement in Delhi NCR</h2>
        <p className="text-slate-600 leading-relaxed mb-6">A cracked, broken, or flickering laptop screen makes it nearly impossible to work or study. At <strong>PC LAP TECH</strong>, we provide the fastest and most affordable laptop screen replacement services in Delhi, Noida, Greater Noida, Faridabad, and across Delhi NCR. Our certified technicians carry original OEM-quality LCD and IPS screens in stock for all major brands.</p>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Laptop Screen Replacement – All Brands</h3>
        <p className="text-slate-600 leading-relaxed mb-4">We repair and replace screens for every major laptop brand including HP, Dell, Lenovo, Asus, Acer, Samsung, MSI, Apple MacBook, Toshiba, Sony, and more. Whether it's a 14-inch HD display or a 4K touchscreen, we have the right replacement.</p>

        <div className="grid sm:grid-cols-2 gap-4 my-6">
          {[
            { brand: 'HP Screen Replacement', price: '₹1,999+' },
            { brand: 'Dell Screen Replacement', price: '₹2,199+' },
            { brand: 'Lenovo Screen Replacement', price: '₹1,999+' },
            { brand: 'Asus Screen Replacement', price: '₹2,099+' },
            { brand: 'Acer Screen Replacement', price: '₹1,999+' },
            { brand: 'MacBook Screen Replacement', price: '₹5,999+' },
          ].map((i, x) => (
            <div key={x} className="surface-subtle rounded-xl p-4 flex justify-between items-center">
              <span className="font-semibold text-gray-800">{i.brand}</span>
              <span className="text-green-600 font-black">Starting {i.price}</span>
            </div>
          ))}
        </div>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Signs You Need Screen Replacement</h3>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
          <li>Cracked or shattered screen with visible lines or cracks</li>
          <li>Black spots, dead pixels, or color distortion</li>
          <li>Screen flickering or displaying only half the image</li>
          <li>Backlight not working — screen appears very dark</li>
          <li>No display even though laptop is running (touchpad and keyboard still work)</li>
          <li>Touch screen not responding after a drop</li>
        </ul>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Our Laptop Screen Replacement Process</h3>
        <p className="text-slate-600 leading-relaxed mb-4">Our process is simple, transparent, and fast:</p>
        <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
          <li><strong>Free Diagnosis:</strong> We first assess the damage and confirm whether the screen, hinges, or graphics card is the root cause.</li>
          <li><strong>Price Quote:</strong> You receive a clear, upfront price quote — no hidden fees or surprise charges.</li>
          <li><strong>Screen Replacement:</strong> Our certified technician carefully removes the broken screen and installs the replacement screen using proper tools.</li>
          <li><strong>Quality Check:</strong> After installation, we run full display test — brightness, color calibration, dead pixel check, and touch response (for touch models).</li>
          <li><strong>Delivery:</strong> Your laptop is returned to you with a 3-month warranty on the replacement screen.</li>
        </ol>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Doorstep Laptop Screen Replacement Delhi NCR</h3>
        <p className="text-slate-600 leading-relaxed mb-6">Can't come to our service center? No problem! We offer <strong>free doorstep pickup</strong> for screen replacement service across Delhi, Noida, Greater Noida, Faridabad, Gurugram, and Ghaziabad. Book online and a technician will visit your home or office.</p>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Why Choose PC LAP TECH for Screen Replacement?</h3>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
          <li>10,000+ screens replaced successfully across Delhi NCR</li>
          <li>OEM-quality and original display panels only</li>
          <li>Same-day service in 2–4 hours for most models</li>
          <li>3-month warranty on all screen replacements</li>
          <li>Certified technicians trained for all laptop brands</li>
          <li>Transparent pricing — you approve before we start</li>
          <li>Free doorstep pickup and delivery</li>
        </ul>

        <div className="mt-6 p-5 rounded-2xl" style={{ background: '#eff6ff', border: '1.5px solid #bfdbfe' }}>
          <p className="font-bold text-blue-900 mb-1">📞 Need Laptop Screen Replacement in Delhi NCR?</p>
          <p className="text-blue-700 text-sm">Call or WhatsApp us at <strong>6306372863</strong> or <Link to="/book-repair" className="underline font-semibold">book online</Link> for same-day screen replacement. Service available in Delhi, Noida, Greater Noida, Faridabad.</p>
        </div>

        <div className="mt-8">
          <h3 className="font-display font-bold text-xl text-gray-900 mb-3">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Battery Replacement', href: '/laptop-battery-replacement-delhi' },
              { label: 'Keyboard Repair', href: '/laptop-keyboard-repair-delhi' },
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
