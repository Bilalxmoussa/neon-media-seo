import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug } from "@/config/blog-posts";
import { generatePageMetadata } from "@/lib/metadata";
import BlogPostTemplate from "@/components/BlogPostTemplate";

const post = getBlogPostBySlug("responsive-website-design-guide");

export const metadata = post
  ? generatePageMetadata({
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.website}/blog/responsive-website-design-guide`,
      type: "article",
    })
  : {};

export default function ResponsiveDesignGuidePage() {
  if (!post) return notFound();
  return <BlogPostTemplate post={post} />;
}
