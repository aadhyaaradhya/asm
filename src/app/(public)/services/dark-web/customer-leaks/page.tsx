import type { Metadata } from "next";
import LandingPageTemplate from "@/components/marketing/LandingPageTemplate";
import { customerLeaksPage } from "@/lib/landing-pages/customer-leaks";

export const metadata: Metadata = {
  title: customerLeaksPage.metadata.title,
  description: customerLeaksPage.metadata.description,
};

export default function CustomerLeaksLandingPage() {
  return <LandingPageTemplate page={customerLeaksPage} />;
}
