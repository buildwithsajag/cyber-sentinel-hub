# Cyber Sentinel Hub

Create a modern, high-tech, and professional single-page portfolio website for a Cybersecurity Student. The overall aesthetic should be sleek and cyber-inspired, using a dark mode theme (deep slate/charcoal background `#0F172A`, slate blue secondary panels `#1E293B`, vibrant cyan accents `#06B6D4`, and neon green status highlights `#10B981`). Use a clean, readable sans-serif font paired with a monospaced font for technical details, code snippets, and terminal elements.

Structure page with the following sections and interactive components:

1. Navigation Bar (Sticky):

   - Logo/Name: "[Sajag] // Security Researcher" in a monospaced font.

   - Smooth-scroll nav links: About, Skills, Projects, Labs & CTFs, Certifications, Contact.

   - A toggle button for a "Terminal View Mode" or quick résumé download CTA button.

2. Hero Section:

   - Headline: "Securing Digital Systems & Analyzing Vulnerabilities"

   - Subheadline: "Cybersecurity Student specializing in Network Defense, Penetration Testing, and Security Automation."

   - An interactive animated terminal window displaying simulated bash output (e.g., `whoami`, `cat skills.txt`, `nmap -sV target`) with a blinking cursor.

   - CTA Buttons: "View Projects" (Primary Cyan) and "Get in Touch" (Secondary Outline).

3. About Me Section:

   - Concise bio summarizing academic background, passion for offensive/defensive security, and ethical hacking values.

   - Quick stats grid (e.g., CTF Writeups Published, TryHackMe Top %, Vulnerabilities Documented, Labs Completed).

4. Technical Skills Section:

   - Categorized card grid with hover effects:

     - Networking & Protocols (TCP/IP, DNS, Wireshark, Subnetting)

     - Tools & Frameworks (Nmap, Burp Suite, Metasploit, Linux/Bash)

     - Defensive Security (SIEM basics, Snort, Log Analysis, Hardening)

     - Programming & Scripting (Python, Bash, PowerShell)

5. Featured Projects Section:

   - Card layout for 3–4 core projects:

     - Project Title, Brief Summary, Key Technical Stack tags (e.g., Python, Docker, Snort).

     - Key Highlights (e.g., "Configured custom Snort rules to detect SQL Injection attacks").

     - Action Links: GitHub Repository link and Live Demo/Report link.

6. Interactive Labs & CTF Writeups Section:

   - Filterable tabs: "TryHackMe / HackTheBox", "Home Lab Builds", "CTF Challenges".

   - Include cards for specific rooms/labs completed with difficulty badges (Easy, Medium, Hard).

7. Certifications & Education Section:

   - Timeline layout showing current degree/studies, along with certifications earned or currently pursuing (e.g., CompTIA Security+, EJPT, Google Cybersecurity Certificate).

8. Contact Section:

   - Clean contact form (Name, Email, Subject, Message) styled with cyan focus borders.

   - Social links: GitHub, LinkedIn, TryHackMe/HackTheBox profiles, and PGP Key footprint.

9. Footer:

   - Minimalist footer with copyright, "Built with security in mind", and social links.

Design Requirements:

- Fully responsive across mobile, tablet, and desktop.

- Subtle micro-interactions, subtle glow effects on interactive elements, and terminal-style hover states.

- Clean code structure using React, Tailwind CSS, and Lucide React icons.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ad404cab-0ac0-4a36-bcbe-fda9461d3e34).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
