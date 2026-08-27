import React from 'react';
import { SERVICES } from '@/data/site-content';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '@/types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 relative bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 mb-2">
            Услуги
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Что мы создаём
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Полный цикл производства генеративного визуального контента под задачи вашего бренда.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className="group relative rounded-2xl border border-zinc-850 bg-zinc-950/60 p-7 sm:p-8 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/40 flex flex-col justify-between"
            >
              <div>
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-semibold text-zinc-400">
                    0{idx + 1}
                  </span>
                  <Badge variant="tech">{srv.badgeText || 'Active'}</Badge>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2.5">
                  {srv.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                  {srv.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2.5 mb-8">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 border-t border-zinc-850/80 flex items-center justify-between gap-4">
                <span className="text-xs text-zinc-500 font-mono">
                  {srv.specs}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onSelectService(srv.title)}
                  className="text-xs border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Заказать
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
