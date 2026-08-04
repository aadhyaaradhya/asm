"use client";

import React, { useState } from "react";
import {
  FiDatabase,
  FiDownload,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";

export const ReportBuilderGenerator: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("One Month");
  const [selectedModule, setSelectedModule] = useState("All modules");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const modules = [
    "All modules",
    "BrandGuard",
    "AssetScope",
    "MailShield",
    "RepuTrac",
    "InfraSight",
    "SurfaceWatch",
    "VulnIntel",
    "Dark Web",
  ];

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
          <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 shadow-md">
            <FiDatabase className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">Reports</h1>
            <p className="text-xs text-slate-400 mt-0.5 font-medium">
              Operations <span className="text-slate-600">•</span> MEGA <span className="text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => showToast("Exporting Reports Summary...")}
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
            FINDINGS IN SCOPE
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">96</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Rows included</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            CRITICAL
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">11</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Executive attention</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            REPORT PERIOD
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">1 Month</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Last one month (Jul 2026)</span>
        </div>

        <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
            MODULE SCOPE
          </span>
          <span className="text-3xl font-extrabold text-white mt-2 block">All modules</span>
          <span className="text-[11px] text-slate-400 mt-1 block">Module-wise report</span>
        </div>
      </div>

      {/* Report Builder Section */}
      <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-6 shadow-lg">
        <div className="mb-6">
          <h2 className="text-base font-bold text-white tracking-wide">Report Builder</h2>
          <p className="text-xs text-slate-400 mt-0.5">Choose a reporting period and module scope, then export</p>
        </div>

        {/* REPORTING PERIOD Options */}
        <div className="mb-6">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-3">
            REPORTING PERIOD
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setSelectedPeriod("One Month")}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                selectedPeriod === "One Month"
                  ? "bg-blue-950/60 border-blue-500 shadow-md shadow-blue-950/50"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <FiFileText className="w-4 h-4 text-blue-400" />
                <span>One Month</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Rolling 30-day operational report</p>
            </button>

            <button
              onClick={() => setSelectedPeriod("Quarterly")}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                selectedPeriod === "Quarterly"
                  ? "bg-blue-950/60 border-blue-500 shadow-md shadow-blue-950/50"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <FiFileText className="w-4 h-4 text-blue-400" />
                <span>Quarterly</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Executive quarter end summary</p>
            </button>

            <button
              onClick={() => setSelectedPeriod("Custom Range")}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                selectedPeriod === "Custom Range"
                  ? "bg-blue-950/60 border-blue-500 shadow-md shadow-blue-950/50"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <FiFileText className="w-4 h-4 text-blue-400" />
                <span>Custom Range</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Pick your own start and end date</p>
            </button>
          </div>
        </div>

        {/* MODULE-WISE SCOPE Pills */}
        <div className="mb-8">
          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block mb-3">
            MODULE-WISE SCOPE
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {modules.map((m) => (
              <button
                key={m}
                onClick={() => setSelectedModule(m)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedModule === m
                    ? "bg-blue-600 text-white shadow"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Export Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-4 border-t border-slate-800/80">
          <button
            onClick={() => showToast(`Generating PDF report for ${selectedPeriod} (${selectedModule})...`)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <FiDownload className="w-4 h-4" />
            <span>Generate PDF report</span>
          </button>

          <button
            onClick={() => showToast(`Generating Excel workbook for ${selectedPeriod} (${selectedModule})...`)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <FiFileText className="w-4 h-4 text-slate-400" />
            <span>Generate Excel workbook</span>
            <span className="text-[10px] text-slate-500 ml-1">
              Last one month (Jul 2026) • All modules
            </span>
          </button>
        </div>

        <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-4">
          REPORTS ARE GENERATED IN-BROWSER FROM THE CURRENT MONITORING DATASET
        </p>
      </div>
    </div>
  );
};
