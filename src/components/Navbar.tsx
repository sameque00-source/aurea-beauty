import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const isScrolled = scrollY > 50;
  const { count, openDrawer, cartIconRef, cartBounce, addToCart } = useCart();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  };

  const handleBuy = (e: React.MouseEvent<HTMLButtonElement>) => {
    addToCart(e.currentTarget.getBoundingClientRect());
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#FDFAF7]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 rounded-full bg-[#C8956C] flex items-center justify-center text-white font-serif text-lg italic transition-transform group-hover:scale-105">
            A
          </div>
          <span className="font-serif font-semibold text-xl tracking-wide text-[#1A1A1A]">
            AURÉA BEAUTY™
          </span>
        </div>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          {['Benefícios', 'Tecnologia', 'Resultados', 'Depoimentos', 'FAQ'].map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm font-medium text-[#1A1A1A]/80 hover:text-[#C8956C] transition-colors tracking-wide"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right: Buy + Cart */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleBuy}
            className="hidden sm:block bg-[#C8956C] hover:bg-[#B87A5A] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            Comprar Agora
          </button>

          <motion.button
            ref={cartIconRef}
            onClick={openDrawer}
            animate={cartBounce ? { scale: [1, 1.35, 0.9, 1.1, 1] } : { scale: 1 }}
            transition={cartBounce ? { duration: 0.5, ease: 'easeInOut' } : {}}
            className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-black/5 transition-all"
            aria-label="Abrir carrinho"
          >
            <ShoppingBag className="w-5 h-5" />
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  key="badge"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center leading-none"
                >
                  {count > 9 ? '9+' : count}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};
