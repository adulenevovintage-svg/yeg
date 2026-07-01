import { motion } from 'motion/react';

export default function Logo({ className = "", inverted = false }: { className?: string; inverted?: boolean }) {
  const textColor = inverted ? "text-white/10" : "text-forest/5";
  
  return (
    <motion.div 
      className={`relative flex flex-col group ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileHover="hover"
    >
      {/* Background Text "Behind" the logo */}
      <motion.div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden`}
        variants={{
          hover: { scale: 1.1, opacity: 0.2 }
        }}
      >
        <span className={`font-serif text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-opacity ${textColor}`}>
          Yegesha
        </span>
      </motion.div>

      {/* Interactive Logo Image */}
      <motion.div 
        className="relative z-10 w-24 md:w-32 h-auto"
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        variants={{
          hover: { scale: 1.05 }
        }}
      >
        <img 
          src="https://user15514.na.imgto.link/public/20260630/yogo.avif" 
          alt="Yegesha Coffee Logo" 
          className={`w-full h-auto object-contain transition-all duration-500 ${inverted ? 'invert mix-blend-screen' : 'mix-blend-multiply'} group-hover:drop-shadow-[0_10px_20px_rgba(197,160,89,0.4)]`}
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </motion.div>
  );
}
