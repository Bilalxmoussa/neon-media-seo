"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = siteConfig.navigation.main;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold text-dark">
              {siteConfig.businessName}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Free Strategy Call
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary px-3 py-2 rounded-lg hover:bg-gray-50 text-sm font-medium block"
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
                          className="text-gray-500 hover:text-primary px-3 py-1.5 rounded-lg hover:bg-gray-50 text-xs font-medium block"
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
                className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-primary-dark mt-2"
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
