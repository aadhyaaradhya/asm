import type { LandingPageContent } from "./types";

export const headerHealthPage: LandingPageContent = {
  slug: "header-health",
  category: "Attack Surface",
  metadata: {
    title: "HTTP Security Header Analysis | Header Health",
    description:
      "Continuously grade HSTS, CSP, X-Frame-Options, Referrer-Policy, and Permissions-Policy across every web asset. Actionable fixes, not just scores.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Header Health" },
  ],
  hero: {
    eyebrow: "ATTACK SURFACE · HEADER HEALTH",
    headline: "Your HTTP headers are your first line of browser defence.",
    headlineAccent: "first line of browser defence",
    subhead:
      "HSTS, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy. Header Health grades every asset you own, tracks regressions over time, and gives your engineers copy-pasteable fixes.",
    trustBadges: ["AGENTLESS", "CONTINUOUS", "FIX-READY"],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Open a sample report", href: "/client/login" },
  },
  problem: {
    title: "A missing header is a silent invitation",
    body: "Missing or weak security headers let attackers frame your login page, run cross-site scripts, and leak referrer data. Most teams fix headers once and never re-check — until a deployment silently rolls them back. Header Health continuously verifies every asset so regressions surface immediately.",
  },
  howItWorks: {
    eyebrow: "ANALYSIS PROCESS",
    title: "Continuous Header Inspection & Fix Generation",
    steps: [
      {
        title: "DISCOVER",
        description: "Every HTTPS endpoint under your domain is discovered and enumerated.",
        icon: "FiSearch",
      },
      {
        title: "INSPECT",
        description: "Response headers are parsed and scored against OWASP secure header guidelines.",
        icon: "FiFileText",
      },
      {
        title: "TRACK",
        description: "Grades are re-checked daily. Regressions trigger alerts within an hour.",
        icon: "FiActivity",
      },
    ],
  },
  capabilities: [
    {
      title: "Full-spectrum grading",
      description: "HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COEP, COOP.",
      icon: "FiShield",
      tone: "blue",
    },
    {
      title: "Copy-pasteable fixes",
      description: "Every finding ships with a nginx, Apache, and Cloudflare snippet.",
      icon: "FiCode",
      tone: "emerald",
    },
    {
      title: "Regression tracking",
      description: "Historical grade timeline per asset — catch silent rollbacks from deploys.",
      icon: "FiTrendingUp",
      tone: "cyan",
    },
    {
      title: "Compliance mapping",
      description: "Maps findings to PCI-DSS 4.0, ISO 27001, and NIST SP 800-53 controls.",
      icon: "FiCheckCircle",
      tone: "indigo",
    },
    {
      title: "Slack + webhook alerts",
      description: "Regressions push to your on-call channel within an hour.",
      icon: "FiZap",
      tone: "amber",
    },
  ],
  dashboardPreview: {
    title: "Header grades across your assets",
    kind: "table",
    columns: ["Asset", "Grade", "HSTS", "CSP", "X-Frame-Options", "Trend"],
    sampleRows: [
      ["app.example.com", "Grade A", "Pass", "Pass", "Pass", "Steady"],
      ["payments.example.com", "Grade C", "Pass", "Fail", "Pass", "Dropped"],
      ["blog.example.com", "Grade B", "Fail", "Pass", "Pass", "Improving"],
    ],
  },
  integrations: [
    { label: "Webhook", description: "Alert webhooks for regressions", icon: "FiZap" },
    { label: "Slack", description: "Real-time Slack alerts", icon: "FiMessageSquare" },
    { label: "Jira", description: "Create remediation tasks", icon: "FiClipboard" },
    { label: "PDF Report", description: "Downloadable compliance summary", icon: "FiFileText" },
  ],
  useCases: [
    {
      persona: "Head of AppSec",
      title: "Regression detection",
      description: "Catch the deploy that silently unset CSP before an incident.",
    },
    {
      persona: "DevOps Lead",
      title: "Copy-paste fixes",
      description: "Ship header fixes to production without writing security config from scratch.",
    },
    {
      persona: "Compliance Officer",
      title: "Audit evidence",
      description: "Export dated grade reports as evidence for PCI-DSS 4.0 audits.",
    },
  ],
  faq: [
    {
      q: "Is this the same as securityheaders.com?",
      a: "Same idea, richer coverage: we track every asset (not just one URL), keep history, and integrate with your tools.",
    },
    {
      q: "Does it work with authenticated routes?",
      a: "Yes. Provide test credentials or a session token and Header Health assesses gated pages too.",
    },
    {
      q: "How do you handle rate limiting?",
      a: "Scans are throttled per-origin. Custom rate limits can be set from the dashboard.",
    },
  ],
  ctaBanner: {
    title: "Grade every asset. Catch every regression.",
    subtitle: "Get a Header Health assessment across your production domains in under 24 hours.",
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
      slug: "subdomain-takeover",
      title: "Subdomain Takeover",
      description: "Detect dangling DNS records exposing subdomains.",
      href: "/services/subdomain-takeover",
    },
    {
      slug: "waflyzer",
      title: "WAFlyzer",
      description: "WAF detection, posture inspection, & bypass risk.",
      href: "/services/waflyzer",
    },
  ],
};

export default headerHealthPage;
