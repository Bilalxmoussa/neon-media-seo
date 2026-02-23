import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug } from "@/config/blog-posts";
import { generatePageMetadata } from "@/lib/metadata";
import BlogPostTemplate from "@/components/BlogPostTemplate";

const post = getBlogPostBySlug("wordpress-vs-custom-website");

export const metadata = post
  ? generatePageMetadata({
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.website}/blog/wordpress-vs-custom-website`,
      type: "article",
    })
  : {};

export default function WordpressVsCustomPage() {
  if (!post) return notFound();
  return <BlogPostTemplate post={post} />;
}
