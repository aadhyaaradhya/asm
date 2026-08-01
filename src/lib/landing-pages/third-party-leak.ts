import type { LandingPageContent } from "./types";

export const thirdPartyLeakPage: LandingPageContent = {
  slug: "third-party-leak",
  category: "Dark Web",
  metadata: {
    title: "Supply Chain Breach Monitoring | Third-Party Leak",
    description:
      "Your supply chain is your attack surface. Monitor vendor, contractor, and partner breaches that expose your data — before the vendor tells you.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Dark Web" },
    { label: "Third-Party Leak" },
  ],
  hero: {
    eyebrow: "DARK WEB · THIRD-PARTY LEAK",
    headline: "Your supply chain is your attack surface.",
    headlineAccent: "your attack surface",
    subhead:
      "We monitor vendor, contractor, and partner breaches that expose your data — often surfacing evidence before the vendor discloses. Track exposure across your entire supplier graph.",
    trustBadges: ["VENDOR-GRAPH", "REAL-TIME", "PRE-DISCLOSURE"],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Try Third-Party Leak", href: "/client/login" },
  },
  problem: {
    title: "You're breached when your vendor is breached",
    body: "Solarwinds, MOVEit, Okta, LastPass — the biggest breaches of the last five years hit victims through third parties. Vendors often delay disclosure. Third-Party Leak surfaces evidence of vendor compromise the moment it appears — through dark web mentions, leak-site listings, and infostealer logs.",
  },
  howItWorks: {
    eyebrow: "SUPPLY CHAIN WATCH",
    title: "How Supply Chain Breach Monitoring Works",
    steps: [
      {
        title: "MAP",
        description: "Load your vendor list and enrich each with domain / product identifiers.",
        icon: "FiUsers",
      },
      {
        title: "WATCH",
        description: "Monitor dark web mentions, leak-site listings, and infostealer logs for each vendor.",
        icon: "FiEyeOff",
      },
      {
        title: "CORRELATE",
        description: "When a vendor is hit, cross-reference which of your data is likely exposed.",
        icon: "FiAlertTriangle",
      },
    ],
  },
  capabilities: [
    {
      title: "Vendor graph",
      description: "Track direct vendors, sub-processors, and critical suppliers in one graph.",
      icon: "FiUsers",
      tone: "blue",
    },
    {
      title: "Leak-site surveillance",
      description: "All major ransomware and hacktivist leak sites monitored.",
      icon: "FiEyeOff",
      tone: "rose",
    },
    {
      title: "Exposure inference",
      description: "When Vendor X is breached, we infer which of your accounts or data types are exposed.",
      icon: "FiSearch",
      tone: "indigo",
    },
    {
      title: "Vendor risk score",
      description: "A rolling risk score per vendor combining breach signals and dark web mentions.",
      icon: "FiFileText",
      tone: "amber",
    },
    {
      title: "Procurement webhook",
      description: "Feed vendor risk scores directly into your TPRM tool.",
      icon: "FiZap",
      tone: "emerald",
    },
  ],
  dashboardPreview: {
    title: "Vendor breach signals",
    kind: "table",
    columns: ["Vendor", "Signal", "Source", "Your exposure", "Detected"],
    sampleRows: [
      ["Acme SaaS", "Data listed on leak site", "LockBit blog", "SSO tokens", "47 min ago"],
      ["Beta Corp", "Infostealer log", "Telegram", "IAM admin creds", "2 hours ago"],
      ["Gamma Systems", "Dark web mention", "Forum", "Contract data", "1 day ago"],
    ],
  },
  integrations: [
    { label: "TPRM Webhook", description: "OneTrust / ProcessUnity / Vanta", icon: "FiZap" },
    { label: "Jira / ServiceNow", description: "Task & ticket routing", icon: "FiClipboard" },
    { label: "Slack", description: "Instant notification routing", icon: "FiMessageSquare" },
    { label: "PDF Export", description: "Vendor risk score export", icon: "FiFileText" },
  ],
  useCases: [
    {
      persona: "Procurement",
      title: "Continuous vendor risk",
      description: "Replace annual questionnaires with continuous signal-driven risk scores.",
    },
    {
      persona: "CISO",
      title: "Fourth-party visibility",
      description: "Track sub-processors your direct vendors depend on.",
    },
    {
      persona: "Legal",
      title: "Disclosure timing",
      description: "Get evidence of a vendor breach before contractual disclosure windows close.",
    },
  ],
  faq: [
    {
      q: "How is this different from BitSight / SecurityScorecard?",
      a: "Those focus on external hygiene (open ports, TLS grades). We focus on active breach signals from the dark web.",
    },
    {
      q: "Do you cover fourth parties?",
      a: "Yes, if you enter them into the graph. We monitor them the same as direct vendors.",
    },
    {
      q: "What if the vendor never discloses publicly?",
      a: "Signal quality varies. When breach evidence is inconclusive we surface it as a risk score change, not a hard alert.",
    },
  ],
  ctaBanner: {
    title: "You'll hear about your vendor's breach from us, not from them.",
    subtitle: "Get a Third-Party Leak assessment scoped to your top 20 vendors.",
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
      slug: "customer-leaks",
      title: "Customer Leaks",
      description: "Customer PII exposure & credential leak alerts.",
      href: "/services/dark-web/customer-leaks",
    },
    {
      slug: "library-scanner",
      title: "Library Scanner",
      description: "Open-source dependency risk & SBOM generation.",
      href: "/services/vuln-intel/library-scanner",
    },
  ],
};

export default thirdPartyLeakPage;
