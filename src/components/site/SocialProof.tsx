import { Reveal } from "./Reveal";

const STATS = [
  { value: "3x", label: "Faster lead response time" },
  { value: "0", label: "Leads lost to follow-up gaps" },
  { value: "92%", label: "Higher follow-up completion" },
  { value: "100%", label: "Visibility into agent performance" },
];

const TESTIMONIALS = [
  {
    quote:
      "We were drowning in WhatsApp enquiries. Mint CRM auto-assigns every lead and our agents finally follow up on time. Our conversions jumped within the first month.",
    name: "Rohit Kapoor",
    role: "Founder",
    company: "Wanderlust Travels",
  },
  {
    quote:
      "The agent performance metrics changed everything. I can see exactly who's converting and where leads drop off. No more guessing, no more lost deals.",
    name: "Sneha Iyer",
    role: "Sales Head",
    company: "Prime Realty Group",
  },
  {
    quote:
      "Bulk import plus round-robin assignment saved us hours every week. It runs like a system now instead of pure chaos.",
    name: "Aman Verma",
    role: "Director",
    company: "BrightPath Consultants",
  },
];

export function SocialProof() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            Results sales teams can feel
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            When every lead is captured, assigned, and followed up — the numbers follow.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 rounded-3xl border border-border bg-gradient-soft p-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="text-center">
              <p className="text-4xl font-extrabold text-primary sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              as="article"
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <p className="flex-1 text-sm leading-relaxed text-foreground">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
