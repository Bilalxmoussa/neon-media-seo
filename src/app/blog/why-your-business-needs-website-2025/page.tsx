import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug } from "@/config/blog-posts";
import { generatePageMetadata } from "@/lib/metadata";
import BlogPostTemplate from "@/components/BlogPostTemplate";

const post = getBlogPostBySlug("why-your-business-needs-website-2025");

export const metadata = post
  ? generatePageMetadata({
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.website}/blog/why-your-business-needs-website-2025`,
      type: "article",
    })
  : {};

export default function WhyBusinessNeedsWebsitePage() {
  if (!post) return notFound();
  return <BlogPostTemplate post={post} />;
}
