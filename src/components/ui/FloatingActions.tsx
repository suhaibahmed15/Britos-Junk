import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { BUSINESS } from "../../lib/utils";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 z-[60] flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-char-2/90 text-mist backdrop-blur transition hover:border-emerald hover:text-emerald"
        >
          <ArrowUp size={18} />
        </button>
      )}
      <a
        href={`tel:${BUSINESS.phoneHref}`}
        aria-label="Call Britos Junk"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-ink shadow-card transition hover:scale-105"
      >
        <Phone size={19} />
      </a>
      <a
        href={BUSINESS.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Message Britos Junk on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald text-ink shadow-glow transition hover:scale-105"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
