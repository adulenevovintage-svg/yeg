import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useMenu } from '../MenuContext';
import { Settings, X, Lock, LogOut, CheckCircle2 } from 'lucide-react';

export default function AdminPanel() {
  const { isAdmin, login, logout, resetMenu } = useMenu();
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      setPassword('');
      setError('');
      setIsOpen(false);
    } else {
      setError('Invalid Access Key');
    }
  };

  return (
    <>
      {/* Settings Toggle */}
      <motion.button
        className={`fixed top-6 right-6 z-[70] p-3 rounded-full shadow-lg transition-all duration-500 flex items-center justify-center
          ${isAdmin 
            ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)] animate-spin-slow' 
            : 'bg-forest/80 backdrop-blur-sm text-gold border border-gold/20 hover:bg-gold hover:text-forest'
          }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => isAdmin ? logout() : setIsOpen(true)}
        title={isAdmin ? "Exit Admin Mode" : "Admin Settings"}
      >
        {isAdmin ? <LogOut size={20} /> : <Settings size={20} />}
      </motion.button>

      {/* Login Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-[80] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-forest/40 backdrop-blur-md" onClick={() => setIsOpen(false)} />
            
            <motion.div 
              className="relative bg-cream p-10 rounded-2xl shadow-2xl border border-gold/20 w-full max-w-sm"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-forest/40 hover:text-forest"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="text-gold" size={32} />
                </div>
                <h2 className="font-serif text-2xl italic text-forest">Heritage Access</h2>
                <p className="text-[10px] font-sans tracking-prestige uppercase text-forest/40 mt-1">Authorized Personnel Only</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Security Key"
                    className="w-full bg-white border border-gold/20 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors text-center font-mono"
                    autoFocus
                  />
                  {error && <p className="text-red-500 text-[10px] text-center mt-2 font-sans font-bold uppercase tracking-widest">{error}</p>}
                </div>

                <button 
                  type="submit"
                  className="w-full bg-forest text-gold py-4 rounded-xl font-sans text-[10px] font-bold tracking-prestige uppercase hover:bg-gold hover:text-forest transition-all"
                >
                  Verify Access
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin HUD */}
      <AnimatePresence>
        {isAdmin && (
          <motion.div 
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[70] flex items-center gap-3"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <div className="bg-red-500/90 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 shadow-lg flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white font-sans text-[9px] font-bold tracking-[0.2em] uppercase">Admin Mode Active</span>
            </div>
            
            <button 
              onClick={() => {
                if (window.confirm("Are you sure you want to reset all menu items and image paths to the latest defaults?")) {
                  resetMenu();
                }
              }}
              className="bg-forest/90 backdrop-blur-md text-gold px-4 py-2.5 rounded-full border border-gold/20 hover:bg-gold hover:text-forest transition-all text-[9px] font-bold uppercase tracking-[0.2em] shadow-lg pointer-events-auto"
            >
              Reset Menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
