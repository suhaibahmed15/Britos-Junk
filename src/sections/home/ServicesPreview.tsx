import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../../lib/useReveal";

// 1. Interface define kiya
export interface Service {
  code: string;
  title: string;
  description: string;
  weightNote: string;
  image: string;
}


export const services: Service[] = [
  {
    code: "FRN",
    image: "https://tse3.mm.bing.net/th/id/OIP.r1L8YLQZ3pxtGnBQL976NgHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3/640/480",
    title: "Furniture Removal",
    description: "Sofas, sectionals, mattresses, and bed frames hauled out same day — no lifting required on your end.",
    weightNote: "avg. 180–600 lb load",
  },
  {
    code: "APP",
    image: "https://tse3.mm.bing.net/th/id/OIP.RQBtXQjtCebTPXt9XSjTrgHaD6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3/640/480",
    title: "Appliance Removal",
    description: "Fridges, washers, dryers, and units freed of refrigerant and routed to certified recyclers.",
    weightNote: "avg. 150–400 lb load",
  },
  {
    code: "GAR",
    image: "https://tse1.mm.bing.net/th/id/OIP.s9cKMxU2FiVEWA52mE4sJAHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3/640/480",
    title: "Garage Cleanouts",
    description: "From tools to tires — we clear it, sweep it, and hand the space back to you.",
    weightNote: "avg. 1–3 truckloads",
  }
];


export default function ServicesPreview() {
  const ref = useReveal<HTMLDivElement>(".svc-card", { stagger: 0.08 });
  
 
  const shown = services.slice(0, 3);

  return (
    <section id="services" className="relative border-t border-line bg-ink py-28">
      <div ref={ref} className="container-px">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">What We Haul</p>
            <h2 className="max-w-xl font-display text-4xl leading-tight text-mist md:text-5xl">
              Twelve services. One dispatch.
            </h2>
          </div>
          <Link to="/services" className="btn-ghost shrink-0">
            View all services <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((s) => (
            <div
              key={s.code}
              className="svc-card ticket-card group relative overflow-hidden transition-all duration-500 hover:border-emerald/50 hover:bg-char-2"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char-2 via-char-2/20 to-transparent transition-opacity duration-500 group-hover:opacity-70" />
                <div className="absolute inset-0 bg-emerald/0 transition-colors duration-500 group-hover:bg-emerald/10" />
                <span className="absolute left-4 top-4 rounded-full border border-line bg-ink/70 px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-emerald backdrop-blur-sm">
                  {s.code}
                </span>
              </div>
              <div className="p-7 pt-6">
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-display text-xl text-mist">{s.title}</h3>
                  <ArrowUpRight size={16} className="mt-1.5 shrink-0 text-slate transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald" />
                </div>
                <p className="mt-1 text-sm leading-relaxed text-slate">{s.description}</p>
                <p className="mt-6 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate">
                  {s.weightNote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}