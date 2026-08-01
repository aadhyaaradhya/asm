import type { Metadata } from "next";
import LandingPageTemplate from "@/components/marketing/LandingPageTemplate";
import { employeeLeaksPage } from "@/lib/landing-pages/employee-leaks";

export const metadata: Metadata = {
  title: employeeLeaksPage.metadata.title,
  description: employeeLeaksPage.metadata.description,
};

export default function EmployeeLeaksLandingPage() {
  return <LandingPageTemplate page={employeeLeaksPage} />;
}
