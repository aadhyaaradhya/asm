import type { LandingPageContent } from "./types";

export const cardLeaksPage: LandingPageContent = {
  slug: "card-leaks",
  category: "Dark Web",
  metadata: {
    title: "Compromised Payment Card Monitoring | Card Leaks",
    description:
      "See stolen cards from your customers hit the dark web in real time. BIN-matched feeds, issuer-ready alerts, and fraud-team integration.",
  },
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Dark Web" },
    { label: "Card Leaks" },
  ],
  hero: {
    eyebrow: "DARK WEB · CARD LEAKS",
    headline: "See stolen cards hit the market in real time.",
    headlineAccent: "hit the market in real time",
    subhead:
      "BIN-matched dark web feeds surface compromised payment cards for your issuer or merchant portfolio — before the first fraudulent charge is attempted.",
    trustBadges: ["BIN-MATCHED", "REAL-TIME", "ISSUER-READY"],
    primaryCta: { label: "Request a Demo", href: "/contact" },
    secondaryCta: { label: "See Card Leaks", href: "/client/login" },
  },
  problem: {
    title: "The window between leak and fraud is shrinking",
    body: "Once a card lands on a dark web marketplace, it's often used within hours. Traditional bank fraud detection reacts after the charge. Card Leaks reacts before — surfacing your BINs the moment they appear so you can pre-emptively block, alert, or reissue.",
  },
  howItWorks: {
    eyebrow: "MONITORING PIPELINE",
    title: "How Payment Card Monitoring Works",
    steps: [
      {
        title: "HARVEST",
        description: "We continuously ingest from ~90 dark web card marketplaces, forums, and paste sites.",
        icon: "FiEyeOff",
      },
      {
        title: "MATCH",
        description: "Every card is matched against your BIN ranges and known merchant identifiers.",
        icon: "FiSearch",
      },
      {
        title: "ACT",
        description: "Confirmed matches surface immediately with metadata (BIN, region, price, source).",
        icon: "FiAlertTriangle",
      },
    ],
  },
  capabilities: [
    {
      title: "~90 marketplace coverage",
      description: "Major card shops, forums, and paste sites monitored in real time.",
      icon: "FiDatabase",
      tone: "rose",
    },
    {
      title: "BIN + merchant matching",
      description: "Filter by BIN range, currency, region, or merchant descriptor.",
      icon: "FiCreditCard",
      tone: "blue",
    },
    {
      title: "Trend analytics",
      description: "Volume, region, and price trends per BIN.",
      icon: "FiTrendingUp",
      tone: "cyan",
    },
    {
      title: "Fraud-team webhook",
      description: "Push confirmed matches straight into your fraud queue.",
      icon: "FiZap",
      tone: "amber",
    },
    {
      title: "Regulatory reports",
      description: "Templated summaries for PCI-DSS and card-scheme reporting.",
      icon: "FiFileText",
      tone: "emerald",
    },
  ],
  dashboardPreview: {
    title: "Recent card leaks matching your BINs",
    kind: "table",
    columns: ["BIN", "Card type", "Region", "Price", "Source", "Detected"],
    sampleRows: [
      ["453213", "Visa Debit", "UK", "$6", "Genesis Market", "12 min ago"],
      ["521738", "Mastercard Credit", "US", "$22", "UnknownForum", "41 min ago"],
      ["453213", "Visa Debit", "UK", "$8", "Russian Market", "2 hours ago"],
    ],
  },
  integrations: [
    { label: "Fraud Webhook", description: "Direct feed to fraud engine", icon: "FiZap" },
    { label: "ServiceNow", description: "Fraud incident cases", icon: "FiClipboard" },
    { label: "Slack / Teams", description: "Real-time alerts", icon: "FiMessageSquare" },
    { label: "PCI-DSS Report", description: "Compliance export", icon: "FiFileText" },
  ],
  useCases: [
    {
      persona: "Issuing Bank Fraud Team",
      title: "Pre-emptive block",
      description: "Automatically flag or re-issue cards seen on marketplaces.",
    },
    {
      persona: "Merchant Risk",
      title: "Portfolio monitoring",
      description: "Identify merchants whose cards appear disproportionately in leaks.",
    },
    {
      persona: "Card Scheme",
      title: "Fraud pattern intel",
      description: "See which BIN ranges are being harvested and where.",
    },
  ],
  faq: [
    {
      q: "Do you buy stolen data?",
      a: "No. Card Leaks harvests metadata (BIN, region, price) from publicly listed marketplace pages; no card data is purchased or stored.",
    },
    {
      q: "How fresh is the data?",
      a: "Most sources are ingested every 15 minutes; the largest marketplaces are ingested continuously.",
    },
    {
      q: "Can we get raw data?",
      a: "No. Regulatory and ethical constraints mean we only share the metadata needed to act.",
    },
  ],
  ctaBanner: {
    title: "The next fraud loss is already on a dark web listing.",
    subtitle: "Get real-time Card Leaks alerts for your BIN ranges in a personalised demo.",
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
      slug: "employee-leaks",
      title: "Employee Leaks",
      description: "Employee credential exposure & stealer log watch.",
      href: "/services/dark-web/employee-leaks",
    },
    {
      slug: "ransome-hive",
      title: "RansomeHive",
      description: "Real-time ransomware leak site surveillance.",
      href: "/services/threat-fusion/ransome-hive",
    },
  ],
};

export default cardLeaksPage;
