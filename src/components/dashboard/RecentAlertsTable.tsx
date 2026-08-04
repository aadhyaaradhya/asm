"use client";

import React from "react";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

interface AlertItem {
  id: string;
  title: string;
  target: string;
  module: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  status: "Open" | "Mitigated" | "False Positive" | "Investigating";
  score: number;
  path: string;
}

const mockAlerts: AlertItem[] = [
  {
    id: "T360-MEG-1862",
    title: "End-of-life web server version detected",
    target: "www.mega.io",
    module: "VulnIntel",
    severity: "CRITICAL",
    status: "False Positive",
    score: 98,
    path: "/client/vuln-intel/overview",
  },
  {
    id: "T360-MEG-1821",
    title: "Tier-1 payment vendor disclosed security incident",
    target: "paylink-services.com",
    module: "Supply Chain",
    severity: "CRITICAL",
    status: "False Positive",
    score: 96,
    path: "/client/supply-chain/vendor-monitoring",
  },
  {
    id: "T360-MEG-1868",
    title: "Employee credential set exposed in combolist",
    target: "s****@mega.io",
    module: "Dark Web",
    severity: "CRITICAL",
    status: "Mitigated",
    score: 96,
    path: "/client/dark-web/credential-leaks",
  },
  {
    id: "T360-MEG-1092",
    title: "End-of-life web server version detected",
    target: "www.mega.io",
    module: "VulnIntel",
    severity: "CRITICAL",
    status: "Mitigated",
    score: 94,
    path: "/client/vuln-intel/overview",
  },
  {
    id: "T360-MEG-1022",
    title: "Compromised npm package version in customer web build",
    target: "pkg:npm/ui-toolkit@..2.1",
    module: "Supply Chain",
    severity: "CRITICAL",
    status: "Investigating",
    score: 93,
    path: "/client/supply-chain/vendor-monitoring",
  },
  {
    id: "T360-MEG-1087",
    title: "Dangling DNS CNAME pointing to deprovisioned host",
    target: "cdn.mega.io",
    module: "InfraSight",
    severity: "CRITICAL",
    status: "Open",
    score: 93,
    path: "/client/infrasight/dns",
  },
  {
    id: "T360-MEG-1071",
    title: "Tier-1 payment vendor disclosed security incident",
    target: "paylink-services.com",
    module: "Supply Chain",
    severity: "CRITICAL",
    status: "Mitigated",
    score: 92,
    path: "/client/supply-chain/vendor-monitoring",
  },
  {
    id: "T360-MEG-1805",
    title: "Previously unknown subdomain discovered on mega.io",
    target: "legacy.mega.io",
    module: "AssetScope",
    severity: "CRITICAL",
    status: "Mitigated",
    score: 88,
    path: "/client/assetscope/subdomains",
  },
  {
    id: "T360-MEG-1857",
    title: "DMARC policy set to p=none for mega.io",
    target: "_dmarc.mega.io",
    module: "MailShield",
    severity: "CRITICAL",
    status: "Open",
    score: 87,
    path: "/client/mailshield/dmarc",
  },
  {
    id: "T360-MEG-1888",
    title: "Management interface exposed on port 3389",
    target: "8.76.29.59:3389",
    module: "SurfaceWatch",
    severity: "CRITICAL",
    status: "Investigating",
    score: 86,
    path: "/client/surfacewatch/open-ports",
  },
];

export const RecentAlertsTable: React.FC = () => {
  return (
    <div className="bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 shadow-lg relative overflow-hidden transition-all">
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-white tracking-wide">Recent High Priority Alerts</h2>
        <p className="text-xs text-slate-400 mt-0.5">Critical and high severity findings</p>
      </div>

      <div className="overflow-x-auto custom-sidebar-scrollbar">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-800/80 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              <th className="py-3 px-3">Alert ID</th>
              <th className="py-3 px-3">Title</th>
              <th className="py-3 px-3">Module</th>
              <th className="py-3 px-3">Severity</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/40 text-xs">
            {mockAlerts.map((alert) => (
              <tr key={alert.id} className="hover:bg-slate-800/40 transition-colors group">
                {/* Alert ID */}
                <td className="py-3 px-3 font-mono text-[11px] text-slate-400 group-hover:text-slate-200">
                  {alert.id}
                </td>

                {/* Title & Target Host */}
                <td className="py-3 px-3">
                  <div className="font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                    {alert.title}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">{alert.target}</div>
                </td>

                {/* Module */}
                <td className="py-3 px-3 text-slate-300 font-medium">{alert.module}</td>

                {/* Severity Badge */}
                <td className="py-3 px-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[9px] font-bold tracking-wider bg-red-950/70 border border-red-800/80 text-red-400 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    {alert.severity}
                  </span>
                </td>

                {/* Status & Risk Score */}
                <td className="py-3 px-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-300 font-medium">{alert.status}</span>
                    <span className="text-red-400 font-bold text-[11px] font-mono">{alert.score}</span>
                  </div>
                </td>

                {/* Action Link */}
                <td className="py-3 px-3 text-right">
                  <Link
                    href={alert.path}
                    className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-cyan-300 hover:underline font-medium transition-colors cursor-pointer"
                  >
                    <span>Open module</span>
                    <FiExternalLink className="w-3 h-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
