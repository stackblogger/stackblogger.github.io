import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://opensource.stackblogger.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "opensource · stackblogger",
    template: "%s · opensource",
  },
  description:
    "Open source tools and libraries from Stackblogger: small surface area, fast defaults, and docs you can trust.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "opensource",
    title: "opensource · stackblogger",
    description:
      "Open source tools and libraries from Stackblogger: small surface area, fast defaults, and docs you can trust.",
  },
  twitter: {
    card: "summary_large_image",
    title: "opensource · stackblogger",
    description:
      "Open source tools and libraries from Stackblogger: small surface area, fast defaults, and docs you can trust.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
