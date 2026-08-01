import type { Metadata } from "next";
import LandingPageTemplate from "@/components/marketing/LandingPageTemplate";
import { cardLeaksPage } from "@/lib/landing-pages/card-leaks";

export const metadata: Metadata = {
  title: cardLeaksPage.metadata.title,
  description: cardLeaksPage.metadata.description,
};

export default function CardLeaksLandingPage() {
  return <LandingPageTemplate page={cardLeaksPage} />;
}
