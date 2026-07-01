import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MenuItem } from './types';
import { MENU_ITEMS as INITIAL_MENU_ITEMS } from './data';

interface MenuContextType {
  menuItems: MenuItem[];
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  updateItem: (item: MenuItem) => void;
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  resetMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const savedMenu = localStorage.getItem('yegesha_menu');
    if (savedMenu) {
      try {
        const parsed: MenuItem[] = JSON.parse(savedMenu);
        const migrated = parsed.map(item => {
          const defaultItem = INITIAL_MENU_ITEMS.find(i => i.id === item.id);
          if (defaultItem) {
            // Automatically update images of default items if they are local paths or old URLs
            if (item.image !== defaultItem.image) {
              return { ...item, image: defaultItem.image, name: defaultItem.name };
            }
          }
          return item;
        });
        setMenuItems(migrated);
      } catch (e) {
        setMenuItems(INITIAL_MENU_ITEMS);
      }
    } else {
      setMenuItems(INITIAL_MENU_ITEMS);
    }

    const adminSession = sessionStorage.getItem('yegesha_admin');
    if (adminSession === 'true') {
      setIsAdmin(true);
    }
  }, []);

  useEffect(() => {
    if (menuItems.length > 0) {
      localStorage.setItem('yegesha_menu', JSON.stringify(menuItems));
    }
  }, [menuItems]);

  const login = (password: string) => {
    if (password === 'yeg2018') {
      setIsAdmin(true);
      sessionStorage.setItem('yegesha_admin', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('yegesha_admin');
  };

  const updateItem = (updatedItem: MenuItem) => {
    setMenuItems(prev => prev.map(item => item.id === updatedItem.id ? updatedItem : item));
  };

  const addItem = (newItem: MenuItem) => {
    setMenuItems(prev => [...prev, newItem]);
  };

  const removeItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const resetMenu = () => {
    setMenuItems(INITIAL_MENU_ITEMS);
    localStorage.setItem('yegesha_menu', JSON.stringify(INITIAL_MENU_ITEMS));
  };

  return (
    <MenuContext.Provider value={{ menuItems, isAdmin, login, logout, updateItem, addItem, removeItem, resetMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}
