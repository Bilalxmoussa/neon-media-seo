import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getIndustryBySlug } from "@/config/industries";
import { generatePageMetadata } from "@/lib/metadata";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const industry = getIndustryBySlug("ecommerce");

export const metadata = industry
  ? generatePageMetadata({
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `${siteConfig.website}/web-design-ottawa/ecommerce`,
    })
  : {};

export default function EcommercePage() {
  if (!industry) return notFound();
  return <IndustryPageTemplate industry={industry} />;
}
