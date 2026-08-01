import type { LandingPageContent } from "./types";

export const customerLeaksPage: LandingPageContent = {
  slug: "customer-leaks",
  category: "Dark Web",
  metadata: {
    title: "Customer PII Exposure Monitoring | Customer Leaks",
    description:
      "Detect customer credentials, PII, and account data on the dark web — the day it appears. Notify customers, invalidate sessions, contain breach spread.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Dark Web" },
    { label: "Customer Leaks" },
  ],
  hero: {
    eyebrow: "DARK WEB · CUSTOMER LEAKS",
    headline: "Detect customer data on the dark web the day it appears.",
    headlineAccent: "the day it appears",
    subhead:
      "Continuous monitoring of forums, marketplaces, paste sites, and Telegram channels for your customer credentials, PII, and account data. Notify, invalidate, contain.",
    trustBadges: ["CONTINUOUS", "DEDUPLICATED", "GDPR-READY"],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "See a sample leak", href: "/client/login" },
  },
  problem: {
    title: "Credential stuffing starts within hours of a leak",
    body: "When customer credentials leak, they're weaponised for account takeovers within hours. Customer Leaks surfaces exposures as they land — from third-party breaches, combolists, and phishing dumps — so you can invalidate sessions and notify customers before the takeovers begin.",
  },
  howItWorks: {
    eyebrow: "MONITORING FLOW",
    title: "How Customer PII Exposure Monitoring Works",
    steps: [
      {
        title: "INGEST",
        description: "Ingest from ~250 dark web sources: breach dumps, combolists, paste sites, Telegram channels.",
        icon: "FiEyeOff",
      },
      {
        title: "MATCH",
        description: "Match against your customer email domains, patterns, and known account identifiers.",
        icon: "FiSearch",
      },
      {
        title: "CONTAIN",
        description: "Alerts include source breach, exposure date, and password (if included) to trigger targeted invalidation.",
        icon: "FiAlertTriangle",
      },
    ],
  },
  capabilities: [
    {
      title: "~250 sources",
      description: "Major dark web forums, marketplaces, Telegram groups, and paste sites.",
      icon: "FiDatabase",
      tone: "rose",
    },
    {
      title: "Bulk email match",
      description: "Provide your customer domain (or list) — every match surfaces automatically.",
      icon: "FiUsers",
      tone: "blue",
    },
    {
      title: "Password intelligence",
      description: "Where cleartext or hashed passwords are included, surface them to drive targeted reset.",
      icon: "FiLock",
      tone: "indigo",
    },
    {
      title: "Auto-invalidate hook",
      description: "Fire a webhook into your IAM to invalidate compromised sessions on match.",
      icon: "FiZap",
      tone: "amber",
    },
    {
      title: "GDPR / breach reports",
      description: "Templated 72-hour notification packs.",
      icon: "FiFileText",
      tone: "emerald",
    },
  ],
  dashboardPreview: {
    title: "Customer leak matches",
    kind: "table",
    columns: ["Email", "Source", "Password exposed", "Breach date", "Action"],
    sampleRows: [
      ["user1@customer-domain.com", "MegaCombo24", "Yes", "2026-06-14", "Invalidated"],
      ["user2@customer-domain.com", "Genesis Market", "Yes", "2026-05-30", "Notified"],
      ["user3@customer-domain.com", "Antipublic v3", "No", "2025-12-01", "Reviewed"],
    ],
  },
  integrations: [
    { label: "IAM Webhook", description: "Auto-invalidate sessions", icon: "FiZap" },
    { label: "Email Templates", description: "Customer notification packs", icon: "FiMail" },
    { label: "Jira / ServiceNow", description: "Ticketing integration", icon: "FiClipboard" },
    { label: "GDPR Report", description: "Regulatory compliance pack", icon: "FiFileText" },
  ],
  useCases: [
    {
      persona: "CISO",
      title: "Credential-stuffing prevention",
      description: "Invalidate sessions and force reset before attackers use leaked pairs.",
    },
    {
      persona: "Fraud Team",
      title: "Account takeover reduction",
      description: "Correlate leak dates with ATO attempts to prioritise reset campaigns.",
    },
    {
      persona: "DPO",
      title: "Regulatory readiness",
      description: "Have breach-notification packs auto-generated at the moment of detection.",
    },
  ],
  faq: [
    {
      q: "Do you store cleartext passwords?",
      a: "Only enough to enable targeted invalidation. Full-password storage is opt-in and encrypted.",
    },
    {
      q: "How do you handle deduplication?",
      a: "Emails are fingerprinted per source; only the first appearance triggers an alert.",
    },
    {
      q: "Can we monitor by email pattern?",
      a: "Yes. Wildcard domains, subdomains, and pattern rules are supported.",
    },
  ],
  ctaBanner: {
    title: "Turn a breach notice into a customer save.",
    subtitle: "Get a Customer Leaks demo scoped to your top domains — actionable results in the first 24 hours.",
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "Login", href: "/client/login" },
  },
  relatedPages: [
    {
      slug: "employee-leaks",
      title: "Employee Leaks",
      description: "Employee credential exposure & stealer log watch.",
      href: "/services/dark-web/employee-leaks",
    },
    {
      slug: "card-leaks",
      title: "Card Leaks",
      description: "Stolen payment card monitoring & BIN matching.",
      href: "/services/dark-web/card-leaks",
    },
    {
      slug: "third-party-leak",
      title: "Third-Party Leak",
      description: "Supply chain & vendor breach monitoring.",
      href: "/services/dark-web/third-party-leak",
    },
  ],
};

export default customerLeaksPage;
