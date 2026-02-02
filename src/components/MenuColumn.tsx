import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import MenuItemCard from './MenuItemCard';
import { FoodItem } from '@/data/indianFoodData';

interface MenuColumnProps {
  category: string;
  icon: LucideIcon;
  items: FoodItem[];
  accentColor: string;
  index: number;
}

export default function MenuColumn({ category, icon: Icon, items, accentColor, index }: MenuColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex flex-col h-full"
    >
      <div
        className="sticky top-0 z-10 backdrop-blur-lg bg-slate-900/80 rounded-t-2xl border-b-2 p-4 flex items-center gap-3"
        style={{ borderColor: accentColor }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${accentColor}20` }}
        >
          <Icon className="w-6 h-6" style={{ color: accentColor }} />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white tracking-tight">{category}</h2>
          <p className="text-sm text-slate-400">{items.length} items</p>
        </div>
      </div>

      <div
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/40 rounded-b-2xl border-2 border-t-0 backdrop-blur-sm scrollbar-custom"
        style={{ borderColor: `${accentColor}30` }}
      >
        <motion.div
          animate={{ y: [0, -100] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="space-y-4"
        >
          {[...items, ...items].map((item, itemIndex) => (
            <MenuItemCard key={`${item.id}-${itemIndex}`} item={item} accentColor={accentColor} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
