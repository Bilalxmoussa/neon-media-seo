import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getBlogPostBySlug } from "@/config/blog-posts";
import BlogPostTemplate from "@/components/BlogPostTemplate";

const post = getBlogPostBySlug("how-to-choose-web-designer-ottawa");

export const metadata: Metadata = post
  ? {
      title: post.metaTitle,
      description: post.metaDescription,
      alternates: {
        canonical: `${siteConfig.website}/blog/how-to-choose-web-designer-ottawa`,
      },
      openGraph: {
        title: post.metaTitle,
        description: post.metaDescription,
        url: `${siteConfig.website}/blog/how-to-choose-web-designer-ottawa`,
        siteName: siteConfig.businessName,
        locale: "en_CA",
        type: "article",
      },
    }
  : {};

export default function HowToChooseWebDesignerPage() {
  if (!post) return notFound();
  return <BlogPostTemplate post={post} />;
}
