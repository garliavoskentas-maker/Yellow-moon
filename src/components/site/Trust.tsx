import { Star, Flame, MapPin, Truck } from "lucide-react";

const items = [
  {
    icon: Star,
    title: "4,7 / 5",
    subtitle: "Google įvertinimas",
    detail: "350+ Google atsiliepimų",
  },
  {
    icon: Flame,
    title: "Malkinė krosnis",
    subtitle: "Autentiškas skonis",
    detail: "Kiekviena pica kepama tikroje malkinėje krosnyje.",
  },
  {
    icon: MapPin,
    title: "2 lokacijos",
    subtitle: "Kauno rajone",
    detail: "Ringaudai ir Domeikava.",
  },
  {
    icon: Truck,
    title: "Patogus užsakymas",
    subtitle: "Pristatymas ir atsiėmimas",
    detail: "Bolt Food, Wolt arba telefonu.",
  },
];

export function Trust() {
  return (
    <section aria-label="Kodėl Yellow Moon" className="py-16 md:py-20">
      <div className="container-x">
        <div className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, subtitle, detail }) => (
            <div key={title} className="card-surface premium-hover p-6 md:p-7 flex flex-col h-full">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-5">
                <div className="text-xl md:text-2xl font-semibold leading-tight text-foreground">
                  {title}
                </div>
                <div className="mt-1 text-sm uppercase tracking-[0.16em] text-primary/90">
                  {subtitle}
                </div>
              </div>
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
