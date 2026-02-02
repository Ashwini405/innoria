import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Eye } from 'lucide-react';
import { FoodItem } from '@/data/indianFoodData';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface AllMenuCardProps {
  item: FoodItem;
  index: number;
}

export default function AllMenuCard({ item, index }: AllMenuCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAdding(true);
    addToCart(item);
    setTimeout(() => setIsAdding(false), 600);
  };

  const categoryColors: Record<string, string> = {
    'Starters': 'bg-teal-100 text-teal-700',
    'Soups': 'bg-rose-100 text-rose-700',
    'Main Course': 'bg-amber-100 text-amber-700',
    'Breads': 'bg-violet-100 text-violet-700'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Link to={`/item/${item.id}`} className="block">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full">
          <div className="relative overflow-hidden aspect-[4/3]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute top-3 left-3">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[item.category]}`}>
                {item.category}
              </span>
            </div>
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                <Eye className="w-5 h-5 text-slate-700" />
              </div>
            </div>
          </div>

          <div className="p-5">
            <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
              {item.name}
            </h3>
            <p className="text-sm text-slate-600 mb-4 line-clamp-2">
              {item.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-orange-600">
                ₹{item.price}
              </span>

              <motion.button
                whileTap={{ scale: 0.95 }}
                animate={isAdding ? { scale: [1, 1.2, 1] } : {}}
                onClick={handleAddToCart}
                className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors shadow-sm hover:shadow-md"
              >
                <Plus className="w-4 h-4" />
                Add
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
