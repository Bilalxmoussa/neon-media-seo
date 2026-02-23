"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const { hero } = siteConfig;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-sky-50">
      {/* Decorative blobs */}
      <div aria-hidden className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div aria-hidden className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl place-items-center px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28">
        <div className={`mx-auto text-center ${isMounted ? "animate-fadeInUp" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-[11px] uppercase tracking-wider text-primary ring-1 ring-primary/20">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Ottawa&apos;s Top-Rated Web Design Agency
          </span>

          <h1
            style={{ animationDelay: "200ms" }}
            className={`mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl ${isMounted ? "animate-fadeInUp" : "opacity-0"}`}
          >
            {hero.headline}
            <span className="block gradient-text mt-2">
              {hero.heroSuffix}
            </span>
          </h1>

          <p
            style={{ animationDelay: "300ms" }}
            className={`mx-auto mt-5 max-w-2xl text-balance text-gray-600 md:text-lg ${isMounted ? "animate-fadeInUp" : "opacity-0"}`}
          >
            {hero.subheadline}
          </p>

          <div
            style={{ animationDelay: "400ms" }}
            className={`mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row ${isMounted ? "animate-fadeInUp" : "opacity-0"}`}
          >
            <a
              href={hero.ctaLink}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark hover:-translate-y-0.5"
              aria-label={`${hero.ctaText} with ${siteConfig.businessName}`}
            >
              {hero.ctaText}
            </a>
            <a
              href={hero.secondaryCtaLink}
              className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition"
            >
              {hero.secondaryCtaText}
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{ animationDelay: "500ms" }}
          className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 w-full max-w-3xl ${isMounted ? "animate-fadeInUp" : "opacity-0"}`}
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="text-2xl lg:text-3xl font-extrabold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
