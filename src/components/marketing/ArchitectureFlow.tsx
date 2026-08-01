"use client";

import React from "react";
import DynamicIcon from "./IconHelper";
import SectionHeading from "./SectionHeading";

export interface IntakeItem {
  label: string;
  icon: string;
}

export interface OutputItem {
  label: string;
  icon: string;
}

export interface ArchitectureFlowProps {
  intake: IntakeItem[];
  core: {
    title: string;
    subhead: string;
    steps: string[];
  };
  outputs: OutputItem[];
}

export function ArchitectureFlow({ intake, core, outputs }: ArchitectureFlowProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <SectionHeading
        eyebrow="PLATFORM ARCHITECTURE"
        title="Continuous Signals to Actionable Defense"
        description="How data flows through the ASM ingestion pipeline, core engine, and your security stack."
      />

      <div className="bg-[#060c18] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
          {/* Column 1: Intake */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest block mb-2">
              01 · INGESTION SOURCES (~40 FEEDS)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {intake.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 hover:border-blue-500/40 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <DynamicIcon name={item.icon} className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-gray-200">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Core Processing Engine */}
          <div className="p-8 rounded-2xl bg-linear-to-b from-[#1e517b]/40 to-[#0d2235]/60 border border-[#1e517b]/50 text-center space-y-6 shadow-xl relative">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-tr from-[#1e517b] to-[#2a6f97] flex items-center justify-center mx-auto shadow-lg shadow-[#1e517b]/40 animate-pulse">
              <DynamicIcon name="FiCpu" className="w-8 h-8 text-white" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-blue-300 uppercase tracking-widest block">
                02 · CORRELATION ENGINE
              </span>
              <h3 className="text-lg font-bold text-white">{core.title}</h3>
              <p className="text-xs text-gray-400">{core.subhead}</p>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/10 text-left">
              {core.steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-blue-200">
                  <span className="w-5 h-5 rounded-full bg-[#1e517b]/50 text-blue-300 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Actionable Outputs */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">
              03 · ACTIONABLE OUTPUTS & DESTINATIONS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {outputs.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 hover:border-emerald-500/40 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <DynamicIcon name={item.icon} className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-gray-200">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitectureFlow;
