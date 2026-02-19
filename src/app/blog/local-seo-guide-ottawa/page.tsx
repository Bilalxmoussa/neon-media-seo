import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug } from "@/config/blog-posts";
import BlogPostTemplate from "@/components/BlogPostTemplate";

const post = getBlogPostBySlug("local-seo-guide-ottawa");

export const metadata: Metadata = post
  ? {
      title: post.metaTitle,
      description: post.metaDescription,
      alternates: {
        canonical: `${siteConfig.website}/blog/local-seo-guide-ottawa`,
      },
      openGraph: {
        title: post.metaTitle,
        description: post.metaDescription,
        url: `${siteConfig.website}/blog/local-seo-guide-ottawa`,
        siteName: siteConfig.businessName,
        locale: "en_CA",
        type: "article",
      },
    }
  : {};

export default function LocalSeoGuideOttawaPage() {
  if (!post) return notFound();
  return <BlogPostTemplate post={post} />;
}
