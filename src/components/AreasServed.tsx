import { siteConfig } from "@/config/site";

export default function AreasServed() {
  const { areasServed } = siteConfig;

  return (
    <section id="areas" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            {areasServed.heading}
          </h2>
          <p className="text-lg text-gray-600">{areasServed.subheading}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {areasServed.areas.map((area) => (
            <div
              key={area.name}
              className="bg-gray-50 rounded-xl p-6 hover:bg-primary/5 transition-colors border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h3 className="font-bold text-dark">{area.name}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need web design services in {siteConfig.city} or the surrounding area?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all"
          >
            Contact us for a free quote
          </a>
        </div>
      </div>
    </section>
  );
}
