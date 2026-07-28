import React from 'react';
import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Funciona em todo tipo de cabelo?',
    answer:
      'Sim! A Auréa Beauty foi desenvolvida com controle inteligente de temperatura, permitindo ajustar o calor ideal para cabelos finos, médios, grossos, ondulados, cacheados ou crespos. Seu design protege a estrutura de cada tipo de fio.',
  },
  {
    question: 'Qual a temperatura ideal?',
    answer:
      'Para cabelos finos ou danificados recomendamos 130–150 °C. Cabelos normais ou ondulados ficam perfeitos entre 170–190 °C. Já os cabelos mais grossos ou crespos podem usar 210–230 °C para um liso impecável.',
  },
  {
    question: 'Tem garantia?',
    answer:
      'Sim — 30 dias de garantia incondicional. Se você não se apaixonar pelos resultados da sua Auréa, devolvemos 100% do seu dinheiro. Sem burocracia.',
  },
  {
    question: 'É segura para cabelos coloridos ou com química?',
    answer:
      'Absolutamente. A tecnologia das cerdas emite íons negativos que selam as cutículas, preservando a cor e a hidratação natural. É a ferramenta mais segura para cabelos que já passaram por processos químicos.',
  },
  {
    question: 'Qual o prazo de entrega?',
    answer:
      'O prazo varia de acordo com sua região, geralmente entre 5 e 12 dias úteis. Oferecemos Frete Grátis para todo o Brasil nesta condição especial de oferta.',
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest uppercase text-primary mb-3"
          >
            Tire suas dúvidas
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-foreground"
          >
            Ainda com <span className="text-primary italic">dúvidas?</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion.Root type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl overflow-hidden data-[state=open]:border-primary/40 data-[state=open]:shadow-sm transition-all duration-200"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between py-5 px-6 text-left font-medium text-foreground hover:text-primary transition-colors duration-200">
                    <span className="text-base leading-snug pr-4">{faq.question}</span>
                    <ChevronDown
                      className="w-4.5 h-4.5 text-muted-foreground flex-shrink-0 group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary transition-all duration-300"
                      aria-hidden="true"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-1 data-[state=open]:slide-in-from-top-1 transition-all duration-300">
                  <p className="px-6 pb-6 pt-1 text-muted-foreground font-light leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>

      </div>
    </section>
  );
};
