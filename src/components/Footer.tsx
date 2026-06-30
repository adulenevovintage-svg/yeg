import Logo from './Logo';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          
          <div className="lg:col-span-1">
            <Logo inverted className="!items-start mb-8 scale-110 origin-left" />
            <p className="text-white/60 text-sm leading-relaxed mb-8 font-serif italic">
              Experience one of Ethiopia's finest specialty coffees, sourced directly from our farm in the Gorigesha Forest and roasted in our Addis Ababa micro-roastery.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 text-white">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[11px] font-bold mb-8 tracking-prestige text-gold">Location</h4>
            <ul className="space-y-4 text-[13px] text-white/60">
              <li className="flex gap-3">
                <MapPin size={16} className="text-gold flex-shrink-0" />
                <span>Addis Ababa, Ethiopia<br /><span className="italic opacity-50">Main Specialty Coffee Hub</span></span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <span>+251 (0) 91 123 4567</span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <span>hello@yegesha.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[11px] font-bold mb-8 tracking-prestige text-gold">Opening Hours</h4>
            <ul className="space-y-4 text-[13px] text-white/60 font-serif italic">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon - Fri</span>
                <span>7:00 - 21:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Saturday</span>
                <span>8:00 - 22:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sunday</span>
                <span>9:00 - 20:00</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[0.65rem] text-white/40 uppercase tracking-[0.2em]">
            © 2026 Yegesha Coffee. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[0.65rem] text-white/40 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
