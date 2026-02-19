"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import type { IndustryConfig } from "@/config/industries";
import { industries } from "@/config/industries";
import { blogPosts } from "@/config/blog-posts";
import Breadcrumbs from "@/components/Breadcrumbs";
import SharedCTA from "@/components/SharedCTA";
import InternalLinks from "@/components/InternalLinks";
import RelatedContent from "@/components/RelatedContent";
import PageSchemaMarkup from "@/components/PageSchemaMarkup";

export default function IndustryPageTemplate({
  industry,
}: {
  industry: IndustryConfig;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const relatedIndustryLinks = industry.relatedIndustries
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter(Boolean)
    .map((i) => ({
      title: i!.title,
      description: i!.heroDescription.slice(0, 120) + "...",
      href: `/web-design-ottawa/${i!.slug}`,
    }));

  const relatedBlogLinks = industry.relatedBlogSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean)
    .map((p) => ({
      title: p!.title,
      href: `/blog/${p!.slug}`,
      type: "blog" as const,
    }));

  const relatedIndustryItems = industry.relatedIndustries
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter(Boolean)
    .map((i) => ({
      title: i!.title,
      href: `/web-design-ottawa/${i!.slug}`,
      type: "industry" as const,
    }));

  return (
    <>
      <PageSchemaMarkup
        type="service"
        service={{
          name: industry.title,
          description: industry.metaDescription,
          url: `${siteConfig.website}/web-design-ottawa/${industry.slug}`,
        }}
        faqs={industry.faqs}
      />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Web Design Ottawa", href: "/#services" },
              { label: industry.title, href: `/web-design-ottawa/${industry.slug}` },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
                {industry.h1}
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                {industry.heroDescription}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={siteConfig.cta.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-all hover:shadow-lg"
                >
                  Get a Free Quote
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

        {/* Stats */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {industry.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main content + sidebar */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2 prose max-w-none">
                {industry.sections.map((section) => (
                  <div key={section.heading} className="mb-12">
                    <h2>{section.heading}</h2>
                    {section.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="lg:sticky lg:top-24 space-y-6">
                  <RelatedContent
                    items={[
                      ...relatedIndustryItems,
                      ...relatedBlogLinks,
                      { title: "SEO Services Ottawa", href: "/seo-ottawa", type: "service" },
                    ]}
                  />
                  <div className="bg-primary rounded-xl p-6 text-white">
                    <h3 className="font-semibold text-lg mb-2">
                      Free Strategy Call
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      Discuss your {industry.slug.replace("-", " ")} website
                      project with our team.
                    </p>
                    <a
                      href={siteConfig.cta.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-white text-primary text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark mb-12 text-center">
              What&apos;s Included in Your {industry.title.split(" ")[0]} Website
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-primary"
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
                  </div>
                  <h3 className="font-semibold text-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-dark mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {industry.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                >
                  <h3>
                    <button
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      aria-expanded={openFaq === index}
                    >
                      <span className="font-semibold text-dark pr-4">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </h3>
                  <div className={openFaq === index ? "" : "hidden"}>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <InternalLinks
          heading="Explore More Web Design Services"
          links={relatedIndustryLinks}
        />

        <SharedCTA />
      </main>
    </>
  );
}
