"use client";

import React from "react";
import { SecurityPostureScore } from "@/components/dashboard/SecurityPostureScore";
import { ThreatMap } from "@/components/dashboard/ThreatMap";
import { ModuleRiskGrid } from "@/components/dashboard/ModuleRiskGrid";
import { RecentAlertsTable } from "@/components/dashboard/RecentAlertsTable";
import { FiShield } from "react-icons/fi";

export default function ClientDashboardPage() {
  const handleExportReport = () => {
    alert("Exporting Security Posture Report (PDF)...");
  };

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-8">
      {/* 1. Header & Top Posture Score / Rating Grid */}
      <SecurityPostureScore onExportReport={handleExportReport} />

      {/* 2. Global Threat Map */}
      <ThreatMap />

      {/* 3. Module-wise Threat Risk Score */}
      <ModuleRiskGrid />

      {/* 4. Recent High Priority Alerts Table */}
      <RecentAlertsTable />

      {/* 5. Security Platform Footer Note */}
      <div className="flex items-center gap-2 pt-4 border-t border-slate-800/40 text-xs text-slate-500">
        <FiShield className="w-4 h-4 text-slate-600 flex-shrink-0" />
        <p>
          Threat360 is a monitoring and intelligence platform. It never performs intrusive testing and never displays raw credentials, full card numbers or personal data.
        </p>
      </div>
    </div>
  );
}
