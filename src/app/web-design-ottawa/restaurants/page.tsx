import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getIndustryBySlug } from "@/config/industries";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const industry = getIndustryBySlug("restaurants");

export const metadata: Metadata = industry
  ? {
      title: industry.metaTitle,
      description: industry.metaDescription,
      alternates: {
        canonical: `${siteConfig.website}/web-design-ottawa/restaurants`,
      },
      openGraph: {
        title: industry.metaTitle,
        description: industry.metaDescription,
        url: `${siteConfig.website}/web-design-ottawa/restaurants`,
        siteName: siteConfig.businessName,
        locale: "en_CA",
        type: "website",
      },
    }
  : {};

export default function RestaurantsPage() {
  if (!industry) return notFound();
  return <IndustryPageTemplate industry={industry} />;
}
