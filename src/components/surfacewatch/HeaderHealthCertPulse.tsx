"use client";

import React, { useState } from "react";
import {
  FiEye,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface HeaderAnalysisItem {
  id: string;
  domain: string;
  headerKey: string;
  impact: string;
  status: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  detectedAt: string;
}

const mockHeaderData: HeaderAnalysisItem[] = [
  {
    id: "HDR-6670",
    domain: "www.mega.io",
    headerKey: "cross_origin_resource_policy",
    impact: "Without CORP, external websites can embed your assets and exfiltrate them cross-origin.",
    status: "Open",
    severity: "LOW",
    detectedAt: "2026-07-05",
  },
  {
    id: "HDR-6669",
    domain: "www.mega.io",
    headerKey: "cross_origin_opener_policy",
    impact: "This site window shares browser processes, making side-channel and tab-napping attacks.",
    status: "Open",
    severity: "LOW",
    detectedAt: "2026-07-05",
  },
  {
    id: "HDR-6668",
    domain: "api.mega.io",
    headerKey: "cross_origin_embedder_policy",
    impact: "Missing COEP can lead to cross-origin isolation bypass and Spectre class leaks.",
    status: "Open",
    severity: "LOW",
    detectedAt: "2026-07-05",
  },
  {
    id: "HDR-6667",
    domain: "blog.mega.io",
    headerKey: "content_security_policy",
    impact: "No CSP is published, so injected scripts execute without restriction (XSS).",
    status: "Open",
    severity: "HIGH",
    detectedAt: "2026-07-05",
  },
  {
    id: "HDR-6666",
    domain: "legacy.mega.io",
    headerKey: "strict_transport_security",
    impact: "Without HSTS, users can be downgraded to plaintext HTTP by an on-path attacker.",
    status: "Open",
    severity: "CRITICAL",
    detectedAt: "2026-07-05",
  },
  {
    id: "HDR-6665",
    domain: "www.mega.io",
    headerKey: "permissions_policy",
    impact: "Missing policy may allow unrestricted use of sensitive browser features.",
    status: "Open",
    severity: "LOW",
    detectedAt: "2026-07-05",
  },
  {
    id: "HDR-6664",
    domain: "help.mega.io",
    headerKey: "x_frame_options",
    impact: "Page can be framed by third parties, enabling clickjacking of the support flow.",
    status: "Fixed",
    severity: "MEDIUM",
    detectedAt: "2026-07-05",
  },
  {
    id: "HDR-6663",
    domain: "mail.mega.io",
    headerKey: "expect_ct",
    impact: "Without it, rogue TLS certificates might go undetected.",
    status: "Open",
    severity: "LOW",
    detectedAt: "2026-07-05",
  },
];

export const HeaderHealthCertPulse: React.FC = () => {
  const [items, setItems] = useState<HeaderAnalysisItem[]>(mockHeaderData);
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
      item.domain.toLowerCase().includes(q) ||
      item.headerKey.toLowerCase().includes(q)
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
          <div className="w-10 h-10 rounded-xl bg-orange-950/60 border border-orange-800/60 flex items-center justify-center text-orange-400 shadow-md">
            <FiEye className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Header Health & CertPulse</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              SurfaceWatch <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-red-950/60 border border-red-800/60 text-red-400 text-[10px] font-bold tracking-wider rounded uppercase">
            HIGH RISK
          </span>

          <button
            onClick={() => showToast("Exporting Header Health Report...")}
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
            ANALYZED SITES
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">6</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Total scanned</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            MISSING HEADERS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">7</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Needs implementation</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            IMPLEMENTED
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">1</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Header present</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            VULNERABLE
          </span>
          <span className="text-3xl font-extrabold text-red-500 mt-2 block">2</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Urgent action required</span>
        </div>
      </div>

      {/* Middle Section: Bar Chart + Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Bar Chart */}
        <div className="lg:col-span-7 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Missing Headers by Host</h3>
            <p className="text-xs text-slate-400 mt-0.5">Where hardening is weakest</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-around border-b border-slate-800/80 pb-2">
            {[
              { host: "www", count: 3 },
              { host: "api", count: 1 },
              { host: "blog", count: 1 },
              { host: "legacy", count: 1 },
              { host: "help", count: 1 },
              { host: "mail", count: 1 },
            ].map((bar) => (
              <div key={bar.host} className="flex flex-col items-center gap-2 w-16">
                <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                  <div
                    className="w-full bg-blue-500 rounded-t flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ height: `${(bar.count / 3) * 100}%` }}
                  >
                    {bar.count}
                  </div>
                </div>
                <span className="text-[10px] font-medium text-slate-400">{bar.host}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Donut */}
        <div className="lg:col-span-5 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Header Grade Distribution</h3>
            <p className="text-xs text-slate-400 mt-0.5">Findings by severity</p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#10b981" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="95.5" />
                <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="191" className="transform rotate-[216deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#ef4444" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="191" className="transform rotate-[252deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#facc15" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="191" className="transform rotate-[288deg] origin-center" />
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-[11px]">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="text-slate-300">Low - 5</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="text-slate-300">High - 1</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="text-slate-300">Critical - 1</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="text-slate-300">Medium - 1</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Detailed Header Analysis</h2>
            <p className="text-xs text-slate-400 mt-0.5">HTTP security headers, impact and the value that should be published</p>
          </div>
          <span className="text-xs text-slate-400 font-medium">Showing {filtered.length} results</span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search headers..."
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
                <th className="py-3 px-3">ALERT ID</th>
                <th className="py-3 px-3">DOMAIN</th>
                <th className="py-3 px-3">HEADER KEY</th>
                <th className="py-3 px-3">IMPACT</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">SEVERITY</th>
                <th className="py-3 px-3">DETECTED AT</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3 font-mono text-cyan-400 font-semibold text-[11px]">{item.id}</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-200">{item.domain}</td>
                  <td className="py-3.5 px-3 font-mono text-slate-300 text-[11px]">{item.headerKey}</td>
                  <td className="py-3.5 px-3 text-slate-400 text-[11px] max-w-[340px] leading-snug">
                    {item.impact} <span className="text-cyan-400 hover:underline cursor-pointer">View</span>
                  </td>
                  <td className="py-3.5 px-3">
                    <select
                      value={item.status}
                      onChange={(e) =>
                        setItems((prev) =>
                          prev.map((i) => (i.id === item.id ? { ...i, status: e.target.value } : i))
                        )
                      }
                      className="bg-slate-900 border border-slate-700 text-slate-300 text-xs px-2 py-1 rounded"
                    >
                      <option value="Open">Open</option>
                      <option value="Fixed">Fixed</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-3">
                    {item.severity === "CRITICAL" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-red-950/80 border border-red-800 text-red-400 uppercase">CRITICAL</span>
                    )}
                    {item.severity === "HIGH" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-950/80 border border-amber-800 text-amber-400 uppercase">HIGH</span>
                    )}
                    {item.severity === "MEDIUM" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-yellow-950/80 border border-yellow-800 text-yellow-400 uppercase">MEDIUM</span>
                    )}
                    {item.severity === "LOW" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-cyan-950/80 border border-cyan-800 text-cyan-400 uppercase">LOW</span>
                    )}
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
