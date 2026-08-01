export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface CtaItem {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  subhead: string;
  primaryCta: CtaItem;
  secondaryCta?: CtaItem;
  trustBadges: string[];
}

export interface ProblemContent {
  title: string;
  body: string;
}

export interface StepContent {
  title: string;
  description: string;
  icon: string;
}

export interface StepFlowContent {
  eyebrow: string;
  title: string;
  steps: [StepContent, StepContent, StepContent];
}

export type Tone =
  | "blue"
  | "indigo"
  | "cyan"
  | "purple"
  | "rose"
  | "amber"
  | "emerald";

export interface CapabilityContent {
  icon: string;
  title: string;
  description: string;
  tone: Tone;
}

export interface DashboardPreviewContent {
  title: string;
  kind: "table" | "chart" | "feed" | "detail";
  columns?: string[];
  sampleRows?: string[][];
}

export interface IntegrationContent {
  icon: string;
  label: string;
  description?: string;
}

export interface UseCaseContent {
  persona: string;
  title: string;
  description: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CtaBannerContent {
  title: string;
  subtitle: string;
  primaryCta: CtaItem;
  secondaryCta?: CtaItem;
}

export interface RelatedPage {
  slug: string;
  title: string;
  description: string;
  href: string;
}

export interface LandingPageContent {
  slug: string;
  category: "Attack Surface" | "VulnIntel" | "Dark Web" | "ThreatFusion" | "Ops";
  metadata: {
    title: string;
    description: string;
  };
  breadcrumb: BreadcrumbItem[];
  hero: HeroContent;
  problem?: ProblemContent;
  howItWorks: StepFlowContent;
  capabilities: CapabilityContent[];
  dashboardPreview?: DashboardPreviewContent;
  integrations?: IntegrationContent[];
  useCases: UseCaseContent[];
  faq: FaqItem[];
  ctaBanner: CtaBannerContent;
  relatedPages: RelatedPage[];
}
