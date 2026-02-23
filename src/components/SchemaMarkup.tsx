import { siteConfig } from "@/config/site";

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    url: siteConfig.website,
    logo: siteConfig.logoUrl,
    image: siteConfig.logoUrl,
    description: siteConfig.seoDescription,
    email: siteConfig.email,
    telephone: siteConfig.phone,
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: siteConfig.schema.sameAs,
    areaServed: siteConfig.schema.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    knowsAbout: [
      "Web Design",
      "Web Development",
      "SEO",
      "Local SEO",
      "WordPress",
      "E-Commerce",
      "Responsive Design",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.ratings.ratingValue,
      reviewCount: siteConfig.ratings.reviewCount,
      bestRating: siteConfig.ratings.bestRating,
    },
    priceRange: siteConfig.priceRange,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      availableLanguage: ["English", "French"],
    },
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteConfig.seoTitle,
    description: siteConfig.seoDescription,
    url: siteConfig.website,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.businessName,
      url: siteConfig.website,
    },
    about: {
      "@type": "Thing",
      name: "Web Design Ottawa",
    },
    provider: {
      "@type": "Organization",
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
  };

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Main Navigation",
    hasPart: [
      { "@type": "WebPage", name: "Home", url: siteConfig.website },
      { "@type": "WebPage", name: "Web Design Ottawa", url: `${siteConfig.website}/web-design-ottawa` },
      { "@type": "WebPage", name: "SEO Ottawa", url: `${siteConfig.website}/seo-ottawa` },
      { "@type": "WebPage", name: "Blog", url: `${siteConfig.website}/blog` },
      { "@type": "WebPage", name: "Dental Web Design", url: `${siteConfig.website}/web-design-ottawa/dental` },
      { "@type": "WebPage", name: "Restaurant Web Design", url: `${siteConfig.website}/web-design-ottawa/restaurants` },
      { "@type": "WebPage", name: "Lawyer Web Design", url: `${siteConfig.website}/web-design-ottawa/lawyers` },
      { "@type": "WebPage", name: "E-Commerce Web Design", url: `${siteConfig.website}/web-design-ottawa/ecommerce` },
      { "@type": "WebPage", name: "Contractor Web Design", url: `${siteConfig.website}/web-design-ottawa/contractors` },
      { "@type": "WebPage", name: "Real Estate Web Design", url: `${siteConfig.website}/web-design-ottawa/real-estate` },
      { "@type": "WebPage", name: "Web Design Barrhaven", url: `${siteConfig.website}/web-design-barrhaven` },
      { "@type": "WebPage", name: "Web Design Kanata", url: `${siteConfig.website}/web-design-kanata` },
      { "@type": "WebPage", name: "Web Design Orleans", url: `${siteConfig.website}/web-design-orleans` },
      { "@type": "WebPage", name: "Web Design Nepean", url: `${siteConfig.website}/web-design-nepean` },
      { "@type": "WebPage", name: "Web Design Gloucester", url: `${siteConfig.website}/web-design-gloucester` },
      { "@type": "WebPage", name: "Web Design Gatineau", url: `${siteConfig.website}/web-design-gatineau` },
    ],
  };

  const serviceSchemas = siteConfig.services.items.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.businessName,
      url: siteConfig.website,
    },
    serviceType: "Web Design",
    areaServed: {
      "@type": "City",
      name: "Ottawa",
    },
  }));

  return (
    <>
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
