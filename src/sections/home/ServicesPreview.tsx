import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
// import { services } from "../../data/services";
import { useReveal } from "../../lib/useReveal";

export default function ServicesPreview() {
  const ref = useReveal<HTMLDivElement>(".svc-card", { stagger: 0.08 });
  // const shown = services.slice(0, 3);

  return (
    <section id="services" className="relative border-t border-line bg-ink py-28">
      <div ref={ref} className="container-px">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">What We Haul</p>
            <h2 className="max-w-xl font-display text-4xl leading-tight text-mist md:text-5xl">
              Nine services. One dispatch.
            </h2>
          </div>
          <Link to="/services" className="btn-ghost shrink-0">
            View all services <ArrowUpRight size={16} />
          </Link>
        </div>

        
      </div>
    </section>
  );
}
