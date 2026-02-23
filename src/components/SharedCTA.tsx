import { siteConfig } from "@/config/site";

export default function SharedCTA() {
  const { cta } = siteConfig;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          {cta.heading}
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {cta.subheading}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {cta.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-white/90 text-sm"
            >
              <svg
                className="w-5 h-5 text-accent"
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={cta.buttonLink}
            className="inline-flex items-center justify-center rounded-full bg-white text-primary px-8 py-4 text-lg font-bold hover:bg-gray-50 transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            {cta.buttonText}
            <svg
              className="w-5 h-5 ml-2"
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
        </div>
      </div>
    </section>
  );
}
