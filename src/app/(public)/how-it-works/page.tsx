import type { Metadata } from "next";
import MarketingHero from "@/components/marketing/MarketingHero";
import SectionHeading from "@/components/marketing/SectionHeading";
import FeatureCard from "@/components/marketing/FeatureCard";
import HowItWorksFlow from "@/components/marketing/HowItWorksFlow";
import IntegrationGrid from "@/components/marketing/IntegrationCard";
import ArchitectureFlow from "@/components/marketing/ArchitectureFlow";
import FaqAccordion from "@/components/marketing/FaqAccordion";
import CtaBanner from "@/components/marketing/CtaBanner";

export const metadata: Metadata = {
  title: "How the ASM Platform Works | Aadhya Aaradhya",
  description:
    "Continuous ingestion from ~40 threat sources, correlation through the ASM Core, and prioritised delivery to your SIEM and ticketing.",
};

export default function HowItWorksPage() {
  return (
    <div className="space-y-24 pb-20 text-white overflow-hidden">
      {/* Hero */}
      <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-4">
        <MarketingHero
          hero={{
            eyebrow: "HOW IT WORKS",
            headline: "One platform. Every external signal. Zero agents.",
            headlineAccent: "Every external signal",
            subhead:
              "The ASM platform continuously ingests from ~40 threat sources, correlates them through a purpose-built engine, and delivers prioritised, deduplicated findings into your existing security workflow.",
            trustBadges: ["AGENTLESS", "CONTINUOUS", "SIEM-NATIVE"],
            primaryCta: { label: "Request a Demo", href: "/contact" },
            secondaryCta: { label: "Browse all services", href: "/services" },
          }}
        />
      </div>

      {/* 2. The Full Picture — ArchitectureFlow */}
      <ArchitectureFlow
        intake={[
          { label: "DNS & Passive DNS", icon: "FiGlobe" },
          { label: "Certificate Transparency Logs", icon: "FiKey" },
          { label: "Dark Web Sources (250+)", icon: "FiEyeOff" },
          { label: "Ransomware Sites (120+)", icon: "FiShield" },
          { label: "WAF & App Probes", icon: "FiTarget" },
          { label: "Vendor Graph", icon: "FiUsers" },
        ]}
        core={{
          title: "ASM CORE ENGINE",
          subhead: "Real-time threat processing & entity resolution",
          steps: [
            "Deduplicate findings per real exposure",
            "Correlate vendor breaches to your assets",
            "Attach MITRE ATT&CK TTPs & confidence",
            "Score by EPSS, CVSS & CISA KEV",
          ],
        }}
        outputs={[
          { label: "Live Client Dashboard", icon: "FiActivity" },
          { label: "SIEM & Webhooks (STIX/TAXII)", icon: "FiZap" },
          { label: "Jira & ServiceNow Tickets", icon: "FiClipboard" },
          { label: "Slack & PagerDuty Alerts", icon: "FiMessageSquare" },
          { label: "Managed Takedowns SLA", icon: "FiCheckCircle" },
        ]}
      />

      {/* 3. Layer 1 — Ingestion Sources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="LAYER 1 · INGESTION"
          title="Continuous Global Threat Vector Coverage"
          description="How ASM observes the internet-facing surface and dark web without touching your internal network."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            capability={{
              icon: "FiGlobe",
              title: "DNS & Passive DNS",
              description: "Live map of every subdomain, historical zone files included. Powers Subdomain Takeover and CertPulse.",
              tone: "blue",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiKey",
              title: "Certificate Transparency",
              description: "Every certificate issued for your domain in near-real-time. Powers CertPulse and rogue cert alerts.",
              tone: "cyan",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiEyeOff",
              title: "Dark Web Sources",
              description: "250+ forums, marketplaces, paste sites, and Telegram channels. Powers Card, Customer, and Employee Leaks.",
              tone: "rose",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiShield",
              title: "Ransomware Leak Sites",
              description: "120+ groups' leak blogs polled continuously. Powers RansomeHive real-time alert feed.",
              tone: "indigo",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiTarget",
              title: "WAF & App Probes",
              description: "Non-disruptive signature payloads to verify defence-in-depth posture. Powers WAFlyzer and Header Health.",
              tone: "amber",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiUsers",
              title: "Vendor Graph",
              description: "Supplier list enriched with domain and product identifiers. Powers Third-Party Leak monitoring.",
              tone: "emerald",
            }}
          />
        </div>
      </section>

      {/* 4. Layer 2 — Correlation Flow */}
      <HowItWorksFlow
        flow={{
          eyebrow: "LAYER 2 · CORRELATION",
          title: "How the ASM Core Transforms Raw Feeds",
          steps: [
            {
              title: "DEDUPE",
              description: "One finding per real-world exposure — not one per scan run. Reduces noise by up to 90%.",
              icon: "FiFilter",
            },
            {
              title: "CORRELATE",
              description: "When a vendor or third-party is breached, we infer which of your assets or credentials are affected.",
              icon: "FiRefreshCw",
            },
            {
              title: "ENRICH",
              description: "Attach MITRE ATT&CK TTPs, campaign attribution, and confidence scores before routing.",
              icon: "FiZap",
            },
          ],
        }}
      />

      {/* 5. Layer 3 — Detection & Scoring */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="LAYER 3 · SCORING"
          title="Exploit-Aware Composite Prioritisation"
          description="We combine four distinct risk signals into a single actionable score per finding."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            capability={{
              icon: "FiActivity",
              title: "CVSS Severity",
              description: "Base severity metrics from NVD and CVE records.",
              tone: "blue",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiTrendingUp",
              title: "EPSS Probability",
              description: "Statistical probability of exploitation in the wild over 30 days.",
              tone: "cyan",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiAlertTriangle",
              title: "CISA KEV Catalog",
              description: "Automatic priority boost for anything in the Known Exploited Vulnerabilities list.",
              tone: "rose",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiCode",
              title: "Public Proof-of-Concept",
              description: "Presence of weaponised POC code on GitHub or ExploitDB shifts priority to Critical.",
              tone: "amber",
            }}
          />
        </div>
      </section>

      {/* 6. Layer 4 — Delivery Destinations */}
      <IntegrationGrid
        integrations={[
          { label: "Client Dashboard", description: "Real-time web application at /client/*", icon: "FiActivity" },
          { label: "SIEM & Webhooks", description: "Splunk, Sentinel, Elastic, STIX/TAXII", icon: "FiZap" },
          { label: "Ticketing Systems", description: "Jira, ServiceNow, PagerDuty", icon: "FiClipboard" },
          { label: "Managed Takedowns", description: "24x7 removal service for phishing & brand abuse", icon: "FiCheckCircle" },
        ]}
      />

      {/* 7. Continuous Cycle & Quality */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="QUALITY & RE-CHECK"
          title="Continuous Cadence & Analyst Oversight"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-mono font-bold text-xs">
              01
            </div>
            <h3 className="text-base font-bold text-white">Re-check Cadence</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              DNS zones verified daily, dark web sources every 15 minutes, ransomware blogs continuously polled.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-mono font-bold text-xs">
              02
            </div>
            <h3 className="text-base font-bold text-white">Analyst Review Gate</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              High-priority findings pass through an analyst sign-off before customer alerts fire to suppress false positives.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
              03
            </div>
            <h3 className="text-base font-bold text-white">Evidence Trail Retention</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Raw response headers, DNS zone snapshots, and redacted breach records are archived per finding for audit.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Deployment Model */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="DEPLOYMENT MODEL"
          title="Zero Friction. Instant Value."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            capability={{
              icon: "FiZap",
              title: "100% Agentless",
              description: "No software inside your network or endpoints. Zero deployment overhead.",
              tone: "blue",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiShield",
              title: "No Firewall Changes",
              description: "All observation is external. Nothing needs to be opened in your perimeter.",
              tone: "indigo",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiGlobe",
              title: "SaaS Hosted & Multi-Region",
              description: "Enterprise SaaS architecture with regional data options for compliance.",
              tone: "cyan",
            }}
          />
        </div>
      </section>

      {/* 9. Data Handling & Residency */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#060c18] border border-white/10 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">DATA GOVERNANCE</span>
            <h2 className="text-3xl font-extrabold text-white">Data Handling & Security Controls</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] font-mono text-gray-500 uppercase">Encryption in Transit</span>
              <p className="text-sm font-bold text-white font-mono">TLS 1.3</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] font-mono text-gray-500 uppercase">Encryption at Rest</span>
              <p className="text-sm font-bold text-white font-mono">AES-256-GCM</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] font-mono text-gray-500 uppercase">Retention Windows</span>
              <p className="text-sm font-bold text-white font-mono">30 / 90 / 180 / 365 days</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] font-mono text-gray-500 uppercase">Regional Storage</span>
              <p className="text-sm font-bold text-white font-mono">EU · US · India</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] font-mono text-gray-500 uppercase">Access Controls</span>
              <p className="text-sm font-bold text-white font-mono">SAML 2.0 / OIDC SSO</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] font-mono text-gray-500 uppercase">Audit Logging</span>
              <p className="text-sm font-bold text-white font-mono">Immutable Action Log</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Compliance Stance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="COMPLIANCE"
          title="Designed for Enterprise Risk Frameworks"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            capability={{
              icon: "FiCheckCircle",
              title: "SOC 2 Type II Controls",
              description: "Platform security procedures aligned with Trust Services Criteria.",
              tone: "blue",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiCheckCircle",
              title: "ISO 27001 Alignment",
              description: "Information security management controls across platform infrastructure.",
              tone: "indigo",
            }}
          />
          <FeatureCard
            capability={{
              icon: "FiShield",
              title: "GDPR-Aligned Processing",
              description: "Data processing agreements and regional data isolation supported.",
              tone: "emerald",
            }}
          />
        </div>
      </section>

      {/* 11. Trust FAQ */}
      <FaqAccordion
        items={[
          {
            q: "Do you deploy anything inside our network?",
            a: "No. ASM is 100% agentless. All observation is external, operating from public DNS, CT logs, threat feeds, and dark web ingestion."
          },
          {
            q: "How much of our data do you store?",
            a: "Only enough to enable detection and correlation. Retention windows are configurable per tenant. Raw dark-web content is not stored past the metadata needed to alert."
          },
          {
            q: "Where does our data live?",
            a: "In the region selected at tenant onboarding — EU (Frankfurt), US (Virginia), or India (Mumbai)."
          },
          {
            q: "How do you avoid false positives?",
            a: "High-priority automated findings pass through an analyst review gate before customer notifications fire. Customer feedback continuously tunes source confidence scores."
          }
        ]}
      />

      {/* 12. CTA Banner */}
      <CtaBanner
        ctaBanner={{
          title: "See the platform end-to-end.",
          subtitle: "Request a personalised architecture walkthrough with our engineering team.",
          primaryCta: { label: "Request a Demo", href: "/contact" },
          secondaryCta: { label: "Browse all services", href: "/services" },
        }}
      />
    </div>
  );
}
