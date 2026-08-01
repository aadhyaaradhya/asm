import type { Metadata } from "next";
import LandingPageTemplate from "@/components/marketing/LandingPageTemplate";
import { headerHealthPage } from "@/lib/landing-pages/header-health";

export const metadata: Metadata = {
  title: headerHealthPage.metadata.title,
  description: headerHealthPage.metadata.description,
};

export default function HeaderHealthLandingPage() {
  return <LandingPageTemplate page={headerHealthPage} />;
}
