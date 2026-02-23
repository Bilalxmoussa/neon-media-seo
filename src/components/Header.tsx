"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = siteConfig.navigation.main;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300 ${scrolled ? "bg-primary" : "bg-white"}`}>
              <span className={`font-bold text-xs transition-colors duration-300 ${scrolled ? "text-white" : "text-black"}`}>N</span>
            </div>
            <span className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}>
              {siteConfig.businessName}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm font-medium ${
                  scrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/#contact"
              className={`rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 ${
                scrolled
                  ? "bg-primary text-white hover:bg-primary-dark"
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              Free Strategy Call
            </a>
          </div>

          <button
            className={`lg:hidden rounded-full px-3 py-2 text-sm transition-colors duration-300 ${
              scrolled
                ? "bg-gray-100 text-gray-700"
                : "bg-white/10 text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className={`lg:hidden pb-4 border-t ${scrolled ? "border-gray-100" : "border-white/10"}`}>
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <a
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-sm font-medium block ${
                      scrolled
                        ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div className="ml-4 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium block ${
                            scrolled
                              ? "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
                              : "text-white/50 hover:text-white/80 hover:bg-white/10"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="/#contact"
                className={`rounded-full px-5 py-2.5 text-sm font-semibold text-center mt-2 ${
                  scrolled
                    ? "bg-primary text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Strategy Call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
