import { CheckCircle2, Package, Truck, Users } from "lucide-react";

export default function Values() {
  return (
    <section className="border-b border-border bg-surface py-14">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {[
          {
            icon: Package,
            title: "Stock permanente",
            desc: "Reposición diaria en todos nuestros locales.",
          },
          {
            icon: Truck,
            title: "Entregas rápidas",
            desc: "Delivery a obra en toda Lima.",
          },
          {
            icon: Users,
            title: "Asesoría experta",
            desc: "Te ayudamos a elegir el material correcto.",
          },
          {
            icon: CheckCircle2,
            title: "Marcas líderes",
            desc: "Trabajamos solo con productos certificados.",
          },
        ].map((f) => (
          <div
            key={f.title}
            className="flex gap-4 rounded-xl bg-background p-5 shadow-sm ring-1 ring-border"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
              <f.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-brand-blue">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
