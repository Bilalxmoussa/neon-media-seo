import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug } from "@/config/blog-posts";
import { generatePageMetadata } from "@/lib/metadata";
import BlogPostTemplate from "@/components/BlogPostTemplate";

const post = getBlogPostBySlug("best-web-design-agencies-ottawa");

export const metadata = post
  ? generatePageMetadata({
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteConfig.website}/blog/best-web-design-agencies-ottawa`,
      type: "article",
    })
  : {};

export default function BestAgenciesPage() {
  if (!post) return notFound();
  return <BlogPostTemplate post={post} />;
}
