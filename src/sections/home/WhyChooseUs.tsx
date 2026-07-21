import { useEffect, useRef } from "react";
import { BadgeCheck, Leaf, ShieldCheck, Timer } from "lucide-react";
import { gsap } from "../../lib/gsapSetup";
import { useReveal } from "../../lib/useReveal";

const REASONS = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Full liability coverage on every job, residential or commercial." },
  { icon: Timer, title: "Same-Day Service", desc: "Book by morning, cleared by evening — most weeks, most zip codes." },
  { icon: Leaf, title: "Eco-First Sorting", desc: "Donation, recycling, and disposal sorted on-site, not guessed at." },
  { icon: BadgeCheck, title: "Upfront Pricing", desc: "Quoted before we load, no surprise line items on the invoice." },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: to,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 90%" },
        onUpdate: () => {
          if (ref.current) ref.current.textContent = Math.floor(obj.val).toLocaleString() + suffix;
        },
      });
    });
    return () => ctx.revert();
  }, [to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function WhyChooseUs() {
  const ref = useReveal<HTMLDivElement>(".why-card", { stagger: 0.08 });

  return (
    <section className="relative border-t border-line bg-char py-28">
      <div ref={ref} className="container-px">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-4">Why Britos Junk</p>
            <h2 className="max-w-md font-display text-4xl leading-tight text-mist md:text-5xl">
              Built for the job you don't want to do yourself.
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <p className="font-display text-4xl text-emerald"><Counter to={98} suffix="%" /></p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-slate">On-Time Arrival</p>
              </div>
              <div>
                <p className="font-display text-4xl text-emerald"><Counter to={12} suffix="K+" /></p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-slate">Lbs Diverted / Month</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {REASONS.map((r) => (
              <div key={r.title} className="why-card rounded-2xl border border-line bg-ink/60 p-6 transition-colors duration-300 hover:border-emerald/40">
                <r.icon size={22} className="text-emerald" />
                <h3 className="mt-5 font-display text-lg text-mist">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
