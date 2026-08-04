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

interface RepoLeakItem {
  id: string;
  name: string;
  url: string;
  leakType: string;
  risk: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status: string;
  detectedDate: string;
}

const mockRepoLeaks: RepoLeakItem[] = [
  {
    id: "BG-REP-501",
    name: "mega-io/internal-billing-api",
    url: "https://github.com/mega-io/internal-billing-api",
    leakType: "GitHub public repository",
    risk: "CRITICAL",
    status: "Open",
    detectedDate: "2026-07-29",
  },
  {
    id: "BG-REP-502",
    name: "megaio-devops/terraform-prod",
    url: "https://github.com/megaio-devops/terraform-prod",
    leakType: "GitHub public repository",
    risk: "CRITICAL",
    status: "Open",
    detectedDate: "2026-07-26",
  },
  {
    id: "BG-REP-503",
    name: "ext-contractor/mega-mobile-sdk",
    url: "https://github.com/ext-contractor/mega-mobile-sdk",
    leakType: "GitHub contractor repository",
    risk: "HIGH",
    status: "Open",
    detectedDate: "2026-07-25",
  },
  {
    id: "BG-REP-504",
    name: "mega-io/support-scripts",
    url: "https://github.com/mega-io/support-scripts",
    leakType: "GitHub public repository",
    risk: "HIGH",
    status: "Open",
    detectedDate: "2026-07-24",
  },
  {
    id: "BG-REP-505",
    name: "gist - mega.io db dump snippet",
    url: "https://gist.github.com/megaio-intern/FF5104a7",
    leakType: "GitHub Gist",
    risk: "MEDIUM",
    status: "Open",
    detectedDate: "2026-07-23",
  },
];

export const RepoLeakSentinel: React.FC = () => {
  const [items, setItems] = useState<RepoLeakItem[]>(mockRepoLeaks);
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
      item.name.toLowerCase().includes(q) ||
      item.leakType.toLowerCase().includes(q) ||
      item.url.toLowerCase().includes(q)
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
          <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-800/60 flex items-center justify-center text-purple-400 shadow-md">
            <FiShield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">RepoLeak Sentinel</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              BrandGuard <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-amber-950/60 border border-amber-800/60 text-amber-400 text-[10px] font-bold tracking-wider rounded uppercase">
            WARNING
          </span>

          <button
            onClick={() => showToast("Exporting RepoLeak Sentinel Report...")}
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
            REPOSITORIES SCANNED
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">148</span>
          <span className="text-[11px] text-slate-400 mt-1 block">GitHub / GitLab public search</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            CRITICAL LEAKS
          </span>
          <span className="text-3xl font-extrabold text-red-500 mt-2 block">2</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            EXPOSED SECRETS
          </span>
          <span className="text-3xl font-extrabold text-amber-500 mt-2 block">58</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            REMEDIATED
          </span>
          <span className="text-3xl font-extrabold text-emerald-400 mt-2 block">0</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Update status to track</span>
        </div>
      </div>

      {/* Middle Section: Donut + Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Donut */}
        <div className="lg:col-span-5 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Risk Distribution</h3>
            <p className="text-xs text-slate-400 mt-0.5">Brand threats by severity</p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#1e293b" strokeWidth="12" fill="none" />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke="#ef4444"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="238.76"
                  strokeDashoffset="143.25"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke="#f59e0b"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="238.76"
                  strokeDashoffset="143.25"
                  className="transform rotate-[144deg] origin-center"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="38"
                  stroke="#facc15"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray="238.76"
                  strokeDashoffset="191"
                  className="transform rotate-[288deg] origin-center"
                />
              </svg>
            </div>

            <div className="flex items-center gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="text-slate-300">Critical - 2</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-slate-300">High - 2</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="text-slate-300">Medium - 1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Bar Chart */}
        <div className="lg:col-span-7 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Threats by Leak Type</h3>
            <p className="text-xs text-slate-400 mt-0.5">Where the abusing assets were found</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-around border-b border-slate-800/80 pb-2">
            {[
              { label: "GitHub Public Repo", count: 3 },
              { label: "GitHub Contractor", count: 1 },
              { label: "GitHub Gist", count: 1 },
            ].map((bar) => (
              <div key={bar.label} className="flex flex-col items-center gap-2 group w-24">
                <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                  <div
                    className="w-full bg-slate-700 group-hover:bg-cyan-500 rounded-t transition-all duration-300"
                    style={{ height: `${(bar.count / 3) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] font-medium text-slate-400 text-center">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Detected Repository Leaks</h2>
            <p className="text-xs text-slate-400 mt-0.5">Manage status, request takedown and track comment history</p>
          </div>
          <span className="text-xs text-slate-400 font-medium">Showing {filtered.length} results</span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search alert ID, name, platform or URL..."
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
                <th className="py-3 px-3">REPOSITORY</th>
                <th className="py-3 px-3">LEAK TYPE</th>
                <th className="py-3 px-3">RISK</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">DETECTED</th>
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
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>{item.name}</span>
                      <FiExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">{item.url}</div>
                  </td>
                  <td className="py-3.5 px-3 text-slate-300 font-medium">{item.leakType}</td>
                  <td className="py-3.5 px-3">
                    {item.risk === "CRITICAL" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-red-950/80 border border-red-800/80 text-red-400 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        CRITICAL
                      </span>
                    )}
                    {item.risk === "HIGH" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-amber-950/80 border border-amber-800/80 text-amber-400 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        HIGH
                      </span>
                    )}
                    {item.risk === "MEDIUM" && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-yellow-950/80 border border-yellow-800/80 text-yellow-400 uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        MEDIUM
                      </span>
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
                      className="bg-slate-900 border border-slate-700/80 text-slate-300 text-xs px-2.5 py-1 rounded-lg focus:outline-none cursor-pointer"
                    >
                      <option value="Open">Open</option>
                      <option value="Investigating">Investigating</option>
                      <option value="Remediated">Remediated</option>
                      <option value="False Positive">False Positive</option>
                    </select>
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
