import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Cpu, Shield, Zap, Feather, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: 'Aquecimento em 30s',
    desc: 'Pronta para uso instantaneamente. Economize tempo na sua rotina e saia de casa mais rápido.',
    featured: true,
  },
  {
    icon: Shield,
    title: 'Proteção Avançada',
    desc: 'Cerdas com revestimento térmico que protegem o couro cabeludo e previnem queimaduras.',
    featured: true,
  },
  {
    icon: Cpu,
    title: 'Temperatura Inteligente',
    desc: 'Controle preciso que distribui o calor uniformemente, garantindo o liso perfeito sem agressão.',
    featured: false,
  },
  {
    icon: Zap,
    title: 'Bivolt Automático',
    desc: '110V ou 220V. Leve para qualquer viagem sem preocupações ou adaptadores.',
    featured: false,
  },
  {
    icon: Feather,
    title: 'Leve e Confortável',
    desc: 'Design ergonômico que não cansa os braços durante o uso prolongado, mesmo em cabelos volumosos.',
    featured: false,
  },
  {
    icon: CheckCircle,
    title: 'Segura e Confiável',
    desc: 'Desligamento automático após 60 minutos de inatividade, garantindo sua tranquilidade.',
    featured: false,
  },
];

export const Beneficios = () => {
  return (
    <section id="benefícios" className="py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-4xl md:text-5xl font-serif text-foreground mb-5"
          >
            O poder de um salão,{' '}
            <br />
            <span className="text-primary italic">na palma da sua mão.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-light leading-relaxed"
          >
            Cada detalhe da Auréa foi projetado para oferecer o máximo de eficiência com
            o mínimo de esforço. Não é apenas alisar — é cuidar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.08 * i, duration: 0.5 }}
              className={`
                group relative p-8 rounded-2xl flex flex-col items-start
                border transition-all duration-300 hover:-translate-y-1
                ${feat.featured
                  ? 'bg-background border-primary/40 shadow-[0_4px_32px_rgba(200,149,108,0.12)] hover:shadow-[0_8px_40px_rgba(200,149,108,0.22)]'
                  : 'bg-background border-border hover:border-primary/25 hover:shadow-lg'
                }
              `}
            >
              {feat.featured && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-widest uppercase text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  Destaque
                </span>
              )}

              <div
                className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-5
                  transition-all duration-300 group-hover:scale-110
                  ${feat.featured
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                  }
                `}
              >
                <feat.icon className="w-5 h-5" aria-hidden="true" />
              </div>

              <h3 className={`text-xl font-serif mb-2 ${feat.featured ? 'text-foreground font-semibold' : 'text-foreground font-medium'}`}>
                {feat.title}
              </h3>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
