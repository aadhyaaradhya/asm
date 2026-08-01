import type { LandingPageContent } from "./types";

export const certPulsePage: LandingPageContent = {
  slug: "cert-pulse",
  category: "Attack Surface",
  metadata: {
    title: "TLS Certificate Monitoring | CertPulse",
    description:
      "Track every TLS certificate you own (and forgot you owned). Renewal alerts, weak-cipher detection, CT-log monitoring, and rogue-cert discovery in one place.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "CertPulse" },
  ],
  hero: {
    eyebrow: "ATTACK SURFACE · CERTPULSE",
    headline: "Never surprise-expire a certificate again.",
    headlineAccent: "surprise-expire",
    subhead:
      "Track every TLS certificate under your name, catch weak ciphers, and detect rogue certificates issued for your domain via Certificate Transparency logs.",
    trustBadges: ["AGENTLESS", "CT-LOG WATCH", "ZERO CONFIG"],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Try CertPulse", href: "/client/login" },
  },
  problem: {
    title: "A certificate is a landmine on a countdown",
    body: "Every year, outages from expired certificates cost teams days of engineering time and customer trust. Worse: attackers can request rogue certificates for your domain from misconfigured CAs — silently. CertPulse watches your certificates and the CT logs, so both problems surface early.",
  },
  howItWorks: {
    eyebrow: "LIFECYCLE FLOW",
    title: "How CertPulse Certificate Monitoring Works",
    steps: [
      {
        title: "INVENTORY",
        description: "We scan every endpoint you own and reconcile with public CT logs to build a complete certificate inventory.",
        icon: "FiSearch",
      },
      {
        title: "MONITOR",
        description: "Renewal windows, cipher strength, and OCSP status are checked daily.",
        icon: "FiClock",
      },
      {
        title: "ALERT",
        description: "30-day, 14-day, and 7-day renewal alerts; rogue-cert alerts within an hour of CT log entry.",
        icon: "FiAlertTriangle",
      },
    ],
  },
  capabilities: [
    {
      title: "Renewal countdown",
      description: "30 / 14 / 7 / 3 / 1 day alerts per certificate.",
      icon: "FiClock",
      tone: "amber",
    },
    {
      title: "Cipher grading",
      description: "TLS 1.0/1.1 usage, weak ciphers (RC4, 3DES), and short RSA keys flagged automatically.",
      icon: "FiLock",
      tone: "rose",
    },
    {
      title: "CT-log monitoring",
      description: "Every certificate issued for your domain surfaces within an hour — even if it wasn't yours to issue.",
      icon: "FiEye",
      tone: "blue",
    },
    {
      title: "OCSP + revocation status",
      description: "Continuous revocation checks; alerts on unexpected revocation.",
      icon: "FiRefreshCw",
      tone: "cyan",
    },
    {
      title: "Chain validation",
      description: "Detects broken intermediate chains that mobile clients trip over.",
      icon: "FiCheckCircle",
      tone: "emerald",
    },
    {
      title: "ACME renewal hooks",
      description: "Optional webhook to trigger your Let's Encrypt / private ACME renewal on threshold.",
      icon: "FiZap",
      tone: "indigo",
    },
  ],
  dashboardPreview: {
    title: "Certificate inventory",
    kind: "table",
    columns: ["Host", "Issuer", "Expires in", "Cipher", "CT-log status"],
    sampleRows: [
      ["api.example.com", "Let's Encrypt", "6 days", "TLS 1.3", "Clean"],
      ["www.example.com", "DigiCert", "82 days", "TLS 1.3", "Clean"],
      ["legacy.example.com", "Sectigo", "3 days", "TLS 1.2", "Clean"],
    ],
  },
  integrations: [
    { label: "Webhook", description: "Trigger ACME renewals", icon: "FiZap" },
    { label: "Email", description: "Direct team notifications", icon: "FiMail" },
    { label: "Slack / Teams", description: "Channel alert messages", icon: "FiMessageSquare" },
    { label: "PagerDuty", description: "Incident escalation", icon: "FiClipboard" },
  ],
  useCases: [
    {
      persona: "SRE",
      title: "Outage prevention",
      description: "Feed 30/14/7 day renewal alerts into PagerDuty so the on-call rotation catches renewals before customers do.",
    },
    {
      persona: "CISO",
      title: "Rogue-cert detection",
      description: "Detect a certificate issued for your primary domain by a CA you never authorised.",
    },
    {
      persona: "Compliance Lead",
      title: "Weak-cipher inventory",
      description: "Produce PCI-DSS 4.0 evidence for TLS 1.2+ enforcement across every endpoint.",
    },
  ],
  faq: [
    {
      q: "How do you find certs I don't know about?",
      a: "We correlate your DNS with public CT logs. Any certificate mentioning a domain you own shows up.",
    },
    {
      q: "Can it renew certificates for me?",
      a: "CertPulse doesn't issue certificates itself. It can trigger your ACME renewal pipeline via webhook.",
    },
    {
      q: "What about internal PKI?",
      a: "Provide your internal CT log endpoint or upload your CA bundle and internal certificates are included.",
    },
  ],
  ctaBanner: {
    title: "Every certificate. Every issuer. Every renewal.",
    subtitle: "Get a full CertPulse inventory across your public and internal endpoints.",
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

export default certPulsePage;
