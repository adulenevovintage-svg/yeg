import { motion } from 'motion/react';
import { Leaf, Award, MapPin, Coffee } from 'lucide-react';

export default function BrandStory() {
  return (
    <section id="story" className="py-24 px-6 md:px-12 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-gold font-display text-sm tracking-[0.3em] uppercase mb-4">The Heritage</p>
            <h2 className="text-forest font-serif text-4xl md:text-5xl leading-tight mb-8">
              Born from the forests <br /> of Gorigesha
            </h2>
            <p className="text-forest/80 font-sans text-lg leading-relaxed mb-8">
              Yegesha Coffee brings one of Ethiopia's rarest Arabica coffees directly from farm to cup. 
              Our beans are sourced directly from our own farm in the Gorigesha Forest, hand-selected, 
              and traceable from origin.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-forest/5 rounded-full flex items-center justify-center text-forest flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold mb-1 uppercase tracking-wider">Traceability</h4>
                  <p className="text-forest/70 text-sm">Directly from our micro-roastery in Addis Ababa.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-forest/5 rounded-full flex items-center justify-center text-forest flex-shrink-0">
                  <Coffee size={20} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold mb-1 uppercase tracking-wider">Precision</h4>
                  <p className="text-forest/70 text-sm">Brewed using the La Marzocco Strada AV Group 3.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-forest/5 rounded-full flex items-center justify-center text-forest flex-shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold mb-1 uppercase tracking-wider">Specialty</h4>
                  <p className="text-forest/70 text-sm">Hand-selected beans, slow roasted for character.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-forest/5 rounded-full flex items-center justify-center text-forest flex-shrink-0">
                  <Leaf size={20} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold mb-1 uppercase tracking-wider">Natural</h4>
                  <p className="text-forest/70 text-sm">Organic Gesha heritage from the forest farm.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative group">
            <motion.div 
              className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img 
                src="/images/espresso_machine_detail_1782837371472.jpg" 
                alt="La Marzocco Strada AV" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-20 bg-forest p-6 md:p-8 rounded-2xl shadow-2xl max-w-[240px] md:max-w-xs border border-gold/20">
              <p className="font-serif italic text-gold text-base md:text-lg leading-snug">
                "Quality in every cup, from our forest to your table."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
