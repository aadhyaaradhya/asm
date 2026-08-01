import type { Metadata } from "next";
import LandingPageTemplate from "@/components/marketing/LandingPageTemplate";
import { ransomeHivePage } from "@/lib/landing-pages/ransome-hive";

export const metadata: Metadata = {
  title: ransomeHivePage.metadata.title,
  description: ransomeHivePage.metadata.description,
};

export default function RansomeHiveLandingPage() {
  return <LandingPageTemplate page={ransomeHivePage} />;
}
