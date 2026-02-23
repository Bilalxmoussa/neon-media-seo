import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { industries } from "@/config/industries";
import { blogPosts } from "@/config/blog-posts";
import { locations } from "@/config/locations";

const LAST_CONTENT_UPDATE = new Date("2026-02-20");

export default function sitemap(): MetadataRoute.Sitemap {
  const locationPages = locations.map((location) => ({
    url: `${siteConfig.website}/web-design-${location.slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryPages = industries.map((industry) => ({
    url: `${siteConfig.website}/web-design-ottawa/${industry.slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${siteConfig.website}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.website,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.website}/seo-ottawa`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.website}/web-design-ottawa`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.website}/website-development-ottawa`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.website}/blog`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...locationPages,
    ...industryPages,
    ...blogPages,
  ];
}
