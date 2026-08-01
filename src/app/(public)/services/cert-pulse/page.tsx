import type { Metadata } from "next";
import LandingPageTemplate from "@/components/marketing/LandingPageTemplate";
import { certPulsePage } from "@/lib/landing-pages/cert-pulse";

export const metadata: Metadata = {
  title: certPulsePage.metadata.title,
  description: certPulsePage.metadata.description,
};

export default function CertPulseLandingPage() {
  return <LandingPageTemplate page={certPulsePage} />;
}
