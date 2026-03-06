import React, { createContext, useState, useEffect, useContext } from 'react';

const DB_KEY = 'pclaptech_db';

const defaultDB = {
  auth: { isLoggedIn: false, username: 'admin', password: 'pclaptech@2024' },
  stats: { totalRevenue: 148500, totalBookings: 247, pendingRepairs: 18, completedRepairs: 229 },
  parts: {
    ram: [
      { id: 'ram-8gb',  name: '8GB DDR4 RAM',  price: 2499, inStock: true },
      { id: 'ram-16gb', name: '16GB DDR4 RAM', price: 4999, inStock: true },
      { id: 'ram-32gb', name: '32GB DDR4 RAM', price: 8999, inStock: false },
    ],
    ssd: [
      { id: 'ssd-128', name: '128GB SSD',  price: 1499, inStock: true },
      { id: 'ssd-256', name: '256GB SSD',  price: 2499, inStock: true },
      { id: 'ssd-512', name: '512GB SSD',  price: 3999, inStock: true },
      { id: 'ssd-1tb', name: '1TB SSD',    price: 7499, inStock: true },
    ],
    battery: [
      { id: 'batt-hp',      name: 'HP Battery',      price: 2799, inStock: true },
      { id: 'batt-dell',    name: 'Dell Battery',    price: 2999, inStock: true },
      { id: 'batt-lenovo',  name: 'Lenovo Battery',  price: 2899, inStock: true },
      { id: 'batt-asus',    name: 'Asus Battery',    price: 2699, inStock: false },
      { id: 'batt-acer',    name: 'Acer Battery',    price: 2599, inStock: true },
      { id: 'batt-mac',     name: 'MacBook Battery', price: 6999, inStock: true },
    ],
    display: [
      { id: 'disp-hd',  name: 'HD Screen (1366x768)',  price: 3499, inStock: true },
      { id: 'disp-fhd', name: 'Full HD Screen (1080p)', price: 5999, inStock: true },
      { id: 'disp-4k',  name: '4K UHD Screen',          price: 11999, inStock: false },
    ],
    other: [
      { id: 'kbd',       name: 'Keyboard Replacement', price: 1999, inStock: true },
      { id: 'charger',   name: 'Universal Charger',    price: 1299, inStock: true },
      { id: 'mobo',      name: 'Motherboard Repair',   price: 4999, inStock: true },
      { id: 'fan',       name: 'Cooling Fan',          price: 1499, inStock: true },
      { id: 'hinges',    name: 'Hinges Repair',        price: 999,  inStock: true },
      { id: 'touchpad',  name: 'Touchpad Replace',     price: 1799, inStock: false },
    ],
  },
  services: [
    { id: 'srv-screen',    name: 'Screen Replacement',       desc: 'Replace cracked or dead display panels with OEM-quality screens.',        price: 1999, category: 'Hardware' },
    { id: 'srv-keyboard',  name: 'Keyboard Repair',          desc: 'Fix stuck, missing, or unresponsive keys. Full keyboard replacement if needed.', price: 799, category: 'Hardware' },
    { id: 'srv-battery',   name: 'Battery Replacement',      desc: 'Restore full battery life with brand-matched, genuine cells.',            price: 999, category: 'Hardware' },
    { id: 'srv-charging',  name: 'Charging Port Repair',     desc: 'Fix broken, loose, or burnt charging ports quickly.',                     price: 599, category: 'Hardware' },
    { id: 'srv-mobo',      name: 'Motherboard Repair',       desc: 'Advanced chip-level component repair by certified technicians.',           price: 2999, category: 'Hardware' },
    { id: 'srv-water',     name: 'Water Damage Recovery',    desc: 'Emergency cleaning and component-level repair after liquid exposure.',     price: 1499, category: 'Hardware' },
    { id: 'srv-fan',       name: 'Fan & Cooling Repair',     desc: 'Stop overheating – clean, repair, or replace fans and thermal paste.',    price: 499, category: 'Hardware' },
    { id: 'srv-hinges',    name: 'Hinges Repair',            desc: 'Fix broken or stiff laptop hinges for smooth lid operation again.',        price: 799, category: 'Hardware' },
    { id: 'srv-software',  name: 'Software Installation',    desc: 'Install OS, drivers, and essential productivity software.',               price: 299, category: 'Software' },
    { id: 'srv-windows',   name: 'Windows Installation',     desc: 'Clean install of Windows 10 / 11 with all drivers and updates.',          price: 399, category: 'Software' },
    { id: 'srv-virus',     name: 'Virus Removal',            desc: 'Deep scan, cleanup, and protection setup against all malware.',           price: 349, category: 'Software' },
    { id: 'srv-upgrade',   name: 'Laptop Upgrade Services',  desc: 'Upgrade RAM, SSD, or display for a dramatically faster experience.',     price: 499, category: 'Upgrade' },
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
      return saved ? { ...defaultDB, ...JSON.parse(saved) } : defaultDB;
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
