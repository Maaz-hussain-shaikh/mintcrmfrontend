import {
  LayoutDashboard,
  Upload,
  Shuffle,
  UserCog,
  GitBranch,
  ListChecks,
  CalendarClock,
  CalendarSync,
  MessageCircle,
  UserSearch,
  Tags,
  CopyCheck,
  SlidersHorizontal,
  BarChart3,
  Trophy,
  Filter,
  ShieldCheck,
  Download,
  Plug,
  Layers,
  Headphones,
} from "lucide-react";
import { Reveal } from "./Reveal";

const FEATURES = [
  { icon: LayoutDashboard, title: "Lead Management Dashboard", desc: "Capture and organize every lead in one place." },
  { icon: Upload, title: "Bulk Lead Import (CSV)", desc: "Upload thousands of leads in seconds." },
  { icon: Shuffle, title: "Automated Lead Distribution", desc: "Round-robin auto-assignment to agents." },
  { icon: UserCog, title: "Manual Agent Assignment", desc: "Full control when you need it." },
  { icon: GitBranch, title: "Lead Status Tracking", desc: "Visual pipeline from New to Converted." },
  { icon: ListChecks, title: "Task Assignment", desc: "Assign and track team tasks." },
  { icon: CalendarClock, title: "Followup & Callback Scheduling", desc: "Never miss a touchpoint." },
  { icon: CalendarSync, title: "Google Calendar Sync", desc: "Auto-linked followups and callbacks." },
  { icon: MessageCircle, title: "WhatsApp Direct Messaging", desc: "Message leads straight from the CRM." },
  { icon: UserSearch, title: "Agent-wise Lead Tracking", desc: "Know exactly who's working what." },
  { icon: Tags, title: "Lead Source Tagging", desc: "Know where every lead came from." },
  { icon: CopyCheck, title: "Duplicate Lead Detection", desc: "Clean data, always." },
  { icon: SlidersHorizontal, title: "Custom Lead Status Stages", desc: "Match your own sales process." },
  { icon: BarChart3, title: "Advanced Analytics & Reports", desc: "Conversion %, response time, funnel view." },
  { icon: Trophy, title: "Agent Performance Leaderboard", desc: "Gamify your sales team." },
  { icon: Filter, title: "Conversion Funnel Reports", desc: "See exactly where leads drop off." },
  { icon: ShieldCheck, title: "Custom Roles & Permissions", desc: "Admin and Agent access control." },
  { icon: Download, title: "Data Export (Excel/CSV)", desc: "Your data, always exportable." },
  { icon: Plug, title: "API Access for Integrations", desc: "Connect Mint CRM to your stack." },
  { icon: Layers, title: "Priority Distribution & Multi-level Tasks", desc: "Built for larger teams." },
  { icon: Headphones, title: "Dedicated Onboarding & Account Manager", desc: "White-glove support on higher tiers." },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Features</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            Everything your sales team needs to convert
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One platform that replaces spreadsheets, sticky notes, and scattered chats.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 70}
              as="article"
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
