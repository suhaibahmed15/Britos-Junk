import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import gsap from "gsap";
import { Phone } from "lucide-react";
import { cx, BUSINESS } from "../../lib/utils";

import logoImg from "../../assets/bj.png"; 

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
  { to: "/resources", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      gsap.set(menuRef.current, { display: "flex" });
      gsap.fromTo(menuRef.current, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.6, ease: "power4.out" });
      gsap.fromTo(
        linkRefs.current,
        { yPercent: 120, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.06, ease: "power3.out", delay: 0.15 }
      );
    } else if (menuRef.current) {
      gsap.to(menuRef.current, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.45,
        ease: "power3.in",
        onComplete: () => gsap.set(menuRef.current, { display: "none" }),
      });
    }
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cx(
          "absolute inset-0 -z-10 border-b transition-all duration-500",
          scrolled ? "border-line bg-ink/70 backdrop-blur-xl" : "border-transparent bg-transparent"
        )}
      />

      <div className="container-px relative flex h-20 items-center justify-between">
        {/* Added gap-3 to separate logo and text */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img 
            src={logoImg} 
            alt="Britos Junk Logo" 
            // Increased size to h-[4.5rem] (72px) to fit nicely within the 80px (h-20) header
            className="h-[60px] w-auto object-contain drop-shadow-md" 
          />
          {/* Added text next to the logo */}
           <span className="font-display text-2xl font-bold tracking-wide">
              <span className="text-emerald">Britos</span>  <span className="text-mist">Junk</span>
            </span> 
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cx(
                  "relative font-mono text-[12px] uppercase tracking-[0.18em] text-slate transition-colors hover:text-mist",
                  isActive && "text-emerald"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={`tel:${BUSINESS.phoneHref}`} className="flex items-center gap-2 text-sm text-slate transition hover:text-mist">
            <Phone size={15} className="text-emerald" />
            {BUSINESS.phoneDisplay}
          </a>
          <Link to="/contact" className="btn-primary">
            Book Now
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-[70] flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={cx(
              "h-[1.5px] w-6 bg-mist transition-all duration-300",
              open && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cx(
              "h-[1.5px] w-6 bg-mist transition-all duration-300",
              open && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </div>

      <div
        ref={menuRef}
        className="fixed inset-0 top-20 hidden flex-col justify-between bg-ink px-6 pb-10 pt-8 lg:hidden"
        style={{ clipPath: "inset(0 0 100% 0)" }}
      >
        <nav className="flex flex-col gap-1">
          {LINKS.map((l, i) => (
            <div key={l.to} className="overflow-hidden border-b border-line py-4">
              <NavLink
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cx("block font-display text-4xl", isActive ? "text-emerald" : "text-mist")
                }
              >
                {l.label}
              </NavLink>
            </div>
          ))}
        </nav>
        <div className="flex flex-col gap-4">
          <a href={`tel:${BUSINESS.phoneHref}`} className="flex items-center gap-2 font-mono text-sm text-slate">
            <Phone size={15} className="text-emerald" /> {BUSINESS.phoneDisplay}
          </a>
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center">
            Get Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}