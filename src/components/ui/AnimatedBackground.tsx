/**
 * Ambient background used on every page via Layout.tsx.
 * Two soft emerald blobs drift slowly on independent loops and a faint
 * grid gives depth — purely decorative, pointer-events disabled, and
 * respects prefers-reduced-motion (animation is CSS-only so the media
 * query in index.css already neutralizes it).
 */
export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(237,239,236,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(237,239,236,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute -left-[10%] top-[5%] h-[38rem] w-[38rem] rounded-full bg-emerald/10 blur-[120px] animate-drift-1" />
      <div className="absolute -right-[15%] top-[45%] h-[32rem] w-[32rem] rounded-full bg-emerald-dim/20 blur-[130px] animate-drift-2" />
      <div className="absolute bottom-[-10%] left-[30%] h-[30rem] w-[30rem] rounded-full bg-emerald-bright/5 blur-[110px] animate-drift-3" />
    </div>
  );
}
