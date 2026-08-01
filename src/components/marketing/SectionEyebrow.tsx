"use client";

import React from "react";

export interface SectionEyebrowProps {
  children: React.ReactNode;
  tone?: "blue" | "indigo" | "cyan" | "purple" | "rose" | "amber" | "emerald";
}

const toneStyles = {
  blue: "text-[#2a6f97]",
  indigo: "text-indigo-400",
  cyan: "text-cyan-400",
  purple: "text-purple-400",
  rose: "text-rose-400",
  amber: "text-amber-400",
  emerald: "text-emerald-400",
};

export function SectionEyebrow({ children, tone = "blue" }: SectionEyebrowProps) {
  return (
    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest block ${toneStyles[tone] || toneStyles.blue}`}>
      {children}
    </span>
  );
}

export default SectionEyebrow;
