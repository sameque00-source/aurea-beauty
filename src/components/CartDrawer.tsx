import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Truck, ShieldCheck, Star, Minus, Plus, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, updateQuantity } = useCart();

  const item = items[0] ?? null;
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const totalCount = items.reduce((s, i) => s + i.quantity, 0);

  const handleCheckout = () => {
    closeDrawer();
    // Same tab — never _blank
    window.location.href = 'https://pay.kaiross.com.br/kTaqZTse7tvL';
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
            onClick={closeDrawer}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            className="fixed top-0 right-0 h-full z-[100] w-full sm:w-[420px] bg-[#FDFAF7] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8DDD3]">
              <div>
                <h2 className="font-serif text-xl text-[#1A1A1A] font-semibold">Seu Carrinho</h2>
                {item && (
                  <p className="text-xs text-[#6B6B6B] mt-0.5 font-medium tracking-wide">
                    {totalCount} {totalCount === 1 ? 'item' : 'itens'}
                  </p>
                )}
              </div>
              <button
                onClick={closeDrawer}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-black/5 transition-all"
                aria-label="Fechar carrinho"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {item ? (
                <div>
                  {/* Product Card */}
                  <div className="bg-white rounded-2xl border border-[#E8DDD3] overflow-hidden shadow-sm">
                    {/* Product image — full, uncropped, proportional */}
                    <div className="bg-[#F5EFE9] flex items-center justify-center p-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full max-w-[260px] h-auto object-contain mx-auto"
                        loading="eager"
                        decoding="async"
                      />
                    </div>

                    {/* Details */}
                    <div className="px-5 py-5">
                      <div className="flex text-[#C8956C] mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <h3 className="font-serif text-lg text-[#1A1A1A] font-semibold leading-snug mb-1">
                        {item.name}
                      </h3>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-sm text-[#6B6B6B] line-through">R$ 199,90</span>
                        <span className="font-serif text-2xl font-bold text-[#1A1A1A]">
                          R$ 129,90
                        </span>
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          35% OFF
                        </span>
                      </div>

                      {/* Quantity control */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-[#6B6B6B]">Quantidade</span>
                        <div className="flex items-center gap-3 bg-[#F5EFE9] rounded-full px-2 py-1.5">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-white transition-all"
                            aria-label="Diminuir quantidade"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-semibold text-[#1A1A1A] w-5 text-center text-sm tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full flex items-center justify-center text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-white transition-all"
                            aria-label="Aumentar quantidade"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mt-5 bg-white rounded-2xl border border-[#E8DDD3] px-5 py-4 space-y-3">
                    <div className="flex items-center justify-between text-sm text-[#6B6B6B]">
                      <span>Subtotal ({totalCount} {totalCount === 1 ? 'un.' : 'uns.'})</span>
                      <span className="text-[#1A1A1A] font-medium">
                        R$ {subtotal.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-[#6B6B6B]">
                      <span className="flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5 text-[#C8956C]" /> Frete
                      </span>
                      <span className="text-emerald-600 font-medium">Grátis</span>
                    </div>
                    <div className="border-t border-[#E8DDD3] pt-3 flex items-center justify-between">
                      <span className="font-semibold text-[#1A1A1A]">Total</span>
                      <span className="font-serif text-xl font-bold text-[#1A1A1A]">
                        R$ {subtotal.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>

                  {/* Trust badges */}
                  <div className="mt-4 flex justify-center gap-6 text-xs text-[#6B6B6B] font-medium">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C8956C]" /> Compra Segura
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-[#C8956C]" /> Garantia 30 dias
                    </span>
                  </div>
                </div>
              ) : (
                /* Empty state */
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                  <div className="w-16 h-16 rounded-full bg-[#F5EFE9] flex items-center justify-center mb-5">
                    <Package className="w-7 h-7 text-[#C8956C]" />
                  </div>
                  <p className="font-serif text-xl text-[#1A1A1A] mb-2 font-semibold">
                    Seu carrinho está vazio.
                  </p>
                  <p className="text-sm text-[#6B6B6B] max-w-[220px] leading-relaxed">
                    Escolha sua Escova Auréa Beauty.
                  </p>
                  <button
                    onClick={closeDrawer}
                    className="mt-7 bg-[#C8956C] hover:bg-[#B87A5A] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md"
                  >
                    Continuar Comprando
                  </button>
                </div>
              )}
            </div>

            {/* Footer CTA — only shown when cart has items */}
            {item && (
              <div className="px-6 py-5 border-t border-[#E8DDD3] bg-[#FDFAF7]">
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#1A1A1A] hover:bg-[#C8956C] text-white px-6 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 tracking-wide"
                >
                  Finalizar Compra — R$ {subtotal.toFixed(2).replace('.', ',')}
                </button>
                <p className="text-center text-xs text-[#6B6B6B] mt-3 font-medium">
                  Pagamento 100% seguro • SSL criptografado
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
