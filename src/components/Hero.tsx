import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full mb-6 text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              Rated 4.9/5 by 10,000+ customers
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Delicious Food
              <br />
              <span className="text-orange-600">Delivered Fast</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Order from your favorite restaurants and get fresh, hot food delivered to your doorstep in 30 minutes or less.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Order Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-lg transition-colors border-2 border-slate-200"
              >
                Sign In
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-200">
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
                <div className="text-sm text-slate-600">Restaurants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">50K+</div>
                <div className="text-sm text-slate-600">Orders Daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">30min</div>
                <div className="text-sm text-slate-600">Avg Delivery</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
                alt="Delicious food"
                className="rounded-2xl shadow-2xl w-full"
                loading="eager"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-orange-600 fill-current" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">4.9/5</div>
                  <div className="text-sm text-slate-600">Customer Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
