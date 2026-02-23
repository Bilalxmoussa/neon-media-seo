import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug } from "@/config/blog-posts";
import { generatePageMetadata } from "@/lib/metadata";
import BlogPostTemplate from "@/components/BlogPostTemplate";

const post = getBlogPostBySlug("small-business-seo-tips");

export const metadata = post
  ? generatePageMetadata({
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.website}/blog/small-business-seo-tips`,
      type: "article",
    })
  : {};

export default function SEOTipsPage() {
  if (!post) return notFound();
  return <BlogPostTemplate post={post} />;
}
