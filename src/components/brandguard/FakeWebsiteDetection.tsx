"use client";

import React, { useState } from "react";
import {
  FiShield,
  FiDownload,
  FiSearch,
  FiExternalLink,
  FiMessageSquare,
  FiCheckCircle,
  FiX,
  FiAlertOctagon,
} from "react-icons/fi";
import { TbHammer } from "react-icons/tb";

interface FakeWebsiteItem {
  id: string;
  website: string;
  url: string;
  siteType: string;
  risk: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status: string;
  detectedDate: string;
}

const mockFakeSites: FakeWebsiteItem[] = [
  {
    id: "BG-FAK-401",
    website: "mega-login.io/signin",
    url: "http://mega-login.io/signin",
    siteType: "Cloned sign-in portal",
    risk: "CRITICAL",
    status: "Open",
    detectedDate: "2026-07-30",
  },
  {
    id: "BG-FAK-402",
    website: "megaio-support.com",
    url: "http://megaio-support.com",
    siteType: "Fake support site",
    risk: "CRITICAL",
    status: "Open",
    detectedDate: "2026-07-24",
  },
  {
    id: "BG-FAK-403",
    website: "mega-storage-offer.com",
    url: "http://mega-storage-offer.com",
    siteType: "Fake promotion site",
    risk: "HIGH",
    status: "Open",
    detectedDate: "2026-07-17",
  },
  {
    id: "BG-FAK-404",
    website: "megainvest-cloud.org",
    url: "http://megainvest-cloud.org",
    siteType: "Brand-abuse investment site",
    risk: "HIGH",
    status: "Open",
    detectedDate: "2026-07-05",
  },
  {
    id: "BG-FAK-405",
    website: "mega-download.site",
    url: "http://mega-download.site",
    siteType: "Fake download mirror",
    risk: "MEDIUM",
    status: "Open",
    detectedDate: "2026-06-27",
  },
];

export const FakeWebsiteDetection: React.FC = () => {
  const [items, setItems] = useState<FakeWebsiteItem[]>(mockFakeSites);
  const [searchQuery, setSearchQuery] = useState("");
  const [takedownItem, setTakedownItem] = useState<FakeWebsiteItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const filtered = items.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.id.toLowerCase().includes(q) ||
      item.website.toLowerCase().includes(q) ||
      item.siteType.toLowerCase().includes(q) ||
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
            <h1 className="text-2xl font-bold text-white tracking-wide">Fake Website Detection</h1>
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
            onClick={() => showToast("Exporting Fake Website Detection Report...")}
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
            FAKE SITES
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">5</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            CREDENTIAL HARVESTING
          </span>
          <span className="text-3xl font-extrabold text-red-500 mt-2 block">2</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            HIGH RISK
          </span>
          <span className="text-3xl font-extrabold text-amber-500 mt-2 block">2</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            HOSTS INVOLVED
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">5</span>
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
                {/* Critical - 2 (40%) */}
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
                {/* High - 2 (40%) */}
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
                {/* Medium - 1 (20%) */}
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
            <h3 className="text-sm font-semibold text-white tracking-wide">Threats by Site Type</h3>
            <p className="text-xs text-slate-400 mt-0.5">Where the abusing assets were found</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-between gap-3 px-4 border-b border-slate-800/80 pb-2">
            {[
              { type: "Cloned sign-in portal", count: 1 },
              { type: "Fake support site", count: 1 },
              { type: "Fake promotion site", count: 1 },
              { type: "Brand-abuse investment", count: 1 },
              { type: "Fake download mirror", count: 1 },
            ].map((bar) => (
              <div key={bar.type} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                  <div
                    className="w-full bg-slate-700 group-hover:bg-cyan-500 rounded-t transition-all duration-300"
                    style={{ height: `40%` }}
                  />
                </div>
                <span className="text-[9px] font-medium text-slate-400 text-center truncate max-w-[80px]" title={bar.type}>
                  {bar.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Fraudulent Websites</h2>
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
                <th className="py-3 px-3">WEBSITE</th>
                <th className="py-3 px-3">SITE TYPE</th>
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
                      <span>{item.website}</span>
                      <FiExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">{item.url}</div>
                  </td>
                  <td className="py-3.5 px-3 text-slate-300 font-medium">{item.siteType}</td>
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
                      <option value="Takedown Requested">Takedown Requested</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">{item.detectedDate}</td>
                  <td className="py-3.5 px-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setTakedownItem(item)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 hover:bg-red-950/60 border border-slate-700 hover:border-red-600/80 text-slate-200 hover:text-red-300 text-xs font-semibold rounded-lg transition-all cursor-pointer"
                      >
                        <TbHammer className="w-3.5 h-3.5" />
                        <span>Takedown</span>
                      </button>
                      <button
                        onClick={() => showToast(`Opening comments for ${item.id}`)}
                        className="p-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-cyan-400 rounded-lg transition-colors cursor-pointer"
                      >
                        <FiMessageSquare className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Takedown Modal */}
      {takedownItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0d1322] border border-slate-700 rounded-2xl p-6 max-w-md w-full shadow-2xl text-white">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2 text-red-400 font-bold text-base">
                <FiAlertOctagon className="w-5 h-5" />
                <span>Host Takedown Request</span>
              </div>
              <button onClick={() => setTakedownItem(null)} className="text-slate-400 hover:text-white">
                <FiX className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Issue a host abuse takedown for fake website <strong className="text-cyan-400">{takedownItem.website}</strong>?
            </p>
            <div className="flex items-center justify-end gap-3 mt-6">
              <button onClick={() => setTakedownItem(null)} className="px-4 py-2 bg-slate-800 text-slate-300 text-xs rounded-lg">
                Cancel
              </button>
              <button
                onClick={() => {
                  showToast(`Host takedown notice sent for ${takedownItem.website}`);
                  setTakedownItem(null);
                }}
                className="px-4 py-2 bg-red-600 text-white text-xs font-semibold rounded-lg shadow-lg"
              >
                Confirm Takedown Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
