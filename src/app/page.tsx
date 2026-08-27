'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { UseCasesSection } from '@/components/sections/UseCasesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaContactSection } from '@/components/sections/CtaContactSection';

export default function HomePage() {
  const [prefilledService, setPrefilledService] = useState<string>('AI Video Production');
  const [prefilledTask, setPrefilledTask] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setPrefilledService(serviceName);
    const contactsEl = document.getElementById('contacts');
    if (contactsEl) {
      contactsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProject = (projectTitle: string) => {
    setPrefilledTask(`Заказ проекта по образцу кейса: "${projectTitle}"`);
    const contactsEl = document.getElementById('contacts');
    if (contactsEl) {
      contactsEl.scrollIntoView({ behavior: 'smooth' });
    }
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

        {/* 07. Contact & Order Form */}
        <CtaContactSection
          prefilledTask={prefilledTask}
          prefilledService={prefilledService}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
