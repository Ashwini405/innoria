export interface FoodItem {
  id: string;
  name: string;
  price: number;
  category: 'Starters' | 'Soups' | 'Main Course' | 'Breads';
  image: string;
  description: string;
}

export const foodItems: FoodItem[] = [
  // Starters
  {
    id: '1',
    name: 'Crispy Spring Rolls',
    price: 249,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80',
    description: 'Golden crispy rolls filled with fresh vegetables'
  },
  {
    id: '2',
    name: 'Paneer Tikka',
    price: 299,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80',
    description: 'Marinated cottage cheese grilled to perfection'
  },
  {
    id: '3',
    name: 'Chicken Seekh Kebab',
    price: 349,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80',
    description: 'Minced chicken skewers with aromatic spices'
  },
  {
    id: '4',
    name: 'Hara Bhara Kebab',
    price: 229,
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
    description: 'Spinach and green peas patties with herbs'
  },

  // Soups
  {
    id: '5',
    name: 'Tomato Basil Soup',
    price: 179,
    category: 'Soups',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
    description: 'Creamy tomato soup with fresh basil'
  },
  {
    id: '6',
    name: 'Manchow Soup',
    price: 199,
    category: 'Soups',
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=600&q=80',
    description: 'Spicy Indo-Chinese soup with crispy noodles'
  },
  {
    id: '7',
    name: 'Sweet Corn Soup',
    price: 169,
    category: 'Soups',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=600&q=80',
    description: 'Thick corn soup with vegetables'
  },
  {
    id: '8',
    name: 'Hot & Sour Soup',
    price: 189,
    category: 'Soups',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80',
    description: 'Tangy and spicy vegetable soup'
  },

  // Main Course
  {
    id: '9',
    name: 'Butter Chicken',
    price: 449,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80',
    description: 'Tender chicken in rich creamy tomato gravy'
  },
  {
    id: '10',
    name: 'Paneer Butter Masala',
    price: 379,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80',
    description: 'Cottage cheese cubes in buttery tomato sauce'
  },
  {
    id: '11',
    name: 'Biryani',
    price: 399,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80',
    description: 'Fragrant basmati rice with spiced chicken or vegetables'
  },
  {
    id: '12',
    name: 'Dal Makhani',
    price: 299,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80',
    description: 'Slow-cooked black lentils with butter and cream'
  },
  {
    id: '13',
    name: 'Palak Paneer',
    price: 329,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=600&q=80',
    description: 'Cottage cheese in creamy spinach gravy'
  },

  // Breads
  {
    id: '14',
    name: 'Garlic Naan',
    price: 79,
    category: 'Breads',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80',
    description: 'Soft flatbread topped with garlic and butter'
  },
  {
    id: '15',
    name: 'Butter Naan',
    price: 69,
    category: 'Breads',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80',
    description: 'Classic butter-brushed tandoori bread'
  },
  {
    id: '16',
    name: 'Burger',
    price: 49,
    category: 'Breads',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80',
    description: 'Whole wheat flatbread from the tandoor'
  },
  {
    id: '17',
    name: 'Cheese Kulcha',
    price: 99,
    category: 'Breads',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80',
    description: 'Stuffed bread with cheese and herbs'
  }
];
