import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { locations, type Location } from "@/data/locations";

function OrderCard({ loc }: { loc: Location }) {
  return (
    <div className="card-surface p-7 md:p-8 flex flex-col">
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
          <MapPin className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-2xl font-semibold">{loc.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{loc.address}</p>
        </div>
      </div>

      <dl className="mt-6 space-y-2 text-sm">
        <div className="flex items-center gap-2 text-foreground/85">
          <Phone className="h-4 w-4 text-primary" />
          <a href={loc.phoneLink} className="hover:text-primary transition-colors">
            {loc.phoneDisplay}
          </a>
        </div>
        <div className="flex items-center gap-2 text-foreground/85">
          <Clock className="h-4 w-4 text-primary" />
          <span>{loc.hours}</span>
        </div>
      </dl>

      <div className="mt-6 grid grid-cols-2 gap-2.5">
        <a
          href={loc.bolt}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#34D186] shadow-[0_0_10px_rgba(52,209,134,0.6)]" aria-hidden="true" />
          Bolt Food
        </a>
        <a
          href={loc.wolt}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#00C2E8] shadow-[0_0_10px_rgba(0,194,232,0.6)]" aria-hidden="true" />
          Wolt
        </a>
        <a href={loc.phoneLink} className="btn-ghost text-sm">
          <Phone className="h-4 w-4" />
          Skambinti
        </a>
        <a
          href={loc.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost text-sm"
        >
          <MapPin className="h-4 w-4" />
          Nuvykti
        </a>
      </div>
    </div>
  );
}

export function Order() {
  return (
    <section id="uzsakymas" className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-sm uppercase tracking-[0.2em] text-primary/90">Užsakymas</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Pasirinkite piceriją ir <span className="text-primary">užsisakykite</span>
          </h2>
          <p className="mt-4 text-foreground/75">
            Užsakymus priimame per Bolt Food, Wolt arba telefonu tiesiogiai iš pasirinktos
            picerijos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {locations.map((loc) => (
            <OrderCard key={loc.id} loc={loc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Locations() {
  const [activeId, setActiveId] = useState<Location["id"]>(locations[0].id);
  const active = locations.find((l) => l.id === activeId)!;

  return (
    <section id="lokacijos" className="py-24 md:py-32 bg-white/[0.02] border-y border-white/5">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-sm uppercase tracking-[0.2em] text-primary/90">Lokacijos</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Kur mus <span className="text-primary">rasti?</span>
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {locations.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setActiveId(l.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                activeId === l.id
                  ? "bg-primary text-primary-foreground"
                  : "border border-white/15 bg-white/5 text-foreground/85 hover:bg-white/10"
              }`}
            >
              {l.shortName}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2 card-surface p-7 md:p-8">
            <h3 className="text-2xl font-semibold">{active.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{active.address}</p>

            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{active.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href={active.phoneLink} className="hover:text-primary transition-colors">
                  {active.phoneDisplay}
                </a>
              </div>
            </dl>

            <div className="mt-6 grid grid-cols-2 gap-2.5">
              <a href={active.phoneLink} className="btn-primary text-sm">
                <Phone className="h-4 w-4" />
                Skambinti
              </a>
              <a
                href={active.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm"
              >
                <MapPin className="h-4 w-4" />
                Nuvykti
              </a>
              <a
                href={active.bolt}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm"
              >
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#34D186] shadow-[0_0_10px_rgba(52,209,134,0.6)]" aria-hidden="true" />
                Bolt Food
              </a>
              <a
                href={active.wolt}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm"
              >
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#00C2E8] shadow-[0_0_10px_rgba(0,194,232,0.6)]" aria-hidden="true" />
                Wolt
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 overflow-hidden rounded-2xl border border-white/10 min-h-[360px]">
            <iframe
              key={active.id}
              title={`Žemėlapis – ${active.name}`}
              src={active.mapEmbed}
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
