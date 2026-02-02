import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Lock, CheckCircle2 } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  amount: number;
}

export default function PaymentModal({ isOpen, onClose, onSuccess, amount }: PaymentModalProps) {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setStep('success');

    // Auto close and trigger success callback
    setTimeout(() => {
      onSuccess();
      onClose();
      setStep('form');
      setCardData({ cardNumber: '', expiryDate: '', cvv: '', name: '' });
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              {step === 'form' && (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">Payment</h2>
                        <p className="text-sm text-slate-600">Secure checkout</p>
                      </div>
                    </div>
                    <button
                      onClick={onClose}
                      className="text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Amount */}
                  <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Total Amount</span>
                      <span className="text-2xl font-bold text-slate-900">
                        ${amount.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Card Number
                      </label>
                      <input
                        type="text"
                        required
                        value={cardData.cardNumber}
                        onChange={e => setCardData({ ...cardData, cardNumber: e.target.value })}
                        maxLength={16}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-base"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        required
                        value={cardData.name}
                        onChange={e => setCardData({ ...cardData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-base"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-2 block">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          required
                          value={cardData.expiryDate}
                          onChange={e => setCardData({ ...cardData, expiryDate: e.target.value })}
                          maxLength={5}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-base"
                          placeholder="MM/YY"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-2 block">
                          CVV
                        </label>
                        <input
                          type="text"
                          required
                          value={cardData.cvv}
                          onChange={e => setCardData({ ...cardData, cvv: e.target.value })}
                          maxLength={3}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-base"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
                      <Lock className="w-4 h-4" />
                      Your payment is secure and encrypted
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors shadow-sm hover:shadow-md"
                    >
                      Pay ${amount.toFixed(2)}
                    </button>
                  </form>
                </>
              )}

              {step === 'processing' && (
                <div className="p-12 text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-16 h-16 border-4 border-orange-600 border-t-transparent rounded-full mx-auto mb-6"
                  />
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Processing Payment
                  </h3>
                  <p className="text-slate-600">
                    Please wait while we process your payment…
                  </p>
                </div>
              )}

              {step === 'success' && (
                <div className="p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Payment Successful!
                  </h3>
                  <p className="text-slate-600">
                    Your order has been placed
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
