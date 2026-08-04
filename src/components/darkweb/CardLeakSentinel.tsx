"use client";

import React, { useState } from "react";
import {
  FiKey,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface CardLeakItem {
  id: string;
  cardNumber: string;
  cvv: string;
  details: string;
  detectedTime: string;
  institution: string;
  region: string;
  status: string;
  riskLevel: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
}

const mockCardLeaks: CardLeakItem[] = [
  {
    id: "CARD-4576",
    cardNumber: "4111-XXXX-XXXX-1024",
    cvv: "•••",
    details: "exp 01/26",
    detectedTime: "detected 1 week ago",
    institution: "WELLS FARGO BANK ARIZONA, N.A.",
    region: "Global",
    status: "Open",
    riskLevel: "CRITICAL",
  },
  {
    id: "CARD-4577",
    cardNumber: "4242-XXXX-XXXX-9012",
    cvv: "•••",
    details: "exp 02/25",
    detectedTime: "detected 2 weeks ago",
    institution: "CHASE BANK USA, N.A.",
    region: "Global",
    status: "Open",
    riskLevel: "CRITICAL",
  },
  {
    id: "CARD-4578",
    cardNumber: "5412-XXXX-XXXX-3341",
    cvv: "•••",
    details: "exp 03/26",
    detectedTime: "detected 3 weeks ago",
    institution: "CAPITAL ONE BANK USA, N.A.",
    region: "Global",
    status: "Open",
    riskLevel: "CRITICAL",
  },
  {
    id: "CARD-4579",
    cardNumber: "3782-XXXX-XXXX-1004",
    cvv: "•••",
    details: "exp 04/27",
    detectedTime: "detected 4 weeks ago",
    institution: "AMERICAN EXPRESS COMPANY",
    region: "Global",
    status: "Open",
    riskLevel: "CRITICAL",
  },
  {
    id: "CARD-4580",
    cardNumber: "4532-XXXX-XXXX-7721",
    cvv: "•••",
    details: "exp 05/28",
    detectedTime: "detected 1 week ago",
    institution: "WELLS FARGO BANK ARIZONA, N.A.",
    region: "Global",
    status: "Open",
    riskLevel: "CRITICAL",
  },
  {
    id: "CARD-4581",
    cardNumber: "4000-XXXX-XXXX-8819",
    cvv: "•••",
    details: "exp 06/24",
    detectedTime: "detected 2 weeks ago",
    institution: "CHASE BANK USA, N.A.",
    region: "Global",
    status: "Open",
    riskLevel: "CRITICAL",
  },
  {
    id: "CARD-4582",
    cardNumber: "5105-XXXX-XXXX-9900",
    cvv: "•••",
    details: "exp 07/25",
    detectedTime: "detected 3 weeks ago",
    institution: "CAPITAL ONE BANK USA, N.A.",
    region: "Global",
    status: "Open",
    riskLevel: "HIGH",
  },
  {
    id: "CARD-4583",
    cardNumber: "3714-XXXX-XXXX-2011",
    cvv: "•••",
    details: "exp 08/26",
    detectedTime: "detected 4 weeks ago",
    institution: "AMERICAN EXPRESS COMPANY",
    region: "Global",
    status: "Open",
    riskLevel: "CRITICAL",
  },
];

export const CardLeakSentinel: React.FC = () => {
  const [items, setItems] = useState<CardLeakItem[]>(mockCardLeaks);
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
      item.cardNumber.toLowerCase().includes(q) ||
      item.institution.toLowerCase().includes(q)
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
            <FiKey className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Card Leak</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              Dark Web <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-purple-950/60 border border-purple-800/60 text-purple-400 text-[10px] font-bold tracking-wider rounded uppercase">
            NEW
          </span>

          <button
            onClick={() => showToast("Exporting Card Leak Report...")}
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
            LEAKED CARDS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">14</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Masked records</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            CRITICAL
          </span>
          <span className="text-3xl font-extrabold text-red-500 mt-2 block">12</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Immediate blocking</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            UNIQUE BINS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">4</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Issuing ranges</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            INSTITUTIONS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">4</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Affected banks</span>
        </div>
      </div>

      {/* Middle Section: Bar Chart + Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Bar Chart */}
        <div className="lg:col-span-7 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Leaks by Card Brand</h3>
            <p className="text-xs text-slate-400 mt-0.5">Distribution across card networks</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-around border-b border-slate-800/80 pb-2">
            {[
              { brand: "VISA", count: 8 },
              { brand: "MASTERCARD", count: 3 },
              { brand: "AMEX", count: 3 },
            ].map((bar) => (
              <div key={bar.brand} className="flex flex-col items-center gap-2 w-28">
                <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                  <div
                    className="w-full bg-blue-500 rounded-t flex items-center justify-center text-xs font-bold text-white"
                    style={{ height: `${(bar.count / 8) * 100}%` }}
                  >
                    {bar.count}
                  </div>
                </div>
                <span className="text-[10px] font-medium text-slate-400">{bar.brand}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Donut */}
        <div className="lg:col-span-5 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Risk Distribution</h3>
            <p className="text-xs text-slate-400 mt-0.5">Card leak records by severity</p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#ef4444" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="34.1" />
                <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="204.6" className="transform rotate-[308deg] origin-center" />
              </svg>
            </div>

            <div className="flex items-center gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="text-slate-300">Critical - 12</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="text-slate-300">High - 2</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">Card Leak</h2>
            <p className="text-xs text-slate-400 mt-0.5">Masked debit and credit card records found in dark web dumps</p>
          </div>
          <span className="text-xs text-slate-400 font-medium">Showing {filtered.length} results</span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search BIN, issuer or leak ID..."
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
                <th className="py-3 px-3">LEAK ID</th>
                <th className="py-3 px-3">CARD NUMBER</th>
                <th className="py-3 px-3">CVV</th>
                <th className="py-3 px-3">DETAILS</th>
                <th className="py-3 px-3">FINANCIAL INSTITUTION</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">RISK LEVEL</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3 font-mono text-cyan-400 font-semibold text-[11px]">{item.id}</td>
                  <td className="py-3.5 px-3 font-mono font-bold text-white">{item.cardNumber}</td>
                  <td className="py-3.5 px-3 font-mono text-slate-500">{item.cvv}</td>
                  <td className="py-3.5 px-3">
                    <div className="font-mono text-slate-200">{item.details}</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">{item.detectedTime}</div>
                  </td>
                  <td className="py-3.5 px-3">
                    <div className="font-medium text-slate-200">{item.institution}</div>
                    <div className="text-[10px] text-slate-500 uppercase">{item.region}</div>
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
                      <option value="Investigating">Investigating</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-3">
                    {item.riskLevel === "CRITICAL" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-red-950/80 border border-red-800 text-red-400 uppercase">CRITICAL</span>
                    )}
                    {item.riskLevel === "HIGH" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-950/80 border border-amber-800 text-amber-400 uppercase">HIGH</span>
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
