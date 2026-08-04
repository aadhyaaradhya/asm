"use client";

import React, { useState } from "react";
import {
  FiShare2,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface VendorItem {
  id: string;
  vendorName: string;
  category: string;
  ecosystem: string;
  riskScore: number;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status: string;
  assessedDate: string;
}

const mockVendors: VendorItem[] = [
  {
    id: "VND-101",
    vendorName: "Stripe Payments",
    category: "Payment Processor",
    ecosystem: "Primary (3rd Party)",
    riskScore: 92,
    severity: "CRITICAL",
    status: "Open",
    assessedDate: "2026-07-20",
  },
  {
    id: "VND-102",
    vendorName: "Zendesk Support",
    category: "Customer Support",
    ecosystem: "Primary (3rd Party)",
    riskScore: 78,
    severity: "HIGH",
    status: "Open",
    assessedDate: "2026-07-18",
  },
  {
    id: "VND-103",
    vendorName: "Mixpanel Analytics",
    category: "Analytics",
    ecosystem: "Primary (3rd Party)",
    riskScore: 65,
    severity: "MEDIUM",
    status: "Open",
    assessedDate: "2026-07-15",
  },
  {
    id: "VND-104",
    vendorName: "Cloudflare CDN",
    category: "CDN & Edge",
    ecosystem: "Primary (3rd Party)",
    riskScore: 15,
    severity: "LOW",
    status: "Open",
    assessedDate: "2026-07-12",
  },
  {
    id: "VND-105",
    vendorName: "Okta Identity",
    category: "IDP & Radius",
    ecosystem: "Secondary (4th Party)",
    riskScore: 84,
    severity: "HIGH",
    status: "Open",
    assessedDate: "2026-07-10",
  },
];

export const SupplyChainMonitor: React.FC = () => {
  const [items, setItems] = useState<VendorItem[]>(mockVendors);
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
      item.vendorName.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
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
          <div className="w-10 h-10 rounded-xl bg-teal-950/60 border border-teal-800/60 flex items-center justify-center text-teal-400 shadow-md">
            <FiShare2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Supply Chain</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              Supply Chain <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-red-950/60 border border-red-800/60 text-red-400 text-[10px] font-bold tracking-wider rounded uppercase">
            HIGH RISK
          </span>

          <button
            onClick={() => showToast("Exporting Supply Chain Report...")}
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
            MONITORED VENDORS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">18</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Third & Fourth Party</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            HIGH RISK VENDORS
          </span>
          <span className="text-3xl font-extrabold text-red-500 mt-2 block">3</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Immediate action required</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            EXPOSED DEPENDENCIES
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">42</span>
          <span className="text-[11px] text-slate-400 mt-1 block">External scripts & libraries</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            VENDOR BREACHES
          </span>
          <span className="text-3xl font-extrabold text-amber-500 mt-2 block">2</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Recent leaks detected</span>
        </div>
      </div>

      {/* Middle Section: Donut + Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Donut */}
        <div className="lg:col-span-5 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Vendor Risk Distribution</h3>
            <p className="text-xs text-slate-400 mt-0.5">Vendors by risk rating</p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#10b981" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="106.1" />
                <circle cx="50" cy="50" r="38" stroke="#facc15" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="172.4" className="transform rotate-[200deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="212.2" className="transform rotate-[300deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#ef4444" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="225.5" className="transform rotate-[340deg] origin-center" />
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-[11px]">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="text-slate-300">Low - 10</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="text-slate-300">Medium - 5</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="text-slate-300">High - 2</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="text-slate-300">Critical - 1</span></div>
            </div>
          </div>
        </div>

        {/* Right Bar Chart */}
        <div className="lg:col-span-7 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Dependencies by Category</h3>
            <p className="text-xs text-slate-400 mt-0.5">External vendor integrations</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-around border-b border-slate-800/80 pb-2">
            {[
              { cat: "Payment", count: 4 },
              { cat: "Analytics", count: 8 },
              { cat: "CDN", count: 3 },
              { cat: "Support", count: 3 },
            ].map((bar) => (
              <div key={bar.cat} className="flex flex-col items-center gap-2 w-20">
                <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                  <div
                    className="w-full bg-blue-500 rounded-t flex items-center justify-center text-xs font-bold text-white"
                    style={{ height: `${(bar.count / 8) * 100}%` }}
                  >
                    {bar.count}
                  </div>
                </div>
                <span className="text-[10px] font-medium text-slate-400">{bar.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Supply Chain Vendor Inventory</h2>
            <p className="text-xs text-slate-400 mt-0.5">Active third-party vendor relationships and security assessments</p>
          </div>
          <span className="text-xs text-slate-400 font-medium">Showing {filtered.length} results</span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search vendor or category..."
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
                <th className="py-3 px-3">VENDOR ID</th>
                <th className="py-3 px-3">VENDOR NAME</th>
                <th className="py-3 px-3">CATEGORY</th>
                <th className="py-3 px-3">ECOSYSTEM</th>
                <th className="py-3 px-3">RISK SCORE</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">DATE ASSESSED</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3 font-mono text-cyan-400 font-semibold text-[11px]">{item.id}</td>
                  <td className="py-3.5 px-3 font-semibold text-white">{item.vendorName}</td>
                  <td className="py-3.5 px-3 text-slate-300 font-medium">{item.category}</td>
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">{item.ecosystem}</td>
                  <td className="py-3.5 px-3">
                    <span className={`font-mono font-bold ${
                      item.riskScore >= 85 ? "text-red-400" : item.riskScore >= 70 ? "text-amber-400" : item.riskScore >= 50 ? "text-yellow-400" : "text-emerald-400"
                    }`}>
                      {item.riskScore} ({item.severity})
                    </span>
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
                      <option value="Under Review">Under Review</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">{item.assessedDate}</td>
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
