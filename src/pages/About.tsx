import { motion } from 'framer-motion';
import { UtensilsCrossed, Heart, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-slate-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-4">About FoodieHub</h1>
          <p className="text-xl text-slate-600">Bringing authentic Indian flavors to your doorstep</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <UtensilsCrossed className="w-8 h-8 text-orange-600" />
            <h2 className="text-2xl font-bold text-slate-900">Our Story</h2>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            Founded in 2020, FoodieHub has been on a mission to deliver authentic Indian cuisine with
            the convenience of modern technology. We partner with the finest restaurants to bring you
            traditional recipes prepared with fresh ingredients and genuine passion.
          </p>
          <p className="text-slate-700 leading-relaxed">
            From crispy samosas to creamy butter chicken, every dish tells a story of culinary heritage
            passed down through generations. We believe food is not just nourishment—it's an experience
            that brings people together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 text-center"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Made with Love</h3>
            <p className="text-slate-600">
              Every dish is crafted with care and attention to detail by experienced chefs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 text-center"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Quality First</h3>
            <p className="text-slate-600">
              We use only the freshest ingredients and authentic spices in every preparation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 text-center"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Community Focus</h3>
            <p className="text-slate-600">
              We support local restaurants and bring communities together through food.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Food Journey</h2>
          <p className="text-orange-50 text-lg mb-6">
            Experience the taste of India with every order
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div>
              <div className="text-4xl font-bold mb-1">500+</div>
              <div className="text-orange-100">Partner Restaurants</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">50K+</div>
              <div className="text-orange-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">1M+</div>
              <div className="text-orange-100">Orders Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
