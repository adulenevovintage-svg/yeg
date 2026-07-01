import { motion } from 'motion/react';
import { MenuItem } from '../types';
import { useState, Key } from 'react';
import { useOrder } from '../OrderContext';
import { useMenu } from '../MenuContext';
import { Plus, Edit2, Save, Trash2, X, Image as ImageIcon } from 'lucide-react';

export default function MenuItemCard({ item }: { item: MenuItem, key?: Key }) {
  const { addToOrder } = useOrder();
  const { isAdmin, updateItem, removeItem } = useMenu();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(item);

  const handleSave = () => {
    updateItem(editData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <motion.div 
        className="bg-white p-6 rounded-xl shadow-xl border-2 border-gold flex flex-col gap-4 z-20"
        layout
      >
        <div className="flex justify-between items-center mb-2">
          <span className="font-sans text-[9px] font-bold tracking-prestige uppercase text-gold">Edit Item</span>
          <button onClick={() => setIsEditing(false)} className="text-forest/40 hover:text-forest">
            <X size={16} />
          </button>
        </div>

        <input 
          value={editData.name}
          onChange={e => setEditData({...editData, name: e.target.value})}
          className="w-full p-2 border border-gold/20 rounded font-sans text-sm"
          placeholder="Item Name"
        />
        
        <textarea 
          value={editData.description}
          onChange={e => setEditData({...editData, description: e.target.value})}
          className="w-full p-2 border border-gold/20 rounded font-sans text-xs h-20"
          placeholder="Description"
        />

        <input 
          value={editData.ingredients?.join(', ') || ''}
          onChange={e => setEditData({...editData, ingredients: e.target.value.split(',').map(s => s.trim())})}
          className="w-full p-2 border border-gold/20 rounded font-sans text-[10px]"
          placeholder="Ingredients (comma separated)"
        />

        <div className="flex gap-2">
          <input 
            type="number"
            value={editData.price}
            onChange={e => setEditData({...editData, price: Number(e.target.value)})}
            className="w-1/2 p-2 border border-gold/20 rounded font-sans text-sm"
            placeholder="Price (ETB)"
          />
          <div className="w-1/2 flex items-center gap-2 px-2 border border-gold/20 rounded bg-cream/50">
            <ImageIcon size={14} className="text-gold" />
            <input 
              value={editData.image || ''}
              onChange={e => setEditData({...editData, image: e.target.value})}
              className="w-full bg-transparent font-sans text-[9px] focus:outline-none"
              placeholder="Image URL"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button 
            onClick={() => removeItem(item.id)}
            className="flex-1 bg-red-50 text-red-500 py-3 rounded-xl font-sans text-[9px] font-bold tracking-prestige uppercase hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <Trash2 size={14} /> Delete
          </button>
          <button 
            onClick={handleSave}
            className="flex-1 bg-forest text-gold py-3 rounded-xl font-sans text-[9px] font-bold tracking-prestige uppercase hover:bg-gold hover:text-forest transition-all flex items-center justify-center gap-2"
          >
            <Save size={14} /> Save
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={`group bg-forest/5 backdrop-blur-sm rounded-xl p-6 shadow-sm transition-all duration-500 border flex flex-col h-full relative ${isAdmin ? 'border-red-500/30' : 'border-gold/10 hover:border-gold/30'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(27, 48, 34, 0.1)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {isAdmin && (
        <button 
          onClick={() => setIsEditing(true)}
          className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full shadow-lg z-10 hover:scale-110 transition-transform"
        >
          <Edit2 size={12} />
        </button>
      )}
      {item.image && (
        <div className="aspect-[16/10] rounded-lg overflow-hidden mb-6 border border-gold/10">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-forest group-hover:text-gold transition-colors">
          {item.name}
        </h4>
        <span className="font-serif italic text-gold text-lg">
          {item.price}
        </span>
      </div>
      
      <p className="text-forest/70 text-[11px] italic leading-relaxed mb-6 flex-grow font-serif">
        {item.description}
      </p>

      <div className="pt-4 border-t border-gold/20 flex items-center justify-between">
        <div className="flex flex-col">
          {item.featured ? (
            <span className="text-[9px] font-display uppercase tracking-prestige text-gold font-bold">
              Signature Selection
            </span>
          ) : (
            <span className="text-[9px] font-display uppercase tracking-widest text-forest/40">
              Specialty Grade
            </span>
          )}
        </div>
        
        <button 
          onClick={() => addToOrder(item)}
          className="bg-forest text-gold p-2 rounded-full hover:bg-gold hover:text-forest transition-all duration-300 shadow-md group/btn"
          title="Add to order"
        >
          <Plus size={16} className="group-hover/btn:rotate-90 transition-transform duration-300" />
        </button>
      </div>
    </motion.div>
  );
}
