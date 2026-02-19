import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getLocationBySlug } from "@/config/locations";
import LocationPageTemplate from "@/components/LocationPageTemplate";

const location = getLocationBySlug("gatineau");

export const metadata: Metadata = location
  ? {
      title: location.metaTitle,
      description: location.metaDescription,
      alternates: {
        canonical: `${siteConfig.website}/web-design-gatineau`,
      },
      openGraph: {
        title: location.metaTitle,
        description: location.metaDescription,
        url: `${siteConfig.website}/web-design-gatineau`,
        siteName: siteConfig.businessName,
        locale: "en_CA",
        type: "website",
      },
    }
  : {};

export default function GatineauPage() {
  if (!location) return notFound();
  return <LocationPageTemplate location={location} />;
}
