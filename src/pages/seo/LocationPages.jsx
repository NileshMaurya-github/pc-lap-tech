import React from 'react';
import SEOHead from '../../components/SEOHead';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Link } from 'react-router-dom';

const createLocationPage = ({
  city, slug, mapSrc, description, services,
  title, metaDesc, keywords, faqs,
}) => {
  return function LocationPage() {
    return (
      <>
        <SEOHead title={title} description={metaDesc} keywords={keywords} canonical={`/${slug}`} faqSchema={faqs} />
        <SEOPageLayout
          heroTag={`Laptop Repair in ${city}`}
          subtitle={description}
          faqs={faqs}
          breadcrumb={[{ label: `Laptop Repair ${city}`, href: `/${slug}` }]}
        >
          <h2 className="font-display font-black text-3xl text-gray-900 mb-4">PC LAP TECH – Laptop Repair Service in {city}</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Looking for a trusted laptop repair service in <strong>{city}</strong>? <strong>PC LAP TECH</strong> is {city}'s most reliable laptop repair expert. We offer same-day on-site repair, doorstep pickup, and expert technicians for all laptop brands including HP, Dell, Lenovo, Asus, Acer, Apple MacBook, and more.
          </p>

          <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Laptop Repair Services Available in {city}</h3>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {services.map((s, i) => (
              <Link key={i} to={s.href}
                className="surface-subtle rounded-xl p-4 flex justify-between items-center hover:border-blue-300 transition-all group"
                style={{ border: '1.5px solid #e2e8f0' }}>
                <span className="font-semibold text-gray-800">{s.label}</span>
                <span className="text-green-600 font-bold text-sm">{s.price}</span>
              </Link>
            ))}
          </div>

          <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Doorstep Laptop Repair in {city}</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            We provide <strong>free doorstep pickup and delivery</strong> for laptop repairs across {city}. Our certified technician will visit your home or office, diagnose the issue, and repair your laptop on-site or take it to our workshop for complex repairs. Same-day service available for most common repairs.
          </p>

          <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">{city} Service Area Map</h3>
          <div className="rounded-2xl overflow-hidden mb-6" style={{ border: '2px solid #e2e8f0' }}>
            <iframe src={mapSrc} width="100%" height="300" style={{ border: 'none' }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title={`Laptop Repair ${city} Map`} />
          </div>

          <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Why {city} Customers Choose PC LAP TECH</h3>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
            <li>Fastest laptop repair in {city} — same day service available</li>
            <li>Free doorstep pickup and delivery across {city}</li>
            <li>Certified technicians with 5+ years experience</li>
            <li>OEM-quality and genuine spare parts only</li>
            <li>3-month warranty on every repair</li>
            <li>Transparent pricing — no hidden charges ever</li>
            <li>4.9/5 rating from 500+ verified customers</li>
          </ul>

          <div className="mt-6 p-5 rounded-2xl" style={{ background: '#eff6ff', border: '1.5px solid #bfdbfe' }}>
            <p className="font-bold text-blue-900 mb-1">📍 Laptop Repair near you in {city}</p>
            <p className="text-blue-700 text-sm">Call <strong>6306372863</strong> or <Link to="/book-repair" className="underline font-semibold">book online</Link> for same day {city} laptop repair.</p>
          </div>
        </SEOPageLayout>
      </>
    );
  };
};

// ── Delhi ──
const delhiFAQs = [
  { q: 'Where can I get laptop repaired in Delhi?', a: 'PC LAP TECH provides laptop repair services across all areas of Delhi. Call 6306372863 or book online for doorstep service anywhere in Delhi.' },
  { q: 'What is the cost of laptop repair in Delhi?', a: 'Laptop repair in Delhi at PC LAP TECH starts from ₹799 for keyboard repair, ₹999 for battery replacement, ₹1,999 for screen replacement and ₹2,999 for motherboard repair.' },
  { q: 'Do you offer home service in Delhi?', a: 'Yes! We offer free doorstep laptop repair in East Delhi, West Delhi, South Delhi, North Delhi, Central Delhi and all other areas.' },
];

const SERVICES = [
  { label: 'Screen Replacement', price: '₹1,999+', href: '/laptop-screen-replacement-delhi' },
  { label: 'Battery Replacement', price: '₹999+', href: '/laptop-battery-replacement-delhi' },
  { label: 'Keyboard Repair', price: '₹799+', href: '/laptop-keyboard-repair-delhi' },
  { label: 'Motherboard Repair', price: '₹2,999+', href: '/laptop-motherboard-repair-delhi' },
  { label: 'SSD Upgrade', price: '₹1,499+', href: '/laptop-ssd-upgrade-delhi' },
  { label: 'RAM Upgrade', price: '₹2,499+', href: '/laptop-ram-upgrade-delhi' },
];

const DELHI_MAP = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1701000000000!5m2!1sen!2sin';
const NOIDA_MAP = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112107.07979461847!2d77.28968609726563!3d28.535517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida!5e0!3m2!1sen!2sin!4v1701000000000!5m2!1sen!2sin';
const GN_MAP = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112107.07979461847!2d77.40!3d28.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e0a9b84de9%3A0x2cc4e0abe428ecd3!2sGreater+Noida!5e0!3m2!1sen!2sin!4v1701000000000!5m2!1sen!2sin';
const FBD_MAP = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112107.07979461847!2d77.31!3d28.40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc8d1f4b2d8f%3A0x9bfef2c72fc3cdb3!2sFaridabad!5e0!3m2!1sen!2sin!4v1701000000000!5m2!1sen!2sin';

export const DelhiRepair        = createLocationPage({ city: 'Delhi', slug: 'delhi-laptop-repair', mapSrc: DELHI_MAP, description: 'Same day laptop repair service across all Delhi areas. Free doorstep pickup. HP, Dell, Lenovo, Apple & all brands repaired.', services: SERVICES, title: 'Laptop Repair in Delhi | Same Day Service | PC LAP TECH', metaDesc: 'PC LAP TECH offers expert laptop repair in Delhi. Screen replacement, battery, SSD, RAM upgrade, motherboard repair. Doorstep service across Delhi. Call 6306372863.', keywords: 'laptop repair Delhi, laptop repair near me Delhi, laptop screen replacement Delhi, laptop repair South Delhi, laptop repair East Delhi, HP laptop repair Delhi', faqs: delhiFAQs });

export const NoidaRepair        = createLocationPage({ city: 'Noida', slug: 'noida-laptop-repair', mapSrc: NOIDA_MAP, description: 'Fast and affordable laptop repair service in Noida. Doorstep pickup from any sector. All brands repaired same day.', services: SERVICES, title: 'Laptop Repair in Noida | Same Day Doorstep Service | PC LAP TECH', metaDesc: 'PC LAP TECH provides expert laptop repair in Noida. Screen, battery, SSD, RAM, motherboard repairs. Free doorstep pickup from all Noida sectors. Call 6306372863.', keywords: 'laptop repair Noida, laptop repair near me Noida, laptop screen replacement Noida, laptop battery replacement Noida, HP laptop repair Noida, Dell laptop repair Noida', faqs: [{ q: 'Where to get laptop repaired in Noida?', a: 'PC LAP TECH provides doorstep laptop repair service across all Noida sectors including Sector 18, 62, 63, 125, 137, and more. Call 6306372863.' }, { q: 'What is the cost of laptop repair in Noida?', a: 'Laptop repair in Noida starts from ₹799 at PC LAP TECH. Free diagnosis before repair. Transparent pricing with no hidden charges.' }] });

export const GreaterNoidaRepair = createLocationPage({ city: 'Greater Noida', slug: 'greater-noida-laptop-repair', mapSrc: GN_MAP, description: 'Professional laptop repair in Greater Noida. Same day service in Knowledge Park, Omega, Alpha, Beta, and all sectors.', services: SERVICES, title: 'Laptop Repair in Greater Noida | PC LAP TECH | Same Day', metaDesc: 'Expert laptop repair in Greater Noida. Screen, battery, SSD upgrade, motherboard repair. Doorstep service in all Greater Noida sectors. Call PC LAP TECH: 6306372863.', keywords: 'laptop repair Greater Noida, laptop repair near me Greater Noida, laptop screen replacement Greater Noida, HP laptop repair Greater Noida, laptop battery replacement Greater Noida', faqs: [{ q: 'Do you provide laptop repair in Greater Noida?', a: 'Yes! PC LAP TECH provides doorstep laptop repair in all Greater Noida areas including Knowledge Park I, II, III, IV, Omega, Alpha, Beta, and Gamma sectors.' }, { q: 'Can I get laptop repaired at home in Greater Noida?', a: 'Absolutely! Our technicians offer free pickup from your home or office anywhere in Greater Noida. Call 6306372863.' }] });

export const FaridabadRepair    = createLocationPage({ city: 'Faridabad', slug: 'faridabad-laptop-repair', mapSrc: FBD_MAP, description: 'Trusted laptop repair service in Faridabad. NIT, Sector 15, 16, and all areas covered. Same day doorstep service.', services: SERVICES, title: 'Laptop Repair in Faridabad | Doorstep Service | PC LAP TECH', metaDesc: 'PC LAP TECH provides expert laptop repair in Faridabad. Screen replacement, battery, keyboard, SSD, RAM, motherboard repairs. Free doorstep pickup. Call 6306372863.', keywords: 'laptop repair Faridabad, laptop repair near me Faridabad, laptop screen replacement Faridabad, HP laptop repair Faridabad, laptop battery replacement Faridabad, NIT Faridabad laptop repair', faqs: [{ q: 'Do you provide laptop repair in Faridabad?', a: 'Yes! PC LAP TECH provides doorstep laptop repair in all Faridabad sectors including NIT Faridabad, Sector 15, 16, 17, Old Faridabad, and Badhkal.' }, { q: 'How much time does laptop repair take in Faridabad?', a: 'Most common repairs are completed same day. Screen replacement takes 2–4 hours. Motherboard and complex repairs may take 1–2 days.' }] });
