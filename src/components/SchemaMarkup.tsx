import { siteConfig } from "@/config/site";

export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": siteConfig.schema.type,
    name: siteConfig.businessName,
    description: siteConfig.seoDescription,
    url: siteConfig.website,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: siteConfig.logoUrl,
    logo: siteConfig.logoUrl,
    foundingDate: siteConfig.foundingYear.toString(),
    priceRange: siteConfig.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.province,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.schema.geo.latitude,
      longitude: siteConfig.schema.geo.longitude,
    },
    areaServed: siteConfig.schema.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: siteConfig.schema.sameAs,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.ratings.ratingValue,
      reviewCount: siteConfig.ratings.reviewCount,
      bestRating: siteConfig.ratings.bestRating,
    },
    review: siteConfig.testimonials.items.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating.toString(),
        bestRating: "5",
      },
      reviewBody: t.quote,
      datePublished: "2024-01-15",
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Design Services",
      itemListElement: siteConfig.services.items.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@type": "LocalBusiness",
            name: siteConfig.businessName,
          },
          areaServed: {
            "@type": "City",
            name: siteConfig.city,
          },
        },
      })),
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.businessName,
    url: siteConfig.website,
    logo: siteConfig.logoUrl,
    image: siteConfig.logoUrl,
    description: siteConfig.seoDescription,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.province,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country,
    },
    sameAs: siteConfig.schema.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      email: siteConfig.email,
      availableLanguage: ["English", "French"],
    },
    knowsAbout: [
      "Web Design",
      "Website Development",
      "SEO",
      "Digital Marketing",
      "E-Commerce",
      "WordPress",
      "Next.js",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.website,
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    url: siteConfig.website,
    inLanguage: "en-CA",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.businessName,
      url: siteConfig.website,
    },
    about: {
      "@type": "Thing",
      name: "Web Design",
    },
    mentions: {
      "@type": "City",
      name: siteConfig.city,
    },
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.businessName,
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.businessName,
    url: siteConfig.website,
    description: siteConfig.seoDescription,
    publisher: {
      "@type": "Organization",
      name: siteConfig.businessName,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.website}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Main Navigation",
    hasPart: [
      { "@type": "WebPage", name: "Web Design Ottawa", url: siteConfig.website },
      { "@type": "WebPage", name: "SEO Services Ottawa", url: `${siteConfig.website}/seo-ottawa` },
      { "@type": "WebPage", name: "Blog", url: `${siteConfig.website}/blog` },
      { "@type": "WebPage", name: "Restaurant Web Design", url: `${siteConfig.website}/web-design-ottawa/restaurants` },
      { "@type": "WebPage", name: "Dental Web Design", url: `${siteConfig.website}/web-design-ottawa/dental` },
      { "@type": "WebPage", name: "Law Firm Web Design", url: `${siteConfig.website}/web-design-ottawa/lawyers` },
      { "@type": "WebPage", name: "E-Commerce Web Design", url: `${siteConfig.website}/web-design-ottawa/ecommerce` },
      { "@type": "WebPage", name: "Contractor Web Design", url: `${siteConfig.website}/web-design-ottawa/contractors` },
      { "@type": "WebPage", name: "Real Estate Web Design", url: `${siteConfig.website}/web-design-ottawa/real-estate` },
    ],
  };

  const serviceSchemas = siteConfig.services.items.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.businessName,
      url: siteConfig.website,
    },
    areaServed: siteConfig.schema.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    serviceType: "Web Design",
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteNavigationSchema),
        }}
      />
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
