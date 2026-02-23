import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug } from "@/config/blog-posts";
import { generatePageMetadata } from "@/lib/metadata";
import BlogPostTemplate from "@/components/BlogPostTemplate";

const post = getBlogPostBySlug("web-design-trends-2026");

export const metadata = post
  ? generatePageMetadata({
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.website}/blog/web-design-trends-2026`,
      type: "article",
    })
  : {};

export default function WebDesignTrends2026Page() {
  if (!post) return notFound();
  return <BlogPostTemplate post={post} />;
}
