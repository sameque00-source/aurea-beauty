import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import videoSrc from '@assets/Video_anuncio_da_escova_alisadora_1785084014794.mp4';

export const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inlineRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    inlineRef.current?.play().catch(() => {});
  }, []);

  return (
    <section className="py-28 bg-background relative overflow-hidden" aria-label="Vídeo Auréa Beauty">

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,149,108,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        {/* Small label above */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-widest uppercase text-primary mb-4"
        >
          Resultado Real
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-foreground mb-3"
        >
          Veja uma cliente utilizando a{' '}
          <span className="text-primary italic">Auréa Beauty.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground font-light mb-12"
        >
          Clique no vídeo para assistir com som.
        </motion.p>

        {/* Video preview */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden cursor-pointer group bg-black shadow-[0_24px_80px_rgba(0,0,0,0.18)] border border-white/5 hover:shadow-[0_32px_96px_rgba(0,0,0,0.25)] transition-shadow duration-500"
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Abrir vídeo com som"
          onKeyDown={e => e.key === 'Enter' && setIsOpen(true)}
        >
          <video
            ref={inlineRef}
            src={videoSrc}
            className="w-full h-[300px] sm:h-[460px] md:h-[620px] object-cover opacity-75 group-hover:opacity-90 transition-opacity duration-500"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/15 group-hover:bg-black/5 transition-colors duration-300">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_8px_40px_rgba(0,0,0,0.25)] ring-4 ring-white/20"
            >
              <Play className="w-8 h-8 ml-1 text-[#C8956C]" fill="currentColor" aria-hidden="true" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/92 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Vídeo Auréa Beauty com som"
          >
            <button
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setIsOpen(false)}
              aria-label="Fechar vídeo"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.25, duration: 0.45 }}
              className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-black"
              onClick={e => e.stopPropagation()}
            >
              <video
                src={videoSrc}
                className="w-full h-auto max-h-[85vh] object-contain"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
