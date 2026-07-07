import {
  Sparkles,
  Mail,
  Inbox,
  Smartphone,
  PhoneCall,
  CreditCard,
  Workflow,
  LayoutGrid,
  Webhook,
} from "lucide-react";
import { Reveal } from "./Reveal";

const UPCOMING = [
  { icon: Sparkles, title: "AI Lead Scoring", desc: "Auto-rank leads by conversion likelihood so agents chase the hottest first." },
  { icon: Inbox, title: "Two-way WhatsApp Inbox", desc: "Chat with every lead in one unified inbox — reply without leaving the CRM." },
  { icon: Mail, title: "Email Campaigns & Automation", desc: "Send bulk emails and drip sequences that nurture leads on autopilot." },
  { icon: PhoneCall, title: "Call Recording & IVR", desc: "Record calls and route inbound leads with a built-in IVR menu." },
  { icon: Smartphone, title: "Mobile App (Android & iOS)", desc: "Manage leads, calls and followups on the go — right from your phone." },
  { icon: LayoutGrid, title: "Custom Dashboards & Widgets", desc: "Build your own reports view with drag-and-drop widgets." },
  { icon: CreditCard, title: "Payments & Invoicing", desc: "Send invoices and collect payments once a lead converts." },
  { icon: Workflow, title: "Visual Workflow Automation", desc: "Trigger tasks, reminders and messages with no-code rules." },
  { icon: Webhook, title: "Integrations Marketplace", desc: "One-click connections to your favorite tools via Zapier & webhooks." },
];

export function UpcomingFeatures() {
  return (
    <section id="roadmap" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-sm font-bold uppercase tracking-wider text-primary">
            <Sparkles className="h-4 w-4" /> Roadmap
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            Coming soon to your plan
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We ship fast. Here's what's next — rolling out to upcoming plans at no extra cost for existing customers.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {UPCOMING.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 70}
              as="article"
              className="group relative rounded-2xl border border-dashed border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-card"
            >
              <span className="absolute right-4 top-4 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
                Soon
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Have a feature in mind?{" "}
          <a href="#demo" className="font-semibold text-primary underline-offset-2 hover:underline">
            Tell us — we build what our customers ask for.
          </a>
        </Reveal>
      </div>
    </section>
  );
}
