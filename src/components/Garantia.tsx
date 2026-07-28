import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const Garantia = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-10 bg-card p-10 rounded-3xl border border-border"
        >
          <div className="w-24 h-24 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <ShieldCheck className="w-12 h-12" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif text-foreground mb-4">
              Satisfação garantida ou seu dinheiro de volta em 30 dias
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Temos tanta confiança na qualidade da Auréa Beauty que assumimos todo o risco. 
              Se você não ficar 100% satisfeita com o resultado nos seus cabelos em até 30 dias de uso, 
              devolveremos cada centavo do seu investimento. Sem perguntas, sem complicações.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
