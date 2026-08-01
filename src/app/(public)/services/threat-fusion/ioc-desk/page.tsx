import type { Metadata } from "next";
import LandingPageTemplate from "@/components/marketing/LandingPageTemplate";
import { iocDeskPage } from "@/lib/landing-pages/ioc-desk";

export const metadata: Metadata = {
  title: iocDeskPage.metadata.title,
  description: iocDeskPage.metadata.description,
};

export default function IOCDeskLandingPage() {
  return <LandingPageTemplate page={iocDeskPage} />;
}
