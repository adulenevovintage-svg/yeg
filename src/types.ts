export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  featured?: boolean;
  ingredients?: string[];
}

export interface OrderItem extends MenuItem {
  quantity: number;
}

export type MenuCategory = 
  | 'Signature Ethiopian Coffee' 
  | 'Espresso' 
  | 'Milk Based Espresso' 
  | 'Iced Coffee' 
  | 'Brewed Coffee' 
  | 'Tea' 
  | 'Breakfast' 
  | 'Desserts';

export interface Section {
  id: MenuCategory;
  title: string;
  items: MenuItem[];
}
