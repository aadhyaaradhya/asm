export interface SecurityScoreData {
  score: number;
  grade: string;
  pointsDelta: number;
  riskLevel: string;
  riskSubtitle: string;
}

export interface SparklineItem {
  id: string;
  title: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "flat";
  statusText: string;
  tone: "red" | "purple" | "orange" | "yellow" | "cyan";
  dataPoints: number[];
}

export interface DiscoveredAsset {
  subdomain: string;
  type: string;
  visibility: "Public" | "Internal" | "Unmanaged";
  techStack: string;
  ports: string;
  riskScore: number;
}

export interface DarkWebExposureItem {
  id: string;
  type: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  maskedAccount: string;
  recordsCount: string;
  source: string;
  timeAgo: string;
}

export interface ThreatRadarData {
  category: string;
  score: number;
}

export interface CorrelationNode {
  id: string;
  label: string;
  type: "Domain" | "Campaign" | "IP" | "Threat Actor" | "URL" | "Malware" | "Credential Exposure" | "Asset";
  value: string;
  tone: string;
}

export interface CorrelationLink {
  source: string;
  target: string;
}

export interface AttackPathStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  score?: number;
}

export interface ScanDelta {
  baselineDate: string;
  newAssets: number;
  newCriticalFindings: number;
  newCredentialExposures: number;
  newSuspiciousDomains: number;
  findingsResolved: number;
  scoreOld: number;
  scoreNew: number;
}

export interface ModuleHealthItem {
  id: string;
  name: string;
  status: "HIGH RISK" | "WARNING" | "ACTIVE" | "NEW";
  details: string;
  href: string;
}

export interface FindingItem {
  id: string;
  title: string;
  module: string;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  riskScore: number;
  asset: string;
  location: string;
  lastSeen: string;
  status: "Open" | "Investigating" | "Mitigated";
  details?: {
    cve?: string;
    description: string;
    affectedComponent: string;
    recommendation: string;
    evidence: string;
  };
}

export const mockSecurityScore: SecurityScoreData = {
  score: 31,
  grade: "GRADE D",
  pointsDelta: -4,
  riskLevel: "HIGH RISK",
  riskSubtitle: "Critical Exposure across modules",
};

export const mockSparklines: SparklineItem[] = [
  {
    id: "active-threats",
    title: "ACTIVE THREATS",
    value: "19",
    delta: "↗ 12%",
    trend: "up",
    statusText: "Escalating",
    tone: "red",
    dataPoints: [8, 12, 10, 15, 14, 18, 19],
  },
  {
    id: "critical-findings",
    title: "CRITICAL FINDINGS",
    value: "16",
    delta: "↗ 8%",
    trend: "up",
    statusText: "Action required",
    tone: "red",
    dataPoints: [10, 11, 14, 12, 15, 13, 16],
  },
  {
    id: "exposed-assets",
    title: "EXPOSED ASSETS",
    value: "9",
    delta: "↗ 4%",
    trend: "up",
    statusText: "Monitored",
    tone: "orange",
    dataPoints: [5, 6, 7, 8, 7, 9, 9],
  },
  {
    id: "dark-web-exposures",
    title: "DARK WEB EXPOSURES",
    value: "18",
    delta: "↗ 15%",
    trend: "up",
    statusText: "New activity",
    tone: "purple",
    dataPoints: [11, 13, 12, 16, 15, 17, 18],
  },
  {
    id: "leaked-credentials",
    title: "LEAKED CREDENTIALS",
    value: "8,244",
    delta: "↗ 22%",
    trend: "up",
    statusText: "Masked",
    tone: "purple",
    dataPoints: [6000, 6800, 7100, 7500, 7900, 8100, 8244],
  },
  {
    id: "card-exposures",
    title: "CARD / BIN EXPOSURES",
    value: "4",
    delta: "↘ 6%",
    trend: "down",
    statusText: "Under review",
    tone: "yellow",
    dataPoints: [6, 5, 5, 4, 5, 4, 4],
  },
  {
    id: "malicious-ips",
    title: "MALICIOUS IPS",
    value: "13",
    delta: "↗ 9%",
    trend: "up",
    statusText: "Blocklist advised",
    tone: "red",
    dataPoints: [8, 9, 11, 10, 12, 11, 13],
  },
  {
    id: "suspicious-domains",
    title: "SUSPICIOUS DOMAINS",
    value: "20",
    delta: "↗ 5%",
    trend: "up",
    statusText: "Under review",
    tone: "cyan",
    dataPoints: [14, 15, 17, 16, 18, 19, 20],
  },
];

export const mockDiscoveredAssets: DiscoveredAsset[] = [
  { subdomain: "vpn.apexnationalbank.com", type: "Subdomain", visibility: "Public", techStack: "nginx 1.18", ports: "443, 22, 3389", riskScore: 82 },
  { subdomain: "legacy.apexnationalbank.com", type: "Subdomain", visibility: "Public", techStack: "Apache 2.4", ports: "443, 80", riskScore: 93 },
  { subdomain: "portal.apexnationalbank.com", type: "Subdomain", visibility: "Internal", techStack: "IIS 10", ports: "443", riskScore: 83 },
  { subdomain: "api.apexnationalbank.com", type: "Application", visibility: "Public", techStack: "Cloudflare", ports: "443, 80, 22", riskScore: 91 },
  { subdomain: "mail.apexnationalbank.com", type: "Subdomain", visibility: "Unmanaged", techStack: "F5 BIG-IP", ports: "443, 3389", riskScore: 56 },
  { subdomain: "www.apexnationalbank.com", type: "Subdomain", visibility: "Internal", techStack: "nginx 1.18", ports: "443, 80", riskScore: 61 },
];

export const mockDarkWebExposures: DarkWebExposureItem[] = [
  { id: "1", type: "Credential Leak", severity: "MEDIUM", maskedAccount: "s****@apexnationalbank.com", recordsCount: "3,383 records", source: "Combolist Dump", timeAgo: "34d ago" },
  { id: "2", type: "Card / BIN Exposure", severity: "HIGH", maskedAccount: "4•••01•• (masked)", recordsCount: "1,489 records", source: "Carding Market", timeAgo: "37d ago" },
  { id: "3", type: "Third-Party Leak", severity: "LOW", maskedAccount: "m****@apexnationalbank.com", recordsCount: "1,919 records", source: "Ransomware Blog", timeAgo: "22d ago" },
  { id: "4", type: "Company Mention", severity: "LOW", maskedAccount: "hr****@apexnationalbank.com", recordsCount: "2,222 records", source: "Paste Site", timeAgo: "14d ago" },
  { id: "5", type: "Domain Mention", severity: "LOW", maskedAccount: "s****@apexnationalbank.com", recordsCount: "4,149 records", source: "Telegram Channel", timeAgo: "37d ago" },
  { id: "6", type: "Credential Leak", severity: "MEDIUM", maskedAccount: "a****@apexnationalbank.com", recordsCount: "1,050 records", source: "Breach Forum", timeAgo: "56d ago" },
];

export const mockThreatRadar: ThreatRadarData[] = [
  { category: "Brand", score: 75 },
  { category: "Infrastructure", score: 90 },
  { category: "Dark Web", score: 85 },
  { category: "Vulnerability", score: 88 },
  { category: "Email", score: 45 },
  { category: "Supply Chain", score: 82 },
  { category: "Reputation", score: 65 },
];

export const mockCorrelationNodes: CorrelationNode[] = [
  { id: "n1", label: "Campaign", type: "Campaign", value: "CAMP-RAVENQUILL", tone: "emerald" },
  { id: "n2", label: "Domain", type: "Domain", value: "secure-apexnationalbank.com", tone: "cyan" },
  { id: "n3", label: "IP", type: "IP", value: "201.146.103.73", tone: "rose" },
  { id: "n4", label: "Threat Actor", type: "Threat Actor", value: "Actor: RAVENQUILL", tone: "rose" },
  { id: "n5", label: "URL", type: "URL", value: "secure-apexnationalbank.com/login", tone: "amber" },
  { id: "n6", label: "Malware", type: "Malware", value: "RedLine Stealer", tone: "amber" },
  { id: "n7", label: "Credential Exposure", type: "Credential Exposure", value: "s****@apexnationalbank.com", tone: "purple" },
  { id: "n8", label: "Asset", type: "Asset", value: "vpn.apexnationalbank.com", tone: "blue" },
];

export const mockAttackPathSteps: AttackPathStep[] = [
  { stepNumber: 1, title: "Internet", subtitle: "Untrusted origin traffic" },
  { stepNumber: 2, title: "Exposed VPN — vpn.apexnationalbank.com", subtitle: "Management plane reachable publicly", score: 92 },
  { stepNumber: 3, title: "Known CVE-2026-21883", subtitle: "Exploited in the wild, patch available", score: 88 },
  { stepNumber: 4, title: "Credential Exposure", subtitle: "Employee credentials seen in combolist", score: 84 },
  { stepNumber: 5, title: "Critical Asset — Core Banking API", subtitle: "Business-critical, tier-0 data", score: 96 },
];

export const mockScanDelta: ScanDelta = {
  baselineDate: "30 Jul 2026 18:45",
  newAssets: 5,
  newCriticalFindings: 1,
  newCredentialExposures: 2,
  newSuspiciousDomains: 6,
  findingsResolved: 7,
  scoreOld: 35,
  scoreNew: 31,
};

export const mockModuleHealth: ModuleHealthItem[] = [
  { id: "brandguard", name: "BrandGuard", status: "WARNING", details: "0 critical · 5 high", href: "/client/takedowns" },
  { id: "assetscope", name: "AssetScope", status: "HIGH RISK", details: "2 critical · 1 high", href: "/client/subdomain-takeover" },
  { id: "mailshield", name: "MailShield", status: "ACTIVE", details: "8 monitored · nominal", href: "/client/header-health" },
  { id: "reputrac", name: "RepuTrac", status: "ACTIVE", details: "8 monitored · healthy", href: "/client/threat-fusion/ioc-desk" },
  { id: "infrasight", name: "InfraSight", status: "HIGH RISK", details: "3 critical · 2 high", href: "/client/cert-pulse" },
  { id: "surfacewatch", name: "SurfaceWatch", status: "HIGH RISK", details: "2 critical · 1 high", href: "/client/waflyzer" },
  { id: "vulnintel", name: "VulnIntel", status: "HIGH RISK", details: "2 critical · 2 high", href: "/client/vuln-intel/vulnerabilities" },
  { id: "darkweb", name: "Dark Web", status: "NEW", details: "4 new exposures", href: "/client/dark-web/employee-leaks" },
  { id: "threatintel", name: "Threat Intelligence", status: "ACTIVE", details: "6 monitored · nominal", href: "/client/threat-fusion/ransome-hive" },
  { id: "supplychain", name: "Supply Chain", status: "HIGH RISK", details: "2 critical · 3 high", href: "/client/dark-web/third-party-leak" },
];

export const mockFindings: FindingItem[] = [
  {
    id: "T360-APE-1059",
    title: "Corporate egress IP listed on abuse blacklist",
    module: "RepuTrac",
    severity: "CRITICAL",
    riskScore: 97,
    asset: "181.6.91.148",
    location: "Singapore, Singapore",
    lastSeen: "04 Jul 2026",
    status: "Mitigated",
    details: {
      cve: "IP-ABUSE-97",
      description: "Corporate egress gateway IP 181.6.91.148 has been flagged on 3 public spam and brute-force blacklists due to outgoing automated probes.",
      affectedComponent: "Gateway Router / Egress Firewall",
      recommendation: "Inspect outgoing internal traffic from host 181.6.91.148 for compromised workload or stealer bot process.",
      evidence: "HTTP Probe Log: GET /abuse/check?ip=181.6.91.148 -> Result: 3 Active Listings",
    },
  },
  {
    id: "T360-APE-1013",
    title: "Management interface exposed on port 3389",
    module: "SurfaceWatch",
    severity: "CRITICAL",
    riskScore: 96,
    asset: "vpn.apexnationalbank.com",
    location: "Sydney, Australia",
    lastSeen: "16 Jun 2026",
    status: "Investigating",
    details: {
      description: "RDP service port 3389 is exposed to the public internet without IP whitelist or multi-factor gateway protection.",
      affectedComponent: "Windows Server 2022 RDP Gateway",
      recommendation: "Restrict port 3389 access to VPN IP range or disable public binding immediately.",
      evidence: "Nmap scan output: 3389/tcp open ms-wbt-server SYN Stealth Scan",
    },
  },
  {
    id: "T360-APE-1068",
    title: "Employee credential set exposed in combolist",
    module: "Dark Web",
    severity: "CRITICAL",
    riskScore: 96,
    asset: "portal.apexnationalbank.com",
    location: "Tokyo, Japan",
    lastSeen: "28 May 2026",
    status: "Mitigated",
    details: {
      description: "Cleartext credentials for 3,383 corporate email accounts identified in a recent dark web stealer log dump.",
      affectedComponent: "Okta SSO / Azure AD",
      recommendation: "Enforce mandatory password reset and revoke active session tokens for exposed employee IDs.",
      evidence: "Dump signature: MegaCombo_2026_Part4.txt (Matched 3,383 rows)",
    },
  },
  {
    id: "T360-APE-1041",
    title: "CVE-2026-21883 exploited in the wild affects edge VPN",
    module: "VulnIntel",
    severity: "CRITICAL",
    riskScore: 95,
    asset: "vpn.apexnationalbank.com",
    location: "Frankfurt, Germany",
    lastSeen: "30 Jul 2026",
    status: "Mitigated",
    details: {
      cve: "CVE-2026-21883",
      description: "Pre-auth remote code execution flaw in Ivanti / Fortinet SSL VPN appliance exposed to public traffic.",
      affectedComponent: "Ivanti Connect Secure v9.1R14",
      recommendation: "Apply vendor emergency patch v9.1R18 or isolate appliance behind gateway.",
      evidence: "HTTP GET /api/v1/totp/user-backup-code -> 200 OK (Vulnerable version signature)",
    },
  },
  {
    id: "T360-APE-1055",
    title: "Previously unknown subdomain discovered on apexnationalbank.com",
    module: "AssetScope",
    severity: "CRITICAL",
    riskScore: 94,
    asset: "legacy.apexnationalbank.com",
    location: "Lagos, Nigeria",
    lastSeen: "26 Jul 2026",
    status: "Investigating",
    details: {
      description: "Unmonitored staging subdomain legacy.apexnationalbank.com discovered running outdated Apache 2.4.6 web server.",
      affectedComponent: "AWS EC2 Instance (unmanaged)",
      recommendation: "Verify ownership, restrict public DNS CNAME, or decommission retired server.",
      evidence: "Passive DNS Record: legacy.apexnationalbank.com CNAME ec2-54-210-14.amazonaws.com",
    },
  },
  {
    id: "T360-APE-1015",
    title: "Missing HSTS and CSP headers on customer portal",
    module: "SurfaceWatch",
    severity: "CRITICAL",
    riskScore: 93,
    asset: "portal.apexnationalbank.com",
    location: "Singapore, Singapore",
    lastSeen: "31 Jul 2026",
    status: "Open",
    details: {
      description: "HTTP response headers lack Strict-Transport-Security (HSTS) and Content-Security-Policy (CSP), exposing users to downgrade and XSS attacks.",
      affectedComponent: "IIS 10 Web Server Config",
      recommendation: "Configure HSTS with max-age=31536000 and enforce strict Content-Security-Policy.",
      evidence: "Header check: Strict-Transport-Security: MISSING | Content-Security-Policy: MISSING",
    },
  },
  {
    id: "T360-APE-1046",
    title: "Tier-1 payment vendor disclosed security incident",
    module: "Supply Chain",
    severity: "CRITICAL",
    riskScore: 93,
    asset: "paylink-services.com",
    location: "Tokyo, Japan",
    lastSeen: "20 Jul 2026",
    status: "Investigating",
    details: {
      description: "Third-party payment gateway vendor Paylink Services listed on ransomware blog with alleged internal customer database dump.",
      affectedComponent: "Payment API Integration",
      recommendation: "Revoke API keys connected to Paylink Services and audit transaction logs.",
      evidence: "Ransomware Blog Notice: LockBit 3.0 listing 'Paylink Services Ltd (300 GB data)'",
    },
  },
  {
    id: "T360-APE-1011",
    title: "TLS certificate expiring in 9 days on public endpoint",
    module: "InfraSight",
    severity: "CRITICAL",
    riskScore: 92,
    asset: "api.apexnationalbank.com",
    location: "Lagos, Nigeria",
    lastSeen: "02 Jul 2026",
    status: "Mitigated",
    details: {
      description: "Public TLS certificate issued by Sectigo expires in less than 10 days, risking API client downtime.",
      affectedComponent: "Cloudflare SSL Edge Certificate",
      recommendation: "Trigger ACME auto-renewal or re-issue certificate before expiration.",
      evidence: "Cert Details: CN=api.apexnationalbank.com Valid Until: 2026-08-10",
    },
  },
];
