import { Leaf, Target, Users } from "lucide-react";
import SEO from "../components/ui/SEO";
import { useReveal } from "../lib/useReveal";

// Import your logo image
import logoImg from "../assets/bj.png";

const TIMELINE = [
  { year: "2016", label: "Two trucks, one zip code, and a promise to show up on time." },
  { year: "2019", label: "Added commercial cleanouts and a dedicated recycling partner network." },
  { year: "2022", label: "Crossed 10,000 completed jobs across the metro area." },
  { year: "2026", label: "Diverting the majority of collected material away from landfill." },
];

const VALUES = [
  { icon: Target, title: "Mission", copy: "Make getting rid of things as easy as ordering a ride — booked, tracked, and done." },
  { icon: Leaf, title: "Vision", copy: "A removal industry where diversion is the default, not the exception." },
  { icon: Users, title: "Values", copy: "Show up on time, quote it straight, and treat every property like our own." },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>(".ab-reveal");

  return (
    <>
      <SEO
        title="About Us"
        description="Britos Junk started with two trucks and a promise to show up on time. Learn about our mission, values, and the team behind the crew."
        path="/about"
      />
      <section className="relative overflow-hidden border-b border-line bg-ink pb-20 pt-40">
        <div className="pointer-events-none absolute -right-24 top-10 -z-[1] h-[30rem] w-[30rem] rounded-full bg-emerald/10 blur-[120px] animate-drift-2" aria-hidden="true" />
        
        {/* Adjusted grid columns and gap to bring the text and image closer */}
        <div ref={ref} className="container-px grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center xl:gap-16">
          <div>
            {/* Reduced bottom margin on the logo from mb-8 to mb-5 */}
            <div className="ab-reveal mb-5">
              <img 
                src={logoImg} 
                alt="Britos Junk Logo" 
                className="h-[150px] w-auto object-contain drop-shadow-md" 
              />
            </div>
            <p className="ab-reveal eyebrow mb-6">Our Story</p>
            <h1 className="ab-reveal max-w-3xl font-display text-5xl leading-[1.05] text-mist md:text-6xl">
              Started with a truck, a phone number, and a stubborn dislike of clutter.
            </h1>
            <p className="ab-reveal mt-8 max-w-xl text-slate-light">
              Britos Junk was built on a simple idea: removal shouldn't mean a week of phone tag and a vague estimate. We quote it straight, show up when we say we will, and sort what we haul instead of dumping it all in one pile.
            </p>
            
            {/* Added Owner Name with a green accent line */}
            <div className="ab-reveal mt-8 flex items-center gap-4">
              <div className="h-px w-8 bg-emerald" />
              <p className="font-display text-lg tracking-wide text-mist">
                Manny Brito <span className="font-sans text-sm tracking-normal text-slate">— Owner</span>
              </p>
            </div>
          </div>
          
          {/* Changed lg:place-self-end to lg:place-self-start to pull the image to the left (closing the gap) */}
          <div className="ab-reveal relative aspect-[4/5] w-full max-w-md place-self-center lg:place-self-start overflow-hidden rounded-3xl border border-line">
            <img
              src="https://img.magnific.com/premium-photo/handsome-guy-animation_605905-16276.jpg?w=740"
              alt="Manny Brito - Britos Junk Owner"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-char py-24">
        <div className="container-px grid gap-6 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="ab-reveal rounded-2xl border border-line bg-ink/60 p-8">
              <v.icon size={22} className="text-emerald" />
              <h3 className="mt-6 font-display text-2xl text-mist">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{v.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-line bg-ink py-24">
        <div className="container-px">
          <p className="ab-reveal eyebrow mb-4">Timeline</p>
          <h2 className="ab-reveal mb-14 font-display text-4xl text-mist md:text-5xl">A decade of hauling.</h2>
          <div className="space-y-0">
            {TIMELINE.map((t) => (
              <div key={t.year} className="ab-reveal flex flex-col gap-2 border-t border-line py-8 md:flex-row md:items-center md:gap-10">
                <span className="font-mono text-sm text-emerald md:w-24">{t.year}</span>
                <span className="text-lg text-mist/90">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-char py-24">
        <div className="container-px">
          <p className="ab-reveal eyebrow mb-4">Environmental Responsibility</p>
          <h2 className="ab-reveal max-w-2xl font-display text-4xl leading-tight text-mist md:text-5xl">
            Every load gets sorted before it gets hauled.
          </h2>
          <p className="ab-reveal mt-6 max-w-xl text-slate-light">
            Usable furniture goes to donation partners, metal and e-waste go to certified recyclers, and only what genuinely can't be diverted goes to disposal. We log diversion on every job, not just the ones we advertise.
          </p>
        </div>
      </section>
    </>
  );
}