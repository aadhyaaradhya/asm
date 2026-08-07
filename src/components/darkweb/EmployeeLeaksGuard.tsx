"use client";

import React, { useState } from "react";
import {
  FiUserCheck,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface EmployeeLeakItem {
  id: string;
  employeeEmail: string;
  department: string;
  dataExposed: string;
  source: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status: string;
  detectedAt: string;
}

const mockEmployeeLeaks: EmployeeLeakItem[] = [
  {
    id: "EMP-1201",
    employeeEmail: "raju.hosmani@mega.io",
    department: "Security Operations / SysAdmin",
    dataExposed: "Active Directory Hash & VPN Password",
    source: "Vidar Stealer Malware Log",
    severity: "CRITICAL",
    status: "Open",
    detectedAt: "2026-08-03",
  },
  {
    id: "EMP-1202",
    employeeEmail: "devops.lead@mega.io",
    department: "Engineering / DevOps",
    dataExposed: "AWS IAM Access Key & GitHub Token",
    source: "Public Pastebin Leak #9021",
    severity: "CRITICAL",
    status: "Open",
    detectedAt: "2026-08-01",
  },
  {
    id: "EMP-1203",
    employeeEmail: "hr.manager@mega.io",
    department: "Human Resources",
    dataExposed: "Office 365 Mailbox OAuth Refresh Token",
    source: "Lumma Stealer Dump",
    severity: "HIGH",
    status: "Investigating",
    detectedAt: "2026-07-28",
  },
  {
    id: "EMP-1204",
    employeeEmail: "support.admin@mega.io",
    department: "Customer Support",
    dataExposed: "Zendesk API Token & Password Hash",
    source: "Dark Web Forum Market",
    severity: "HIGH",
    status: "Open",
    detectedAt: "2026-07-25",
  },
  {
    id: "EMP-1205",
    employeeEmail: "finance.dir@mega.io",
    department: "Finance & Accounting",
    dataExposed: "Corporate Banking Portal Password",
    source: "Raccoon Stealer Log #441",
    severity: "CRITICAL",
    status: "Fixed",
    detectedAt: "2026-07-20",
  },
  {
    id: "EMP-1206",
    employeeEmail: "qa.engineer@mega.io",
    department: "Quality Assurance",
    dataExposed: "Staging Server SSH Private Key",
    source: "Dark Web Telegram Channel",
    severity: "MEDIUM",
    status: "Fixed",
    detectedAt: "2026-07-15",
  },
];

export const EmployeeLeaksGuard: React.FC = () => {
  const [items, setItems] = useState<EmployeeLeakItem[]>(mockEmployeeLeaks);
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
      item.employeeEmail.toLowerCase().includes(q) ||
      item.department.toLowerCase().includes(q) ||
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
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60 flex items-center justify-center text-purple-600 dark:text-purple-400 shadow-md">
            <FiUserCheck className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Employee Credentials Exposure</h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
              Dark Web <span className="text-slate-400 dark:text-slate-600">•</span> MEGA <span className="text-slate-400 dark:text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-red-100 dark:bg-red-950/60 border border-red-200 dark:border-red-800/60 text-red-600 dark:text-red-400 text-[10px] font-bold tracking-wider rounded uppercase">
            INTERNAL CORPORATE EXPOSURE
          </span>

          <button
            onClick={() => showToast("Exporting Employee Leaks Report...")}
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
            LEAKED ACCOUNTS
          </span>
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 block">6</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Corporate email domain matches</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            CRITICAL
          </span>
          <span className="text-3xl font-extrabold text-red-600 dark:text-red-500 mt-2 block">3</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">SysAdmin & DevOps credentials</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            PRIVILEGED ROLES
          </span>
          <span className="text-3xl font-extrabold text-purple-600 dark:text-purple-400 mt-2 block">4</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">High access accounts</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            LEAK SOURCES
          </span>
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 block">6</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Infostealer logs & pastes</span>
        </div>
      </div>

      {/* Middle Section: Donut + Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Bar Chart */}
        <div className="lg:col-span-7 bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide">Leaks by Department</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Corporate business units affected</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-around border-b border-slate-200 dark:border-slate-800/80 pb-2">
            {[
              { dept: "SysAdmin", count: 2 },
              { dept: "DevOps", count: 1 },
              { dept: "HR", count: 1 },
              { dept: "Support", count: 1 },
              { dept: "Finance", count: 1 },
            ].map((bar) => (
              <div key={bar.dept} className="flex flex-col items-center gap-2 w-16">
                <div className="w-full bg-slate-100 dark:bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                  <div
                    className="w-full bg-purple-600 dark:bg-purple-500 rounded-t flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ height: `${(bar.count / 2) * 100}%` }}
                  >
                    {bar.count}
                  </div>
                </div>
                <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400">{bar.dept}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Donut Chart */}
        <div className="lg:col-span-5 bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide">Risk Severity</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Employee exposures categorized by risk</p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#ef4444" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="119.38" />
                <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="159.1" className="transform rotate-[180deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#facc15" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="198.9" className="transform rotate-[300deg] origin-center" />
              </svg>
            </div>

            <div className="flex items-center gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="text-slate-700 dark:text-slate-300">Critical - 3</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="text-slate-700 dark:text-slate-300">High - 2</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="text-slate-700 dark:text-slate-300">Medium - 1</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Table Section */}
      <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white tracking-wide">Employee Credential Leak Logs</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Leaked corporate logins, VPN keys, and cloud API tokens</p>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Showing {filtered.length} results</span>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            placeholder="Search employee email, department or data exposed..."
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
                <th className="py-3 px-3">EMPLOYEE EMAIL</th>
                <th className="py-3 px-3">DEPARTMENT</th>
                <th className="py-3 px-3">DATA EXPOSED</th>
                <th className="py-3 px-3">SOURCE</th>
                <th className="py-3 px-3">SEVERITY</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3">DETECTED DATE</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3 font-mono text-cyan-600 dark:text-cyan-400 font-semibold text-[11px]">{item.id}</td>
                  <td className="py-3.5 px-3 font-mono font-bold text-purple-600 dark:text-purple-300">{item.employeeEmail}</td>
                  <td className="py-3.5 px-3 text-slate-800 dark:text-slate-200 font-medium">{item.department}</td>
                  <td className="py-3.5 px-3 text-slate-700 dark:text-slate-300 font-medium max-w-[280px]">{item.dataExposed}</td>
                  <td className="py-3.5 px-3 text-slate-500 dark:text-slate-400 font-mono text-[11px]">{item.source}</td>
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
                  <td className="py-3.5 px-3 text-slate-500 dark:text-slate-400 font-mono text-[11px]">{item.detectedAt}</td>
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
