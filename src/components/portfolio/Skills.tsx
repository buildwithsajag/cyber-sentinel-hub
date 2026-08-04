import { Network, Wrench, ShieldHalf, Code2 } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const groups = [
  {
    icon: Network,
    title: "Networking & Protocols",
    note: "packet-level fluency",
    items: ["TCP/IP", "DNS", "Wireshark", "Subnetting", "VLANs", "TLS"],
  },
  {
    icon: Wrench,
    title: "Tools & Frameworks",
    note: "offensive tooling",
    items: ["Nmap", "Burp Suite", "Metasploit", "Linux/Bash", "Hydra", "Gobuster"],
  },
  {
    icon: ShieldHalf,
    title: "Defensive Security",
    note: "detection & hardening",
    items: ["SIEM basics", "Snort", "Log Analysis", "Hardening", "CIS Benchmarks", "Sysmon"],
  },
  {
    icon: Code2,
    title: "Programming & Scripting",
    note: "automation first",
    items: ["Python", "Bash", "PowerShell", "Regex", "Git", "Docker"],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="02"
        title="Technical Skills"
        subtitle="Tooling and knowledge areas I use daily across lab work, writeups, and automation projects."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map(({ icon: Icon, title, note, items }) => (
          <div key={title} className="panel-card group p-6">
            <span className="grid h-10 w-10 place-items-center rounded-md border border-cyber/40 bg-cyber/10 text-cyber transition-shadow group-hover:shadow-[0_0_20px_-6px_var(--cyber)]">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-base font-semibold">{title}</h3>
            <p className="mt-1 font-mono text-[11px] text-neon">// {note}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {items.map((i) => (
                <li
                  key={i}
                  className="rounded border border-border bg-background/50 px-2 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-cyber/30 group-hover:text-foreground"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
