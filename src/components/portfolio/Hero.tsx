import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { TerminalWindow } from "./TerminalWindow";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-cyber/15 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-3 py-1 font-mono text-[11px] text-neon">
            <ShieldCheck className="h-3.5 w-3.5" /> status: available for internships
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Securing Digital Systems &{" "}
            <span className="text-gradient-cyber">Analyzing Vulnerabilities</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Cybersecurity Student specializing in Network Defense, Penetration Testing, and
            Security Automation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-cyber px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-shadow hover:shadow-[0_0_28px_-4px_var(--cyber)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-cyber/50 px-5 py-3 font-mono text-sm text-cyber transition-colors hover:bg-cyber/10"
            >
              <Mail className="h-4 w-4" /> Get in Touch
            </a>
          </div>
        </div>
        <TerminalWindow />
      </div>
    </section>
  );
}
