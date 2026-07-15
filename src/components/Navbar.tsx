"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { nav } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Comfisa - Inicio"
        >
          <Image
            src="/logoComfisa.png"
            alt="Comfisa - Materiales de construcción"
            width={160}
            height={54}
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              href={n.to}
              // activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface hover:text-brand-blue"
              // activeProps={{ className: "text-brand-blue bg-surface" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+51964869923"
            className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-orange-dark hover:shadow-md"
          >
            <Phone className="h-4 w-4" />
            Cotizar ahora
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-brand-blue md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                href={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-surface"
                // activeProps={{ className: "text-brand-blue bg-surface" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:+51964869923"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand-orange px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Cotizar ahora
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
}
