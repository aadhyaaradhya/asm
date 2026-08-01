import type { Metadata } from "next";
import LandingPageTemplate from "@/components/marketing/LandingPageTemplate";
import { takedownsPage } from "@/lib/landing-pages/takedowns";

export const metadata: Metadata = {
  title: takedownsPage.metadata.title,
  description: takedownsPage.metadata.description,
};

export default function TakedownsLandingPage() {
  return <LandingPageTemplate page={takedownsPage} />;
}
