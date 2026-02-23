import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
}

export function generatePageMetadata({
  title,
  description,
  url,
  type = "website",
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.businessName,
      images: [
        {
          url: `${siteConfig.website}${siteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteConfig.businessName}`,
        },
      ],
      locale: "en",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.website}${siteConfig.ogImage}`],
    },
  };
}
