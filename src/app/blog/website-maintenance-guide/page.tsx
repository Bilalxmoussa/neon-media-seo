import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug } from "@/config/blog-posts";
import { generatePageMetadata } from "@/lib/metadata";
import BlogPostTemplate from "@/components/BlogPostTemplate";

const post = getBlogPostBySlug("website-maintenance-guide");

export const metadata = post
  ? generatePageMetadata({
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.website}/blog/website-maintenance-guide`,
      type: "article",
    })
  : {};

export default function MaintenancePage() {
  if (!post) return notFound();
  return <BlogPostTemplate post={post} />;
}
