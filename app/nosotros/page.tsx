import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import Image from "next/image";
import heroImg from "../../src/assets/hero-warehouse.jpg";
import { Award, HeartHandshake, Target, Truck } from "lucide-react";

export default function Nosotros() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Nosotros" }]} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
              Nuestra historia
            </span>
            <h1 className="mt-2 text-4xl font-bold text-brand-blue sm:text-5xl">
              Construyendo confianza desde hace más de 15 años
            </h1>
            <p className="mt-5 text-muted-foreground">
              Comfisa nació con la misión de acercar los mejores materiales de
              construcción a las obras de todo Lima. Hoy operamos 5 locales
              estratégicos en Pachacamac, Villa El Salvador y Pucusana,
              atendiendo tanto a maestros de obra como a grandes constructoras.
            </p>
            <p className="mt-4 text-muted-foreground">
              Trabajamos con las marcas líderes del mercado peruano — Sol,
              Andino, Pacasmayo, Aceros Arequipa — para garantizar la calidad y
              durabilidad de cada proyecto.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
            <Image
              src={heroImg}
              alt="Equipo de Comfisa atendiendo a clientes"
              width={1400}
              height={900}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "Misión",
                text: "Ofrecer materiales de construcción de calidad al mejor precio para hacer realidad cada proyecto.",
              },
              {
                icon: Award,
                title: "Calidad",
                text: "Trabajamos únicamente con marcas certificadas y con reposición constante de stock.",
              },
              {
                icon: HeartHandshake,
                title: "Atención",
                text: "Asesoría personalizada por personal con experiencia en obra.",
              },
              {
                icon: Truck,
                title: "Logística",
                text: "Delivery ágil a toda Lima y despachos grandes coordinados.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-xl bg-background p-6 ring-1 ring-border"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue text-white">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-brand-blue">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
            <Image
              src={heroImg}
              alt="Fachada de tienda Comfisa en Lima"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-brand-blue">
              Al lado de tu obra
            </h2>
            <p className="mt-4 text-muted-foreground">
              Con 5 locales distribuidos en Lima Sur, Comfisa te acerca los
              materiales que necesitas — sin largas esperas ni sobreprecios.
              Cada sede maneja stock propio para responder a obras grandes y
              pedidos pequeños con la misma seriedad.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Precios mayoristas para constructoras y empresas.",
                "Facturación electrónica inmediata.",
                "Delivery coordinado en toda Lima Metropolitana.",
                "Asesoría técnica sin costo.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
