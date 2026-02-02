import { CircleDot, Soup, UtensilsCrossed, Sandwich, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MenuColumn from '@/components/MenuColumn';
import { foodItems } from '@/data/indianFoodData';
import { useCart } from '@/context/CartContext';

const categories = [
  { name: 'Starters', icon: CircleDot, color: '#2DD4BF', filter: 'Starters' },
  { name: 'Soups', icon: Soup, color: '#FB7185', filter: 'Soups' },
  { name: 'Main Course', icon: UtensilsCrossed, color: '#FBBF24', filter: 'Main Course' },
  { name: 'Breads', icon: Sandwich, color: '#A78BFA', filter: 'Breads' }
] as const;

export default function Home() {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-violet-400 mb-4 tracking-tight">
            Our Exquisite Menu
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discover authentic Indian flavors crafted with passion and tradition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[600px]">
          {categories.map((category, index) => (
            <MenuColumn
              key={category.name}
              category={category.name}
              icon={category.icon}
              items={foodItems.filter(item => item.category === category.filter)}
              accentColor={category.color}
              index={index}
            />
          ))}
        </div>

        {/* Always Visible Cart Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={handleGoToCart}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white font-bold text-xl rounded-2xl transition-all shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <ShoppingCart className="w-7 h-7" />
            </motion.div>
            <span className="relative z-10">
              {totalItems > 0 ? `🛒 My Feast (${totalItems})` : '🍽️ Start My Feast'}
            </span>
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
