import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, UtensilsCrossed, LogOut, User, Menu as MenuIcon, Mail, Info } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { getTotalItems } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const totalItems = getTotalItems();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/home" className="flex items-center gap-2 group">
            <UtensilsCrossed className="w-8 h-8 text-orange-600 group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-semibold text-slate-900 tracking-tight">
              Gourmet Delights
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/home"
              className={`relative text-base font-medium transition-colors ${isActive('/home') ? 'text-orange-600' : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              Menu
              {isActive('/home') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-orange-600"
                />
              )}
            </Link>

            <Link
              to="/menu"
              className={`relative text-base font-medium transition-colors ${isActive('/menu') ? 'text-orange-600' : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              All Items
              {isActive('/menu') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-orange-600"
                />
              )}
            </Link>

            <Link
              to="/about"
              className={`relative text-base font-medium transition-colors ${isActive('/about') ? 'text-orange-600' : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              About
              {isActive('/about') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-orange-600"
                />
              )}
            </Link>

            <Link
              to="/contact"
              className={`relative text-base font-medium transition-colors ${isActive('/contact') ? 'text-orange-600' : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              Contact
              {isActive('/contact') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-orange-600"
                />
              )}
            </Link>

            <Link
              to="/cart"
              className={`relative flex items-center gap-2 text-base font-medium transition-colors ${isActive('/cart') ? 'text-orange-600' : 'text-slate-600 hover:text-slate-900'
                }`}
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-5 h-5 bg-orange-600 text-white text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </div>
              Cart
              {isActive('/cart') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-orange-600"
                />
              )}
            </Link>

            {/* User Menu */}
            <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
              <div className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4 text-slate-600" />
                <span className="text-slate-700 font-medium">{user?.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                aria-label="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
