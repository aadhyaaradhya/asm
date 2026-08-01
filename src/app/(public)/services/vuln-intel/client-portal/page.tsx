import type { Metadata } from "next";
import LandingPageTemplate from "@/components/marketing/LandingPageTemplate";
import { clientPortalPage } from "@/lib/landing-pages/client-portal";

export const metadata: Metadata = {
  title: clientPortalPage.metadata.title,
  description: clientPortalPage.metadata.description,
};

export default function ClientPortalLandingPage() {
  return <LandingPageTemplate page={clientPortalPage} />;
}
