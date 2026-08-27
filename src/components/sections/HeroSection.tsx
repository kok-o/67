'use client';

import React, { useState } from 'react';
import { SITE_METADATA } from '@/data/site-content';
import { Button } from '@/components/ui/Button';
import { 
  ArrowRight, 
  Play, 
  X,
  ChevronDown
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden bg-black">
      {/* Background Subtle Grid & Atmospheric Spotlights */}
      <div className="absolute inset-0 vercel-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.03] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[250px] bg-zinc-800/[0.08] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
        {/* Main Headline */}
        <h1 className="font-sans text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-2">
          Apex Agency<span className="text-zinc-500">.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-heading text-xl sm:text-2xl md:text-3xl font-normal text-zinc-400 tracking-tight mb-4">
          Visual Production &amp; AI Studio<span className="text-zinc-500">.</span>
        </p>

        {/* Concise Description */}
        <p className="max-w-xl text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
          {SITE_METADATA.subheadline}
        </p>

        {/* Hero CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16">
          <a href="#contacts">
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
        </div>

        {/* Clean Showcase Video Frame */}
        <div className="w-full max-w-4xl mx-auto">
          <div 
            className="relative aspect-video w-full rounded-2xl overflow-hidden cursor-pointer bg-zinc-950 border border-zinc-800/80 shadow-2xl group transition-all duration-300 hover:border-zinc-700"
            onClick={() => setVideoModalOpen(true)}
          >
            {/* High-res showcase preview */}
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop"
              alt="Apex Agency Visual Showcase"
              className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90"
            />

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Play Button Trigger */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full gap-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.25)] group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-black translate-x-0.5" />
              </div>
              <span className="text-xs font-medium text-zinc-300 bg-black/60 px-3.5 py-1 rounded-full border border-zinc-800 backdrop-blur-md">
                Смотреть шоурил
              </span>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Down Cue */}
        <a 
          href="#services" 
          aria-label="Scroll to services"
          className="mt-12 text-zinc-600 hover:text-zinc-400 transition-colors flex flex-col items-center gap-1"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setVideoModalOpen(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-850">
              <span className="text-xs font-medium text-zinc-300">Apex Agency — Шоурил</span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
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
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Визуальный продакшн Apex Agency</h3>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-md mb-6">
                  Создаём кинематографичные визуальные решения для брендов, рекламы и медиа.
                </p>
                <a href="#contacts" onClick={() => setVideoModalOpen(false)}>
                  <Button variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
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
