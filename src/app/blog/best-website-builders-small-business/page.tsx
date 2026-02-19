import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug } from "@/config/blog-posts";
import BlogPostTemplate from "@/components/BlogPostTemplate";

const post = getBlogPostBySlug("best-website-builders-small-business");

export const metadata: Metadata = post
  ? {
      title: post.metaTitle,
      description: post.metaDescription,
      alternates: {
        canonical: `${siteConfig.website}/blog/best-website-builders-small-business`,
      },
      openGraph: {
        title: post.metaTitle,
        description: post.metaDescription,
        url: `${siteConfig.website}/blog/best-website-builders-small-business`,
        siteName: siteConfig.businessName,
        locale: "en_CA",
        type: "article",
      },
    }
  : {};

export default function BestWebsiteBuildersPage() {
  if (!post) return notFound();
  return <BlogPostTemplate post={post} />;
}
