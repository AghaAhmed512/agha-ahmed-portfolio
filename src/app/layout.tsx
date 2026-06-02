import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.tagline,
  keywords: [
    "Software Automation Engineer",
    "SDET",
    "WebdriverIO",
    "TypeScript",
    "Test Automation",
    "QA Engineer",
    "KAYAK",
    "HireStream",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description: site.tagline,
    type: "website",
    locale: "en_US",
    images: [{ url: site.profileImage, alt: site.name }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
