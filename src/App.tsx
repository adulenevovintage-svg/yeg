import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import MenuSection from './components/MenuSection';
import Footer from './components/Footer';
import BillCalculator from './components/BillCalculator';
import AdminPanel from './components/AdminPanel';
import { CheckCircle2 } from 'lucide-react';
import { OrderProvider } from './OrderContext';
import { MenuProvider, useMenu } from './MenuContext';
import { Section } from './types';

export default function App() {
  return (
    <MenuProvider>
      <OrderProvider>
        <AppContent />
      </OrderProvider>
    </MenuProvider>
  );
}

function AppContent() {
  const { menuItems } = useMenu();
  
  // Group menu items by category for the UI
  const sections: Section[] = [
    { id: 'Signature Ethiopian Coffee', title: 'Signature Ethiopian Coffee', items: menuItems.filter(i => i.category === 'Signature Ethiopian Coffee') },
    { id: 'Espresso', title: 'Espresso', items: menuItems.filter(i => i.category === 'Espresso') },
    { id: 'Milk Based Espresso', title: 'Milk Based Espresso', items: menuItems.filter(i => i.category === 'Milk Based Espresso') },
    { id: 'Brewed Coffee', title: 'Brewed Coffee', items: menuItems.filter(i => i.category === 'Brewed Coffee') },
    { id: 'Iced Coffee', title: 'Iced Coffee', items: menuItems.filter(i => i.category === 'Iced Coffee') },
    { id: 'Tea', title: 'Tea', items: menuItems.filter(i => i.category === 'Tea') },
    { id: 'Breakfast', title: 'Breakfast', items: menuItems.filter(i => i.category === 'Breakfast') },
    { id: 'Desserts', title: 'Desserts', items: menuItems.filter(i => i.category === 'Desserts') },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <BrandStory />

        {/* Highlights Section */}
        <section className="py-16 md:py-20 bg-forest text-gold overflow-hidden border-y border-gold/20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              {[
                "Rare Gesha Coffee",
                "Farm-to-Cup",
                "Specialty Experts",
                "Micro Roasted",
                "La Marzocco Craft",
                "Cozy Atmosphere",
                "Fresh Breakfast",
                "Premium Experience"
              ].map((highlight, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 border-l border-gold/20 pl-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="font-sans text-[9px] md:text-[10px] font-bold tracking-prestige uppercase">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-20 md:py-32 px-6 md:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <p className="text-gold font-sans text-xs tracking-prestige mb-4">The Selection</p>
              <h2 className="text-forest font-serif italic text-4xl md:text-7xl mb-6 md:mb-8">Specialty Menu</h2>
              <div className="w-16 md:w-24 h-[1px] bg-gold mx-auto mb-8 md:mb-12" />
              <p className="text-forest/70 max-w-2xl mx-auto leading-relaxed font-serif italic text-base md:text-lg px-4">
                Precision extraction via Strada AV Group 3 for consistent, <br className="hidden md:block" /> balanced flavor in every shot.
              </p>
            </div>

            {sections.map((section, index) => (
              <MenuSection key={index} section={section} />
            ))}
          </div>
        </section>

        {/* Closing Image/Quote Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/cafe_interior_1782837348654.jpg" 
              alt="Yegesha Café" 
              className="w-full h-full object-cover grayscale opacity-30"
            />
            <div className="absolute inset-0 bg-cream/90" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-3xl">
            <h3 className="font-serif text-2xl md:text-5xl text-forest leading-tight mb-8 italic">
              "We don't just serve coffee; we share the soul of the Gorigesha Forest."
            </h3>
            <div className="flex justify-center gap-2">
              {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-gold/30" />)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BillCalculator />
      <AdminPanel />
    </div>
  );
}
