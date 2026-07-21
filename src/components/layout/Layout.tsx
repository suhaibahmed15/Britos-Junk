import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "../../lib/gsapSetup";
import Header from "./Header";
import Footer from "./Footer";
import ScrollProgress from "../ui/ScrollProgress";
import FloatingActions from "../ui/FloatingActions";
import AnimatedBackground from "../ui/AnimatedBackground";

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    // Keep GSAP's ScrollTrigger in sync with Lenis's smooth-scroll position —
    // without this, every scroll-triggered reveal on the page miscalculates
    // its trigger point and content that starts at opacity:0 never animates in.
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Re-measure trigger positions once layout has settled (fonts, images, route change).
    const refresh = () => ScrollTrigger.refresh();
    const refreshTimeout = setTimeout(refresh, 200);
    window.addEventListener("load", refresh);

    return () => {
      clearTimeout(refreshTimeout);
      window.removeEventListener("load", refresh);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
        return;
      }
    }
    window.scrollTo({ top: 0 });
    // Route changed and new content mounted — recalc trigger offsets so
    // reveals on the new page fire at the right scroll position.
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [pathname, hash]);

  return (
    <div className="relative min-h-screen bg-ink">
      <AnimatedBackground />
      <ScrollProgress />
      <Header />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
