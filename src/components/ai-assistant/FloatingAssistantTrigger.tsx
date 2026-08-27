'use client';

import React from 'react';
import { Bot } from 'lucide-react';

interface FloatingAssistantTriggerProps {
  onClick: () => void;
}

export const FloatingAssistantTrigger: React.FC<FloatingAssistantTriggerProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={onClick}
        className="group relative flex items-center gap-2.5 bg-black hover:bg-zinc-950 border border-zinc-750 hover:border-zinc-500 text-white px-4 py-2.5 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none select-none"
        aria-label="Launch APEX AI Assistant"
      >
        {/* Subtle Outer Neon Glow Ring on Hover */}
        <div className="absolute -inset-0.5 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none" />

        {/* Status Dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>

        {/* Icon & Label */}
        <Bot className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" />
        <span className="font-mono text-xs font-semibold tracking-wider text-white">
          APEX AI
        </span>

        {/* Subtle Shortcut Chip */}
        <span className="hidden sm:inline-block font-mono text-[9px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded">
          CHAT
        </span>
      </button>
    </div>
  );
};
