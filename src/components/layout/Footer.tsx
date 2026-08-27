import React from 'react';
import { Logo } from '@/components/ui/Logo';
import { SITE_METADATA } from '@/data/site-content';
import { Send, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-900 bg-black text-zinc-400 text-sm py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-1">
            <Logo size="md" />
            <p className="text-xs text-zinc-500 leading-relaxed font-sans mt-3">
              {SITE_METADATA.subheadline}
            </p>
          </div>

          {/* Col 2: Services Navigation */}
          <div className="space-y-3">
            <div className="text-xs text-zinc-300 uppercase tracking-wider font-semibold">
              Услуги
            </div>
            <ul className="space-y-2 text-xs text-zinc-500 font-sans">
              <li><a href="#services" className="hover:text-white transition-colors">AI Video Production</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Photography & Visuals</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Digital Characters & Avatars</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Creative & Art Direction</a></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <div className="text-xs text-zinc-300 uppercase tracking-wider font-semibold">
              Навигация
            </div>
            <ul className="space-y-2 text-xs text-zinc-500 font-sans">
              <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Портфолио</a></li>
              <li><a href="#use-cases" className="hover:text-white transition-colors">Сферы применения</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Преимущества</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Вопросы и ответы</a></li>
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div className="space-y-3">
            <div className="text-xs text-zinc-300 uppercase tracking-wider font-semibold">
              Связь
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={SITE_METADATA.contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 hover:text-white hover:border-zinc-700 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <Send className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                  <span>Telegram</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
              </a>

              <a
                href={SITE_METADATA.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 hover:text-white hover:border-zinc-700 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                  <span>WhatsApp</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
              </a>

              <a
                href={SITE_METADATA.contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 hover:text-white hover:border-zinc-700 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <InstagramIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                  <span>Instagram</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-sans">
          <div>
            © {new Date().getFullYear()} Apex Agency. Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
              Commercial Rights Guaranteed
            </span>
            <span>•</span>
            <span className="text-zinc-500">{SITE_METADATA.contacts.city}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
