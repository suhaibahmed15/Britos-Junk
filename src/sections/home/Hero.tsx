import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ArrowRight, CalendarCheck } from "lucide-react";
import logoImg from "../../assets/bjj.png"; 


const STATS = [
  { value: "10K+", label: "Loads Cleared" },
  { value: "5,000+", label: "Happy Customers" },
  { value: "24/7", label: "Dispatch Support" },
  { value: "100%", label: "Diversion Effort" },
];

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.9, defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-line", { yPercent: 110, opacity: 0, duration: 0.9, stagger: 0.08 }, "-=0.3")
        .from(".hero-sub", { y: 16, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.35")
        .from(".hero-stat", { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .from(".hero-image", { scale: 0.95, opacity: 0, duration: 1 }, "-=0.8"); // Image reveal animation
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative flex min-h-screen flex-col overflow-hidden bg-ink pt-20">
      
      {/* Existing Gradient Overlays */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-grad-glow" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_100%,rgba(5,5,5,0.2),#050505_78%)]" />

      {/* 
        ========================================
        1. SVG ANIMATED TRUCK & ROAD
        ========================================
      */}
    

      {/* 
        ========================================
        2. HERO CONTENT & IMAGE (2-Column Grid)
        ========================================
      */}
      <div className="container-px relative z-10 grid flex-1 grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2 lg:gap-8">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col justify-center">
          <p className="hero-eyebrow eyebrow mb-6">Dispatch Ready · Same-Day Service</p>
          <h1 className="max-w-4xl font-display text-[13vw] font-medium leading-[0.95] tracking-tightest2 text-mist sm:text-[9vw] lg:text-[5.5vw]">
            <span className="block overflow-hidden">
              <span className="hero-line block">Fast, Reliable,</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block text-emerald">Eco-Friendly</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line block">Junk Removal.</span>
            </span>
          </h1>

          <p className="hero-sub mt-8 max-w-md text-base leading-relaxed text-slate-light">
            Point at what's leaving — we lift it, sort it, and route it away from the landfill wherever we can. Booked and gone, same day.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="hero-cta btn-primary">
              Book Now <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="hero-cta btn-ghost">
              <CalendarCheck size={16} /> Get Free Estimate
            </Link>
          </div>
        </div>

        {/* Right Column: Stylized Image Frame */}
        <div className="hero-image flex w-full justify-center lg:justify-end">
          {/* Framed Container (Gradient with Glow) */}
          <div className="relative flex aspect-[16/10] w-full max-w-[750px] items-center justify-center rounded-[40px] bg-gradient-to-br from-[#C4FFE4] to-[#0F0F0F] p-6 shadow-[0_0_60px_rgba(25,210,119,0.3)]">
            
            {/* Inner Dark Background (Creates the padded look) */}
            <div className="absolute inset-[2%] rounded-[35px] bg-[#050505]"></div>
            
            {/* The High-Def Image */}
            <img
              src={logoImg} 
              alt="Junk removal pile"
              className="relative z-10 h-auto w-full rounded-[20px] object-contain grayscale brightness-110"
            />
          </div>
        </div>

      </div>

      {/* 
        ========================================
        3. STATS GRID
        ========================================
      */}
      <div className="container-px relative z-10 border-t border-line py-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="hero-stat">
              <p className="font-display text-3xl text-mist md:text-4xl">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-slate">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}