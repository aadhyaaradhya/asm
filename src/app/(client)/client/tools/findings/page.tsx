"use client";

import React from "react";
import { RecentAlertsTable } from "@/components/dashboard/RecentAlertsTable";

export default function ToolsFindingsPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wide">Findings</h1>
          <p className="text-xs text-slate-400 mt-0.5 font-medium">
            Operations <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
          </p>
        </div>
      </div>
      <RecentAlertsTable />
    </div>
  );
}
