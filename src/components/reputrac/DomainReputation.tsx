"use client";

import React, { useState } from "react";
import {
  FiActivity,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface DomainRepItem {
  domain: string;
  score: number;
  blacklists: number;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  reputation: string;
  detectedDate: string;
  status: string;
  details: string;
}

const mockDomainData: DomainRepItem[] = [
  {
    domain: "mega.io",
    score: 95,
    blacklists: 0,
    severity: "LOW",
    reputation: "Clean",
    detectedDate: "2026-06-23",
    status: "Open",
    details: "Trusted category - no phishing or malware verdicts",
  },
  {
    domain: "mega-login.io",
    score: 22,
    blacklists: 5,
    severity: "CRITICAL",
    reputation: "Blacklisted",
    detectedDate: "2026-05-22",
    status: "Open",
    details: "Look-alike domain flagged for phishing by 5 vendors",
  },
  {
    domain: "megaio-support.com",
    score: 38,
    blacklists: 3,
    severity: "HIGH",
    reputation: "Blacklisted",
    detectedDate: "2026-05-02",
    status: "Open",
    details: "Fake support portal - newly registered, privacy protected",
  },
];

export const DomainReputation: React.FC = () => {
  const [items, setItems] = useState<DomainRepItem[]>(mockDomainData);
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const filtered = items.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.domain.toLowerCase().includes(q) ||
      item.details.toLowerCase().includes(q)
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
          <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shadow-md">
            <FiActivity className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Domain Reputation</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              RepuTrac <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-[10px] font-bold tracking-wider rounded uppercase">
            ACTIVE
          </span>

          <button
            onClick={() => showToast("Exporting Domain Reputation Report...")}
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
          <span className="text-3xl font-extrabold text-white mt-2 block">3</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Public assets</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            CLEAN
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">1</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Trusted status</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            BLACKLISTED
          </span>
          <span className="text-3xl font-extrabold text-red-500 mt-2 block">2</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Action required</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            SUSPICIOUS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">0</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Elevated risk</span>
        </div>
      </div>

      {/* Middle Section: Bar Chart + Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Bar Chart */}
        <div className="lg:col-span-7 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Reputation Score</h3>
            <p className="text-xs text-slate-400 mt-0.5">Higher is better (0-100)</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-around border-b border-slate-800/80 pb-2">
            {items.map((item) => (
              <div key={item.domain} className="flex flex-col items-center gap-2 w-28 group">
                <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                  <div
                    className="w-full bg-blue-500 rounded-t transition-all duration-300 flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ height: `${item.score}%` }}
                  >
                    {item.score}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-400 truncate max-w-[100px]">{item.domain}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Donut */}
        <div className="lg:col-span-5 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Risk Distribution</h3>
            <p className="text-xs text-slate-400 mt-0.5">Assets by severity</p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#1e293b" strokeWidth="12" fill="none" />
                <circle cx="50" cy="50" r="38" stroke="#10b981" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="159.17" />
                <circle cx="50" cy="50" r="38" stroke="#ef4444" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="159.17" className="transform rotate-[120deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="159.17" className="transform rotate-[240deg] origin-center" />
              </svg>
            </div>

            <div className="flex items-center gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="text-slate-300">Low - 1</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="text-slate-300">Critical - 1</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="text-slate-300">High - 1</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Domain Reputation Monitor</h2>
            <p className="text-xs text-slate-400 mt-0.5">Reputation scoring and blacklist monitoring</p>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto custom-sidebar-scrollbar">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="border-b border-slate-800/80 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                <th className="py-3 px-3">DOMAIN</th>
                <th className="py-3 px-3">SCORE</th>
                <th className="py-3 px-3">BLACKLISTS</th>
                <th className="py-3 px-3">SEVERITY</th>
                <th className="py-3 px-3">REPUTATION</th>
                <th className="py-3 px-3">DATE DETECTED</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">DETAILS</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.domain} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3 font-semibold text-cyan-400">{item.domain}</td>
                  <td className="py-3.5 px-3 font-bold text-white">{item.score}</td>
                  <td className="py-3.5 px-3 text-slate-300 font-mono">{item.blacklists}</td>
                  <td className="py-3.5 px-3">
                    {item.severity === "CRITICAL" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-red-950/80 border border-red-800 text-red-400 uppercase">CRITICAL</span>
                    )}
                    {item.severity === "HIGH" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-950/80 border border-amber-800 text-amber-400 uppercase">HIGH</span>
                    )}
                    {item.severity === "LOW" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-cyan-950/80 border border-cyan-800 text-cyan-400 uppercase">LOW</span>
                    )}
                  </td>
                  <td className="py-3.5 px-3 font-medium text-slate-200">{item.reputation}</td>
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">{item.detectedDate}</td>
                  <td className="py-3.5 px-3">
                    <select
                      value={item.status}
                      onChange={(e) =>
                        setItems((prev) =>
                          prev.map((i) => (i.domain === item.domain ? { ...i, status: e.target.value } : i))
                        )
                      }
                      className="bg-slate-900 border border-slate-700 text-slate-300 text-xs px-2 py-1 rounded"
                    >
                      <option value="Open">Open</option>
                      <option value="Investigating">Investigating</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-3 text-slate-400 text-[11px]">{item.details}</td>
                  <td className="py-3.5 px-3 text-right">
                    <button
                      onClick={() => showToast(`Opening comments for ${item.domain}`)}
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
