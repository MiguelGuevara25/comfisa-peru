"use client";

import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { locations } from "@/src/data";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function Contacto() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contacto" }]} />
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">
              Escríbenos
            </span>
            <h1 className="mt-2 text-4xl font-bold text-brand-blue sm:text-5xl">
              ¿Necesitas materiales?
            </h1>
            <p className="mt-4 text-muted-foreground">
              Envíanos tu lista y te respondemos con una cotización mayorista en
              pocas horas.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href="tel:+51994045254"
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 hover:border-brand-orange hover:bg-surface"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground">
                    Teléfono
                  </p>
                  <p className="font-semibold text-brand-blue">994 045 254</p>
                </div>
              </a>
              <a
                href="https://wa.me/51964869923"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 hover:border-brand-orange hover:bg-surface"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-orange text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground">
                    WhatsApp
                  </p>
                  <p className="font-semibold text-brand-blue">
                    +51 964 869 923
                  </p>
                </div>
              </a>
              <a
                href="mailto:ventas@comfisa.com.pe"
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-4 hover:border-brand-orange hover:bg-surface"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-blue text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground">
                    Correo
                  </p>
                  <p className="font-semibold text-brand-blue">
                    ventas@comfisa.com.pe
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              className="rounded-2xl bg-surface p-6 ring-1 ring-border sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const msg = `Hola Comfisa, soy ${fd.get("nombre")}.\n\n${fd.get("mensaje")}\n\nTeléfono: ${fd.get("telefono")}`;
                window.open(
                  `https://wa.me/51964869923?text=${encodeURIComponent(msg)}`,
                  "_blank",
                );
              }}
            >
              <h2 className="text-xl font-bold text-brand-blue">
                Solicitar cotización
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Completa el formulario y te contactamos por WhatsApp.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-sm">
                  <span className="mb-1 block font-medium text-foreground">
                    Nombre
                  </span>
                  <input
                    required
                    name="nombre"
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  />
                </label>
                <label className="text-sm">
                  <span className="mb-1 block font-medium text-foreground">
                    Teléfono
                  </span>
                  <input
                    required
                    name="telefono"
                    type="tel"
                    className="w-full rounded-md border border-border bg-background px-3 py-2.5 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm">
                <span className="mb-1 block font-medium text-foreground">
                  Correo (opcional)
                </span>
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                />
              </label>
              <label className="mt-4 block text-sm">
                <span className="mb-1 block font-medium text-foreground">
                  Mensaje / Lista de materiales
                </span>
                <textarea
                  required
                  name="mensaje"
                  rows={5}
                  className="w-full rounded-md border border-border bg-background px-3 py-2.5 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                />
              </label>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-orange px-5 py-3 text-sm font-semibold text-white hover:bg-brand-orange-dark sm:w-auto"
              >
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-blue">
            Contactos por local
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((l) => (
              <div
                key={l.slug}
                className="rounded-xl bg-background p-5 ring-1 ring-border"
              >
                <h3 className="font-semibold text-brand-blue">{l.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {l.district}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-sm">
                  {l.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\D/g, "")}`}
                      className="rounded-md bg-brand-blue/5 px-2.5 py-1 font-medium text-brand-blue hover:bg-brand-blue/10"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
