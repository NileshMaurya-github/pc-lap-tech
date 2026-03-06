import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Laptop2, Lock, User, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useDB } from '../context/DatabaseContext';

export default function Login() {
  const { login } = useDB();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError('');
    await new Promise(r => setTimeout(r, 800));
    if (login(form.username, form.password)) { navigate('/admin'); }
    else { setError('Invalid credentials. Hint: admin / pclaptech@2024'); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%)' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="w-full max-w-md">
        <div className="surface-card rounded-3xl p-8" style={{ boxShadow: '0 20px 60px rgba(37,99,235,0.12)' }}>
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto mb-4"
              style={{ boxShadow: '0 8px 24px rgba(37,99,235,0.4)' }}>
              <Laptop2 size={30} className="text-white" />
            </div>
            <h1 className="font-display font-black text-2xl text-gray-900">Admin Portal</h1>
            <p className="text-slate-400 text-sm mt-1">PC LAP TECH · Secure Admin Access</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Username</label>
              <div className="relative">
                <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type="text" value={form.username} placeholder="admin"
                  onChange={e => setForm({ ...form, username: e.target.value })}
                  className="input pl-10" autoComplete="username" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input type={showPass ? 'text' : 'password'} value={form.password} placeholder="••••••••"
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  className="input pl-10 pr-10" autoComplete="current-password" />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-600 text-sm p-3.5 rounded-xl">
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5" /> {error}
              </motion.div>
            )}

            <button type="submit" disabled={loading} className="btn-blue w-full justify-center py-3.5 mt-2" style={{ borderRadius: '12px' }}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"/>
                  </svg>
                  Verifying...
                </span>
              ) : 'Sign In to Dashboard'}
            </button>
          </form>
          <p className="text-slate-400 text-xs text-center mt-6">Protected — authorized personnel only</p>
        </div>
      </motion.div>
    </div>
  );
}
