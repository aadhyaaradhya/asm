"use client";

import React, { useState } from "react";
import {
  FiShare2,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface VendorLeakItem {
  id: string;
  vendorName: string;
  serviceCategory: string;
  dataExposed: string;
  recordsExposed: number;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status: string;
  breachDate: string;
}

const mockVendorLeaks: VendorLeakItem[] = [
  {
    id: "TPL-1201",
    vendorName: "Zendesk Inc.",
    serviceCategory: "Customer Support Portal",
    dataExposed: "Support Tickets & Customer Email History",
    recordsExposed: 28400,
    severity: "CRITICAL",
    status: "Open",
    breachDate: "2026-07-30",
  },
  {
    id: "TPL-1202",
    vendorName: "Stripe Payments",
    serviceCategory: "Payment Processor Gateway",
    dataExposed: "Merchant Metadata & Webhook Secret Keys",
    recordsExposed: 12000,
    severity: "CRITICAL",
    status: "Open",
    breachDate: "2026-07-28",
  },
  {
    id: "TPL-1203",
    vendorName: "Salesforce CRM",
    serviceCategory: "Cloud Customer Database",
    dataExposed: "Lead Contacts & Enterprise Contract PDFs",
    recordsExposed: 6500,
    severity: "HIGH",
    status: "Investigating",
    breachDate: "2026-07-25",
  },
  {
    id: "TPL-1204",
    vendorName: "Mixpanel Analytics",
    serviceCategory: "User Analytics & Telemetry",
    dataExposed: "User Device Identifiers & IP Logs",
    recordsExposed: 3150,
    severity: "MEDIUM",
    status: "Open",
    breachDate: "2026-07-20",
  },
  {
    id: "TPL-1205",
    vendorName: "Okta Identity",
    serviceCategory: "Identity Provider (IDP)",
    dataExposed: "SAML Metadata & Tenant Secret Hashes",
    recordsExposed: 200,
    severity: "HIGH",
    status: "Fixed",
    breachDate: "2026-07-15",
  },
  {
    id: "TPL-1206",
    vendorName: "Jumio KYC",
    serviceCategory: "Identity Verification",
    dataExposed: "Verification Log Metadata (No Images)",
    recordsExposed: 50,
    severity: "LOW",
    status: "Fixed",
    breachDate: "2026-07-10",
  },
];

export const ThirdPartyLeaksWatch: React.FC = () => {
  const [items, setItems] = useState<VendorLeakItem[]>(mockVendorLeaks);
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
      item.serviceCategory.toLowerCase().includes(q) ||
      item.dataExposed.toLowerCase().includes(q)
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
          <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/60 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-md">
            <FiShare2 className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Third-Party Supplier Leaks</h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
              Dark Web <span className="text-slate-400 dark:text-slate-600">•</span> MEGA <span className="text-slate-400 dark:text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 text-amber-700 dark:text-amber-400 text-[10px] font-bold tracking-wider rounded uppercase">
            VENDOR RISK ALERT
          </span>

          <button
            onClick={() => showToast("Exporting Third-Party Leaks Report...")}
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
            AFFECTED VENDORS
          </span>
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 block">6</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Monitored SaaS & Cloud partners</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            CRITICAL BREACHES
          </span>
          <span className="text-3xl font-extrabold text-red-600 dark:text-red-500 mt-2 block">2</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Active API key / Webhook leaks</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            EXPOSED ENTRIES
          </span>
          <span className="text-3xl font-extrabold text-teal-600 dark:text-teal-400 mt-2 block">50,300</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Third-party records exposed</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            LEAK SOURCES
          </span>
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 block">6</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Underground markets & dark web</span>
        </div>
      </div>

      {/* Middle Section: Donut + Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Bar Chart */}
        <div className="lg:col-span-7 bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide">Exposures by Vendor Category</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Third-party SaaS services affected</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-around border-b border-slate-200 dark:border-slate-800/80 pb-2">
            {[
              { cat: "Support", count: 28400 },
              { cat: "Payment", count: 12000 },
              { cat: "CRM", count: 6500 },
              { cat: "Analytics", count: 3150 },
              { cat: "Identity", count: 250 },
            ].map((bar) => (
              <div key={bar.cat} className="flex flex-col items-center gap-2 w-16">
                <div className="w-full bg-slate-100 dark:bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                  <div
                    className="w-full bg-teal-600 dark:bg-teal-500 rounded-t flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ height: `${(bar.count / 28400) * 100}%` }}
                  >
                    {(bar.count / 1000).toFixed(1)}k
                  </div>
                </div>
                <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400">{bar.cat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Donut Chart */}
        <div className="lg:col-span-5 bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide">Risk Distribution</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Vendor leaks categorized by severity</p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#ef4444" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="79.58" />
                <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="159.1" className="transform rotate-[120deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#facc15" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="198.9" className="transform rotate-[240deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#10b981" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="198.9" className="transform rotate-[300deg] origin-center" />
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-[11px]">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="text-slate-700 dark:text-slate-300">Critical - 2</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="text-slate-700 dark:text-slate-300">High - 2</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="text-slate-700 dark:text-slate-300">Medium - 1</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="text-slate-700 dark:text-slate-300">Low - 1</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-wide">Third-Party Vendor Breach Findings</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Monitored third-party SaaS vendors with reported security breaches</p>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Showing {filtered.length} results</span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            placeholder="Search vendor name, category or data exposed..."
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
                <th className="py-3 px-3">RECORD ID</th>
                <th className="py-3 px-3">VENDOR NAME</th>
                <th className="py-3 px-3">SERVICE CATEGORY</th>
                <th className="py-3 px-3">DATA EXPOSED</th>
                <th className="py-3 px-3">RECORDS</th>
                <th className="py-3 px-3">SEVERITY</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">BREACH DATE</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3 font-mono text-cyan-600 dark:text-cyan-400 font-semibold text-[11px]">{item.id}</td>
                  <td className="py-3.5 px-3 font-mono font-bold text-teal-600 dark:text-teal-300">{item.vendorName}</td>
                  <td className="py-3.5 px-3 text-slate-800 dark:text-slate-200 font-medium">{item.serviceCategory}</td>
                  <td className="py-3.5 px-3 text-slate-700 dark:text-slate-300 font-medium max-w-[280px]">{item.dataExposed}</td>
                  <td className="py-3.5 px-3 font-mono text-slate-700 dark:text-slate-300 font-bold">{item.recordsExposed.toLocaleString()}</td>
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
                    {item.severity === "LOW" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 uppercase">LOW</span>
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
                      <option value="Open">Open</option>
                      <option value="Investigating">Investigating</option>
                      <option value="Fixed">Fixed</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-3 text-slate-500 dark:text-slate-400 font-mono text-[11px]">{item.breachDate}</td>
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
