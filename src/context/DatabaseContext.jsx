import React, { createContext, useState, useEffect, useContext } from 'react';

const DB_KEY = 'pclaptech_db';

const defaultDB = {
  auth: { isLoggedIn: false, username: 'admin', password: 'pclaptech@2024' },
  stats: { totalRevenue: 148500, totalBookings: 247, pendingRepairs: 18, completedRepairs: 229 },
  parts: {
    ram: [
      { id: 'ram-8gb', name: '8GB DDR4 RAM', price: 1800, inStock: true },
      { id: 'ram-16gb', name: '16GB DDR4 RAM', price: 3200, inStock: true },
      { id: 'ram-32gb', name: '32GB DDR4 RAM', price: 6500, inStock: true },
    ],
    ssd: [
      { id: 'ssd-128', name: '128GB SSD', price: 900, inStock: true },
      { id: 'ssd-256', name: '256GB SSD', price: 1500, inStock: true },
      { id: 'ssd-512', name: '512GB SSD', price: 2800, inStock: true },
      { id: 'ssd-1tb', name: '1TB SSD', price: 5500, inStock: true },
    ],
    battery: [
      { id: 'batt-hp', name: 'HP Battery', price: 1800, inStock: true },
      { id: 'batt-dell', name: 'Dell Battery', price: 1900, inStock: true },
      { id: 'batt-lenovo', name: 'Lenovo Battery', price: 1800, inStock: true },
      { id: 'batt-asus', name: 'Asus Battery', price: 1750, inStock: true },
      { id: 'batt-acer', name: 'Acer Battery', price: 1700, inStock: true },
      { id: 'batt-mac', name: 'MacBook Battery', price: 4500, inStock: true },
    ],
    display: [
      { id: 'disp-hd', name: 'HD Screen (1366x768)', price: 2200, inStock: true },
      { id: 'disp-fhd', name: 'Full HD Screen (1080p)', price: 3500, inStock: true },
      { id: 'disp-4k', name: '4K UHD IPS Screen', price: 8500, inStock: true },
      { id: 'disp-144hz', name: '144Hz Gaming Display', price: 6500, inStock: true },
    ],
    keyboard: [
      { id: 'kbd-hp', name: 'HP Standard Keyboard', price: 850, inStock: true },
      { id: 'kbd-dell', name: 'Dell Latitude/Inspiron Keyboard', price: 950, inStock: true },
      { id: 'kbd-lenovo', name: 'Lenovo ThinkPad Keyboard', price: 1200, inStock: true },
      { id: 'kbd-mac', name: 'MacBook Magic Keyboard', price: 3500, inStock: true },
      { id: 'kbd-asus', name: 'Asus ROG Backlit Keyboard', price: 1800, inStock: true },
    ],
    charger: [
      { id: 'chg-45w', name: '45W Universal Type-C Adapter', price: 650, inStock: true },
      { id: 'chg-65w', name: '65W Original Dell/HP Charger', price: 950, inStock: true },
      { id: 'chg-90w', name: '90W High Power Charger', price: 1200, inStock: true },
      { id: 'chg-mac', name: 'Apple 61W USB-C Power Adapter', price: 2500, inStock: true },
      { id: 'chg-asus', name: 'Asus 150W Gaming Charger', price: 1800, inStock: true },
    ],
    cooling: [
      { id: 'cool-fan1', name: 'Standard CPU Cooling Fan', price: 450, inStock: true },
      { id: 'cool-fan2', name: 'Dual Fan Gaming Setup (GPU+CPU)', price: 1200, inStock: true },
      { id: 'cool-paste1', name: 'Arctic MX-4 Thermal Paste', price: 250, inStock: true },
      { id: 'cool-paste2', name: 'Thermal Grizzly Kryonaut', price: 600, inStock: true },
      { id: 'cool-liquid', name: 'Liquid Metal Repaste Kit', price: 950, inStock: true },
    ],
    network: [
      { id: 'net-wifi5', name: 'Intel Dual Band Wi-Fi 5 Card', price: 650, inStock: true },
      { id: 'net-wifi6', name: 'Intel AX200 Wi-Fi 6 + Bluetooth 5.1', price: 1100, inStock: true },
      { id: 'net-wifi6e', name: 'Intel AX210 Wi-Fi 6E Card', price: 1500, inStock: true },
      { id: 'net-usb', name: 'USB Nano Wi-Fi Adapter', price: 300, inStock: true },
    ],
    other: [
      { id: 'mobo', name: 'Motherboard Component Level Repair', price: 2500, inStock: true },
      { id: 'hinges', name: 'Laptop Hinges (Pair)', price: 650,  inStock: true },
      { id: 'touchpad', name: 'Precision Touchpad Replacement', price: 1100, inStock: true },
      { id: 'speaker', name: 'Internal Stereo Speakers', price: 850, inStock: true },
      { id: 'camera', name: '720p/1080p Webcam Module', price: 750, inStock: true },
    ],
  },
  services: [
      { id: 'srv-screen', name: 'Screen Replacement',           desc: 'Replace cracked or dead display panels with OEM-quality screens.', price: 1200, category: 'Hardware' },
      { id: 'srv-keyboard', name: 'Keyboard Repair',              desc: 'Fix stuck, missing, or unresponsive keys. Full keyboard replacement if needed.', price: 500,  category: 'Hardware' },
      { id: 'srv-battery', name: 'Battery Replacement',          desc: 'Restore full battery life with brand-matched, genuine cells.', price: 450,  category: 'Hardware' },
      { id: 'srv-charging', name: 'Charging Port Repair',         desc: 'Fix broken, loose, or burnt charging ports quickly.', price: 650,  category: 'Hardware' },
      { id: 'srv-mobo', name: 'Motherboard Repair',           desc: 'Advanced chip-level component repair by certified technicians.', price: 2500, category: 'Hardware' },
      { id: 'srv-water', name: 'Water Damage Recovery',        desc: 'Emergency cleaning and component-level repair after liquid exposure.', price: 1200, category: 'Hardware' },
      { id: 'srv-fan', name: 'Fan & Cooling Repair',         desc: 'Stop overheating – clean, repair, or replace fans and thermal paste.', price: 350,  category: 'Hardware' },
      { id: 'srv-hinges', name: 'Hinges & Body Repair',         desc: 'Fix broken hinges, cracked bezels, and damaged laptop body panels.', price: 650,  category: 'Hardware' },
      { id: 'srv-speaker', name: 'Speaker Replacement',          desc: 'Replace blown or distorted internal laptop speakers for clear sound.', price: 450,  category: 'Hardware' },
      { id: 'srv-touchpad', name: 'Touchpad Repair',              desc: 'Fix unresponsive, ghost-clicking, or physically damaged trackpads.', price: 650,  category: 'Hardware' },
      { id: 'srv-camera', name: 'Webcam Repair',                desc: 'Fix blurry, completely black, or physically damaged laptop webcams.', price: 550,  category: 'Hardware' },
      
      { id: 'srv-software', name: 'Software Installation',        desc: 'Install OS, drivers, and essential productivity software.', price: 350,  category: 'Software' },
      { id: 'srv-windows', name: 'Windows Installation',         desc: 'Clean install of Windows 10 / 11 with all drivers and updates.', price: 450,  category: 'Software' },
      { id: 'srv-virus', name: 'Virus/Malware Removal',        desc: 'Deep scan, cleanup, and protection setup against all malware.', price: 350,  category: 'Software' },
      { id: 'srv-data-rec', name: 'Data Recovery',                desc: 'Recover lost, deleted, or corrupted files from failing or formatted drives.', price: 950, category: 'Software' },
      { id: 'srv-os-repair', name: 'OS Troubleshooting',           desc: 'Fix blue screen of death (BSOD), boot loops, and crashed operating systems.', price: 450,  category: 'Software' },
      { id: 'srv-bios', name: 'BIOS Flash & Unlock',          desc: 'Flash corrupt BIOS chips, update firmware, and remove BIOS level passwords.', price: 650,  category: 'Software' },
      { id: 'srv-network', name: 'Network/Wi-Fi Fix',            desc: 'Resolve internet dropping, slow speeds, or missing Wi-Fi/Bluetooth adapters.', price: 350,  category: 'Software' },
      { id: 'srv-app-config', name: 'Specialized App Config',       desc: 'Configure heavy software for rendering, coding, or enterprise environments.', price: 450,  category: 'Software' },

      { id: 'srv-ram-up', name: 'RAM Upgrade',                  desc: 'Boost multitasking speed by adding high-performance DDR4/DDR5 RAM.', price: 250,  category: 'Upgrade' },
      { id: 'srv-ssd-up', name: 'SSD Storage Upgrade',          desc: 'Switch to a blazing fast NVMe SSD for 10x faster boot times.', price: 350,  category: 'Upgrade' },
      { id: 'srv-thermal-up', name: 'Thermal Paste Repaste',        desc: 'Apply premium liquid metal or high-grade thermal paste for gaming laptops.', price: 450,  category: 'Upgrade' },
      { id: 'srv-wifi-up', name: 'Network Card Upgrade',         desc: 'Upgrade internal Wi-Fi card to support Wi-Fi 6 or Wi-Fi 6E networks.', price: 350,  category: 'Upgrade' },
  ],
  bookings: [
    { id: 'BK001', name: 'Rahul Sharma',  phone: '9876543210', email: 'rahul@email.com', brand: 'Dell',   model: 'Inspiron 15', problem: 'Screen cracked',    service: 'Home Visit', status: 'Completed', date: '2026-03-01' },
    { id: 'BK002', name: 'Priya Gupta',   phone: '9654321098', email: 'priya@email.com', brand: 'HP',     model: 'Pavilion',    problem: 'Battery drain fast', service: 'Shop Visit', status: 'In Progress', date: '2026-03-03' },
    { id: 'BK003', name: 'Amit Singh',    phone: '9812345670', email: 'amit@email.com',  brand: 'Lenovo', model: 'ThinkPad',    problem: 'Not turning on',    service: 'Home Visit', status: 'Pending', date: '2026-03-05' },
    { id: 'BK004', name: 'Sneha Joshi',   phone: '9545678901', email: 'sneha@email.com', brand: 'Asus',   model: 'VivoBook',    problem: 'Keyboard not working', service: 'Shop Visit', status: 'Pending', date: '2026-03-06' },
  ],
};

const DatabaseContext = createContext();

export const DatabaseProvider = ({ children }) => {
  const [db, setDb] = useState(() => {
    try {
      const saved = localStorage.getItem(DB_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        
        // Force sync new services/categories over old localStorage data
        parsed.services = defaultDB.services.map(ds => {
          const existing = (parsed.services || []).find(s => s.id === ds.id);
          return existing ? { ...ds, price: existing.price } : ds;
        });

        // Force sync parts to grab new categories + new items while keeping prices
        // Overwriting inStock with defaultDB to flush user's cache as per explicit request to be Out of Stock
        if (parsed.parts) {
          const mergedParts = { ...defaultDB.parts };
          Object.keys(defaultDB.parts).forEach(cat => {
            mergedParts[cat] = defaultDB.parts[cat].map(dp => {
              const existing = (parsed.parts[cat] || []).find(p => p.id === dp.id);
              // Force entirely use new inStock status from default DB (false) instead of cached values
              return existing ? { ...dp, price: existing.price, inStock: dp.inStock } : dp;
            });
          });
          parsed.parts = mergedParts;
        }

        return { ...defaultDB, ...parsed, services: parsed.services, parts: parsed.parts || defaultDB.parts };
      }
      return defaultDB;
    } catch { return defaultDB; }
  });

  useEffect(() => {
    localStorage.setItem(DB_KEY, JSON.stringify(db));
  }, [db]);

  const login = (user, pass) => {
    if (user === db.auth.username && pass === db.auth.password) {
      setDb(prev => ({ ...prev, auth: { ...prev.auth, isLoggedIn: true } }));
      return true;
    }
    return false;
  };

  const logout = () => setDb(prev => ({ ...prev, auth: { ...prev.auth, isLoggedIn: false } }));

  const updatePartPrice = (category, id, newPrice) => {
    setDb(prev => ({
      ...prev,
      parts: {
        ...prev.parts,
        [category]: prev.parts[category].map(p => p.id === id ? { ...p, price: Number(newPrice) } : p),
      },
    }));
  };

  const updatePartStock = (category, id, inStock) => {
    setDb(prev => ({
      ...prev,
      parts: {
        ...prev.parts,
        [category]: prev.parts[category].map(p => p.id === id ? { ...p, inStock } : p),
      },
    }));
  };

  const updateServicePrice = (id, newPrice) => {
    setDb(prev => ({
      ...prev,
      services: prev.services.map(s => s.id === id ? { ...s, price: Number(newPrice) } : s),
    }));
  };

  const addBooking = (booking) => {
    const id = 'BK' + String(db.bookings.length + 1).padStart(3, '0');
    const newBooking = { ...booking, id, status: 'Pending', date: new Date().toISOString().split('T')[0] };
    setDb(prev => ({ ...prev, bookings: [newBooking, ...prev.bookings] }));
    return id;
  };

  const updateBookingStatus = (id, status) => {
    setDb(prev => ({
      ...prev,
      bookings: prev.bookings.map(b => b.id === id ? { ...b, status } : b),
    }));
  };

  return (
    <DatabaseContext.Provider value={{ db, login, logout, updatePartPrice, updatePartStock, updateServicePrice, addBooking, updateBookingStatus }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDB = () => useContext(DatabaseContext);
