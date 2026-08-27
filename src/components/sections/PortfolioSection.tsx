'use client';

import React, { useState } from 'react';
import { PORTFOLIO } from '@/data/site-content';
import { PortfolioItem, ServiceCategory } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Play, Maximize2, X, ArrowUpRight } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (title: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories: { label: string; value: ServiceCategory }[] = [
    { label: 'Все проекты', value: 'all' },
    { label: 'Video', value: 'video' },
    { label: 'Photo', value: 'photo' },
    { label: 'Avatars', value: 'characters' },
    { label: 'Creative', value: 'creative' },
  ];

  const filteredItems = activeCategory === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">
            Портфолио
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Избранные работы
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Примеры реализованных проектов: коммерческие ролики, предметные фотосеты и цифровые аватары.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`text-xs px-4 py-2 rounded-full transition-all duration-200 focus:outline-none select-none ${
                activeCategory === cat.value
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-850'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl border border-zinc-850 bg-zinc-950/80 overflow-hidden cursor-pointer hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-zinc-850">
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Tags */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <Badge variant="default" className="bg-black/70 backdrop-blur-md border-zinc-750 text-[11px]">
                    {item.categoryLabel}
                  </Badge>
                  <span className="font-mono text-[10px] text-zinc-300 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-zinc-800">
                    {item.resolution}
                  </span>
                </div>

                {/* Center Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    {item.category === 'video' ? (
                      <Play className="w-5 h-5 fill-black translate-x-0.5" />
                    ) : (
                      <Maximize2 className="w-5 h-5 text-black" />
                    )}
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-zinc-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-zinc-500 bg-zinc-900/60 px-2 py-0.5 rounded border border-zinc-850"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-850">
              <div className="flex items-center gap-3">
                <Badge variant="tech">{selectedItem.categoryLabel}</Badge>
                <span className="font-mono text-xs text-zinc-400">{selectedItem.resolution}</span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Media Frame */}
            <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
              <img
                src={selectedItem.thumbnailUrl}
                alt={selectedItem.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{selectedItem.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{selectedItem.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-850">
                <div className="flex flex-wrap gap-1.5">
                  {selectedItem.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    const title = selectedItem.title;
                    setSelectedItem(null);
                    onSelectProject(title);
                  }}
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Заказать аналогичный проект
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
