import type { LandingPageContent } from "./types";

export const waflyzerPage: LandingPageContent = {
  slug: "waflyzer",
  category: "Attack Surface",
  metadata: {
    title: "WAF Posture Assessment | WAFlyzer",
    description:
      "Fingerprint the WAF in front of every app, verify rulesets are actually blocking, and surface bypass paths — before an attacker finds them.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "WAFlyzer" },
  ],
  hero: {
    eyebrow: "ATTACK SURFACE · WAFLYZER",
    headline: "See through your WAF the way an attacker does.",
    headlineAccent: "the way an attacker does",
    subhead:
      "Fingerprint the WAF in front of every web app, verify rulesets are actually blocking, and surface bypass paths — safely, without disrupting production traffic.",
    trustBadges: ["NON-DISRUPTIVE", "MULTI-VENDOR", "CONTINUOUS"],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Try WAFlyzer", href: "/client/login" },
  },
  problem: {
    title: "A WAF you can't verify isn't protecting you",
    body: "Most WAFs are deployed once and never tested. Rules degrade, bypass techniques evolve, and misconfigurations silently accumulate. WAFlyzer probes your WAF the same way attackers do — with signature payloads that trigger detection without landing malicious traffic on your origin.",
  },
  howItWorks: {
    eyebrow: "PROBING METHODOLOGY",
    title: "How WAF Posture Assessment Works",
    steps: [
      {
        title: "FINGERPRINT",
        description: "Detect which WAF is in front of each app (Cloudflare, AWS WAF, Akamai, Imperva, F5, ModSecurity).",
        icon: "FiEye",
      },
      {
        title: "PROBE",
        description: "Non-disruptive signature payloads verify OWASP Top-10 rulesets are actually blocking.",
        icon: "FiTarget",
      },
      {
        title: "REPORT",
        description: "A rules-vs-reality matrix per app + suggested rule tuning.",
        icon: "FiFileText",
      },
    ],
  },
  capabilities: [
    {
      title: "Multi-vendor coverage",
      description: "Cloudflare, AWS WAF, Akamai, Imperva, F5 ASM, Fastly, Sucuri, ModSecurity.",
      icon: "FiShield",
      tone: "blue",
    },
    {
      title: "Non-disruptive probing",
      description: "Signature-only payloads. Nothing malicious reaches your origin.",
      icon: "FiZap",
      tone: "emerald",
    },
    {
      title: "OWASP Top-10 verification",
      description: "SQLi, XSS, RCE, SSRF, path traversal, XXE — one report per class.",
      icon: "FiTarget",
      tone: "indigo",
    },
    {
      title: "Continuous re-testing",
      description: "Rules drift. WAFlyzer re-verifies weekly and alerts on new bypasses.",
      icon: "FiRefreshCw",
      tone: "cyan",
    },
    {
      title: "Rule-tuning suggestions",
      description: "For every miss, get a vendor-specific rule to add.",
      icon: "FiCode",
      tone: "amber",
    },
  ],
  dashboardPreview: {
    title: "WAF verification matrix",
    kind: "table",
    columns: ["Application", "WAF", "SQLi", "XSS", "RCE", "Bypasses"],
    sampleRows: [
      ["app.example.com", "Cloudflare", "Pass", "Pass", "Pass", "0"],
      ["api.example.com", "AWS WAF", "Pass", "Pass", "Fail", "2"],
      ["legacy.example.com", "ModSecurity", "Pass", "Fail", "Pass", "3"],
    ],
  },
  integrations: [
    { label: "Webhook", description: "SIEM & notification hook", icon: "FiZap" },
    { label: "Jira", description: "Automated ticket routing", icon: "FiClipboard" },
    { label: "Slack", description: "Alert team channels", icon: "FiMessageSquare" },
    { label: "PDF Report", description: "Auditable executive summary", icon: "FiFileText" },
  ],
  useCases: [
    {
      persona: "AppSec Lead",
      title: "Rule verification",
      description: "Confirm the WAF ruleset shipped by IT actually blocks the OWASP Top 10.",
    },
    {
      persona: "Ops Lead",
      title: "Vendor comparison",
      description: "Benchmark two WAFs (during migration) with identical probes.",
    },
    {
      persona: "Pen-Test Manager",
      title: "Continuous validation",
      description: "Replace annual WAF tests with weekly automated verification.",
    },
  ],
  faq: [
    {
      q: "Will this trip my WAF alarms?",
      a: "Yes, that's the point. WAFlyzer probes are tagged so you can allow-list them in your SIEM.",
    },
    {
      q: "Does it work behind CDNs?",
      a: "Yes. Cloudflare, Akamai, Fastly, CloudFront are all supported.",
    },
    {
      q: "Can I run WAFlyzer against my origin directly?",
      a: "With permission, yes — useful for verifying rules on the WAF itself.",
    },
  ],
  ctaBanner: {
    title: "Trust, but verify — every rule, every week.",
    subtitle: "Get a WAFlyzer assessment across your production apps and see which rules actually protect you.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Login", href: "/client/login" },
  },
  relatedPages: [
    {
      slug: "header-health",
      title: "Header Health",
      description: "HTTP security headers grading & regression tracking.",
      href: "/services/header-health",
    },
    {
      slug: "subdomain-takeover",
      title: "Subdomain Takeover",
      description: "Detect dangling DNS records exposing subdomains.",
      href: "/services/subdomain-takeover",
    },
    {
      slug: "vulnerabilities",
      title: "Vulnerability Intelligence",
      description: "Exploit-aware CVE correlation for exposed assets.",
      href: "/services/vuln-intel/vulnerabilities",
    },
  ],
};

export default waflyzerPage;
