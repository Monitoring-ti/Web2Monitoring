import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "@/app/globals.css";
import { localeOg, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
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

export function buildRootMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: dict.meta.title,
      template: `%s | ${siteConfig.shortName}`,
    },
    description: dict.meta.description,
    keywords: [...dict.meta.keywords],
    verification: {
      google: "LkyUB-qh7NJ-XoI5PGq2K1Jn34ycHi0LZv8FhU6zJw0",
      other: {
        "msvalidate.01": "DFEEEF7159B886D9142294319E40783B",
      },
    },
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
      locale: localeOg[locale],
      siteName: siteConfig.shortName,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: dict.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
    icons: {
      icon: [{ url: "/logo-circular.svg", type: "image/svg+xml" }],
      shortcut: "/logo-circular.svg",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default function RootDocument({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
