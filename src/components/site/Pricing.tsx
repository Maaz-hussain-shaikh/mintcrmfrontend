import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Feature = { label: string; highlight?: boolean };

const PLANS: {
  name: string;
  monthly: string;
  yearly: string;
  agents: string;
  popular: boolean;
  inheritsLabel: string | null;
  highlightNote?: string;
  features: Feature[];
}[] = [
  {
    name: "Starter",
    monthly: "1,000",
    yearly: "12,000",
    agents: "3 Agents",
    popular: false,
    inheritsLabel: null,
    features: [
      { label: "Lead Management Dashboard" },
      { label: "CSV Bulk Lead Import" },
      { label: "Manual Agent Assignment" },
      { label: "Lead Status Tracking" },
      { label: "WhatsApp Messaging" },
      { label: "Followup & Callback Scheduling" },
      { label: "Hot-lead Google Calendar Reminder" },
      { label: "Lead Categories & Duplicate Detection" },
      { label: "Task Assignment" },
      { label: "Lead Notes & History" },
      { label: "Admin + Agent Roles" },
    ],
  },
  {
    name: "Growth",
    monthly: "1,399",
    yearly: "16,788",
    agents: "5 Agents",
    popular: true,
    inheritsLabel: "Everything in Starter, plus:",
    highlightNote: "⚡ Best value for growing sales teams",
    features: [
      { label: "Automated Lead Distribution (Round-robin)", highlight: true },
      { label: "Auto CSV Distribution to Agents", highlight: true },
      { label: "Smart WhatsApp Message Templates", highlight: true },
      { label: "Real-time Push Notifications", highlight: true },
      { label: "Attendance (Present / Absent / Leave)", highlight: true },
      { label: "Agent Performance Metrics", highlight: true },
    ],
  },
  {
    name: "Pro",
    monthly: "1,799",
    yearly: "21,588",
    agents: "Unlimited Agents",
    popular: false,
    inheritsLabel: "Everything in Growth, plus:",
    features: [
      { label: "Auto Lead Intake API (Website / WhatsApp)" },
      { label: "Multi-source Intake — Instagram + WhatsApp" },
      { label: "Advanced Reports & Analytics" },
      { label: "Data Export (Excel / CSV)" },
      { label: "Complete Attendance Register + Work Settings" },
      { label: "White-label Branding (Your Name & Logo)" },
      { label: "Priority Support & Onboarding" },
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Pricing</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            Simple, transparent annual pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pick a plan that fits your team. All plans are billed annually.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 90}
              className={`relative flex h-full flex-col rounded-3xl border bg-card p-7 ${
                plan.popular
                  ? "border-primary shadow-float lg:-mt-4 lg:mb-4"
                  : "border-border shadow-soft"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground shadow-soft">
                  Most Popular
                </span>
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                  {plan.agents}
                </span>
              </div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-foreground">₹{plan.monthly}</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Billed yearly — ₹{plan.yearly}/year
              </p>

              <a
                href="#demo"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary-dark"
                    : "border border-border bg-background text-foreground hover:bg-secondary"
                }`}
              >
                Book a Free Demo <ArrowRight className="h-4 w-4" />
              </a>

              {plan.highlightNote && (
                <p className="mt-6 rounded-xl bg-secondary px-3 py-2 text-center text-xs font-semibold text-primary">
                  {plan.highlightNote}
                </p>
              )}
              {plan.inheritsLabel && (
                <p className={`text-xs font-semibold text-primary ${plan.highlightNote ? "mt-3" : "mt-6"}`}>
                  {plan.inheritsLabel}
                </p>
              )}
              <ul className={`space-y-3 ${plan.inheritsLabel || plan.highlightNote ? "mt-3" : "mt-6"}`}>
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                        f.highlight ? "bg-primary text-primary-foreground" : "text-primary"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span className={`text-sm ${f.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          All plans billed annually. Need custom limits or a tailored setup?{" "}
          <a href="#demo" className="font-semibold text-primary underline-offset-2 hover:underline">
            Contact us for custom enterprise pricing.
          </a>
        </Reveal>
      </div>
    </section>
  );
}
