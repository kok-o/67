'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { UseCasesSection } from '@/components/sections/UseCasesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaContactSection } from '@/components/sections/CtaContactSection';
import { SITE_METADATA } from '@/data/site-content';

export default function HomePage() {
  const handleSelectService = (serviceName: string) => {
    const message = encodeURIComponent(`Здравствуйте! Хочу заказать услугу: ${serviceName}`);
    window.open(`${SITE_METADATA.contacts.telegram}?text=${message}`, '_blank');
  };

  const handleSelectProject = (projectTitle: string) => {
    const message = encodeURIComponent(`Здравствуйте! Хочу заказать проект по образцу: "${projectTitle}"`);
    window.open(`${SITE_METADATA.contacts.telegram}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black flex flex-col font-sans">
      {/* Navigation Header */}
      <Header />

      <main className="flex-1">
        {/* 01. Hero */}
        <HeroSection />

        {/* 02. Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 03. Portfolio */}
        <PortfolioSection onSelectProject={handleSelectProject} />

        {/* 04. Use Cases */}
        <UseCasesSection />

        {/* 05. Why Us */}
        <WhyUsSection />

        {/* 06. FAQ */}
        <FaqSection />

        {/* 07. Contact Card (Telegram CTA) */}
        <CtaContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
