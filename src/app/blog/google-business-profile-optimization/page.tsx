import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug } from "@/config/blog-posts";
import { generatePageMetadata } from "@/lib/metadata";
import BlogPostTemplate from "@/components/BlogPostTemplate";

const post = getBlogPostBySlug("google-business-profile-optimization");

export const metadata = post
  ? generatePageMetadata({
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.website}/blog/google-business-profile-optimization`,
      type: "article",
    })
  : {};

export default function GBPPage() {
  if (!post) return notFound();
  return <BlogPostTemplate post={post} />;
}
