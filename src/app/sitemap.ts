import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { industries } from "@/config/industries";
import { blogPosts } from "@/config/blog-posts";
import { locations } from "@/config/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const locationPages = locations.map((location) => ({
    url: `${siteConfig.website}/web-design-${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryPages = industries.map((industry) => ({
    url: `${siteConfig.website}/web-design-ottawa/${industry.slug}`,
    lastModified: new Date(),
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
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.website}/seo-ottawa`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.website}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...locationPages,
    ...industryPages,
    ...blogPages,
  ];
}
