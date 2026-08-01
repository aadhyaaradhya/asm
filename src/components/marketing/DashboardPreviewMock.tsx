"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import StatusBadge from "@/components/dashboard/StatusBadge";
import type { DashboardPreviewContent } from "@/lib/landing-pages/types";

export interface DashboardPreviewMockProps {
  preview: DashboardPreviewContent;
}

export function DashboardPreviewMock({ preview }: DashboardPreviewMockProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <SectionHeading eyebrow="LIVE PREVIEW" title={preview.title} />

      <div className="bg-[#060c18] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Browser Chrome Bar */}
        <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <div className="ml-4 px-3 py-1 rounded-md bg-black/40 border border-white/10 text-[11px] font-mono text-gray-400 flex-1 max-w-sm truncate">
            https://asm.aadhyaaradhya.com/client/dashboard
          </div>
        </div>

        {/* Mock Content */}
        <div className="p-6 overflow-x-auto">
          {preview.columns && preview.sampleRows ? (
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 uppercase tracking-wider">
                  <th className="pb-3 px-3">Sr. No.</th>
                  {preview.columns.map((col, idx) => (
                    <th key={idx} className="pb-3 px-3">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                {preview.sampleRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 px-3 text-gray-500">{rIdx + 1}</td>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="py-3 px-3">
                        {cell.includes("Critical") || cell.includes("High") || cell.includes("Medium") || cell.includes("Low") || cell.includes("Open") || cell.includes("Resolved") || cell.includes("Safe") || cell.includes("Clean") || cell.includes("Valid") || cell.includes("Expired") ? (
                          <StatusBadge label={cell} />
                        ) : (
                          <span>{cell}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-8 text-center text-gray-400 text-xs font-mono">
              Interactive Dashboard Interface Ready
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default DashboardPreviewMock;
