import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { locations } from "@/src/data";
import { mapEmbedUrl, mapLinkUrl } from "@/src/utils";
import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";

export default function Locales() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Locales" }]} />
      <section className="bg-brand-blue py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Cobertura Lima
          </span>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold sm:text-5xl">
            Nuestros 5 locales
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Elige el local más cercano a tu obra. Todos manejan stock propio,
            atención personalizada y coordinación de despachos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="space-y-10">
          {locations.map((l, i) => (
            <article
              key={l.slug}
              className="grid overflow-hidden rounded-2xl bg-background shadow-sm ring-1 ring-border md:grid-cols-5"
            >
              <div className="p-7 md:col-span-2">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                    {l.short}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-bold text-brand-blue">
                  {l.name}
                </h2>

                <div className="mt-5 space-y-3 text-sm">
                  <p className="flex items-start gap-2 text-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                    <span>
                      {l.address}, {l.district}
                    </span>
                  </p>
                  <div className="flex items-start gap-2">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {l.phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p.replace(/\D/g, "")}`}
                          className="font-medium text-brand-blue hover:text-brand-orange"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="flex items-start gap-2 text-muted-foreground">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                    <span>
                      {l.hours.weekdays}
                      <br />
                      {l.hours.saturday}
                    </span>
                  </p>
                </div>

                <a
                  href={mapLinkUrl(l.mapQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-dark"
                >
                  Cómo llegar <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="md:col-span-3 h-72 md:h-auto">
                <iframe
                  title={`Mapa de ${l.name}`}
                  src={mapEmbedUrl(l.mapQuery)}
                  loading="lazy"
                  className="h-full min-h-70 w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
