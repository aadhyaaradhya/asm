"use client";

import React from "react";
import Link from "next/link";
import { 
  FiShield, 
  FiArrowRight, 
  FiGlobe, 
  FiLock, 
  FiAlertTriangle, 
  FiMail, 
  FiActivity,
  FiZap,
  FiDatabase,
  FiCpu,
  FiCheckCircle,
  FiUsers,
  FiSettings,
  FiSearch,
  FiEyeOff
} from "react-icons/fi";
import FaqAccordion from "@/components/marketing/FaqAccordion";
import CtaBanner from "@/components/marketing/CtaBanner";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20 text-white overflow-hidden">
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8">
        {/* Glow ambient background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#1e517b]/30 to-[#2a6f97]/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-blue-300 backdrop-blur-md">
          <FiShield className="w-3.5 h-3.5" />
          <span>ATTACK SURFACE & DARK WEB MONITORING</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
          See What <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Hackers See.</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal">
          Your biggest cyber risks begin outside your environment. ASM helps you discover exposed assets, dark web leaks, phishing infrastructure, and brand abuse before they become incidents.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1e517b] to-[#2a6f97] hover:opacity-90 text-white text-sm font-semibold transition-all flex items-center gap-2 shadow-xl shadow-[#1e517b]/30 cursor-pointer"
          >
            <span>Request a Demo</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-semibold transition-all cursor-pointer"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Trust / Value Strip */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono font-bold tracking-widest text-gray-400 uppercase">
          <span className="flex items-center gap-1.5"><FiCheckCircle className="text-[#2a6f97]" /> AGENTLESS</span>
          <span>•</span>
          <span className="flex items-center gap-1.5"><FiCheckCircle className="text-[#2a6f97]" /> FAST TO ONBOARD</span>
          <span>•</span>
          <span className="flex items-center gap-1.5"><FiCheckCircle className="text-[#2a6f97]" /> EXTERNAL VISIBILITY</span>
        </div>

        {/* Attribution */}
        <p className="text-xs text-gray-500 font-mono pt-2">
          Developed and powered by <span className="text-gray-300 font-semibold">Aadhya Aaradhya</span>.
        </p>
      </section>

      {/* ================= 2. PLATFORM INTELLIGENCE ENGINE ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#060c18] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Platform Intelligence Engine
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Continuous ingestion from global threat vectors, synthesized into actionable defense mechanisms in milliseconds.
            </p>
          </div>

          {/* Engine Architecture Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            {/* Inputs Column */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider block mb-2">INPUT THREAT VECTORS</span>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <FiEyeOff className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-xs font-semibold">Dark Web Analysis</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <FiDatabase className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-xs font-semibold">Code Repositories</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <FiGlobe className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-xs font-semibold">Exposed IP / Ports</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <FiLock className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span className="text-xs font-semibold">Leaked Credentials</span>
              </div>
            </div>

            {/* Core Engine */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#1e517b]/40 to-[#0d2235]/60 border border-[#1e517b]/50 text-center space-y-4 shadow-xl relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#1e517b] to-[#2a6f97] flex items-center justify-center mx-auto shadow-lg shadow-[#1e517b]/40 animate-pulse">
                <FiCpu className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">ASM CORE</h3>
                <p className="text-xs text-blue-300 font-mono mt-1">Platform Intelligence Engine</p>
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                Real-time threat processing, entity resolution, and threat score correlation.
              </p>
            </div>

            {/* Outputs Column */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block mb-2">ACTIONABLE OUTPUTS</span>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <FiAlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-xs font-semibold">High-Priority Alerts</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <FiActivity className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-xs font-semibold">Live Dashboards</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <FiZap className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <span className="text-xs font-semibold">SIEM / API Webhooks</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                <FiShield className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-xs font-semibold">Automated Takedowns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. WHY ASM (6 PILLARS) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold text-[#2a6f97] uppercase tracking-widest">WHY ASM</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            External threats don&apos;t wait for perimeter access.
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            Attackers begin by studying your public-facing infrastructure, exposed services, and digital blind spots. ASM identifies what adversaries can already see.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/services/subdomain-takeover" className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-[#1e517b]/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FiGlobe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Exposed Assets</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Identify internet-facing assets, unlinked subdomains, and exposed infrastructure risks automatically.
            </p>
          </Link>

          <Link href="/services/takedowns" className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-[#1e517b]/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FiShield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Impersonation</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Detect brand impersonation, lookalike domain registrations, and unauthorized logo misuse.
            </p>
          </Link>

          <Link href="/services/dark-web/employee-leaks" className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-[#1e517b]/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FiEyeOff className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Dark Web Signals</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Uncover compromised credentials, stolen database dumps, and dark web forum chatter mentioning your organization.
            </p>
          </Link>

          <Link href="/services/takedowns" className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-[#1e517b]/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FiAlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Phishing Infra</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Monitor active phishing kits, fake login portals, and spoofing infrastructure targeting your users.
            </p>
          </Link>

          <Link href="/services/header-health" className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-[#1e517b]/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FiMail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Email Posture</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Detect email spoofing risk resulting from misconfigured SPF, DKIM, and DMARC record policies.
            </p>
          </Link>

          <Link href="/services/vuln-intel/vulnerabilities" className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-[#1e517b]/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FiSearch className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Attack Paths</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Spot risky tech stacks, open ports, expired SSL certificates, and unpatched web vulnerabilities.
            </p>
          </Link>
        </div>
      </section>

      {/* ================= 4. UNIFIED EXTERNAL RISK ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold text-[#2a6f97] uppercase tracking-widest">UNIFIED EXTERNAL RISK</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            What ASM Monitors
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            ASM combines attack surface monitoring with dark web visibility and brand protection to manage cyber risk beyond the firewall.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/services#attack-surface" className="p-6 rounded-2xl bg-[#060c18] border border-white/10 space-y-3 block hover:border-white/20 transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#1e517b]/30 flex items-center justify-center text-blue-300 font-bold text-xs">01</div>
            <h3 className="text-lg font-bold text-white">Attack Surface Monitoring</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Identify known and unknown public-facing assets, open services, visible technologies, weak certificates, and exposure acting as a criminal gateway.
            </p>
          </Link>

          <Link href="/services#dark-web" className="p-6 rounded-2xl bg-[#060c18] border border-white/10 space-y-3 block hover:border-white/20 transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#1e517b]/30 flex items-center justify-center text-blue-300 font-bold text-xs">02</div>
            <h3 className="text-lg font-bold text-white">Dark Web Monitoring</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Track hidden sources for leaked credentials, data exposure, and brand-related threats across dark web ecosystems.
            </p>
          </Link>

          <Link href="/services/takedowns" className="p-6 rounded-2xl bg-[#060c18] border border-white/10 space-y-3 block hover:border-white/20 transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#1e517b]/30 flex items-center justify-center text-blue-300 font-bold text-xs">03</div>
            <h3 className="text-lg font-bold text-white">Brand Protection</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Monitor impersonation, lookalike domains, fake assets, and brand misuse across digital channels via Brand Guard.
            </p>
          </Link>

          <Link href="/services/header-health" className="p-6 rounded-2xl bg-[#060c18] border border-white/10 space-y-3 block hover:border-white/20 transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#1e517b]/30 flex items-center justify-center text-blue-300 font-bold text-xs">04</div>
            <h3 className="text-lg font-bold text-white">Email Security</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Validate SPF and DMARC posture to reduce spoofing and brand abuse risk.
            </p>
          </Link>

          <Link href="/services/threat-fusion/ioc-desk" className="p-6 rounded-2xl bg-[#060c18] border border-white/10 space-y-3 md:col-span-2 lg:col-span-1 block hover:border-white/20 transition-all">
            <div className="w-8 h-8 rounded-lg bg-[#1e517b]/30 flex items-center justify-center text-blue-300 font-bold text-xs">05</div>
            <h3 className="text-lg font-bold text-white">Reputation Monitor</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Track IP and domain reputation signals indicating abuse or trust issues across threat feeds.
            </p>
          </Link>
        </div>
      </section>

      {/* ================= 5. BUSINESS OUTCOMES ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold text-[#2a6f97] uppercase tracking-widest">BUSINESS OUTCOMES</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Why Security Teams Choose ASM
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <h3 className="text-base font-bold text-blue-300">Proactive Response</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Move from reactive response to proactive external risk control before exploitation occurs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <h3 className="text-base font-bold text-indigo-300">Protect Trust</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Detect fake sites, phishing, and brand impersonation early to safeguard customer confidence.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <h3 className="text-base font-bold text-cyan-300">Reduce Exposure</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Map assets continuously and uncover digital infrastructure you didn&apos;t know you owned.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <h3 className="text-base font-bold text-emerald-300">Accelerate Fixes</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Prioritize critical vulnerabilities and findings that turn into actionable fast remediations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 6. PEOPLE, PROCESS, TECHNOLOGY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#060c18] via-[#091526] to-[#060c18] border border-white/10 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white">More Than Just a Tool.</h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              ASM is positioned as part of a broader risk monitoring discipline combining expertise, process, and automated technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
                <FiUsers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">People</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Security expertise, monitoring oversight, and analyst-guided action.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 text-center">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto">
                <FiActivity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Process</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Structured identification, risk assessment, and continuous monitoring workflows.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 text-center">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                <FiSettings className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Technology</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Advanced monitoring, automation, and visibility across the external threat surface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. FREQUENTLY ASKED QUESTIONS ================= */}
      <FaqAccordion
        items={[
          {
            q: "What does ASM monitor?",
            a: "ASM monitors public-facing assets, exposed IPs and open ports, dark web leaks and credentials, brand impersonation and lookalike domains, phishing infrastructure, email spoofing posture (SPF/DMARC), and IP/domain reputation feeds."
          },
          {
            q: "Do we need agents to use ASM?",
            a: "No. ASM is 100% agentless and fast to onboard. It provides comprehensive external visibility without deploying software inside your network or endpoints."
          },
          {
            q: "Who should use ASM?",
            a: "ASM is built for security teams, CISOs, IT administrators, and enterprise organizations responsible for external attack surface management, brand protection, and third-party risk mitigation."
          }
        ]}
      />

      {/* ================= 8. LATEST INSIGHTS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">LATEST INSIGHTS</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white mt-1">
              Build External Security Maturity
            </h2>
          </div>
          <Link href="/services" className="text-xs font-semibold text-[#2a6f97] hover:underline flex items-center gap-1">
            <span>View all services</span>
            <FiArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-white/20 transition-all">
            <span className="text-[10px] font-mono text-blue-400 uppercase">Checklist</span>
            <h3 className="text-base font-bold text-white hover:text-blue-300 transition-colors">
              Attack Surface Monitoring Checklist for Security Teams in 2026
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Step-by-step guide to discovering unknown subdomains, exposed storage buckets, and open services.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-white/20 transition-all">
            <span className="text-[10px] font-mono text-purple-400 uppercase">Playbook</span>
            <h3 className="text-base font-bold text-white hover:text-purple-300 transition-colors">
              Dark Web Monitoring Response Playbook for Enterprise Teams
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Best practices for handling leaked corporate credentials and compromised employee data.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-white/20 transition-all">
            <span className="text-[10px] font-mono text-cyan-400 uppercase">Guide</span>
            <h3 className="text-base font-bold text-white hover:text-cyan-300 transition-colors">
              Brand Impersonation & Lookalike Domain Defense: Practical Guide
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              How to detect spoofed domain registrations and automate takedown requests against brand misuse.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 9. BOTTOM HERO CTA BANNER ================= */}
      <CtaBanner
        ctaBanner={{
          title: "See your external attack surface before adversaries do.",
          subtitle: "Get started with agentless attack surface and dark web monitoring powered by ASM.",
          primaryCta: { label: "Request a Demo", href: "/contact" },
          secondaryCta: { label: "Login", href: "/client/login" },
        }}
      />
    </div>
  );
}
