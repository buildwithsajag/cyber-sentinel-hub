import { useEffect, useRef, useState } from "react";

type Line = { prompt?: boolean; text: string; tone?: "cyber" | "neon" | "muted" | "warn" };

const script: Line[] = [
  { prompt: true, text: "whoami" },
  { text: "aarav :: cybersecurity student // blue+red team", tone: "muted" },
  { prompt: true, text: "cat skills.txt" },
  { text: "network_defense  pentesting  security_automation", tone: "cyber" },
  { prompt: true, text: "nmap -sV 10.10.24.7" },
  { text: "22/tcp   open  ssh      OpenSSH 8.9p1", tone: "muted" },
  { text: "80/tcp   open  http     nginx 1.24.0", tone: "muted" },
  { text: "3306/tcp open  mysql    MySQL 8.0.36", tone: "warn" },
  { prompt: true, text: "./report --status" },
  { text: "[OK] 3 findings documented, 0 exploited in prod", tone: "neon" },
];

const toneClass: Record<string, string> = {
  cyber: "text-cyber",
  neon: "text-neon",
  warn: "text-warn",
  muted: "text-muted-foreground",
};

export function TerminalWindow() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineIdx >= script.length) {
      const restart = setTimeout(() => {
        setLineIdx(0);
        setCharIdx(0);
      }, 4200);
      return () => clearTimeout(restart);
    }
    const line = script[lineIdx];
    if (charIdx < line.text.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), line.prompt ? 55 : 14);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => {
        setLineIdx((i) => i + 1);
        setCharIdx(0);
      },
      line.prompt ? 380 : 220,
    );
    return () => clearTimeout(t);
  }, [lineIdx, charIdx]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lineIdx]);

  const rendered = script.slice(0, lineIdx);
  const current = script[lineIdx];

  return (
    <div className="scanline relative overflow-hidden rounded-xl border border-cyber/25 bg-panel/80 shadow-[0_24px_70px_-30px_var(--cyber)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-border/70 bg-background/60 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warn/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-neon/70" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground">
          aarav@kali: ~/engagements
        </span>
      </div>
      <div
        ref={scrollRef}
        className="h-[290px] overflow-hidden px-4 py-4 font-mono text-[12.5px] leading-relaxed sm:text-[13px]"
      >
        {rendered.map((l, i) => (
          <p key={i} className="whitespace-pre-wrap break-words">
            {l.prompt && <span className="text-neon">➜ </span>}
            <span className={l.prompt ? "text-foreground" : toneClass[l.tone ?? "muted"]}>
              {l.text}
            </span>
          </p>
        ))}
        {current && (
          <p className="whitespace-pre-wrap break-words">
            {current.prompt && <span className="text-neon">➜ </span>}
            <span className={current.prompt ? "text-foreground" : toneClass[current.tone ?? "muted"]}>
              {current.text.slice(0, charIdx)}
            </span>
            <span className="cursor-blink ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-cyber" />
          </p>
        )}
      </div>
    </div>
  );
}
