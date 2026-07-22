import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Clock, Mail, MapPin, Phone, UploadCloud } from "lucide-react";
import SEO from "../components/ui/SEO";
import { BUSINESS } from "../lib/utils";

const contactSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  phone: z.string().min(7, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  address: z.string().min(5, "Enter the property address"),
  junkType: z.string().min(1, "Select what's being removed"),
  serviceRequired: z.string().min(1, "Select a service"),
  preferredDate: z.string().min(1, "Pick a preferred date"),
  message: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const JUNK_TYPES = ["Furniture", "Appliances", "Construction Debris", "Full Property", "Yard Waste", "Other"];
const SERVICE_TYPES = ["Residential Pickup", "Commercial Pickup", "Estate Cleanout", "Same-Day Rush"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (_data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    reset();
    setFiles([]);
  };

  return (
    <>
      <SEO
        title="Contact & Book a Pickup"
        description="Book a junk removal pickup with Britos Junk. Get a free estimate, choose your service, and pick a date — same-day slots available."
        path="/contact"
      />
      <section className="relative overflow-hidden border-b border-line bg-ink pb-20 pt-40">
        <div className="pointer-events-none absolute right-[8%] top-4 -z-[1] h-[26rem] w-[26rem] rounded-full bg-emerald/10 blur-[120px] animate-drift-2" aria-hidden="true" />
        <div className="container-px relative">
          <p className="eyebrow mb-6">Book a Pickup</p>
          <h1 className="max-w-2xl font-display text-5xl leading-[1.05] text-mist md:text-6xl">
            Tell us what's leaving.
          </h1>
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="container-px grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div className="ticket-card p-8 md:p-12">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <CheckCircle2 size={48} className="text-emerald" />
                <h2 className="mt-6 font-display text-2xl text-mist">Request received.</h2>
                <p className="mt-3 max-w-sm text-sm text-slate">
                  A dispatcher will text you a confirmation and arrival window shortly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-ghost mt-8">
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Full Name" error={errors.fullName?.message}>
                  <input {...register("fullName")} className="field" placeholder="Jordan Rivera" />
                </Field>
                <Field label="Phone Number" error={errors.phone?.message}>
                  <input {...register("phone")} className="field" placeholder="(555) 018-2947" />
                </Field>
                <Field label="Email Address" error={errors.email?.message}>
                  <input {...register("email")} type="email" className="field" placeholder="you@email.com" />
                </Field>
                <Field label="Property Address" error={errors.address?.message}>
                  <input {...register("address")} className="field" placeholder="123 Main St, City" />
                </Field>
                <Field label="Junk Type" error={errors.junkType?.message}>
                  <select {...register("junkType")} className="field" defaultValue="">
                    <option value="" disabled>Select type</option>
                    {JUNK_TYPES.map((j) => <option key={j} value={j}>{j}</option>)}
                  </select>
                </Field>
                <Field label="Service Required" error={errors.serviceRequired?.message}>
                  <select {...register("serviceRequired")} className="field" defaultValue="">
                    <option value="" disabled>Select service</option>
                    {SERVICE_TYPES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Preferred Date" error={errors.preferredDate?.message}>
                  <input {...register("preferredDate")} type="date" className="field" />
                </Field>
                <Field label="Upload Images (Optional)" full>
                  <label className="field flex cursor-pointer items-center justify-between text-slate">
                    <span className="flex items-center gap-2">
                      <UploadCloud size={16} className="text-emerald" />
                      {files.length ? `${files.length} file(s) selected` : "Add photos of the items"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
                    />
                  </label>
                </Field>
                <Field label="Message" full>
                  <textarea {...register("message")} rows={4} className="field resize-none" placeholder="Anything else the crew should know?" />
                </Field>

                <button type="submit" disabled={isSubmitting} className="btn-primary col-span-full justify-center disabled:opacity-60">
                  {isSubmitting ? "Sending…" : "Submit Request"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="ticket-card p-7">
              <p className="eyebrow mb-5">Reach Us Directly</p>
              <div className="space-y-4 text-sm text-slate">
                <a href={`tel:${BUSINESS.phoneHref}`} className="flex items-center gap-3 hover:text-emerald">
                  <Phone size={16} className="text-emerald" /> {BUSINESS.phoneDisplay}
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 hover:text-emerald">
                  <Mail size={16} className="text-emerald" /> {BUSINESS.email}
                </a>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-emerald" /> {BUSINESS.addressLine}
                </div>
              </div>
            </div>

            <div className="ticket-card p-7">
              <p className="eyebrow mb-5 flex items-center gap-2"><Clock size={13} /> Business Hours</p>
              <ul className="space-y-2 text-sm text-slate">
                {BUSINESS.hours.map((h) => (
                  <li key={h.day} className="flex justify-between">
                    <span>{h.day}</span>
                    <span className="text-mist/80">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ticket-card aspect-square overflow-hidden">
              <iframe
                title="Service area map"
                className="h-full w-full grayscale invert-[0.92] contrast-[0.9]"
                src="https://www.google.com/maps?q=USA&output=embed"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-slate">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  );
}