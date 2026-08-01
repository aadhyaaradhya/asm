"use client";

import React from "react";

export interface LogoItem {
  name: string;
  src?: string;
}

export interface LogoStripProps {
  heading?: string;
  logos: LogoItem[];
}

export function LogoStrip({ heading, logos }: LogoStripProps) {
  return (
    <div className="space-y-4 text-center">
      {heading && (
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500 block">
          {heading}
        </span>
      )}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        {logos.map((item, idx) => (
          <div
            key={idx}
            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono font-bold text-gray-400 opacity-75 hover:opacity-100 hover:border-white/20 transition-all"
          >
            {item.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.src} alt={item.name} className="h-6 object-contain filter grayscale invert" />
            ) : (
              <span>{item.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoStrip;
