"use client";

import React, { useState } from "react";
import { ProtectedRoute } from "@/components/dashboard/ProtectedRoute";
import { DashboardSidebarleftSide, MenuItem } from "@/components/dashboard/DashboardSidebarleftSide";
import { DashboardHeaderTopSide } from "@/components/dashboard/DashboardHeaderTopSide";

const clientMenuItems: MenuItem[] = [
  // 1. OVERVIEW
  {
    section: "OVERVIEW",
    icon: "Grid",
    color: "text-blue-400",
    label: "Dashboard",
    path: "/client/dashboard",
  },

  // 2. SECURITY MODULES
  {
    section: "SECURITY MODULES",
    icon: "Shield",
    color: "text-purple-400",
    label: "BrandGuard",
    subItems: [
      { label: "Social Media", path: "/client/brandguard/social-impersonation" },
      { label: "AppClone Hunter", path: "/client/brandguard/appclone" },
      { label: "TypoSquat Tracker", path: "/client/brandguard/typosquat" },
      { label: "Fake Website Detection", path: "/client/brandguard/fake-website" },
      { label: "RepoLeak Sentinel", path: "/client/brandguard/repoleak" },
      { label: "News Surveillance", path: "/client/brandguard/news" },
      { label: "BrandMention Radar", path: "/client/brandguard/brandmention" },
    ],
  },
  {
    section: "SECURITY MODULES",
    icon: "Layers",
    color: "text-cyan-400",
    label: "AssetScope",
    subItems: [
      { label: "Asset Inventory", path: "/client/assetscope/inventory" },
      { label: "Domain Discovery", path: "/client/assetscope/domains" },
      { label: "Subdomain Discovery", path: "/client/assetscope/subdomains" },
      { label: "IP Discovery", path: "/client/assetscope/ips" },
      { label: "ASN Intelligence", path: "/client/assetscope/asn" },
      { label: "Historical IP", path: "/client/assetscope/historical-ip" },
      { label: "Technology Detection", path: "/client/assetscope/tech-detection" },
    ],
  },
  {
    section: "SECURITY MODULES",
    icon: "Mail",
    color: "text-amber-400",
    label: "MailShield",
    subItems: [
      { label: "Email Security Overview", path: "/client/mailshield/overview" },
      { label: "SPF Analyzer", path: "/client/mailshield/spf" },
      { label: "DMARC Analyzer", path: "/client/mailshield/dmarc" },
      { label: "DKIM Analyzer", path: "/client/mailshield/dkim" },
      { label: "Spoofing Risk", path: "/client/mailshield/spoofing" },
    ],
  },
  {
    section: "SECURITY MODULES",
    icon: "Activity",
    color: "text-emerald-400",
    label: "RepuTrac",
    subItems: [
      { label: "IP Reputation", path: "/client/reputrac/ip" },
      { label: "Domain Reputation", path: "/client/reputrac/domain" },
      { label: "URL Reputation", path: "/client/reputrac/url" },
      { label: "Blacklist Monitor", path: "/client/reputrac/blacklist" },
      { label: "IOC Lookup", path: "/client/reputrac/ioc-lookup" },
    ],
  },
  {
    section: "SECURITY MODULES",
    icon: "Server",
    color: "text-blue-400",
    label: "InfraSight",
    subItems: [
      { label: "Technology Stack", path: "/client/infrasight/tech-stack" },
      { label: "Hosting Intelligence", path: "/client/infrasight/hosting" },
      { label: "DNS Intelligence", path: "/client/infrasight/dns" },
      { label: "SSL/TLS Intelligence", path: "/client/infrasight/ssl-tls" },
      { label: "Historical Infrastructure", path: "/client/infrasight/historical" },
    ],
  },
  {
    section: "SECURITY MODULES",
    icon: "Target",
    color: "text-orange-400",
    label: "SurfaceWatch",
    subItems: [
      { label: "Attack Surface", path: "/client/surfacewatch/attack-surface" },
      { label: "Open Ports", path: "/client/surfacewatch/open-ports" },
      { label: "Exposed Services", path: "/client/surfacewatch/exposed-services" },
      { label: "Subdomain Takeover", path: "/client/subdomain-takeover" },
      { label: "Header Health", path: "/client/header-health" },
      { label: "CertPulse", path: "/client/cert-pulse" },
      { label: "WAFlyzer", path: "/client/waflyzer" },
    ],
  },
  {
    section: "SECURITY MODULES",
    icon: "AlertTriangle",
    color: "text-rose-400",
    label: "VulnIntel",
    subItems: [
      { label: "Vulnerability Overview", path: "/client/vuln-intel/overview" },
      { label: "CVE Intelligence", path: "/client/vuln-intel/cve-intel" },
      { label: "Vulnerable Assets", path: "/client/vuln-intel/vulnerable-assets" },
      { label: "Critical CVEs", path: "/client/vuln-intel/critical-cves" },
      { label: "Technology Vulnerabilities", path: "/client/vuln-intel/tech-vulns" },
      { label: "Vulnerabilities", path: "/client/vuln-intel/vulnerabilities" },
      { label: "Library Scanner", path: "/client/vuln-intel/library-scanner" },
      { label: "Client Portal", path: "/client/vuln-intel/client-portal" },
    ],
  },
  {
    section: "SECURITY MODULES",
    icon: "Key",
    color: "text-purple-400",
    label: "Dark Web",
    subItems: [
      { label: "Overview", path: "/client/dark-web/overview" },
      { label: "Credential Leaks", path: "/client/dark-web/credential-leaks" },
      { label: "Card/BIN Exposure", path: "/client/dark-web/card-bin-exposure" },
      { label: "Third-Party Leaks", path: "/client/dark-web/third-party-leaks" },
      { label: "Company Mentions", path: "/client/dark-web/company-mentions" },
      { label: "Domain Mentions", path: "/client/dark-web/domain-mentions" },
      { label: "Data Exposure", path: "/client/dark-web/data-exposure" },
      { label: "Card Leaks", path: "/client/dark-web/card-leaks" },
      { label: "Customer Leaks", path: "/client/dark-web/customer-leaks" },
      { label: "Employee Leaks", path: "/client/dark-web/employee-leaks" },
      { label: "Third Party Leak", path: "/client/dark-web/third-party-leak" },
    ],
  },
  {
    section: "SECURITY MODULES",
    icon: "Share2",
    color: "text-teal-400",
    label: "Supply Chain",
    subItems: [
      { label: "Vendor Monitoring", path: "/client/supply-chain/vendor-monitoring" },
      { label: "Third-Party Risk", path: "/client/supply-chain/third-party-risk" },
      { label: "Vendor Breaches", path: "/client/supply-chain/vendor-breaches" },
      { label: "External Dependencies", path: "/client/supply-chain/external-dependencies" },
      { label: "Vendor Breach Watch", path: "/client/supply-chain/vendor-breach" },
      { label: "Fourth-Party Risk", path: "/client/supply-chain/4th-party-risk" },
    ],
  },
  {
    section: "SECURITY MODULES",
    icon: "Disc",
    color: "text-sky-400",
    label: "Threat Intelligence",
    subItems: [
      { label: "Intelligence Overview", path: "/client/threat-intel/overview" },
      { label: "IOC Search", path: "/client/threat-intel/ioc-search" },
      { label: "Threat Feed", path: "/client/threat-intel/feed" },
      { label: "Indicators", path: "/client/threat-intel/indicators" },
      { label: "Campaigns", path: "/client/threat-intel/campaigns" },
      { label: "Malware", path: "/client/threat-intel/malware" },
      { label: "Threat Actors", path: "/client/threat-intel/threat-actors" },
      { label: "RansomeHive", path: "/client/threat-fusion/ransome-hive" },
      { label: "IOCDesk", path: "/client/threat-fusion/ioc-desk" },
    ],
  },

  // 3. OPERATIONS
  {
    section: "OPERATIONS",
    icon: "Search",
    color: "text-orange-400",
    label: "Findings",
    path: "/client/tools/findings",
  },
  {
    section: "OPERATIONS",
    icon: "Bell",
    color: "text-rose-400",
    label: "Alerts",
    path: "/client/tools/alerts",
  },
  {
    section: "OPERATIONS",
    icon: "Maximize2",
    color: "text-cyan-400",
    label: "Scan Center",
    path: "/client/tools/scan-center",
  },
  {
    section: "OPERATIONS",
    icon: "FileText",
    color: "text-emerald-400",
    label: "Reports",
    path: "/client/tools/reports",
  },
  {
    section: "OPERATIONS",
    icon: "Shield",
    color: "text-blue-400",
    label: "Watch List",
    path: "/client/tools/watch-list",
  },
  {
    section: "OPERATIONS",
    icon: "Settings",
    color: "text-purple-400",
    label: "Takedowns",
    path: "/client/tools/takedowns",
  },

  // 4. MANAGEMENT
  {
    section: "MANAGEMENT",
    icon: "Briefcase",
    color: "text-blue-400",
    label: "Organizations",
    path: "/client/management/organizations",
  },
  {
    section: "MANAGEMENT",
    icon: "Users",
    color: "text-teal-400",
    label: "Users",
    path: "/client/management/users",
  },
  {
    section: "MANAGEMENT",
    icon: "Zap",
    color: "text-purple-400",
    label: "Integrations",
    path: "/client/management/integrations",
  },
  {
    section: "MANAGEMENT",
    icon: "Book",
    color: "text-amber-400",
    label: "Audit Logs",
    path: "/client/management/audit-logs",
  },
  {
    section: "MANAGEMENT",
    icon: "Settings",
    color: "text-gray-400",
    label: "Settings",
    path: "/client/tools/settings",
  },
];

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [selectedOrg, setSelectedOrg] = useState("Apex National Bank");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDark, setIsDark] = useState(true);

  const userInfo = {
    name: "SOC Analyst",
    email: "analyst@apexnationalbank.com",
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/client/login";
    }
  };

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ProtectedRoute allowedRoles={["client"]}>
      <div
        className={`flex flex-col lg:flex-row min-h-screen transition-colors duration-200 ${isDark ? "bg-[#090d16] text-white" : "bg-[#eff6ff] text-slate-900"
          }`}
      >
        <DashboardSidebarleftSide
          menuItems={clientMenuItems}
          userRole="SOC Analyst"
          userInfo={userInfo}
          onLogout={handleLogout}
          isDark={isDark}
        />

        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Header Bar Component */}
          <DashboardHeaderTopSide
            selectedOrg={selectedOrg}
            onOrgChange={setSelectedOrg}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            userInfo={userInfo}
            isDark={isDark}
            onToggleTheme={handleToggleTheme}
          />

          {/* Main Content Area */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
