import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "./gsapSetup";

export function useReveal<T extends HTMLElement>(selector: string, options?: gsap.TweenVars) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector);
      targets.forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          ...options,
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [selector]);

  return ref;
}

export { ScrollTrigger };
