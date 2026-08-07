"use client";

import React, { useState } from "react";
import {
  FiShield,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface TakedownItem {
  id: string;
  targetUrl: string;
  reason: string;
  registrarHost: string;
  status: string;
  requestedDate: string;
  dateGroup: string;
}

const mockTakedowns: TakedownItem[] = [
  {
    id: "TD-9001",
    targetUrl: "megaio-auth-login.com",
    reason: "Phishing Site / Impersonation",
    registrarHost: "NameCheap / Cloudflare",
    status: "In Review",
    requestedDate: "2026-08-04",
    dateGroup: "Tue, 04 Aug 2026",
  },
  {
    id: "TD-9002",
    targetUrl: "facebook.com/mega.official.fake",
    reason: "Fake Social Profile",
    registrarHost: "Meta Trust & Safety",
    status: "In Review",
    requestedDate: "2026-08-04",
    dateGroup: "Tue, 04 Aug 2026",
  },
  {
    id: "TD-9003",
    targetUrl: "apkmirror.com/mega-v2.1-mod.apk",
    reason: "Trojanized APK Malware",
    registrarHost: "APKMirror Abuse Team",
    status: "Taken Down",
    requestedDate: "2026-08-03",
    dateGroup: "Mon, 03 Aug 2026",
  },
  {
    id: "TD-9004",
    targetUrl: "mega-security-alert.xyz",
    reason: "TypoSquat Domain",
    registrarHost: "GoDaddy Abuse Desk",
    status: "In Review",
    requestedDate: "2026-08-03",
    dateGroup: "Mon, 03 Aug 2026",
  },
  {
    id: "TD-9005",
    targetUrl: "twitter.com/mega_support_scam",
    reason: "Impersonation Account",
    registrarHost: "X Safety Desk",
    status: "Taken Down",
    requestedDate: "2026-08-02",
    dateGroup: "Sun, 02 Aug 2026",
  },
  {
    id: "TD-9006",
    targetUrl: "megabank-client-portal.online",
    reason: "Credential Harvesting Site",
    registrarHost: "Hostinger Abuse",
    status: "Rejected",
    requestedDate: "2026-08-01",
    dateGroup: "Sat, 01 Aug 2026",
  },
  {
    id: "TD-9007",
    targetUrl: "play.google.com/store/apps/details?id=com.fake.mega",
    reason: "Fake Brand Mobile App",
    registrarHost: "Google Play Store Safety",
    status: "In Review",
    requestedDate: "2026-07-31",
    dateGroup: "Fri, 31 Jul 2026",
  },
];

export const TakedownRequestsLog: React.FC = () => {
  const [items, setItems] = useState<TakedownItem[]>(mockTakedowns);
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
      item.targetUrl.toLowerCase().includes(q) ||
      item.reason.toLowerCase().includes(q) ||
      item.registrarHost.toLowerCase().includes(q)
    );
  });

  const dateGroups = Array.from(new Set(filtered.map((i) => i.dateGroup)));

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
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-md">
            <FiShield className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Takedown Requests</h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
              Operations <span className="text-slate-400 dark:text-slate-600">•</span> MEGA <span className="text-slate-400 dark:text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => showToast("Exporting Takedowns Report...")}
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
            TOTAL REQUESTS
          </span>
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 block">7</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Takedowns submitted</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            IN REVIEW
          </span>
          <span className="text-3xl font-extrabold text-amber-600 dark:text-amber-500 mt-2 block">4</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Pending registrar action</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            TAKEN DOWN
          </span>
          <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-500 mt-2 block">2</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Successfully removed</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            REJECTED
          </span>
          <span className="text-3xl font-extrabold text-red-600 dark:text-red-500 mt-2 block">1</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Requires further evidence</span>
        </div>
      </div>

      {/* Takedown Log Grouped by Date */}
      <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-wide">Takedown Request Activity Log</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Chronological record of takedown submissions across domain hosts and social networks</p>
          </div>

          <div className="relative w-full md:w-64">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Search takedowns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Grouped Day List */}
        <div className="space-y-6">
          {dateGroups.map((date) => {
            const itemsInGroup = filtered.filter((i) => i.dateGroup === date);
            return (
              <div key={date} className="space-y-2">
                <div className="flex items-center gap-2 px-2 py-1 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/60 rounded-lg text-[11px] font-bold text-slate-700 dark:text-slate-300">
                  <span>{date}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-500 font-normal">
                    {itemsInGroup.length} TAKEDOWNS
                  </span>
                </div>

                <div className="divide-y divide-slate-100 dark:divide-slate-800/40">
                  {itemsInGroup.map((item) => (
                    <div
                      key={item.id}
                      className="py-3 px-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-cyan-600 dark:text-cyan-400 font-mono text-[11px] font-semibold w-16">{item.id}</span>
                        <div>
                          <span className="text-xs font-semibold text-slate-900 dark:text-white block font-mono">{item.targetUrl}</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">
                            {item.reason} • <span className="text-slate-600 dark:text-slate-300">{item.registrarHost}</span>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-start sm:self-auto">
                        <select
                          value={item.status}
                          onChange={(e) =>
                            setItems((prev) =>
                              prev.map((i) => (i.id === item.id ? { ...i, status: e.target.value } : i))
                            )
                          }
                          className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-300 text-xs px-2.5 py-1 rounded"
                        >
                          <option value="In Review">In Review</option>
                          <option value="Taken Down">Taken Down</option>
                          <option value="Rejected">Rejected</option>
                        </select>

                        <button
                          onClick={() => showToast(`Opening comments for ${item.id}`)}
                          className="p-1.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg transition-colors cursor-pointer"
                        >
                          <FiMessageSquare className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
