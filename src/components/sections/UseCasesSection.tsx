import React from 'react';
import { USE_CASES } from '@/data/site-content';
import { Badge } from '@/components/ui/Badge';

export const UseCasesSection: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 relative bg-black border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">
            Сферы применения
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Для каких задач
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Решения для брендов, стартапов, агентств и медиапроектов любого масштаба.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {USE_CASES.map((uc, idx) => (
            <div
              key={uc.id}
              className="p-6 rounded-2xl border border-zinc-850 bg-zinc-950/70 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-zinc-500 font-semibold">
                    0{idx + 1}
                  </span>
                  <Badge variant="tech">{uc.badge}</Badge>
                </div>
                <h3 className="font-semibold text-white text-base mb-2 group-hover:text-zinc-100">
                  {uc.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {uc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
