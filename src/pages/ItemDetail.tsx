import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, ShoppingCart, Clock, Flame, Users, Minus } from 'lucide-react';
import { foodItems } from '@/data/indianFoodData';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const item = foodItems.find(food => food.id === id);

  // Check if item is already in cart
  const cartItem = cart.find(cartItem => cartItem.id === id);
  const isInCart = !!cartItem;

  if (!item) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Item not found</h2>
          <Link to="/menu" className="text-orange-600 hover:text-orange-700">
            Back to menu
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addToCart(item);
    }
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const categoryColors: Record<string, string> = {
    'Starters': 'bg-teal-100 text-teal-700 border-teal-200',
    'Soups': 'bg-rose-100 text-rose-700 border-rose-200',
    'Main Course': 'bg-amber-100 text-amber-700 border-amber-200',
    'Breads': 'bg-violet-100 text-violet-700 border-violet-200'
  };

  // Extended details based on category
  const getItemDetails = () => {
    const baseDetails = {
      prepTime: '15-20 mins',
      servings: '1-2 people',
      spiceLevel: 'Medium'
    };

    switch (item.category) {
      case 'Starters':
        return { ...baseDetails, prepTime: '10-15 mins', servings: '2-3 pieces' };
      case 'Soups':
        return { ...baseDetails, prepTime: '8-10 mins', servings: '1 bowl' };
      case 'Main Course':
        return { ...baseDetails, prepTime: '20-25 mins', servings: '2-3 people' };
      case 'Breads':
        return { ...baseDetails, prepTime: '5-8 mins', servings: '1-2 pieces' };
      default:
        return baseDetails;
    }
  };

  const details = getItemDetails();

  // Generate detailed description based on item name and category
  const getDetailedDescription = () => {
    const descriptions: Record<string, string> = {
      'Crispy Spring Rolls': 'Perfectly fried golden spring rolls stuffed with a savory mixture of fresh vegetables, glass noodles, and aromatic spices. Served with a tangy sweet chili dipping sauce.',
      'Paneer Tikka': 'Succulent cubes of cottage cheese marinated in a rich blend of yogurt, aromatic spices, and herbs, grilled to perfection in a traditional tandoor. Served with mint chutney.',
      'Chicken Seekh Kebab': 'Minced chicken mixed with ginger, garlic, green chilies, and a secret blend of spices, shaped onto skewers and grilled until charred. A classic North Indian delicacy.',
      'Hara Bhara Kebab': 'Nutritious patties made from fresh spinach, green peas, and potatoes, seasoned with herbs and spices, then shallow-fried until crispy on the outside and soft inside.',
      'Tomato Basil Soup': 'A velvety smooth soup made from ripe tomatoes, fresh basil leaves, and cream. Garnished with croutons and a drizzle of olive oil. Perfect comfort food.',
      'Manchow Soup': 'A popular Indo-Chinese soup featuring mixed vegetables in a spicy, tangy broth with soy sauce, vinegar, and pepper. Topped with crispy fried noodles.',
      'Sweet Corn Soup': 'A thick, creamy soup made with sweet corn kernels, mixed vegetables, and a hint of ginger. Comforting and mildly flavored.',
      'Hot & Sour Soup': 'A flavorful soup combining vegetables, tofu, mushrooms in a spicy and tangy broth with vinegar, soy sauce, and white pepper. Garnished with spring onions.',
      'Butter Chicken': 'Tender chicken pieces simmered in a rich, creamy tomato-based gravy with butter, cream, and aromatic spices. Best enjoyed with naan or rice.',
      'Paneer Butter Masala': 'Soft cottage cheese cubes cooked in a luscious tomato and cashew gravy, finished with butter and cream. A vegetarian favorite.',
      'Biryani': 'Fragrant basmati rice layered with marinated chicken or vegetables, cooked with aromatic spices, saffron, and herbs. Served with raita and pickle.',
      'Dal Makhani': 'Black lentils and kidney beans slow-cooked overnight with butter, cream, and spices until creamy and rich. A North Indian classic.',
      'Palak Paneer': 'Fresh spinach puree cooked with cottage cheese cubes, tomatoes, onions, and a blend of spices. Healthy and delicious.',
      'Garlic Naan': 'Soft, fluffy flatbread brushed with garlic butter and sprinkled with fresh coriander. Baked in a traditional tandoor.',
      'Butter Naan': 'Classic leavened bread brushed generously with melted butter. Perfect accompaniment to any curry.',
      'Tandoori Roti': 'Whole wheat flatbread cooked in a tandoor until slightly charred. A healthier bread option.',
      'Cheese Kulcha': 'Leavened bread stuffed with a mixture of cheese, herbs, and spices, then baked until golden and crispy.'
    };

    return descriptions[item.name] || item.description;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className={`px-4 py-2 text-sm font-semibold rounded-full border-2 ${categoryColors[item.category]}`}>
                  {item.category}
                </span>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
                <Clock className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                <div className="text-xs text-slate-600 mb-1">Prep Time</div>
                <div className="text-sm font-semibold text-slate-900">{details.prepTime}</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
                <Users className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                <div className="text-xs text-slate-600 mb-1">Servings</div>
                <div className="text-sm font-semibold text-slate-900">{details.servings}</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
                <Flame className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                <div className="text-xs text-slate-600 mb-1">Spice Level</div>
                <div className="text-sm font-semibold text-slate-900">{details.spiceLevel}</div>
              </div>
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                {item.name}
              </h1>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-orange-600">
                  ₹{item.price}
                </span>
                <span className="text-lg text-slate-500">per serving</span>
              </div>

              <div className="prose prose-slate max-w-none mb-8">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {getDetailedDescription()}
                </p>
              </div>

              {/* Ingredients/Features */}
              <div className="bg-orange-50 rounded-xl p-6 mb-8 border border-orange-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Key Highlights
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Made with fresh, authentic ingredients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Prepared by experienced chefs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Traditional recipe with modern taste</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Hot and fresh delivery guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <span className="text-slate-700 font-medium">Quantity</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold text-lg text-slate-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
                <span className="text-slate-600">Subtotal</span>
                <span className="text-2xl font-bold text-slate-900">
                  ₹{item.price * quantity}
                </span>
              </div>

              {!isInCart ? (
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  animate={isAdding ? { scale: [1, 1.05, 1] } : {}}
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Add to Cart
                </motion.button>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoToCart}
                  className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  I'm Full - View Cart ({cartItem?.quantity} in cart)
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
