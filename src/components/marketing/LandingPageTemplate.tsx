"use client";

import React from "react";
import Breadcrumb from "./Breadcrumb";
import MarketingHero from "./MarketingHero";
import ProblemBlock from "./ProblemBlock";
import HowItWorksFlow from "./HowItWorksFlow";
import FeatureCard from "./FeatureCard";
import DashboardPreviewMock from "./DashboardPreviewMock";
import IntegrationGrid from "./IntegrationCard";
import UseCaseSection from "./UseCaseCard";
import FaqAccordion from "./FaqAccordion";
import CtaBanner from "./CtaBanner";
import RelatedPagesRail from "./RelatedPagesRail";
import SectionHeading from "./SectionHeading";
import type { LandingPageContent } from "@/lib/landing-pages/types";

export interface LandingPageTemplateProps {
  page: LandingPageContent;
}

export function LandingPageTemplate({ page }: LandingPageTemplateProps) {
  return (
    <div className="space-y-24 pb-20 text-white overflow-hidden">
      {/* 0. Breadcrumb */}
      {page.breadcrumb && <Breadcrumb items={page.breadcrumb} />}

      {/* 1. Hero */}
      <MarketingHero hero={page.hero} />

      {/* Related Pages Top Rail */}
      {page.relatedPages && <RelatedPagesRail relatedPages={page.relatedPages} />}

      {/* 2. Problem Section (Optional) */}
      {page.problem && <ProblemBlock problem={page.problem} />}

      {/* 3. How It Works Flow */}
      <HowItWorksFlow flow={page.howItWorks} />

      {/* 4. Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="CAPABILITIES"
          title="Key Features & Core Architecture"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {page.capabilities.map((cap, idx) => (
            <FeatureCard key={idx} capability={cap} />
          ))}
        </div>
      </section>

      {/* 5. Dashboard Preview (Optional) */}
      {page.dashboardPreview && (
        <DashboardPreviewMock preview={page.dashboardPreview} />
      )}

      {/* 6. Integrations Grid (Optional) */}
      {page.integrations && (
        <IntegrationGrid integrations={page.integrations} />
      )}

      {/* 7. Use Cases */}
      <UseCaseSection useCases={page.useCases} />

      {/* 8. FAQ */}
      <FaqAccordion items={page.faq} />

      {/* 9. Bottom CTA Banner */}
      <CtaBanner ctaBanner={page.ctaBanner} />
    </div>
  );
}

export default LandingPageTemplate;
