import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';
import videoBg from '@assets/Brazilian_woman_uses_hair_brush_202607272018_1785194710184.mp4';
import { useCart } from '../context/CartContext';

export const Hero = () => {
  const { addToCart } = useCart();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const handleBuy = (e: React.MouseEvent<HTMLButtonElement>) => {
    addToCart(e.currentTarget.getBoundingClientRect());
  };

  return (
    <section
      className="relative w-full min-h-[100dvh] flex items-center pt-20 overflow-hidden"
      aria-label="Seção principal — Auréa Beauty"
    >
      {/* Background video — full viewport, prominent */}
      <video
        ref={videoRef}
        src={videoBg}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Overlay: dark on bottom for contrast, lighter left panel for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            /* left text panel — just enough to read */
            'linear-gradient(to right, rgba(12,10,8,0.72) 0%, rgba(12,10,8,0.52) 35%, rgba(12,10,8,0.10) 62%, rgba(12,10,8,0) 100%)',
            /* bottom cinematic fade */
            'linear-gradient(to top, rgba(12,10,8,0.55) 0%, transparent 40%)',
          ].join(', '),
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-lg">
          {/* Stars pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-7"
          >
            <div className="flex text-[#D4A853]" aria-label="5 estrelas">
              {[...Array(5)].map((_, i) => <span key={i} aria-hidden="true" className="text-base">★</span>)}
            </div>
            <span className="text-sm font-medium text-white/80 tracking-wide">
              +10.000 mulheres transformadas
            </span>
          </motion.div>

          {/* Headline — reduced ~12% from previous */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="text-[2.6rem] sm:text-5xl md:text-[3.5rem] lg:text-6xl font-serif text-white leading-[1.1] mb-5 tracking-tight"
          >
            Sua beleza,{' '}
            <span className="text-[#D4A853] italic font-medium block leading-[1.15]">elevada</span>
            ao extraordinário.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-base md:text-lg text-white/75 mb-9 font-light leading-relaxed max-w-sm"
          >
            A escova alisadora que transforma não apenas seus fios, mas sua
            confiança — todos os dias.
          </motion.p>

          {/* CTA — premium */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <button
              onClick={handleBuy}
              aria-label="Adicionar Escova Alisadora ao carrinho"
              className="
                group relative overflow-hidden
                bg-[#C8956C] text-white
                px-8 py-4 rounded-full text-base font-semibold
                flex items-center gap-3 w-full sm:w-auto justify-center
                shadow-[0_4px_24px_rgba(200,149,108,0.50)]
                hover:shadow-[0_6px_32px_rgba(200,149,108,0.70)]
                hover:-translate-y-0.5
                transition-all duration-300
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8956C] focus-visible:ring-offset-2
              "
            >
              {/* shimmer sweep */}
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }}
                aria-hidden="true"
              />
              <span className="relative">Quero transformar meu cabelo</span>
              <span className="relative group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-9 flex flex-col sm:flex-row flex-wrap sm:items-center gap-3 sm:gap-5 text-xs sm:text-sm font-medium text-white/70 list-none p-0"
          >
            {[
              { Icon: Truck, label: 'Frete Grátis' },
              { Icon: ShieldCheck, label: 'Compra Segura' },
              { Icon: CheckCircle2, label: 'Garantia 30 dias' },
              { Icon: Lock, label: 'Pagamento Seguro' },
            ].map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5">
                <Icon className="w-3.5 h-3.5 text-[#D4A853] flex-shrink-0" aria-hidden="true" />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Cinematic scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};
