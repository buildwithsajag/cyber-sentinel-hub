import { useEffect, useState } from "react";
import { Menu, Terminal, X, Download } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "labs", label: "Labs & CTFs" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export function NavBar({
  terminalMode,
  onToggleTerminal,
}: {
  terminalMode: boolean;
  onToggleTerminal: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 lg:px-8">
        <a href="#hero" className="flex min-w-0 items-center gap-2.5 font-mono text-sm">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-cyber/50 text-cyber">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="truncate">
            <span className="text-foreground">Aarav Sharma</span>{" "}
            <span className="text-cyber">//</span>{" "}
            <span className="text-muted-foreground">Security Researcher</span>
          </span>
        </a>

        <div className="flex items-center gap-1.5">
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`rounded-md px-3 py-2 font-mono text-[13px] transition-colors hover:text-cyber ${
                    active === l.id ? "text-cyber" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={onToggleTerminal}
            aria-pressed={terminalMode}
            className={`hidden items-center gap-2 rounded-md border px-3 py-2 font-mono text-[12px] transition-all sm:flex ${
              terminalMode
                ? "border-neon/60 text-neon shadow-[0_0_18px_-6px_var(--neon)]"
                : "border-border text-muted-foreground hover:border-cyber/60 hover:text-cyber"
            }`}
          >
            <Terminal className="h-3.5 w-3.5" />
            terminal_view: {terminalMode ? "on" : "off"}
          </button>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-md bg-cyber px-3.5 py-2 font-mono text-[12px] font-medium text-primary-foreground transition-shadow hover:shadow-[0_0_22px_-4px_var(--cyber)] md:flex"
          >
            <Download className="h-3.5 w-3.5" /> résumé
          </a>

          <button
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 pb-4 backdrop-blur-md lg:hidden">
          <ul className="grid gap-1 py-2">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 font-mono text-sm text-muted-foreground hover:text-cyber"
                >
                  <span className="text-cyber">$</span> {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={onToggleTerminal}
            className="w-full rounded-md border border-border px-3 py-2 font-mono text-xs text-muted-foreground"
          >
            terminal_view: {terminalMode ? "on" : "off"}
          </button>
        </div>
      )}
    </header>
  );
}
