import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-8 shadow-elevated sm:p-12">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-orange/10 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-orange ring-1 ring-brand-orange/30">
                Cotización rápida
              </span>
              <h2 className="mt-4 text-3xl font-bold text-brand-blue sm:text-4xl">
                ¿Necesitas una cotización?
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                Envíanos tu lista de materiales y te respondemos con precios de
                mayorista el mismo día.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-brand-orange-dark hover:shadow-xl"
              >
                Solicitar cotización <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+51994045254"
                className="inline-flex items-center gap-2 rounded-md border border-brand-blue/20 bg-white px-6 py-3 text-sm font-semibold text-brand-blue hover:bg-brand-blue/5"
              >
                Llamar 994 045 254
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
