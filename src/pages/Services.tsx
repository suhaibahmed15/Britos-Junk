import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/ui/SEO";
import { services } from "../data/services";
import { useReveal } from "../lib/useReveal";

export default function Services() {
  const ref = useReveal<HTMLDivElement>(".svc-full-card", { stagger: 0.05 });

  return (
    <>
      <SEO
        title="Services"
        description="Furniture, appliance, construction debris, estate, and commercial junk removal — twelve services, one same-day dispatch."
        path="/services"
      />
      <section className="relative overflow-hidden border-b border-line bg-ink pb-20 pt-40">
        <div className="pointer-events-none absolute -left-24 top-0 -z-[1] h-[28rem] w-[28rem] rounded-full bg-emerald/10 blur-[120px] animate-drift-1" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 bottom-0 -z-[1] h-[24rem] w-[24rem] rounded-full bg-emerald-dim/15 blur-[110px] animate-drift-3" aria-hidden="true" />
        <div className="container-px relative">
          <p className="eyebrow mb-6">Full Service List</p>
          <h1 className="max-w-2xl font-display text-5xl leading-[1.05] text-mist md:text-6xl">
            Whatever it is, it's leaving today.
          </h1>
        </div>
      </section>

      <section ref={ref} className="bg-ink py-20">
        <div className="container-px grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.code}
              className="svc-full-card ticket-card group relative overflow-hidden transition-all duration-500 hover:border-emerald/50 hover:bg-char-2"
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
      </section>

      <section className="border-t border-line bg-char py-24">
        <div className="container-px flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-md font-display text-3xl leading-tight text-mist md:text-4xl">
            Don't see it on the list? Ask anyway.
          </h2>
          <Link to="/contact" className="btn-primary shrink-0">
            Get a Quote <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
