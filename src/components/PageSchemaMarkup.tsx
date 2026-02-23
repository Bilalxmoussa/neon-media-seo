import {
  generateServiceSchema,
  generateFAQSchema,
  generateArticleSchema,
  generateWebPageSchema,
} from "@/lib/schema";

interface PageSchemaProps {
  type: "service" | "article" | "webpage";
  service?: {
    name: string;
    description: string;
    url: string;
  };
  article?: {
    title: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified: string;
    image?: string;
    wordCount?: number;
    keywords?: string[];
    articleSection?: string;
  };
  webpage?: {
    title: string;
    description: string;
    url: string;
  };
  faqs?: { question: string; answer: string }[];
}

export default function PageSchemaMarkup({
  type,
  service,
  article,
  webpage,
  faqs,
}: PageSchemaProps) {
  return (
    <>
      {type === "service" && service && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceSchema(service)),
          }}
        />
      )}
      {type === "article" && article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateArticleSchema(article)),
          }}
        />
      )}
      {(type === "webpage" || type === "service") &&
        (webpage || service) && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                generateWebPageSchema(
                  webpage || {
                    title: service!.name,
                    description: service!.description,
                    url: service!.url,
                  }
                )
              ),
            }}
          />
        )}
      {faqs && faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(faqs)),
          }}
        />
      )}
    </>
  );
}
