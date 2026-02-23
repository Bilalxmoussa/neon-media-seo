"use client";

import { siteConfig } from "@/config/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CTA() {
  const { cta } = siteConfig;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {cta.heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {cta.subheading}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {cta.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-gray-600 text-sm"
              >
                <svg
                  className="w-5 h-5 text-green-500"
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
            className="inline-flex items-center justify-center rounded-full bg-primary text-white px-10 py-5 text-lg font-bold hover:bg-primary-dark transition-all hover:shadow-2xl hover:-translate-y-1"
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

          <div className="mt-8 flex items-center justify-center text-gray-500 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
