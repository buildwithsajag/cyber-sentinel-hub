import { GraduationCap, BadgeCheck, Clock } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const timeline = [
  {
    period: "2023 — 2027",
    title: "B.Sc. Computer Science, Information Security track",
    org: "Tribhuvan University",
    state: "current" as const,
    detail: "Coursework in cryptography, network architecture, OS internals, and secure coding.",
  },
  {
    period: "In progress",
    title: "CompTIA Security+ (SY0-701)",
    org: "CompTIA",
    state: "pursuing" as const,
    detail: "Exam scheduled — currently drilling risk management and architecture domains.",
  },
  {
    period: "2025",
    title: "eLearnSecurity Junior Penetration Tester (eJPT)",
    org: "INE",
    state: "earned" as const,
    detail: "Fully hands-on assessment covering enumeration, exploitation, and pivoting.",
  },
  {
    period: "2024",
    title: "Google Cybersecurity Professional Certificate",
    org: "Google / Coursera",
    state: "earned" as const,
    detail: "SIEM fundamentals, Linux and SQL for security, incident response playbooks.",
  },
  {
    period: "2024",
    title: "TryHackMe SOC Level 1 Path",
    org: "TryHackMe",
    state: "earned" as const,
    detail: "Completed 100+ rooms across triage, threat intel, DFIR, and detection engineering.",
  },
];

const stateStyle = {
  current: { icon: GraduationCap, cls: "border-cyber/60 bg-cyber/10 text-cyber", label: "studying" },
  pursuing: { icon: Clock, cls: "border-warn/60 bg-warn/10 text-warn", label: "in progress" },
  earned: { icon: BadgeCheck, cls: "border-neon/60 bg-neon/10 text-neon", label: "earned" },
};

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        index="05"
        title="Certifications & Education"
        subtitle="Formal study plus the certifications that back the lab work."
      />
      <ol className="relative mt-10 space-y-6 border-l border-border pl-6 sm:pl-8">
        {timeline.map((t) => {
          const s = stateStyle[t.state];
          const Icon = s.icon;
          return (
            <li key={t.title} className="relative">
              <span
                className={`absolute -left-[2.35rem] grid h-7 w-7 place-items-center rounded-full border bg-background sm:-left-[2.85rem] ${s.cls}`}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div className="panel-card p-5">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] text-muted-foreground">{t.period}</p>
                    <h3 className="mt-1 text-base font-semibold">{t.title}</h3>
                    <p className="mt-0.5 font-mono text-[12px] text-cyber">{t.org}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] uppercase ${s.cls}`}
                  >
                    {s.label}
                  </span>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{t.detail}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
