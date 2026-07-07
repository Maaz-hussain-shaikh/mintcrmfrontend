import { Inbox, Users, CalendarClock, MessageCircle, BarChart3 } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: Inbox,
    title: "Capture every lead automatically",
    desc: "Web forms, CSV bulk import, and WhatsApp/Instagram intake funnel every lead into one place the second it arrives.",
  },
  {
    icon: Users,
    title: "Auto-assign to the right agent instantly",
    desc: "Round-robin distribution routes each new lead to an available agent — no lead ever sits untouched.",
  },
  {
    icon: CalendarClock,
    title: "Never miss a follow-up",
    desc: "Task scheduling, callback reminders, and hot-lead Google Calendar reminders make sure every touchpoint happens on time.",
  },
  {
    icon: MessageCircle,
    title: "Close faster on WhatsApp",
    desc: "Message leads directly from inside the CRM — no app switching, no lost conversations.",
  },
  {
    icon: BarChart3,
    title: "See what's working",
    desc: "Agent performance, conversion funnels, and real-time analytics show founders exactly who's converting.",
  },
];

export function Growth() {
  return (
    <section className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">The Journey</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            How Mint CRM grows your business
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From the first click to a closed deal — one connected system that keeps your sales team
            running like clockwork.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div
            className="absolute left-[27px] top-4 bottom-4 hidden w-px bg-border lg:block"
            aria-hidden="true"
          />
          <div className="space-y-5">
            {STEPS.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 80}
                className="relative flex items-start gap-5 rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6"
              >
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-mint text-primary-foreground shadow-soft">
                  <step.icon className="h-6 w-6" />
                </span>
                <div className="pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary">STEP {i + 1}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
