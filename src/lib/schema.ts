import { siteConfig } from "@/config/site";

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: siteConfig.businessName,
      url: siteConfig.website,
    },
    serviceType: "Web Design",
  };
}

export function generateFAQSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
  wordCount?: number;
  articleSection?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    image: article.image || `${siteConfig.website}/og-image.jpg`,
    inLanguage: "en",
    ...(article.wordCount && { wordCount: article.wordCount }),
    ...(article.articleSection && { articleSection: article.articleSection }),
    ...(article.keywords && { keywords: article.keywords.join(", ") }),
    author: [
      {
        "@type": "Person",
        name: siteConfig.author.name,
        jobTitle: siteConfig.author.title,
        url: siteConfig.website,
      },
      {
        "@type": "Organization",
        name: siteConfig.businessName,
        url: siteConfig.website,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: siteConfig.businessName,
      url: siteConfig.website,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logoUrl,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
}

export function generateWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: page.url,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.businessName,
      url: siteConfig.website,
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.businessName,
    },
  };
}

export function renderSchema(schema: Record<string, unknown>) {
  return JSON.stringify(schema);
}
