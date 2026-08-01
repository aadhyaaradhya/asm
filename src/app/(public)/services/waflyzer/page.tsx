import type { Metadata } from "next";
import LandingPageTemplate from "@/components/marketing/LandingPageTemplate";
import { waflyzerPage } from "@/lib/landing-pages/waflyzer";

export const metadata: Metadata = {
  title: waflyzerPage.metadata.title,
  description: waflyzerPage.metadata.description,
};

export default function WAFlyzerLandingPage() {
  return <LandingPageTemplate page={waflyzerPage} />;
}
