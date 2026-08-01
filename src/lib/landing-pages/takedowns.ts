import type { LandingPageContent } from "./types";

export const takedownsPage: LandingPageContent = {
  slug: "takedowns",
  category: "Ops",
  metadata: {
    title: "Managed Phishing & Brand Abuse Takedowns",
    description:
      "From detection to removal. Managed takedown service for phishing sites, brand-abusing domains, and impersonating profiles — median 6-hour close.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Automated Takedowns" },
  ],
  hero: {
    eyebrow: "OPS · AUTOMATED TAKEDOWNS",
    headline: "From detection to removal. Handled.",
    headlineAccent: "Handled",
    subhead:
      "A managed takedown service for phishing sites, brand-abusing domains, malicious mobile apps, and impersonating social profiles. Filed, escalated, and closed — with median close in six hours.",
    trustBadges: ["24×7", "MEDIAN 6H CLOSE", "GLOBAL COVERAGE"],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Explore Takedowns", href: "/client/login" },
  },
  problem: {
    title: "Filing takedowns is a full-time job you shouldn't have",
    body: "Every hour a phishing site stays live costs you customers. Manually filing takedown requests across registrars, hosts, CDNs, and app stores is slow and error-prone. Automated Takedowns handles the full lifecycle — filing, escalation, follow-up, evidence pack, and reporting — with 24×7 human oversight.",
  },
  howItWorks: {
    eyebrow: "TAKEDOWN WORKFLOW",
    title: "How Managed Takedowns Work",
    steps: [
      {
        title: "DETECT",
        description: "Detection can originate from your ASM signal, brand alerts, or a customer report submitted via the portal.",
        icon: "FiSearch",
      },
      {
        title: "FILE",
        description: "We package evidence and submit to registrar, host, CDN, app store, or social platform — with the right template every time.",
        icon: "FiFileText",
      },
      {
        title: "CLOSE",
        description: "Escalate through progressively higher channels until content is removed, with hourly status updates.",
        icon: "FiCheckCircle",
      },
    ],
  },
  capabilities: [
    {
      title: "Full-lifecycle service",
      description: "Filing, escalation, follow-up, close-out — no team involvement required after intake.",
      icon: "FiZap",
      tone: "amber",
    },
    {
      title: "Global registrar / host coverage",
      description: "Direct escalation paths at all major registrars, hosting providers, CDNs, and app stores.",
      icon: "FiGlobe",
      tone: "blue",
    },
    {
      title: "24×7 human oversight",
      description: "SOC-adjacent team drives every case; not just automated emails.",
      icon: "FiActivity",
      tone: "rose",
    },
    {
      title: "Median 6-hour close",
      description: "For phishing sites; longer SLAs for app-store and social platform cases.",
      icon: "FiClock",
      tone: "emerald",
    },
    {
      title: "Evidence pack per case",
      description: "Screenshots, WHOIS, DNS, HTTP responses, and chain-of-custody log.",
      icon: "FiFileText",
      tone: "cyan",
    },
    {
      title: "Board-ready metrics",
      description: "Cases opened, closed, median time, cost saved — per period, per brand.",
      icon: "FiTrendingUp",
      tone: "indigo",
    },
  ],
  dashboardPreview: {
    title: "Recent takedown cases",
    kind: "table",
    columns: ["Target", "Type", "Filed", "Escalated", "Closed", "SLA"],
    sampleRows: [
      ["login-secure-brand.tld", "Phishing", "22 min ago", "Yes", "Pending", "On track"],
      ["brand-support-app", "Rogue mobile app", "4 hours ago", "Yes", "Closed", "4h 12m"],
      ["@brand-support", "Impersonation", "1 day ago", "Yes", "Closed", "19 hours"],
    ],
  },
  integrations: [
    { label: "Portal Intake", description: "Submit cases from portal", icon: "FiClipboard" },
    { label: "API Submission", description: "Automated case submission API", icon: "FiZap" },
    { label: "Status Email", description: "Automated case status digests", icon: "FiMail" },
    { label: "PDF Export", description: "Board-ready SLA reports", icon: "FiFileText" },
  ],
  useCases: [
    {
      persona: "Head of Fraud",
      title: "Phishing rapid response",
      description: "Kill phishing kits at the source before they harvest customer credentials.",
    },
    {
      persona: "Brand / Legal",
      title: "Impersonation cleanup",
      description: "Close impersonating social profiles and knockoff app store listings.",
    },
    {
      persona: "CISO",
      title: "Cost reduction",
      description: "Replace an in-house takedowns team with a managed service and clear SLAs.",
    },
  ],
  faq: [
    {
      q: "Do you guarantee removal?",
      a: "We guarantee filing and escalation. Removal ultimately depends on the receiving party, but our close rate exceeds 95%.",
    },
    {
      q: "Can you handle non-English content?",
      a: "Yes. Coverage includes multi-language phishing kits and platform-specific templates.",
    },
    {
      q: "Can I file cases from my own detection tools?",
      a: "Yes. Submit via portal or API.",
    },
  ],
  ctaBanner: {
    title: "Stop filing takedowns. Start closing them.",
    subtitle: "Get a managed Automated Takedowns SLA quote for your brand portfolio.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Login", href: "/client/login" },
  },
  relatedPages: [
    {
      slug: "subdomain-takeover",
      title: "Subdomain Takeover",
      description: "Detect dangling DNS records exposing subdomains.",
      href: "/services/subdomain-takeover",
    },
    {
      slug: "card-leaks",
      title: "Card Leaks",
      description: "Stolen payment card monitoring & BIN matching.",
      href: "/services/dark-web/card-leaks",
    },
    {
      slug: "customer-leaks",
      title: "Customer Leaks",
      description: "Customer PII exposure & credential leak alerts.",
      href: "/services/dark-web/customer-leaks",
    },
  ],
};

export default takedownsPage;
