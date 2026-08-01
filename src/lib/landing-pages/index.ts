import { subdomainTakeoverPage } from "./subdomain-takeover";
import { headerHealthPage } from "./header-health";
import { certPulsePage } from "./cert-pulse";
import { waflyzerPage } from "./waflyzer";
import { vulnerabilitiesPage } from "./vulnerabilities";
import { libraryScannerPage } from "./library-scanner";
import { clientPortalPage } from "./client-portal";
import { cardLeaksPage } from "./card-leaks";
import { customerLeaksPage } from "./customer-leaks";
import { employeeLeaksPage } from "./employee-leaks";
import { thirdPartyLeakPage } from "./third-party-leak";
import { ransomeHivePage } from "./ransome-hive";
import { iocDeskPage } from "./ioc-desk";
import { takedownsPage } from "./takedowns";
import type { LandingPageContent } from "./types";

export const landingPagesRegistry: Record<string, LandingPageContent> = {
  "subdomain-takeover": subdomainTakeoverPage,
  "header-health": headerHealthPage,
  "cert-pulse": certPulsePage,
  "waflyzer": waflyzerPage,
  "vulnerabilities": vulnerabilitiesPage,
  "library-scanner": libraryScannerPage,
  "client-portal": clientPortalPage,
  "card-leaks": cardLeaksPage,
  "customer-leaks": customerLeaksPage,
  "employee-leaks": employeeLeaksPage,
  "third-party-leak": thirdPartyLeakPage,
  "ransome-hive": ransomeHivePage,
  "ioc-desk": iocDeskPage,
  "takedowns": takedownsPage,
};

export const allLandingPages: LandingPageContent[] = Object.values(landingPagesRegistry);

export * from "./types";
