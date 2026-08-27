import { GeneratedConcept, ServiceCategory } from '@/types';

interface ConceptTemplate {
  keywords: string[];
  category: Exclude<ServiceCategory, 'all'>;
  stylePrefix: string;
  defaultFormat: string;
  timeline: string;
}

const TEMPLATES: ConceptTemplate[] = [
  {
    keywords: ['ресторан', 'кафе', 'кофе', 'еда', 'бургер', 'блюдо', 'бар'],
    category: 'video',
    stylePrefix: 'Cinematic Gastro-Macro, Dark Luxury Warm Tones, 60fps Slow-Mo',
    defaultFormat: '9:16 (Reels/Shorts) + 16:9 Master',
    timeline: '2-3 рабочих дня'
  },
  {
    keywords: ['авто', 'машина', 'тачка', 'дилер', 'сервис', 'детейлинг'],
    category: 'video',
    stylePrefix: 'Anamorphic Neon-Chiaroscuro, Dynamic Speed Cuts, 4K High Dynamic Range',
    defaultFormat: '16:9 Cinema + 9:16 Teaser',
    timeline: '3-4 рабочих дня'
  },
  {
    keywords: ['одежда', 'бренд', 'лукбук', 'мода', 'вещи', 'коллекция', 'fashion'],
    category: 'photo',
    stylePrefix: 'High-Fashion Editorial, Sculptural Studio Lighting, Vogue Minimalist Style',
    defaultFormat: '1:1 Square + 4:5 Vertical',
    timeline: '24-48 часов'
  },
  {
    keywords: ['персонаж', 'аватар', 'диктор', 'эксперт', 'модель', 'девушка', 'лицо'],
    category: 'characters',
    stylePrefix: 'Hyperrealistic LoRA Character Consistency, 85mm Lens, Photoreal Skin Texture',
    defaultFormat: '9:16 Story/Reels + 16:9 Presentation',
    timeline: '4-5 рабочих дней'
  },
  {
    keywords: ['недвижимость', 'жк', 'квартира', 'дом', 'интерьер', 'архитектура'],
    category: 'video',
    stylePrefix: 'Architectural Drone Perspective, Golden Hour Sunlight, Clean Geometric Symmetry',
    defaultFormat: '16:9 Landscape + 9:16 Story',
    timeline: '3-4 рабочих дня'
  }
];

export function generateCreativeConcept(userPrompt: string): GeneratedConcept {
  const promptLower = userPrompt.toLowerCase();
  
  const matched = TEMPLATES.find(t => t.keywords.some(k => promptLower.includes(k)));
  
  const category: Exclude<ServiceCategory, 'all'> = matched ? matched.category : 'video';
  const visualStyle = matched 
    ? matched.stylePrefix 
    : 'Cinematic Minimalist Dark Luxury, Volumetric Lighting, Ultra-detailed 8K Composition';
  const recommendedFormat = matched ? matched.defaultFormat : '9:16 (Reels/TikTok) & 16:9 (Web/YouTube)';
  const estimatedTimeline = matched ? matched.timeline : '2-3 рабочих дня';

  // Dynamic Scene Generation based on prompt
  const scenes = [
    `Кадр 01: Хук первых 3 секунд — интригующий макро-план с динамичным наплывом камеры, акцентирующий внимание на "${userPrompt.slice(0, 50)}...".`,
    `Кадр 02: Основное повествование — раскрытие ключевой ценности и эмоциональной атмосферы через плавный переход света и глубины резкости.`,
    `Кадр 03: Кульминация и динамика — ритмичный монтаж с демонстрацией продукта/услуги в премиальном антураже.`,
    `Кадр 04: Финал и Call-to-Action — акцентный логотип APEX AI Studio x Заказчик с лаконичным слоганом и контактами.`
  ];

  return {
    logline: `Эксклюзивная AI-визуализация: "${userPrompt.trim()}" в премиальном кинематографичном исполнении с адаптацией под каналы продвижения.`,
    visualStyle,
    scenes,
    recommendedFormat,
    estimatedTimeline,
    serviceCategory: category
  };
}
