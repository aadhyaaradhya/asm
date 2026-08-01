"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import DynamicIcon from "./IconHelper";
import type { StepFlowContent } from "@/lib/landing-pages/types";

export interface HowItWorksFlowProps {
  flow: StepFlowContent;
}

export function HowItWorksFlow({ flow }: HowItWorksFlowProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeading eyebrow={flow.eyebrow} title={flow.title} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {flow.steps.map((step, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#060c18] border border-white/10 space-y-4 relative overflow-hidden group hover:border-[#1e517b]/50 transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#1e517b]/20 border border-[#1e517b]/30 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <DynamicIcon name={step.icon} className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold text-gray-500">0{idx + 1}</span>
            </div>
            <h3 className="text-base font-bold text-white tracking-tight">{step.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorksFlow;
