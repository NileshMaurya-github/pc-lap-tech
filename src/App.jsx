import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DatabaseProvider, useDB } from './context/DatabaseContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

// Main pages
import Home        from './pages/Home';
import Services    from './pages/Services';
import Parts       from './pages/Parts';
import BookRepair  from './pages/BookRepair';
import About       from './pages/About';
import Contact     from './pages/Contact';
import Login       from './pages/Login';
import Admin       from './pages/Admin';

// SEO – Service pages
import ScreenReplacement  from './pages/seo/ScreenReplacement';
import BatteryReplacement from './pages/seo/BatteryReplacement';
import KeyboardRepair     from './pages/seo/KeyboardRepair';
import MotherboardRepair  from './pages/seo/MotherboardRepair';
import SSDUpgrade         from './pages/seo/SSDUpgrade';
import RAMUpgrade         from './pages/seo/RAMUpgrade';

// SEO – Location pages
import { DelhiRepair, NoidaRepair, GreaterNoidaRepair, FaridabadRepair } from './pages/seo/LocationPages';

// Blog
import BlogIndex from './pages/blog/BlogIndex';
import {
  Top10Problems, HowToUpgradeRAM, SSDvsHDD, BatterySigns, WhySlowLaptop
} from './pages/blog/BlogPosts';

function ProtectedRoute({ children }) {
  const { db } = useDB();
  if (!db.auth?.isLoggedIn) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>

      {/* ── Core Pages ── */}
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/services" element={<Layout><Services /></Layout>} />
      <Route path="/parts" element={<Layout><Parts /></Layout>} />
      <Route path="/book-repair" element={<Layout><BookRepair /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />

      {/* ── SEO Service Pages ── */}
      <Route path="/laptop-screen-replacement-delhi" element={<Layout><ScreenReplacement /></Layout>} />
      <Route path="/laptop-battery-replacement-delhi" element={<Layout><BatteryReplacement /></Layout>} />
      <Route path="/laptop-keyboard-repair-delhi" element={<Layout><KeyboardRepair /></Layout>} />
      <Route path="/laptop-motherboard-repair-delhi" element={<Layout><MotherboardRepair /></Layout>} />
      <Route path="/laptop-ssd-upgrade-delhi" element={<Layout><SSDUpgrade /></Layout>} />
      <Route path="/laptop-ram-upgrade-delhi" element={<Layout><RAMUpgrade /></Layout>} />

      {/* ── SEO Location Pages ── */}
      <Route path="/delhi-laptop-repair" element={<Layout><DelhiRepair /></Layout>} />
      <Route path="/noida-laptop-repair" element={<Layout><NoidaRepair /></Layout>} />
      <Route path="/greater-noida-laptop-repair" element={<Layout><GreaterNoidaRepair /></Layout>} />
      <Route path="/faridabad-laptop-repair" element={<Layout><FaridabadRepair /></Layout>} />

      {/* ── Blog ── */}
      <Route path="/blog" element={<Layout><BlogIndex /></Layout>} />
      <Route path="/blog/top-10-laptop-problems" element={<Layout><Top10Problems /></Layout>} />
      <Route path="/blog/how-to-upgrade-laptop-ram" element={<Layout><HowToUpgradeRAM /></Layout>} />
      <Route path="/blog/ssd-vs-hdd" element={<Layout><SSDvsHDD /></Layout>} />
      <Route path="/blog/signs-laptop-battery-needs-replacement" element={<Layout><BatterySigns /></Layout>} />
      <Route path="/blog/why-laptop-running-slow" element={<Layout><WhySlowLaptop /></Layout>} />

      {/* ── Admin ── */}
      <Route path="/admin-login" element={<Login />} />
      <Route path="/admin" element={
        <ProtectedRoute><Admin /></ProtectedRoute>
      } />

    </Routes>
  );
}

export default function App() {
  return (
    <DatabaseProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </DatabaseProvider>
  );
}
