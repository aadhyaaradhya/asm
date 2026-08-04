"use client";

import React, { useState } from "react";
import {
  FiUsers,
  FiDownload,
  FiSearch,
  FiPlus,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface UserItem {
  id: string;
  name: string;
  email: string;
  role: string;
  org: string;
  tfa: boolean;
  lastLogin: string;
  status: string;
}

const mockUsers: UserItem[] = [
  {
    id: "USR-101",
    name: "Raju Hosmani",
    email: "network@mega.io",
    role: "Security Analyst",
    org: "MEGA",
    tfa: true,
    lastLogin: "Today 08:30 AM",
    status: "Active",
  },
  {
    id: "USR-102",
    name: "Sara Chen",
    email: "schen@mega.io",
    role: "Admin",
    org: "MEGA",
    tfa: true,
    lastLogin: "Today 07:15 AM",
    status: "Active",
  },
  {
    id: "USR-103",
    name: "Alex Miller",
    email: "amiller@mega.io",
    role: "Auditor",
    org: "MEGA",
    tfa: true,
    lastLogin: "Yesterday",
    status: "Active",
  },
];

export const ManagementCenter: React.FC = () => {
  const [items] = useState<UserItem[]>(mockUsers);
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
      item.email.toLowerCase().includes(q) ||
      item.role.toLowerCase().includes(q)
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
          <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-center text-blue-400 shadow-md">
            <FiUsers className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Management & Governance</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              Management <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => showToast("Exporting Governance Report...")}
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
            ORGANIZATIONS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">1</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Primary tenant</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            ACTIVE USERS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">14</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Analysts & Admins</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            INTEGRATIONS
          </span>
          <span className="text-3xl font-extrabold text-emerald-400 mt-2 block">8</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Active SIEM & Webhooks</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            AUDIT LOGS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">120+</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Recorded actions</span>
        </div>
      </div>

      {/* Middle Section: Donut + Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Donut */}
        <div className="lg:col-span-5 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">User Role Distribution</h3>
            <p className="text-xs text-slate-400 mt-0.5">Analyst access hierarchy</p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#3b82f6" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="136.4" />
                <circle cx="50" cy="50" r="38" stroke="#8b5cf6" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="204.6" className="transform rotate-[154deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#10b981" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="170.5" className="transform rotate-[257deg] origin-center" />
              </svg>
            </div>

            <div className="flex items-center gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" /><span className="text-slate-300">Analyst - 8</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-500" /><span className="text-slate-300">Admin - 2</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="text-slate-300">Auditor - 4</span></div>
            </div>
          </div>
        </div>

        {/* Right Bar Chart */}
        <div className="lg:col-span-7 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Active SIEM & Webhook Integrations</h3>
            <p className="text-xs text-slate-400 mt-0.5">Connected platforms</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-around border-b border-slate-800/80 pb-2">
            {[
              { name: "Slack", count: 3 },
              { name: "Jira", count: 2 },
              { name: "Splunk", count: 2 },
              { name: "Webhook", count: 1 },
            ].map((bar) => (
              <div key={bar.name} className="flex flex-col items-center gap-2 w-20">
                <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                  <div
                    className="w-full bg-blue-500 rounded-t flex items-center justify-center text-xs font-bold text-white"
                    style={{ height: `${(bar.count / 3) * 100}%` }}
                  >
                    {bar.count}
                  </div>
                </div>
                <span className="text-[10px] font-medium text-slate-400">{bar.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-white tracking-wide">User & Organization Management</h2>
            <p className="text-xs text-slate-400 mt-0.5">Authorized users and access controls</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search user..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <button
              onClick={() => showToast("Opening Add User dialog...")}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-all shadow cursor-pointer"
            >
              <FiPlus className="w-3.5 h-3.5" />
              <span>Add User</span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto custom-sidebar-scrollbar">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="border-b border-slate-800/80 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                <th className="py-3 px-3">USER ID</th>
                <th className="py-3 px-3">NAME / EMAIL</th>
                <th className="py-3 px-3">ROLE</th>
                <th className="py-3 px-3">ORGANIZATION</th>
                <th className="py-3 px-3">2FA STATUS</th>
                <th className="py-3 px-3">LAST LOGIN</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3 font-mono text-cyan-400 font-semibold text-[11px]">{item.id}</td>
                  <td className="py-3.5 px-3">
                    <div className="font-semibold text-white">{item.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{item.email}</div>
                  </td>
                  <td className="py-3.5 px-3 text-slate-300 font-medium">{item.role}</td>
                  <td className="py-3.5 px-3 font-mono text-slate-400">{item.org}</td>
                  <td className="py-3.5 px-3">
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-950/80 border border-emerald-800 text-emerald-400 uppercase">
                      ENABLED
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-slate-400 font-mono text-[11px]">{item.lastLogin}</td>
                  <td className="py-3.5 px-3">
                    <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-blue-950/80 border border-blue-800 text-blue-400 uppercase">
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    <button
                      onClick={() => showToast(`Opening settings for ${item.name}`)}
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
