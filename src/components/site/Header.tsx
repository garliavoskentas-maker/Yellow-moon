import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const nav = [
  { href: "#pradzia", label: "Pradžia" },
  { href: "#apie", label: "Apie mus" },
  { href: "#meniu", label: "Meniu" },
  { href: "#galerija", label: "Galerija" },
  { href: "#lokacijos", label: "Lokacijos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/85 border-b border-white/10"
          : "bg-gradient-to-b from-background/60 to-transparent"
      }`}
    >
      <div className="container-x flex h-[80px] md:h-[88px] items-center justify-between">
        <a
          href="#pradzia"
          className="flex items-center"
          aria-label="Yellow Moon pradžia"
        >
          <img
            src={logo}
            alt="Yellow Moon logotipas"
            className="h-[68px] md:h-[80px] w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Pagrindinė navigacija">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/85 hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#uzsakymas" className="btn-primary text-sm">
            Užsisakyti
          </a>
        </div>

        <button
          type="button"
          aria-label="Atidaryti meniu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5"
        >
          <span className="sr-only">Meniu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? "max-h-96 border-b border-white/10" : "max-h-0"
        }`}
      >
        <div className="container-x py-6 flex flex-col gap-4 bg-background/95 backdrop-blur">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-foreground/90 py-1"
            >
              {n.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#uzsakymas"
              onClick={() => setOpen(false)}
              className="btn-primary w-full text-sm"
            >
              Užsisakyti
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
