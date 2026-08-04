"use client";

import React, { useState } from "react";
import {
  FiDatabase,
  FiDownload,
  FiSearch,
  FiCheckCircle,
} from "react-icons/fi";

interface AuditEntry {
  id: string;
  time: string;
  action: string;
  details: string;
  categoryBadge: string;
  dateGroup: string;
}

const mockAuditLogs: AuditEntry[] = [
  {
    id: "LOG-1",
    time: "07:00 AM",
    action: "Status changed to Fixed",
    details: "HDR-6664 · SurfaceWatch · raju.hosmani@mega.io",
    categoryBadge: "ALERT WORKFLOW",
    dateGroup: "Tue, 04 Aug 2026",
  },
  {
    id: "LOG-2",
    time: "06:00 AM",
    action: "Comment added on alert",
    details: "APP-13 · BrandGuard · raju.hosmani@mega.io",
    categoryBadge: "COMMENT",
    dateGroup: "Tue, 04 Aug 2026",
  },
  {
    id: "LOG-3",
    time: "04:00 AM",
    action: "Full surface scan started",
    details: "mega.io · Platform · raju.hosmani@mega.io",
    categoryBadge: "SCAN",
    dateGroup: "Mon, 03 Aug 2026",
  },
  {
    id: "LOG-4",
    time: "11:00 AM",
    action: "Exported monthly PDF report",
    details: "August 2026 · Reports · raju.hosmani@mega.io",
    categoryBadge: "REPORT",
    dateGroup: "Mon, 03 Aug 2026",
  },
  {
    id: "LOG-5",
    time: "07:00 AM",
    action: "Takedown requested",
    details: "BG-TYP-201 · BrandGuard · raju.hosmani@mega.io",
    categoryBadge: "ALERT WORKFLOW",
    dateGroup: "Mon, 03 Aug 2026",
  },
  {
    id: "LOG-6",
    time: "01:00 AM",
    action: "Asset added to watch list",
    details: "dev.mega.io · Watch List · raju.hosmani@mega.io",
    categoryBadge: "WATCH LIST",
    dateGroup: "Sun, 02 Aug 2026",
  },
  {
    id: "LOG-7",
    time: "10:00 AM",
    action: "Status changed to Accept Risk",
    details: "VUL-9006 · VulnIntel · raju.hosmani@mega.io",
    categoryBadge: "ALERT WORKFLOW",
    dateGroup: "Sun, 02 Aug 2026",
  },
  {
    id: "LOG-8",
    time: "08:00 AM",
    action: "Analyst note added",
    details: "CARD-4578 · Dark Web · raju.hosmani@mega.io",
    categoryBadge: "COMMENT",
    dateGroup: "Sun, 02 Aug 2026",
  },
  {
    id: "LOG-9",
    time: "12:00 PM",
    action: "Notification preference updated",
    details: "Weekly reports · Settings · raju.hosmani@mega.io",
    categoryBadge: "SETTINGS",
    dateGroup: "Sat, 01 Aug 2026",
  },
  {
    id: "LOG-10",
    time: "07:00 AM",
    action: "Quarterly report generated",
    details: "Q2 2026 · Reports · raju.hosmani@mega.io",
    categoryBadge: "REPORT",
    dateGroup: "Sat, 01 Aug 2026",
  },
  {
    id: "LOG-11",
    time: "09:00 AM",
    action: "Status changed to False Positive",
    details: "PORT-1005 · SurfaceWatch · raju.hosmani@mega.io",
    categoryBadge: "ALERT WORKFLOW",
    dateGroup: "Fri, 31 Jul 2026",
  },
  {
    id: "LOG-12",
    time: "11:00 AM",
    action: "Dark web sweep completed",
    details: "mega.io · Dark Web · raju.hosmani@mega.io",
    categoryBadge: "SCAN",
    dateGroup: "Thu, 30 Jul 2026",
  },
  {
    id: "LOG-13",
    time: "03:00 AM",
    action: "Comment added on alert",
    details: "STACK-11 · InfraSight · raju.hosmani@mega.io",
    categoryBadge: "COMMENT",
    dateGroup: "Wed, 29 Jul 2026",
  },
];

export const AuditLogActivity: React.FC = () => {
  const [items] = useState<AuditEntry[]>(mockAuditLogs);
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const filtered = items.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.action.toLowerCase().includes(q) ||
      item.details.toLowerCase().includes(q) ||
      item.categoryBadge.toLowerCase().includes(q)
    );
  });

  const dateGroups = Array.from(new Set(filtered.map((i) => i.dateGroup)));

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-cyan-500/80 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-up">
          <FiCheckCircle className="w-5 h-5 text-cyan-400" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Header Section (NO BREADCRUMBS as requested) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 shadow-md">
            <FiDatabase className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Audit Log</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              Operations <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => showToast("Exporting Audit Log Report...")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-xs font-semibold rounded-lg transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <FiDownload className="w-3.5 h-3.5 text-slate-400" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* 4 Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            TOTAL ACTIVITIES
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">13</span>
          <span className="text-[11px] text-slate-400 mt-1 block">All recorded actions</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            ACTIVE DAYS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">7</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Days with activity</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            WORKFLOW CHANGES
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">4</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Status transitions</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            COMMENTS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">3</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Analyst notes</span>
        </div>
      </div>

      {/* Audit Log Timeline Table */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Audit Log</h2>
            <p className="text-xs text-slate-400 mt-0.5">Day-wise record of every action performed in Threat360</p>
          </div>

          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search activity..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Grouped Day List */}
        <div className="space-y-6">
          {dateGroups.map((date) => {
            const logsInGroup = filtered.filter((i) => i.dateGroup === date);
            return (
              <div key={date} className="space-y-2">
                <div className="flex items-center gap-2 px-2 py-1 bg-slate-900/60 border border-slate-800/60 rounded-lg text-[11px] font-bold text-slate-300">
                  <span>{date}</span>
                  <span className="text-[10px] text-slate-500 font-normal">
                    {logsInGroup.length} ACTIVITIES
                  </span>
                </div>

                <div className="divide-y divide-slate-800/40">
                  {logsInGroup.map((item) => (
                    <div
                      key={item.id}
                      className="py-3 px-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-800/40 transition-colors rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400 font-mono text-[11px] w-16">{item.time}</span>
                        <div>
                          <span className="text-xs font-semibold text-white block">{item.action}</span>
                          <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">{item.details}</span>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-slate-800 text-slate-300 border border-slate-700 uppercase tracking-wider self-start sm:self-auto">
                        {item.categoryBadge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
