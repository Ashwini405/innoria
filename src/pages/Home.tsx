import { CircleDot, Soup, UtensilsCrossed, Sandwich, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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

        {/* I'm Full Button */}
        {totalItems > 0 && (
          <div className="mt-12 text-center">
            <button
              onClick={handleGoToCart}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ShoppingCart className="w-6 h-6" />
              I'm Full - View Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
