interface RelatedItem {
  title: string;
  href: string;
  type: "industry" | "blog" | "service";
}

export default function RelatedContent({
  items,
}: {
  items: RelatedItem[];
}) {
  const typeLabels = {
    industry: "Industry",
    blog: "Blog Post",
    service: "Service",
  };

  return (
    <aside className="bg-gray-50 border border-gray-100 rounded-xl p-6 lg:p-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Pages</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="flex items-start gap-3 group text-sm"
            >
              <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-500 shrink-0 mt-0.5">
                {typeLabels[item.type]}
              </span>
              <span className="text-gray-600 group-hover:text-primary transition-colors">
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
