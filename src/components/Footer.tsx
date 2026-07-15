import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { locations } from '../data'

export default function Footer() {
  return (
    <footer className="bg-[#14161c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="mb-5 inline-flex rounded-lg p-3">
              <Image
                src="/icoComfisa.png"
                alt="Comfisa"
                width={140}
                height={46}
                className="h-25 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/75">
              Distribuidora de materiales de construcción al por mayor y menor.
              5 locales en Lima para atender su obra con stock, precios y confianza.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/80 hover:text-brand-orange">Inicio</Link></li>
              <li><Link href="/nosotros" className="text-white/80 hover:text-brand-orange">Nosotros</Link></li>
              <li><Link href="/productos" className="text-white/80 hover:text-brand-orange">Productos</Link></li>
              <li><Link href="/locales" className="text-white/80 hover:text-brand-orange">Nuestros Locales</Link></li>
              <li><Link href="/contacto" className="text-white/80 hover:text-brand-orange">Contacto</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Nuestros Locales
            </h4>
            <ul className="grid gap-4 sm:grid-cols-2">
              {locations.map((l) => (
                <li key={l.slug} className="text-sm">
                  <p className="font-semibold text-white">{l.name}</p>
                  <p className="mt-1 flex items-start gap-1.5 text-white/70">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-orange" />
                    <span>{l.address}, {l.district}</span>
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-white/70">
                    <Phone className="h-3.5 w-3.5 text-brand-orange" />
                    {l.phones[0]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-white/15 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Comfisa - Materiales de Construcción. Todos los derechos reservados.</p>
          <div className="flex flex-wrap gap-5">
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> L-V 7:30-17:30 · S 7:30-14:00</span>
            <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" /> ventas@comfisa.com.pe</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
