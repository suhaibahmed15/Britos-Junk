import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useReveal } from "../../lib/useReveal";

export default function CTA() {
  const ref = useReveal<HTMLDivElement>(".cta-in");

  return (
    <section className="relative overflow-hidden border-t border-line bg-char py-28">
      <div className="pointer-events-none absolute inset-0 bg-grad-glow opacity-70" />
      <div ref={ref} className="container-px relative text-center">
        <p className="cta-in eyebrow mb-6 justify-center">Ready When You Are</p>
        <h2 className="cta-in mx-auto max-w-2xl font-display text-4xl leading-tight text-mist md:text-6xl">
          Let's clear the space.
        </h2>
        <p className="cta-in mx-auto mt-6 max-w-md text-slate">
          Same-day slots open most weekdays. Get a firm quote before anything gets loaded.
        </p>
        <div className="cta-in mt-10">
          <Link to="/contact" className="btn-primary">
            Book Your Pickup <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
