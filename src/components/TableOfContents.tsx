"use client";

interface TocItem {
  id: string;
  title: string;
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-8">
      <h2 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
        Table of Contents
      </h2>
      <ol className="space-y-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-gray-500 hover:text-primary transition-colors flex items-start gap-2"
            >
              <span className="text-gray-300 font-mono text-xs mt-0.5">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
