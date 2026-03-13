import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';

const up = (d = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: d } });

export const BLOG_POSTS = [
  { slug: 'top-10-laptop-problems', title: 'Top 10 Common Laptop Problems and Solutions', excerpt: 'Overheating, slow performance, broken screen, battery drain — find out what causes these issues and how to fix them fast.', readTime: '8 min', category: 'Troubleshooting' },
  { slug: 'how-to-upgrade-laptop-ram', title: 'How to Upgrade Laptop RAM: Complete Guide 2024', excerpt: 'Step-by-step guide to checking your laptop\'s RAM compatibility, choosing the right RAM, and upgrading it safely.', readTime: '10 min', category: 'Upgrades' },
  { slug: 'ssd-vs-hdd', title: 'SSD vs HDD: Which is Better for Your Laptop?', excerpt: 'A detailed comparison of SSD and HDD — speed, price, durability, and which one you should choose for your use case.', readTime: '6 min', category: 'Upgrades' },
  { slug: 'signs-laptop-battery-needs-replacement', title: 'Signs Your Laptop Battery Needs Replacement', excerpt: 'Battery draining fast? Laptop dying randomly? Find out the 8 telltale signs your laptop battery needs to be replaced.', readTime: '5 min', category: 'Maintenance' },
  { slug: 'why-laptop-running-slow', title: 'Why is My Laptop Running Slow? 10 Reasons & Fixes', excerpt: 'Discover the most common reasons for a slow laptop and practical fixes — from adding RAM to clearing bloatware.', readTime: '9 min', category: 'Troubleshooting' },
];

export default function BlogIndex() {
  return (
    <>
      <SEOHead
        title="Laptop Repair Tips & Guides Blog | PC LAP TECH Delhi"
        description="Expert laptop repair tips, upgrade guides, and troubleshooting advice from PC LAP TECH — Delhi NCR's trusted laptop repair experts."
        keywords="laptop repair tips Delhi, laptop upgrade guide, laptop troubleshooting, laptop battery tips, SSD upgrade guide"
        canonical="/blog"
      />
      <div className="min-h-screen bg-transparent">
        <div style={{ background: 'linear-gradient(135deg,#1e3a8a,#1d4ed8,#0891b2)', padding: '8rem 0 5rem' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.div {...up()}>
              <h1 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}>
                Laptop Repair Tips & Guides
              </h1>
              <p className="text-blue-100 text-xl">Expert advice from PC LAP TECH's certified technicians</p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post, i) => (
              <motion.div key={i} {...up(i * 0.07)} className="surface-card rounded-2xl overflow-hidden flex flex-col">
                <div className="p-6 flex-1">
                  <span className="badge badge-blue mb-3 text-xs">{post.category}</span>
                  <h2 className="font-display font-bold text-gray-900 text-lg mb-2 leading-snug">{post.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid #f1f5f9' }}>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <Clock size={12} /> {post.readTime} read
                  </div>
                  <Link to={`/blog/${post.slug}`}
                    className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors">
                    Read More <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
