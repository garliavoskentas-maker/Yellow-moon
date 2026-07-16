import { useEffect, useState } from "react";
import { X } from "lucide-react";
import pizza1 from "@/assets/pizza1.png";
import pizza2 from "@/assets/pizza2.png";
import pizza3 from "@/assets/pizza3.webp";

const images = [
  { src: pizza1, alt: "Yellow Moon pica su gardžiais priedais", span: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" },
  { src: pizza2, alt: "Yellow Moon picos ant serviravimo lentos", span: "md:col-span-2 aspect-[4/3]" },
  { src: pizza3, alt: "Yellow Moon pica dėžutėje", span: "md:col-span-2 aspect-[16/9]" },
];

export function Gallery() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
      if (e.key === "ArrowRight") setOpenIdx((i) => (i === null ? 0 : (i + 1) % images.length));
      if (e.key === "ArrowLeft")
        setOpenIdx((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openIdx]);

  return (
    <section id="galerija" className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-sm uppercase tracking-[0.24em] text-primary/90">Galerija</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Yellow Moon <span className="text-primary">skoniai</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setOpenIdx(i)}
              className={`group relative overflow-hidden rounded-2xl premium-hover focus:outline-none focus:ring-2 focus:ring-primary shadow-xl shadow-black/40 ${img.span}`}
              aria-label={`Atidaryti nuotrauką: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>

      {openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Nuotraukos peržiūra"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 md:p-10"
          onClick={() => setOpenIdx(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIdx(null)}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-foreground hover:bg-white/10"
            aria-label="Uždaryti"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={images[openIdx].src}
            alt={images[openIdx].alt}
            className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
