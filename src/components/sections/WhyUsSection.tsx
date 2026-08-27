import React from 'react';
import { WHY_US } from '@/data/site-content';

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-24 relative bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">
            Преимущества
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Почему Apex Agency
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Сочетание передовых нейросетевых моделей с профессиональной режиссурой и строгим контролем качества.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl border border-zinc-850 bg-zinc-950/70 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-4">
                  <span className="font-mono text-sm text-zinc-500 font-semibold">{item.code}</span>
                </div>

                <h3 className="font-bold text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
