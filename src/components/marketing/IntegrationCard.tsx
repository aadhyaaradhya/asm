"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import DynamicIcon from "./IconHelper";
import type { IntegrationContent } from "@/lib/landing-pages/types";

export interface IntegrationGridProps {
  integrations: IntegrationContent[];
}

export function IntegrationGrid({ integrations }: IntegrationGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <SectionHeading
        eyebrow="INTEGRATIONS"
        title="Seamless Output Destinations"
        description="Stream threat signals directly into your existing security workflow and ticketing systems."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {integrations.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4 hover:border-[#1e517b]/50 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1e517b]/20 text-blue-400 flex items-center justify-center shrink-0">
              <DynamicIcon name={item.icon} className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">{item.label}</h4>
              {item.description && (
                <p className="text-xs text-gray-400">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const IntegrationCard = IntegrationGrid;

export default IntegrationGrid;
