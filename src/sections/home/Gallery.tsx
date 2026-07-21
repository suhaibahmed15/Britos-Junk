import { useState } from "react";
import { X } from "lucide-react";
import { useReveal } from "../../lib/useReveal";

const TILES = [
  { title: "Appliance Pickup", tag: "GAR", span: "row-span-2", image: "https://i.pinimg.com/1200x/bf/9d/9e/bf9d9ebcdcfc484e7d3bf6f67e176780.jpg" },
  { title: " Garage Cleanout", tag: "APP", span: "", image: "https://tse2.mm.bing.net/th/id/OIP.Ew5_xodZZeVB7xI-1JTJ8QHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3/600/400" },
  { title: "Estate Sort", tag: "EST", span: "", image: "https://i.pinimg.com/236x/67/02/aa/6702aa45ef1a572a87288ed78325185b.jpg" },
  { title: "Construction Haul", tag: "CON", span: "row-span-2", image: "https://blakewaste.com/wp-content/uploads/2024/12/wake-forest-construction-debris-removal.webp" },
  { title: "Furniture Load", tag: "FRN", span: "", image: "https://i.pinimg.com/736x/15/b7/9b/15b79b8c0b1d3d1afe6288b63bc8ee56.jpg" },
  { title: "Yard Debris", tag: "YRD", span: "", image: "https://i.pinimg.com/1200x/8c/9d/60/8c9d60e624c460b18d2a274f8fdd9a39.jpg" },
  { title: "Office Strip-Out", tag: "OFC", span: "", image: "https://thepropertycrew.co.uk/wp-content/uploads/2022/11/The-Property-Crew-Office-strip-out-and-refit-7.jpeg" },
  { title: "Commercial Bin", tag: "COM", span: "row-span-2", image: "https://tse1.mm.bing.net/th/id/OIP.py3INOHCryMNUfE34rLrHAHaEo?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
];

export default function Gallery() {
  const ref = useReveal<HTMLDivElement>(".gal-tile", { stagger: 0.05 });
  const [visible, setVisible] = useState(6);
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative border-t border-line bg-char py-28">
      <div ref={ref} className="container-px">
        <div className="mb-14 max-w-xl">
          <p className="eyebrow mb-4">Recent Jobs</p>
          <h2 className="font-display text-4xl leading-tight text-mist md:text-5xl">From the field.</h2>
        </div>

        <div className="grid auto-rows-[160px] grid-cols-2 gap-4 md:grid-cols-4">
          {TILES.slice(0, visible).map((t, i) => (
            <button
              key={t.title}
              onClick={() => setActive(i)}
              className={`gal-tile group relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-char-2 to-ink text-left ${t.span}`}
            >
              <img
                src={t.image}
                alt={t.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full scale-105 object-cover opacity-70 transition-all duration-700 ease-out group-hover:scale-125 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-0 bg-grad-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 transition-transform duration-500 group-hover:-translate-y-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald">{t.tag}</span>
                <span className="mt-1 font-display text-base text-mist">{t.title}</span>
              </div>
            </button>
          ))}
        </div>

        {visible < TILES.length && (
          <div className="mt-12 flex justify-center">
            <button onClick={() => setVisible(TILES.length)} className="btn-ghost">
              See More
            </button>
          </div>
        )}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-3xl border border-line p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={TILES[active].image}
              alt={TILES[active].title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-ink/60 text-slate backdrop-blur-sm hover:border-emerald hover:text-emerald"
            >
              <X size={16} />
            </button>
            <div className="relative flex h-full flex-col items-start justify-end">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald">{TILES[active].tag}</span>
              <span className="mt-2 font-display text-3xl text-mist">{TILES[active].title}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
