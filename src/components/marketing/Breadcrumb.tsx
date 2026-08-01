"use client";

import React from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import type { BreadcrumbItem } from "@/lib/landing-pages/types";

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <ol className="flex items-center flex-wrap gap-2 text-xs font-mono text-gray-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <FiChevronRight className="w-3 h-3 text-gray-600" />}
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-blue-400 font-semibold" : ""}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
