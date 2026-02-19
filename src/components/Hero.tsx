import { siteConfig } from "@/config/site";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
            {siteConfig.city}&apos;s #1 Rated Web Design Agency
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark leading-tight mb-6">
            {hero.headline}
            <span className="block text-primary mt-2">
              {hero.heroSuffix}
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={hero.ctaLink}
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              aria-label={`${hero.ctaText} with ${siteConfig.businessName}`}
            >
              {hero.ctaText}
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
            <a
              href={hero.secondaryCtaLink}
              className="inline-flex items-center justify-center border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-primary hover:text-primary transition-all"
            >
              {hero.secondaryCtaText}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-12 max-w-3xl mx-auto">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl lg:text-3xl font-extrabold text-dark">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
