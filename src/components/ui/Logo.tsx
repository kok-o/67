import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Vercel-style Sharp Geometric Apex Icon */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center`}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Subtle Outer Glow */}
          <polygon
            points="20,4 37,34 3,34"
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1"
          />
          {/* Inner Solid Tech Apex */}
          <polygon
            points="20,8 33,31 7,31"
            fill="url(#apex-gradient)"
          />
          {/* Laser Cut Accent */}
          <polygon
            points="20,15 28,29 12,29"
            fill="#000000"
          />
          <line
            x1="20"
            y1="4"
            x2="20"
            y2="15"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="apex-gradient" x1="20" y1="8" x2="20" y2="31" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#71717a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-bold tracking-tight text-white font-sans text-sm sm:text-base">
            APEX
          </span>
          <span className="font-mono text-[9px] tracking-[0.28em] text-zinc-400 uppercase mt-0.5">
            AGENCY
          </span>
        </div>
      )}
    </div>
  );
};
