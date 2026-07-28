import React from 'react';
import { motion } from 'framer-motion';
import imgResultados from '@assets/image_1785083873476.png';

export const Resultados = () => {
  return (
    <section id="resultados" className="py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-5"
          >
            Um cabelo. Todas as versões da sua{' '}
            <span className="text-primary italic">melhor.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-light leading-relaxed"
          >
            Alisa, modela, dá brilho e reduz o frizz sem agredir os fios. Veja a transformação
            real de quem escolheu a liberdade de ser extraordinária todos os dias.
          </motion.p>
        </div>

        {/* +20% larger than before via max-w increase + extra shadow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_32px_96px_rgba(0,0,0,0.13)] group"
        >
          <img
            src={imgResultados}
            alt="Antes e Depois — Resultado do uso da Escova Alisadora Auréa Beauty"
            className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
            loading="lazy"
            decoding="async"
          />

          {/* ANTES badge */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute top-6 left-6 md:top-10 md:left-10"
          >
            <span className="bg-black/55 backdrop-blur-md text-white font-serif font-medium tracking-[0.2em] text-sm md:text-base px-5 py-2 rounded-full border border-white/15 shadow-lg uppercase">
              Antes
            </span>
          </motion.div>

          {/* DEPOIS badge */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute top-6 right-6 md:top-10 md:right-10"
          >
            <span className="bg-[#C8956C]/85 backdrop-blur-md text-white font-serif font-medium tracking-[0.2em] text-sm md:text-base px-5 py-2 rounded-full border border-white/20 shadow-lg uppercase">
              Depois
            </span>
          </motion.div>

          {/* Bottom label */}
          <div
            className="absolute inset-x-0 bottom-0 py-5 flex items-center justify-center"
            style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.75), transparent)' }}
          >
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Resultados reais. Sem filtro. Sem edição.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
