import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { useReveal } from "../../lib/useReveal";

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>(".tst-head");
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(timer.current);
  }, []);

  const t = testimonials[index];

  return (
    <section className="relative border-t border-line bg-ink py-28">
      <div ref={ref} className="container-px">
        <div className="tst-head mb-14 max-w-xl">
          <p className="eyebrow mb-4">Customer Voices</p>
          <h2 className="font-display text-4xl leading-tight text-mist md:text-5xl">Said by people, not us.</h2>
        </div>

        <div className="ticket-card ticket-notch mx-auto max-w-2xl overflow-hidden p-10 md:p-14">
          <div key={index} className="animate-[fadein_0.6s_ease]">
            <div className="mb-6 flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={15} className="fill-emerald text-emerald" />
              ))}
            </div>
            <p className="font-display text-xl leading-relaxed text-mist md:text-2xl">"{t.quote}"</p>
            <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
              <div>
                <p className="text-sm font-semibold text-mist">{t.name}</p>
                <p className="text-xs text-slate">{t.location}</p>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald">{t.service}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-emerald" : "w-1.5 bg-line"}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
