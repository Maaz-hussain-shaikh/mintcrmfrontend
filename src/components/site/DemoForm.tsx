import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().min(2, "Please enter your company").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone/WhatsApp number")
    .max(20, "Number is too long")
    .regex(/^[+0-9][0-9\s-]+$/, "Enter a valid phone/WhatsApp number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  teamSize: z.string().min(1, "Select a team size"),
});

type FormState = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormState, string>>;

const TEAM_SIZES = ["1–2 agents", "3–5 agents", "6–10 agents", "10+ agents"];

const FIELDS: { name: keyof FormState; label: string; type: string; placeholder: string }[] = [
  { name: "name", label: "Full name", type: "text", placeholder: "Riya Sharma" },
  { name: "company", label: "Company", type: "text", placeholder: "Acme Travels" },
  { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+91 98765 43210" },
  { name: "email", label: "Work email", type: "email", placeholder: "you@company.com" },
];

export function DemoForm() {
  const [values, setValues] = useState<FormState>({
    name: "",
    company: "",
    phone: "",
    email: "",
    teamSize: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Errors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    // Ready to connect to a backend later.
    setSubmitted(true);
  };

  return (
    <section id="demo" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-wider text-primary">Book a demo</span>
          <h2 className="mt-3 text-3xl font-extrabold text-foreground text-balance sm:text-4xl">
            See Mint CRM on your own pipeline
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us a little about your team and we'll show you exactly how Mint CRM captures,
            assigns, and converts your leads — tailored to your sales process.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "A live walkthrough with your use case",
              "Setup guidance and CSV import help",
              "No obligation — just see if it fits",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" /> {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
                  <CheckCircle2 className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-foreground">You're all set!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks, {values.name.split(" ")[0]}. Our team will reach out shortly to schedule
                  your free demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {FIELDS.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="mb-1.5 block text-sm font-semibold text-foreground"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      type={field.type}
                      value={values[field.name]}
                      onChange={(e) => update(field.name, e.target.value)}
                      placeholder={field.placeholder}
                      className={`w-full rounded-xl border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                        errors[field.name] ? "border-destructive" : "border-input"
                      }`}
                    />
                    {errors[field.name] && (
                      <p className="mt-1 text-xs text-destructive">{errors[field.name]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label htmlFor="teamSize" className="mb-1.5 block text-sm font-semibold text-foreground">
                    Team size
                  </label>
                  <select
                    id="teamSize"
                    value={values.teamSize}
                    onChange={(e) => update("teamSize", e.target.value)}
                    className={`w-full rounded-xl border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                      errors.teamSize ? "border-destructive" : "border-input"
                    } ${values.teamSize ? "" : "text-muted-foreground/60"}`}
                  >
                    <option value="">Select team size</option>
                    {TEAM_SIZES.map((t) => (
                      <option key={t} value={t} className="text-foreground">
                        {t}
                      </option>
                    ))}
                  </select>
                  {errors.teamSize && (
                    <p className="mt-1 text-xs text-destructive">{errors.teamSize}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-dark"
                >
                  Book a Free Demo <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  We'll never share your details. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
