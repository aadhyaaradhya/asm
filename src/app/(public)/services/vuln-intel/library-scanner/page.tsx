import type { Metadata } from "next";
import LandingPageTemplate from "@/components/marketing/LandingPageTemplate";
import { libraryScannerPage } from "@/lib/landing-pages/library-scanner";

export const metadata: Metadata = {
  title: libraryScannerPage.metadata.title,
  description: libraryScannerPage.metadata.description,
};

export default function LibraryScannerLandingPage() {
  return <LandingPageTemplate page={libraryScannerPage} />;
}
