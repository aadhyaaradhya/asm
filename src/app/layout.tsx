import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aadhya Aaradhya ASM",
  description: "Attack Surface Management & Threat Intelligence Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
