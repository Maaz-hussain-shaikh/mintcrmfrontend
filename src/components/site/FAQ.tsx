import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "What is Mint CRM?",
    a: "Mint CRM is a lead management and sales automation platform built for sales-driven teams. It centralizes every lead, auto-assigns it to the right agent, schedules follow-ups, syncs callbacks to Google Calendar, lets you message leads on WhatsApp, and shows founders real-time conversion analytics.",
  },
  {
    q: "How does lead assignment work?",
    a: "New leads are distributed automatically using round-robin logic so no lead sits untouched. You can also assign leads manually whenever you need full control, and track each agent's workload in real time.",
  },
  {
    q: "Does it integrate with WhatsApp?",
    a: "Yes. On the Growth and Pro plans you can message leads directly on WhatsApp from inside the CRM — no app switching, and every conversation stays tied to the lead's history.",
  },
  {
    q: "Can I import my existing leads?",
    a: "Absolutely. Use the CSV bulk import to upload thousands of existing leads in seconds. Built-in duplicate detection keeps your data clean as you go.",
  },
  {
    q: "Is there a free trial or demo?",
    a: "Yes. Book a free demo and our team will walk you through Mint CRM with your own use case so you can see exactly how it fits your sales process before you commit.",
  },
  {
    q: "What happens if I exceed my agent limit?",
    a: "Each plan includes a set number of agents. If you grow beyond your plan, simply upgrade — or if you need more than 10 agents, contact us for custom enterprise pricing.",
  },
  {
    q: "Is my data secure?",
    a: "Your data is protected with role-based access control (Admin and Agent permissions), so team members only see what they should. You can export your data to Excel or CSV at any time — it's always yours.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Plans are billed annually. You can choose not to renew at the end of your billing cycle, and you can export all of your data whenever you like.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-foreground">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            Questions, answered
          </h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <FaqItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
