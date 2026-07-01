import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="bg-background px-5 py-12 sm:px-8">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-mint px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold text-balance sm:text-4xl lg:text-5xl">
          Ready to stop losing leads?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
          Give your sales team a system that captures, assigns, and converts every lead — starting
          today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Book a Free Demo <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <MessageCircle className="h-4 w-4" /> Talk to us on WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
