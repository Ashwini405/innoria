import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg"
        loading="lazy"
      />

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-slate-900 mb-1">
          {item.name}
        </h3>
        <p className="text-sm text-slate-600 mb-2 line-clamp-1">
          {item.description}
        </p>
        <p className="text-lg font-bold text-orange-600">
          ${item.price.toFixed(2)}
        </p>
      </div>

      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-slate-400 hover:text-red-500 transition-colors"
          aria-label="Remove item"
        >
          <Trash2 className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>

          <motion.span
            key={item.quantity}
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            className="w-8 text-center font-semibold text-slate-900"
          >
            {item.quantity}
          </motion.span>

          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-md transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
