import { siteConfig } from "@/config/site";

export default function CTA() {
  const { cta } = siteConfig;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {cta.heading}
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          {cta.subheading}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {cta.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-gray-300 text-sm"
            >
              <svg
                className="w-5 h-5 text-green-400"
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
            </div>
          ))}
        </div>

        <a
          href={cta.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-primary text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
          aria-label={`${cta.buttonText} with ${siteConfig.businessName}`}
        >
          {cta.buttonText}
          <svg
            className="w-5 h-5 ml-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
          <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
