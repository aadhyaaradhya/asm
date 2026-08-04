"use client";

import React, { useState } from "react";
import {
  FiLayers,
  FiDownload,
  FiSearch,
  FiExternalLink,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface SubdomainItem {
  id: string;
  subdomain: string;
  desc: string;
  ip: string;
  status: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  detectedDate: string;
}

const mockSubdomains: SubdomainItem[] = [
  {
    id: "SUBMAP-418",
    subdomain: "www.mega.io",
    desc: "Primary marketing site · HTTPS + HSTS enforced",
    ip: "66.203.127.23",
    status: "Open",
    severity: "LOW",
    detectedDate: "2026-07-20",
  },
  {
    id: "SUBMAP-419",
    subdomain: "mega.nz",
    desc: "Client web application · Cloudflare fronted",
    ip: "66.203.127.11",
    status: "Open",
    severity: "LOW",
    detectedDate: "2026-07-07",
  },
  {
    id: "SUBMAP-420",
    subdomain: "api.mega.io",
    desc: "Public API endpoint · rate limiting not observed on /v1/session",
    ip: "66.203.127.31",
    status: "Open",
    severity: "MEDIUM",
    detectedDate: "2026-05-26",
  },
  {
    id: "SUBMAP-421",
    subdomain: "help.mega.io",
    desc: "Support knowledge base · third-party hosted",
    ip: "104.21.44.19",
    status: "Open",
    severity: "LOW",
    detectedDate: "2026-07-22",
  },
  {
    id: "SUBMAP-422",
    subdomain: "blog.mega.io",
    desc: "WordPress detected · plugin versions disclosed in headers",
    ip: "172.67.181.7",
    status: "Open",
    severity: "MEDIUM",
    detectedDate: "2026-06-27",
  },
  {
    id: "SUBMAP-423",
    subdomain: "legacy.mega.io",
    desc: "Deprecated host still resolving · TLS 1.0 accepted, no WAF",
    ip: "66.203.127.58",
    status: "Open",
    severity: "HIGH",
    detectedDate: "2026-07-08",
  },
  {
    id: "SUBMAP-424",
    subdomain: "dev.mega.io",
    desc: "Staging environment publicly reachable · directory listing and debug traces exposed",
    ip: "66.203.127.77",
    status: "Open",
    severity: "CRITICAL",
    detectedDate: "2026-05-09",
  },
  {
    id: "SUBMAP-425",
    subdomain: "mail.mega.io",
    desc: "Mail gateway · SPF present, DMARC policy not enforcing",
    ip: "66.203.127.25",
    status: "Open",
    severity: "MEDIUM",
    detectedDate: "2026-06-08",
  },
];

export const SubdomainMapper: React.FC = () => {
  const [items, setItems] = useState<SubdomainItem[]>(mockSubdomains);
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
      item.subdomain.toLowerCase().includes(q) ||
      item.ip.toLowerCase().includes(q) ||
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
          <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shadow-md">
            <FiLayers className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Subdomain Mapper</h1>
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
            onClick={() => showToast("Exporting Subdomain Mapper Report...")}
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
            TOTAL SUBDOMAINS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">8</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Mapped assets</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            VULNERABLE
          </span>
          <span className="text-3xl font-extrabold text-red-500 mt-2 block">2</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Critical risks</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            NEW ASSETS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">+1</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Since last scan</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            ACTIVE
          </span>
          <span className="text-3xl font-extrabold text-cyan-400 mt-2 block">8</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Online & reachable</span>
        </div>
      </div>

      {/* Middle Section: Donut + Wave Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Donut */}
        <div className="lg:col-span-5 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Status Distribution</h3>
            <p className="text-xs text-slate-400 mt-0.5">Triage state across all findings</p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#ef4444" strokeWidth="12" fill="none" />
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="text-slate-300">Open - 8</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-300">Fixed - 0</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-slate-300">Accept Risk - 0</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                <span className="text-slate-300">False Positive - 0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Activity Wave */}
        <div className="lg:col-span-7 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Activity Timeline</h3>
            <p className="text-xs text-slate-400 mt-0.5">Subdomain discoveries by weekday</p>
          </div>

          <div className="my-6 h-44 relative border-b border-l border-slate-800/80 flex items-end justify-between px-6 pb-2 text-[10px] text-slate-500">
            <svg className="absolute inset-0 w-full h-full text-cyan-400/80 overflow-visible" preserveAspectRatio="none">
              <path
                d="M 30 110 C 90 40, 150 140, 210 70 C 270 150, 330 110, 390 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <circle cx="30" cy="110" r="4" className="fill-cyan-400" />
              <circle cx="120" cy="75" r="4" className="fill-cyan-400" />
              <circle cx="210" cy="105" r="4" className="fill-cyan-400" />
              <circle cx="300" cy="70" r="4" className="fill-cyan-400" />
              <circle cx="390" cy="60" r="4" className="fill-cyan-400" />
            </svg>
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Subdomain Inventory</h2>
            <p className="text-xs text-slate-400 mt-0.5">All subdomains discovered for mega.io</p>
          </div>
          <span className="text-xs text-slate-400 font-medium">Showing {filtered.length} results</span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search subdomains..."
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
                <th className="py-3 px-3">SUBDOMAIN</th>
                <th className="py-3 px-3">IP</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">SEVERITY</th>
                <th className="py-3 px-3">DATE DETECTED</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
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
                      href={`https://${item.subdomain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>{item.subdomain}</span>
                      <FiExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">{item.desc}</div>
                  </td>
                  <td className="py-3.5 px-3 font-mono text-slate-300">{item.ip}</td>
                  <td className="py-3.5 px-3">
                    <select
                      value={item.status}
                      onChange={(e) =>
                        setItems((prev) =>
                          prev.map((i) => (i.id === item.id ? { ...i, status: e.target.value } : i))
                        )
                      }
                      className="bg-slate-900 border border-slate-700/80 text-slate-300 text-xs px-2.5 py-1 rounded-lg focus:outline-none cursor-pointer"
                    >
                      <option value="Open">Open</option>
                      <option value="Investigating">Investigating</option>
                      <option value="Fixed">Fixed</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-3">
                    {item.severity === "CRITICAL" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-red-950/80 border border-red-800/80 text-red-400 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        CRITICAL
                      </span>
                    )}
                    {item.severity === "HIGH" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-amber-950/80 border border-amber-800/80 text-amber-400 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        HIGH
                      </span>
                    )}
                    {item.severity === "MEDIUM" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-yellow-950/80 border border-yellow-800/80 text-yellow-400 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        MEDIUM
                      </span>
                    )}
                    {item.severity === "LOW" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        LOW
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">{item.detectedDate}</td>
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
