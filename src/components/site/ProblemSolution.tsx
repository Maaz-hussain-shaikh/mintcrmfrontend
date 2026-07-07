import { X, Check } from "lucide-react";
import { Reveal } from "./Reveal";

const ROWS = [
  {
    without: "Leads scattered across spreadsheets, chats & notebooks",
    with: "Every lead centralized the moment it enters your business",
  },
  {
    without: "Missed follow-ups and forgotten callbacks",
    with: "Automatic reminders + hot-lead Google Calendar alerts keep you on time",
  },
  {
    without: "No idea which agent is actually performing",
    with: "Real-time agent tracking and conversion analytics",
  },
  {
    without: "Manual WhatsApp chaos across personal phones",
    with: "Message leads directly on WhatsApp from inside the CRM",
  },
  {
    without: "Leads sit untouched while agents argue over them",
    with: "Round-robin auto-assignment — no lead left behind",
  },
];

export function ProblemSolution() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            Every business loses money the same way
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Leads come in — and then get lost. Mint CRM turns that chaos into a system.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-destructive/20 bg-destructive-soft/60 p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-xl font-bold text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                <X className="h-4 w-4" />
              </span>
              Without Mint CRM
            </h3>
            <ul className="mt-6 space-y-4">
              {ROWS.map((r) => (
                <li key={r.without} className="flex items-start gap-3">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <span className="text-sm text-muted-foreground">{r.without}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="rounded-2xl border border-primary/20 bg-secondary p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-xl font-bold text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-4 w-4" />
              </span>
              With Mint CRM
            </h3>
            <ul className="mt-6 space-y-4">
              {ROWS.map((r) => (
                <li key={r.with} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{r.with}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
