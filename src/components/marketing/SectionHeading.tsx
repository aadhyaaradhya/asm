"use client";

import React from "react";
import SectionEyebrow from "./SectionEyebrow";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`space-y-3 ${centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}>
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
