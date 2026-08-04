"use client";

import React, { useState } from "react";
import {
  FiMail,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface DmarcItem {
  id: string;
  domain: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status: string;
  dmarcRecord: string;
}

const mockDmarcRecords: DmarcItem[] = [
  {
    id: "DMARC-1060",
    domain: "mega.io",
    severity: "HIGH",
    status: "Open",
    dmarcRecord: "v=DMARC1 p=none rua=mailto:dmarc@mega.io",
  },
  {
    id: "DMARC-1061",
    domain: "mail.mega.io",
    severity: "HIGH",
    status: "Open",
    dmarcRecord: "not published",
  },
];

export const DmarcValidation: React.FC = () => {
  const [items, setItems] = useState<DmarcItem[]>(mockDmarcRecords);
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
      item.domain.toLowerCase().includes(q) ||
      item.dmarcRecord.toLowerCase().includes(q)
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
          <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-800/60 flex items-center justify-center text-amber-400 shadow-md">
            <FiMail className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">DMARC Validation</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              MailShield <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 text-[10px] font-bold tracking-wider rounded uppercase">
            ACTIVE
          </span>

          <button
            onClick={() => showToast("Exporting DMARC Validation Report...")}
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
            MONITORED DOMAINS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">2</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Email sending domains</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            PASSING DMARC
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">0</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Strict enforcement</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            ISSUES
          </span>
          <span className="text-3xl font-extrabold text-amber-500 mt-2 block">1</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Needs tuning</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            FAILING DMARC
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">1</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Spoofing risk</span>
        </div>
      </div>

      {/* Middle Section: DMARC Health + Auth Score */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Progress Bars */}
        <div className="lg:col-span-5 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">DMARC Health</h3>
            <p className="text-xs text-slate-400 mt-0.5">Record state across sending domains</p>
          </div>

          <div className="my-6 space-y-4">
            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                <span>Valid</span>
                <span>0</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full w-0" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                <span>Issues</span>
                <span>1</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 rounded-full w-1/2" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                <span>Invalid</span>
                <span>1</span>
              </div>
              <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full w-1/2" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Auth Score Chart */}
        <div className="lg:col-span-7 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Authentication Score by Domain</h3>
            <p className="text-xs text-slate-400 mt-0.5">0-100, higher is better</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-around border-b border-slate-800/80 pb-2">
            <div className="flex flex-col items-center gap-2 w-32">
              <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                <div className="w-full bg-blue-500 rounded-t h-3/4 flex items-center justify-center text-xs font-bold text-white">
                  75
                </div>
              </div>
              <span className="text-[10px] font-medium text-slate-400">mega.io</span>
            </div>

            <div className="flex flex-col items-center gap-2 w-32">
              <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                <div className="w-full bg-blue-500 rounded-t h-1/4 flex items-center justify-center text-xs font-bold text-white">
                  25
                </div>
              </div>
              <span className="text-[10px] font-medium text-slate-400">mail.mega.io</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">DMARC Record Status</h2>
            <p className="text-xs text-slate-400 mt-0.5">Current published value, triage status and the value that should be published</p>
          </div>
          <span className="text-xs text-slate-400 font-medium">Showing {filtered.length} results</span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search records..."
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
                <th className="py-3 px-3">DOMAIN</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">DMARC RECORD</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3 font-mono text-[11px] text-cyan-400 font-medium">
                    {item.id}
                  </td>
                  <td className="py-3.5 px-3 font-semibold text-slate-200">
                    <div>{item.domain}</div>
                    <span className="inline-flex items-center gap-1.5 mt-0.5 px-2 py-0.2 rounded text-[9px] font-bold tracking-wider bg-amber-950/80 border border-amber-800/80 text-amber-400 uppercase">
                      HIGH
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
                      className="bg-slate-900 border border-slate-700/80 text-slate-300 text-xs px-2.5 py-1 rounded-lg focus:outline-none cursor-pointer"
                    >
                      <option value="Open">Open</option>
                      <option value="Fixed">Fixed</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-3 font-mono text-[11px] text-slate-300">
                    <span className="bg-slate-900/90 px-2 py-1 rounded border border-slate-800 inline-block">
                      {item.dmarcRecord}
                    </span>
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
