"use client";

import React from "react";
import DynamicIcon from "./IconHelper";
import type { CapabilityContent, Tone } from "@/lib/landing-pages/types";

export interface FeatureCardProps {
  capability: CapabilityContent;
}

const toneStyles: Record<Tone, { iconBg: string; iconColor: string; hoverBorder: string }> = {
  blue: { iconBg: "bg-blue-500/10", iconColor: "text-blue-400", hoverBorder: "hover:border-blue-500/40" },
  indigo: { iconBg: "bg-indigo-500/10", iconColor: "text-indigo-400", hoverBorder: "hover:border-indigo-500/40" },
  cyan: { iconBg: "bg-cyan-500/10", iconColor: "text-cyan-400", hoverBorder: "hover:border-cyan-500/40" },
  purple: { iconBg: "bg-purple-500/10", iconColor: "text-purple-400", hoverBorder: "hover:border-purple-500/40" },
  rose: { iconBg: "bg-rose-500/10", iconColor: "text-rose-400", hoverBorder: "hover:border-rose-500/40" },
  amber: { iconBg: "bg-amber-500/10", iconColor: "text-amber-400", hoverBorder: "hover:border-amber-500/40" },
  emerald: { iconBg: "bg-emerald-500/10", iconColor: "text-emerald-400", hoverBorder: "hover:border-emerald-500/40" },
};

export function FeatureCard({ capability }: FeatureCardProps) {
  const style = toneStyles[capability.tone] || toneStyles.blue;

  return (
    <div
      className={`p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 transition-all group ${style.hoverBorder}`}
    >
      <div className={`w-10 h-10 rounded-xl ${style.iconBg} ${style.iconColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <DynamicIcon name={capability.icon} className="w-5 h-5" />
      </div>
      <h3 className="text-base font-bold text-white tracking-tight">{capability.title}</h3>
      <p className="text-xs text-gray-400 leading-relaxed">{capability.description}</p>
    </div>
  );
}

export default FeatureCard;
