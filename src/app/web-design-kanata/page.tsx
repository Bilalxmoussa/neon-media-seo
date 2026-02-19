import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getLocationBySlug } from "@/config/locations";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const location = getLocationBySlug("kanata");

export const metadata: Metadata = location
  ? {
      title: location.metaTitle,
      description: location.metaDescription,
      alternates: {
        canonical: `${siteConfig.website}/web-design-kanata`,
      },
      openGraph: {
        title: location.metaTitle,
        description: location.metaDescription,
        url: `${siteConfig.website}/web-design-kanata`,
        siteName: siteConfig.businessName,
        locale: "en_CA",
        type: "website",
      },
    }
  : {};

export default function KanataPage() {
  if (!location) return notFound();
  return <LocationPageTemplate location={location} />;
}
