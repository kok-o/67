export type ServiceCategory = 'all' | 'video' | 'photo' | 'characters' | 'creative';

export interface ServiceItem {
  id: string;
  category: Exclude<ServiceCategory, 'all'>;
  code: string;
  title: string;
  description: string;
  features: string[];
  specs: string;
  badgeText?: string;
  priceFrom?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<ServiceCategory, 'all'>;
  categoryLabel: string;
  description: string;
  thumbnailUrl: string;
  videoUrl?: string;
  aspectRatio: '16:9' | '9:16' | '1:1';
  resolution: string;
  tags: string[];
  promptExcerpt?: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  description: string;
  badge: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface PricingPlan {
  id: string;
  title: string;
  tag: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  serviceCategory: Exclude<ServiceCategory, 'all'>;
}

export interface WhyUsItem {
  code: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GeneratedConcept {
  logline: string;
  visualStyle: string;
  scenes: string[];
  recommendedFormat: string;
  estimatedTimeline: string;
  serviceCategory: Exclude<ServiceCategory, 'all'>;
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  conceptData?: GeneratedConcept;
  isLeadForm?: boolean;
  options?: Array<{ label: string; action: () => void | string }>;
}

export interface LeadSubmission {
  name: string;
  contact: string;
  serviceType: string;
  projectTask: string;
  format?: string;
  budgetOrTimeline?: string;
  conceptNotes?: string;
  source?: string;
}
