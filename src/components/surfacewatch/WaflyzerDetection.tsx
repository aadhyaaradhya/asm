"use client";

import React, { useState } from "react";
import {
  FiEye,
  FiDownload,
  FiCheckCircle,
} from "react-icons/fi";

interface WafItem {
  domain: string;
  desc: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
}

const mockWafItems: WafItem[] = [
  {
    domain: "vpn.mega.io",
    desc: "No WAF detected - origin directly exposed to L7 attacks",
    severity: "HIGH",
  },
  {
    domain: "legacy.mega.io",
    desc: "WAF detected - requests filtered at the edge",
    severity: "LOW",
  },
  {
    domain: "portal.mega.io",
    desc: "WAF detected - requests filtered at the edge",
    severity: "LOW",
  },
  {
    domain: "api.mega.io",
    desc: "No WAF detected - origin directly exposed to L7 attacks",
    severity: "CRITICAL",
  },
  {
    domain: "mail.mega.io",
    desc: "WAF detected - requests filtered at the edge",
    severity: "LOW",
  },
  {
    domain: "www.mega.io",
    desc: "WAF detected - requests filtered at the edge",
    severity: "LOW",
  },
];

export const WaflyzerDetection: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

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
          <div className="w-10 h-10 rounded-xl bg-orange-950/60 border border-orange-800/60 flex items-center justify-center text-orange-400 shadow-md">
            <FiEye className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">WAF Detection</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              SurfaceWatch <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-red-950/60 border border-red-800/60 text-red-400 text-[10px] font-bold tracking-wider rounded uppercase">
            HIGH RISK
          </span>

          <button
            onClick={() => showToast("Exporting WAF Detection Report...")}
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
            ALERTS
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">12</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            CRITICAL
          </span>
          <span className="text-3xl font-extrabold text-red-500 mt-2 block">2</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            HIGH
          </span>
          <span className="text-3xl font-extrabold text-amber-500 mt-2 block">4</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            AVG. RISK
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">66</span>
        </div>
      </div>

      {/* WAF Grid Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg">
        <div className="mb-5">
          <h2 className="text-base font-bold text-white tracking-wide">WAF Detection</h2>
          <p className="text-xs text-slate-400 mt-0.5">Is a web application firewall in place?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockWafItems.map((item) => (
            <div
              key={item.domain}
              className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center justify-between gap-4"
            >
              <div>
                <span className="font-semibold text-white text-xs block">{item.domain}</span>
                <span className="text-[11px] text-slate-400 mt-0.5 block">{item.desc}</span>
              </div>
              {item.severity === "CRITICAL" && (
                <span className="px-2.5 py-0.5 rounded text-[9px] font-bold bg-red-950/80 border border-red-800 text-red-400 uppercase">
                  CRITICAL
                </span>
              )}
              {item.severity === "HIGH" && (
                <span className="px-2.5 py-0.5 rounded text-[9px] font-bold bg-amber-950/80 border border-amber-800 text-amber-400 uppercase">
                  HIGH
                </span>
              )}
              {item.severity === "LOW" && (
                <span className="px-2.5 py-0.5 rounded text-[9px] font-bold bg-cyan-950/80 border border-cyan-800 text-cyan-400 uppercase">
                  LOW
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
