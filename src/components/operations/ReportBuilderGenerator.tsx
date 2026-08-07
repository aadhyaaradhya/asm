"use client";

import React, { useState } from "react";
import {
  FiFileText,
  FiDownload,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

export const ReportBuilderGenerator: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("One Month");
  const [selectedModules, setSelectedModules] = useState<string[]>([
    "BrandGuard",
    "AssetScope",
    "MailShield",
    "RepuTrac",
    "InfraSight",
    "SurfaceWatch",
    "VulnIntel",
    "Dark Web",
  ]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const toggleModule = (mod: string) => {
    if (selectedModules.includes(mod)) {
      setSelectedModules(selectedModules.filter((m) => m !== mod));
    } else {
      setSelectedModules([...selectedModules, mod]);
    }
  };

  const allModules = [
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
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 dark:bg-slate-900 border border-cyan-500/80 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-up">
          <FiCheckCircle className="w-5 h-5 text-cyan-400" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800/60">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-md">
            <FiFileText className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-wide">Report Builder</h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
              Operations <span className="text-slate-400 dark:text-slate-600">•</span> MEGA <span className="text-slate-400 dark:text-slate-600">•</span> mega.io
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => showToast("Exporting Custom Executive Report (PDF)...")}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-all shadow-xs active:scale-95 cursor-pointer"
          >
            <FiDownload className="w-3.5 h-3.5" />
            <span>Generate PDF Report</span>
          </button>
        </div>
      </div>

      {/* 4 Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            FINDINGS IN SCOPE
          </span>
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 block">96</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Active findings included</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            CRITICAL ISSUES
          </span>
          <span className="text-3xl font-extrabold text-red-600 dark:text-red-500 mt-2 block">11</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Highlighted in summary</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            REPORT PERIOD
          </span>
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400 mt-2 block">{selectedPeriod}</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Selected time scope</span>
        </div>

        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg relative overflow-hidden">
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase block">
            MODULE SCOPE
          </span>
          <span className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2 block">{selectedModules.length}/8</span>
          <span className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 block">Active security modules</span>
        </div>
      </div>

      {/* Report Configuration Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Reporting Period */}
        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide mb-1">Select Time Period</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Choose the historical range to include in the executive digest</p>

            <div className="grid grid-cols-3 gap-3">
              {["One Month", "Quarterly", "Custom Range"].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`p-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-2 transition-all cursor-pointer ${
                    selectedPeriod === period
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                  }`}
                >
                  <FiCalendar className="w-4 h-4" />
                  <span>{period}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Security Module Selection */}
        <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide mb-1">Module-wise Scope</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">Toggle security modules to include in report output</p>

            <div className="flex flex-wrap gap-2">
              {allModules.map((mod) => {
                const isSelected = selectedModules.includes(mod);
                return (
                  <button
                    key={mod}
                    onClick={() => toggleModule(mod)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-emerald-600 text-white shadow-xs"
                        : "bg-slate-100 dark:bg-slate-900/60 text-slate-500 dark:text-slate-500 border border-slate-200 dark:border-slate-800 line-through"
                    }`}
                  >
                    {mod}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Export Options Section */}
      <div className="bg-white dark:bg-[#0d1322]/80 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 shadow-xs dark:shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide">Export Format Options</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Download formatted reports for executive presentation or SIEM ingest</p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => showToast("Exporting PDF Report...")}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-all shadow-xs cursor-pointer"
          >
            <FiDownload className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </button>
          <button
            onClick={() => showToast("Exporting Excel Dataset...")}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-lg transition-all shadow-xs cursor-pointer"
          >
            <FiDownload className="w-3.5 h-3.5" />
            <span>Export Excel</span>
          </button>
        </div>
      </div>
    </div>
  );
};
