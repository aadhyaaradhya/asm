import type { LandingPageContent } from "./types";

export const subdomainTakeoverPage: LandingPageContent = {
  slug: "subdomain-takeover",
  category: "Attack Surface",
  metadata: {
    title: "Subdomain Takeover Detection | Aadhya Aaradhya ASM",
    description:
      "Continuously detect dangling DNS records that expose your brand to subdomain takeover. Agentless discovery, cloud-aware fingerprinting, prioritised alerts.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Subdomain Takeover" },
  ],
  hero: {
    eyebrow: "ATTACK SURFACE · SUBDOMAIN TAKEOVER",
    headline: "Find takeover-vulnerable subdomains before attackers claim them.",
    headlineAccent: "takeover-vulnerable subdomains",
    subhead:
      "Every unclaimed CNAME is an open door. We continuously fingerprint your DNS, cross-reference cloud service ownership, and flag dangling records the moment they appear.",
    trustBadges: ["AGENTLESS", "CONTINUOUS", "CLOUD-AWARE"],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "See it in the Dashboard", href: "/client/login" },
  },
  problem: {
    title: "When abandoned resources become open doors",
    body: "When a subdomain points at a cloud resource (S3 bucket, Heroku app, GitHub Pages, Azure service) that no longer exists, an attacker can register the resource and inherit the subdomain. They then host malware, run phishing, or steal cookies scoped to your domain. Standard monitoring misses this because the DNS record still resolves.",
  },
  howItWorks: {
    eyebrow: "DETECTION FLOW",
    title: "How Subdomain Takeover Detection Works",
    steps: [
      {
        title: "DISCOVERY",
        description:
          "We enumerate your DNS zones and passive-DNS history to build a live map of every subdomain, including ones your ops team forgot about.",
        icon: "FiGlobe",
      },
      {
        title: "FINGERPRINT",
        description:
          "Each record is checked against 40+ cloud-provider takeover signatures — S3, GitHub, Fastly, Heroku, Netlify, Vercel, Azure, and more.",
        icon: "FiSearch",
      },
      {
        title: "ALERT",
        description:
          "Vulnerable records surface in your dashboard with the exact provider, evidence, and remediation instructions.",
        icon: "FiAlertTriangle",
      },
    ],
  },
  capabilities: [
    {
      title: "40+ takeover signatures",
      description:
        "Cloud-provider-specific fingerprints covering AWS, Azure, GCP, GitHub, Netlify, Vercel, Fastly, Heroku, and more.",
      icon: "FiShield",
      tone: "blue",
    },
    {
      title: "Continuous scanning",
      description:
        "Every subdomain re-verified daily. New dangling records surface within minutes.",
      icon: "FiRefreshCw",
      tone: "cyan",
    },
    {
      title: "Passive DNS history",
      description:
        "Catches shadow-IT domains that never made it into your primary zone file.",
      icon: "FiEye",
      tone: "indigo",
    },
    {
      title: "Evidence trail",
      description:
        "Screenshots and raw HTTP responses attached to every finding for audit.",
      icon: "FiFileText",
      tone: "amber",
    },
    {
      title: "One-click ticketing",
      description:
        "Push findings into Jira, ServiceNow, or a custom webhook.",
      icon: "FiZap",
      tone: "rose",
    },
  ],
  dashboardPreview: {
    title: "Detected takeover-vulnerable subdomains",
    kind: "table",
    columns: ["Subdomain", "Provider", "Severity", "First seen", "Status"],
    sampleRows: [
      ["stage-app.example.com", "Heroku", "Critical", "2 hours ago", "Open"],
      ["docs.example.com", "GitHub Pages", "High", "1 day ago", "In review"],
      ["promo.example.com", "S3", "Medium", "3 days ago", "Resolved"],
    ],
  },
  integrations: [
    { label: "Webhook", description: "Real-time alerts via HTTP", icon: "FiZap" },
    { label: "Jira", description: "Auto-create tickets", icon: "FiClipboard" },
    { label: "ServiceNow", description: "ITSM workflow integration", icon: "FiSettings" },
    { label: "Slack", description: "Instant team notifications", icon: "FiMessageSquare" },
  ],
  useCases: [
    {
      persona: "CISO",
      title: "M&A due diligence",
      description:
        "Surface takeover risk in acquired brand portfolios before the deal closes.",
    },
    {
      persona: "Cloud Ops Lead",
      title: "Migration cleanup",
      description:
        "Catch retired resources the ops team forgot to delete during platform migrations.",
    },
    {
      persona: "SDLC Manager",
      title: "Ephemeral environments",
      description:
        "Detect abandoned staging domains from short-lived experiments before they are exploited.",
    },
  ],
  faq: [
    {
      q: "How is this different from a normal DNS scan?",
      a: "Standard DNS scans confirm records resolve. We test whether the underlying resource is claimable — which is the actual vulnerability.",
    },
    {
      q: "How often do you scan?",
      a: "Every 24 hours by default. On-demand rescans are available directly from the dashboard.",
    },
    {
      q: "Do I need to expose credentials?",
      a: "No. We work from your DNS zones and public passive-DNS data. Nothing is deployed inside your network.",
    },
  ],
  ctaBanner: {
    title: "See what dangling subdomains are exposing you today.",
    subtitle:
      "Get an agentless subdomain takeover assessment across every domain you own — and a few you didn't know you did.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Login", href: "/client/login" },
  },
  relatedPages: [
    {
      slug: "cert-pulse",
      title: "CertPulse",
      description: "TLS Certificate lifecycle & expiration monitoring.",
      href: "/services/cert-pulse",
    },
    {
      slug: "header-health",
      title: "Header Health",
      description: "HTTP security headers grading & regression tracking.",
      href: "/services/header-health",
    },
    {
      slug: "waflyzer",
      title: "WAFlyzer",
      description: "WAF detection, posture inspection, & bypass risk.",
      href: "/services/waflyzer",
    },
  ],
};

export default subdomainTakeoverPage;
