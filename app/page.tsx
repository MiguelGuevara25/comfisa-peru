import Categories from "@/src/components/Categories";
import CTA from "@/src/components/CTA";
import Hero from "@/src/components/Hero";
import Values from "@/src/components/Values";
import { locations } from "@/src/data";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Categories />
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
              Cobertura
            </span>
            <h2 className="mt-2 text-3xl font-bold text-brand-blue sm:text-4xl">
              5 locales estratégicos en Lima
            </h2>
            <p className="mt-3 text-muted-foreground">
              Estamos cerca de tu obra. Visita cualquiera de nuestras sedes para
              asesoría y compra directa.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {locations.slice(0, 3).map((l) => (
              <div
                key={l.slug}
                className="card-hover rounded-xl bg-background p-5 ring-1 ring-border"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                  {l.short}
                </span>
                <h3 className="mt-2 font-bold text-brand-blue">{l.name}</h3>
                <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                  {l.address}, {l.district}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/locales"
              className="inline-flex items-center gap-2 rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-dark"
            >
              Ver los 5 locales <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
