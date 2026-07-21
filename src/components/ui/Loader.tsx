import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader() {
  const [done, setDone] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }

    const counter = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => setDone(true),
    });

    tl.to(counter, {
      val: 100,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => {
        if (count.current) count.current.textContent = String(Math.floor(counter.val));
      },
    })
      .to(bar.current, { scaleX: 1, duration: 1.6, ease: "power2.out" }, "<")
      .to(root.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "+=0.15");

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
    >
      <div className="flex items-baseline gap-2 font-display text-sm uppercase tracking-[0.4em] text-slate">
        <span className="text-emerald">Britos</span>Junk
      </div>
      <div className="mt-6 flex items-end gap-1 font-mono text-6xl text-mist">
        <span ref={count}>0</span>
        <span className="pb-1 text-lg text-emerald">%</span>
      </div>
      <div className="mt-8 h-px w-48 overflow-hidden bg-line">
        <div ref={bar} className="h-full w-full origin-left scale-x-0 bg-emerald" />
      </div>
    </div>
  );
}
