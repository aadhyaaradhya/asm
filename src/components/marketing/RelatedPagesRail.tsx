"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { RelatedPage } from "@/lib/landing-pages/types";

export interface RelatedPagesRailProps {
  relatedPages: RelatedPage[];
}

export function RelatedPagesRail({ relatedPages }: RelatedPagesRailProps) {
  if (!relatedPages || relatedPages.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
          RELATED CAPABILITIES
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedPages.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#1e517b]/50 transition-all flex flex-col justify-between group"
          >
            <div className="space-y-1.5">
              <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors flex items-center justify-between">
                <span>{item.title}</span>
                <FiArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-300 transition-colors group-hover:translate-x-1 transform" />
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RelatedPagesRail;
