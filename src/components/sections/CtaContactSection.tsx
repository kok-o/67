'use client';

import React, { useState } from 'react';
import { SITE_METADATA } from '@/data/site-content';
import { Button } from '@/components/ui/Button';
import { LeadSubmission } from '@/types';
import { 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw,
  Mail
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';

interface CtaContactSectionProps {
  prefilledTask?: string;
  prefilledService?: string;
}

export const CtaContactSection: React.FC<CtaContactSectionProps> = ({
  prefilledTask = '',
  prefilledService = 'AI Video Production',
}) => {
  const [formData, setFormData] = useState<LeadSubmission>({
    name: '',
    contact: '',
    serviceType: prefilledService || 'AI Video Production',
    projectTask: prefilledTask || '',
    format: '9:16 (Reels / TikTok / Shorts)',
    budgetOrTimeline: 'Стандарт (2-3 дня)',
    source: 'Форма на сайте Apex Agency'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [prevPrefilledTask, setPrevPrefilledTask] = useState(prefilledTask);
  const [prevPrefilledService, setPrevPrefilledService] = useState(prefilledService);

  if (prefilledTask !== prevPrefilledTask) {
    setPrevPrefilledTask(prefilledTask);
    setFormData(prev => ({ ...prev, projectTask: prefilledTask }));
  }

  if (prefilledService !== prevPrefilledService) {
    setPrevPrefilledService(prefilledService);
    setFormData(prev => ({ ...prev, serviceType: prefilledService }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) {
      setErrorMessage('Пожалуйста, укажите ваше имя и контакт для связи.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLeadLink = () => {
    const text = encodeURIComponent(
      `Здравствуйте! Заявка с сайта Apex Agency:\n` +
      `Имя: ${formData.name || 'Клиент'}\n` +
      `Услуга: ${formData.serviceType}\n` +
      `Задача: ${formData.projectTask || 'Консультация'}\n` +
      `Формат: ${formData.format}`
    );
    return `https://wa.me/15550192834?text=${text}`;
  };

  return (
    <section id="contacts" className="py-24 relative bg-black border-t border-zinc-900 overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 vercel-grid opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">
            Контакты
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Обсудить проект
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Опишите вашу задачу или свяжитесь с нами напрямую через удобный мессенджер.
          </p>
        </div>

        {/* 2-Column Grid: Form & Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Col 1: Lead Form (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            {submitted ? (
              <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Заявка успешно принята</h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                  Спасибо за обращение! Мы свяжемся с вами в течение 15 минут для уточнения деталей.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a href={getWhatsAppLeadLink()} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="sm" icon={<MessageSquare className="w-3.5 h-3.5" />}>
                      Написать в WhatsApp
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        contact: '',
                        serviceType: 'AI Video Production',
                        projectTask: '',
                        format: '9:16 (Reels / TikTok / Shorts)',
                        budgetOrTimeline: 'Стандарт (2-3 дня)',
                      });
                    }}
                  >
                    Заполнить ещё раз
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-3 border-b border-zinc-850">
                  <span className="text-sm font-semibold text-white">Оставить заявку</span>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/60 text-xs text-red-300">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Имя или компания"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Telegram / WhatsApp / Email *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="@username или телефон"
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Услуга
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-zinc-500"
                    >
                      <option value="AI Video Production">AI Video Production</option>
                      <option value="AI Photography & Visuals">AI Photography & Visuals</option>
                      <option value="Digital Characters & Avatars">Digital Characters & Avatars</option>
                      <option value="Creative & Art Direction">Creative & Art Direction</option>
                      <option value="Комплексный проект">Комплексный проект</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                      Формат
                    </label>
                    <select
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                      className="w-full bg-black border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-zinc-500"
                    >
                      <option value="9:16 (Reels / TikTok / Shorts)">9:16 (Reels / TikTok / Shorts)</option>
                      <option value="16:9 (Landscape / Web / Презентации)">16:9 (Landscape / Web / Презентации)</option>
                      <option value="1:1 (Квадрат / Посты / E-commerce)">1:1 (Квадрат / Посты / E-commerce)</option>
                      <option value="Мультиформатный пакет">Мультиформатный пакет</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">
                    Описание задачи
                  </label>
                  <textarea
                    rows={3}
                    value={formData.projectTask}
                    onChange={(e) => setFormData({ ...formData, projectTask: e.target.value })}
                    placeholder="Опишите, что требуется создать, стиль или пожелания..."
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full justify-center text-xs py-3"
                    icon={isSubmitting ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Col 2: Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-2xl border border-zinc-850 bg-zinc-950/70 space-y-3">
              <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold mb-2">
                Прямая связь
              </div>

              <a
                href={SITE_METADATA.contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 transition-all text-xs text-zinc-300 hover:text-white"
              >
                <div className="flex items-center gap-3">
                  <Send className="w-4 h-4 text-zinc-400" />
                  <div>
                    <div className="font-semibold text-white">Telegram</div>
                    <div className="text-[11px] text-zinc-500">Прямой диалог с продюсером</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href={SITE_METADATA.contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 transition-all text-xs text-zinc-300 hover:text-white"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-zinc-400" />
                  <div>
                    <div className="font-semibold text-white">WhatsApp</div>
                    <div className="text-[11px] text-zinc-500">{SITE_METADATA.contacts.phoneDisplay}</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href={SITE_METADATA.contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 transition-all text-xs text-zinc-300 hover:text-white"
              >
                <div className="flex items-center gap-3">
                  <InstagramIcon className="w-4 h-4 text-zinc-400" />
                  <div>
                    <div className="font-semibold text-white">Instagram</div>
                    <div className="text-[11px] text-zinc-500">Портфолио и бэкстейдж</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>

              <a
                href={`mailto:${SITE_METADATA.contacts.email}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 transition-all text-xs text-zinc-300 hover:text-white"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-[11px] text-zinc-500">{SITE_METADATA.contacts.email}</div>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
