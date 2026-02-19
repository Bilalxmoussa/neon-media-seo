import { siteConfig } from "@/config/site";

export default function SharedCTA() {
  return (
    <section className="py-16 lg:py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Grow Your Ottawa Business Online?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Book a free 30-minute strategy call with our team. We&apos;ll audit
          your current online presence and create a custom plan to help your
          business attract more customers.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["Free website audit", "Custom growth strategy", "No obligation", "30-minute call"].map(
            (feature) => (
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
            )
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.cta.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-dark transition-all hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
          >
            Book a Free Strategy Call
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
            href="/"
            className="text-gray-400 hover:text-white transition-colors font-medium"
          >
            View All Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
