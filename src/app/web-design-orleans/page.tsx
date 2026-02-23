import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getLocationBySlug } from "@/config/locations";
import { generatePageMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const location = getLocationBySlug("orleans");

export const metadata = location
  ? generatePageMetadata({
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${siteConfig.website}/web-design-orleans`,
    })
  : {};

export default function OrleansPage() {
  if (!location) return notFound();
  return <LocationPageTemplate location={location} />;
}
