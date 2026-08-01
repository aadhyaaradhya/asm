"use client";

import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import type { ProblemContent } from "@/lib/landing-pages/types";

export interface ProblemBlockProps {
  problem: ProblemContent;
}

export function ProblemBlock({ problem }: ProblemBlockProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-8 rounded-3xl bg-gradient-to-r from-rose-950/20 via-[#060c18] to-rose-950/20 border border-rose-500/20 text-center space-y-4 shadow-xl">
        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
          <FiAlertCircle className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">{problem.title}</h3>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto">
          {problem.body}
        </p>
      </div>
    </section>
  );
}

export default ProblemBlock;
