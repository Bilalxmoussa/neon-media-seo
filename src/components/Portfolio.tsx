import { siteConfig } from "@/config/site";

export default function Portfolio() {
  const { portfolio } = siteConfig;

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            {portfolio.heading}
          </h2>
          <p className="text-lg text-gray-600">{portfolio.subheading}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolio.items.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                role="img"
                aria-label={`${item.title} - ${item.category} web design project by ${siteConfig.businessName}`}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary/30 mb-1">
                    {item.category.charAt(0)}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                  {item.results}
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                  {item.category}
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center gap-2"
          >
            Want results like these? Let&apos;s talk about your project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
