import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Clara M.',
    city: 'São Paulo, SP',
    text: 'Sempre sofri com o frizz e demorava horas para arrumar o cabelo de manhã. A Auréa mudou completamente minha rotina. Em 10 minutos estou pronta, com um brilho que parece que saí do salão. Vale cada centavo.',
    initials: 'AC',
  },
  {
    name: 'Fernanda R.',
    city: 'Belo Horizonte, MG',
    text: 'Meu cabelo é ondulado e volumoso. Tinha medo que não funcionasse, mas o resultado é incrível. O alisamento é super natural, os fios ficam soltos e macios. Nunca mais usei chapinha.',
    initials: 'FR',
  },
  {
    name: 'Juliana S.',
    city: 'Rio de Janeiro, RJ',
    text: 'Comprei pela praticidade e me surpreendi com a qualidade. Ela não queima o couro cabeludo, esquenta rápido e deixa as pontas lindamente modeladas. É o melhor investimento que fiz para mim mesma.',
    initials: 'JS',
  },
];

export const Depoimentos = () => {
  return (
    <section id="depoimentos" className="py-28 bg-card border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest uppercase text-primary mb-3"
          >
            Clientes reais
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-foreground"
          >
            Palavras de quem{' '}
            <span className="text-primary italic">viveu a transformação.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-background p-8 rounded-2xl border border-border shadow-sm flex flex-col h-full hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/25 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex text-[#D4A853] mb-5" aria-label="5 estrelas">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className="text-lg" aria-hidden="true">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/80 font-light leading-relaxed mb-7 flex-grow text-[0.95rem]">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="mt-auto pt-5 border-t border-border/50 flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center text-primary font-serif font-semibold text-sm flex-shrink-0"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-sm leading-tight truncate">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.city}</p>
                </div>
                {/* Verified badge */}
                <div className="ml-auto flex items-center gap-1 text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full flex-shrink-0">
                  <CheckCircle className="w-3 h-3" aria-hidden="true" />
                  <span className="text-[10px] font-semibold tracking-wide whitespace-nowrap">Compra Verificada</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
