import pizza1 from "@/assets/pizza1.png";
import { Flame, Leaf, MapPin, Smartphone } from "lucide-react";

const features = [
  { icon: Flame, title: "Malkinė krosnis", text: "Picos kepamos gyvoje malkų ugnyje." },
  { icon: Leaf, title: "Kokybiški ingredientai", text: "Kruopščiai parinkti produktai kiekvienai picai." },
  { icon: MapPin, title: "Dvi lokacijos", text: "Ringaudai ir Domeikava." },
  { icon: Smartphone, title: "Patogus užsakymas", text: "Bolt Food · Wolt · Telefonu." },
];

export function About() {
  return (
    <section id="apie" className="relative py-24 md:py-32">
      <div className="absolute inset-0 ember-glow opacity-40 pointer-events-none" />
      <div className="container-x relative">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm uppercase tracking-[0.24em] text-primary/90">
              Apie Yellow Moon
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Picos, prie kurių <span className="text-primary">norisi sugrįžti</span>
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80 text-lg leading-relaxed">
              <p>
                Yellow Moon – tai picerija, kurioje kiekviena pica kepama tikroje malkinėje
                krosnyje.
              </p>
              <p>
                Naudojame kokybiškus ingredientus, ilgai brandintą tešlą ir kruopštų paruošimą, kad
                kiekviena pica būtų traški, kvapni ir kupina skonio.
              </p>
              <p>
                Mūsų tikslas – ne tiesiog pagaminti picą, o sukurti skonį, prie kurio norisi
                sugrįžti.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-2xl" />
            <img
              src={pizza1}
              alt="Yellow Moon pica"
              className="relative w-full rounded-[1.75rem] object-cover shadow-2xl aspect-[4/3]"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-surface premium-hover p-6"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
