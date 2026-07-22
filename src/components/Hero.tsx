import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import heroComfisa from "../assets/hero-comfisa.jpg";
import localFlavi from "../assets/local-flavi.jpeg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue text-white">
      <div className="absolute inset-0 opacity-25">
        <Image
          src={heroComfisa}
          alt="o"
          width={1600}
          height={1200}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-blue via-brand-blue/85 to-brand-blue/20" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-orange ring-1 ring-brand-orange/40">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            Distribución mayorista y minorista
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Construye con confianza
            construye con <span className="text-brand-orange">COMFISA</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/85">
            GRUPO COMFISA es una empresa peruana dedicada a la venta de
            materiales para la construcción. Desde el 2017, ofrecemos productos
            de calidad, atención personalizada y un servicio confiable para cada
            proyecto.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-brand-orange-dark hover:shadow-xl"
            >
              Ver productos <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/locales"
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/15"
            >
              <MapPin className="h-4 w-4" /> Nuestros locales
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">
                Locales
              </dt>
              <dd className="mt-1 text-3xl font-bold text-brand-orange">4</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">
                Categorías
              </dt>
              <dd className="mt-1 text-3xl font-bold text-brand-orange">9+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">
                Años
              </dt>
              <dd className="mt-1 text-3xl font-bold text-brand-orange">5+</dd>
            </div>
          </dl>
        </div>

        <div className="hidden lg:col-span-6 lg:block">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <Image
              src={localFlavi}
              alt="Almacén de materiales de construcción Comfisa"
              width={2600}
              height={2200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
