import React from 'react';
import { motion } from 'framer-motion';
import imgTecnologia from '@assets/image_1785084066144.png';

const functions = ['Alisa', 'Modela', 'Dá Brilho', 'Reduz o Frizz', 'Seca'];

export const Tecnologia = () => {
  return (
    <section id="tecnologia" className="py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-4xl md:text-6xl font-serif text-foreground mb-5"
          >
            5 funções.{' '}
            <br />
            <span className="text-primary italic">1 transformação.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-light leading-relaxed"
          >
            A tecnologia Titanium Ion da Auréa combina cinco tratamentos em um único deslizar.
            Alisa perfeitamente, modela as pontas, adiciona brilho espelhado, reduz o frizz
            instantaneamente e auxilia na secagem.
          </motion.p>
        </div>

        {/* Image with subtle parallax entrance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.10)] group"
        >
          <img
            src={imgTecnologia}
            alt="5 Funções da Escova Auréa: Alisa, Modela, Dá Brilho, Reduz o Frizz, Seca"
            className="w-full h-auto object-cover group-hover:scale-[1.015] transition-transform duration-700 ease-out"
            loading="lazy"
            decoding="async"
          />
          {/* Subtle bottom vignette */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(253,250,247,0.6), transparent)' }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Function pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {functions.map((fn, i) => (
            <motion.span
              key={fn}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.07 }}
              className="flex items-center gap-2 bg-card border border-border hover:border-primary/40 hover:bg-primary/5 px-5 py-2.5 rounded-full text-sm font-medium text-foreground/80 tracking-wide uppercase transition-all duration-200 cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
              {fn}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
