import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const PLANS = [
  {
    name: "Starter",
    monthly: "1,000",
    yearly: "12,000",
    agents: "2 Agents",
    popular: false,
    inheritsLabel: null as string | null,
    features: [
      "Lead Management Dashboard",
      "CSV Bulk Lead Import",
      "Manual Agent Assignment",
      "Lead Status Tracking",
      "Task Assignment",
      "Followup/Callback Scheduling",
      "Lead Notes & History",
      "Admin + Agent Roles",
    ],
  },
  {
    name: "Growth",
    monthly: "1,300",
    yearly: "15,600",
    agents: "5 Agents",
    popular: true,
    inheritsLabel: "Everything in Starter, plus:",
    features: [
      "Automated Lead Distribution",
      "Google Calendar Sync",
      "WhatsApp Direct Messaging",
      "Agent-wise Tracking",
      "Followup Reminders",
      "Lead Source Tagging",
      "Duplicate Lead Detection",
      "Custom Lead Status Stages",
    ],
  },
  {
    name: "Pro",
    monthly: "1,799",
    yearly: "21,588",
    agents: "10 Agents",
    popular: false,
    inheritsLabel: "Everything in Growth, plus:",
    features: [
      "Advanced Analytics & Reports",
      "Priority Lead Distribution",
      "Multi-level Task Tracking",
      "Onboarding Support",
      "Priority Support",
      "Agent Performance Leaderboard",
      "Conversion Funnel Reports",
      "Custom Roles & Permissions",
      "Data Export (Excel/CSV)",
      "API Access for Integrations",
      "Dedicated Account Manager",
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

              {plan.inheritsLabel && (
                <p className="mt-6 text-xs font-semibold text-primary">{plan.inheritsLabel}</p>
              )}
              <ul className={`space-y-3 ${plan.inheritsLabel ? "mt-3" : "mt-6"}`}>
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          All plans billed annually. Need more than 10 agents?{" "}
          <a href="#demo" className="font-semibold text-primary underline-offset-2 hover:underline">
            Contact us for custom enterprise pricing.
          </a>
        </Reveal>
      </div>
    </section>
  );
}
