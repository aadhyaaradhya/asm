import type { Metadata } from "next";
import MarketingHero from "@/components/marketing/MarketingHero";
import SectionHeading from "@/components/marketing/SectionHeading";
import FeatureCard from "@/components/marketing/FeatureCard";
import StatBlock from "@/components/marketing/StatBlock";
import LogoStrip from "@/components/marketing/LogoStrip";
import CtaBanner from "@/components/marketing/CtaBanner";

export const metadata: Metadata = {
  title: "About Aadhya Aaradhya ASM",
  description:
    "The team behind ASM. External attack surface and threat intelligence built by security analysts, for security analysts.",
};

export default function AboutPage() {
  return (
    <div className="space-y-24 pb-20 text-white overflow-hidden">
      {/* Hero */}
      <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-4">
        <MarketingHero
          hero={{
            eyebrow: "ABOUT AADHYA AARADHYA",
            headline: "We watch what the attackers watch.",
            headlineAccent: "what the attackers watch",
            subhead:
              "Aadhya Aaradhya is an attack surface and threat intelligence company. We help security teams see their external risk the way adversaries do — continuously, agentlessly, and with the context needed to act.",
            trustBadges: ["AGENTLESS", "ANALYST-LED", "SIGNAL-FIRST"],
            primaryCta: { label: "Request a Demo", href: "/contact" },
            secondaryCta: { label: "See How It Works", href: "/how-it-works" },
          }}
        />
      </div>

      {/* Origin Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <SectionHeading
          eyebrow="OUR ORIGIN"
          title="Why We Built ASM"
        />
        <div className="p-8 sm:p-10 rounded-3xl bg-[#060c18] border border-white/10 space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed text-left">
          <p>
            Every major breach of the last decade started outside the perimeter — leaked credentials, exposed subdomains, third-party incidents, and brand impersonation. Traditional security tools live inside the network. Attackers don&apos;t. That gap is where we live.
          </p>
          <p>
            We founded Aadhya Aaradhya to close it. The platform is built by security analysts, for security analysts — with a bias toward signal over noise, and toward findings that map to a real fix.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#1e517b]/30 via-[#0d2235]/60 to-[#1e517b]/30 border border-[#1e517b]/40 text-center space-y-4 shadow-2xl">
          <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-widest">OUR MISSION</span>
          <blockquote className="text-xl sm:text-3xl font-extrabold text-white leading-snug tracking-tight max-w-3xl mx-auto">
            &ldquo;To make external attack surface and threat intelligence accessible, actionable, and continuous — for every security team, not just the enterprises.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Core Values — 4 Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="OUR CORE VALUES"
          title="What We Believe About Security"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            capability={{
              icon: "FiUsers",
              title: "Analyst-led",
              description: "Automation ships the finding. An analyst signs off before it becomes an alert.",
              tone: "blue",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiShield",
              title: "Agentless",
              description: "No probes inside your network. External visibility with zero deployment.",
              tone: "cyan",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiTarget",
              title: "Signal over noise",
              description: "Every finding must be actionable. Volume is not our success metric.",
              tone: "indigo",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiCheckCircle",
              title: "Ship the fix",
              description: "Detection is table stakes. Our job ends when the risk is closed.",
              tone: "emerald",
            }}
          />
        </div>
      </section>

      {/* Scale Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          eyebrow="SCALE & IMPACT"
          title="Continuously Ingesting Global Risk Signals"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatBlock value="~120" label="Ransomware groups tracked continuously" tone="rose" />
          <StatBlock value="~250" label="Dark web sources & forums monitored" tone="amber" />
          <StatBlock value="~90" label="Payment card marketplaces watched" tone="indigo" />
          <StatBlock value="40+" label="Cloud takeover signatures enforced" tone="cyan" />
        </div>
      </section>

      {/* TODO: enable Leadership section with TeamMemberCard grid when bios & images are ready */}

      {/* Recognition Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <LogoStrip
          heading="RECOGNITION & PLATFORM ECOSYSTEM"
          logos={[
            { name: "RECURRING AUDITS PASSED" },
            { name: "SIEM NATIVE CONNECTORS" },
            { name: "GLOBAL THREAT FEEDS" },
            { name: "24/7 TAKEDOWN SLA" },
          ]}
        />
      </section>

      {/* CTA Banner */}
      <CtaBanner
        ctaBanner={{
          title: "See what your external attack surface looks like today.",
          subtitle: "Get a personalised demo of the Aadhya Aaradhya ASM platform.",
          primaryCta: { label: "Request a Demo", href: "/contact" },
          secondaryCta: { label: "Explore How It Works", href: "/how-it-works" },
        }}
      />
    </div>
  );
}
