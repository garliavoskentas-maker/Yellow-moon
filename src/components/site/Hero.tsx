import hero from "@/assets/hero.jpg";
import { Flame, MapPin, Clock } from "lucide-react";

export function Hero() {
  return (
    <section id="pradzia" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* New hero: oven already on the right, text sits on the LEFT */}
      <img
        src={hero}
        alt="Yellow Moon malkinė krosnis su liepsna"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Bottom fade for section transition */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      {/* Left-side dark wash so text has excellent contrast without dulling the fire on the right */}
      <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-background/85 via-background/50 to-transparent" />

      <div className="relative container-x flex min-h-[100svh] items-center pt-32 pb-24 md:pt-36 md:pb-28">
        <div className="w-full md:max-w-2xl md:pl-4 lg:pl-10 mt-10 md:mt-14 reveal-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
            <Flame className="h-3.5 w-3.5" /> Kepama tikroje malkinėje krosnyje
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.02] text-foreground">
            Malkinėje krosnyje <span className="text-primary">keptos picos.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/85 max-w-xl">
            Skonis, prie kurio norisi sugrįžti.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#meniu" className="btn-primary">
              Peržiūrėti meniu
            </a>
            <a href="#uzsakymas" className="btn-ghost">
              Pasirinkti piceriją
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-foreground/85">
            <li className="inline-flex items-center gap-2">
              <Flame className="h-4 w-4 text-primary" /> Malkinė krosnis
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> 2 lokacijos
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" /> Kasdien 11:00–21:00
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
