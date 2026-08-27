'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { generateCreativeConcept } from '@/lib/ai-generator';
import { GeneratedConcept, LeadSubmission } from '@/types';
import { 
  Bot, 
  X, 
  Send, 
  RefreshCw, 
  Terminal, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
  initialConcept?: GeneratedConcept | null;
}

interface ChatEntry {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: Array<{ label: string; actionKey: string }>;
  concept?: GeneratedConcept;
}

type LeadStep = 'idle' | 'task' | 'domain' | 'format' | 'timeline' | 'contact' | 'confirm' | 'done';

const DEFAULT_CHAT_OPTIONS = [
  { label: '01 // Направление AI-видео', actionKey: 'opt_video' },
  { label: '02 // Направление AI-фото', actionKey: 'opt_photo' },
  { label: '03 // Придумать концепцию идеи', actionKey: 'opt_concept' },
  { label: '04 // Форматы и возможности', actionKey: 'opt_pipeline' },
  { label: '05 // Портфолио и кейсы', actionKey: 'opt_portfolio' },
  { label: '06 // Оформить заявку на проект', actionKey: 'opt_lead' },
];

const getInitialMessages = (concept?: GeneratedConcept | null): ChatEntry[] => {
  const greeting: ChatEntry = {
    id: 'init-1',
    sender: 'bot',
    text: 'Здравствуйте! Я AI-ассистент креативной студии.\n\nПомогу подобрать оптимальный стек нейросетей, согласовать формат и тайминг, сгенерировать креативную концепцию или оформить ТЗ.',
    timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    options: DEFAULT_CHAT_OPTIONS,
  };

  if (concept) {
    return [
      greeting,
      {
        id: 'init-concept',
        sender: 'bot',
        text: `Загружена готовая концепция: "${concept.logline}". Давайте сформируем бриф на производство!`,
        timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
        concept: concept,
        options: [{ label: 'Оформить заявку с этой концепцией', actionKey: 'opt_lead_concept' }]
      }
    ];
  }
  return [greeting];
};

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose,
  initialTopic: _initialTopic,
  initialConcept,
}) => {
  const [messages, setMessages] = useState<ChatEntry[]>(() => getInitialMessages(initialConcept));
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadStep, setLeadStep] = useState<LeadStep>('idle');
  const [leadDraft, setLeadDraft] = useState<Partial<LeadSubmission>>({
    serviceType: 'AI Video Production',
    source: 'APEX AI Assistant Chat'
  });

  const [prevConcept, setPrevConcept] = useState(initialConcept);
  if (initialConcept !== prevConcept) {
    setPrevConcept(initialConcept);
    if (initialConcept) {
      setMessages(getInitialMessages(initialConcept));
    }
  }

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  function getTimeString() {
    return new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  }

  const handleActionClick = (actionKey: string, customLabel?: string) => {
    if (customLabel) {
      addMessage('user', customLabel);
    }

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      switch (actionKey) {
        case 'opt_video':
          addMessage('bot', 'AI Video Production:\n\n• Разрешение: до 4K Ultra HD\n• Форматы: 9:16 (Reels/TikTok), 16:9 (Презентации/Web), 1:1\n• Пайплайн: Runway Gen-3 / Luma / Sora / ComfyUI\n• Сроки: 2-4 рабочих дня\n\nХотите сгенерировать сценарий под вашу тему или сразу оформить заявку?', [
            { label: 'Придумать концепцию ролика', actionKey: 'opt_concept' },
            { label: 'Оформить заявку на видео', actionKey: 'start_lead_video' },
          ]);
          break;

        case 'opt_photo':
          addMessage('bot', 'AI Photography & Visuals:\n\n• Разрешение: до 6000x6000 px для печати и веба\n• Применение: лукбуки, предметные key-visuals, e-commerce\n• Модели: FLUX.1 Pro / Midjourney v6\n• Сроки: от 24-48 часов\n\nМожем интегрировать ваш реальный продукт с сохранением деталей.', [
            { label: 'Оформить заявку на фотосет', actionKey: 'start_lead_photo' },
            { label: 'Задать вопрос', actionKey: 'opt_question' },
          ]);
          break;

        case 'opt_pipeline':
          addMessage('bot', 'Технологические возможности студии:\n\n1. AI Video — кинематографичные ролики и реклама (до 4K)\n2. AI Photo — рекламные фотосеты и предметная съёмка\n3. AI Characters — виртуальные амбассадоры с Lip-Sync\n4. R&D Creative — сюрреалистичные миры и спецэффекты\n\nДавайте сформируем концепт под вашу задачу!', [
            { label: 'Придумать концепцию', actionKey: 'opt_concept' },
            { label: 'Посмотреть примеры работ', actionKey: 'opt_portfolio' },
          ]);
          break;

        case 'opt_portfolio':
          addMessage('bot', 'В нашем портфолио представлены коммерческие ролики, предметные лукбуки и AI-аватары.\n\nВы можете ознакомиться с галереей в блоке "Наши работы" на сайте, либо описать вашу нишу — я предложу подходящий формат.', [
            { label: 'Сгенерировать концепцию', actionKey: 'opt_concept' },
            { label: 'Оформить заявку', actionKey: 'opt_lead' },
          ]);
          break;

        case 'opt_concept':
          addMessage('bot', 'Напишите кратко вашу задумку (например: "Рекламный ролик для кофейни в неоновом стиле" или "Предметное фото флакона духов"). Я сформирую логлайн, раскадровку и технический формат.');
          break;

        case 'opt_lead':
        case 'start_lead_video':
        case 'start_lead_photo':
        case 'opt_lead_concept':
          startLeadFlow(actionKey);
          break;

        default:
          addMessage('bot', 'Чем ещё я могу вам помочь?', DEFAULT_CHAT_OPTIONS);
          break;
      }
    }, 450);
  };

  const startLeadFlow = (triggerKey?: string) => {
    let service = 'AI Video Production';
    if (triggerKey === 'start_lead_photo') service = 'AI Photography & Visuals';

    setLeadDraft(prev => ({
      ...prev,
      serviceType: service,
      conceptNotes: initialConcept ? initialConcept.logline : undefined
    }));
    setLeadStep('task');

    addMessage('bot', 'Шаг 1 из 4: Что именно необходимо создать? (Опишите задачу или тему проекта)');
  };

  const handleUserInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const text = inputValue.trim();
    setInputValue('');
    addMessage('user', text);

    // If in Lead Qualification Flow
    if (leadStep !== 'idle' && leadStep !== 'done') {
      processLeadStep(text);
      return;
    }

    // Otherwise standard prompt/concept generation
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const generated = generateCreativeConcept(text);
      addMessage(
        'bot',
        `Сгенерирована AI-концепция:\n\n• Логлайн: ${generated.logline}\n• Стиль: ${generated.visualStyle}\n• Рекомендуемый формат: ${generated.recommendedFormat}\n• Оценка сроков: ${generated.estimatedTimeline}\n\nХотите отправить эту концепцию продюсеру студии?`,
        [
          { label: 'Отправить заявку продюсеру', actionKey: 'opt_lead_concept' },
          { label: 'Задать другой вопрос', actionKey: 'opt_reset' }
        ]
      );
    }, 600);
  };

  const processLeadStep = (input: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);

      switch (leadStep) {
        case 'task':
          setLeadDraft(prev => ({ ...prev, projectTask: input }));
          setLeadStep('format');
          addMessage('bot', 'Шаг 2 из 4: В каком формате нужен контент?\n(Например: 9:16 для Reels/TikTok, 16:9 для презентации или 1:1 для постов)', [
            { label: '9:16 (Reels / TikTok)', actionKey: 'fmt_916' },
            { label: '16:9 (Landscape / Web)', actionKey: 'fmt_169' },
            { label: '1:1 (Square)', actionKey: 'fmt_11' },
          ]);
          break;

        case 'format':
          setLeadDraft(prev => ({ ...prev, format: input }));
          setLeadStep('timeline');
          addMessage('bot', 'Шаг 3 из 4: В какие сроки нужен готовый результат?\n(Например: Срочно за 24-48ч / Стандарт 3-4 дня)', [
            { label: 'Стандарт (3-4 дня)', actionKey: 'time_std' },
            { label: 'Срочно (24-48 часов)', actionKey: 'time_urgent' },
          ]);
          break;

        case 'timeline':
          setLeadDraft(prev => ({ ...prev, budgetOrTimeline: input }));
          setLeadStep('contact');
          addMessage('bot', 'Шаг 4 из 4: Укажите ваше имя и контакт (Telegram username, WhatsApp или номер телефона):');
          break;

        case 'contact':
          setLeadDraft(prev => ({ ...prev, contact: input, name: input.split(' ')[0] || 'Клиент' }));
          setLeadStep('confirm');

          const finalTask = leadDraft.projectTask || 'AI Production';
          const finalFormat = leadDraft.format || '9:16';

          addMessage(
            'bot',
            `Заявка сформирована:\n\n• Услуга: ${leadDraft.serviceType}\n• Задача: ${finalTask}\n• Формат: ${finalFormat}\n• Контакт: ${input}\n\nОтправить заявку продюсеру APEX AI STUDIO?`,
            [
              { label: 'Подтвердить и отправить заявку', actionKey: 'submit_final_lead' }
            ]
          );
          break;

        case 'confirm':
          submitFinalLead();
          break;
      }
    }, 400);
  };

  const submitFinalLead = async () => {
    setIsTyping(true);
    const finalPayload: LeadSubmission = {
      name: leadDraft.name || 'Клиент из AI Chat',
      contact: leadDraft.contact || 'Не указан',
      serviceType: leadDraft.serviceType || 'AI Video Production',
      projectTask: leadDraft.projectTask || 'Запрос через AI Assistant',
      format: leadDraft.format || '9:16',
      budgetOrTimeline: leadDraft.budgetOrTimeline || 'Стандарт',
      conceptNotes: leadDraft.conceptNotes,
      source: 'AI Assistant Chat Widget'
    };

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalPayload),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsTyping(false);
      setLeadStep('done');

      addMessage(
        'bot',
        'Заявка успешно зафиксирована в макете! В рабочем проекте эти данные мгновенно поступают в CRM или Telegram продюсера.\n\nВы также можете протестировать переход в мессенджер.',
        [
          { label: 'Открыть WhatsApp (демо)', actionKey: 'open_wa' },
          { label: 'Начать новый диалог', actionKey: 'opt_reset' },
        ]
      );
    }
  };

  const addMessage = (
    sender: 'bot' | 'user',
    text: string,
    options?: Array<{ label: string; actionKey: string }>
  ) => {
    const newEntry: ChatEntry = {
      id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
      sender,
      text,
      timestamp: getTimeString(),
      options,
    };
    setMessages(prev => [...prev, newEntry]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full sm:max-w-lg h-[92vh] sm:h-[650px] bg-zinc-950 border border-zinc-800 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-zinc-850 bg-black/80">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-xs tracking-tight">APEX AI ASSISTANT</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <span className="font-mono text-[9px] text-zinc-500 tracking-wider">NEURAL ENGINE // ONLINE</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-white text-black font-medium'
                    : 'bg-zinc-900 border border-zinc-850 text-zinc-200'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {msg.concept && (
                  <div className="mt-3 p-2.5 rounded-lg bg-black/60 border border-zinc-800 font-mono text-[10px] text-zinc-400 space-y-1">
                    <div className="text-white font-semibold">ЛОГЛАЙН:</div>
                    <p>{msg.concept.logline}</p>
                  </div>
                )}
              </div>

              <span className="font-mono text-[9px] text-zinc-600 mt-1 px-1">
                {msg.timestamp}
              </span>

              {/* Action Chip Options */}
              {msg.options && msg.options.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                  {msg.options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => {
                        if (opt.actionKey === 'submit_final_lead') {
                          submitFinalLead();
                        } else if (opt.actionKey === 'open_wa') {
                          window.open('https://wa.me/15550192834', '_blank');
                        } else if (opt.actionKey === 'opt_reset') {
                          setLeadStep('idle');
                          handleActionClick('default');
                        } else if (opt.actionKey === 'fmt_916') {
                          processLeadStep('9:16 (Reels/TikTok)');
                        } else if (opt.actionKey === 'fmt_169') {
                          processLeadStep('16:9 (Landscape/Web)');
                        } else if (opt.actionKey === 'fmt_11') {
                          processLeadStep('1:1 (Square)');
                        } else if (opt.actionKey === 'time_std') {
                          processLeadStep('Стандарт (3-4 дня)');
                        } else if (opt.actionKey === 'time_urgent') {
                          processLeadStep('Срочно (24-48 часов)');
                        } else {
                          handleActionClick(opt.actionKey, opt.label);
                        }
                      }}
                      className="font-mono text-[10px] text-zinc-300 bg-zinc-950 hover:bg-zinc-800 hover:text-white border border-zinc-800 px-2.5 py-1.5 rounded-lg transition-all text-left flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-2.5 h-2.5 text-zinc-500" />
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-[10px] bg-zinc-900/60 border border-zinc-850 px-3 py-2 rounded-xl w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce [animation-delay:0.4s]" />
              <span className="ml-1">APEX AI думает...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleUserInput} className="p-3 border-t border-zinc-850 bg-black flex items-center gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Напишите сообщение или опишите задачу..."
            className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 font-sans"
          />
          <Button
            variant="primary"
            size="sm"
            type="submit"
            disabled={!inputValue.trim()}
            className="px-3"
            icon={<Send className="w-3.5 h-3.5" />}
          >
            {''}
          </Button>
        </form>
      </div>
    </div>
  );
};
