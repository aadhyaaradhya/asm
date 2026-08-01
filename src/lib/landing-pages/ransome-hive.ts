import type { LandingPageContent } from "./types";

export const ransomeHivePage: LandingPageContent = {
  slug: "ransome-hive",
  category: "ThreatFusion",
  metadata: {
    title: "Ransomware Leak Site Monitoring | RansomeHive",
    description:
      "Real-time monitoring of 120+ ransomware leak sites. Alert the moment your name — or a supplier's — appears. Full incident timeline included.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "ThreatFusion" },
    { label: "RansomeHive" },
  ],
  hero: {
    eyebrow: "THREATFUSION · RANSOMEHIVE",
    headline: "Ransomware groups leak. We watch.",
    headlineAccent: "We watch",
    subhead:
      "Real-time monitoring of ~120 ransomware leak sites across LockBit, ALPHV / BlackCat, Cl0p, Play, Akira, and more. Alerts the moment your name — or a supplier's — appears.",
    trustBadges: ["120+ GROUPS", "REAL-TIME", "SUPPLIER-AWARE"],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Explore RansomeHive", href: "/client/login" },
  },
  problem: {
    title: "A leak-site listing is a countdown timer",
    body: "Once a ransomware group posts you (or your vendor) to their leak blog, you have days — sometimes hours — before data drops publicly. RansomeHive is the first line of visibility: continuous monitoring so you learn about a listing minutes after it's posted, not from a journalist.",
  },
  howItWorks: {
    eyebrow: "SURVEILLANCE PIPELINE",
    title: "How Ransomware Leak Site Surveillance Works",
    steps: [
      {
        title: "INGEST",
        description: "Every known ransomware group's leak blog / Tor site is polled continuously.",
        icon: "FiEye",
      },
      {
        title: "MATCH",
        description: "New victim posts are matched against your organisation, subsidiaries, and vendor graph.",
        icon: "FiSearch",
      },
      {
        title: "ALERT",
        description: "Matches surface within minutes with a full evidence pack (screenshots, sample files listed).",
        icon: "FiAlertTriangle",
      },
    ],
  },
  capabilities: [
    {
      title: "120+ groups covered",
      description: "LockBit, ALPHV, Cl0p, Play, Akira, 8Base, RansomHub, Everest, and many more.",
      icon: "FiShield",
      tone: "rose",
    },
    {
      title: "Continuous polling",
      description: "Sites are polled every few minutes; new posts detected in near-real-time.",
      icon: "FiRefreshCw",
      tone: "amber",
    },
    {
      title: "Supplier-aware matching",
      description: "Alerts fire not just on your name but on vendors you've registered.",
      icon: "FiUsers",
      tone: "blue",
    },
    {
      title: "Evidence pack",
      description: "Screenshots, group profile, historical modus operandi, and sample data listed.",
      icon: "FiFileText",
      tone: "indigo",
    },
    {
      title: "Group intelligence",
      description: "Track TTPs, average time-to-leak, and typical ransom demands per group.",
      icon: "FiActivity",
      tone: "cyan",
    },
  ],
  dashboardPreview: {
    title: "Recent leak site postings",
    kind: "table",
    columns: ["Victim", "Group", "Match", "Sample data", "Posted"],
    sampleRows: [
      ["Acme SaaS (vendor)", "LockBit 3.0", "Your data", "200 GB HR / IAM", "9 min ago"],
      ["Legacy Subsidiary Ltd", "Cl0p", "Direct", "15 GB customer PII", "2 hours ago"],
      ["Beta Corp (vendor)", "Play", "Your data", "40 GB source code", "1 day ago"],
    ],
  },
  integrations: [
    { label: "SOAR Webhook", description: "Trigger incident workflows", icon: "FiZap" },
    { label: "Slack / Teams", description: "Immediate team channel alerts", icon: "FiMessageSquare" },
    { label: "ServiceNow / Jira", description: "Incident case creation", icon: "FiClipboard" },
    { label: "Email Digest", description: "Executive briefing emails", icon: "FiMail" },
  ],
  useCases: [
    {
      persona: "CISO",
      title: "Third-party incident triage",
      description: "Learn about a vendor's ransomware incident before the vendor emails you.",
    },
    {
      persona: "IR Team",
      title: "Rapid response",
      description: "Kick off IR the moment your name shows up on a leak site.",
    },
    {
      persona: "PR / Comms",
      title: "Statement prep",
      description: "Draft press response while attackers are still in negotiation.",
    },
  ],
  faq: [
    {
      q: "Do you interact with ransomware groups?",
      a: "No. RansomeHive is passive observation only.",
    },
    {
      q: "What if a group only posts on the dark web?",
      a: "Covered. All Tor-hosted leak sites are included.",
    },
    {
      q: "How quickly does an alert fire?",
      a: "Within minutes of a new post on the majority of sites.",
    },
  ],
  ctaBanner: {
    title: "The first hour after a leak-site post is decisive.",
    subtitle: "Get RansomeHive alerts before your incident becomes a headline.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Login", href: "/client/login" },
  },
  relatedPages: [
    {
      slug: "third-party-leak",
      title: "Third-Party Leak",
      description: "Supply chain & vendor breach monitoring.",
      href: "/services/dark-web/third-party-leak",
    },
    {
      slug: "ioc-desk",
      title: "IOCDesk",
      description: "Threat feeds & indicator lookup for SOCs.",
      href: "/services/threat-fusion/ioc-desk",
    },
    {
      slug: "employee-leaks",
      title: "Employee Leaks",
      description: "Employee credential exposure & stealer log watch.",
      href: "/services/dark-web/employee-leaks",
    },
  ],
};

export default ransomeHivePage;
