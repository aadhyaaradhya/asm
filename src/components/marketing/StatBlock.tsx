"use client";

import React from "react";
import type { Tone } from "@/lib/landing-pages/types";

export interface StatBlockProps {
  value: string;
  label: string;
  tone?: Tone;
  trend?: "up" | "down" | "flat";
}

const toneColorMap: Record<Tone, string> = {
  blue: "text-blue-400",
  cyan: "text-cyan-400",
  indigo: "text-indigo-400",
  purple: "text-purple-400",
  rose: "text-rose-400",
  amber: "text-amber-400",
  emerald: "text-emerald-400",
};

export function StatBlock({ value, label, tone = "blue", trend }: StatBlockProps) {
  const colorClass = toneColorMap[tone] || "text-blue-400";

  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-center hover:border-white/20 transition-all">
      <div className={`text-4xl sm:text-5xl font-black tracking-tight ${colorClass} flex items-center justify-center gap-1`}>
        <span>{value}</span>
        {trend === "up" && <span className="text-sm font-bold text-emerald-400">↑</span>}
        {trend === "down" && <span className="text-sm font-bold text-rose-400">↓</span>}
      </div>
      <p className="text-xs font-medium text-gray-400 max-w-[180px] mx-auto leading-relaxed">
        {label}
      </p>
    </div>
  );
}

export default StatBlock;
