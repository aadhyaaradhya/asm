"use client";

import React from "react";
import Link from "next/link";
import { 
  FiShield, 
  FiGlobe, 
  FiLock, 
  FiEyeOff, 
  FiAlertTriangle, 
  FiDatabase, 
  FiCpu, 
  FiArrowRight, 
  FiActivity,
  FiBookOpen,
  FiUser,
  FiCreditCard,
  FiUsers,
  FiZap,
  FiCheckCircle
} from "react-icons/fi";
import CtaBanner from "@/components/marketing/CtaBanner";

const serviceCategories = [
  {
    id: "attack-surface",
    title: "Attack Surface Monitoring",
    description: "Discover exposed assets, open ports, DNS misconfigurations, and weak SSL/WAF security posture.",
    icon: FiGlobe,
    items: [
      { title: "Subdomain Takeover", href: "/services/subdomain-takeover", desc: "Detect dangling DNS records exposing subdomains." },
      { title: "Header Health", href: "/services/header-health", desc: "HTTP security headers grading & regression tracking." },
      { title: "CertPulse", href: "/services/cert-pulse", desc: "TLS Certificate lifecycle & expiration monitoring." },
      { title: "WAFlyzer", href: "/services/waflyzer", desc: "WAF detection, posture inspection, & bypass risk." },
    ],
  },
  {
    id: "vuln-intel",
    title: "Vulnerability Intelligence",
    description: "Correlate live CVE feeds, open-source library risk, and role-scoped vulnerability portals.",
    icon: FiShield,
    items: [
      { title: "Vulnerability Intelligence", href: "/services/vuln-intel/vulnerabilities", desc: "Exploit-aware CVE correlation for exposed assets." },
      { title: "Library Scanner", href: "/services/vuln-intel/library-scanner", desc: "Open-source dependency risk & SBOM generation." },
      { title: "Client Portal", href: "/services/vuln-intel/client-portal", desc: "Role-scoped security dashboards for all stakeholders." },
    ],
  },
  {
    id: "dark-web",
    title: "Dark Web Monitoring",
    description: "Continuous surveillance of breach forums, stealer logs, card markets, and supply chain leaks.",
    icon: FiEyeOff,
    items: [
      { title: "Card Leaks", href: "/services/dark-web/card-leaks", desc: "Stolen payment card monitoring & BIN matching." },
      { title: "Customer Leaks", href: "/services/dark-web/customer-leaks", desc: "Customer PII exposure & credential leak alerts." },
      { title: "Employee Leaks", href: "/services/dark-web/employee-leaks", desc: "Employee credential exposure & stealer log watch." },
      { title: "Third-Party Leak", href: "/services/dark-web/third-party-leak", desc: "Supply chain & vendor breach monitoring." },
    ],
  },
  {
    id: "threat-fusion",
    title: "ThreatFusion Intelligence",
    description: "Real-time ransomware leak blog surveillance and SIEM-native indicator feed correlation.",
    icon: FiCpu,
    items: [
      { title: "RansomeHive", href: "/services/threat-fusion/ransome-hive", desc: "Real-time ransomware leak site surveillance." },
      { title: "IOCDesk", href: "/services/threat-fusion/ioc-desk", desc: "Threat feeds & indicator lookup for SOCs." },
    ],
  },
  {
    id: "ops",
    title: "Security Operations",
    description: "Full-lifecycle managed takedowns for phishing, impersonation, and rogue apps.",
    icon: FiZap,
    items: [
      { title: "Automated Takedowns", href: "/services/takedowns", desc: "Managed phishing & brand abuse removal service." },
    ],
  },
];

export default function ServicesHubPage() {
  return (
    <div className="space-y-20 pb-20 text-white overflow-hidden">
      {/* Hero Header */}
      <section className="relative pt-16 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-blue-300">
          <FiShield className="w-3.5 h-3.5" />
          <span>SOLUTIONS & CAPABILITIES HUB</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto">
          Everything <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">ASM Does</span>, In One Place.
        </h1>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Explore our 14 modular cybersecurity capabilities designed to protect your external attack surface, dark web footprint, and supply chain.
        </p>
      </section>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {serviceCategories.map((cat) => {
          const CatIcon = cat.icon;
          return (
            <div key={cat.id} id={cat.id} className="space-y-6 scroll-mt-24">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#1e517b]/20 text-blue-400 flex items-center justify-center">
                  <CatIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">{cat.title}</h2>
                  <p className="text-xs text-gray-400">{cat.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cat.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1e517b]/60 transition-all space-y-3 flex flex-col justify-between group hover:bg-white/[0.07]"
                  >
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors flex items-center justify-between">
                        <span>{item.title}</span>
                        <FiArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-300 transition-colors group-hover:translate-x-1 transform" />
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="text-[11px] font-semibold text-[#2a6f97] pt-2 flex items-center gap-1 group-hover:underline">
                      Learn capability →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <CtaBanner
        ctaBanner={{
          title: "Ready to protect your external attack surface?",
          subtitle: "Get an agentless assessment of your infrastructure, dark web leaks, and brand risk.",
          primaryCta: { label: "Request a Demo", href: "/contact" },
          secondaryCta: { label: "Login", href: "/client/login" },
        }}
      />
    </div>
  );
}
