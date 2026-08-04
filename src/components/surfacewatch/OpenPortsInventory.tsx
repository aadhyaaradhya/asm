"use client";

import React, { useState } from "react";
import {
  FiEye,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface OpenPortItem {
  id: string;
  assetIp: string;
  port: number;
  service: string;
  protocol: string;
  detectedDate: string;
  status: string;
  riskLevel: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
}

const mockPorts: OpenPortItem[] = [
  {
    id: "PORT-1006",
    assetIp: "66.203.127.77",
    port: 8443,
    service: "HTTPS-Alt",
    protocol: "TCP",
    detectedDate: "2026-07-16",
    status: "Open",
    riskLevel: "CRITICAL",
  },
  {
    id: "PORT-1005",
    assetIp: "66.203.127.23",
    port: 443,
    service: "HTTPS",
    protocol: "TCP",
    detectedDate: "2026-07-16",
    status: "Fixed",
    riskLevel: "LOW",
  },
  {
    id: "PORT-1004",
    assetIp: "66.203.127.23",
    port: 80,
    service: "HTTP",
    protocol: "TCP",
    detectedDate: "2026-07-16",
    status: "Fixed",
    riskLevel: "MEDIUM",
  },
  {
    id: "PORT-1003",
    assetIp: "66.203.127.23",
    port: 22,
    service: "SSH",
    protocol: "TCP",
    detectedDate: "2026-07-16",
    status: "Fixed",
    riskLevel: "MEDIUM",
  },
  {
    id: "PORT-1002",
    assetIp: "66.203.127.58",
    port: 3306,
    service: "MySQL",
    protocol: "TCP",
    detectedDate: "2026-07-12",
    status: "Open",
    riskLevel: "CRITICAL",
  },
  {
    id: "PORT-1001",
    assetIp: "66.203.127.58",
    port: 3389,
    service: "RDP",
    protocol: "TCP",
    detectedDate: "2026-07-12",
    status: "Open",
    riskLevel: "HIGH",
  },
];

export const OpenPortsInventory: React.FC = () => {
  const [items, setItems] = useState<OpenPortItem[]>(mockPorts);
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
      item.assetIp.toLowerCase().includes(q) ||
      item.service.toLowerCase().includes(q) ||
      item.port.toString().includes(q)
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
            <h1 className="text-2xl font-bold text-white tracking-wide">Open Ports</h1>
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
            onClick={() => showToast("Exporting Open Ports Report...")}
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
            OPEN PORTS FOUND
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">6</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Across monitored IPs</span>
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
            UNIQUE ASSETS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">3</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Scanned hosts</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            REMEDIATED
          </span>
          <span className="text-3xl font-extrabold text-emerald-400 mt-2 block">3</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Closed or filtered</span>
        </div>
      </div>

      {/* Middle Section: Bar Chart + Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Bar Chart */}
        <div className="lg:col-span-7 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Ports by Service</h3>
            <p className="text-xs text-slate-400 mt-0.5">Exposed services on the attack surface</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-around border-b border-slate-800/80 pb-2">
            {[
              { service: "HTTPS-Alt", count: 1 },
              { service: "HTTPS", count: 1 },
              { service: "HTTP", count: 1 },
              { service: "SSH", count: 1 },
              { service: "MySQL", count: 1 },
              { service: "RDP", count: 1 },
            ].map((bar) => (
              <div key={bar.service} className="flex flex-col items-center gap-2 w-16">
                <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                  <div className="w-full bg-blue-500 rounded-t h-1/3 flex items-center justify-center text-[10px] font-bold text-white">
                    1
                  </div>
                </div>
                <span className="text-[9px] font-medium text-slate-400 truncate max-w-[60px]">{bar.service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Donut */}
        <div className="lg:col-span-5 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Risk Distribution</h3>
            <p className="text-xs text-slate-400 mt-0.5">Open ports by severity</p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#ef4444" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="159.17" />
                <circle cx="50" cy="50" r="38" stroke="#10b981" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="199" className="transform rotate-[120deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#facc15" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="159.17" className="transform rotate-[180deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="199" className="transform rotate-[300deg] origin-center" />
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-[11px]">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="text-slate-300">Critical - 2</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="text-slate-300">Low - 1</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="text-slate-300">Medium - 2</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="text-slate-300">High - 1</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Open Port Inventory</h2>
            <p className="text-xs text-slate-400 mt-0.5">Exposed TCP/UDP services on monitored assets</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search ports..."
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
                <th className="py-3 px-3">ASSET / IP</th>
                <th className="py-3 px-3">PORT</th>
                <th className="py-3 px-3">SERVICE</th>
                <th className="py-3 px-3">PROTOCOL</th>
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
                  <td className="py-3.5 px-3 font-mono text-slate-200 font-semibold">{item.assetIp}</td>
                  <td className="py-3.5 px-3 font-mono text-white font-bold">{item.port}</td>
                  <td className="py-3.5 px-3 font-medium text-slate-300">{item.service}</td>
                  <td className="py-3.5 px-3 font-mono text-slate-400">{item.protocol}</td>
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
                      <option value="Fixed">Fixed</option>
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
                    {item.riskLevel === "LOW" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-cyan-950/80 border border-cyan-800 text-cyan-400 uppercase">LOW</span>
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
