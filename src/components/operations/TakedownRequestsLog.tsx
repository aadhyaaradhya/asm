"use client";

import React, { useState } from "react";
import {
  FiDatabase,
  FiDownload,
  FiSearch,
  FiCheckCircle,
} from "react-icons/fi";

interface TakedownItem {
  id: string;
  alertId: string;
  target: string;
  platform: string;
  module: string;
  requestedTime: string;
  status: "SUBMITTED" | "IN REVIEW" | "TAKEN DOWN" | "REJECTED";
  dateGroup: string;
}

const mockTakedowns: TakedownItem[] = [
  {
    id: "TD-9001",
    alertId: "BG-SOC-104",
    target: "fb.com/mega.io.support",
    platform: "Facebook",
    module: "Social Media",
    requestedTime: "02:30 PM",
    status: "SUBMITTED",
    dateGroup: "Tue, 04 Aug 2026",
  },
  {
    id: "TD-9002",
    alertId: "BG-TYP-201",
    target: "megaio-login.com",
    platform: "Registrar - NameCheap",
    module: "TypoSquat Tracker",
    requestedTime: "01:15 PM",
    status: "IN REVIEW",
    dateGroup: "Mon, 03 Aug 2026",
  },
  {
    id: "TD-9003",
    alertId: "BG-APP-207",
    target: "apkmirror.com/mega-io-pro",
    platform: "APKMirror",
    module: "AppClone Hunter",
    requestedTime: "12:50 PM",
    status: "TAKEN DOWN",
    dateGroup: "Sun, 02 Aug 2026",
  },
  {
    id: "TD-9004",
    alertId: "BG-FAKE-411",
    target: "mega-io-secure.net",
    platform: "Hosting - Cloudflare",
    module: "Fake Website Detection",
    requestedTime: "11:10 AM",
    status: "IN REVIEW",
    dateGroup: "Sat, 01 Aug 2026",
  },
  {
    id: "TD-9005",
    alertId: "BG-SOC-109",
    target: "x.com/mega_io_help",
    platform: "X (Twitter)",
    module: "Social Media",
    requestedTime: "10:10 AM",
    status: "TAKEN DOWN",
    dateGroup: "Thu, 30 Jul 2026",
  },
  {
    id: "TD-9006",
    alertId: "BG-TYP-208",
    target: "meaga.io",
    platform: "Registrar - GoDaddy",
    module: "TypoSquat Tracker",
    requestedTime: "09:30 AM",
    status: "REJECTED",
    dateGroup: "Tue, 28 Jul 2026",
  },
  {
    id: "TD-9007",
    alertId: "BG-APP-212",
    target: "play.google.com/mega-io-wallet",
    platform: "Google Play",
    module: "AppClone Hunter",
    requestedTime: "08:15 AM",
    dateGroup: "Sun, 26 Jul 2026",
    status: "SUBMITTED",
  },
];

export const TakedownRequestsLog: React.FC = () => {
  const [items] = useState<TakedownItem[]>(mockTakedowns);
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const filtered = items.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.id.toLowerCase().includes(q) ||
      item.target.toLowerCase().includes(q) ||
      item.platform.toLowerCase().includes(q) ||
      item.module.toLowerCase().includes(q)
    );
  });

  // Group by date
  const groups = Array.from(new Set(filtered.map((i) => i.dateGroup)));

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
            <h1 className="text-2xl font-bold text-white tracking-wide">Takedown Requests</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              Operations <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => showToast("Exporting Takedowns Report...")}
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
            TOTAL REQUESTS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">7</span>
          <span className="text-[11px] text-slate-400 mt-1 block">All takedowns raised</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            IN REVIEW
          </span>
          <span className="text-3xl font-extrabold text-blue-400 mt-2 block">4</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Awaiting provider action</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            TAKEN DOWN
          </span>
          <span className="text-3xl font-extrabold text-emerald-400 mt-2 block">2</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Successfully removed</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            REJECTED
          </span>
          <span className="text-3xl font-extrabold text-rose-500 mt-2 block">1</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Needs re-submission</span>
        </div>
      </div>

      {/* Takedown Requests Log Table */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Takedown Requests</h2>
            <p className="text-xs text-slate-400 mt-0.5">Every takedown raised across BrandGuard, grouped by request date</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search request..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <button
              onClick={() => showToast("Downloading takedowns report...")}
              className="inline-flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-all shadow-sm cursor-pointer"
            >
              <FiDownload className="w-3.5 h-3.5 text-slate-400" />
              <span>Download report</span>
            </button>
          </div>
        </div>

        {/* Data Table Grouped by Date */}
        <div className="space-y-6">
          {groups.map((groupDate) => {
            const groupItems = filtered.filter((i) => i.dateGroup === groupDate);
            return (
              <div key={groupDate} className="space-y-2">
                <div className="flex items-center gap-2 px-2 py-1 bg-slate-900/60 border border-slate-800/60 rounded-lg text-[11px] font-bold text-slate-300">
                  <span>{groupDate}</span>
                  <span className="text-[10px] text-slate-500 font-normal">
                    {groupItems.length} REQUESTS
                  </span>
                </div>

                <div className="overflow-x-auto custom-sidebar-scrollbar">
                  <table className="w-full text-left border-collapse min-w-[850px]">
                    <thead>
                      <tr className="border-b border-slate-800/80 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        <th className="py-2.5 px-3">REQUEST ID</th>
                        <th className="py-2.5 px-3">ALERT ID</th>
                        <th className="py-2.5 px-3">TARGET</th>
                        <th className="py-2.5 px-3">PLATFORM</th>
                        <th className="py-2.5 px-3">MODULE</th>
                        <th className="py-2.5 px-3">REQUESTED</th>
                        <th className="py-2.5 px-3">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/40 text-xs">
                      {groupItems.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-800/40 transition-colors group">
                          <td className="py-3 px-3 font-mono text-cyan-400 font-semibold">{item.id}</td>
                          <td className="py-3 px-3 font-mono text-slate-300 text-[11px]">{item.alertId}</td>
                          <td className="py-3 px-3 font-mono text-white font-medium">{item.target}</td>
                          <td className="py-3 px-3 text-slate-300 font-medium">{item.platform}</td>
                          <td className="py-3 px-3 text-slate-400 text-[11px]">{item.module}</td>
                          <td className="py-3 px-3 text-slate-400 font-mono text-[11px]">{item.requestedTime}</td>
                          <td className="py-3 px-3">
                            {item.status === "SUBMITTED" && (
                              <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-950/80 border border-amber-800 text-amber-400 uppercase">
                                SUBMITTED
                              </span>
                            )}
                            {item.status === "IN REVIEW" && (
                              <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-blue-950/80 border border-blue-800 text-blue-400 uppercase">
                                IN REVIEW
                              </span>
                            )}
                            {item.status === "TAKEN DOWN" && (
                              <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-950/80 border border-emerald-800 text-emerald-400 uppercase">
                                TAKEN DOWN
                              </span>
                            )}
                            {item.status === "REJECTED" && (
                              <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-red-950/80 border border-red-800 text-red-400 uppercase">
                                REJECTED
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
