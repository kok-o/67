'use client';

import React, { useState } from 'react';
import { SITE_METADATA } from '@/data/site-content';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  X,
  ChevronDown
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15 } },
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden bg-black">
      {/* Background Subtle Grid & Atmospheric Spotlights */}
      <div className="absolute inset-0 vercel-grid opacity-15 pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.03] blur-[140px] rounded-full pointer-events-none" 
      />
      
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center"
      >
        {/* Main Headline */}
        <motion.h1 
          variants={itemVars}
          className="font-sans text-6xl sm:text-7xl md:text-[7rem] leading-none font-bold tracking-tighter text-white mb-4"
        >
          Apex Agency<span className="text-zinc-500">.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          variants={itemVars}
          className="font-heading text-xl sm:text-2xl md:text-3xl font-normal text-zinc-400 tracking-tight mb-4"
        >
          Visual Production &amp; AI Studio<span className="text-zinc-500">.</span>
        </motion.p>

        {/* Concise Description */}
        <motion.p 
          variants={itemVars}
          className="max-w-xl text-sm sm:text-base text-zinc-400 leading-relaxed mb-10"
        >
          {SITE_METADATA.subheadline}
        </motion.p>

        {/* Hero CTA Button */}
        <motion.div 
          variants={itemVars}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16"
        >
          <a
            href={SITE_METADATA.contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              size="lg"
              className="px-8 shadow-lg shadow-white/5"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Обсудить проект
            </Button>
          </a>
          <a href="#portfolio">
            <Button
              variant="secondary"
              size="lg"
              className="px-6 text-zinc-300 hover:text-white border-zinc-800"
            >
              Смотреть работы
            </Button>
          </a>
        </motion.div>

        {/* Clean Showcase Video Frame */}
        <motion.div 
          variants={itemVars}
          className="w-full max-w-5xl mx-auto"
        >
          <div 
            className="relative aspect-video w-full rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 border border-zinc-800/80 shadow-[0_0_50px_rgba(0,0,0,0.5)] group transition-all duration-500 hover:border-zinc-600 hover:shadow-[0_0_80px_rgba(255,255,255,0.05)]"
            onClick={() => setVideoModalOpen(true)}
          >
            {/* High-res showcase preview */}
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop"
              alt="Apex Agency Visual Showcase"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out filter brightness-90"
            />

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Play Button Trigger */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full gap-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.25)] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-500">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-black translate-x-0.5" />
              </div>
              <span className="text-xs font-medium text-zinc-300 bg-black/60 px-4 py-1.5 rounded-full border border-zinc-800 backdrop-blur-md group-hover:border-zinc-500 group-hover:text-white transition-colors duration-300">
                Смотреть шоурил
              </span>
            </div>
          </div>
        </motion.div>

        {/* Subtle Scroll Down Cue */}
        <motion.a 
          variants={itemVars}
          href="#services" 
          aria-label="Scroll to services"
          className="mt-16 text-zinc-600 hover:text-zinc-400 transition-colors flex flex-col items-center gap-1"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.a>
      </motion.div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setVideoModalOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-850">
              <span className="text-xs font-medium text-zinc-300">Apex Agency — Шоурил</span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Content */}
            <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop"
                alt="Showreel Preview"
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-6 text-center">
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-3 tracking-tight">Визуальный продакшн Apex Agency</h3>
                <p className="text-sm sm:text-base text-zinc-300 max-w-lg mb-8 leading-relaxed">
                  Создаём кинематографичные визуальные решения для брендов, рекламы и медиа.
                </p>
                <a
                  href={SITE_METADATA.contacts.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setVideoModalOpen(false)}
                >
                  <Button variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                    Обсудить проект
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
