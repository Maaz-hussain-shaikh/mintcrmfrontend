import { Inbox, UserCheck, PhoneCall, Trophy } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  { icon: Inbox, title: "Capture", desc: "Leads flow in from forms, imports, WhatsApp, and Instagram into one inbox." },
  { icon: UserCheck, title: "Assign", desc: "Auto-routed to the right agent the instant they arrive." },
  { icon: PhoneCall, title: "Follow Up", desc: "Scheduled callbacks, reminders, and push notifications keep momentum." },
  { icon: Trophy, title: "Convert", desc: "Track every stage and close more deals, faster." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary-foreground/70">
            How it works
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-balance sm:text-4xl">
            From new lead to closed deal in four steps
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="relative">
              <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground text-primary">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="text-4xl font-extrabold text-primary-foreground/25">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
