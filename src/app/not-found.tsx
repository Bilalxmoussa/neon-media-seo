import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <main className="pt-20 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center py-20">
        <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-dark mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist. Here are
          some helpful links to get you back on track.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
          <a
            href="/"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Go Home
          </a>
          <a
            href="/blog"
            className="border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            Read Our Blog
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <a href="/seo-ottawa" className="text-primary hover:underline">
            SEO Services
          </a>
          <span className="text-gray-300">|</span>
          <a href="/web-design-ottawa/restaurants" className="text-primary hover:underline">
            Restaurant Web Design
          </a>
          <span className="text-gray-300">|</span>
          <a href="/web-design-ottawa/dental" className="text-primary hover:underline">
            Dental Web Design
          </a>
          <span className="text-gray-300">|</span>
          <a href="/#contact" className="text-primary hover:underline">
            Contact Us
          </a>
        </div>
        <p className="text-gray-400 text-xs mt-12">
          {siteConfig.businessName} &middot; {siteConfig.keyword}
        </p>
      </div>
    </main>
  );
}
