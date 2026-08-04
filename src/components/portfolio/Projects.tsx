import { ExternalLink, Github, Zap } from "lucide-react";
import { Section, SectionHeading } from "./Section";

const projects = [
  {
    title: "SnortSentry — IDS Rule Lab",
    summary:
      "A Dockerized intrusion detection range that replays malicious traffic against a tuned Snort sensor and grades rule coverage.",
    stack: ["Snort", "Docker", "Python", "tcpreplay"],
    highlights: [
      "Configured custom Snort rules to detect SQL Injection and directory traversal attacks",
      "Reduced false positives 42% by profiling baseline traffic before tuning thresholds",
    ],
  },
  {
    title: "ReconPilot — Recon Automation CLI",
    summary:
      "Python CLI that chains subdomain discovery, port scanning, and service fingerprinting into a single reproducible engagement report.",
    stack: ["Python", "Nmap", "asyncio", "Jinja2"],
    highlights: [
      "Cut initial recon time on scoped labs from ~40 minutes to under 6",
      "Generates Markdown + JSON artifacts for evidence-backed writeups",
    ],
  },
  {
    title: "LogHawk — Auth Log Analyzer",
    summary:
      "Log analysis pipeline that parses SSH and web auth logs, scores anomalous sessions, and pushes alerts to a lightweight SIEM view.",
    stack: ["Python", "Pandas", "Elastic", "Bash"],
    highlights: [
      "Detected credential-stuffing patterns via sliding-window failure ratios",
      "Enriched events with GeoIP and ASN context for triage",
    ],
  },
  {
    title: "HardenBox — Linux Baseline Scripts",
    summary:
      "Idempotent hardening scripts mapping CIS Benchmark controls to Debian/Ubuntu hosts, with a pre/post audit diff.",
    stack: ["Bash", "Ansible", "Lynis", "CIS"],
    highlights: [
      "Raised Lynis hardening index from 61 to 88 on a stock server image",
      "Every control is reversible and documented with rationale",
    ],
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="03"
        title="Featured Projects"
        subtitle="Build-and-break work where the write-up matters as much as the exploit."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="panel-card flex flex-col p-6">
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            <ul className="mt-5 space-y-2.5">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-[13px] leading-relaxed text-foreground/90">
                  <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neon" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded border border-cyber/25 bg-cyber/10 px-2 py-0.5 font-mono text-[11px] text-cyber"
                >
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-4 font-mono text-[12px]">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-cyber"
              >
                <Github className="h-3.5 w-3.5" /> repository
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-cyber"
              >
                <ExternalLink className="h-3.5 w-3.5" /> report
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
