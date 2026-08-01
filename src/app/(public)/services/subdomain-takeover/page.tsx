import type { Metadata } from "next";
import LandingPageTemplate from "@/components/marketing/LandingPageTemplate";
import { subdomainTakeoverPage } from "@/lib/landing-pages/subdomain-takeover";

export const metadata: Metadata = {
  title: subdomainTakeoverPage.metadata.title,
  description: subdomainTakeoverPage.metadata.description,
};

export default function SubdomainTakeoverLandingPage() {
  return <LandingPageTemplate page={subdomainTakeoverPage} />;
}
