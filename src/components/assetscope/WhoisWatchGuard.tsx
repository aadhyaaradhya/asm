"use client";

import React, { useState } from "react";
import {
  FiShield,
  FiDownload,
  FiSearch,
  FiExternalLink,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface WhoisItem {
  id: string;
  domain: string;
  expiryText: string;
  remainingDaysDate: string;
  status: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  createdAt: string;
}

const mockWhoisDomains: WhoisItem[] = [
  {
    id: "WHOIS-44",
    domain: "mega.io",
    expiryText: "Expires in 320 days",
    remainingDaysDate: "2028-11-07 09:12:43",
    status: "MEDIUM",
    createdAt: "2010-01-07 15:22:20",
  },
  {
    id: "WHOIS-45",
    domain: "mega.nz",
    expiryText: "Expires in 172 days",
    remainingDaysDate: "2027-01-24 09:11:57",
    status: "LOW",
    createdAt: "2021-01-09 15:22:08",
  },
];

export const WhoisWatchGuard: React.FC = () => {
  const [items, setItems] = useState<WhoisItem[]>(mockWhoisDomains);
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
      item.domain.toLowerCase().includes(q)
    );
  });

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
          <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shadow-md">
            <FiShield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">WHOIS WatchGuard</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              AssetScope <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-[10px] font-bold tracking-wider rounded uppercase">
            ACTIVE
          </span>

          <button
            onClick={() => showToast("Exporting WHOIS WatchGuard Report...")}
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
            MONITORED DOMAINS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">2</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Active monitoring</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            EXPIRING &lt; 30 DAYS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">0</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Action required</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            PRIVACY DISABLED
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">1</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Data exposed</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            AVG DOMAIN AGE
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">14 Yrs</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Established reputation</span>
        </div>
      </div>

      {/* Middle Section: Expiry Status + Registrar Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Progress Bars */}
        <div className="lg:col-span-5 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Expiry Status</h3>
            <p className="text-xs text-slate-400 mt-0.5">Renewal windows across monitored domains</p>
          </div>

          <div className="my-6 space-y-4">
            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                <span>Safe (&gt;90d)</span>
                <span>2</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                <span>Warning (&lt;90d)</span>
                <span>0</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full w-0" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                <span>Critical (&lt;30d)</span>
                <span>0</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full w-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Registrar Bar Chart */}
        <div className="lg:col-span-7 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Registrar Distribution</h3>
            <p className="text-xs text-slate-400 mt-0.5">Domains per registrar</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-center border-b border-slate-800/80 pb-2">
            <div className="w-3/4 bg-slate-900/90 rounded-t h-32 flex items-end p-1">
              <div className="w-full bg-blue-500 rounded-t h-full flex items-center justify-center text-xs font-bold text-white">
                2
              </div>
            </div>
          </div>
          <div className="text-center text-[10px] text-slate-400">Instra Corporation Pty Ltd.</div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Domain Registry Inventory</h2>
            <p className="text-xs text-slate-400 mt-0.5">Ownership changes, expiry dates and WHOIS privacy status</p>
          </div>
          <span className="text-xs text-slate-400 font-medium">Showing {filtered.length} results</span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search domain..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-800/90 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-all shadow-inner"
          />
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto custom-sidebar-scrollbar">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="border-b border-slate-800/80 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                <th className="py-3 px-3">ALERT ID</th>
                <th className="py-3 px-3">DOMAIN</th>
                <th className="py-3 px-3">REMAINING DAYS</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">CREATED AT</th>
                <th className="py-3 px-3 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3 font-mono text-[11px] text-cyan-400 font-medium">
                    {item.id}
                  </td>
                  <td className="py-3.5 px-3">
                    <a
                      href={`https://${item.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>{item.domain}</span>
                      <FiExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </td>
                  <td className="py-3.5 px-3">
                    <div className="font-semibold text-slate-200">{item.remainingDaysDate}</div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">{item.expiryText}</div>
                  </td>
                  <td className="py-3.5 px-3">
                    {item.status === "MEDIUM" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-yellow-950/80 border border-yellow-800/80 text-yellow-400 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        MEDIUM
                      </span>
                    )}
                    {item.status === "LOW" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        LOW
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">{item.createdAt}</td>
                  <td className="py-3.5 px-3 text-right">
                    <button
                      onClick={() => showToast(`Opening comments for ${item.id}`)}
                      className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-cyan-400 rounded-lg transition-colors cursor-pointer"
                    >
                      <FiMessageSquare className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
