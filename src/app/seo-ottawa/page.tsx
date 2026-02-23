import { siteConfig } from "@/config/site";
import { seoPageConfig } from "@/config/seo-page";
import { blogPosts } from "@/config/blog-posts";
import { industries } from "@/config/industries";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import SharedCTA from "@/components/SharedCTA";
import InternalLinks from "@/components/InternalLinks";
import RelatedContent from "@/components/RelatedContent";
import PageSchemaMarkup from "@/components/PageSchemaMarkup";
import SEOFaq from "./SEOFaq";

export const metadata = generatePageMetadata({
  title: seoPageConfig.metaTitle,
  description: seoPageConfig.metaDescription,
  url: `${siteConfig.website}/seo-ottawa`,
});

export default function SEOOttawaPage() {
  const relatedBlogLinks = seoPageConfig.relatedBlogSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean)
    .map((p) => ({
      title: p!.title,
      description: p!.excerpt.slice(0, 120) + "...",
      href: `/blog/${p!.slug}`,
    }));

  const sidebarItems = [
    ...seoPageConfig.relatedBlogSlugs
      .map((slug) => blogPosts.find((p) => p.slug === slug))
      .filter(Boolean)
      .map((p) => ({
        title: p!.title,
        href: `/blog/${p!.slug}`,
        type: "blog" as const,
      })),
    ...seoPageConfig.relatedIndustrySlugs
      .map((slug) => industries.find((i) => i.slug === slug))
      .filter(Boolean)
      .map((i) => ({
        title: i!.title,
        href: `/web-design-ottawa/${i!.slug}`,
        type: "industry" as const,
      })),
  ];

  return (
    <>
      <PageSchemaMarkup
        type="service"
        service={{
          name: seoPageConfig.title,
          description: seoPageConfig.metaDescription,
          url: `${siteConfig.website}/seo-ottawa`,
        }}
        faqs={seoPageConfig.faqs}
      />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "SEO Services Ottawa", href: "/seo-ottawa" },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
                {seoPageConfig.h1}
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                {seoPageConfig.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={siteConfig.cta.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all hover:shadow-lg"
                >
                  Get a Free SEO Audit
                </a>
                <a
                  href="/#portfolio"
                  className="border border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all"
                >
                  View Results
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
                {seoPageConfig.sections.map((section) => (
                  <div key={section.heading} className="mb-12">
                    <h2>{section.heading}</h2>
                    {section.content.map((paragraph, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="lg:sticky lg:top-24 space-y-6">
                  <RelatedContent items={sidebarItems} />
                  <div className="bg-primary rounded-xl p-6 text-white">
                    <h3 className="font-semibold text-lg mb-2">
                      Free SEO Audit
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      Find out where your Ottawa business stands in search
                      rankings and how to improve.
                    </p>
                    <a
                      href={siteConfig.cta.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-white text-primary text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Get Free Audit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark mb-12 text-center">
              Our SEO Process
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {seoPageConfig.process.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-dark mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark mb-4 text-center">
              SEO Pricing for Ottawa Businesses
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Transparent SEO pricing with no hidden fees. Every package includes
              monthly reporting so you can track your ROI.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {seoPageConfig.pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`bg-white rounded-xl p-8 border ${
                    plan.popular
                      ? "border-primary shadow-lg ring-2 ring-primary/20"
                      : "border-gray-100"
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-dark mb-1">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-6">
                    {plan.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <svg
                          className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={siteConfig.cta.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? "bg-primary text-white hover:bg-primary-dark"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <SEOFaq faqs={seoPageConfig.faqs} />

        <InternalLinks heading="Related Services" links={relatedBlogLinks} />

        <SharedCTA />
      </main>
    </>
  );
}
