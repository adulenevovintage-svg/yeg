import { MenuItem, Section } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Signature Ethiopian Coffee
  {
    id: 'sig-1',
    name: 'Gesha Coffee',
    description: 'Rare Ethiopian Gesha Arabica, sourced from our Gorigesha Forest farm. Floral notes with a clean, elegant finish.',
    price: 850,
    category: 'Signature Ethiopian Coffee',
    featured: true,
    image: 'https://user15514.na.imgto.link/public/20260630/macch.avif'
  },
  {
    id: 'sig-2',
    name: 'Single Origin Coffee',
    description: 'Directly sourced specialty beans, micro-roasted in Addis Ababa for peak flavor profile.',
    price: 750,
    category: 'Signature Ethiopian Coffee',
    image: 'https://user15514.na.imgto.link/public/20260630/macch.avif'
  },
  {
    id: 'sig-3',
    name: 'Specialty Brew',
    description: 'Our barista\'s selection of the finest seasonal harvest, prepared with precision.',
    price: 800,
    category: 'Signature Ethiopian Coffee',
    image: 'https://user15514.na.imgto.link/public/20260630/macch.avif'
  },

  // Espresso
  {
    id: 'esp-1',
    name: 'Espresso',
    description: 'Rich and balanced extraction using our La Marzocco Strada AV.',
    price: 600,
    category: 'Espresso',
    image: '/images/espresso_shot_macro_1782846644927.jpg'
  },
  {
    id: 'esp-2',
    name: 'Ristretto',
    description: 'Short, intense shot of espresso with deep floral complexity.',
    price: 600,
    category: 'Espresso',
    image: 'https://user15514.na.imgto.link/public/20260630/cora.avif'
  },

  // Milk Based Espresso
  {
    id: 'milk-1',
    name: 'Macchiato',
    description: 'Espresso "marked" with a dollop of silky steamed milk.',
    price: 650,
    category: 'Milk Based Espresso',
    image: 'https://user15514.na.imgto.link/public/20260630/macch.avif'
  },
  {
    id: 'milk-2',
    name: 'Cortado',
    description: 'Equal parts espresso and warm milk to reduce acidity.',
    price: 680,
    category: 'Milk Based Espresso',
    image: 'https://user15514.na.imgto.link/public/20260630/cora.avif'
  },
  {
    id: 'milk-3',
    name: 'Cappuccino',
    description: 'Classic balance of espresso, steamed milk, and airy foam.',
    price: 720,
    category: 'Milk Based Espresso',
    image: 'https://user15514.na.imgto.link/public/20260630/macch.avif'
  },
  {
    id: 'milk-4',
    name: 'Latte',
    description: 'Smooth and creamy espresso with a light layer of micro-foam.',
    price: 750,
    category: 'Milk Based Espresso',
    image: 'https://user15514.na.imgto.link/public/20260630/macch.avif'
  },
  {
    id: 'milk-5',
    name: 'Flat White',
    description: 'Velvety micro-foam poured over a double shot of espresso.',
    price: 750,
    category: 'Milk Based Espresso',
    image: 'https://user15514.na.imgto.link/public/20260630/macch.avif'
  },

  // Iced Coffee
  {
    id: 'iced-1',
    name: 'Iced Caramel Latte',
    description: 'Chilled espresso and milk with house-made caramel syrup over ice.',
    price: 780,
    category: 'Iced Coffee',
    image: 'https://user15514.na.imgto.link/public/20260630/macch.avif'
  },

  // Brewed Coffee
  {
    id: 'brew-1',
    name: 'Filter Coffee',
    description: 'Batch brewed specialty coffee, perfect for experiencing clear flavor notes.',
    price: 650,
    category: 'Brewed Coffee',
    image: 'https://user15514.na.imgto.link/public/20260630/macch.avif'
  },
  {
    id: 'brew-2',
    name: 'Pour Over',
    description: 'Hand-brewed precision coffee highlighting the delicate floral acidity of Gesha.',
    price: 820,
    category: 'Brewed Coffee',
    image: 'https://user15514.na.imgto.link/public/20260630/macch.avif'
  },

  // Tea
  {
    id: 'tea-1',
    name: 'Premium Tea',
    description: 'Selection of fine loose-leaf teas from local and international origins.',
    price: 600,
    category: 'Tea',
    image: 'https://user15514.na.imgto.link/public/20260630/tea.avif'
  },

  // Breakfast
  {
    id: 'bf-1',
    name: 'Chicken Pesto Crepe',
    description: 'Savory crepe filled with tender chicken, house-made pesto, and melted cheese.',
    price: 850,
    category: 'Breakfast',
    image: 'https://user15514.na.imgto.link/public/20260630/cora.avif'
  },
  {
    id: 'bf-2',
    name: 'Teff Egg Crepe with Avocado',
    description: 'Authentic Ethiopian teff crepe with fluffy eggs and fresh sliced avocado.',
    price: 780,
    category: 'Breakfast',
    image: 'https://user15514.na.imgto.link/public/20260630/cora.avif'
  },
  {
    id: 'bf-3',
    name: 'Croissant',
    description: 'Buttery, flaky traditional pastry baked fresh daily.',
    price: 620,
    category: 'Breakfast',
    image: 'https://user15514.na.imgto.link/public/20260630/cora.avif'
  },

  // Desserts
  {
    id: 'ds-1',
    name: 'Sweet Crepes',
    description: 'Thin crepes served with chocolate hazelnut spread or seasonal fruit.',
    price: 750,
    category: 'Desserts',
    image: 'https://user15514.na.imgto.link/public/20260630/cora.avif'
  },
  {
    id: 'ds-2',
    name: 'Specialty Pastries',
    description: 'Daily selection of artisanal desserts from our pastry chef.',
    price: 680,
    category: 'Desserts',
    image: 'https://user15514.na.imgto.link/public/20260630/cora.avif'
  }
];

export const MENU_SECTIONS: Section[] = [
  {
    id: 'Signature Ethiopian Coffee',
    title: 'Signature Coffee',
    items: MENU_ITEMS.filter(item => item.category === 'Signature Ethiopian Coffee')
  },
  {
    id: 'Espresso',
    title: 'Espresso',
    items: MENU_ITEMS.filter(item => item.category === 'Espresso')
  },
  {
    id: 'Milk Based Espresso',
    title: 'Milk Based',
    items: MENU_ITEMS.filter(item => item.category === 'Milk Based Espresso')
  },
  {
    id: 'Iced Coffee',
    title: 'Iced Coffee',
    items: MENU_ITEMS.filter(item => item.category === 'Iced Coffee')
  },
  {
    id: 'Brewed Coffee',
    title: 'Brewed Coffee',
    items: MENU_ITEMS.filter(item => item.category === 'Brewed Coffee')
  },
  {
    id: 'Tea',
    title: 'Tea',
    items: MENU_ITEMS.filter(item => item.category === 'Tea')
  },
  {
    id: 'Breakfast',
    title: 'Breakfast',
    items: MENU_ITEMS.filter(item => item.category === 'Breakfast')
  },
  {
    id: 'Desserts',
    title: 'Desserts',
    items: MENU_ITEMS.filter(item => item.category === 'Desserts')
  }
];
