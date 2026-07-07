import { Share2, ShoppingCart, Wallet, IndianRupee, Zap, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: Share2,
    title: "Refer a business",
    desc: "Share Mint CRM with any business owner, agency, or sales team in your network.",
  },
  {
    icon: ShoppingCart,
    title: "They buy a plan",
    desc: "Your referral signs up for any Mint CRM plan — Starter, Growth, or Pro.",
  },
  {
    icon: Wallet,
    title: "You earn ₹2,000",
    desc: "The moment their payment clears, ₹2,000 lands in your account — instantly.",
  },
];

export function ReferralProgram() {
  return (
    <section id="referral" className="scroll-mt-20 bg-background px-5 py-12 sm:px-8">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-mint px-6 py-16 text-primary-foreground sm:px-12 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          {/* Left — pitch */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
              <Zap className="h-4 w-4" /> Referral Program
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-balance sm:text-4xl lg:text-5xl">
              Refer &amp; earn{" "}
              <span className="whitespace-nowrap">₹2,000</span> — instantly.
            </h2>
            <p className="mt-4 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
              Know a business drowning in leads? Send them our way. Every time your referral buys
              Mint CRM, you get <strong>₹2,000 credited instantly</strong> — no limits, no waiting,
              no cap on how many you refer.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Get your referral link <ArrowRight className="h-4 w-4" />
              </a>
              <span className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground">
                <IndianRupee className="h-4 w-4" /> Unlimited earnings
              </span>
            </div>
          </div>

          {/* Right — big payout card */}
          <div className="rounded-3xl bg-primary-foreground/10 p-6 backdrop-blur-sm sm:p-8">
            <div className="rounded-2xl bg-primary-foreground p-6 text-center text-primary shadow-float">
              <p className="text-xs font-bold uppercase tracking-wider text-primary/70">
                You earn per sale
              </p>
              <p className="mt-2 flex items-center justify-center text-5xl font-extrabold sm:text-6xl">
                <IndianRupee className="h-9 w-9" strokeWidth={2.5} />2,000
              </p>
              <p className="mt-1 text-sm font-medium text-primary/70">credited instantly</p>
            </div>

            <div className="mt-6 space-y-4">
              {STEPS.map((s, i) => (
                <div key={s.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15 text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold">
                      {i + 1}. {s.title}
                    </p>
                    <p className="text-sm text-primary-foreground/80">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
