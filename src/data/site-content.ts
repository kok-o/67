import { 
  ServiceItem, 
  PortfolioItem, 
  UseCaseItem, 
  WhyUsItem, 
  FaqItem 
} from '@/types';

export const SITE_METADATA = {
  title: 'Apex Agency — Visual Production & Creative Studio',
  description: 'Производство визуального контента: AI-видео, предметная съёмка, цифровые аватары и рекламные креативы.',
  slogan: 'Визуальный продакшн нового поколения.',
  headline: 'Apex Agency',
  subheadline: 'Создаём кинематографичный визуальный контент: от рекламных роликов до предметных фотосессий и цифровых аватаров.',
  contacts: {
    telegram: 'https://t.me/your_studio_handle',
    whatsapp: 'https://wa.me/15550192834',
    instagram: 'https://instagram.com/your_studio_handle',
    email: 'hello@apex-agency.com',
    phoneDisplay: '+1 (555) 019-2834',
    city: 'Global / Remote'
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-video',
    category: 'video',
    code: '01',
    title: 'AI Video Production',
    description: 'Кинематографичные рекламные ролики, продуктовые видео и тизеры в 4K разрешении.',
    features: [
      'Кинематографичный свет, физика движения и глубина кадра',
      'Полный цикл: сценарий, генерация, монтаж, саунд-дизайн',
      'Адаптация под любые форматы (16:9, 9:16, 1:1)'
    ],
    specs: 'Runway Gen-3 / Luma / ComfyUI Pipeline',
    badgeText: '4K Ultra HD'
  },
  {
    id: 'ai-photo',
    category: 'photo',
    code: '02',
    title: 'AI Photography & Visuals',
    description: 'Фотореалистичные лукбуки, предметная съёмка и рекламные баннеры сверхвысокого разрешения.',
    features: [
      'Точное сохранение консистентности продукта и бренда',
      'Любые локации, световые схемы и окружения',
      'Подготовка к печати и Digital-размещению'
    ],
    specs: 'Midjourney v6 / FLUX.1 Pro',
    badgeText: 'High Resolution'
  },
  {
    id: 'ai-characters',
    category: 'characters',
    code: '03',
    title: 'Digital Characters & Avatars',
    description: 'Виртуальные инфлюенсеры, амбассадоры брендов и дикторы с синхронизацией речи.',
    features: [
      '100% консистентность внешности и стиля',
      'Синхронизация мимики и голоса (Lip-Sync)',
      'Интеграция в видеоконтент, рекламу и соцсети'
    ],
    specs: 'LoRA Training / LivePortrait',
    badgeText: 'Lip-Sync'
  },
  {
    id: 'ai-creative',
    category: 'creative',
    code: '04',
    title: 'Creative & Art Direction',
    description: 'Нестандартные визуальные концепты, спецэффекты, 3D-композитинг и футуристичный арт-дирекшн.',
    features: [
      'Быстрая проработка нестандартных гипотез',
      'Многослойный рендеринг и сложный композитинг',
      'Адаптация под фирменный стиль заказчика'
    ],
    specs: 'Hybrid Visual Engine',
    badgeText: 'Art Direction'
  }
];

export const USE_CASES: UseCaseItem[] = [
  {
    id: 'uc-business',
    title: 'Бизнес и Корпоративный сектор',
    description: 'Имиджевые презентации, корпоративные обзоры и визуализация продуктов.',
    badge: 'Enterprise'
  },
  {
    id: 'uc-startups',
    title: 'Стартапы и Проекты',
    description: 'Инвесторские тизеры и презентационные ролики для запуска продуктов.',
    badge: 'Startups'
  },
  {
    id: 'uc-ads',
    title: 'Реклама и Маркетинг',
    description: 'Серии креативов для таргетированной рекламы и тестирования гипотез.',
    badge: 'Marketing'
  },
  {
    id: 'uc-events',
    title: 'Мероприятия и Конференции',
    description: 'Опенинги для экранов сцены, визуальное сопровождение и анонсы событий.',
    badge: 'Events'
  },
  {
    id: 'uc-celebration',
    title: 'Праздники и События',
    description: 'Памятные видео, сюжетные поздравления и стилизованные арт-истории.',
    badge: 'Personal'
  },
  {
    id: 'uc-social',
    title: 'Социальные сети и Reels',
    description: 'Динамичный контент и регулярный визуальный продакшн для охватов.',
    badge: 'Social'
  },
  {
    id: 'uc-brand',
    title: 'Брендинг и Манифесты',
    description: 'Философия бренда, эмоциональные имиджевые ролики и визуалы.',
    badge: 'Branding'
  },
  {
    id: 'uc-custom',
    title: 'Спецпроекты и Sci-Fi',
    description: 'Сложные художественные задачи, концепты и визуализации будущего.',
    badge: 'Special'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p-01',
    title: 'Nexus GT — Automotive Launch',
    category: 'video',
    categoryLabel: 'Video',
    description: 'Кинематографичный рекламный тизер концепт-кара в футуристичном мегаполисе с динамичной физикой света.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: '16:9',
    resolution: '4K Ultra HD',
    tags: ['Automotive', 'Cinematic', 'Runway Gen-3'],
    promptExcerpt: 'Ultra-cinematic footage of sleek dark electric supercar drifting through rainy neon metropolis, realistic reflection and anamorphic lens flare'
  },
  {
    id: 'p-02',
    title: 'Obsidian Essence — Luxury Perfume',
    category: 'photo',
    categoryLabel: 'Photo',
    description: 'Серия коммерческих предметных постеров с текстурами вулканического стекла и дыма.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: '1:1',
    resolution: '6000 x 6000 px',
    tags: ['Product Viz', 'FLUX.1 Pro', 'Studio Light'],
    promptExcerpt: 'Minimalist luxury black matte glass perfume bottle floating above wet basalt rock, dramatic chiaroscuro studio lighting'
  },
  {
    id: 'p-03',
    title: 'Elena V. — Digital Brand Ambassador',
    category: 'characters',
    categoryLabel: 'Avatar',
    description: 'Виртуальный амбассадор для бренда с сохранением постоянной внешности во всех ракурсах.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: '9:16',
    resolution: '1080 x 1920 px',
    tags: ['Avatar', 'Face Consistency', 'Lip-Sync'],
    promptExcerpt: 'Hyperrealistic portrait of elegant business woman in charcoal blazer, authentic studio lighting, 85mm lens'
  },
  {
    id: 'p-04',
    title: 'Biophilic City 2050',
    category: 'creative',
    categoryLabel: 'Creative',
    description: 'Масштабная визуализация экологичного мегаполиса будущего с органической архитектурой.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: '16:9',
    resolution: '4K Cinema',
    tags: ['Architecture', 'Worldbuilding', 'Midjourney v6'],
    promptExcerpt: 'Breathtaking panoramic shot of utopian sustainable city with hanging gardens and solar glass skyscrapers'
  },
  {
    id: 'p-05',
    title: 'Chronos — Timepiece Campaign',
    category: 'video',
    categoryLabel: 'Video',
    description: 'Продуктовое макро-видео часов с демонстрацией вращения шестерёнок механизма.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: '16:9',
    resolution: '4K Ultra HD',
    tags: ['Macro', 'Precision', 'Luma'],
    promptExcerpt: 'Extreme macro slow motion of luxury mechanical watch movement, floating golden cogs, cinematic dark luxury'
  },
  {
    id: 'p-06',
    title: 'Chrome Renaissance — Fashion Lookbook',
    category: 'photo',
    categoryLabel: 'Photo',
    description: 'Виртуальный лукбук с сочетанием классических тканей и футуристичных хромированных элементов.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: '1:1',
    resolution: '5000 x 5000 px',
    tags: ['Fashion', 'Editorial', 'High-Res'],
    promptExcerpt: 'High fashion editorial photography, model wearing structured metallic couture dress, sculptural shadows'
  }
];

export const WHY_US: WhyUsItem[] = [
  {
    code: '01',
    title: 'Передовые нейросети',
    description: 'Используем современные пайплайны Runway, Luma, Midjourney v6 и кастомные модели.'
  },
  {
    code: '02',
    title: 'Арт-дирекшн',
    description: 'Выстраиваем композицию, свет, драматургию и кинематографичный ритм каждого кадра.'
  },
  {
    code: '03',
    title: 'Высокая скорость',
    description: 'Готовый проект за 2–4 дня без затрат на аренду студий, кастинги и сложную логистику.'
  },
  {
    code: '04',
    title: 'Гибкость правок',
    description: 'Быстро корректируем стили, локации и персонажей без повторных съёмочных дней.'
  },
  {
    code: '05',
    title: 'Масштаб и детализация',
    description: 'От предметного макро до масштабных визуализаций в разрешении до 4K Ultra HD.'
  },
  {
    code: '06',
    title: 'Полные коммерческие права',
    description: 'Все материалы передаются заказчику с правом неограниченного коммерческого использования.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Технологии',
    question: 'Что такое AI-видео и как оно создаётся?',
    answer: 'AI-видео — это контент, создаваемый с помощью генеративных нейросетей на основе сценария и референсов. Мы прорабатываем раскадровку, режиссируем сцены, выполняем профессиональный монтаж, цветокоррекцию и саунд-дизайн.'
  },
  {
    id: 'faq-2',
    category: 'Услуги',
    question: 'Какие форматы вы производите?',
    answer: 'Мы создаём ролики для соцсетей (9:16 Reels/Shorts), широкоформатные видео для презентаций и сайтов (16:9), квадратные форматы (1:1), а также фотосеты высокого разрешения.'
  },
  {
    id: 'faq-3',
    category: 'Материалы',
    question: 'Можно ли использовать реальный продукт или человека?',
    answer: 'Да. Мы можем интегрировать ваш реальный продукт, логотип или лицо человека с точным сохранением узнаваемости и деталей.'
  },
  {
    id: 'faq-4',
    category: 'Сроки',
    question: 'Сколько времени занимает проект?',
    answer: 'Фотосет создаётся за 24–48 часов. Видеоролик под ключ — за 2–4 рабочих дня. Сложные спецпроекты и аватары занимают от 4 до 7 дней.'
  },
  {
    id: 'faq-5',
    category: 'Права',
    question: 'Кому принадлежат права на готовый контент?',
    answer: 'После завершения проекта все коммерческие права на созданные материалы полностью принадлежат заказчику.'
  }
];
