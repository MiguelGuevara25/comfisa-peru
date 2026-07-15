import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "/" },
      ...items.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.label,
        ...(c.to ? { item: c.to } : {}),
      })),
    ],
  };
  return (
    <nav
      aria-label="Migas de pan"
      className="border-b border-border/60 bg-surface"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-xs sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-brand-blue"
        >
          <Home className="h-3.5 w-3.5" />
          <span>Inicio</span>
        </Link>
        {items.map((c, i) => (
          <span key={i} className="flex items-center gap-2">
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" />
            {c.to && i < items.length - 1 ? (
              <Link
                href={c.to}
                className="text-muted-foreground transition-colors hover:text-brand-blue"
              >
                {c.label}
              </Link>
            ) : (
              <span className="font-medium text-brand-blue">{c.label}</span>
            )}
          </span>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
