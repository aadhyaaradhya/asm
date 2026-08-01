"use client";

import React from "react";

export interface DashboardContentRightSideProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function DashboardContentRightSide({
  children,
  title,
  subtitle,
}: DashboardContentRightSideProps) {
  return (
    <div className="flex-1 flex flex-col min-h-screen min-w-0 bg-gray-50/60">
      <div className="flex-1 flex flex-col min-w-0">
        {(title || subtitle) && (
          <div className="mb-4">
            {title && (
              <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
            )}
          </div>
        )}
        <div className="bg-white shadow-sm border border-gray-100 p-3 sm:p-6 flex-1 min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardContentRightSide;
