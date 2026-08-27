import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'tech' | 'accent';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-mono text-[11px] font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full select-none';

  const variants = {
    default: 'bg-zinc-900 text-zinc-300 border border-zinc-800',
    outline: 'bg-transparent text-zinc-400 border border-zinc-800',
    tech: 'bg-zinc-950 text-zinc-400 border border-zinc-800/80',
    accent: 'bg-white/10 text-white border border-white/20',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
