import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Github, Linkedin, KeyRound, Target, Send } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(10, "Tell me a bit more (10+ chars)").max(1000),
});

const socials = [
  { icon: Github, label: "github.com/aaravsec", href: "https://github.com" },
  { icon: Linkedin, label: "linkedin.com/in/aaravsec", href: "https://linkedin.com" },
  { icon: Target, label: "tryhackme.com/p/aaravsec", href: "https://tryhackme.com" },
];

const fields = [
  { name: "name", label: "Name", type: "text", placeholder: "Jane Doe" },
  { name: "email", label: "Email", type: "email", placeholder: "jane@corp.com" },
  { name: "subject", label: "Subject", type: "text", placeholder: "Internship opportunity" },
] as const;

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const key = String(i.path[0]);
        if (!next[key]) next[key] = i.message;
      });
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    setValues({ name: "", email: "", subject: "", message: "" });
    toast.success("Message queued — I'll reply within 48 hours.");
  };

  const inputCls =
    "w-full rounded-md border border-input bg-background/60 px-3 py-2.5 font-mono text-[13px] text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-cyber focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--cyber)_18%,transparent)]";

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            index="06"
            title="Contact"
            subtitle="Open to security internships, collaboration on writeups, and responsible disclosure conversations."
          />
          <ul className="mt-8 space-y-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-3 rounded-md border border-border bg-panel/50 px-4 py-3 font-mono text-[13px] text-muted-foreground transition-all hover:border-cyber/50 hover:text-cyber"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{label}</span>
                  <span className="ml-auto shrink-0 text-cyber opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-md border border-neon/30 bg-neon/5 p-4">
            <p className="flex items-center gap-2 font-mono text-[12px] text-neon">
              <KeyRound className="h-3.5 w-3.5" /> PGP fingerprint
            </p>
            <p className="mt-2 break-all font-mono text-[11.5px] leading-relaxed text-muted-foreground">
              9F4C 2A17 8B03 D6E5 1C90 &nbsp; 77AB 3E51 D2F8 6C4B A019
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="panel-card p-6 hover:translate-y-0">
          <div className="grid gap-4">
            {fields.map((f) => (
              <div key={f.name}>
                <label
                  htmlFor={f.name}
                  className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-muted-foreground"
                >
                  {f.label}
                </label>
                <input
                  id={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={values[f.name]}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                  className={inputCls}
                />
                {errors[f.name] && (
                  <p className="mt-1.5 font-mono text-[11px] text-destructive">{errors[f.name]}</p>
                )}
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="What are you working on?"
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                className={`${inputCls} resize-none`}
              />
              {errors["message"] && (
                <p className="mt-1.5 font-mono text-[11px] text-destructive">{errors["message"]}</p>
              )}
            </div>
            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-cyber px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-shadow hover:shadow-[0_0_26px_-4px_var(--cyber)]"
            >
              <Send className="h-4 w-4" /> send_message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
