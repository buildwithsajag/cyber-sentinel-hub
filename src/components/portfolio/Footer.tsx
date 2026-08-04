import { Github, Linkedin, Target } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center lg:px-8">
        <div className="min-w-0">
          <p className="font-mono text-[12px] text-muted-foreground">
            © {new Date().getFullYear()} Aarav Sharma · <span className="text-neon">Built with security in mind</span>
          </p>
        </div>
        <ul className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Target, href: "https://tryhackme.com", label: "TryHackMe" },
          ].map(({ icon: Icon, href, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-cyber"
              >
                <Icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
