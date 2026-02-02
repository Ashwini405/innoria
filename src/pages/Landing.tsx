import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Clock, ShieldCheck } from 'lucide-react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Utensils className="w-8 h-8 text-orange-600" />
              <span className="text-2xl font-bold text-slate-900">FoodieHub</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="px-5 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors shadow-sm"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to order delicious food?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Join thousands of happy customers enjoying fast delivery
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors shadow-lg"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Utensils className="w-6 h-6 text-orange-500" />
            <span className="text-xl font-bold text-white">FoodieHub</span>
          </div>
          <p className="text-sm">
            © 2026 FoodieHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
