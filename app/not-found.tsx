import Link from "next/link";

export default function NotFound() {
  return (
    <div className="border flex items-center justify-center h-screen bg-surface">
      <div className="flex flex-col items-center gap-4 w-115">
        <span className="uppercase text-brand-orange">Error 404</span>
        <h2 className="text-5xl font-bold text-brand-blue text-center">
          Página no encontrada
        </h2>
        <p className="text-muted-foreground text-center">
          La página que buscas no existe o fue movida. Puedes volver al inicio o
          explorar nuestros productos
        </p>
        <Link
          className="inline-flex items-center gap-2 rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:bg-brand-blue-dark"
          href="/"
        >
          Ir al inicio
        </Link>
      </div>
    </div>
  );
}
