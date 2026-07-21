import { useRef, useState } from "react";
import { GripVertical } from "lucide-react";
import { useReveal } from "../../lib/useReveal";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  beforeAlt = "Before Image",
  afterAlt = "After Image",
}: BeforeAfterProps) {
  const ref = useReveal<HTMLDivElement>(".ba-reveal");
  const trackRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  };

  return (
    <section className="relative border-t border-line bg-ink py-28">
      <div ref={ref} className="container-px">
        <div className="ba-reveal mb-14 max-w-xl">
          <p className="eyebrow mb-4">Proof, Not Promises</p>
          <h2 className="font-display text-4xl leading-tight text-mist md:text-5xl">
            Drag to see the difference.
          </h2>
        </div>

        <div
          ref={trackRef}
          className="ba-reveal relative aspect-[16/9] w-full select-none overflow-hidden rounded-3xl border border-line"
          onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
        >
          {/* AFTER (base layer) */}
          <div className="absolute inset-0 h-full w-full">
            <img
              src={afterImage}
              alt={afterAlt}
              className="pointer-events-none h-full w-full object-cover"
            />
          </div>

          {/* BEFORE (clipped layer) */}
          <div
            className="absolute inset-0 h-full w-full"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              src={beforeImage}
              alt={beforeAlt}
              className="pointer-events-none h-full w-full object-cover"
            />
          </div>

          {/* Handle */}
          <div
            className="absolute inset-y-0 z-10 flex w-0 -translate-x-1/2 cursor-ew-resize items-center justify-center"
            style={{ left: `${pos}%` }}
            onMouseDown={() => (dragging.current = true)}
            onTouchStart={() => (dragging.current = true)}
          >
            <div className="h-full w-px bg-emerald" />
            <div className="absolute flex h-10 w-10 items-center justify-center rounded-full border border-emerald bg-ink text-emerald shadow-glow">
              <GripVertical size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}