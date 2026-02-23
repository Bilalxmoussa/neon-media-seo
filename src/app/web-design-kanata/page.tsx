import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getLocationBySlug } from "@/config/locations";
import { generatePageMetadata } from "@/lib/metadata";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const location = getLocationBySlug("kanata");

export const metadata = location
  ? generatePageMetadata({
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${siteConfig.website}/web-design-kanata`,
    })
  : {};

export default function KanataPage() {
  if (!location) return notFound();
  return <LocationPageTemplate location={location} />;
}
