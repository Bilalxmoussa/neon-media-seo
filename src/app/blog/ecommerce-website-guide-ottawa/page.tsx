import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug } from "@/config/blog-posts";
import { generatePageMetadata } from "@/lib/metadata";
import BlogPostTemplate from "@/components/BlogPostTemplate";

const post = getBlogPostBySlug("ecommerce-website-guide-ottawa");

export const metadata = post
  ? generatePageMetadata({
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.website}/blog/ecommerce-website-guide-ottawa`,
      type: "article",
    })
  : {};

export default function EcommercePage() {
  if (!post) return notFound();
  return <BlogPostTemplate post={post} />;
}
