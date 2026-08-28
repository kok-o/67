'use client';

import React, { useState } from 'react';
import { PORTFOLIO } from '@/data/site-content';
import { PortfolioItem, ServiceCategory } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence, Variants } from 'framer-motion';
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

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section id="portfolio" className="py-24 relative bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2"
          >
            Портфолио
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Избранные работы
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-base text-zinc-400"
          >
            Примеры реализованных проектов: коммерческие ролики, предметные фотосеты и цифровые аватары.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 mb-10 pb-4"
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`text-xs px-4 py-2 rounded-full transition-all duration-300 focus:outline-none select-none ${
                activeCategory === cat.value
                  ? 'bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                  : 'bg-zinc-950 text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-850'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Gallery Grid */}
        <motion.div 
          key={activeCategory} // forces re-render/re-animation when category changes
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              variants={itemVars}
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl border border-zinc-850 bg-zinc-950/80 overflow-hidden cursor-pointer hover:border-zinc-600 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-500 flex flex-col justify-between"
            >
              {/* Media Preview Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-zinc-850">
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 contrast-105 group-hover:brightness-100"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Top Tags */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <Badge variant="default" className="bg-black/70 backdrop-blur-md border-zinc-750 text-[11px] group-hover:bg-black/90 transition-colors">
                    {item.categoryLabel}
                  </Badge>
                  <span className="font-mono text-[10px] text-zinc-300 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-zinc-800">
                    {item.resolution}
                  </span>
                </div>

                {/* Center Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                    {item.category === 'video' ? (
                      <Play className="w-6 h-6 fill-black translate-x-0.5" />
                    ) : (
                      <Maximize2 className="w-6 h-6 text-black" />
                    )}
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between relative z-10 bg-gradient-to-t from-zinc-950 to-zinc-950/90">
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
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
                  className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
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
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{selectedItem.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{selectedItem.description}</p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-850">
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-medium text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                    onClick={() => {
                      const title = selectedItem.title;
                      setSelectedItem(null);
                      onSelectProject(title);
                    }}
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Заказать проект
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
