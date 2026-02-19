import { siteConfig } from "@/config/site";

export default function Process() {
  const { process } = siteConfig;

  return (
    <section id="process" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            {process.heading}
          </h2>
          <p className="text-lg text-gray-600">{process.subheading}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {process.steps.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  {step.number}
                </div>
                <div className="flex-1 pb-8 border-b border-gray-100 last:border-0">
                  <h3 className="text-xl font-bold text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.steps.length - 1 && (
                  <div className="hidden" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25"
              aria-label="Start your web design project with a free strategy call"
            >
              Start Your Project Today
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
