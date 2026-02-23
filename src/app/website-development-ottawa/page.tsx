import { siteConfig } from "@/config/site";
import { blogPosts } from "@/config/blog-posts";
import { industries } from "@/config/industries";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import SharedCTA from "@/components/SharedCTA";
import InternalLinks from "@/components/InternalLinks";
import RelatedContent from "@/components/RelatedContent";
import PageSchemaMarkup from "@/components/PageSchemaMarkup";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title:
    "Website Development Ottawa | Custom Web Development Services - Neon Web Agency",
  description:
    "Professional website development in Ottawa. Custom-coded websites using Next.js, React, and WordPress. Fast, secure, and SEO-optimized. Get a free quote today.",
  url: `${siteConfig.website}/website-development-ottawa`,
});

export default function WebsiteDevelopmentOttawaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.website },
    {
      name: "Website Development Ottawa",
      url: `${siteConfig.website}/website-development-ottawa`,
    },
  ]);

  const featuredBlogSlugs = [
    "wordpress-vs-custom-website",
    "web-design-cost-ottawa",
    "website-speed-optimization",
  ];

  const relatedBlogLinks = featuredBlogSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean)
    .map((p) => ({
      title: p!.title,
      description: p!.excerpt.slice(0, 120) + "...",
      href: `/blog/${p!.slug}`,
    }));

  const sidebarItems = [
    ...industries.slice(0, 3).map((i) => ({
      title: i.title,
      href: `/web-design-ottawa/${i.slug}`,
      type: "industry" as const,
    })),
    ...featuredBlogSlugs
      .map((slug) => blogPosts.find((p) => p.slug === slug))
      .filter(Boolean)
      .map((p) => ({
        title: p!.title,
        href: `/blog/${p!.slug}`,
        type: "blog" as const,
      })),
  ];

  return (
    <>
      <PageSchemaMarkup
        type="service"
        service={{
          name: "Website Development Ottawa",
          description:
            "Custom website development services in Ottawa. We build fast, secure, SEO-optimized websites using modern frameworks like Next.js, React, and WordPress.",
          url: `${siteConfig.website}/website-development-ottawa`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              {
                label: "Website Development Ottawa",
                href: "/website-development-ottawa",
              },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
                Website Development Ottawa
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                We build custom-coded, high-performance websites for Ottawa
                businesses using modern development frameworks. From simple
                business sites to complex web applications, our development team
                delivers fast, secure, and scalable solutions that outperform
                template-based alternatives.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={siteConfig.cta.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all hover:shadow-lg"
                >
                  Get a Free Development Quote
                </a>
                <a
                  href="/#portfolio"
                  className="border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content + Sidebar */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2 prose max-w-none">
                <div className="mb-12">
                  <h2>
                    Custom Website Development for Ottawa Businesses
                  </h2>
                  <p>
                    Website development goes beyond design &mdash; it&apos;s
                    about building the technical foundation that makes your
                    website fast, secure, and effective. At Neon Web Agency, our
                    development team uses modern frameworks and best practices to
                    create websites that load in under 2 seconds, score 90+ on
                    Google PageSpeed Insights, and provide a seamless experience
                    on every device.
                  </p>
                  <p>
                    While{" "}
                    <a href="/web-design-ottawa">web design</a> focuses on the
                    visual experience and user interface, website development
                    handles the code, functionality, and technical architecture
                    that powers everything behind the scenes. Both are essential,
                    and at Neon Web Agency, we excel at both. Every website we
                    develop is hand-coded with clean, efficient code that search
                    engines love and users never have to think about.
                  </p>
                  <p>
                    Our Ottawa development team has built everything from simple
                    5-page business websites to complex e-commerce platforms,
                    booking systems, client portals, and custom web applications.
                    Whatever your project requires, we have the technical
                    expertise to deliver it on time and on budget.
                  </p>
                </div>

                <div className="mb-12">
                  <h2>Our Technology Stack</h2>
                  <p>
                    We use the same technologies trusted by the world&apos;s
                    leading companies. Our primary stack includes Next.js and
                    React for maximum performance and SEO advantage, Tailwind CSS
                    for responsive, mobile-first design, and TypeScript for
                    type-safe, maintainable code. For businesses that need easy
                    content management, we also develop on WordPress with custom
                    themes optimized for performance.
                  </p>
                  <p>
                    Choosing the right technology is crucial for your
                    website&apos;s success. Our guide on{" "}
                    <a href="/blog/wordpress-vs-custom-website">
                      WordPress vs custom websites
                    </a>{" "}
                    explains the tradeoffs in detail. For most Ottawa small
                    businesses, either approach can deliver excellent results
                    &mdash; the key is matching the technology to your specific
                    needs, budget, and long-term goals.
                  </p>
                  <p>
                    Every technology choice we make is driven by performance. We
                    implement server-side rendering, static generation, image
                    optimization, code splitting, and lazy loading as standard
                    practices.{" "}
                    <a href="/blog/website-speed-optimization">
                      Website speed optimization
                    </a>{" "}
                    is not an afterthought &mdash; it&apos;s built into our
                    development process from the first line of code.
                  </p>
                </div>

                <div className="mb-12">
                  <h2>
                    E-Commerce Development
                  </h2>
                  <p>
                    Our{" "}
                    <a href="/web-design-ottawa/ecommerce">
                      e-commerce development
                    </a>{" "}
                    services help Ottawa businesses sell online with confidence.
                    We build custom online stores with Shopify, WooCommerce, or
                    headless e-commerce solutions that include secure payment
                    processing, inventory management, shipping integration, and
                    conversion-optimized checkout flows.
                  </p>
                  <p>
                    Every e-commerce site we develop includes product schema
                    markup for Google Shopping visibility, mobile-optimized
                    checkout to reduce cart abandonment, and integration with
                    Canadian payment processors and shipping providers. Our
                    e-commerce clients typically see a 200-300% increase in
                    online revenue after launch.
                  </p>
                </div>

                <div className="mb-12">
                  <h2>API Integrations & Custom Functionality</h2>
                  <p>
                    Modern businesses need websites that connect with their
                    existing tools and systems. We develop custom integrations
                    with CRMs (HubSpot, Salesforce), booking systems (Calendly,
                    Acuity), payment processors (Stripe, Square), email
                    marketing platforms (Mailchimp, Klaviyo), and dozens of other
                    third-party services.
                  </p>
                  <p>
                    Need custom functionality that off-the-shelf solutions
                    can&apos;t provide? We build custom web applications
                    including client portals, membership sites, booking
                    platforms, calculators, and interactive tools. Our
                    development team can handle any technical challenge, from
                    simple contact form integrations to complex multi-user
                    platforms.
                  </p>
                </div>

                <div className="mb-12">
                  <h2>SEO-First Development</h2>
                  <p>
                    Every website we develop is built with{" "}
                    <a href="/seo-ottawa">SEO</a> as a core requirement, not an
                    afterthought. This means proper heading hierarchy, semantic
                    HTML, schema markup, optimized meta tags, XML sitemaps, fast
                    load times, and mobile-responsive layouts. These technical
                    SEO foundations are essential for ranking on Google and are
                    built into every page we develop.
                  </p>
                  <p>
                    Our{" "}
                    <a href="/blog/local-seo-guide-ottawa">
                      local SEO approach
                    </a>{" "}
                    is particularly effective for Ottawa businesses. We implement
                    LocalBusiness schema, optimize for neighbourhood-specific
                    keywords, and ensure your website&apos;s technical
                    foundation supports long-term organic growth. The result is a
                    website that not only looks great but actively drives
                    qualified traffic to your business.
                  </p>
                </div>

                <div className="mb-12">
                  <h2>Website Development Pricing</h2>
                  <p>
                    Our{" "}
                    <a href="/blog/web-design-cost-ottawa">
                      website development pricing
                    </a>{" "}
                    starts at $1,499 for a professional business website and
                    scales based on complexity, features, and functionality.
                    E-commerce development typically ranges from $3,499 to
                    $12,999, while custom web applications start at $5,000. Every
                    project includes a detailed quote upfront with no hidden
                    fees.
                  </p>
                  <p>
                    We offer transparent pricing because we believe Ottawa
                    businesses deserve to know exactly what they&apos;re
                    investing in. Book a free strategy call to discuss your
                    project and receive a custom quote tailored to your specific
                    needs and goals.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="mt-8 lg:mt-0">
                <div className="lg:sticky lg:top-24 space-y-6">
                  <RelatedContent items={sidebarItems} />
                  <div className="bg-primary rounded-xl p-6 text-white">
                    <h3 className="font-semibold text-lg mb-2">
                      Free Development Quote
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      Tell us about your project and get a custom development
                      quote for your Ottawa business.
                    </p>
                    <a
                      href={siteConfig.cta.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-white text-primary text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Get Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark mb-12 text-center">
              Technologies We Use
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Next.js & React",
                  description:
                    "Server-side rendering, static generation, and blazing-fast performance for maximum SEO advantage.",
                },
                {
                  title: "WordPress",
                  description:
                    "Custom WordPress development with optimized themes for businesses that need easy content management.",
                },
                {
                  title: "Shopify & WooCommerce",
                  description:
                    "E-commerce development with secure payments, inventory management, and conversion optimization.",
                },
                {
                  title: "TypeScript",
                  description:
                    "Type-safe code that reduces bugs, improves maintainability, and ensures long-term reliability.",
                },
                {
                  title: "Tailwind CSS",
                  description:
                    "Utility-first CSS framework for responsive, mobile-first designs that load fast and look great.",
                },
                {
                  title: "API Integrations",
                  description:
                    "Custom integrations with CRMs, booking systems, payment processors, and third-party services.",
                },
              ].map((tech) => (
                <div
                  key={tech.title}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="font-semibold text-dark mb-2">{tech.title}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <InternalLinks heading="Related Articles" links={relatedBlogLinks} />

        <SharedCTA />
      </main>
    </>
  );
}
