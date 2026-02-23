"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export function Web3HeroAnimated() {
  const { hero, trustBar } = siteConfig;

  // Symmetric pillar heights (percent). Tall at edges, low at center.
  const pillars = [92, 84, 78, 70, 62, 54, 46, 34, 18, 34, 46, 54, 62, 70, 78, 84, 92];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate h-screen overflow-hidden bg-black text-white">
      {/* ================== BACKGROUND ================== */}
      {/* Luminous elliptical gradients — steel-blue palette */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30"
        style={{
          backgroundImage: [
            // Main central dome — steel-blue band
            "radial-gradient(80% 55% at 50% 52%, rgba(132,171,191,0.45) 0%, rgba(90,143,168,0.46) 27%, rgba(36,56,67,0.38) 47%, rgba(30,41,59,0.45) 60%, rgba(8,8,12,0.92) 78%, rgba(0,0,0,1) 88%)",
            // Warm sweep from top-left — lighter primary
            "radial-gradient(85% 60% at 14% 0%, rgba(163,196,212,0.65) 0%, rgba(104,146,168,0.58) 30%, rgba(28,44,48,0.0) 64%)",
            // Cool accent rim on top-right
            "radial-gradient(70% 50% at 86% 22%, rgba(88,160,210,0.40) 0%, rgba(16,18,28,0.0) 55%)",
            // Soft top vignette
            "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0) 40%)",
          ].join(","),
          backgroundColor: "#000",
        }}
      />

      {/* Vignette corners */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-[radial-gradient(140%_120%_at_50%_0%,transparent_60%,rgba(0,0,0,0.85))]" />

      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 mix-blend-screen opacity-30"
        style={{
          backgroundImage: [
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.09) 0 1px, transparent 1px 96px)",
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 24px)",
            "repeating-radial-gradient(80% 55% at 50% 52%, rgba(255,255,255,0.08) 0 1px, transparent 1px 120px)",
          ].join(","),
          backgroundBlendMode: "screen",
        }}
      />

      {/* ================== COPY ================== */}
      <div className="relative z-10 mx-auto grid w-full max-w-5xl place-items-center px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28">
        <div className={`mx-auto text-center ${isMounted ? "animate-fadeInUp" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70 ring-1 ring-white/10 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#84ABBF]" /> {siteConfig.tagline}
          </span>

          <h1
            style={{ animationDelay: "200ms" }}
            className={`mt-6 text-4xl font-bold tracking-tight md:text-6xl ${isMounted ? "animate-fadeInUp" : "opacity-0"}`}
          >
            {hero.headline}
            <span className="block mt-2 bg-gradient-to-r from-[#A3C4D4] via-[#84ABBF] to-[#5A8FA8] bg-clip-text text-transparent">
              {hero.heroSuffix}
            </span>
          </h1>

          <p
            style={{ animationDelay: "300ms" }}
            className={`mx-auto mt-5 max-w-2xl text-balance text-white/80 md:text-lg ${isMounted ? "animate-fadeInUp" : "opacity-0"}`}
          >
            {hero.subheadline}
          </p>

          <div
            style={{ animationDelay: "400ms" }}
            className={`mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row ${isMounted ? "animate-fadeInUp" : "opacity-0"}`}
          >
            <a
              href={hero.ctaLink}
              className="inline-flex items-center justify-center rounded-full bg-[#84ABBF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#84ABBF]/25 transition hover:bg-[#6892A8] hover:-translate-y-0.5"
            >
              {hero.ctaText}
            </a>
            <a
              href={hero.secondaryCtaLink}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:border-white/40 transition"
            >
              {hero.secondaryCtaText}
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{ animationDelay: "500ms" }}
          className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 w-full max-w-3xl ${isMounted ? "animate-fadeInUp" : "opacity-0"}`}
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4">
              <div className="text-2xl lg:text-3xl font-extrabold text-[#84ABBF]">
                {stat.value}
              </div>
              <div className="text-sm text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ================== PARTNERS ================== */}
      <div className="relative z-10 mx-auto mt-4 w-full max-w-6xl px-6 pb-24">
        <p className="text-center text-xs uppercase tracking-wider text-white/40 mb-6">{trustBar.heading}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {trustBar.logos.slice(0, 8).map((brand) => (
            <div key={brand.name} className="text-xs uppercase tracking-wider text-white/60">{brand.name}</div>
          ))}
        </div>
      </div>

      {/* ================== FOREGROUND ================== */}
      {/* Center-bottom rectangular glow */}
      <div
        className="pointer-events-none absolute bottom-[128px] left-1/2 z-0 h-36 w-28 -translate-x-1/2 rounded-md bg-gradient-to-b from-[#84ABBF]/75 via-[#A3C4D4]/60 to-transparent"
        style={{ animation: "subtlePulse 6s ease-in-out infinite" }}
      />

      {/* Stepped pillars silhouette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[54vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-px px-[2px]">
          {pillars.map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-black transition-all duration-1000 ease-in-out"
              style={{
                height: isMounted ? `${h}%` : "0%",
                transitionDelay: `${Math.abs(i - Math.floor(pillars.length / 2)) * 60}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
