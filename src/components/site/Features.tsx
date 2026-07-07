import {
  LayoutDashboard,
  Upload,
  Shuffle,
  UserCog,
  GitBranch,
  ListChecks,
  CalendarClock,
  CalendarCheck,
  MessageCircle,
  MessagesSquare,
  Bell,
  UserCheck,
  BarChart3,
  CopyCheck,
  Share2,
  Plug,
  LineChart,
  Download,
  ClipboardList,
  Palette,
  ShieldCheck,
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
  { icon: CalendarCheck, title: "Hot-lead Google Calendar Reminder", desc: "Add hot leads to Google Calendar in one tap." },
  { icon: MessageCircle, title: "WhatsApp Messaging", desc: "Message leads straight from the CRM." },
  { icon: MessagesSquare, title: "Smart WhatsApp Templates", desc: "Status-tagged, ready-to-send messages." },
  { icon: Bell, title: "Push Notifications", desc: "Instant alerts, even in the background." },
  { icon: UserCheck, title: "Attendance (Present / Absent / Leave)", desc: "Track your team's daily attendance." },
  { icon: BarChart3, title: "Agent Performance Metrics", desc: "Conversion %, untouched & missed callbacks." },
  { icon: CopyCheck, title: "Lead Categories & Duplicate Detection", desc: "Clean, well-organized data — always." },
  { icon: Share2, title: "Multi-source Intake (Instagram / WhatsApp)", desc: "Pull leads from every channel automatically." },
  { icon: Plug, title: "Auto Lead Intake API", desc: "Connect your website & webhooks to Mint CRM." },
  { icon: LineChart, title: "Advanced Reports & Analytics", desc: "Deep insights with conversion funnels." },
  { icon: Download, title: "Data Export (Excel / CSV)", desc: "Your data, always exportable." },
  { icon: ClipboardList, title: "Complete Attendance Register", desc: "Work settings, holidays & auto-absent." },
  { icon: Palette, title: "White-label Branding", desc: "Your own brand name and logo." },
  { icon: ShieldCheck, title: "Admin & Agent Roles", desc: "Role-based access control built in." },
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
