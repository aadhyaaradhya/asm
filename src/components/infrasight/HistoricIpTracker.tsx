"use client";

import React, { useState } from "react";
import {
  FiServer,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface HistoricIpItem {
  ip: string;
  firstSeen: string;
  lastSeen: string;
  country: string;
  state: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  detectedDate: string;
  status: string;
  details: string;
}

const mockHistoricIps: HistoricIpItem[] = [
  {
    ip: "66.203.127.23",
    firstSeen: "2012-11-07",
    lastSeen: "2026-08-04",
    country: "United States",
    state: "Active",
    severity: "LOW",
    detectedDate: "2026-07-18",
    status: "Open",
    details: "Primary edge address for mega.io - behind CDN",
  },
  {
    ip: "66.203.127.11",
    firstSeen: "2014-03-19",
    lastSeen: "2026-08-04",
    country: "New Zealand",
    state: "Active",
    severity: "LOW",
    detectedDate: "2026-05-19",
    status: "Open",
    details: "Client application origin",
  },
  {
    ip: "66.203.127.58",
    firstSeen: "2016-06-02",
    lastSeen: "2025-11-14",
    country: "Germany",
    state: "Legacy",
    severity: "HIGH",
    detectedDate: "2026-07-07",
    status: "Open",
    details: "Historic A record still reachable - unpatched nginx 1.14",
  },
  {
    ip: "66.203.127.77",
    firstSeen: "2021-09-08",
    lastSeen: "2026-07-28",
    country: "United States",
    state: "Shadow IT",
    severity: "CRITICAL",
    detectedDate: "2026-05-07",
    status: "Open",
    details: "Staging host outside asset inventory - debug endpoints open",
  },
  {
    ip: "45.60.11.204",
    firstSeen: "2019-01-22",
    lastSeen: "2024-04-30",
    country: "United States",
    state: "Legacy",
    severity: "MEDIUM",
    detectedDate: "2026-07-12",
    status: "Open",
    details: "Retired marketing host - DNS record removed, cert still valid",
  },
];

export const HistoricIpTracker: React.FC = () => {
  const [items, setItems] = useState<HistoricIpItem[]>(mockHistoricIps);
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const filtered = items.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.ip.toLowerCase().includes(q) ||
      item.details.toLowerCase().includes(q) ||
      item.country.toLowerCase().includes(q)
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
          <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-center text-blue-400 shadow-md">
            <FiServer className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Historic IP</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              InfraSight <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-amber-950/60 border border-amber-800/60 text-amber-400 text-[10px] font-bold tracking-wider rounded uppercase">
            WARNING
          </span>

          <button
            onClick={() => showToast("Exporting Historic IP Report...")}
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
            TOTAL IPS FOUND
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">5</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Scanned assets</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            LEGACY / UNUSED
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">2</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Decommission candidates</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            VULNERABLE
          </span>
          <span className="text-3xl font-extrabold text-red-500 mt-2 block">2</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Critical issues</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            SHADOW IT
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">1</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Unmanaged</span>
        </div>
      </div>

      {/* Middle Section: Donut + Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Donut */}
        <div className="lg:col-span-5 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Asset Status</h3>
            <p className="text-xs text-slate-400 mt-0.5">Historic IPs by severity</p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#10b981" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="143.25" />
                <circle cx="50" cy="50" r="38" stroke="#ef4444" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="191" className="transform rotate-[144deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="191" className="transform rotate-[216deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#facc15" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="191" className="transform rotate-[288deg] origin-center" />
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-[11px]">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="text-slate-300">Low - 2</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="text-slate-300">High - 1</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="text-slate-300">Critical - 1</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="text-slate-300">Medium - 1</span></div>
            </div>
          </div>
        </div>

        {/* Right Bar Chart */}
        <div className="lg:col-span-7 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">IPs by Hosting Country</h3>
            <p className="text-xs text-slate-400 mt-0.5">Where historic addresses resolve</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-around border-b border-slate-800/80 pb-2">
            <div className="flex flex-col items-center gap-2 w-28">
              <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                <div className="w-full bg-blue-500 rounded-t h-full flex items-center justify-center text-xs font-bold text-white">3</div>
              </div>
              <span className="text-[10px] font-medium text-slate-400">United States</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-28">
              <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                <div className="w-full bg-blue-500 rounded-t h-1/3 flex items-center justify-center text-xs font-bold text-white">1</div>
              </div>
              <span className="text-[10px] font-medium text-slate-400">New Zealand</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-28">
              <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                <div className="w-full bg-blue-500 rounded-t h-1/3 flex items-center justify-center text-xs font-bold text-white">1</div>
              </div>
              <span className="text-[10px] font-medium text-slate-400">Germany</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Historic IP Tracker</h2>
            <p className="text-xs text-slate-400 mt-0.5">Legacy and forgotten IP assets linked to mega.io</p>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto custom-sidebar-scrollbar">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-800/80 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                <th className="py-3 px-3">IP ADDRESS</th>
                <th className="py-3 px-3">FIRST SEEN</th>
                <th className="py-3 px-3">LAST SEEN</th>
                <th className="py-3 px-3">COUNTRY</th>
                <th className="py-3 px-3">STATE</th>
                <th className="py-3 px-3">SEVERITY</th>
                <th className="py-3 px-3">DATE DETECTED</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">DETAILS</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.ip} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3 font-mono text-cyan-400 font-semibold">{item.ip}</td>
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">{item.firstSeen}</td>
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">{item.lastSeen}</td>
                  <td className="py-3.5 px-3 text-slate-300 font-medium">{item.country}</td>
                  <td className="py-3.5 px-3 text-slate-300">{item.state}</td>
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
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">{item.detectedDate}</td>
                  <td className="py-3.5 px-3">
                    <select
                      value={item.status}
                      onChange={(e) =>
                        setItems((prev) =>
                          prev.map((i) => (i.ip === item.ip ? { ...i, status: e.target.value } : i))
                        )
                      }
                      className="bg-slate-900 border border-slate-700 text-slate-300 text-xs px-2 py-1 rounded"
                    >
                      <option value="Open">Open</option>
                      <option value="Investigating">Investigating</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-3 text-slate-400 text-[11px] max-w-[280px] truncate">{item.details}</td>
                  <td className="py-3.5 px-3 text-right">
                    <button
                      onClick={() => showToast(`Opening comments for ${item.ip}`)}
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
