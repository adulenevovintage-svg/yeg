import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useOrder } from '../OrderContext';
import { Receipt, X, Plus, Minus, Trash2, ChevronUp } from 'lucide-react';

export default function BillCalculator() {
  const { order, total, updateQuantity, removeFromOrder, clearOrder } = useOrder();
  const [isOpen, setIsOpen] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (order.length === 0 && !isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-forest text-gold p-3 md:p-4 rounded-full shadow-2xl flex items-center gap-2 md:gap-3 border border-gold/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        <Receipt size={20} className="md:w-6 md:h-6" />
        <span className="font-sans font-bold text-[10px] md:text-xs tracking-widest uppercase pr-1 md:pr-2">
          Your Bill ({total} ETB)
        </span>
      </motion.button>

      {/* Bill Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-forest/40 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col border-l border-gold/20"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-8 border-b border-gold/10 flex items-center justify-between bg-forest text-gold">
                <div className="flex items-center gap-3">
                  <Receipt size={24} />
                  <h3 className="font-serif text-2xl italic">Current Bill</h3>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 space-y-6">
                {order.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-forest/40 font-serif italic">Your selection is empty</p>
                  </div>
                ) : (
                  order.map((item) => (
                    <motion.div 
                      key={item.id} 
                      className="flex items-center gap-4 bg-white/50 p-4 rounded-xl border border-gold/10"
                      layout
                    >
                      {item.image && (
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex-grow">
                        <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-forest">{item.name}</h4>
                        <p className="font-serif text-gold text-sm">{item.price} ETB</p>
                      </div>
                      <div className="flex items-center gap-3 bg-cream rounded-full border border-gold/20 p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 flex items-center justify-center hover:text-gold transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-sans text-xs font-bold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center hover:text-gold transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromOrder(item.id)}
                        className="text-forest/20 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </motion.div>
                  ))
                )}
              </div>

              <div className="p-8 bg-forest text-cream border-t border-gold/20">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-sans text-sm tracking-widest uppercase opacity-60">Total Amount</span>
                  <span className="font-serif text-3xl text-gold">{total} ETB</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={clearOrder}
                    className="py-4 rounded-full border border-gold/30 font-sans text-[10px] font-bold tracking-prestige uppercase hover:bg-white/5 transition-colors"
                  >
                    Reset
                  </button>
                  <button 
                    onClick={() => setShowReceipt(true)}
                    disabled={order.length === 0}
                    className="py-4 rounded-full bg-gold text-forest font-sans text-[10px] font-bold tracking-prestige uppercase hover:bg-white transition-all disabled:opacity-50"
                  >
                    View Receipt
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Receipt Modal */}
      <AnimatePresence>
        {showReceipt && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-forest/80 backdrop-blur-md" onClick={() => setShowReceipt(false)} />
            
            <motion.div
              className="relative w-full max-w-lg bg-cream p-8 md:p-12 shadow-2xl rounded-sm print:p-0 print:shadow-none border border-gold/20"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <button 
                onClick={() => setShowReceipt(false)}
                className="absolute top-4 right-4 text-forest/40 hover:text-forest print:hidden"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-8 border-b-2 border-forest pb-8">
                <img 
                  src="https://user15514.na.imgto.link/public/20260630/yogo.avif" 
                  alt="Yegesha Logo" 
                  className="w-24 mx-auto mb-4"
                  referrerPolicy="no-referrer"
                />
                <h2 className="font-serif text-2xl uppercase tracking-widest mb-1">Yegesha Coffee</h2>
                <p className="text-[10px] font-sans tracking-prestige uppercase opacity-60">Addis Ababa, Ethiopia</p>
                <p className="text-[10px] font-sans uppercase opacity-40 mt-1">{new Date().toLocaleString()}</p>
              </div>

              <div className="space-y-4 mb-8">
                {order.map(item => (
                  <div key={item.id} className="flex justify-between items-end gap-4">
                    <div className="flex-grow border-b border-dotted border-forest/20 pb-1">
                      <span className="font-sans text-xs font-bold uppercase">{item.name}</span>
                      <span className="text-[10px] ml-2 opacity-60">x {item.quantity}</span>
                    </div>
                    <span className="font-serif text-sm">{item.price * item.quantity} ETB</span>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-forest pt-6 space-y-3">
                <div className="flex justify-between font-sans text-[10px] tracking-widest uppercase opacity-60">
                  <span>Subtotal</span>
                  <span>{total} ETB</span>
                </div>
                <div className="flex justify-between font-sans text-[10px] tracking-widest uppercase opacity-60">
                  <span>Tax (Included)</span>
                  <span>0.00 ETB</span>
                </div>
                <div className="flex justify-between font-serif text-3xl pt-4 border-t border-forest/10">
                  <span>Total</span>
                  <span className="text-forest font-bold">{total} ETB</span>
                </div>

                {/* Settlement Accounts */}
                <div className="mt-10 pt-8 border-t border-forest space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-[1px] flex-grow bg-forest/20" />
                    <span className="font-sans text-[10px] font-bold tracking-prestige uppercase text-forest">Settlement Methods</span>
                    <div className="h-[1px] flex-grow bg-forest/20" />
                  </div>
                  
                  <div className="grid gap-2">
                    {[
                      { label: 'Telebirr', value: '+2519627862', id: 'tele' },
                      { label: 'CBE Account', value: '100000000076', id: 'cbe' },
                      { label: 'BOA Account', value: '6451456452455252', id: 'boa' }
                    ].map((acc) => (
                      <motion.button
                        key={acc.id}
                        onClick={() => handleCopy(acc.value, acc.id)}
                        className="flex justify-between items-center p-3 rounded-lg bg-forest/5 hover:bg-forest hover:text-gold transition-all duration-300 group/acc text-left"
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex flex-col">
                          <span className="font-sans text-[8px] font-bold tracking-widest uppercase opacity-60 group-hover/acc:opacity-100">{acc.label}</span>
                          <span className="font-mono text-[11px] font-bold">{acc.value}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[8px] font-bold uppercase transition-opacity ${copiedId === acc.id ? 'opacity-100' : 'opacity-0'}`}>
                            Copied
                          </span>
                          <ChevronUp size={14} className="rotate-90 opacity-40 group-hover/acc:opacity-100" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                  <p className="text-[9px] text-center font-serif italic opacity-40 mt-4">Tap any account to copy for payment</p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="font-serif italic text-sm opacity-60 mb-8">Thank you for visiting Gorigesha Heritage.</p>
                <button 
                  onClick={handlePrint}
                  className="bg-forest text-gold px-8 py-3 rounded-full font-sans text-[10px] font-bold tracking-prestige uppercase hover:bg-gold hover:text-forest transition-all print:hidden"
                >
                  Print Receipt
                </button>
              </div>

              {/* Receipt Decoration */}
              <div className="absolute -bottom-2 left-0 right-0 h-4 flex gap-1 overflow-hidden pointer-events-none">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-cream rotate-45 flex-shrink-0 -translate-y-2 border border-forest/10" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
