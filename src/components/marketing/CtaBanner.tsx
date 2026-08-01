"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { CtaBannerContent } from "@/lib/landing-pages/types";

export interface CtaBannerProps {
  ctaBanner: CtaBannerContent;
}

export function CtaBanner({ ctaBanner }: CtaBannerProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-[#1e517b] via-[#163d5e] to-[#0d273e] rounded-3xl p-10 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
          {ctaBanner.title}
        </h2>

        <p className="text-xs sm:text-sm text-blue-200 max-w-xl mx-auto leading-relaxed">
          {ctaBanner.subtitle}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={ctaBanner.primaryCta.href}
            className="px-8 py-4 rounded-xl bg-white text-[#1e517b] hover:bg-gray-100 text-sm font-bold transition-all flex items-center gap-2 shadow-lg cursor-pointer"
          >
            <span>{ctaBanner.primaryCta.label}</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
          {ctaBanner.secondaryCta && (
            <Link
              href={ctaBanner.secondaryCta.href}
              className="px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 text-sm font-semibold transition-all cursor-pointer"
            >
              {ctaBanner.secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default CtaBanner;
