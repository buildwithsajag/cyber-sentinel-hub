import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { NavBar } from "@/components/portfolio/NavBar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Labs } from "@/components/portfolio/Labs";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Aarav Sharma // Cybersecurity Student & Security Researcher";
const description =
  "Portfolio of a cybersecurity student focused on network defense, penetration testing, and security automation — projects, labs, CTF writeups, and certifications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [terminalMode, setTerminalMode] = useState(false);

  return (
    <div className={terminalMode ? "font-mono [&_h1]:font-mono [&_h2]:font-mono [&_h3]:font-mono" : ""}>
      <NavBar terminalMode={terminalMode} onToggleTerminal={() => setTerminalMode((v) => !v)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Labs />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
