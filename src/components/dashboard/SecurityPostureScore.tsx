"use client";

import React from "react";
import { FiTrendingDown, FiDownload } from "react-icons/fi";

interface SecurityPostureScoreProps {
  onExportReport?: () => void;
}

export const SecurityPostureScore: React.FC<SecurityPostureScoreProps> = ({ onExportReport }) => {
  // Calculated stroke dashoffset for score 31 out of 100 on a 280 circumference circle
  const score = 31;
  const circumference = 2 * Math.PI * 48; // r = 48 -> 301.59
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-800/60">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-white tracking-wide">
              MEGA <span className="text-slate-400 font-light">— Security Posture</span>
            </h1>
          </div>
          <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
            <span>Cloud Storage & Privacy</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400 hover:underline cursor-pointer">mega.io</span>
            <span className="text-slate-600">•</span>
            <span>last scan 30 Jul 2026 18:45</span>
          </p>
        </div>

        <button
          onClick={onExportReport}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-xs font-semibold rounded-lg transition-all shadow-sm active:scale-95 cursor-pointer w-fit"
        >
          <FiDownload className="w-3.5 h-3.5 text-slate-400" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Top 2 Cards Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Card: Security Posture */}
        <div className="lg:col-span-4 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between relative overflow-hidden group hover:border-slate-700/80 transition-all">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/80 via-amber-500/50 to-transparent" />
          <div>
            <h2 className="text-sm font-semibold text-white tracking-wide">Security Posture</h2>
            <p className="text-xs text-slate-400 mt-0.5">Weighted across all Threat360 modules</p>
          </div>

          <div className="my-6 flex items-center justify-between gap-4">
            {/* SVG Circular Score Meter */}
            <div className="relative w-32 h-32 flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 110 110">
                <circle
                  cx="55"
                  cy="55"
                  r="48"
                  className="text-slate-800"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                />
                <circle
                  cx="55"
                  cy="55"
                  r="48"
                  className="text-red-500 transition-all duration-1000 ease-out drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-extrabold text-white tracking-tight">{score}</span>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase bg-slate-800/80 px-2 py-0.5 rounded-full mt-0.5 border border-slate-700/60">
                  GRADE D
                </span>
              </div>
            </div>

            {/* Side Stats */}
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex items-center gap-1.5 text-xs text-red-400 font-medium">
                <FiTrendingDown className="w-3.5 h-3.5" />
                <span>4 pts vs previous scan</span>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-300 block">Critical Exposure</span>
                <span className="inline-block mt-1 px-2.5 py-0.5 text-[10px] font-bold text-red-400 bg-red-950/60 border border-red-800/60 rounded uppercase tracking-wider">
                  HIGH RISK
                </span>
              </div>

              <p className="text-[9px] uppercase font-mono tracking-wider text-slate-500 leading-snug mt-1">
                SIMULATED INTELLIGENCE • DEMONSTRATION DATA
              </p>
            </div>
          </div>
        </div>

        {/* Right Card: Security Overview */}
        <div className="lg:col-span-8 bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg flex flex-col justify-between relative overflow-hidden group hover:border-slate-700/80 transition-all">
          <div>
            <h2 className="text-sm font-semibold text-white tracking-wide">Security Overview</h2>
            <p className="text-xs text-slate-400 mt-0.5">Overall security rating out of 10</p>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Rating Box */}
            <div className="md:col-span-3 bg-slate-900/60 border border-slate-800/90 rounded-lg p-4 flex flex-col items-center justify-center text-center h-full">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">3</span>
                <span className="text-lg font-medium text-slate-400">/10</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-1">
                SECURITY RATING
              </span>
            </div>

            {/* Breakdown Grid */}
            <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Critical */}
              <div className="bg-slate-900/40 border border-slate-800/60 rounded-lg p-3 hover:border-red-500/30 transition-all">
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase block">
                  CRITICAL
                </span>
                <span className="text-xl font-bold text-red-400 mt-1 block">11</span>
              </div>

              {/* High */}
              <div className="bg-slate-900/40 border border-slate-800/60 rounded-lg p-3 hover:border-amber-500/30 transition-all">
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase block">
                  HIGH
                </span>
                <span className="text-xl font-bold text-amber-400 mt-1 block">31</span>
              </div>

              {/* Medium */}
              <div className="bg-slate-900/40 border border-slate-800/60 rounded-lg p-3 hover:border-blue-500/30 transition-all">
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase block">
                  MEDIUM
                </span>
                <span className="text-xl font-bold text-blue-400 mt-1 block">27</span>
              </div>

              {/* Low */}
              <div className="bg-slate-900/40 border border-slate-800/60 rounded-lg p-3 hover:border-cyan-500/30 transition-all">
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase block">
                  LOW
                </span>
                <span className="text-xl font-bold text-cyan-400 mt-1 block">27</span>
              </div>

              {/* Open */}
              <div className="bg-slate-900/40 border border-slate-800/60 rounded-lg p-3 hover:border-slate-600 transition-all">
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase block">
                  OPEN
                </span>
                <span className="text-xl font-bold text-white mt-1 block">27</span>
              </div>

              {/* Mitigated */}
              <div className="bg-slate-900/40 border border-slate-800/60 rounded-lg p-3 hover:border-emerald-500/30 transition-all">
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase block">
                  MITIGATED
                </span>
                <span className="text-xl font-bold text-emerald-400 mt-1 block">28</span>
              </div>

              {/* Exposed Assets */}
              <div className="bg-slate-900/40 border border-slate-800/60 rounded-lg p-3 hover:border-cyan-500/30 transition-all">
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase block">
                  EXPOSED ASSETS
                </span>
                <span className="text-xl font-bold text-cyan-400 mt-1 block">9</span>
              </div>

              {/* Dark Web */}
              <div className="bg-slate-900/40 border border-slate-800/60 rounded-lg p-3 hover:border-purple-500/30 transition-all">
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase block">
                  DARK WEB
                </span>
                <span className="text-xl font-bold text-purple-400 mt-1 block">18</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
