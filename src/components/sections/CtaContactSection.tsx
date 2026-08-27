'use client';

import React from 'react';
import { SITE_METADATA } from '@/data/site-content';
import { Send, MessageSquare, Mail, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';

export const CtaContactSection: React.FC = () => {
  return (
    <section id="contacts" className="py-24 sm:py-32 relative bg-black border-t border-zinc-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 vercel-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sleek Minimal CTA Card */}
        <div className="rounded-3xl border border-zinc-800/90 bg-zinc-950/80 p-8 sm:p-16 text-center shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col items-center">
          {/* Subtle Top Ambient Spotlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-white/[0.04] blur-2xl rounded-full pointer-events-none" />

          {/* Top Category Label */}
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400 mb-4">
            СВЯЗАТЬСЯ С НАМИ
          </p>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] max-w-2xl mb-4">
            Давайте создадим что-то выдающееся вместе.
          </h2>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed mb-8">
            Открыты к новым проектам и креативным задачам. Напишите нам в Telegram — обсудим вашу задумку и рассчитаем стоимость реализации.
          </p>

          {/* Center White Pill Action Button */}
          <a
            href={SITE_METADATA.contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 mb-8"
          >
            <Send className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Написать в Telegram</span>
          </a>

          {/* Secondary Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 border-t border-zinc-850/80 w-full text-xs text-zinc-400">
            <a
              href={SITE_METADATA.contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>{SITE_METADATA.contacts.telegramHandle}</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <span className="text-zinc-700 hidden sm:inline">•</span>

            <a
              href={SITE_METADATA.contacts.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-zinc-500" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <span className="text-zinc-700 hidden sm:inline">•</span>

            <a
              href={SITE_METADATA.contacts.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-zinc-500" />
              <span>Instagram</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-500" />
            </a>

            <span className="text-zinc-700 hidden sm:inline">•</span>

            <a
              href={`mailto:${SITE_METADATA.contacts.email}`}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-500" />
              <span>{SITE_METADATA.contacts.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
