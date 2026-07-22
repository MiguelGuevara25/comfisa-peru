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
              Construyendo confianza desde 2017
            </h1>
            <p className="mt-5 text-muted-foreground">
              En COMFISA creemos que cada gran proyecto comienza con materiales
              de calidad y un servicio en el que nuestros clientes puedan
              confiar. Desde 2017, trabajamos para abastecer a ferreterías,
              constructoras, obras y todo tipo de proyectos de construcción,
              ofreciendo atención personalizada, asesoría especializada y un
              firme compromiso con la puntualidad, la calidad y el buen
              servicio. Nuestro objetivo es ser el aliado estratégico de
              nuestros clientes, contribuyendo al éxito de cada proyecto.
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
                title: "Nuestra misión",
                text: "Brindar soluciones integrales en materiales de construcción, ofreciendo productos de calidad, precios competitivos y un servicio confiable que impulse el crecimiento de ferreterías, constructoras y todo tipo de proyectos.",
              },
              {
                icon: Award,
                title: "Calidad garantizada",
                text: "Seleccionamos cuidadosamente nuestros productos para ofrecer un abastecimiento confiable y responder a las necesidades de cada cliente.",
              },
              {
                icon: HeartHandshake,
                title: "Atención personalizada",
                text: "Nuestro equipo brinda asesoría especializada para ayudarte a encontrar la mejor solución, con un servicio cercano, ágil y comprometido.",
              },
              {
                icon: Truck,
                title: "Logística eficiente",
                text: "Realizamos entregas oportunas y coordinadas para mantener el abastecimiento de ferreterías, obras y proyectos de construcción en toda Lima.",
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
              Siempre cerca de tu obra
            </h2>
            <p className="mt-4 text-muted-foreground">
              Con 4 locales estratégicamente ubicados en Lima Sur, COMFISA
              garantiza una atención rápida, disponibilidad de productos y
              entregas oportunas para que tu proyecto nunca se detenga. Nuestro
              equipo trabaja con eficiencia y compromiso para responder a cada
              necesidad, desde pedidos puntuales hasta abastecimientos de gran
              volumen.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Stock disponible para una atención inmediata.",
                "Precios competitivos para compras al por mayor y menor.",
                "Facturación electrónica al instante.",
                "Delivery coordinado en Lima Metropolitana.",
                "Asesoría personalizada para cada proyecto.",
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
