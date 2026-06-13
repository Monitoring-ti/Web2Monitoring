import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Monitoring | Ingeniería para la Confiabilidad Operacional",
  description:
    "Consultora latinoamericana especializada en ingeniería de confiabilidad, gestión de activos, excelencia operacional y supply chain. Transformamos conocimiento e ingeniería en resultados medibles.",
  keywords: [
    "confiabilidad operacional",
    "gestión de activos",
    "ingeniería de confiabilidad",
    "supply chain",
    "mantenimiento industrial",
    "consultora latinoamerica",
    "excelencia operacional",
    "asset management",
  ],
  authors: [{ name: "Monitoring Consultora" }],
  creator: "Monitoring",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://monitoring.cl",
    siteName: "Monitoring",
    title: "Monitoring | Ingeniería para la Confiabilidad Operacional",
    description:
      "Transformamos conocimiento, ingeniería y gestión de activos en resultados medibles para industrias intensivas en activos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monitoring | Ingeniería para la Confiabilidad Operacional",
    description:
      "Transformamos conocimiento, ingeniería y gestión de activos en resultados medibles para industrias intensivas en activos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
