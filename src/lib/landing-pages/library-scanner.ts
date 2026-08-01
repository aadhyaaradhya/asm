import type { LandingPageContent } from "./types";

export const libraryScannerPage: LandingPageContent = {
  slug: "library-scanner",
  category: "VulnIntel",
  metadata: {
    title: "OSS Library & SBOM Risk | Library Scanner",
    description:
      "Continuous SBOM discovery + CVE matching for every open-source library running in your production stack. Surface risk without touching a codebase.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "VulnIntel" },
    { label: "Library Scanner" },
  ],
  hero: {
    eyebrow: "VULNINTEL · LIBRARY SCANNER",
    headline: "Know every open-source library running in production.",
    headlineAccent: "every open-source library",
    subhead:
      "Library Scanner fingerprints the OSS packages behind your public services, matches them against CVE and GHSA feeds, and surfaces exposed dependencies — without ever seeing your source code.",
    trustBadges: ["AGENTLESS", "SOURCE-FREE", "SBOM-READY"],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Try Library Scanner", href: "/client/login" },
  },
  problem: {
    title: "You can't patch what you can't see",
    body: "Modern services depend on hundreds of transitive open-source libraries. Most teams don't know which versions ship to production. Library Scanner rebuilds the SBOM from the outside — fingerprinting frameworks, JS bundles, server signatures, and error responses — then matches every package against public vulnerability feeds.",
  },
  howItWorks: {
    eyebrow: "SCA PROCESS",
    title: "How External Software Composition Analysis Works",
    steps: [
      {
        title: "FINGERPRINT",
        description: "Detect frameworks (React, Vue, Next.js, Rails, Spring), server versions, JS bundle contents, and error fingerprints.",
        icon: "FiPackage",
      },
      {
        title: "MATCH",
        description: "Every detected package is cross-checked against NVD, GHSA, and ecosystem advisories hourly.",
        icon: "FiDatabase",
      },
      {
        title: "ALERT",
        description: "Vulnerable dependencies surface with fix versions and CVE evidence.",
        icon: "FiAlertTriangle",
      },
    ],
  },
  capabilities: [
    {
      title: "Multi-ecosystem",
      description: "npm, PyPI, RubyGems, Maven, NuGet, Go modules, Debian/Ubuntu packages.",
      icon: "FiPackage",
      tone: "blue",
    },
    {
      title: "Bundle-aware",
      description: "Reconstructs JS bundle library versions even when they aren't in a manifest.",
      icon: "FiCode",
      tone: "cyan",
    },
    {
      title: "Transitive coverage",
      description: "Not just direct deps — flags vulnerable transitives too.",
      icon: "FiGitBranch",
      tone: "purple",
    },
    {
      title: "Exportable SBOM",
      description: "CycloneDX and SPDX exports for supplier and regulator handoff.",
      icon: "FiFileText",
      tone: "emerald",
    },
    {
      title: "Ticketing integration",
      description: "One deduped ticket per vulnerable package per service.",
      icon: "FiZap",
      tone: "amber",
    },
  ],
  dashboardPreview: {
    title: "Detected libraries with known CVEs",
    kind: "table",
    columns: ["Service", "Package", "Version", "Fix version", "CVE", "Severity"],
    sampleRows: [
      ["api.example.com", "lodash", "4.17.15", "4.17.21", "CVE-2021-23337", "High"],
      ["web.example.com", "react", "18.1.0", "—", "—", "Clean"],
      ["checkout.example.com", "openssl", "1.1.1t", "1.1.1w", "CVE-2023-5678", "Critical"],
    ],
  },
  integrations: [
    { label: "Jira", description: "Automated ticket routing", icon: "FiClipboard" },
    { label: "Webhook / SIEM", description: "Event webhooks", icon: "FiZap" },
    { label: "CycloneDX / SPDX", description: "Standard SBOM formats", icon: "FiFileText" },
    { label: "Slack", description: "Critical vulnerability alerts", icon: "FiMessageSquare" },
  ],
  useCases: [
    {
      persona: "AppSec Engineer",
      title: "SBOM validation",
      description: "Prove the SBOM your build system produces matches what's actually deployed.",
    },
    {
      persona: "Procurement",
      title: "Vendor risk",
      description: "Get a per-vendor SBOM without asking the vendor.",
    },
    {
      persona: "Regulatory Response",
      title: "Log4Shell drills",
      description: "Answer 'are we exposed to X?' in minutes, not a company-wide audit.",
    },
  ],
  faq: [
    {
      q: "Do you look at our source code?",
      a: "No. Library Scanner works from external observation only.",
    },
    {
      q: "What about libraries we bundle privately?",
      a: "External detection has limits. For internal SBOM validation, you can upload your build-time SBOM and we cross-check.",
    },
    {
      q: "How accurate is bundle-aware detection?",
      a: "Version-exact for common libraries (React, jQuery, Bootstrap, Angular). Version-range for others.",
    },
  ],
  ctaBanner: {
    title: "Every library, every version, every CVE.",
    subtitle: "Get a Library Scanner report on your production services without touching a single repo.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Login", href: "/client/login" },
  },
  relatedPages: [
    {
      slug: "vulnerabilities",
      title: "Vulnerability Intelligence",
      description: "Exploit-aware CVE correlation for exposed assets.",
      href: "/services/vuln-intel/vulnerabilities",
    },
    {
      slug: "subdomain-takeover",
      title: "Subdomain Takeover",
      description: "Detect dangling DNS records exposing subdomains.",
      href: "/services/subdomain-takeover",
    },
    {
      slug: "third-party-leak",
      title: "Third-Party Leak",
      description: "Supply chain & vendor breach monitoring.",
      href: "/services/dark-web/third-party-leak",
    },
  ],
};

export default libraryScannerPage;
