import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { categories } from "../data";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
              Catálogo
            </span>
            <h2 className="mt-2 text-3xl font-bold text-brand-blue sm:text-4xl">
              Todo para tu obra en un solo lugar
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Desde cimientos hasta acabados, contamos con las mejores marcas
              del sector.
            </p>
          </div>
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-orange"
          >
            Ver catálogo completo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {categories.slice(0, 8).map((c) => (
            <Link
              key={c.slug}
              href="/productos"
              // hash={c.slug}
              className="group card-hover relative overflow-hidden rounded-xl bg-background ring-1 ring-border"
            >
              <div className="aspect-square overflow-hidden bg-surface">
                <Image
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-brand-blue">{c.name}</h3>
                {/* <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                  {c.short}
                </p> */}
              </div>
              <span className="absolute right-3 top-3 rounded-full bg-brand-orange px-2 py-0.5 text-[10px] font-bold uppercase text-white opacity-0 transition-opacity group-hover:opacity-100">
                Ver
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
