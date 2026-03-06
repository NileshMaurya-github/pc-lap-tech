import React, { createContext, useState, useEffect, useContext } from 'react';

const PricingContext = createContext();

const defaultPricing = {
  ram: [
    { id: 'ram-8gb', name: '8GB RAM Upgrade', price: 2500 },
    { id: 'ram-16gb', name: '16GB RAM Upgrade', price: 4500 },
    { id: 'ram-32gb', name: '32GB RAM Upgrade', price: 8500 },
  ],
  ssd: [
    { id: 'ssd-128gb', name: '128GB SSD Upgrade', price: 1500 },
    { id: 'ssd-256gb', name: '256GB SSD Upgrade', price: 2500 },
    { id: 'ssd-512gb', name: '512GB SSD Upgrade', price: 4000 },
    { id: 'ssd-1tb', name: '1TB SSD Upgrade', price: 7500 },
  ],
  battery: [
    { id: 'batt-standard', name: 'Standard Laptop Battery', price: 3000 },
    { id: 'batt-macbook', name: 'MacBook Battery', price: 6500 },
  ],
  display: [
    { id: 'disp-standard', name: 'Standard Display Panel', price: 4500 },
    { id: 'disp-touch', name: 'Touchscreen Display Panel', price: 8500 },
  ]
};

export const PricingProvider = ({ children }) => {
  const [pricing, setPricing] = useState(() => {
    const saved = localStorage.getItem('pcLapTechPricing');
    return saved ? JSON.parse(saved) : defaultPricing;
  });

  useEffect(() => {
    localStorage.setItem('pcLapTechPricing', JSON.stringify(pricing));
  }, [pricing]);

  const updatePrice = (category, itemId, newPrice) => {
    setPricing(prev => {
      const updatedCategory = prev[category].map(item => 
        item.id === itemId ? { ...item, price: Number(newPrice) } : item
      );
      return { ...prev, [category]: updatedCategory };
    });
  };

  return (
    <PricingContext.Provider value={{ pricing, updatePrice }}>
      {children}
    </PricingContext.Provider>
  );
};

export const usePricing = () => useContext(PricingContext);
