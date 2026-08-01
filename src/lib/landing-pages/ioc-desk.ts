import type { LandingPageContent } from "./types";

export const iocDeskPage: LandingPageContent = {
  slug: "ioc-desk",
  category: "ThreatFusion",
  metadata: {
    title: "IOC Feeds & Lookup for SOCs | IOCDesk",
    description:
      "One place for every indicator that matters to your team. Curated IOC feeds, on-demand lookup, and SIEM integration for immediate action.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "ThreatFusion" },
    { label: "IOCDesk" },
  ],
  hero: {
    eyebrow: "THREATFUSION · IOCDESK",
    headline: "One place for every indicator that matters.",
    headlineAccent: "every indicator that matters",
    subhead:
      "Curated IOC feeds combining commercial, open-source, and Aadhya Aaradhya proprietary intelligence. Look up any IP, domain, hash, or URL — or subscribe your SIEM to a curated feed.",
    trustBadges: ["MULTI-SOURCE", "DEDUPLICATED", "SIEM-NATIVE"],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Try IOCDesk", href: "/client/login" },
  },
  problem: {
    title: "Ten IOC feeds is nine feeds too many",
    body: "Most SOCs subscribe to a dozen IOC feeds with overlapping content and inconsistent quality. Noise, deduplication, and stale indicators wreck detection performance. IOCDesk consolidates, deduplicates, ages out, and adds context — so your SIEM ingests one high-signal stream.",
  },
  howItWorks: {
    eyebrow: "CURATION PIPELINE",
    title: "How IOC Consolidation & Delivery Works",
    steps: [
      {
        title: "CONSOLIDATE",
        description: "Ingest from 40+ open, commercial, and proprietary IOC sources.",
        icon: "FiDatabase",
      },
      {
        title: "CURATE",
        description: "Deduplicate, tag by TTP and campaign, and age out stale indicators.",
        icon: "FiSearch",
      },
      {
        title: "DELIVER",
        description: "Push a single curated stream into your SIEM, SOAR, or firewall — or query on demand.",
        icon: "FiZap",
      },
    ],
  },
  capabilities: [
    {
      title: "40+ sources",
      description: "Abuse.ch, ThreatFox, AlienVault, Aadhya Aaradhya proprietary, and more.",
      icon: "FiDatabase",
      tone: "blue",
    },
    {
      title: "On-demand lookup",
      description: "Query any IP, domain, URL, or hash from the portal or API.",
      icon: "FiSearch",
      tone: "indigo",
    },
    {
      title: "Campaign tagging",
      description: "Every IOC tagged with associated TTP (MITRE ATT&CK) and campaign name where known.",
      icon: "FiActivity",
      tone: "cyan",
    },
    {
      title: "Age-out policy",
      description: "Configurable per-source freshness rules so you don't block on stale IOCs.",
      icon: "FiRefreshCw",
      tone: "amber",
    },
    {
      title: "SIEM-native",
      description: "STIX 2.1, TAXII 2, MISP, and native connectors for Splunk, Sentinel, Chronicle, Elastic.",
      icon: "FiZap",
      tone: "emerald",
    },
  ],
  dashboardPreview: {
    title: "IOC lookup — 8.8.8.8",
    kind: "table",
    columns: ["Source", "Type", "First seen", "Last seen", "Campaign", "Verdict"],
    sampleRows: [
      ["Aadhya Aaradhya", "IP", "2026-01-01", "2026-08-01", "Global DNS", "Clean"],
      ["Abuse.ch", "IP", "2026-01-01", "2026-08-01", "Public resolver", "Clean"],
      ["AlienVault", "IP", "2026-01-01", "2026-08-01", "Whitelist", "Clean"],
    ],
  },
  integrations: [
    { label: "STIX 2.1 / TAXII 2", description: "Standard threat exchange", icon: "FiZap" },
    { label: "Splunk / Sentinel", description: "SIEM native connectors", icon: "FiSettings" },
    { label: "MISP", description: "Threat sharing platform", icon: "FiClipboard" },
    { label: "Slack", description: "On-demand lookup bot", icon: "FiMessageSquare" },
  ],
  useCases: [
    {
      persona: "SOC Analyst",
      title: "Enrichment",
      description: "Look up any indicator in a case and get consolidated context in one call.",
    },
    {
      persona: "Detection Engineer",
      title: "Feed hygiene",
      description: "Replace 8 noisy feeds with 1 curated one.",
    },
    {
      persona: "IR Lead",
      title: "Campaign attribution",
      description: "See if the IOC in your case is tied to a known campaign.",
    },
  ],
  faq: [
    {
      q: "How do you rank source reliability?",
      a: "Every source has a confidence score based on hit rate, freshness, and analyst review.",
    },
    {
      q: "Can we contribute IOCs upstream?",
      a: "Yes. Customer-contributed IOCs go into a private tenant unless you opt in to share.",
    },
    {
      q: "Does IOCDesk detect first-party threats?",
      a: "No, IOCDesk is enrichment and detection intel. Attack Surface modules handle first-party detection.",
    },
  ],
  ctaBanner: {
    title: "One curated stream. Every SIEM.",
    subtitle: "Replace your patchwork of IOC feeds with IOCDesk — pilot it in your SIEM in 24 hours.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Login", href: "/client/login" },
  },
  relatedPages: [
    {
      slug: "ransome-hive",
      title: "RansomeHive",
      description: "Real-time ransomware leak site surveillance.",
      href: "/services/threat-fusion/ransome-hive",
    },
    {
      slug: "vulnerabilities",
      title: "Vulnerability Intelligence",
      description: "Exploit-aware CVE correlation for exposed assets.",
      href: "/services/vuln-intel/vulnerabilities",
    },
    {
      slug: "takedowns",
      title: "Automated Takedowns",
      description: "Managed phishing & brand abuse removal.",
      href: "/services/takedowns",
    },
  ],
};

export default iocDeskPage;
