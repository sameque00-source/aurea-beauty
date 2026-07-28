import React, { lazy, Suspense } from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Toaster } from 'sonner';

import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';
import { FlyToCartLayer } from './components/FlyToCart';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy-load below-the-fold sections for better LCP/TTI
const Beneficios    = lazy(() => import('./components/Beneficios').then(m => ({ default: m.Beneficios })));
const Tecnologia    = lazy(() => import('./components/Tecnologia').then(m => ({ default: m.Tecnologia })));
const ComoFunciona  = lazy(() => import('./components/ComoFunciona').then(m => ({ default: m.ComoFunciona })));
const Resultados    = lazy(() => import('./components/Resultados').then(m => ({ default: m.Resultados })));
const Video         = lazy(() => import('./components/Video').then(m => ({ default: m.Video })));
const Depoimentos   = lazy(() => import('./components/Depoimentos').then(m => ({ default: m.Depoimentos })));
const FAQ           = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Oferta        = lazy(() => import('./components/Oferta').then(m => ({ default: m.Oferta })));
const Garantia      = lazy(() => import('./components/Garantia').then(m => ({ default: m.Garantia })));
const CTAFinal      = lazy(() => import('./components/CTAFinal').then(m => ({ default: m.CTAFinal })));
const Footer        = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full" id="main-content">
        <Hero />
        <Suspense fallback={null}>
          <Beneficios />
          <Tecnologia />
          <ComoFunciona />
          <Resultados />
          <Video />
          <Depoimentos />
          <FAQ />
          <Oferta />
          <Garantia />
          <CTAFinal />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route>
            <div className="flex min-h-screen items-center justify-center bg-background">
              <h1 className="text-2xl font-serif">Página não encontrada</h1>
            </div>
          </Route>
        </Switch>
      </WouterRouter>
      <CartDrawer />
      <FlyToCartLayer />
      <Toaster position="bottom-center" richColors />
    </CartProvider>
  );
}

export default App;
