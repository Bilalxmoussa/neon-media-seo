import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getLocationBySlug } from "@/config/locations";
import { generatePageMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const location = getLocationBySlug("nepean");

export const metadata = location
  ? generatePageMetadata({
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${siteConfig.website}/web-design-nepean`,
    })
  : {};

export default function NepeanPage() {
  if (!location) return notFound();
  return <LocationPageTemplate location={location} />;
}
