import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getIndustryBySlug } from "@/config/industries";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const industry = getIndustryBySlug("contractors");

export const metadata: Metadata = industry
  ? {
      title: industry.metaTitle,
      description: industry.metaDescription,
      alternates: {
        canonical: `${siteConfig.website}/web-design-ottawa/contractors`,
      },
      openGraph: {
        title: industry.metaTitle,
        description: industry.metaDescription,
        url: `${siteConfig.website}/web-design-ottawa/contractors`,
        siteName: siteConfig.businessName,
        locale: "en_CA",
        type: "website",
      },
    }
  : {};

export default function ContractorsPage() {
  if (!industry) return notFound();
  return <IndustryPageTemplate industry={industry} />;
}
