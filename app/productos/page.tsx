import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { categories } from "@/src/data";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Productos() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Productos" }]} />
      <section className="bg-brand-blue py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Catálogo
          </span>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold sm:text-5xl">
            Productos para cada etapa de tu obra
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Desde el cimiento hasta los acabados finales. Conoce nuestras{" "}
            {categories.length} categorías principales y solicita cotización
            directamente por WhatsApp o teléfono.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        {/* Quick jump nav */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold text-brand-blue transition-colors hover:border-brand-orange hover:bg-brand-orange/5"
            >
              {c.name}
            </a>
          ))}
        </div>

        <div className="space-y-16">
          {categories.map((c, i) => (
            <article
              key={c.slug}
              id={c.slug}
              className="grid gap-8 scroll-mt-24 lg:grid-cols-2 lg:items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-2xl bg-surface shadow-lg ring-1 ring-border">
                  <Image
                    src={c.image}
                    alt={c.name}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="hidden md:block text-xs font-semibold uppercase tracking-widest text-brand-orange">
                  {`0${i + 1}`.slice(-2)} · Categoría
                </span>

                <hr className="my-4 border-border md:hidden" />

                <h2 className="mt-2 text-3xl font-bold text-brand-blue uppercase">
                  {c.name}
                </h2>
                {/* <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {c.short}
                </p> */}
                <p className="mt-4 text-foreground/85">{c.description}</p>
                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                        <Check className="h-3 w-3" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+51964869923"
                    className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-orange-dark"
                  >
                    Cotizar
                  </a>
                  <a
                    href={`https://wa.me/51908913641?text=${encodeURIComponent(`Hola Comfisa, necesito cotización de ${c.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-brand-blue hover:bg-surface"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
