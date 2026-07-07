import { ArrowRight, Plus, Search, Phone, MessageCircle, Download } from "lucide-react";
import { Reveal } from "./Reveal";

const LEADS = [
  { name: "Aarav Mehta", source: "Website", agent: "RS", status: "New", tone: "new" },
  { name: "Priya Sharma", source: "WhatsApp", agent: "NK", status: "Follow-up", tone: "warm" },
  { name: "Global Tours Ltd", source: "Referral", agent: "RS", status: "Qualified", tone: "qual" },
  { name: "Devanshi Patel", source: "Ad Campaign", agent: "AM", status: "Converted", tone: "won" },
];

const STATUS_STYLES: Record<string, string> = {
  new: "bg-secondary text-primary",
  warm: "bg-accent text-accent-foreground",
  qual: "bg-[oklch(0.92_0.06_150)] text-primary-dark",
  won: "bg-primary text-primary-foreground",
};

export function HeroDashboard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-soft opacity-70 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-float">
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
            <Search className="h-3 w-3" /> Search leads
          </div>
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground inline-flex items-center gap-1">
            <Plus className="h-3 w-3" /> Lead
          </span>
        </div>

        <div className="grid gap-0 sm:grid-cols-[1.6fr_1fr]">
          {/* lead list */}
          <div className="p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-bold text-foreground">All Leads</h3>
              <span className="text-xs text-muted-foreground">248 active</span>
            </div>
            <div className="space-y-2">
              {LEADS.map((lead) => (
                <div
                  key={lead.name}
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">
                      {lead.agent}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-foreground">{lead.name}</p>
                      <p className="text-[11px] text-muted-foreground">via {lead.source}</p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${STATUS_STYLES[lead.tone]}`}
                  >
                    {lead.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* agent assignment panel */}
          <div className="border-t border-border bg-muted/30 p-4 sm:border-l sm:border-t-0">
            <h3 className="mb-3 text-sm font-bold text-foreground">Auto-Assignment</h3>
            <div className="rounded-xl border border-primary/20 bg-secondary p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                Round-robin
              </p>
              <p className="mt-1 text-xs text-foreground">
                New lead assigned to <span className="font-bold">Riya S.</span>
              </p>
            </div>
            <div className="mt-3 space-y-2">
              {[
                { n: "Riya S.", load: 18, w: "w-[85%]" },
                { n: "Neel K.", load: 14, w: "w-[65%]" },
                { n: "Aman M.", load: 9, w: "w-[42%]" },
              ].map((a) => (
                <div key={a.n} className="rounded-lg bg-background p-2.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-foreground">{a.n}</span>
                    <span className="text-muted-foreground">{a.load} leads</span>
                  </div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-muted">
                    <div className={`h-full rounded-full bg-primary ${a.w}`} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-primary py-2 text-[11px] font-semibold text-primary-foreground">
                <MessageCircle className="h-3 w-3" /> WhatsApp
              </button>
              <button className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-border bg-background py-2 text-[11px] font-semibold text-foreground">
                <Phone className="h-3 w-3" /> Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-soft pt-28 pb-16 sm:pt-32 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-3 py-1.5 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Lead Management & Sales Automation CRM
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-foreground text-balance sm:text-5xl lg:text-6xl">
            Stop losing leads. <span className="text-primary">Start closing them.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Mint CRM captures every lead the moment it arrives, auto-assigns it to the right agent,
            reminds your team to follow up on time, and shows you exactly who's converting — so
            nothing ever slips through the cracks.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#demo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-all hover:bg-primary-dark"
            >
              Book a Free Demo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              See Pricing
            </a>
          </div>
          <a
            href="/Mint-CRM-Sales-Presentation.pdf"
            download
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            <Download className="h-4 w-4" /> Why You Need This CRM (PDF)
          </a>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Built for fast-growing sales teams</span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>Agencies · Travel companies · B2B teams</span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <HeroDashboard />
        </Reveal>
      </div>
    </section>
  );
}
