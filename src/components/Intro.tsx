"use client";

import { siteConfig } from "@/config/site";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Intro() {
  const { intro } = siteConfig;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              {intro.heading}
            </h2>
            <div className="space-y-6">
              {intro.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-gray-500">Custom Designed</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">&lt;2s</div>
                <div className="text-sm text-gray-500">Average Load Time</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">SEO</div>
                <div className="text-sm text-gray-500">Built-In From Day 1</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#services"
                className="text-primary font-semibold hover:text-primary-dark transition-colors inline-flex items-center gap-1"
              >
                Explore the full toolkit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
