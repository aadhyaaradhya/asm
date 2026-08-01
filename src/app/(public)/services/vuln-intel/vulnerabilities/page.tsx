import type { Metadata } from "next";
import LandingPageTemplate from "@/components/marketing/LandingPageTemplate";
import { vulnerabilitiesPage } from "@/lib/landing-pages/vulnerabilities";

export const metadata: Metadata = {
  title: vulnerabilitiesPage.metadata.title,
  description: vulnerabilitiesPage.metadata.description,
};

export default function VulnerabilitiesLandingPage() {
  return <LandingPageTemplate page={vulnerabilitiesPage} />;
}
