"use client";

import React, { useState } from "react";
import { FiSearch, FiBell, FiMoon, FiSun, FiBriefcase, FiTarget } from "react-icons/fi";

export interface DashboardHeaderTopSideProps {
  selectedOrg?: string;
  onOrgChange?: (org: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onNewScan?: () => void;
  userInfo?: {
    name: string;
    email?: string;
  };
  isDark?: boolean;
  onToggleTheme?: () => void;
}

export function DashboardHeaderTopSide({
  selectedOrg = "Apex National Bank",
  onOrgChange,
  searchQuery: initialSearch = "",
  onSearchChange,
  onNewScan,
  userInfo = { name: "SOC Analyst", email: "analyst@apexnationalbank.com" },
  isDark = true,
  onToggleTheme,
}: DashboardHeaderTopSideProps) {
  const [internalSearch, setInternalSearch] = useState(initialSearch);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInternalSearch(val);
    if (onSearchChange) {
      onSearchChange(val);
    }
  };

  const handleScanClick = () => {
    if (onNewScan) {
      onNewScan();
    } else {
      alert(`Initiating real-time scan cycle for ${selectedOrg}`);
    }
  };

  // Get user initials for avatar
  const initials = userInfo.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <header
      className={`h-16 border-b px-4 sm:px-6 flex items-center justify-between gap-4 sticky top-0 z-30 transition-colors duration-200 ${
        isDark
          ? "bg-[#030712] border-white/10 text-white shadow-lg"
          : "bg-[#dbeafe] border-[#93c5fd] text-slate-900 shadow-xs"
      }`}
    >
      {/* Left: Organization Badge */}
      <div className="flex items-center gap-3">
        <div
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl border text-xs transition-colors ${
            isDark
              ? "bg-[#060c18] border-white/10"
              : "bg-white border-[#93c5fd] shadow-xs"
          }`}
        >
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center ${
              isDark
                ? "bg-[#1e517b]/40 border border-blue-500/30 text-blue-300"
                : "bg-[#0284c7] border border-[#0369a1] text-white shadow-xs"
            }`}
          >
            <FiBriefcase className="w-3.5 h-3.5" />
          </div>
          <div className="space-y-0.5 leading-none">
            <div
              className={`font-bold tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {selectedOrg}
            </div>
            <div className="text-[10px] text-emerald-600 font-mono font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Real-time monitoring</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle: Global Search Input */}
      <div className="flex-1 max-w-2xl hidden md:block">
        <div className="relative">
          <FiSearch
            className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${
              isDark ? "text-gray-400" : "text-slate-500"
            }`}
          />
          <input
            type="text"
            value={onSearchChange ? initialSearch : internalSearch}
            onChange={handleSearchChange}
            placeholder="Search IP, Domain, IOC, Finding..."
            className={`w-full border rounded-xl pl-10 pr-4 py-2 text-xs focus:outline-none focus:border-blue-600 transition-all font-mono ${
              isDark
                ? "bg-[#060c18] border-white/10 text-white placeholder-gray-400"
                : "bg-white border-[#93c5fd] text-slate-900 placeholder-slate-400 shadow-2xs font-semibold"
            }`}
          />
        </div>
      </div>

      {/* Right: Actions Bar */}
      <div className="flex items-center gap-3">
        {/* New Scan Button */}
        <button
          onClick={handleScanClick}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00b4d8] to-[#0077b6] hover:opacity-90 text-xs font-bold text-white shadow-md flex items-center gap-2 cursor-pointer transition-all"
        >
          <FiTarget className="w-3.5 h-3.5" />
          <span>New Scan</span>
        </button>

        {/* Notification Bell */}
        <button
          className={`relative p-2.5 rounded-xl border transition-all cursor-pointer ${
            isDark
              ? "bg-[#060c18] border-white/10 text-gray-300 hover:text-white hover:border-white/20"
              : "bg-white border-[#93c5fd] text-slate-700 hover:text-slate-900 hover:border-blue-400 shadow-2xs"
          }`}
        >
          <FiBell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-mono font-bold flex items-center justify-center shadow-xs">
            3
          </span>
        </button>

        {/* Theme Toggle (Moon / Sun) */}
        <button
          onClick={onToggleTheme}
          title={isDark ? "Switch to Light Blue Theme" : "Switch to Dark Theme"}
          className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
            isDark
              ? "bg-[#060c18] border-white/10 text-amber-400 hover:text-amber-300 hover:border-white/20"
              : "bg-white border-[#93c5fd] text-amber-600 hover:text-amber-700 hover:border-blue-400 shadow-2xs"
          }`}
        >
          {isDark ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4" />}
        </button>

        {/* User Profile Badge */}
        <div
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl border transition-colors ${
            isDark
              ? "bg-[#060c18] border-white/10"
              : "bg-white border-[#93c5fd] shadow-2xs"
          }`}
        >
          <div
            className={`w-7 h-7 rounded-full font-mono text-xs flex items-center justify-center ${
              isDark
                ? "bg-purple-600/30 border border-purple-500/40 text-purple-300 font-bold"
                : "bg-purple-600 text-white border border-purple-700 font-extrabold shadow-xs"
            }`}
          >
            {initials || "SA"}
          </div>
          <div className="hidden sm:block text-left space-y-0.5 leading-none">
            <div
              className={`font-bold text-xs ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {userInfo.name}
            </div>
            <div
              className={`text-[10px] font-mono ${
                isDark ? "text-gray-400" : "text-slate-600"
              }`}
            >
              ASM Admin
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export const DashboardHeader = DashboardHeaderTopSide;
export default DashboardHeaderTopSide;
