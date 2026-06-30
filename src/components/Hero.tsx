import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/cafe_interior_1782837348654.jpg" 
          alt="Yegesha Coffee Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest/40 backdrop-brightness-75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="text-white font-serif text-3xl sm:text-4xl md:text-7xl tracking-tight leading-tight mb-10 italic px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Ethiopian Heritage <br />
          <span className="not-italic text-gold">In Every Sip</span>
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a 
            href="#menu" 
            className="w-full md:w-auto bg-gold text-forest-dark px-12 py-4 rounded-full font-sans text-xs font-bold tracking-prestige hover:bg-white transition-all duration-500"
          >
            Discover Menu
          </a>
          <a 
            href="#story" 
            className="w-full md:w-auto border border-white/40 text-white px-12 py-4 rounded-full font-sans text-xs font-bold tracking-prestige hover:bg-white/10 backdrop-blur-sm transition-all duration-500"
          >
            The Heritage
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/60 font-display text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
