import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.website),
  title: siteConfig.seoTitle,
  description: siteConfig.seoDescription,
  keywords: [
    "web design Ottawa",
    "Ottawa web designer",
    "website development Ottawa",
    "SEO Ottawa",
    "local SEO Ottawa",
    "WordPress Ottawa",
    "e-commerce Ottawa",
    "web design Kanata",
    "web design Barrhaven",
    "Ottawa web agency",
  ],
  authors: [{ name: siteConfig.businessName }],
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    url: siteConfig.website,
    siteName: siteConfig.businessName,
    images: [
      {
        url: `${siteConfig.website}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.keyword} - ${siteConfig.businessName}`,
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    images: [`${siteConfig.website}${siteConfig.ogImage}`],
  },
  alternates: {
    canonical: siteConfig.website,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="MlHT0fiBm-JsKMFYFUK2T3q5iV1NDkjk4OBDuNcrjlA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.businessName,
              url: siteConfig.website,
              logo: siteConfig.logoUrl,
              email: siteConfig.email,
              sameAs: [],
            }),
          }}
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S9CCLFPMML"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S9CCLFPMML');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
