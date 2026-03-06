import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, DollarSign, Package, BookOpen, Users as UsersIcon,
  TrendingUp, Clock, CheckCircle2, XCircle, LogOut, Edit3, Save, Cpu, HardDrive, Battery, Monitor, Wrench, Menu
} from 'lucide-react';
import { useDB } from '../context/DatabaseContext';
import { useNavigate } from 'react-router-dom';

const TABS = [
  { key: 'overview',  label: 'Overview',         icon: LayoutDashboard },
  { key: 'services',  label: 'Service Prices',    icon: DollarSign },
  { key: 'parts',     label: 'Parts & Inventory', icon: Package },
  { key: 'bookings',  label: 'Bookings',          icon: BookOpen },
  { key: 'customers', label: 'Customers',         icon: UsersIcon },
];

const partIcons  = { ram: Cpu, ssd: HardDrive, battery: Battery, display: Monitor, other: Wrench };
const partLabels = { ram: 'RAM', ssd: 'SSD', battery: 'Battery', display: 'Display', other: 'Other' };

const statusStyle = {
  Pending:      { bg: 'bg-amber-50',  text: 'text-amber-700',  border: 'border-amber-200' },
  'In Progress': { bg: 'bg-blue-50',   text: 'text-blue-700',   border: 'border-blue-200' },
  Completed:    { bg: 'bg-green-50',  text: 'text-green-700',  border: 'border-green-200' },
};

function Stat({ icon: Icon, label, value, color }) {
  return (
    <div className="surface-card rounded-2xl p-6">
      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-4`}>
        <Icon size={18} className="text-white" />
      </div>
      <p className="text-slate-400 text-sm mb-0.5">{label}</p>
      <p className="font-display font-black text-2xl text-gray-900">{value}</p>
    </div>
  );
}

export default function Admin() {
  const { db, logout, updatePartPrice, updatePartStock, updateServicePrice, updateBookingStatus } = useDB();
  const navigate = useNavigate();
  const [tab, setTab]           = useState('overview');
  const [editSvc, setEditSvc]   = useState(null);
  const [editPart, setEditPart] = useState(null);
  const [tempPrice, setTemp]    = useState('');
  const [partCat, setPartCat]   = useState('ram');
  const [sidebar, setSidebar]   = useState(false);

  const handleLogout = () => { logout(); navigate('/admin-login'); };
  const startSvc  = s => { setEditSvc(s.id);  setTemp(String(s.price)); };
  const saveSvc   = id => { updateServicePrice(id, tempPrice); setEditSvc(null); };
  const startPart = p => { setEditPart(p.id); setTemp(String(p.price)); };
  const savePart  = id => { updatePartPrice(partCat, id, tempPrice); setEditPart(null); };

  const TH = ({ children }) => <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wider py-3.5 px-5">{children}</th>;
  const TD = ({ children, className = '' }) => <td className={`py-4 px-5 ${className}`}>{children}</td>;

  return (
    <div className="min-h-screen flex" style={{ background: '#f8fafc' }}>

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 flex flex-col transition-transform duration-300 ${sidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
        style={{ background: '#fff', borderRight: '1px solid #e2e8f0' }}>
        <div className="p-5" style={{ borderBottom: '1px solid #f1f5f9' }}>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
              <span className="text-white text-sm font-black">PC</span>
            </div>
            <div>
              <p className="font-display font-black text-gray-900 text-sm">PC LAP TECH</p>
              <p className="text-slate-400 text-xs">Admin Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          {TABS.map(t => (
            <button key={t.key} onClick={() => { setTab(t.key); setSidebar(false); }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                tab === t.key ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}>
              <t.icon size={16} /> {t.label}
            </button>
          ))}
        </nav>

        <div className="p-3" style={{ borderTop: '1px solid #f1f5f9' }}>
          <button onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {sidebar && <div className="fixed inset-0 z-40 bg-black/30 lg:hidden" onClick={() => setSidebar(false)} />}

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-auto">
        <header className="sticky top-0 z-30 px-5 py-4 flex items-center justify-between"
          style={{ background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebar(true)} className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:bg-slate-100">
              <Menu size={20} />
            </button>
            <div>
              <h1 className="font-display font-bold text-gray-900">{TABS.find(t => t.key === tab)?.label}</h1>
              <p className="text-slate-400 text-xs">PC LAP TECH Admin</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-slate-500 text-sm">Online</span>
          </div>
        </header>

        <main className="flex-1 p-5 md:p-6">

          {/* Overview */}
          {tab === 'overview' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Stat icon={TrendingUp}   label="Total Revenue"    value={`₹${db.stats.totalRevenue.toLocaleString('en-IN')}`} color="bg-green-500" />
                <Stat icon={BookOpen}     label="Total Bookings"   value={db.stats.totalBookings}    color="bg-blue-600" />
                <Stat icon={Clock}        label="Pending Repairs"  value={db.stats.pendingRepairs}   color="bg-amber-500" />
                <Stat icon={CheckCircle2} label="Completed"        value={db.stats.completedRepairs} color="bg-indigo-500" />
              </div>
              <div className="surface-card rounded-2xl overflow-hidden">
                <div className="px-5 py-4 flex justify-between items-center" style={{ borderBottom: '1px solid #f1f5f9', background: '#fafbff' }}>
                  <h3 className="font-semibold text-gray-900">Recent Bookings</h3>
                  <button onClick={() => setTab('bookings')} className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead style={{ background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                      <tr><TH>ID</TH><TH>Customer</TH><TH>Device</TH><TH>Status</TH></tr>
                    </thead>
                    <tbody>
                      {db.bookings.slice(0, 4).map(b => {
                        const s = statusStyle[b.status];
                        return (
                          <tr key={b.id} style={{ borderBottom: '1px solid #f8fafc' }} className="hover:bg-blue-50/30 transition-colors">
                            <TD><span className="font-mono text-xs text-slate-400">{b.id}</span></TD>
                            <TD><span className="font-medium text-gray-900">{b.name}</span></TD>
                            <TD><span className="text-slate-500">{b.brand} {b.model}</span></TD>
                            <TD><span className={`badge ${s.bg} ${s.text} border ${s.border}`}>{b.status}</span></TD>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Service Prices */}
          {tab === 'services' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="surface-card rounded-2xl overflow-hidden">
              <div className="px-5 py-4" style={{ borderBottom: '1px solid #f1f5f9', background: '#fafbff' }}>
                <h2 className="font-semibold text-gray-900">Edit Service Prices</h2>
                <p className="text-slate-400 text-sm mt-0.5">All changes reflect immediately on the website.</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead style={{ background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                    <tr><TH>Service</TH><TH>Category</TH><TH>Price (₹)</TH><TH>Action</TH></tr>
                  </thead>
                  <tbody>
                    {db.services.map(svc => (
                      <tr key={svc.id} style={{ borderBottom: '1px solid #f8fafc' }} className="hover:bg-slate-50 transition-colors">
                        <TD><span className="font-medium text-gray-900">{svc.name}</span></TD>
                        <TD><span className="text-slate-500">{svc.category}</span></TD>
                        <TD>
                          {editSvc === svc.id
                            ? <input type="number" value={tempPrice} onChange={e => setTemp(e.target.value)} autoFocus
                                className="w-28 px-3 py-1.5 rounded-lg border-2 border-blue-400 text-gray-900 text-sm focus:outline-none" />
                            : <span className="text-green-600 font-black text-lg">₹{svc.price.toLocaleString('en-IN')}</span>}
                        </TD>
                        <TD>
                          {editSvc === svc.id
                            ? <div className="flex gap-2">
                                <button onClick={() => saveSvc(svc.id)} className="flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 hover:bg-green-500 hover:text-white border border-green-300 px-3 py-1.5 rounded-lg transition-all"><Save size={12} /> Save</button>
                                <button onClick={() => setEditSvc(null)} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"><XCircle size={16} /></button>
                              </div>
                            : <button onClick={() => startSvc(svc)} className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-200 hover:border-blue-600 px-3 py-1.5 rounded-lg transition-all"><Edit3 size={12} /> Edit</button>}
                        </TD>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Parts */}
          {tab === 'parts' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {Object.keys(db.parts).map(cat => {
                  const Icon = partIcons[cat] || Package;
                  return (
                    <button key={cat} onClick={() => setPartCat(cat)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${partCat === cat ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'}`}>
                      <Icon size={14} /> {partLabels[cat]}
                    </button>
                  );
                })}
              </div>
              <motion.div key={partCat} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="surface-card rounded-2xl overflow-hidden">
                <div className="px-5 py-4" style={{ borderBottom: '1px solid #f1f5f9', background: '#fafbff' }}>
                  <h3 className="font-semibold text-gray-900">{partLabels[partCat]} Parts</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead style={{ background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                      <tr><TH>Part Name</TH><TH>Price (₹)</TH><TH>Stock Status</TH><TH>Action</TH></tr>
                    </thead>
                    <tbody>
                      {db.parts[partCat].map(part => (
                        <tr key={part.id} style={{ borderBottom: '1px solid #f8fafc' }} className="hover:bg-slate-50 transition-colors">
                          <TD><span className="font-medium text-gray-900">{part.name}</span></TD>
                          <TD>
                            {editPart === part.id
                              ? <input type="number" value={tempPrice} onChange={e => setTemp(e.target.value)} autoFocus
                                  className="w-28 px-3 py-1.5 rounded-lg border-2 border-blue-400 text-gray-900 text-sm focus:outline-none" />
                              : <span className="text-green-600 font-black text-lg">₹{part.price.toLocaleString('en-IN')}</span>}
                          </TD>
                          <TD>
                            <button onClick={() => updatePartStock(partCat, part.id, !part.inStock)}
                              className={`badge cursor-pointer hover:opacity-80 transition-opacity ${part.inStock ? 'badge-green' : 'badge-red'}`}>
                              {part.inStock ? <><CheckCircle2 size={11} /> In Stock</> : <><XCircle size={11} /> Out of Stock</>}
                            </button>
                          </TD>
                          <TD>
                            {editPart === part.id
                              ? <div className="flex gap-2">
                                  <button onClick={() => savePart(part.id)} className="flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 hover:bg-green-500 hover:text-white border border-green-300 px-3 py-1.5 rounded-lg transition-all"><Save size={12} /> Save</button>
                                  <button onClick={() => setEditPart(null)} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 transition-all"><XCircle size={16} /></button>
                                </div>
                              : <button onClick={() => startPart(part)} className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white border border-blue-200 hover:border-blue-600 px-3 py-1.5 rounded-lg transition-all"><Edit3 size={12} /> Edit Price</button>}
                          </TD>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Bookings */}
          {tab === 'bookings' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                {['Pending', 'In Progress', 'Completed'].map(s => {
                  const st = statusStyle[s]; const cnt = db.bookings.filter(b => b.status === s).length;
                  return (
                    <div key={s} className={`rounded-2xl p-5 border-2 ${st.bg} ${st.border}`}>
                      <p className={`text-xs font-semibold ${st.text} mb-1`}>{s}</p>
                      <p className="font-display font-black text-3xl text-gray-900">{cnt}</p>
                    </div>
                  );
                })}
              </div>
              <div className="surface-card rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead style={{ background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                      <tr><TH>ID</TH><TH>Customer</TH><TH>Device</TH><TH>Problem</TH><TH>Date</TH><TH>Status</TH><TH>Update</TH></tr>
                    </thead>
                    <tbody>
                      {db.bookings.map(b => {
                        const s = statusStyle[b.status];
                        return (
                          <tr key={b.id} style={{ borderBottom: '1px solid #f8fafc' }} className="hover:bg-slate-50 transition-colors">
                            <TD><span className="font-mono text-xs text-slate-400">{b.id}</span></TD>
                            <TD><p className="font-medium text-gray-900">{b.name}</p><p className="text-slate-400 text-xs">{b.phone}</p></TD>
                            <TD><span className="text-slate-600">{b.brand} {b.model}</span></TD>
                            <TD><span className="text-slate-400 max-w-[120px] block truncate">{b.problem}</span></TD>
                            <TD><span className="text-slate-400 text-xs">{b.date}</span></TD>
                            <TD><span className={`badge ${s.bg} ${s.text} border ${s.border}`}>{b.status}</span></TD>
                            <TD>
                              <select value={b.status} onChange={e => updateBookingStatus(b.id, e.target.value)}
                                className="text-xs px-2.5 py-1.5 rounded-lg border border-slate-200 text-gray-700 focus:outline-none focus:border-blue-400 bg-white">
                                <option>Pending</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                              </select>
                            </TD>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Customers */}
          {tab === 'customers' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="surface-card rounded-2xl overflow-hidden">
              <div className="px-5 py-4 flex justify-between" style={{ borderBottom: '1px solid #f1f5f9', background: '#fafbff' }}>
                <h2 className="font-semibold text-gray-900">All Customers</h2>
                <span className="text-slate-400 text-sm">{db.bookings.length} total</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead style={{ background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                    <tr><TH>Customer</TH><TH>Phone</TH><TH>Email</TH><TH>Device</TH><TH>Service</TH><TH>Status</TH></tr>
                  </thead>
                  <tbody>
                    {db.bookings.map(b => {
                      const s = statusStyle[b.status];
                      return (
                        <tr key={b.id} style={{ borderBottom: '1px solid #f8fafc' }} className="hover:bg-slate-50 transition-colors">
                          <TD>
                            <div className="flex items-center gap-2.5">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm flex-shrink-0">
                                {b.name.charAt(0)}
                              </div>
                              <span className="font-medium text-gray-900">{b.name}</span>
                            </div>
                          </TD>
                          <TD><span className="text-slate-600">{b.phone}</span></TD>
                          <TD><span className="text-slate-400">{b.email || '—'}</span></TD>
                          <TD><span className="text-slate-600">{b.brand} {b.model}</span></TD>
                          <TD><span className="text-slate-500">{b.service}</span></TD>
                          <TD><span className={`badge ${s.bg} ${s.text} border ${s.border}`}>{b.status}</span></TD>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

        </main>
      </div>
    </div>
  );
}
