import type { LandingPageContent } from "./types";

export const vulnerabilitiesPage: LandingPageContent = {
  slug: "vulnerabilities",
  category: "VulnIntel",
  metadata: {
    title: "Vulnerability Intelligence | VulnIntel",
    description:
      "Correlate live CVE feeds with your asset tech stack. Prioritise by exploitability. Ship prioritised, deduplicated tickets to your engineers.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "VulnIntel" },
    { label: "Vulnerabilities" },
  ],
  hero: {
    eyebrow: "VULNINTEL · VULNERABILITIES",
    headline: "One inventory. Every CVE that matters.",
    headlineAccent: "Every CVE that matters",
    subhead:
      "We correlate your external tech stack with live CVE feeds (NVD, GHSA, vendor advisories, KEV), score by real exploitability, and stream prioritised findings to your ticketing tool.",
    trustBadges: ["EXPLOIT-AWARE", "KEV-ALIGNED", "CONTINUOUS"],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Open the CVE feed", href: "/client/login" },
  },
  problem: {
    title: "A raw CVE feed is noise, not signal",
    body: "The NVD publishes ~50 CVEs a day. Most don't apply to you. Most that do aren't exploitable in your environment. Traditional scanners drown teams in alerts. Vulnerability Intelligence starts from your external footprint and works backwards — only surfacing CVEs that map to a service or library actually exposed.",
  },
  howItWorks: {
    eyebrow: "CORRELATION PIPELINE",
    title: "How Vulnerability Intelligence Works",
    steps: [
      {
        title: "INVENTORY",
        description: "Fingerprint every externally reachable service, library, and framework.",
        icon: "FiDatabase",
      },
      {
        title: "CORRELATE",
        description: "Match your inventory against NVD, GHSA, KEV, EPSS, and vendor advisories every hour.",
        icon: "FiSearch",
      },
      {
        title: "PRIORITISE",
        description: "Score each finding by exploitability (KEV membership, public POC, EPSS) — not just CVSS.",
        icon: "FiAlertTriangle",
      },
    ],
  },
  capabilities: [
    {
      title: "Exploit-aware scoring",
      description: "CVSS + EPSS + CISA KEV + public POC presence combined into a single actionable score.",
      icon: "FiActivity",
      tone: "rose",
    },
    {
      title: "Multi-source correlation",
      description: "NVD, GHSA, MSRC, vendor advisories, Debian/Ubuntu security trackers.",
      icon: "FiDatabase",
      tone: "blue",
    },
    {
      title: "KEV alerting",
      description: "Any CVE added to the CISA KEV catalogue that touches your inventory pages you.",
      icon: "FiZap",
      tone: "amber",
    },
    {
      title: "Deduped tickets",
      description: "One ticket per asset + CVE combo, not per scan run.",
      icon: "FiClipboard",
      tone: "indigo",
    },
    {
      title: "Remediation SLAs",
      description: "Track time-to-fix per severity against your SLA policy.",
      icon: "FiTrendingUp",
      tone: "emerald",
    },
    {
      title: "Board-ready dashboards",
      description: "Trend the exploitable backlog, not just raw CVE counts.",
      icon: "FiFileText",
      tone: "cyan",
    },
  ],
  dashboardPreview: {
    title: "Prioritised vulnerabilities",
    kind: "table",
    columns: ["CVE", "Asset", "Score", "KEV", "EPSS", "Status"],
    sampleRows: [
      ["CVE-2026-1042", "api.example.com", "9.8", "Yes", "0.94", "Critical"],
      ["CVE-2026-0871", "web.example.com", "8.2", "No", "0.31", "High"],
      ["CVE-2025-9955", "legacy.example.com", "7.4", "Yes", "0.86", "Medium"],
    ],
  },
  integrations: [
    { label: "Jira", description: "Bi-directional ticket sync", icon: "FiClipboard" },
    { label: "ServiceNow", description: "Vulnerability response integration", icon: "FiSettings" },
    { label: "Webhook / SIEM", description: "Stream findings to SIEM", icon: "FiZap" },
    { label: "Slack", description: "Critical KEV alert routing", icon: "FiMessageSquare" },
  ],
  useCases: [
    {
      persona: "VP of Security",
      title: "Executive reporting",
      description: "Report the exploitable backlog to the board — not raw CVE counts.",
    },
    {
      persona: "AppSec Engineer",
      title: "Rapid triage",
      description: "Skip the daily NVD dump; only look at CVEs that touch an exposed asset.",
    },
    {
      persona: "Incident Response",
      title: "KEV pager",
      description: "Route every new KEV entry that touches your inventory to on-call within an hour.",
    },
  ],
  faq: [
    {
      q: "Do you scan our internal network?",
      a: "No. VulnIntel is external-first: it works from your public-facing tech fingerprint.",
    },
    {
      q: "How do you avoid CVE bloat?",
      a: "Every finding requires (a) a matched asset, (b) a matched version, and (c) an exploitability signal. Everything else is filtered out.",
    },
    {
      q: "How is this different from a traditional VA scanner?",
      a: "VA scanners generate alerts. We generate prioritised, deduplicated tickets — one per real-world exposure.",
    },
  ],
  ctaBanner: {
    title: "Stop patching noise. Start fixing exposure.",
    subtitle: "See a prioritised, exploit-aware CVE view of your external attack surface — free demo assessment.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Login", href: "/client/login" },
  },
  relatedPages: [
    {
      slug: "library-scanner",
      title: "Library Scanner",
      description: "Open-source dependency risk & SBOM generation.",
      href: "/services/vuln-intel/library-scanner",
    },
    {
      slug: "ioc-desk",
      title: "IOCDesk",
      description: "Threat feeds & indicator lookup for SOCs.",
      href: "/services/threat-fusion/ioc-desk",
    },
    {
      slug: "subdomain-takeover",
      title: "Subdomain Takeover",
      description: "Detect dangling DNS records exposing subdomains.",
      href: "/services/subdomain-takeover",
    },
  ],
};

export default vulnerabilitiesPage;
