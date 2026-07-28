import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    emoji: '💧',
    title: 'Prepare',
    desc: 'Desembarace os fios úmidos ou secos. A Auréa é versátil e se adapta à sua rotina.',
    tip: 'Funciona em cabelo seco ou úmido',
  },
  {
    number: '02',
    emoji: '🌡️',
    title: 'Ajuste',
    desc: 'Selecione a temperatura ideal para a espessura do seu cabelo no painel digital inteligente.',
    tip: '130 °C a 230 °C',
  },
  {
    number: '03',
    emoji: '✨',
    title: 'Deslize',
    desc: 'Passe suavemente da raiz às pontas para um liso natural, solto e cheio de vida.',
    tip: 'Resultado em minutos',
  },
];

export const ComoFunciona = () => {
  return (
    <section className="py-28 bg-background border-t border-border/50" aria-label="Como usar a Auréa Beauty">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-foreground"
          >
            A rotina perfeita em{' '}
            <span className="text-primary italic">3 passos.</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connector line desktop */}
          <div className="hidden md:block absolute top-[52px] left-[16%] right-[16%] h-px" aria-hidden="true">
            <div className="w-full h-full border-t-2 border-dashed border-primary/25" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18, duration: 0.55 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step circle */}
                <div className="relative mb-7">
                  <div className="w-[104px] h-[104px] rounded-full bg-background border-2 border-primary/30 text-primary flex flex-col items-center justify-center shadow-sm group-hover:border-primary group-hover:shadow-[0_0_0_6px_rgba(200,149,108,0.08)] transition-all duration-400">
                    <span className="text-2xl leading-none mb-0.5" aria-hidden="true">{step.emoji}</span>
                    <span className="text-xs font-semibold tracking-widest text-primary/60 uppercase">{step.number}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-serif text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed max-w-[220px] mb-4 text-sm md:text-base">
                  {step.desc}
                </p>

                {/* Tip chip */}
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/8 border border-primary/15 px-3 py-1.5 rounded-full">
                  <span className="w-1 h-1 rounded-full bg-primary" aria-hidden="true" />
                  {step.tip}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
