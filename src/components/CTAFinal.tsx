import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export const CTAFinal = () => {
  const { addToCart } = useCart();

  const handleBuy = (e: React.MouseEvent<HTMLButtonElement>) => {
    addToCart(e.currentTarget.getBoundingClientRect());
  };

  return (
    <section className="py-32 bg-[#C8956C] relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5 mix-blend-overlay" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-serif text-white mb-8"
        >
          Pronta para transformar <br />
          <span className="italic font-light">seus fios?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto"
        >
          Junte-se a milhares de mulheres que já conquistaram a liberdade de um cabelo
          incrível todos os dias.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={handleBuy}
            className="bg-white text-[#1A1A1A] px-10 py-5 rounded-full text-xl font-medium transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto hover:bg-[#FDFAF7]"
          >
            Comprar Auréa Beauty →
          </button>
        </motion.div>
      </div>
    </section>
  );
};
