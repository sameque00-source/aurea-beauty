import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Clock, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Oferta = () => {
  const { addToCart } = useCart();
  const [stock, setStock] = useState(14);

  useEffect(() => {
    const timer = setInterval(() => {
      setStock(prev => (prev > 3 ? prev - 1 : prev));
    }, 45000);
    return () => clearInterval(timer);
  }, []);

  const handleBuy = (e: React.MouseEvent<HTMLButtonElement>) => {
    addToCart(e.currentTarget.getBoundingClientRect());
  };

  return (
    <section id="oferta" className="py-28 bg-card border-y border-border relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(200,149,108,0.08) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background rounded-3xl p-10 md:p-14 border border-border shadow-[0_24px_80px_rgba(0,0,0,0.08)] text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C8956C]/12 text-[#C8956C] font-semibold text-xs px-4 py-2 rounded-full mb-8 tracking-widest uppercase border border-[#C8956C]/20">
            <Tag className="w-3 h-3" aria-hidden="true" />
            Semana da Beleza — Oferta Exclusiva
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-3 leading-tight">
            Sua transformação <br />
            <span className="text-[#C8956C] italic">começa agora.</span>
          </h2>

          <p className="text-base text-[#6B6B6B] font-light mb-10 max-w-sm mx-auto">
            Aproveite as condições exclusivas de lançamento — sem burocracia, frete incluso.
          </p>

          {/* Pricing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <div className="flex flex-col items-center sm:items-end gap-1">
              <span className="text-xs text-[#6B6B6B] uppercase tracking-wide font-medium">De</span>
              <span className="text-[#aaa] line-through text-2xl font-light">R$ 199,90</span>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" aria-hidden="true" />
            <div className="flex flex-col items-center sm:items-start gap-1">
              <span className="text-xs text-emerald-600 uppercase tracking-wide font-semibold">Por apenas</span>
              <div className="text-6xl md:text-7xl font-serif font-bold text-[#1A1A1A] flex items-start leading-none">
                <span className="text-2xl mt-2 mr-1 font-normal">R$</span>
                <span>129</span>
                <span className="text-2xl mt-2 ml-0.5 font-normal">,90</span>
              </div>
            </div>
          </div>

          {/* Discount chip */}
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-100 text-sm font-semibold px-4 py-1.5 rounded-full mb-10">
            35% de desconto aplicado
          </div>

          {/* CTA */}
          <div className="mb-8">
            <button
              onClick={handleBuy}
              className="
                group relative overflow-hidden
                w-full md:w-auto min-w-[320px]
                bg-[#1A1A1A] hover:bg-[#C8956C] text-white
                px-10 py-5 rounded-full text-lg font-semibold
                shadow-[0_4px_24px_rgba(26,26,26,0.25)] hover:shadow-[0_6px_32px_rgba(200,149,108,0.40)]
                hover:-translate-y-0.5 transition-all duration-300
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8956C]
              "
              aria-label="Garantir desconto — adicionar ao carrinho"
            >
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)' }}
                aria-hidden="true"
              />
              <span className="relative">Garantir meu desconto agora</span>
            </button>
          </div>

          {/* Urgency */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-red-600 font-semibold bg-red-50 border border-red-100 px-5 py-2.5 rounded-full text-sm">
              <Clock className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <span>Restam apenas <strong>{stock} unidades</strong> com desconto</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#6B6B6B] font-medium">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#C8956C]" aria-hidden="true" /> Frete Grátis
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C8956C]" aria-hidden="true" /> Compra Segura
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
