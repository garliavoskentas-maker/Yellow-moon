import { Facebook, Instagram, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import { locations, socials } from "@/data/locations";

export function Footer() {
  return (
    <footer id="kontaktai" className="border-t border-white/10 bg-background">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <img src={logo} alt="Yellow Moon logotipas" className="h-32 w-auto" />
            <div className="mt-6 flex gap-3">
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {locations.map((loc) => (
            <div key={loc.id}>
              <h3 className="text-base font-semibold text-foreground">{loc.name}</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                  <span>{loc.address}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href={loc.phoneLink} className="hover:text-primary transition-colors">
                    {loc.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{loc.hours}</span>
                </li>
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-base font-semibold text-foreground">Užsakymas</h3>
            <p className="mt-4 text-sm text-foreground/80">
              Bolt Food · Wolt · telefonu
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-xs text-muted-foreground">
          <p>© 2026 Yellow Moon. Visos teisės saugomos.</p>
        </div>
      </div>
    </footer>
  );
}
