export interface FoodItem {
  id: string;
  name: string;
  price: number;
  category: 'Starters' | 'Main Course' | 'Beverages' | 'Desserts';
  image: string;
  description: string;
}

export const foodItems: FoodItem[] = [
  // Starters
  {
    id: '1',
    name: 'Caesar Salad',
    price: 8.99,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&q=80',
    description: 'Fresh romaine lettuce with parmesan and croutons'
  },
  {
    id: '2',
    name: 'Chicken Wings',
    price: 12.99,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&q=80',
    description: 'Crispy wings with your choice of sauce'
  },
  {
    id: '3',
    name: 'Bruschetta',
    price: 7.99,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80',
    description: 'Toasted bread with fresh tomatoes and basil'
  },

  // Main Course
  {
    id: '4',
    name: 'Grilled Salmon',
    price: 24.99,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=600&q=80',
    description: 'Fresh salmon with vegetables and lemon butter'
  },
  {
    id: '5',
    name: 'Beef Burger',
    price: 15.99,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    description: 'Juicy beef patty with cheese and special sauce'
  },
  {
    id: '6',
    name: 'Pasta Carbonara',
    price: 16.99,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80',
    description: 'Creamy pasta with bacon and parmesan'
  },
  {
    id: '7',
    name: 'Chicken Tikka',
    price: 18.99,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80',
    description: 'Marinated chicken in aromatic spices'
  },

  // Beverages
  {
    id: '8',
    name: 'Fresh Orange Juice',
    price: 5.99,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80',
    description: 'Freshly squeezed orange juice'
  },
  {
    id: '9',
    name: 'Iced Coffee',
    price: 4.99,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&q=80',
    description: 'Cold brew coffee with ice'
  },
  {
    id: '10',
    name: 'Mango Smoothie',
    price: 6.99,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&q=80',
    description: 'Tropical mango blended smoothie'
  },

  // Desserts
  {
    id: '11',
    name: 'Chocolate Cake',
    price: 7.99,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    description: 'Rich chocolate layer cake'
  },
  {
    id: '12',
    name: 'Tiramisu',
    price: 8.99,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80',
    description: 'Classic Italian coffee-flavored dessert'
  },
  {
    id: '13',
    name: 'Ice Cream Sundae',
    price: 6.99,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80',
    description: 'Vanilla ice cream with chocolate sauce'
  }
];
