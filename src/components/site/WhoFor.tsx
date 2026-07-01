import { Plane, Building2, GraduationCap, Briefcase, ShieldCheck, Megaphone } from "lucide-react";
import { Reveal } from "./Reveal";

const AUDIENCES = [
  {
    icon: Plane,
    title: "Travel & Tour Companies",
    desc: "Convert enquiry floods from ads and WhatsApp into booked itineraries with timely follow-ups.",
  },
  {
    icon: Building2,
    title: "Real Estate Agencies",
    desc: "Route property enquiries to the right agent and track site-visit callbacks automatically.",
  },
  {
    icon: GraduationCap,
    title: "Education Consultants",
    desc: "Manage student admissions pipelines and never miss a counselling follow-up.",
  },
  {
    icon: Briefcase,
    title: "B2B Sales Teams",
    desc: "Run a disciplined pipeline with stage tracking, tasks, and conversion analytics.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance & Finance Agents",
    desc: "Stay compliant and on time with renewal reminders and full lead history.",
  },
  {
    icon: Megaphone,
    title: "Marketing Agencies",
    desc: "Capture leads from every campaign and prove ROI with source-level reporting.",
  },
];

export function WhoFor() {
  return (
    <section id="who-for" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Who it's for</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            Built for sales-driven businesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            If leads are your lifeblood, Mint CRM keeps every one of them moving forward.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((a, i) => (
            <Reveal
              key={a.title}
              delay={(i % 3) * 70}
              as="article"
              className="rounded-2xl border border-border bg-gradient-soft p-6 transition-shadow hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-card text-primary shadow-soft">
                <a.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
