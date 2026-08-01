import type { LandingPageContent } from "./types";

export const employeeLeaksPage: LandingPageContent = {
  slug: "employee-leaks",
  category: "Dark Web",
  metadata: {
    title: "Employee Credential Exposure Monitoring | Employee Leaks",
    description:
      "Monitor corporate email domains and staff credentials across dark web dumps. Force resets before initial-access brokers do.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Dark Web" },
    { label: "Employee Leaks" },
  ],
  hero: {
    eyebrow: "DARK WEB · EMPLOYEE LEAKS",
    headline: "Employee credentials leak every day. Know before they're used.",
    headlineAccent: "Know before they're used",
    subhead:
      "Corporate email + password pairs are the number-one initial-access vector for ransomware. Employee Leaks monitors dark web dumps for your domains and forces resets before initial-access brokers sell.",
    trustBadges: ["IDP-INTEGRATED", "CONTINUOUS", "IAB-AWARE"],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "See Employee Leaks", href: "/client/login" },
  },
  problem: {
    title: "Ransomware starts with a leaked employee password",
    body: "IBM's Cost of a Data Breach consistently ranks stolen credentials as the top initial-access vector. Employee credentials leak through third-party breaches, malware infostealers, and phishing — often reused across corporate SSO. Employee Leaks catches these before initial-access brokers resell them.",
  },
  howItWorks: {
    eyebrow: "DETECTION & RESPONSE",
    title: "How Employee Credential Exposure Works",
    steps: [
      {
        title: "MONITOR",
        description: "Continuous coverage of infostealer logs, dark web dumps, and IAB (initial-access broker) marketplaces.",
        icon: "FiEyeOff",
      },
      {
        title: "MATCH",
        description: "Match against your corporate domains, aliases, and known staff patterns.",
        icon: "FiSearch",
      },
      {
        title: "INVALIDATE",
        description: "Fire IdP webhooks to force password reset and revoke sessions.",
        icon: "FiRefreshCw",
      },
    ],
  },
  capabilities: [
    {
      title: "Infostealer log coverage",
      description: "RedLine, Vidar, LummaC2, StealC and other major stealer log distribution channels.",
      icon: "FiDatabase",
      tone: "rose",
    },
    {
      title: "Executive protection",
      description: "Priority routing for C-suite and admin accounts.",
      icon: "FiUser",
      tone: "amber",
    },
    {
      title: "IdP integration",
      description: "Okta, Entra ID, Google Workspace webhooks for immediate reset.",
      icon: "FiUserCheck",
      tone: "indigo",
    },
    {
      title: "IAB detection",
      description: "Flags when your credentials are being auctioned by initial-access brokers.",
      icon: "FiAlertTriangle",
      tone: "blue",
    },
    {
      title: "IR case handoff",
      description: "One-click case file for SOC / IR teams.",
      icon: "FiFileText",
      tone: "emerald",
    },
  ],
  dashboardPreview: {
    title: "Employee credential leaks",
    kind: "table",
    columns: ["Employee", "Source", "Stealer type", "Detected", "Status"],
    sampleRows: [
      ["admin@corp.example.com", "Telegram IAB", "RedLine", "22 min ago", "Active"],
      ["jane.doe@corp.example.com", "MegaCombo24", "—", "3 hours ago", "Active"],
      ["svc-jenkins@corp.example.com", "GitHub gist", "LummaC2", "1 day ago", "Resolved"],
    ],
  },
  integrations: [
    { label: "Okta / Entra ID", description: "Identity Provider integration", icon: "FiUserCheck" },
    { label: "SIEM / SOAR", description: "Event stream integration", icon: "FiZap" },
    { label: "Slack / Teams", description: "Instant alert routing", icon: "FiMessageSquare" },
    { label: "ServiceNow", description: "ITSM ticket creation", icon: "FiClipboard" },
  ],
  useCases: [
    {
      persona: "SOC Lead",
      title: "IAB monitoring",
      description: "Detect when your domain shows up in an IAB listing and preempt the buyer.",
    },
    {
      persona: "IT Ops",
      title: "Automated response",
      description: "Wire Employee Leaks directly into Okta workflows for zero-click reset.",
    },
    {
      persona: "Executive Protection",
      title: "VIP watch",
      description: "Priority-alert on C-suite and admin account exposures.",
    },
  ],
  faq: [
    {
      q: "Do you get infostealer logs?",
      a: "We monitor public distribution channels (Telegram, forums, dumpshares). Sensitive raw data is not shared — only the fact of exposure and metadata.",
    },
    {
      q: "What about service accounts?",
      a: "Fully supported. Add service account patterns and get separate routing.",
    },
    {
      q: "Can we get exposure history for a specific employee?",
      a: "Yes, per-employee audit trail is available in the portal.",
    },
  ],
  ctaBanner: {
    title: "Beat initial-access brokers to your own credentials.",
    subtitle: "Get an Employee Leaks assessment of your corporate domains — first-week findings within hours.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Login", href: "/client/login" },
  },
  relatedPages: [
    {
      slug: "customer-leaks",
      title: "Customer Leaks",
      description: "Customer PII exposure & credential leak alerts.",
      href: "/services/dark-web/customer-leaks",
    },
    {
      slug: "ransome-hive",
      title: "RansomeHive",
      description: "Real-time ransomware leak site surveillance.",
      href: "/services/threat-fusion/ransome-hive",
    },
    {
      slug: "card-leaks",
      title: "Card Leaks",
      description: "Stolen payment card monitoring & BIN matching.",
      href: "/services/dark-web/card-leaks",
    },
  ],
};

export default employeeLeaksPage;
