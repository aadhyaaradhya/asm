"use client";

import React, { useState } from "react";
import {
  FiAlertTriangle,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface AdminPortalItem {
  id: string;
  cveId: string;
  desc: string;
  asset: string;
  cvss: number;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status: string;
  detectedAt: string;
}

const mockAdminItems: AdminPortalItem[] = [
  {
    id: "VUL-9001",
    cveId: "CVE-2019-20372",
    desc: "NGINX before 1.17.7 with error_page requests may allow HTTP request smuggling.",
    asset: "legacy.mega.io · Nginx 1.14.0",
    cvss: 5.3,
    severity: "MEDIUM",
    status: "Open",
    detectedAt: "2026-07-15",
  },
  {
    id: "VUL-9002",
    cveId: "CVE-2021-23017",
    desc: "ngx_http_proxy_module does not verify upstream TLS certificates (MitM).",
    asset: "legacy.mega.io · Nginx 1.14.0",
    cvss: 4.8,
    severity: "LOW",
    status: "Open",
    detectedAt: "2026-07-15",
  },
  {
    id: "VUL-9003",
    cveId: "CVE-2019-9511",
    desc: "Some HTTP/2 implementations are vulnerable to window size manipulation (DoS).",
    asset: "api.mega.io · Nginx 1.25 / HTTP/2",
    cvss: 7.5,
    severity: "HIGH",
    status: "Open",
    detectedAt: "2026-07-15",
  },
  {
    id: "VUL-9004",
    cveId: "CVE-2019-9513",
    desc: "HTTP/2 flood allows resource loops causing excessive CPU consumption.",
    asset: "api.mega.io · Nginx 1.25 / HTTP/2",
    cvss: 7.5,
    severity: "HIGH",
    status: "Open",
    detectedAt: "2026-07-15",
  },
  {
    id: "VUL-9006",
    cveId: "CVE-2023-44487",
    desc: "HTTP/2 Rapid Reset enables large-scale layer-7 denial of service.",
    asset: "www.mega.io · Cloudflare edge",
    cvss: 7.5,
    severity: "HIGH",
    status: "Accept Risk",
    detectedAt: "2026-06-28",
  },
  {
    id: "VUL-9008",
    cveId: "CVE-2022-31813",
    desc: "Apache HTTPD may drop X-Forwarded-* headers allowing auth bypass.",
    asset: "blog.mega.io · Apache 2.4.52",
    cvss: 9.0,
    severity: "CRITICAL",
    status: "Open",
    detectedAt: "2026-07-15",
  },
];

export const AdminPortalExposure: React.FC = () => {
  const [items, setItems] = useState<AdminPortalItem[]>(mockAdminItems);
  const [searchQuery, setSearchQuery] = useState("");
  const [criticalOnly, setCriticalOnly] = useState(false);
  const [exploitableOnly, setExploitableOnly] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const filtered = items.filter((item) => {
    const q = searchQuery.toLowerCase();
    const matchesQuery =
      item.id.toLowerCase().includes(q) ||
      item.cveId.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q);

    if (!matchesQuery) return false;
    if (criticalOnly && item.severity !== "CRITICAL") return false;
    if (exploitableOnly && item.cvss < 7.5) return false;
    return true;
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
            <h1 className="text-2xl font-bold text-white tracking-wide">Admin Portal</h1>
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
            onClick={() => showToast("Exporting Admin Portal Report...")}
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
          <span className="text-3xl font-extrabold text-white mt-2 block">6</span>
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
          <span className="text-3xl font-extrabold text-amber-500 mt-2 block">3</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Known exploit available</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            MAX CVSS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">9.0</span>
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
                <circle cx="50" cy="50" r="38" stroke="#facc15" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="199" />
                <circle cx="50" cy="50" r="38" stroke="#10b981" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="199" className="transform rotate-[60deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="119.38" className="transform rotate-[120deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#ef4444" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="199" className="transform rotate-[300deg] origin-center" />
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-[11px]">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="text-slate-300">Medium - 1</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="text-slate-300">Low - 1</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="text-slate-300">High - 3</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="text-slate-300">Critical - 1</span></div>
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
            {[
              { name: "Nginx", count: 4 },
              { name: "Cloudflare", count: 1 },
              { name: "Apache", count: 1 },
            ].map((bar) => (
              <div key={bar.name} className="flex flex-col items-center gap-2 w-28">
                <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                  <div
                    className="w-full bg-blue-500 rounded-t flex items-center justify-center text-xs font-bold text-white"
                    style={{ height: `${(bar.count / 4) * 100}%` }}
                  >
                    {bar.count}
                  </div>
                </div>
                <span className="text-[10px] font-medium text-slate-400">{bar.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Admin Portal Exposure</h2>
            <p className="text-xs text-slate-400 mt-0.5">Known vulnerabilities (CVEs) affecting the monitored infrastructure</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCriticalOnly(!criticalOnly)}
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                criticalOnly ? "bg-red-950 text-red-400 border border-red-800" : "bg-slate-900 text-slate-400 border border-slate-800"
              }`}
            >
              Critical only
            </button>
            <button
              onClick={() => setExploitableOnly(!exploitableOnly)}
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                exploitableOnly ? "bg-amber-950 text-amber-400 border border-amber-800" : "bg-slate-900 text-slate-400 border border-slate-800"
              }`}
            >
              Exploitable
            </button>
            <span className="text-xs text-slate-400 font-medium ml-2">Showing {filtered.length} results</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search CVE, asset or component..."
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
                      <option value="Accept Risk">Accept Risk</option>
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
