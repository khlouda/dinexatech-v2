import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dinexatech.com"),
  title: "DinexaTech — Your business, beautifully online.",
  description:
    "DinexaTech builds beautiful, fast websites for small businesses in Norfolk, VA and beyond. Done in 5–7 days, priced for real businesses.",
  keywords: ["web design", "small business website", "Norfolk VA", "website design", "bakery website", "restaurant website", "salon website"],
  openGraph: {
    title: "DinexaTech — Your business, beautifully online.",
    description:
      "Beautiful, fast websites for small businesses. Done in 5–7 days, priced to make sense.",
    images: [{ url: "/og-placeholder.png", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DinexaTech — Your business, beautifully online.",
    description: "Beautiful, fast websites for small businesses. Done in 5–7 days.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} light`}>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Providers>
          <Nav />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
