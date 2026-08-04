"use client";

import React, { useState } from "react";
import {
  FiDatabase,
  FiDownload,
  FiPlus,
  FiSearch,
  FiTrash2,
  FiCheckCircle,
} from "react-icons/fi";

interface WatchItem {
  id: string;
  assetValue: string;
  assetType: string;
  monitorSince: string;
  status: string;
}

const mockWatchItems: WatchItem[] = [
  {
    id: "W-1",
    assetValue: "mega.io",
    assetType: "Domains",
    monitorSince: "11 Jun, 2025",
    status: "ACTIVE",
  },
  {
    id: "W-2",
    assetValue: "mega.nz",
    assetType: "Domains",
    monitorSince: "11 Jun, 2025",
    status: "ACTIVE",
  },
];

export const WatchlistMonitor: React.FC = () => {
  const [items, setItems] = useState<WatchItem[]>(mockWatchItems);
  const [activeTab, setActiveTab] = useState("Domains 2");
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const tabs = [
    "Domains 2",
    "IP Addresses 2",
    "Subdomains 4",
    "App URIs 2",
    "Social Media 2",
    "Email IDs 2",
    "Keywords 2",
    "BIN 3",
  ];

  const filtered = items.filter((item) => {
    const q = searchQuery.toLowerCase();
    return (
      item.assetValue.toLowerCase().includes(q) ||
      item.assetType.toLowerCase().includes(q)
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
          <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 shadow-md">
            <FiDatabase className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Watch List</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              Operations <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => showToast("Exporting Watch List Report...")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-xs font-semibold rounded-lg transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <FiDownload className="w-3.5 h-3.5 text-slate-400" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* 4 Stat Cards with colored bottom border */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
              TOTAL ASSETS
            </span>
            <span className="text-3xl font-extrabold text-white mt-2 block">20</span>
          </div>
          <div className="w-full h-1 bg-blue-500 rounded-full mt-4" />
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
              DOMAINS & IPS
            </span>
            <span className="text-3xl font-extrabold text-white mt-2 block">9</span>
          </div>
          <div className="w-full h-1 bg-emerald-500 rounded-full mt-4" />
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
              BRAND & SOCIAL
            </span>
            <span className="text-3xl font-extrabold text-white mt-2 block">6</span>
          </div>
          <div className="w-full h-1 bg-purple-500 rounded-full mt-4" />
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
              IDENTITY & BIN
            </span>
            <span className="text-3xl font-extrabold text-white mt-2 block">5</span>
          </div>
          <div className="w-full h-1 bg-rose-500 rounded-full mt-4" />
        </div>
      </div>

      {/* Watchlist Monitor Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Watchlist Monitor</h2>
            <p className="text-xs text-slate-400 mt-0.5">Real-time tracking of your digital assets and brand keywords</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="New Domains..."
              className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-xs text-slate-200 rounded-lg focus:outline-none focus:border-cyan-500"
            />
            <button
              onClick={() => showToast("Adding new asset to watchlist...")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-all shadow cursor-pointer"
            >
              <FiPlus className="w-3.5 h-3.5" />
              <span>Add Asset</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded text-[11px] font-medium transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-blue-950 text-blue-400 border border-blue-800"
                    : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/60"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search in view..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto custom-sidebar-scrollbar">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-800/80 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                <th className="py-3 px-3">ASSET VALUE</th>
                <th className="py-3 px-3">MONITOR SINCE</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3">
                    <div className="font-semibold text-cyan-400">{item.assetValue}</div>
                    <div className="text-[10px] text-slate-500">{item.assetType}</div>
                  </td>
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">{item.monitorSince}</td>
                  <td className="py-3.5 px-3">
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-950/80 border border-emerald-800 text-emerald-400 uppercase">
                      ● {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <button
                      onClick={() => {
                        setItems((prev) => prev.filter((i) => i.id !== item.id));
                        showToast(`Removed ${item.assetValue} from watchlist.`);
                      }}
                      className="p-1.5 bg-slate-900 hover:bg-red-950/80 border border-slate-700 hover:border-red-800 text-slate-400 hover:text-red-400 rounded-lg transition-colors cursor-pointer"
                    >
                      <FiTrash2 className="w-3.5 h-3.5" />
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
