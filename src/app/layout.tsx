import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { IS_STATIC_EXPORT } from "@/lib/config";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.shortName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.shortName,
  publisher: siteConfig.legalName,
  category: "business",
  robots: IS_STATIC_EXPORT
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.shortName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Monitoring — gestión de activos y confiabilidad operacional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/logo-circular.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo-circular.svg",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.language} className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
