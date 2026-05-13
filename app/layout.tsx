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
  title: "DinexaTech — Websites, perfected.",
  description:
    "Custom websites, ordering systems, and dashboards for small businesses. Engineered like enterprise. Delivered in days.",
  openGraph: {
    title: "DinexaTech — Websites, perfected.",
    description:
      "Custom websites, ordering systems, and dashboards for small businesses. Engineered like enterprise. Delivered in days.",
    images: [{ url: "/og-placeholder.png", width: 1200, height: 630 }],
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
