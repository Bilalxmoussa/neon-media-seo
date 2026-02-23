import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug } from "@/config/blog-posts";
import { generatePageMetadata } from "@/lib/metadata";
import BlogPostTemplate from "@/components/BlogPostTemplate";

const post = getBlogPostBySlug("best-website-builders-small-business");

export const metadata = post
  ? generatePageMetadata({
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.website}/blog/best-website-builders-small-business`,
      type: "article",
    })
  : {};

export default function BestWebsiteBuildersPage() {
  if (!post) return notFound();
  return <BlogPostTemplate post={post} />;
}
