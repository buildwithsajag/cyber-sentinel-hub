import { Section, SectionHeading } from "./Section";

const stats = [
  { value: "24", label: "CTF Writeups Published" },
  { value: "Top 3%", label: "TryHackMe Global Rank" },
  { value: "37", label: "Vulnerabilities Documented" },
  { value: "120+", label: "Labs Completed" },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <SectionHeading index="01" title="About Me" />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              I'm a final-year B.Sc. Computer Science student concentrating in Information Security.
              My coursework covers network architecture, cryptography, and secure systems design —
              but most of my learning happens in a self-built home lab of virtualized attack ranges
              and monitored Linux hosts.
            </p>
            <p>
              I work both sides of the fence: enumerating and exploiting deliberately vulnerable
              targets to understand attacker tradecraft, then translating those findings into
              detection rules, hardened baselines, and automation scripts that shorten response
              time.
            </p>
            <p className="border-l-2 border-cyber/60 pl-4 font-mono text-[13px] text-foreground">
              Every technique I practice stays inside authorized labs and scoped engagements.
              Disclosure is responsible, notes are reproducible, and permission comes first.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 self-start">
          {stats.map((s) => (
            <div key={s.label} className="panel-card p-5">
              <p className="font-mono text-2xl font-semibold text-cyber sm:text-3xl">{s.value}</p>
              <p className="mt-2 text-xs leading-snug text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
