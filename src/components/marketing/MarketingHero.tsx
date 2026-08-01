"use client";

import React from "react";
import Link from "next/link";
import { FiShield, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import type { HeroContent } from "@/lib/landing-pages/types";

export interface MarketingHeroProps {
  hero: HeroContent;
}

export function MarketingHero({ hero }: MarketingHeroProps) {
  const renderHeadline = () => {
    if (!hero.headlineAccent) return hero.headline;
    const parts = hero.headline.split(hero.headlineAccent);
    if (parts.length < 2) return hero.headline;
    return (
      <>
        {parts[0]}
        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
          {hero.headlineAccent}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#1e517b]/30 to-[#2a6f97]/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Eyebrow badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-blue-300 backdrop-blur-md">
        <FiShield className="w-3.5 h-3.5" />
        <span>{hero.eyebrow}</span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
        {renderHeadline()}
      </h1>

      {/* Subhead */}
      <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal">
        {hero.subhead}
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <Link
          href={hero.primaryCta.href}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1e517b] to-[#2a6f97] hover:opacity-90 text-white text-sm font-semibold transition-all flex items-center gap-2 shadow-xl shadow-[#1e517b]/30 cursor-pointer"
        >
          <span>{hero.primaryCta.label}</span>
          <FiArrowRight className="w-4 h-4" />
        </Link>
        {hero.secondaryCta && (
          <Link
            href={hero.secondaryCta.href}
            className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-semibold transition-all cursor-pointer"
          >
            {hero.secondaryCta.label}
          </Link>
        )}
      </div>

      {/* Trust Strip */}
      {hero.trustBadges.length > 0 && (
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono font-bold tracking-widest text-gray-400 uppercase">
          {hero.trustBadges.map((badge, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span>•</span>}
              <span className="flex items-center gap-1.5">
                <FiCheckCircle className="text-[#2a6f97]" />
                {badge}
              </span>
            </React.Fragment>
          ))}
        </div>
      )}
    </section>
  );
}

export default MarketingHero;
