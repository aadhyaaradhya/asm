"use client";

import React from "react";
import Link from "next/link";
import {
  FiShield,
  FiLayers,
  FiMail,
  FiActivity,
  FiServer,
  FiEye,
  FiAlertTriangle,
  FiLock,
} from "react-icons/fi";

interface ModuleRiskItem {
  id: string;
  name: string;
  icon: React.ElementType;
  score: number; // Score out of 10
  riskLevel: string;
  path: string;
  color: string;
}

const modules: ModuleRiskItem[] = [
  { id: "brandguard", name: "BrandGuard", icon: FiShield, score: 5.8, riskLevel: "MEDIUM RISK", path: "/client/brandguard/overview", color: "text-purple-400" },
  { id: "assetscope", name: "AssetScope", icon: FiLayers, score: 6.2, riskLevel: "MEDIUM RISK", path: "/client/assetscope/inventory", color: "text-cyan-400" },
  { id: "mailshield", name: "MailShield", icon: FiMail, score: 6.0, riskLevel: "MEDIUM RISK", path: "/client/mailshield/overview", color: "text-amber-400" },
  { id: "reputrac", name: "RepuTrac", icon: FiActivity, score: 5.6, riskLevel: "MEDIUM RISK", path: "/client/reputrac/ip", color: "text-emerald-400" },
  { id: "infrasight", name: "InfraSight", icon: FiServer, score: 6.5, riskLevel: "MEDIUM RISK", path: "/client/infrasight/tech-stack", color: "text-blue-400" },
  { id: "surfacewatch", name: "SurfaceWatch", icon: FiEye, score: 6.6, riskLevel: "MEDIUM RISK", path: "/client/surfacewatch/attack-surface", color: "text-orange-400" },
  { id: "vulnintel", name: "VulnIntel", icon: FiAlertTriangle, score: 6.4, riskLevel: "MEDIUM RISK", path: "/client/vuln-intel/overview", color: "text-rose-400" },
  { id: "darkweb", name: "Dark Web", icon: FiLock, score: 6.7, riskLevel: "MEDIUM RISK", path: "/client/dark-web/overview", color: "text-purple-400" },
];

export const ModuleRiskGrid: React.FC = () => {
  return (
    <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden transition-all">
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-white tracking-wide">Module-wise Threat Risk Score</h2>
        <p className="text-xs text-slate-400 mt-0.5">Risk out of 10 per module · click a module to open it</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {modules.map((mod) => {
          const IconComp = mod.icon;
          const radius = 28;
          const circumference = 2 * Math.PI * radius; // 175.9
          const strokeDashoffset = circumference - (mod.score / 10) * circumference;

          return (
            <Link
              key={mod.id}
              href={mod.path}
              className="group bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800/80 hover:border-amber-500/40 rounded-xl p-4 flex flex-col items-center justify-between text-center transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              {/* Module Name & Icon */}
              <div className="flex items-center gap-2 mb-3">
                <IconComp className={`w-4 h-4 ${mod.color}`} />
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {mod.name}
                </span>
              </div>

              {/* Progress Ring Gauge */}
              <div className="relative w-20 h-20 flex items-center justify-center my-1">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 70 70">
                  <circle
                    cx="35"
                    cy="35"
                    r={radius}
                    className="text-slate-800"
                    strokeWidth="5"
                    stroke="currentColor"
                    fill="transparent"
                  />
                  <circle
                    cx="35"
                    cy="35"
                    r={radius}
                    className="text-amber-500 transition-all duration-700 ease-out group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                    strokeWidth="5"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-white tracking-tight">{mod.score.toFixed(1)}</span>
                </div>
              </div>

              {/* Risk Level Badge */}
              <span className="mt-2 text-[9px] font-bold text-slate-400 tracking-wider uppercase group-hover:text-amber-400 transition-colors">
                {mod.riskLevel}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
