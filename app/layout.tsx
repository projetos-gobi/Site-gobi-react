import type { Metadata } from "next";
import { Roboto_Condensed, Lexend } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["300", "700", "900"],
});

export const metadata: Metadata = {
  title: "Gobi Consulting",
  description: "Expertise em gestão que garante transformar seu negócio com uso da tecnologia de forma inteligente.",
  keywords: "consultoria, tecnologia, transformação digital, inovação",
  authors: [{ name: "Gobi Consulting" }],
  openGraph: {
    type: "website",
    title: "Gobi",
    description: "Consultoria em tecnologia alinhada ao negócio",
    url: "https://gobi.consulting",
    siteName: "Gobi",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Gobi Consulting",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Gobi",
    description: "Consultoria em tecnologia alinhada ao negócio",
    images: ["/android-chrome-192x192.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://gobi.consulting",
    languages: {
      "pt-BR": "https://gobi.consulting",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${robotoCondensed.variable} ${lexend.variable} antialiased`}
      >
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" strategy="afterInteractive" />
      </body>
    </html>
  );
}
