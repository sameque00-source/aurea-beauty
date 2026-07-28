import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Lock } from 'lucide-react';

const trustItems = [
  { Icon: Lock,       label: 'SSL Seguro',       sub: 'Dados criptografados' },
  { Icon: ShieldCheck, label: 'Compra Protegida', sub: 'Ambiente 100% seguro' },
  { Icon: Truck,      label: 'Frete Grátis',      sub: 'Para todo o Brasil' },
  { Icon: RotateCcw,  label: 'Garantia 30 dias',  sub: 'Dinheiro de volta' },
];

const paymentMethods = [
  { label: 'PIX', bg: '#32BCAD', text: '#fff' },
  { label: 'Visa', bg: '#1A1F71', text: '#fff' },
  { label: 'Master', bg: '#EB001B', text: '#fff' },
  { label: 'Elo', bg: '#FFD100', text: '#1A1A1A' },
  { label: 'Boleto', bg: '#6B6B6B', text: '#fff' },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border" role="contentinfo">

      {/* Trust strip */}
      <div className="border-b border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 list-none p-0 m-0">
            {trustItems.map(({ Icon, label, sub }) => (
              <li key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">{label}</p>
                  <p className="text-xs text-muted-foreground leading-tight">{sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main footer */}
      <div className="pt-14 pb-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">

          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif text-lg italic flex-shrink-0"
                aria-hidden="true"
              >
                A
              </div>
              <span className="font-serif font-semibold text-xl tracking-wide text-foreground">
                AURÉA BEAUTY™
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Tecnologia capilar premium desenvolvida para mulheres que escolhem o extraordinário.
            </p>
          </div>

          {/* Payment methods */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              Formas de pagamento
            </p>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map(({ label, bg, text }) => (
                <span
                  key={label}
                  className="inline-flex items-center justify-center h-7 px-3 rounded text-xs font-bold tracking-wide"
                  style={{ backgroundColor: bg, color: text }}
                  aria-label={label}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Links do rodapé">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
              Institucional
            </p>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground font-light list-none p-0 m-0">
              {[
                'Política de Privacidade',
                'Termos de Uso',
                'Contato',
              ].map(link => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground font-light">
            © {year} AURÉA BEAUTY™. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground font-light italic">
            Sua beleza, elevada ao extraordinário.
          </p>
        </div>
      </div>
    </footer>
  );
};
