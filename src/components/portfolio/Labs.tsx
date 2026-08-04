import { useState } from "react";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import { Section, SectionHeading } from "./Section";

type Difficulty = "Easy" | "Medium" | "Hard";

const tabs = ["TryHackMe / HackTheBox", "Home Lab Builds", "CTF Challenges"] as const;

const entries: {
  tab: (typeof tabs)[number];
  name: string;
  platform: string;
  difficulty: Difficulty;
  notes: string;
  tags: string[];
}[] = [
  {
    tab: "TryHackMe / HackTheBox",
    name: "Blue",
    platform: "TryHackMe",
    difficulty: "Easy",
    notes: "EternalBlue exploitation on unpatched SMB, followed by hash dumping and cracking.",
    tags: ["SMB", "MS17-010", "Metasploit"],
  },
  {
    tab: "TryHackMe / HackTheBox",
    name: "Wreath Network",
    platform: "TryHackMe",
    difficulty: "Hard",
    notes: "Pivoted three hosts deep with chisel, abused a webhook, then evaded AV on the DC path.",
    tags: ["Pivoting", "AV Evasion", "Chisel"],
  },
  {
    tab: "TryHackMe / HackTheBox",
    name: "Lame",
    platform: "HackTheBox",
    difficulty: "Easy",
    notes: "Classic distcc and Samba usermap script path to root, documented end to end.",
    tags: ["Samba", "Enumeration"],
  },
  {
    tab: "Home Lab Builds",
    name: "Segmented Attack Range",
    platform: "Proxmox",
    difficulty: "Medium",
    notes: "pfSense-routed VLANs isolating Kali, a Windows AD domain, and a monitored DMZ.",
    tags: ["pfSense", "VLAN", "Active Directory"],
  },
  {
    tab: "Home Lab Builds",
    name: "SIEM Pipeline",
    platform: "Elastic + Sysmon",
    difficulty: "Medium",
    notes: "Shipped Sysmon and auditd telemetry into Elastic with Sigma-derived detections.",
    tags: ["Elastic", "Sysmon", "Sigma"],
  },
  {
    tab: "Home Lab Builds",
    name: "Honeypot Node",
    platform: "Cowrie",
    difficulty: "Easy",
    notes: "Internet-facing SSH honeypot logging credential sprays and dropped payloads.",
    tags: ["Cowrie", "Threat Intel"],
  },
  {
    tab: "CTF Challenges",
    name: "picoCTF — Web Exploitation",
    platform: "picoCTF",
    difficulty: "Medium",
    notes: "Chained IDOR and JWT algorithm confusion to reach an admin-only flag route.",
    tags: ["JWT", "IDOR", "Burp"],
  },
  {
    tab: "CTF Challenges",
    name: "NahamCon — Forensics",
    platform: "NahamCon",
    difficulty: "Hard",
    notes: "Carved exfiltrated data out of a DNS tunnel inside a 400MB pcap.",
    tags: ["pcap", "DNS Tunnel", "Wireshark"],
  },
  {
    tab: "CTF Challenges",
    name: "OverTheWire — Bandit",
    platform: "OverTheWire",
    difficulty: "Easy",
    notes: "Full 34-level run as a Linux fundamentals and shell-fu refresher.",
    tags: ["Bash", "Linux"],
  },
];

const badge: Record<Difficulty, string> = {
  Easy: "border-neon/45 bg-neon/10 text-neon",
  Medium: "border-warn/45 bg-warn/10 text-warn",
  Hard: "border-destructive/45 bg-destructive/10 text-destructive",
};

export function Labs() {
  const [active, setActive] = useState<(typeof tabs)[number]>(tabs[0]);
  const visible = entries.filter((e) => e.tab === active);

  return (
    <Section id="labs">
      <SectionHeading
        index="04"
        title="Labs & CTF Writeups"
        subtitle="Hands-on practice, sorted by where the work happened."
      />
      <div className="mt-8 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`rounded-md border px-4 py-2 font-mono text-[12px] transition-all ${
              active === t
                ? "border-cyber/60 bg-cyber/10 text-cyber shadow-[0_0_20px_-8px_var(--cyber)]"
                : "border-border text-muted-foreground hover:border-cyber/40 hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((e) => (
          <article key={e.name} className="panel-card group flex flex-col p-5">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
              <div className="min-w-0">
                <h3 className="truncate text-base font-semibold">{e.name}</h3>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">{e.platform}</p>
              </div>
              <span
                className={`shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide ${badge[e.difficulty]}`}
              >
                {e.difficulty}
              </span>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">{e.notes}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {e.tags.map((t) => (
                <li
                  key={t}
                  className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-1.5 font-mono text-[12px] text-cyber opacity-80 transition-opacity group-hover:opacity-100"
            >
              <FlaskConical className="h-3.5 w-3.5" /> read writeup
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
