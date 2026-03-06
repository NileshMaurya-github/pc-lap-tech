import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import SEOPageLayout from '../../components/SEOPageLayout';

export function Top10Problems() {
  return (
    <>
      <SEOHead
        title="Top 10 Common Laptop Problems & Solutions | PC LAP TECH Blog"
        description="Discover the top 10 most common laptop problems — overheating, slow performance, broken screen, battery issues — and learn how to fix them with expert advice from PC LAP TECH."
        keywords="common laptop problems, laptop not turning on, laptop overheating solution, laptop slow fix, laptop battery draining fast"
        canonical="/blog/top-10-laptop-problems"
      />
      <SEOPageLayout
        heroTag="Top 10 Common Laptop Problems & Solutions"
        subtitle="Expert troubleshooting guide from PC LAP TECH's certified technicians"
        breadcrumb={[{ label: 'Blog', href: '/blog' }, { label: 'Top 10 Laptop Problems', href: '/blog/top-10-laptop-problems' }]}
      >
        <h2 className="font-display font-black text-3xl text-gray-900 mb-4">Top 10 Laptop Problems and How to Fix Them</h2>
        <p className="text-slate-600 leading-relaxed mb-6">Laptops are complex machines with hundreds of components working together. When something goes wrong, it can be frustrating. Here are the 10 most common laptop problems and what you can do about them — with expert advice from <Link to="/" className="text-blue-600 font-semibold">PC LAP TECH</Link>, Delhi NCR's trusted laptop repair service.</p>

        {[
          { num: 1, title: 'Laptop Not Turning On', body: 'If your laptop won\'t power on, start by removing the battery and charger, holding the power button for 30 seconds, and reconnecting. If it still doesn\'t work, the issue may be a faulty battery, charging port, or motherboard.' },
          { num: 2, title: 'Laptop Running Very Slow', body: 'A slow laptop is usually caused by too many startup programs, low RAM, a fragmented HDD, or malware. Upgrading to an SSD and adding more RAM can dramatically improve performance. See our <Link to="/laptop-ssd-upgrade-delhi" class="text-blue-600 font-semibold">SSD upgrade service</Link>.' },
          { num: 3, title: 'Laptop Overheating and Shutting Down', body: 'Overheating is usually caused by clogged vents, old thermal paste, or a faulty fan. Clean the vents using compressed air and consider a thermal paste replacement if your laptop is 3+ years old.' },
          { num: 4, title: 'Broken or Cracked Screen', body: 'A cracked screen is one of the most common repairs. Professional screen replacement starts at ₹1,999 at PC LAP TECH. See our <a href="/laptop-screen-replacement-delhi" class="text-blue-600 font-semibold">laptop screen replacement service</a>.' },
          { num: 5, title: 'Battery Not Charging or Draining Fast', body: 'If your battery isn\'t charging, try a different charger first. If the battery drains quickly, it may need replacement. Battery health below 40% is a clear sign. Replacement starts from ₹999.' },
          { num: 6, title: 'Laptop Keyboard Not Working', body: 'Individual keys failing or keyboard not typing can be caused by debris, water damage, or a hardware failure. Individual key replacement starts from ₹799. Full keyboard replacement from ₹1,299.' },
          { num: 7, title: 'WiFi Not Connecting', body: 'WiFi issues are often caused by driver problems or a faulty WiFi card. Update your network drivers first, and if the issue persists, the WiFi card may need replacement.' },
          { num: 8, title: 'Blue Screen of Death (BSOD)', body: 'BSODs are usually caused by driver conflicts, RAM errors, or corrupted system files. Run the Windows Memory Diagnostic tool and check the error code for specific solutions.' },
          { num: 9, title: 'Laptop Making Noise', body: 'Grinding or rattling sounds from a laptop can indicate a failing HDD or a dusty fan. HDD issues should be addressed immediately to avoid data loss — consider upgrading to an SSD.' },
          { num: 10, title: 'Laptop Hinges Broken', body: 'Loose or broken hinges can crack the screen frame if not repaired promptly. Hinge repair and replacement is available at PC LAP TECH starting from ₹499.' },
        ].map((item, i) => (
          <div key={i} className="mb-6">
            <h3 className="font-display font-bold text-xl text-gray-900 mb-2">{item.num}. {item.title}</h3>
            <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
          </div>
        ))}

        <div className="mt-6 p-5 rounded-2xl" style={{ background: '#eff6ff', border: '1.5px solid #bfdbfe' }}>
          <p className="font-bold text-blue-900 mb-1">🔧 Need Professional Laptop Repair in Delhi NCR?</p>
          <p className="text-blue-700 text-sm"><Link to="/book-repair" className="underline font-semibold">Book a free diagnosis</Link> with PC LAP TECH. Call <strong>6306372863</strong> — same day service available.</p>
        </div>
      </SEOPageLayout>
    </>
  );
}

export function HowToUpgradeRAM() {
  return (
    <>
      <SEOHead
        title="How to Upgrade Laptop RAM – Complete Guide | PC LAP TECH Blog"
        description="Step-by-step guide to upgrading laptop RAM in 2024. Find compatible RAM, install it safely, and boost your laptop performance with expert advice."
        keywords="how to upgrade laptop RAM, laptop RAM upgrade guide, compatible RAM laptop, DDR4 RAM upgrade, install RAM laptop"
        canonical="/blog/how-to-upgrade-laptop-ram"
      />
      <SEOPageLayout
        heroTag="How to Upgrade Laptop RAM – Complete Guide"
        subtitle="Step-by-step guide from PC LAP TECH's expert technicians"
        breadcrumb={[{ label: 'Blog', href: '/blog' }, { label: 'How to Upgrade RAM', href: '/blog/how-to-upgrade-laptop-ram' }]}
      >
        <h2 className="font-display font-black text-3xl text-gray-900 mb-4">How to Upgrade Your Laptop RAM in 2024</h2>
        <p className="text-slate-600 mb-4">Upgrading your laptop's RAM is one of the most effective ways to boost performance, especially if you're running multiple applications simultaneously or working with large files. This guide walks you through the entire process.</p>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Step 1: Check If Your RAM is Upgradeable</h3>
        <p className="text-slate-600 mb-4">Some modern ultrabooks and Apple M-series MacBooks have soldered RAM that cannot be upgraded. Open Task Manager → Performance → Memory to see if slots are available. Alternatively, run CPU-Z and check the SPD tab.</p>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Step 2: Find Compatible RAM</h3>
        <p className="text-slate-600 mb-4">Check your laptop's specifications for RAM type (DDR3, DDR4, DDR5), speed (2400MHz, 3200MHz etc.), and maximum supported capacity. Most modern laptops use DDR4 SO-DIMM modules.</p>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Step 3: Install the RAM</h3>
        <ol className="list-decimal pl-6 text-slate-600 space-y-2 mb-6">
          <li>Power off your laptop completely and remove the charger</li>
          <li>Remove the bottom panel using a Phillips screwdriver</li>
          <li>Locate the RAM slot (usually near the center or side)</li>
          <li>Insert the new RAM at a 45° angle and press down until it clicks</li>
          <li>Reattach the bottom panel and power on</li>
          <li>Verify in Task Manager that the new RAM is recognized</li>
        </ol>

        <div className="p-5 rounded-2xl mb-4" style={{ background: '#fef9c3', border: '1.5px solid #fde047' }}>
          <p className="font-bold text-amber-900 mb-1">⚠️ Not comfortable opening your laptop?</p>
          <p className="text-amber-800 text-sm">Let our experts handle it. <Link to="/laptop-ram-upgrade-delhi" className="underline font-semibold">Book a RAM upgrade service</Link> at PC LAP TECH — starting ₹2,499 with 3-month warranty.</p>
        </div>
      </SEOPageLayout>
    </>
  );
}

export function SSDvsHDD() {
  return (
    <>
      <SEOHead
        title="SSD vs HDD: Which is Better for Laptop? | PC LAP TECH Blog"
        description="SSD vs HDD comparison for laptops — speed, price, battery life, durability. Find out which storage drive is best for your laptop and use case in 2024."
        keywords="SSD vs HDD laptop, SSD better than HDD, laptop SSD upgrade worth it, NVMe vs SATA SSD"
        canonical="/blog/ssd-vs-hdd"
      />
      <SEOPageLayout
        heroTag="SSD vs HDD: Which is Better for Your Laptop?"
        subtitle="A complete 2024 comparison by PC LAP TECH's technical experts"
        breadcrumb={[{ label: 'Blog', href: '/blog' }, { label: 'SSD vs HDD', href: '/blog/ssd-vs-hdd' }]}
      >
        <h2 className="font-display font-black text-3xl text-gray-900 mb-4">SSD vs HDD: Complete Comparison for Laptops</h2>
        <p className="text-slate-600 mb-6">Choosing between an SSD (Solid State Drive) and HDD (Hard Disk Drive) is one of the most impactful decisions for your laptop's performance. Here's everything you need to know.</p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm" style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}>
            <thead style={{ background: '#eff6ff' }}>
              <tr>
                {['Feature', 'SSD', 'HDD'].map(h => <th key={h} className="text-left py-3 px-4 font-semibold text-gray-800">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {[
                ['Boot Speed', '5–10 seconds', '30–60+ seconds'],
                ['Read/Write Speed', '500–7000 MB/s', '80–160 MB/s'],
                ['Battery Impact', 'Low power', 'Higher power'],
                ['Noise', 'Silent', 'Audible click/spin'],
                ['Durability', 'No moving parts — very durable', 'Vulnerable to drops'],
                ['Price (1TB)', '₹5,500–₹8,500', '₹2,500–₹4,000'],
                ['Best For', 'Speed, gaming, video editing', 'Mass storage, archiving'],
              ].map((row, i) => (
                <tr key={i} style={{ borderTop: '1px solid #f1f5f9' }} className="hover:bg-blue-50/30 transition-colors">
                  {row.map((cell, j) => <td key={j} className="py-3 px-4 text-slate-600">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Our Recommendation</h3>
        <p className="text-slate-600 mb-4">For everyday use, studying, and work: <strong>SSD is the clear winner</strong>. The speed difference is dramatic — your laptop will feel like new. If you need cheap bulk storage (photos, videos, backups), an HDD makes sense as a secondary drive.</p>

        <div className="p-5 rounded-2xl" style={{ background: '#f0fdf4', border: '1.5px solid #bbf7d0' }}>
          <p className="font-bold text-green-900 mb-1">⚡ Ready to upgrade to SSD?</p>
          <p className="text-green-700 text-sm"><Link to="/laptop-ssd-upgrade-delhi" className="underline font-semibold">Book SSD upgrade</Link> at PC LAP TECH — starting ₹1,499 with free data migration. Delhi NCR doorstep service.</p>
        </div>
      </SEOPageLayout>
    </>
  );
}

export function BatterySigns() {
  return (
    <>
      <SEOHead
        title="8 Signs Your Laptop Battery Needs Replacement | PC LAP TECH Blog"
        description="Is your laptop battery giving up? Learn the 8 clear signs that your laptop battery needs to be replaced. Expert advice from PC LAP TECH, Delhi NCR."
        keywords="laptop battery replacement signs, laptop battery dying, laptop battery swollen, laptop battery not charging, battery replacement when"
        canonical="/blog/signs-laptop-battery-needs-replacement"
      />
      <SEOPageLayout
        heroTag="8 Signs Your Laptop Battery Needs Replacement"
        subtitle="Know when it's time to replace your battery before it causes bigger problems"
        breadcrumb={[{ label: 'Blog', href: '/blog' }, { label: 'Battery Replacement Signs', href: '/blog/signs-laptop-battery-needs-replacement' }]}
      >
        <h2 className="font-display font-black text-3xl text-gray-900 mb-4">When Should You Replace Your Laptop Battery?</h2>
        <p className="text-slate-600 mb-6">Most laptop batteries last 2–4 years or about 500 charge cycles. After that, performance degrades significantly. Here are 8 signs that it's time for a replacement.</p>

        {[
          { sign: '1. Battery Drains in Under 1 Hour', body: 'A healthy battery should last 4–8 hours depending on usage. If yours dies in under an hour with minimal activity, battery capacity has degraded significantly.' },
          { sign: '2. Laptop Only Works When Plugged In', body: 'If your laptop shuts off immediately when you unplug the charger, the battery is at end of life. This is a critical sign — replace immediately.' },
          { sign: '3. Battery Showing 0% When Plugged In', body: 'If Windows shows "Plugged in, not charging" or constantly shows 0%, the battery cells may have failed completely.' },
          { sign: '4. Swollen or Bulging Battery', body: '⚠️ URGENT: A bloated battery is a fire and explosion hazard. If your laptop bottom panel is lifting or keyboard is pushing up, replace the battery same day.' },
          { sign: '5. Laptop Gets Very Hot While Charging', body: 'Excessive heat during charging suggests battery cell breakdown. This can damage your motherboard if not addressed.' },
          { sign: '6. Sudden Shutdowns Without Warning', body: 'If your laptop shuts down at 40%, 30%, or even 15% without a low battery warning, battery calibration has failed.' },
          { sign: '7. Battery Health Below 40%', body: 'Check in Windows: run "powercfg /batteryreport" in CMD. If "Full Charge Capacity" is less than 40% of "Design Capacity", it\'s time to replace.' },
          { sign: '8. Battery Warning in Windows', body: 'A red X icon on the battery or a "Consider replacing your battery" notification in Windows is Microsoft confirming your battery needs replacement.' },
        ].map((item, i) => (
          <div key={i} className="mb-5">
            <h3 className="font-display font-bold text-xl text-gray-900 mb-1">{item.sign}</h3>
            <p className="text-slate-600 leading-relaxed">{item.body}</p>
          </div>
        ))}

        <div className="p-5 rounded-2xl" style={{ background: '#eff6ff', border: '1.5px solid #bfdbfe' }}>
          <p className="font-bold text-blue-900 mb-1">🔋 Time to Replace Your Battery?</p>
          <p className="text-blue-700 text-sm"><Link to="/laptop-battery-replacement-delhi" className="underline font-semibold">Book battery replacement</Link> at PC LAP TECH. Starting ₹999. Doorstep service across Delhi NCR.</p>
        </div>
      </SEOPageLayout>
    </>
  );
}

export function WhySlowLaptop() {
  return (
    <>
      <SEOHead
        title="Why is My Laptop Running Slow? 10 Reasons & Fixes | PC LAP TECH Blog"
        description="Find out why your laptop is slow and how to fix it. 10 common causes — too many startup programs, low RAM, HDD, malware, overheating — with practical solutions."
        keywords="why is my laptop slow, slow laptop fix Delhi, laptop performance upgrade, laptop speed up tips, laptop running slow solutions"
        canonical="/blog/why-laptop-running-slow"
      />
      <SEOPageLayout
        heroTag="Why is My Laptop Running Slow? 10 Reasons & Fixes"
        subtitle="Practical expert advice to diagnose and fix a slow laptop from PC LAP TECH"
        breadcrumb={[{ label: 'Blog', href: '/blog' }, { label: 'Why Laptop Running Slow', href: '/blog/why-laptop-running-slow' }]}
      >
        <h2 className="font-display font-black text-3xl text-gray-900 mb-4">10 Reasons Your Laptop is Slow (and How to Fix It)</h2>
        <p className="text-slate-600 mb-6">A slow laptop is one of the most common complaints from users. The good news: most causes are fixable. Here are 10 reasons your laptop is sluggish and what to do.</p>

        {[
          { n: 1, title: 'Too Many Startup Programs', fix: 'Open Task Manager → Startup tab. Disable all non-essential programs. This alone can cut boot time by 50%.' },
          { n: 2, title: 'Not Enough RAM (4GB or Less)', fix: 'With 4GB RAM, modern websites and apps will cause constant slowdowns. Upgrading to 8GB or 16GB RAM is the best fix. PC LAP TECH offers RAM upgrades starting ₹2,499.' },
          { n: 3, title: 'Old HDD Instead of SSD', fix: 'HDDs are 5–10x slower than SSDs. Replacing your HDD with an SSD is the single biggest performance upgrade you can make. Starts from ₹1,499 at PC LAP TECH.' },
          { n: 4, title: 'Overheating (CPU Throttling)', fix: 'When overheated, your CPU slows down to prevent damage. Clean the fan vents with compressed air and consider thermal paste replacement.' },
          { n: 5, title: 'Malware and Virus Infection', fix: 'Malware can consume 100% of your CPU in the background. Run Windows Defender full scan or install Malwarebytes for a deep scan.' },
          { n: 6, title: 'Low Storage Space (HDD/SSD Full)', fix: 'Keep at least 15% storage free. Under 10% causes significant slowdowns in Windows. Delete unused files or move to an external drive.' },
          { n: 7, title: 'Outdated Windows or Drivers', fix: 'Outdated drivers cause conflicts and performance issues. Run Windows Update and update GPU, chipset, and network drivers from your laptop manufacturer\'s site.' },
          { n: 8, title: 'Too Many Bloatware Apps', fix: 'New laptops often come with pre-installed software that runs in background. Uninstall unnecessary manufacturer apps via Settings → Apps.' },
          { n: 9, title: 'Failing Hard Drive', fix: 'If your HDD is clicking, grinding, or showing bad sectors, it may be failing. Run CrystalDiskInfo to check HDD health. Replace immediately to avoid data loss.' },
          { n: 10, title: 'Old Laptop (5+ Years)', fix: 'Sometimes a combination of aged components means a major upgrade is needed. An SSD + RAM upgrade can make a 5-year-old laptop feel brand new — much cheaper than buying a new one.' },
        ].map((item, i) => (
          <div key={i} className="mb-5">
            <h3 className="font-display font-bold text-xl text-gray-900 mb-1">{item.n}. {item.title}</h3>
            <p className="text-slate-600 leading-relaxed"><strong>Fix: </strong>{item.fix}</p>
          </div>
        ))}

        <div className="p-5 rounded-2xl" style={{ background: '#eff6ff', border: '1.5px solid #bfdbfe' }}>
          <p className="font-bold text-blue-900 mb-1">⚡ Get Your Slow Laptop Fixed by Experts!</p>
          <p className="text-blue-700 text-sm"><Link to="/book-repair" className="underline font-semibold">Book a free diagnosis</Link> at PC LAP TECH. We'll identify exactly what's slowing your laptop down. Delhi NCR doorstep service — call <strong>6306372863</strong>.</p>
        </div>
      </SEOPageLayout>
    </>
  );
}
