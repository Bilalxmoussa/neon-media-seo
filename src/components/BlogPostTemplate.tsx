import { siteConfig } from "@/config/site";
import type { BlogPostConfig } from "@/config/blog-posts";
import { blogPosts } from "@/config/blog-posts";
import { industries } from "@/config/industries";
import Breadcrumbs from "@/components/Breadcrumbs";
import SharedCTA from "@/components/SharedCTA";
import InternalLinks from "@/components/InternalLinks";
import RelatedContent from "@/components/RelatedContent";
import TableOfContents from "@/components/TableOfContents";
import PageSchemaMarkup from "@/components/PageSchemaMarkup";

export default function BlogPostTemplate({
  post,
}: {
  post: BlogPostConfig;
}) {
  const relatedBlogLinks = post.relatedBlogSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean)
    .map((p) => ({
      title: p!.title,
      description: p!.excerpt.slice(0, 120) + "...",
      href: `/blog/${p!.slug}`,
    }));

  const sidebarItems = [
    ...post.relatedBlogSlugs
      .map((slug) => blogPosts.find((p) => p.slug === slug))
      .filter(Boolean)
      .map((p) => ({
        title: p!.title,
        href: `/blog/${p!.slug}`,
        type: "blog" as const,
      })),
    ...post.relatedIndustrySlugs
      .map((slug) => industries.find((i) => i.slug === slug))
      .filter(Boolean)
      .map((i) => ({
        title: i!.title,
        href: `/web-design-ottawa/${i!.slug}`,
        type: "industry" as const,
      })),
  ];

  const formattedDate = new Date(post.datePublished).toLocaleDateString(
    "en-CA",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <PageSchemaMarkup
        type="article"
        article={{
          title: post.title,
          description: post.metaDescription,
          url: `${siteConfig.website}/blog/${post.slug}`,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
        }}
      />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
          />
        </div>

        {/* Article Header */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <time dateTime={post.datePublished}>{formattedDate}</time>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <TableOfContents items={post.tableOfContents} />

                <div className="prose max-w-none">
                  {post.sections.map((section) => (
                    <div key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                      <h2>{section.heading}</h2>
                      {section.content.map((paragraph, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                      ))}
                    </div>
                  ))}
                </div>

                {/* Author box */}
                <div className="mt-12 p-6 bg-gray-50 rounded-xl flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">N</span>
                  </div>
                  <div>
                    <div className="font-semibold text-dark">
                      {siteConfig.businessName} Team
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Ottawa&apos;s trusted web design agency. We share practical
                      insights to help local businesses grow online.
                    </p>
                    <a
                      href="/"
                      className="text-primary text-sm font-medium hover:underline mt-2 inline-block"
                    >
                      Learn more about our services
                    </a>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="mt-8 lg:mt-0">
                <div className="lg:sticky lg:top-24 space-y-6">
                  <RelatedContent items={sidebarItems} />
                  <div className="bg-primary rounded-xl p-6 text-white">
                    <h3 className="font-semibold text-lg mb-2">
                      Need a Website?
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      Get a free strategy call and custom quote for your Ottawa
                      business website.
                    </p>
                    <a
                      href={siteConfig.cta.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-white text-primary text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Book Free Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InternalLinks heading="Related Articles" links={relatedBlogLinks} />

        <SharedCTA />
      </main>
    </>
  );
}
