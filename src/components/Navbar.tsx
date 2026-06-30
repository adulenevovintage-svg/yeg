import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <div className="flex-1 hidden md:flex items-center justify-end pr-12">
        <a href="#menu" className="font-sans text-[11px] font-bold tracking-prestige hover:text-gold transition-colors">Menu</a>
      </div>

      <div className="flex-shrink-0 mx-auto md:mx-0">
        <Logo className={scrolled ? "scale-75 transition-transform" : ""} />
      </div>

      <div className="flex-1 hidden md:flex items-center justify-start pl-12">
        <a href="#story" className="font-sans text-[11px] font-bold tracking-prestige hover:text-gold transition-colors">Heritage</a>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden p-2 text-forest"
        onClick={() => setMobileMenuOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-forest z-[60] flex flex-col items-center justify-center p-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <button 
              className="absolute top-8 right-8 text-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <Logo inverted className="mb-16" />

            <div className="flex flex-col items-center gap-12">
              <a 
                href="#menu" 
                className="font-serif italic text-4xl text-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                The Selection
              </a>
              <a 
                href="#story" 
                className="font-serif italic text-4xl text-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Heritage
              </a>
            </div>

            <div className="mt-24 pt-12 border-t border-gold/20 w-full text-center">
              <p className="font-sans text-[10px] tracking-prestige text-gold/40 uppercase">Addis Ababa, Ethiopia</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
