import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  lightModeOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  showSubtitle = true,
}) => {
  const sizeClasses = {
    sm: { icon: 'w-8 h-8', mainText: 'text-lg', subText: 'text-[9px]' },
    md: { icon: 'w-10 h-10', mainText: 'text-xl', subText: 'text-[10px]' },
    lg: { icon: 'w-12 h-12', mainText: 'text-2xl', subText: 'text-xs' },
    xl: { icon: 'w-16 h-16', mainText: 'text-3xl', subText: 'text-sm' },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* SVG Icon matching Kopdes Merah Putih Logo */}
      <div className={`relative ${currentSize.icon} flex-shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Indonesian Flag on Top */}
          <g transform="translate(48, 2)">
            {/* Pole */}
            <rect x="11" y="0" width="3" height="28" fill="#94A3B8" rx="1" />
            <circle cx="12.5" cy="1" r="2.5" fill="#DC2626" />
            {/* Flag Top (Red) */}
            <path d="M14 3 C18 1, 24 5, 28 3 L28 11 C24 13, 18 9, 14 11 Z" fill="#DC2626" />
            {/* Flag Bottom (White) */}
            <path d="M14 11 C18 9, 24 13, 28 11 L28 18 C24 20, 18 16, 14 18 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="0.5" />
          </g>

          {/* Red House Outline */}
          <path 
            d="M 12 108 L 12 60 L 52 28 L 52 38 L 22 62 L 22 100 L 108 100 L 108 108 Z" 
            fill="#B71C1C" 
          />
          <path 
            d="M 52 28 L 108 72 L 100 80 L 52 42 L 12 74 L 12 60 Z" 
            fill="#D32F2F" 
          />

          {/* Window in House */}
          <rect x="28" y="70" width="8" height="8" rx="1" fill="#CBD5E1" />
          <rect x="38" y="70" width="8" height="8" rx="1" fill="#CBD5E1" />
          <rect x="28" y="80" width="8" height="8" rx="1" fill="#CBD5E1" />
          <rect x="38" y="80" width="8" height="8" rx="1" fill="#CBD5E1" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-tight">
        <div className={`font-extrabold tracking-tight ${currentSize.mainText} flex items-center`}>
          <span className="text-red-600 dark:text-red-500">KOP</span>
          <span className="text-red-700 dark:text-red-400">DES</span>
        </div>
        {showSubtitle && (
          <div className={`font-bold tracking-widest text-slate-700 dark:text-slate-300 uppercase ${currentSize.subText}`}>
            Merah Putih
            <span className="block text-[8px] font-semibold tracking-normal text-emerald-600 dark:text-emerald-400 normal-case">
              Sriamur • Tambun Utara
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
