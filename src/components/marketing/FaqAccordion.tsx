"use client";

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import type { FaqItem } from "@/lib/landing-pages/types";

export interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
}

export function FaqAccordion({
  items,
  title = "Frequently Asked Questions",
  eyebrow = "FREQUENTLY ASKED QUESTIONS",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <SectionHeading eyebrow={eyebrow} title={title} />

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="border border-white/10 rounded-2xl bg-[#060c18] overflow-hidden transition-all"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm text-white hover:text-blue-300 transition-colors"
            >
              <span>{item.q}</span>
              {openIndex === idx ? (
                <FiChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
              ) : (
                <FiChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
              )}
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-6 text-xs text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqAccordion;
