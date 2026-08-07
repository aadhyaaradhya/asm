"use client";

import React, { useState } from "react";
import {
  FiDisc,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface FeedAlert {
  id: string;
  threatType: string;
  source: string;
  targetAsset: string;
  riskScore: number;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status: string;
  timestamp: string;
}

const mockThreatFeed: FeedAlert[] = [
  {
    id: "TF-8801",
    threatType: "Phishing Infrastructure Registered",
    source: "BrandGuard Threat Radar",
    targetAsset: "megaio-login.net",
    riskScore: 88,
    severity: "HIGH",
    status: "Active",
    timestamp: "10 mins ago",
  },
  {
    id: "TF-8802",
    threatType: "Dark Web Stealer Credentials Dump",
    source: "Dark Web Sentinel",
    targetAsset: "network@mega.io",
    riskScore: 94,
    severity: "CRITICAL",
    status: "Investigating",
    timestamp: "25 mins ago",
  },
  {
    id: "TF-8803",
    threatType: "Suspicious RBL Blacklist Entry",
    source: "RepuTrac Monitor",
    targetAsset: "185.220.101.5",
    riskScore: 72,
    severity: "HIGH",
    status: "Active",
    timestamp: "1 hour ago",
  },
  {
    id: "TF-8804",
    threatType: "Subdomain Takeover Vulnerability",
    source: "SurfaceWatch Scanner",
    targetAsset: "dev.mega.io",
    riskScore: 65,
    severity: "HIGH",
    status: "Active",
    timestamp: "3 hours ago",
  },
  {
    id: "TF-8805",
    threatType: "Expired SSL/TLS Certificate",
    source: "CertPulse Engine",
    targetAsset: "legacy-api.mega.io",
    riskScore: 45,
    severity: "MEDIUM",
    status: "Fixed",
    timestamp: "5 hours ago",
  },
  {
    id: "TF-8806",
    threatType: "Open Database Port Exposed (TCP 3306)",
    source: "SurfaceWatch Port Scanner",
    targetAsset: "db-node.mega.io",
    riskScore: 78,
    severity: "HIGH",
    status: "Investigating",
    timestamp: "8 hours ago",
  },
];

export const ThreatFeedRadar: React.FC = () => {
  const [items, setItems] = useState<FeedAlert[]>(mockThreatFeed);
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
      item.threatType.toLowerCase().includes(q) ||
      item.source.toLowerCase().includes(q) ||
      item.targetAsset.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 dark:bg-slate-900 border border-cyan-500/80 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-up">
          <FiCheckCircle className="w-5 h-5 text-cyan-400" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800/60">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/60 flex items-center justify-center text-sky-600 dark:text-sky-400 shadow-md">
            <FiDisc className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Threat Feed & Fusion</h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
              Threat Fusion <span className="text-slate-400 dark:text-slate-600">•</span> MEGA <span className="text-slate-400 dark:text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-400 text-[10px] font-bold tracking-wider rounded uppercase">
            WARNING
          </span>

          <button
            onClick={() => showToast("Exporting Threat Feed Report...")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-lg transition-all shadow-xs dark:shadow-sm active:scale-95 cursor-pointer"
          >
            <FiDownload className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* 4 Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            ALERTS
          </span>
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 block">6</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Live threat alerts</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            CRITICAL
          </span>
          <span className="text-3xl font-extrabold text-red-600 dark:text-red-500 mt-2 block">0</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Immediate action required</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            HIGH
          </span>
          <span className="text-3xl font-extrabold text-amber-600 dark:text-amber-500 mt-2 block">4</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Elevated security concerns</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            AVG. RISK SCORE
          </span>
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 block">66</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Average threat severity rating</span>
        </div>
      </div>

      {/* Threat Feed Table Section */}
      <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-wide">Threat Alerts Stream</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Real-time integrated intelligence feed across all Threat360 modules</p>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Showing {filtered.length} results</span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            placeholder="Search threat type, source or target asset..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/90 rounded-xl text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 transition-all shadow-xs"
          />
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto custom-sidebar-scrollbar">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800/80 text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                <th className="py-3 px-3">ALERT ID</th>
                <th className="py-3 px-3">THREAT TYPE</th>
                <th className="py-3 px-3">SOURCE MODULE</th>
                <th className="py-3 px-3">TARGET ASSET</th>
                <th className="py-3 px-3">RISK SCORE</th>
                <th className="py-3 px-3">SEVERITY</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">TIMESTAMP</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3 font-mono text-cyan-600 dark:text-cyan-400 font-semibold text-[11px]">{item.id}</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-900 dark:text-white max-w-[260px]">{item.threatType}</td>
                  <td className="py-3.5 px-3 text-slate-700 dark:text-slate-300 font-medium">{item.source}</td>
                  <td className="py-3.5 px-3 font-mono text-cyan-600 dark:text-cyan-400 font-bold">{item.targetAsset}</td>
                  <td className="py-3.5 px-3 font-mono font-bold text-amber-600 dark:text-amber-400">{item.riskScore}</td>
                  <td className="py-3.5 px-3">
                    {item.severity === "CRITICAL" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-red-100 dark:bg-red-950/80 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 uppercase">CRITICAL</span>
                    )}
                    {item.severity === "HIGH" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-100 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 uppercase">HIGH</span>
                    )}
                    {item.severity === "MEDIUM" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-yellow-100 dark:bg-yellow-950/80 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-400 uppercase">MEDIUM</span>
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
                      className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-300 text-xs px-2.5 py-1 rounded"
                    >
                      <option value="Active">Active</option>
                      <option value="Investigating">Investigating</option>
                      <option value="Fixed">Fixed</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-3 text-slate-500 dark:text-slate-400 font-mono text-[11px]">{item.timestamp}</td>
                  <td className="py-3.5 px-3 text-right">
                    <button
                      onClick={() => showToast(`Opening comments for ${item.id}`)}
                      className="p-1.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg transition-colors cursor-pointer"
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
