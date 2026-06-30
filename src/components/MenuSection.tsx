import { motion, AnimatePresence } from 'motion/react';
import { Section, MenuItem } from '../types';
import MenuItemCard from './MenuItemCard';
import { useState, Key } from 'react';
import { useMenu } from '../MenuContext';
import { Plus, X, Save } from 'lucide-react';

export default function MenuSection({ section }: { section: Section, key?: Key }) {
  const { isAdmin, addItem } = useMenu();
  const [isAdding, setIsAdding] = useState(false);
  const [newItem, setNewItem] = useState<Partial<MenuItem>>({
    name: '',
    description: '',
    price: 0,
    category: section.title as any,
    image: '',
    featured: false,
    ingredients: []
  });

  const handleAdd = () => {
    if (!newItem.name || !newItem.price) return;
    const item: MenuItem = {
      ...newItem as MenuItem,
      id: `new-${Date.now()}`,
    };
    addItem(item);
    setIsAdding(false);
    setNewItem({
      name: '',
      description: '',
      price: 0,
      category: section.title as any,
      image: '',
      featured: false,
      ingredients: []
    });
  };

  if (section.items.length === 0 && !isAdmin) return null;

  return (
    <div className="mb-16 md:mb-24 px-2">
      <motion.div 
        className="mb-8 md:mb-12 flex items-center justify-between"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-serif italic text-xl md:text-2xl text-forest border-b border-gold pb-2 inline-block min-w-[150px] md:min-w-[200px]">
          {section.title}
        </h3>

        {isAdmin && (
          <button 
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-[9px] font-bold tracking-prestige uppercase hover:bg-red-600 transition-colors shadow-lg"
          >
            <Plus size={14} /> Add to {section.title}
          </button>
        )}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {section.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}

        {/* Add Item Form */}
        <AnimatePresence>
          {isAdding && (
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-xl border-2 border-red-500/50 flex flex-col gap-4 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <button 
                onClick={() => setIsAdding(false)}
                className="absolute top-2 right-2 text-forest/40 hover:text-forest"
              >
                <X size={16} />
              </button>

              <p className="font-sans text-[9px] font-bold tracking-prestige uppercase text-red-500 mb-2">New {section.title} Item</p>

              <input 
                value={newItem.name}
                onChange={e => setNewItem({...newItem, name: e.target.value})}
                className="w-full p-2 border border-gold/20 rounded font-sans text-sm"
                placeholder="Item Name"
                autoFocus
              />
              
              <textarea 
                value={newItem.description}
                onChange={e => setNewItem({...newItem, description: e.target.value})}
                className="w-full p-2 border border-gold/20 rounded font-sans text-xs h-20"
                placeholder="Description"
              />

              <input 
                value={newItem.ingredients?.join(', ') || ''}
                onChange={e => setNewItem({...newItem, ingredients: e.target.value.split(',').map(s => s.trim())})}
                className="w-full p-2 border border-gold/20 rounded font-sans text-[10px]"
                placeholder="Ingredients (comma separated)"
              />

              <div className="flex gap-2">
                <input 
                  type="number"
                  value={newItem.price || ''}
                  onChange={e => setNewItem({...newItem, price: Number(e.target.value)})}
                  className="w-1/2 p-2 border border-gold/20 rounded font-sans text-sm"
                  placeholder="Price (ETB)"
                />
                <input 
                  value={newItem.image || ''}
                  onChange={e => setNewItem({...newItem, image: e.target.value})}
                  className="w-1/2 p-2 border border-gold/20 rounded font-sans text-[9px]"
                  placeholder="Image URL"
                />
              </div>

              <button 
                onClick={handleAdd}
                className="w-full bg-forest text-gold py-4 rounded-xl font-sans text-[10px] font-bold tracking-prestige uppercase hover:bg-gold hover:text-forest transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Save size={14} /> Create Item
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
