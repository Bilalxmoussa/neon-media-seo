import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/config/blog-posts";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import SharedCTA from "@/components/SharedCTA";
import PageSchemaMarkup from "@/components/PageSchemaMarkup";

export const metadata: Metadata = {
  title: `Web Design & SEO Blog | ${siteConfig.businessName}`,
  description:
    "Expert web design and SEO tips for Ottawa businesses. Learn about website costs, best platforms, local SEO strategies, and how to grow your business online.",
  alternates: {
    canonical: `${siteConfig.website}/blog`,
  },
  openGraph: {
    title: `Web Design & SEO Blog | ${siteConfig.businessName}`,
    description:
      "Expert web design and SEO tips for Ottawa businesses. Learn about website costs, best platforms, local SEO strategies, and how to grow your business online.",
    url: `${siteConfig.website}/blog`,
    siteName: siteConfig.businessName,
    locale: "en_CA",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageSchemaMarkup
        type="webpage"
        webpage={{
          title: "Web Design & SEO Blog",
          description:
            "Expert web design and SEO tips for Ottawa businesses.",
          url: `${siteConfig.website}/blog`,
        }}
      />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
        </div>

        <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
              Web Design &amp; SEO Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Practical tips and guides to help Ottawa businesses build better
              websites, rank higher on Google, and grow online. Written by our
              expert team at {siteConfig.businessName}.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  readTime={post.readTime}
                  datePublished={post.datePublished}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-dark mb-6 text-center">
              Explore Our Web Design Services
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { label: "Restaurant Web Design", href: "/web-design-ottawa/restaurants" },
                { label: "Dental Web Design", href: "/web-design-ottawa/dental" },
                { label: "Law Firm Web Design", href: "/web-design-ottawa/lawyers" },
                { label: "E-Commerce Web Design", href: "/web-design-ottawa/ecommerce" },
                { label: "Contractor Web Design", href: "/web-design-ottawa/contractors" },
                { label: "Real Estate Web Design", href: "/web-design-ottawa/real-estate" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="bg-white rounded-lg p-4 text-center border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all text-sm font-medium text-gray-700 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <SharedCTA />
      </main>
    </>
  );
}
