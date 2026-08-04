"use client";

import React, { useState } from "react";
import {
  FiServer,
  FiDownload,
  FiSearch,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

interface TechStackItem {
  id: string;
  domain: string;
  scannedTime: string;
  techs: string[];
  techsSubtext?: string;
  category: string;
  risk: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status: string;
}

const mockTechStacks: TechStackItem[] = [
  {
    id: "STACK-8",
    domain: "mega.io",
    scannedTime: "Scanned 2h ago",
    techs: ["jQuery", "jQuery Migrate", "Bootstrap", "Laravel", "Nginx 1.25", "React 18", "+5 more"],
    techsSubtext: "Redirected from http://mega.io/ to https://mega.io/ [200 OK] Country[UNITED STATES(US)]",
    category: "Frontend",
    risk: "LOW",
    status: "Open",
  },
  {
    id: "STACK-9",
    domain: "mega.nz",
    scannedTime: "Scanned 2h ago",
    techs: ["WordPress 6.2", "MySQL", "Chart.js", "particles.js", "jQuery", "Bootstrap", "+1 more"],
    techsSubtext: "Client web application · Cloudflare fronted [200 OK] Country[NEW ZEALAND(NZ)]",
    category: "CMS",
    risk: "LOW",
    status: "Open",
  },
  {
    id: "STACK-10",
    domain: "api.mega.io",
    scannedTime: "Scanned 2h ago",
    techs: ["Nginx 1.25", "Node.js 20", "OpenSSL 3.0.13", "HTTP/2"],
    techsSubtext: "OpenSSL minor version behind current patch level",
    category: "Backend",
    risk: "MEDIUM",
    status: "Open",
  },
  {
    id: "STACK-11",
    domain: "blog.mega.io",
    scannedTime: "Scanned 4h ago",
    techs: ["WordPress 6.2", "PHP 8.0", "Apache 2.4.52", "jQuery 1.12.4", "Yoast SEO"],
    techsSubtext: "jQuery 1.12.4 and PHP 8.0 are end-of-life - known XSS vectors",
    category: "CMS",
    risk: "HIGH",
    status: "Open",
  },
  {
    id: "STACK-12",
    domain: "legacy.mega.io",
    scannedTime: "Scanned 6h ago",
    techs: ["Nginx 1.14", "PHP 7.2", "TLS 1.0"],
    techsSubtext: "All components end-of-life · TLS 1.0 accepted",
    category: "Backend",
    risk: "CRITICAL",
    status: "Open",
  },
  {
    id: "STACK-13",
    domain: "help.mega.io",
    scannedTime: "Scanned 5h ago",
    techs: ["Cloudflare", "Zendesk", "HTTP/2"],
    techsSubtext: "Third-party managed platform",
    category: "CDN",
    risk: "LOW",
    status: "Open",
  },
];

export const TechStackFingerprint: React.FC = () => {
  const [items, setItems] = useState<TechStackItem[]>(mockTechStacks);
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
          <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/60 flex items-center justify-center text-blue-400 shadow-md">
            <FiServer className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Tech Stack</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              InfraSight <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-amber-950/60 border border-amber-800/60 text-amber-400 text-[10px] font-bold tracking-wider rounded uppercase">
            WARNING
          </span>

          <button
            onClick={() => showToast("Exporting Tech Stack Report...")}
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
            TECHNOLOGIES DETECTED
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">33</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Across all assets</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            OUTDATED
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">1</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Update recommended</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            VULNERABLE STACKS
          </span>
          <span className="text-3xl font-extrabold text-red-500 mt-2 block">2</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Immediate action</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            ASSETS FINGERPRINTED
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">6</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Public hosts</span>
        </div>
      </div>

      {/* Middle Section: Donut + Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Donut */}
        <div className="lg:col-span-5 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Stack Risk Distribution</h3>
            <p className="text-xs text-slate-400 mt-0.5">Assets by severity</p>
          </div>

          <div className="my-6 flex flex-col items-center justify-center">
            <div className="relative w-44 h-44 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#10b981" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="119.38" />
                <circle cx="50" cy="50" r="38" stroke="#facc15" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="191" className="transform rotate-[180deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#f59e0b" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="191" className="transform rotate-[252deg] origin-center" />
                <circle cx="50" cy="50" r="38" stroke="#ef4444" strokeWidth="12" fill="none" strokeDasharray="238.76" strokeDashoffset="191" className="transform rotate-[324deg] origin-center" />
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-4 text-[11px]">
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /><span className="text-slate-300">Low - 3</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="text-slate-300">Medium - 1</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /><span className="text-slate-300">High - 1</span></div>
              <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /><span className="text-slate-300">Critical - 1</span></div>
            </div>
          </div>
        </div>

        {/* Right Bar Chart */}
        <div className="lg:col-span-7 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Category Distribution</h3>
            <p className="text-xs text-slate-400 mt-0.5">Detected stacks per category</p>
          </div>

          <div className="my-6 h-40 flex items-end justify-around border-b border-slate-800/80 pb-2">
            {[
              { cat: "Frontend", count: 1 },
              { cat: "CMS", count: 2 },
              { cat: "Backend", count: 2 },
              { cat: "CDN", count: 1 },
            ].map((bar) => (
              <div key={bar.cat} className="flex flex-col items-center gap-2 w-24">
                <div className="w-full bg-slate-900/90 rounded-t h-32 flex items-end p-1">
                  <div
                    className="w-full bg-blue-500 rounded-t flex items-center justify-center text-xs font-bold text-white"
                    style={{ height: `${(bar.count / 2) * 100}%` }}
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
            <h2 className="text-base font-bold text-white tracking-wide">Identified Technologies</h2>
            <p className="text-xs text-slate-400 mt-0.5">Frameworks and server software powering the digital footprint</p>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto custom-sidebar-scrollbar">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="border-b border-slate-800/80 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                <th className="py-3 px-3">ALERT ID</th>
                <th className="py-3 px-3">DOMAIN</th>
                <th className="py-3 px-3">TECHNOLOGIES</th>
                <th className="py-3 px-3">CATEGORY</th>
                <th className="py-3 px-3">RISK</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 text-xs">
              {filtered.map((item) => (
                <tr key={item.id} className="hover:bg-slate-800/40 transition-colors group">
                  <td className="py-3.5 px-3 font-mono text-cyan-400 font-semibold text-[11px]">{item.id}</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-200">
                    <div>{item.domain}</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">{item.scannedTime}</div>
                  </td>
                  <td className="py-3.5 px-3">
                    <div className="flex flex-wrap gap-1">
                      {item.techs.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                    {item.techsSubtext && (
                      <div className="text-[10px] text-slate-500 font-mono mt-1">{item.techsSubtext}</div>
                    )}
                  </td>
                  <td className="py-3.5 px-3 text-slate-300 font-medium">{item.category}</td>
                  <td className="py-3.5 px-3">
                    {item.risk === "CRITICAL" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-red-950/80 border border-red-800 text-red-400 uppercase">CRITICAL</span>
                    )}
                    {item.risk === "HIGH" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-amber-950/80 border border-amber-800 text-amber-400 uppercase">HIGH</span>
                    )}
                    {item.risk === "MEDIUM" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-yellow-950/80 border border-yellow-800 text-yellow-400 uppercase">MEDIUM</span>
                    )}
                    {item.risk === "LOW" && (
                      <span className="px-2 py-0.5 rounded text-[9px] font-bold bg-cyan-950/80 border border-cyan-800 text-cyan-400 uppercase">LOW</span>
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
                      className="bg-slate-900 border border-slate-700 text-slate-300 text-xs px-2 py-1 rounded"
                    >
                      <option value="Open">Open</option>
                      <option value="Investigating">Investigating</option>
                    </select>
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
