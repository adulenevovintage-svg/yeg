import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem, OrderItem } from './types';

interface OrderContextType {
  order: OrderItem[];
  addToOrder: (item: MenuItem) => void;
  removeFromOrder: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearOrder: () => void;
  total: number;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addToOrder = (item: MenuItem) => {
    setOrder(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromOrder = (itemId: string) => {
    setOrder(prev => prev.filter(i => i.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromOrder(itemId);
      return;
    }
    setOrder(prev => prev.map(i => i.id === itemId ? { ...i, quantity } : i));
  };

  const clearOrder = () => setOrder([]);

  const total = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <OrderContext.Provider value={{ order, addToOrder, removeFromOrder, updateQuantity, clearOrder, total }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
}
