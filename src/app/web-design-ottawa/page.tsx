import { siteConfig } from "@/config/site";
import { industries } from "@/config/industries";
import { blogPosts } from "@/config/blog-posts";
import { locations } from "@/config/locations";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import SharedCTA from "@/components/SharedCTA";
import InternalLinks from "@/components/InternalLinks";
import RelatedContent from "@/components/RelatedContent";
import PageSchemaMarkup from "@/components/PageSchemaMarkup";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = generatePageMetadata({
  title:
    "Web Design Ottawa | Professional Website Design Services - Neon Web Agency",
  description:
    "Professional web design services in Ottawa. We build fast, mobile-friendly, SEO-optimized websites for every industry. Custom designs starting at $1,499. Free strategy call.",
  url: `${siteConfig.website}/web-design-ottawa`,
});

export default function WebDesignOttawaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: siteConfig.website },
    {
      name: "Web Design Ottawa",
      url: `${siteConfig.website}/web-design-ottawa`,
    },
  ]);

  const featuredBlogSlugs = [
    "web-design-cost-ottawa",
    "how-to-choose-web-designer-ottawa",
    "best-web-design-agencies-ottawa",
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
    ...industries.slice(0, 4).map((i) => ({
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
          name: "Web Design Ottawa",
          description:
            "Professional web design services for Ottawa businesses. Custom websites, responsive design, SEO optimization, and ongoing support.",
          url: `${siteConfig.website}/web-design-ottawa`,
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
              { label: "Web Design Ottawa", href: "/web-design-ottawa" },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
                Web Design Ottawa: Professional Website Design Services
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                We build custom, high-performance websites for Ottawa businesses
                across every industry. From restaurants and dental clinics to law
                firms and e-commerce stores, our web design services combine
                beautiful design with powerful SEO to help your business grow
                online.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={siteConfig.cta.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all hover:shadow-lg"
                >
                  Book a Free Strategy Call
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
                  <h2>Ottawa Web Design Services Overview</h2>
                  <p>
                    Ottawa businesses need websites that do more than look
                    good &mdash; they need websites that generate leads, rank on
                    Google, and convert visitors into paying customers. At Neon
                    Web Agency, every website we build is custom-designed,
                    mobile-responsive, and optimized for search engines from the
                    ground up. We don&apos;t use generic templates or
                    cookie-cutter approaches. Every project starts with
                    understanding your specific business goals, target audience,
                    and competitive landscape.
                  </p>
                  <p>
                    Our web design services cover the full spectrum of what
                    Ottawa businesses need to succeed online. Whether you need a{" "}
                    <a href="/blog/web-design-cost-ottawa">
                      cost-effective starter website
                    </a>{" "}
                    or a comprehensive digital platform with e-commerce,
                    booking systems, and advanced functionality, we have the
                    expertise to deliver results. With over 150 websites launched
                    for businesses across the National Capital Region, we
                    understand what works in Ottawa&apos;s competitive market.
                  </p>
                  <p>
                    Every project includes{" "}
                    <a href="/seo-ottawa">local SEO optimization</a>, ensuring
                    your website ranks for the searches that matter most to your
                    business. We combine technical excellence with strategic
                    content to help Ottawa businesses attract more customers and
                    grow their revenue online.
                  </p>
                </div>

                <div className="mb-12">
                  <h2>Industry-Specific Web Design Expertise</h2>
                  <p>
                    Different industries have different needs, and we tailor our
                    approach accordingly. A{" "}
                    <a href="/web-design-ottawa/restaurants">
                      restaurant website
                    </a>{" "}
                    needs online ordering and menu displays, while a{" "}
                    <a href="/web-design-ottawa/dental">dental practice</a>{" "}
                    needs online booking and patient-friendly service pages. A{" "}
                    <a href="/web-design-ottawa/lawyers">law firm</a> needs
                    authority-building content, while an{" "}
                    <a href="/web-design-ottawa/ecommerce">e-commerce store</a>{" "}
                    needs conversion-optimized product pages and secure payment
                    processing.
                  </p>
                  <p>
                    We&apos;ve built websites for{" "}
                    <a href="/web-design-ottawa/contractors">contractors</a>,{" "}
                    <a href="/web-design-ottawa/real-estate">
                      real estate agents
                    </a>
                    , healthcare providers, professional services, fitness
                    studios, and dozens of other industries across Ottawa. This
                    breadth of experience means we understand the specific
                    features, content strategies, and SEO approaches that drive
                    results in your industry.
                  </p>
                  <p>
                    Our industry expertise extends beyond design into
                    understanding your customers. We know what Ottawa diners look
                    for in a restaurant website, what patients expect from a
                    dental clinic&apos;s online presence, and what homeowners
                    need to see before hiring a contractor. This customer-centric
                    approach ensures every website we build resonates with your
                    target audience and drives measurable business results.
                  </p>
                </div>

                <div className="mb-12">
                  <h2>Serving Every Ottawa Neighbourhood</h2>
                  <p>
                    We provide web design services to businesses across the
                    entire National Capital Region. From{" "}
                    <a href="/web-design-kanata">Kanata</a>&apos;s thriving tech
                    sector to <a href="/web-design-barrhaven">Barrhaven</a>
                    &apos;s growing small business community, from{" "}
                    <a href="/web-design-orleans">Orleans</a>&apos; bilingual
                    market to{" "}
                    <a href="/web-design-nepean">Nepean</a>&apos;s Merivale Road
                    corridor, we understand the unique dynamics of each area.
                  </p>
                  <p>
                    Our local expertise means we can create{" "}
                    <a href="/blog/local-seo-guide-ottawa">
                      location-specific SEO strategies
                    </a>{" "}
                    that target customers in your specific neighbourhood. Whether
                    your business serves a single community or the entire Ottawa
                    region, we build websites that connect you with the right
                    customers at the right time.
                  </p>
                </div>

                <div className="mb-12">
                  <h2>Our Web Design Process</h2>
                  <p>
                    Every project follows our proven five-step process:
                    Discovery, Design, Development, Testing, and Launch. We
                    start with a free strategy call to understand your goals and
                    competitive landscape. From there, we create custom designs
                    for your approval, build your site with clean, modern code,
                    and rigorously test everything before launch.
                  </p>
                  <p>
                    Our development approach uses modern frameworks like Next.js
                    and React for maximum performance, or WordPress for
                    businesses that need easy content management. Not sure which
                    is right for you? Our guide on{" "}
                    <a href="/blog/wordpress-vs-custom-website">
                      WordPress vs custom websites
                    </a>{" "}
                    can help you decide. Regardless of platform, every website we
                    build loads in under 2 seconds, scores 90+ on Google
                    PageSpeed, and is fully optimized for mobile devices.
                  </p>
                  <p>
                    After launch, we provide ongoing support and maintenance to
                    keep your website secure, fast, and up-to-date. We also offer
                    monthly SEO services for businesses that want to aggressively
                    grow their search visibility and dominate their market.
                  </p>
                </div>

                <div className="mb-12">
                  <h2>Why Choose Neon Web Agency for Web Design in Ottawa</h2>
                  <p>
                    With a 4.9-star Google rating, 150+ successful website
                    launches, and a 98% client satisfaction rate, Neon Web Agency
                    is one of Ottawa&apos;s highest-rated web design agencies. We
                    combine beautiful design with proven marketing strategy,
                    ensuring every website we build generates real business
                    results.
                  </p>
                  <p>
                    Our{" "}
                    <a href="/#pricing">transparent pricing</a> starts at $1,499
                    with no hidden fees. Every project includes a detailed quote
                    upfront so you know exactly what you&apos;re investing in. If
                    you&apos;re{" "}
                    <a href="/blog/how-to-choose-web-designer-ottawa">
                      evaluating web designers
                    </a>
                    , we&apos;re confident our combination of design expertise,
                    technical skill, and local market knowledge makes us the
                    right choice for your Ottawa business.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="mt-8 lg:mt-0">
                <div className="lg:sticky lg:top-24 space-y-6">
                  <RelatedContent items={sidebarItems} />
                  <div className="bg-primary rounded-xl p-6 text-white">
                    <h3 className="font-semibold text-lg mb-2">
                      Free Strategy Call
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      Get a free website audit and custom quote for your Ottawa
                      business.
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

        {/* Industry Grid */}
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark mb-4 text-center">
              Web Design for Every Ottawa Industry
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We build custom websites for businesses across every industry in
              Ottawa. Explore our specialized services.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <a
                  key={industry.slug}
                  href={`/web-design-ottawa/${industry.slug}`}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {industry.heroDescription.slice(0, 120)}...
                  </p>
                  <span className="text-primary text-sm font-medium mt-3 inline-block">
                    Learn more &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Location Grid */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark mb-4 text-center">
              Serving the Entire Ottawa Region
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              We provide web design services across the National Capital Region.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location) => (
                <a
                  key={location.slug}
                  href={`/web-design-${location.slug}`}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary hover:shadow-lg transition-all group"
                >
                  <h3 className="font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                    {location.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {location.heroDescription.slice(0, 120)}...
                  </p>
                  <span className="text-primary text-sm font-medium mt-3 inline-block">
                    Learn more &rarr;
                  </span>
                </a>
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
