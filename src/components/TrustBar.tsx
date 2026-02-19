import { siteConfig } from "@/config/site";

export default function TrustBar() {
  const { trustBar } = siteConfig;

  return (
    <section className="py-10 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 uppercase tracking-wider font-semibold mb-6">
          {trustBar.heading}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          {trustBar.logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
              title={logo.name}
            >
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-xs font-bold text-gray-500">
                {logo.initial}
              </div>
              <span className="text-sm font-medium hidden sm:inline">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
