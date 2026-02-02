import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Star, Truck } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Get your food delivered hot and fresh in 30 minutes or less'
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    description: 'Your payment information is encrypted and 100% secure'
  },
  {
    icon: Star,
    title: 'Top Restaurants',
    description: 'Order from the best restaurants in your city'
  },
  {
    icon: Truck,
    title: 'Real-time Tracking',
    description: 'Track your order from restaurant to your doorstep'
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Choose FoodieHub?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We make food ordering simple, fast, and reliable
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
