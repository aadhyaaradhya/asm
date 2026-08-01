import type { LandingPageContent } from "./types";

export const clientPortalPage: LandingPageContent = {
  slug: "client-portal",
  category: "VulnIntel",
  metadata: {
    title: "Role-Scoped Security Dashboards | Client Portal",
    description:
      "Give every stakeholder the exact view they need — CISO, IT ops, legal, executives — with role-scoped dashboards and audit-ready exports.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "VulnIntel" },
    { label: "Client Portal" },
  ],
  hero: {
    eyebrow: "VULNINTEL · CLIENT PORTAL",
    headline: "Give every stakeholder the exact view they need.",
    headlineAccent: "the exact view they need",
    subhead:
      "Role-scoped dashboards replace static PDF reports. CISOs see trend lines. IT ops sees tickets. Legal sees breach evidence. Executives see business risk — all from one platform.",
    trustBadges: ["ROLE-SCOPED", "AUDIT-READY", "SSO-INTEGRATED"],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Explore the portal", href: "/client/login" },
  },
  problem: {
    title: "One dashboard cannot serve every stakeholder",
    body: "Security data is consumed differently by every role. Executives want trend arrows. Ops wants tickets. Legal wants evidence. Auditors want dated snapshots. Client Portal delivers a curated experience per role — from the same underlying data — so no one asks for a custom report again.",
  },
  howItWorks: {
    eyebrow: "ROLE ARCHITECTURE",
    title: "How Role-Scoped Dashboards Work",
    steps: [
      {
        title: "DEFINE ROLES",
        description: "Choose from templates (CISO, Ops, Legal, Auditor, Executive) or create custom roles.",
        icon: "FiUsers",
      },
      {
        title: "SCOPE DATA",
        description: "Each role sees only the widgets, assets, and details they're entitled to.",
        icon: "FiEye",
      },
      {
        title: "EXPORT",
        description: "Every view generates a dated PDF or CSV for offline consumption.",
        icon: "FiFileText",
      },
    ],
  },
  capabilities: [
    {
      title: "Role templates",
      description: "CISO, Ops, Legal, Auditor, Executive, plus fully custom roles.",
      icon: "FiUsers",
      tone: "blue",
    },
    {
      title: "SSO Integration",
      description: "SAML 2.0 and OIDC. Group-to-role mapping supported.",
      icon: "FiUserCheck",
      tone: "indigo",
    },
    {
      title: "Asset-level scoping",
      description: "Restrict access by business unit, environment, or region.",
      icon: "FiEye",
      tone: "cyan",
    },
    {
      title: "Board-ready exports",
      description: "Dated PDFs and CSVs suitable as audit evidence.",
      icon: "FiFileText",
      tone: "emerald",
    },
    {
      title: "Change log",
      description: "Every viewing action, export, and permission change is logged.",
      icon: "FiActivity",
      tone: "amber",
    },
  ],
  dashboardPreview: {
    title: "Role-scoped dashboard views",
    kind: "detail",
  },
  integrations: [
    { label: "SAML 2.0 / OIDC", description: "Enterprise Single Sign-On", icon: "FiUserCheck" },
    { label: "Email Digests", description: "Automated executive digests", icon: "FiMail" },
    { label: "PDF / CSV Export", description: "Audit-ready reporting", icon: "FiFileText" },
    { label: "Audit Webhook", description: "Stream portal audit events", icon: "FiZap" },
  ],
  useCases: [
    {
      persona: "CISO",
      title: "Board report automation",
      description: "Generate a dated board pack with trend arrows without opening a spreadsheet.",
    },
    {
      persona: "Ops Manager",
      title: "Team focus",
      description: "Show ops engineers only the tickets assigned to their team.",
    },
    {
      persona: "General Counsel",
      title: "Breach evidence",
      description: "Access dated breach-adjacent findings on demand, without asking security.",
    },
  ],
  faq: [
    {
      q: "Can we bring our own SSO?",
      a: "Yes. Any SAML 2.0 or OIDC identity provider works.",
    },
    {
      q: "Can I hide dollar figures from ops but show them to execs?",
      a: "Yes. Role-level widget visibility is fully configurable.",
    },
    {
      q: "Is there an audit log?",
      a: "Yes. Every action is timestamped and exportable.",
    },
  ],
  ctaBanner: {
    title: "One platform. Every stakeholder. Zero custom reports.",
    subtitle: "See how Client Portal maps to your org chart in a live demo.",
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
      slug: "library-scanner",
      title: "Library Scanner",
      description: "Open-source dependency risk & SBOM generation.",
      href: "/services/vuln-intel/library-scanner",
    },
    {
      slug: "takedowns",
      title: "Automated Takedowns",
      description: "Managed phishing & brand abuse removal.",
      href: "/services/takedowns",
    },
  ],
};

export default clientPortalPage;
