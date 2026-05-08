import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Safe Frontend API Synchronization`,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Vision Sync",
    "OpenAPI",
    "Next.js",
    "React",
    "TypeScript",
    "AST transforms",
    "frontend infrastructure",
    "API synchronization"
  ],
  authors: [{ name: siteConfig.developer.name }],
  creator: siteConfig.developer.name,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico"
  },
  openGraph: {
    title: `${siteConfig.name} - Safe Frontend API Synchronization`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Safe Frontend API Synchronization`,
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true
  }
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en" className="dark">
      <body className={poppins.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
