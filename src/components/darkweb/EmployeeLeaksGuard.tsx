"use client";

import React, { useState } from "react";
import {
  FiKey,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface EmpLeakItem {
  id: string;
  empAccount: string;
  passwordSecret: string;
  exposedBadges: string[];
  category: string;
  detectedDate: string;
  status: string;
  riskLevel: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
}

const mockEmpLeaks: EmpLeakItem[] = [
  {
    id: "EMP-1201",
    empAccount: "sysadmin@mega.io",
    passwordSecret: "••••••••••••",
    exposedBadges: ["Corporate email", "Password hash", "AD domain"],
    category: "Privileged account",
    detectedDate: "2026-05-10",
    status: "Open",
    riskLevel: "CRITICAL",
  },
  {
    id: "EMP-1202",
    empAccount: "dev-ops@mega.io",
    passwordSecret: "••••••••••••",
    exposedBadges: ["Corporate email", "VPN password"],
    category: "VPN credential",
    detectedDate: "2026-05-31",
    status: "Open",
    riskLevel: "HIGH",
  },
  {
    id: "EMP-1203",
    empAccount: "hr-lead@mega.io",
    passwordSecret: "••••••••••••",
    exposedBadges: ["Corporate email", "Password hash"],
    category: "HR mailbox",
    detectedDate: "2026-06-29",
    status: "Open",
    riskLevel: "MEDIUM",
  },
  {
    id: "EMP-1204",
    empAccount: "postmaster@mega.io",
    passwordSecret: "••••••••••••",
    exposedBadges: ["Corporate email", "MTA seed"],
    category: "MTA seed exposure",
    detectedDate: "2026-06-23",
    status: "Open",
    riskLevel: "HIGH",
  },
  {
    id: "EMP-1205",
    empAccount: "support-lead@mega.io",
    passwordSecret: "••••••••••••",
    exposedBadges: ["Corporate email", "Password hash"],
    category: "Support console",
    detectedDate: "2026-07-16",
    status: "Open",
    riskLevel: "CRITICAL",
  },
  {
    id: "EMP-1206",
    empAccount: "lead-dev@mega.io",
    passwordSecret: "••••••••••••",
    exposedBadges: ["Email", "Git token"],
    category: "Source code token",
    detectedDate: "2026-07-08",
    status: "Open",
    riskLevel: "HIGH",
  },
];

export const EmployeeLeaksGuard: React.FC = () => {
  const [items, setItems] = useState<EmpLeakItem[]>(mockEmpLeaks);
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
      item.empAccount.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
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
            <FiKey className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Employee Leaks</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              Dark Web <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-purple-950/60 border border-purple-800/60 text-purple-400 text-[10px] font-bold tracking-wider rounded uppercase">
            NEW
          </span>

          <button
            onClick={() => showToast("Exporting Employee Leaks Report...")}
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
            LEAKED RECORDS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">6</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Masked exposures</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            CRITICAL
          </span>
          <span className="text-3xl font-extrabold text-red-500 mt-2 block">2</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Immediate action</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            EXPOSED ENTRIES
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">6</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Across all dumps</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            LEAK SOURCES
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">6</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Underground sources</span>
        </div>
      </div>

      {/* Middle Section: Bar Chart + Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Bar Chart */}
        <div className="lg:col-span-7 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Leaks by Category</h3>
            <p className="text-xs text-slate-400 mt-0.5">Distribution across exposure types</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-around border-b border-slate-800/80 pb-2">
            {[
              { cat: "Privileged", count: 1 },
              { cat: "VPN", count: 1 },
              { cat: "HR Mailbox", count: 1 },
              { cat: "MTA Seed", count: 1 },
              { cat: "Console", count: 1 },
              { cat: "Git Token", count: 1 },
            ].map((bar) => (
              <div key={bar.cat} className="flex flex-col items-center gap-2 w-14">
                <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                  <div className="w-full bg-blue-500 rounded-t h-1/2 flex items-center justify-center text-[10px] font-bold text-white">
                    1
                  </div>
                </div>
                <span className="text-[9px] font-medium text-slate-400 truncate max-w-[50px]">{bar.cat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Donut */}
        <div className="lg:col-span-5 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Risk Distribution</h3>
            <p className="text-xs text-slate-400 mt-0.5">Leak records by severity</p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#ef4444" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="159.17" />
                <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="119.38" className="transform rotate-[120deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#facc15" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="199" className="transform rotate-[300deg] origin-center" />
              </svg>
            </div>

            <div className="flex items-center gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="text-slate-300">Critical - 2</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="text-slate-300">High - 3</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="text-slate-300">Medium - 1</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Employee Leaks</h2>
            <p className="text-xs text-slate-400 mt-0.5">Corporate accounts and credentials exposed on underground sources</p>
          </div>
          <span className="text-xs text-slate-400 font-medium">Showing {filtered.length} results</span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search identifier, source or leak ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-800/90 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-all shadow-inner"
          />
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto custom-sidebar-scrollbar">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-800/80 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                <th className="py-3 px-3">LEAK ID</th>
                <th className="py-3 px-3">EMPLOYEE ACCOUNT</th>
                <th className="py-3 px-3">PASSWORD / SECRET</th>
                <th className="py-3 px-3">EXPOSED DATA</th>
                <th className="py-3 px-3">DATE DETECTED</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">RISK LEVEL</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3 font-mono text-cyan-400 font-semibold text-[11px]">{item.id}</td>
                  <td className="py-3.5 px-3 font-mono text-slate-200 font-semibold">{item.empAccount}</td>
                  <td className="py-3.5 px-3 font-mono text-slate-500">{item.passwordSecret}</td>
                  <td className="py-3.5 px-3">
                    <div className="flex flex-wrap gap-1">
                      {item.exposedBadges.map((b) => (
                        <span key={b} className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300 font-mono">
                          {b}
                        </span>
                      ))}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 font-medium">{item.category}</div>
                  </td>
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">{item.detectedDate}</td>
                  <td className="py-3.5 px-3">
                    <select
                      value={item.status}
                      onChange={(e) =>
                        setItems((prev) =>
                          prev.map((i) => (i.id === item.id ? { ...i, status: e.target.value } : i))
                        )
                      }
                      className="bg-slate-900 border border-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded"
                    >
                      <option value="Open">Open</option>
                      <option value="Investigating">Investigating</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-3">
                    {item.riskLevel === "CRITICAL" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-red-950/80 border border-red-800 text-red-400 uppercase">CRITICAL</span>
                    )}
                    {item.riskLevel === "HIGH" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-950/80 border border-amber-800 text-amber-400 uppercase">HIGH</span>
                    )}
                    {item.riskLevel === "MEDIUM" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-yellow-950/80 border border-yellow-800 text-yellow-400 uppercase">MEDIUM</span>
                    )}
                  </td>
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
