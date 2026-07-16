import { Flame } from "lucide-react";
import { pizzas, sauces, addons, pizzaNote, menuFooterNote } from "@/data/menu";

const tagStyle: Record<string, string> = {
  Aštri: "border-ember/40 bg-ember/10 text-ember",
  Naujiena: "border-primary/40 bg-primary/15 text-primary",
};

export function Menu() {
  return (
    <section id="meniu" className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-sm uppercase tracking-[0.24em] text-primary/90">Mūsų meniu</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Išsirinkite savo <span className="text-primary">picą</span>
            </h2>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary">
            <Flame className="h-4 w-4" />
            {pizzaNote}
          </div>
        </div>

        {/* Pizzas */}
        <div className="mt-14">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {pizzas.map((item) => (
              <article
                key={item.id}
                className="group card-surface premium-hover p-6 md:p-7 flex flex-col h-full"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg md:text-xl font-semibold leading-tight text-foreground uppercase tracking-tight">
                    {item.name}
                  </h3>
                  <span className="shrink-0 text-lg font-semibold text-primary">11 €</span>
                </div>

                {item.tags && item.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${tagStyle[t] ?? "border-white/15 bg-white/5 text-foreground/80"}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <p className="mt-4 text-sm text-foreground/75 leading-relaxed">
                  {item.ingredients}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Sauces & Addons */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="card-surface p-7 md:p-8">
            <h3 className="text-2xl font-semibold">Padažai</h3>
            <ul className="mt-6 space-y-5">
              {sauces.map((s) => (
                <li key={s.id} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-base font-semibold">{s.name}</span>
                    <span className="text-base font-semibold text-primary">{s.price}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.ingredients}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface p-7 md:p-8">
            <h3 className="text-2xl font-semibold">Priedai</h3>
            <ul className="mt-6 space-y-4">
              {addons.map((a) => (
                <li
                  key={a.id}
                  className="flex items-center justify-between gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="text-base text-foreground/90">{a.name}</span>
                  <span className="text-base font-semibold text-primary">{a.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          {menuFooterNote}
        </p>
      </div>
    </section>
  );
}
