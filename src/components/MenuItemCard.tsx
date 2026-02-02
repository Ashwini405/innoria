import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FoodItem } from '@/data/indianFoodData';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MenuItemCardProps {
  item: FoodItem;
  accentColor: string;
}

export default function MenuItemCard({ item, accentColor }: MenuItemCardProps) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    addToCart(item);
    setTimeout(() => setIsAdding(false), 600);
  };

  const handleCardClick = () => {
    navigate(`/item/${item.id}`);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={handleCardClick}
      className="relative group bg-slate-800/40 backdrop-blur-md rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer"
      style={{
        borderColor: `${accentColor}20`,
        boxShadow: `0 4px 20px ${accentColor}10`
      }}
    >
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-slate-700 flex items-center justify-center">
            <span className="text-slate-400 text-sm">Image not available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
          {item.name}
        </h3>
        <p className="text-sm text-slate-400 mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold tracking-tight" style={{ color: accentColor }}>
            ₹{item.price}
          </span>

          <motion.button
            whileTap={{ scale: 0.95 }}
            animate={isAdding ? { scale: [1, 1.2, 1] } : {}}
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm text-slate-900 transition-all shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: accentColor,
              boxShadow: `0 4px 14px ${accentColor}40`
            }}
          >
            <Plus className="w-4 h-4" />
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
