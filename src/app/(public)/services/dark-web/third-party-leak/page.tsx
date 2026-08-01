import type { Metadata } from "next";
import LandingPageTemplate from "@/components/marketing/LandingPageTemplate";
import { thirdPartyLeakPage } from "@/lib/landing-pages/third-party-leak";

export const metadata: Metadata = {
  title: thirdPartyLeakPage.metadata.title,
  description: thirdPartyLeakPage.metadata.description,
};

export default function ThirdPartyLeakLandingPage() {
  return <LandingPageTemplate page={thirdPartyLeakPage} />;
}
