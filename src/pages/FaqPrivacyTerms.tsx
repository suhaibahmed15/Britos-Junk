import { useState } from "react";
import { ChevronDown, Leaf, Recycle, ShieldCheck, Truck } from "lucide-react";
import SEO from "../components/ui/SEO";
import { faqItems } from "../data/faq";
import { BUSINESS } from "../lib/utils";
import { useReveal } from "../lib/useReveal";

const SECTIONS = [
  { id: "faq", label: "FAQ" },
  { id: "privacy", label: "Privacy Policy" },
  { id: "terms", label: "Terms & Conditions" },
];

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg text-mist md:text-xl">{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-emerald transition-transform duration-400 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className="grid overflow-hidden transition-all duration-500 ease-in-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 text-sm leading-relaxed text-slate">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqPrivacyTerms() {
  const ref = useReveal<HTMLDivElement>(".legal-reveal");

  return (
    <>
      <SEO
        title="FAQ, Privacy Policy & Terms"
        description="Answers to common junk removal questions, plus Britos Junk's privacy policy and terms of service."
        path="/resources"
      />
      <section className="relative overflow-hidden border-b border-line bg-ink pb-16 pt-40">
        <div className="pointer-events-none absolute -left-16 top-8 -z-[1] h-[26rem] w-[26rem] rounded-full bg-emerald/10 blur-[120px] animate-drift-3" aria-hidden="true" />
        <div className="container-px relative">
          <p className="eyebrow mb-6">Resources</p>
          <h1 className="max-w-2xl font-display text-5xl leading-[1.05] text-mist md:text-6xl">
            Answers, policy, and the fine print.
          </h1>
          <div className="mt-10 flex gap-3">
            {SECTIONS.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="btn-ghost !px-5 !py-2.5 text-xs">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" ref={ref} className="relative scroll-mt-24 overflow-hidden border-b border-line bg-ink py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.16]" aria-hidden="true">
          <Truck size={64} className="absolute left-[6%] top-[12%] text-emerald animate-float" style={{ animationDelay: "0s" }} />
          <Recycle size={54} className="absolute right-[10%] top-[22%] text-emerald animate-float" style={{ animationDelay: "1.2s" }} />
          <Leaf size={48} className="absolute left-[14%] bottom-[14%] text-emerald animate-float" style={{ animationDelay: "2.1s" }} />
          <ShieldCheck size={58} className="absolute right-[16%] bottom-[10%] text-emerald animate-float" style={{ animationDelay: "0.6s" }} />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-grad-glow opacity-60" aria-hidden="true" />

        <div className="container-px relative mx-auto max-w-3xl text-center">
          <p className="legal-reveal eyebrow mb-4 justify-center">Frequently Asked</p>
          <h2 className="legal-reveal mb-10 font-display text-3xl text-mist md:text-4xl">Questions we hear a lot.</h2>
          <div className="legal-reveal text-left">
            {faqItems.map((f) => (
              <Accordion key={f.question} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>
      </section>

      <section id="privacy" className="scroll-mt-24 border-b border-line bg-char py-24">
        <div className="container-px mx-auto max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h2 className="mb-8 font-display text-3xl text-mist md:text-4xl">Privacy Policy</h2>
          <div className="space-y-6 text-sm leading-relaxed text-slate">
            <p>
              Britos Junk ("we", "us") collects the information you provide when booking a pickup — name, phone
              number, email, service address, and any photos you choose to upload — solely to schedule and complete
              your junk removal service.
            </p>
            <p>
              We do not sell your personal information. Details are shared only with the dispatch and crew members
              assigned to your job, and with payment processors when applicable. We retain booking records for as
              long as needed for service history and tax purposes.
            </p>
            <p>
              You may request a copy of the information we hold about you, or ask us to delete it, by emailing{" "}
              <a href={`mailto:${BUSINESS.email}`} className="text-emerald">{BUSINESS.email}</a>.
            </p>
            <p>
              Our site may use cookies for basic analytics to understand which pages are useful. No cookie data is
              used for third-party advertising.
            </p>
          </div>
        </div>
      </section>

      <section id="terms" className="scroll-mt-24 bg-ink py-24">
        <div className="container-px mx-auto max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h2 className="mb-8 font-display text-3xl text-mist md:text-4xl">Terms & Conditions</h2>
          <div className="space-y-6 text-sm leading-relaxed text-slate">
            <p>
              By booking a service with Britos Junk, you confirm you have the authority to authorize removal of the
              items listed and that the service address is accurate. Quotes are estimates until confirmed on-site
              before loading begins.
            </p>
            <p>
              Britos Junk is licensed and insured for the removal services listed on this site. We reserve the right
              to decline removal of hazardous, regulated, or illegal materials not disclosed at booking.
            </p>
            <p>
              Cancellations or reschedules are accepted up to two hours before your arrival window without charge.
              Same-day cancellations after crew dispatch may incur a trip fee.
            </p>
            <p>
              Payment is due upon completion of service, based on the final on-site quote. We accept major cards and
              standard digital payment methods.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
