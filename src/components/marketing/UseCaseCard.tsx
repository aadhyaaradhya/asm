"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import type { UseCaseContent } from "@/lib/landing-pages/types";

export interface UseCaseSectionProps {
  useCases: UseCaseContent[];
}

export function UseCaseSection({ useCases }: UseCaseSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <SectionHeading
        eyebrow="USE CASES"
        title="Built for Every Security Role"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {useCases.map((uc, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-gradient-to-b from-[#060c18] to-black/40 border border-white/10 space-y-3 relative overflow-hidden"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400 block">
              {uc.persona}
            </span>
            <h3 className="text-base font-bold text-white tracking-tight">{uc.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{uc.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UseCaseSection;
