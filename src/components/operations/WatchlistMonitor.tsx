"use client";

import React, { useState } from "react";
import {
  FiShield,
  FiDownload,
  FiPlus,
  FiSearch,
  FiTrash2,
  FiCheckCircle,
} from "react-icons/fi";

interface WatchItem {
  id: string;
  value: string;
  type: string;
  dateAdded: string;
  status: string;
}

const mockWatchItems: WatchItem[] = [
  { id: "W-1", value: "mega.io", type: "Domains", dateAdded: "2026-05-10", status: "Active" },
  { id: "W-2", value: "185.220.101.5", type: "IP Addresses", dateAdded: "2026-05-12", status: "Active" },
  { id: "W-3", value: "api.mega.io", type: "Subdomains", dateAdded: "2026-05-15", status: "Active" },
  { id: "W-4", value: "blog.mega.io", type: "Subdomains", dateAdded: "2026-05-16", status: "Active" },
  { id: "W-5", value: "dev.mega.io", type: "Subdomains", dateAdded: "2026-05-18", status: "Active" },
  { id: "W-6", value: "vpn.mega.io", type: "Subdomains", dateAdded: "2026-05-20", status: "Active" },
  { id: "W-7", value: "https://mega.io/app", type: "App URIs", dateAdded: "2026-06-01", status: "Active" },
  { id: "W-8", value: "@mega_official", type: "Social Media", dateAdded: "2026-06-05", status: "Active" },
  { id: "W-9", value: "453271", type: "BIN", dateAdded: "2026-06-10", status: "Active" },
  { id: "W-10", value: "541275", type: "BIN", dateAdded: "2026-06-12", status: "Active" },
];

export const WatchlistMonitor: React.FC = () => {
  const [items, setItems] = useState<WatchItem[]>(mockWatchItems);
  const [activeTab, setActiveTab] = useState("All");
  const [newAsset, setNewAsset] = useState("");
  const [assetType, setAssetType] = useState("Domains");
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleAddAsset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAsset.trim()) return;
    const newItem: WatchItem = {
      id: `W-${Date.now()}`,
      value: newAsset.trim(),
      type: assetType,
      dateAdded: new Date().toISOString().split("T")[0],
      status: "Active",
    };
    setItems([newItem, ...items]);
    setNewAsset("");
    showToast(`Added ${newItem.value} to Watch List.`);
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
    showToast("Asset removed from Watch List.");
  };

  const tabs = [
    "All",
    "Domains",
    "IP Addresses",
    "Subdomains",
    "App URIs",
    "Social Media",
    "Email IDs",
    "Keywords",
    "BIN",
  ];

  const filtered = items.filter((item) => {
    const matchesTab = activeTab === "All" || item.type === activeTab;
    const matchesSearch = item.value.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
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
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-md">
            <FiShield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Watch List</h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
              Operations <span className="text-slate-400 dark:text-slate-600">•</span> MEGA <span className="text-slate-400 dark:text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => showToast("Exporting Watch List Report...")}
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
            TOTAL ASSETS
          </span>
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 block">20</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Monitored identifiers</span>
          <div className="h-1 bg-cyan-500 rounded-full mt-3 w-full" />
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            DOMAINS & IPS
          </span>
          <span className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mt-2 block">9</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Primary infrastructure</span>
          <div className="h-1 bg-blue-500 rounded-full mt-3 w-full" />
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            BRAND & SOCIAL
          </span>
          <span className="text-3xl font-extrabold text-purple-600 dark:text-purple-400 mt-2 block">6</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Social & mobile apps</span>
          <div className="h-1 bg-purple-500 rounded-full mt-3 w-full" />
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            IDENTITY & BIN
          </span>
          <span className="text-3xl font-extrabold text-amber-600 dark:text-amber-400 mt-2 block">5</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Cards, Emails & Keywords</span>
          <div className="h-1 bg-amber-500 rounded-full mt-3 w-full" />
        </div>
      </div>

      {/* Add New Asset Form */}
      <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg">
        <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Add Identifier to Watch List</h2>
        <form onSubmit={handleAddAsset} className="flex flex-col sm:flex-row items-center gap-3">
          <select
            value={assetType}
            onChange={(e) => setAssetType(e.target.value)}
            className="w-full sm:w-48 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500"
          >
            {tabs.filter((t) => t !== "All").map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Enter domain, IP, email, BIN, or keyword..."
            value={newAsset}
            onChange={(e) => setNewAsset(e.target.value)}
            className="flex-1 w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-all shadow-xs cursor-pointer"
          >
            <FiPlus className="w-4 h-4" />
            <span>Add Asset</span>
          </button>
        </form>
      </div>

      {/* Main Table Section with Tabs */}
      <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800/80 pb-4 mb-4">
          {tabs.map((tab) => {
            const count = tab === "All" ? items.length : items.filter((i) => i.type === tab).length;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800/60"
                }`}
              >
                {tab} <span className="ml-1 opacity-75">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative mb-4">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            placeholder="Search watch list assets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>

        {/* Assets Table */}
        <div className="overflow-x-auto custom-sidebar-scrollbar">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800/80 text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">
                <th className="py-3 px-3">ASSET VALUE</th>
                <th className="py-3 px-3">CATEGORY</th>
                <th className="py-3 px-3">DATE ADDED</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-3 font-mono font-semibold text-slate-900 dark:text-white">{item.value}</td>
                  <td className="py-3 px-3 text-slate-600 dark:text-slate-400 font-medium">{item.type}</td>
                  <td className="py-3 px-3 text-slate-500 dark:text-slate-400 font-mono text-[11px]">{item.dateAdded}</td>
                  <td className="py-3 px-3">
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 uppercase">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-1.5 bg-slate-100 dark:bg-slate-900 hover:bg-red-100 dark:hover:bg-red-950/60 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-colors cursor-pointer"
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
