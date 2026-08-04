"use client";

import React, { useState } from "react";
import {
  FiAlertTriangle,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface LibraryScannerItem {
  id: string;
  cveId: string;
  desc: string;
  asset: string;
  cvss: number;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status: string;
  detectedAt: string;
}

const mockLibItems: LibraryScannerItem[] = [
  {
    id: "VUL-9005",
    cveId: "CVE-2024-4577",
    desc: "PHP CGI argument injection allows remote code execution on Windows builds.",
    asset: "blog.mega.io · PHP 8.0.30",
    cvss: 9.8,
    severity: "CRITICAL",
    status: "Open",
    detectedAt: "2026-07-15",
  },
  {
    id: "VUL-9007",
    cveId: "CVE-2020-11023",
    desc: "jQuery passing HTML from untrusted sources executes untrusted code (XSS).",
    asset: "blog.mega.io · jQuery 1.12.4",
    cvss: 6.9,
    severity: "MEDIUM",
    status: "Open",
    detectedAt: "2026-07-15",
  },
];

export const LibraryScannerView: React.FC = () => {
  const [items, setItems] = useState<LibraryScannerItem[]>(mockLibItems);
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
      item.cveId.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
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
          <div className="w-10 h-10 rounded-xl bg-rose-950/60 border border-rose-800/60 flex items-center justify-center text-rose-400 shadow-md">
            <FiAlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Library Scanner</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              VulnIntel <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-red-950/60 border border-red-800/60 text-red-400 text-[10px] font-bold tracking-wider rounded uppercase">
            HIGH RISK
          </span>

          <button
            onClick={() => showToast("Exporting Library Scanner Report...")}
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
            DETECTED CVES
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">2</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Across all assets</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            CRITICAL
          </span>
          <span className="text-3xl font-extrabold text-red-500 mt-2 block">1</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Patch immediately</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            EXPLOITABLE
          </span>
          <span className="text-3xl font-extrabold text-amber-500 mt-2 block">2</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Known exploit available</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            MAX CVSS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">9.8</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Highest scored issue</span>
        </div>
      </div>

      {/* Middle Section: Donut + Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Donut */}
        <div className="lg:col-span-5 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Severity Distribution</h3>
            <p className="text-xs text-slate-400 mt-0.5">Detected CVEs by severity</p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#ef4444" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="119.38" />
                <circle cx="50" cy="50" r="38" stroke="#facc15" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="119.38" className="transform rotate-[180deg] origin-center" />
              </svg>
            </div>

            <div className="flex items-center gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="text-slate-300">Critical - 1</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="text-slate-300">Medium - 1</span></div>
            </div>
          </div>
        </div>

        {/* Right Bar Chart */}
        <div className="lg:col-span-7 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Affected Components</h3>
            <p className="text-xs text-slate-400 mt-0.5">CVE count per software component</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-around border-b border-slate-800/80 pb-2">
            <div className="flex flex-col items-center gap-2 w-32">
              <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                <div className="w-full bg-blue-500 rounded-t h-1/2 flex items-center justify-center text-xs font-bold text-white">1</div>
              </div>
              <span className="text-[10px] font-medium text-slate-400">PHP</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-32">
              <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                <div className="w-full bg-blue-500 rounded-t h-1/2 flex items-center justify-center text-xs font-bold text-white">1</div>
              </div>
              <span className="text-[10px] font-medium text-slate-400">jQuery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Library Scanner</h2>
            <p className="text-xs text-slate-400 mt-0.5">Known vulnerabilities (CVEs) affecting the monitored infrastructure</p>
          </div>
          <span className="text-xs text-slate-400 font-medium">Showing {filtered.length} results</span>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto custom-sidebar-scrollbar">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-800/80 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                <th className="py-3 px-3">ALERT ID</th>
                <th className="py-3 px-3">CVE ID</th>
                <th className="py-3 px-3">DESCRIPTION</th>
                <th className="py-3 px-3">CVSS</th>
                <th className="py-3 px-3">SEVERITY</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">DETECTED AT</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3 font-mono text-cyan-400 font-semibold text-[11px]">{item.id}</td>
                  <td className="py-3.5 px-3 font-mono font-bold text-cyan-300">{item.cveId}</td>
                  <td className="py-3.5 px-3 max-w-[360px]">
                    <div className="text-slate-200 font-medium leading-snug">{item.desc}</div>
                    <div className="text-[10px] text-cyan-400 font-mono mt-0.5">
                      View <span className="text-slate-500">• {item.asset}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-3 font-mono font-bold text-amber-400">{item.cvss}</td>
                  <td className="py-3.5 px-3">
                    {item.severity === "CRITICAL" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-red-950/80 border border-red-800 text-red-400 uppercase">CRITICAL</span>
                    )}
                    {item.severity === "MEDIUM" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-yellow-950/80 border border-yellow-800 text-yellow-400 uppercase">MEDIUM</span>
                    )}
                  </td>
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
                      <option value="Fixed">Fixed</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">{item.detectedAt}</td>
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
