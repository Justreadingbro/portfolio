import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Sparkles,
  Brain,
  Code2,
  Cpu,
  Database,
  Wrench,
  Users,
  GraduationCap,
  Trophy,
  Award,
  Briefcase,
  ExternalLink,
  Send,
} from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { Reveal } from "@/components/portfolio/Reveal";
import { SectionHeading } from "@/components/portfolio/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pritamjyoti Chutia — AI/ML Developer & CSE Student" },
      {
        name: "description",
        content:
          "Pritamjyoti Chutia — Computer Science student and aspiring AI/ML developer crafting intelligent, polished software solutions.",
      },
    ],
  }),
  component: PortfolioPage,
});

const skillGroups = [
  {
    icon: Brain,
    title: "Technical Skills",
    items: ["Python", "Machine Learning", "Deep Learning", "Computer Vision", "TypeScript", "React / Next.js", "Flask", "REST APIs"],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    items: ["TensorFlow", "MediaPipe", "OpenCV", "Gradio", "Ollama / Mistral", "Socket.IO", "Tailwind CSS", "Git & GitHub"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    items: ["Diligence", "Ownership", "Problem Solving", "Attention to Detail", "Continuous Learning", "Team Collaboration"],
  },
];

const projects = [
  {
    name: "Image Classifier App",
    blurb: "Real-time image classification platform with confidence scoring and an intuitive web interface.",
    tech: ["Python", "TensorFlow", "Gradio"],
    features: ["Pre-trained model inference", "Confidence-based predictions", "Lightweight web UI"],
    impact: "Delivers instant, reliable classifications with a frictionless user experience.",
    icon: Cpu,
  },
  {
    name: "Hand Tracking & Video Controller",
    blurb: "Touch-free Windows control system using computer vision and gesture recognition.",
    tech: ["Python", "MediaPipe", "OpenCV"],
    features: ["Gesture-based media control", "Volume & desktop switching", "App switching via hand cues"],
    impact: "Reimagines human–computer interaction through accessible, hands-free control.",
    icon: Sparkles,
  },
  {
    name: "MedAI",
    blurb: "AI-powered medical diagnostic platform focused on cardiovascular and general health analysis.",
    tech: ["TypeScript", "Next.js", "React"],
    features: ["Instant diagnostic insights", "Detailed health reports", "PDF export"],
    impact: "Bridges AI and healthcare with a polished, clinically-minded interface.",
    icon: Brain,
  },
  {
    name: "Smart Parking System",
    blurb: "Modular parking management platform engineered for IoT and automation expansion.",
    tech: ["Web", "Modular Architecture", "IoT-ready"],
    features: ["Parking dashboards", "User management", "Sensor & camera-ready foundation"],
    impact: "A scalable foundation for next-generation smart infrastructure.",
    icon: Database,
  },
  {
    name: "MFA Auth",
    blurb: "Security-focused multi-factor authentication interface designed for trust and clarity.",
    tech: ["Auth", "Security", "UI/UX"],
    features: ["Multi-factor flows", "Clean security UX", "Robust verification"],
    impact: "Reinforces application trust through a seamless authentication experience.",
    icon: Code2,
  },
  {
    name: "MediPrompt",
    blurb: "Flask-based AI diagnostic report generator powered by Mistral via Ollama with live streaming.",
    tech: ["Flask", "Mistral / Ollama", "Socket.IO"],
    features: ["Natural-language input", "Live streaming output", "Structured reports + PDF export"],
    impact: "Transforms unstructured medical text into precise, actionable reports.",
    icon: Sparkles,
  },
];

const achievements = [
  { title: "Smart India Hackathon", subtitle: "Grand Finale Participant", icon: Trophy },
  { title: "IBM India", subtitle: "Top 10 Recognition", icon: Award },
  { title: "Project Portfolio", subtitle: "6+ shipped AI/ML & full-stack projects", icon: Sparkles },
];

function PortfolioPage() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-hero">
        <div className="grain absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-32 pb-20">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              Available for opportunities & collaborations
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-8 font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
              <span className="text-gradient">Pritamjyoti</span>
              <br />
              <span className="text-gold-gradient italic">Chutia</span>
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-gold" /> Student · CSE
              </span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="inline-flex items-center gap-2">
                <Brain className="h-4 w-4 text-gold" /> AI/ML Enthusiast
              </span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" /> India
              </span>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A focused and ambitious Computer Science student building thoughtful AI, machine learning,
              and software products. I care about clarity, craft, and shipping work that feels considered
              from first pixel to final inference.
            </p>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold transition-smooth hover:scale-[1.02]"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-smooth hover:border-gold hover:text-gold"
              >
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="mt-20 grid grid-cols-3 gap-6 border-t border-border/50 pt-8 sm:max-w-xl">
              {[
                { k: "6+", v: "Projects" },
                { k: "Top 10", v: "IBM India" },
                { k: "SIH", v: "Grand Finale" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl text-foreground sm:text-3xl">{s.k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  eyebrow="About"
                  title={<>Building with <span className="text-gold-gradient italic">intent</span> and craft.</>}
                />
              </Reveal>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7">
              <Reveal delay={100}>
                <p>
                  I am a Computer Science and Engineering student at <span className="text-foreground">Assam Down Town University</span>,
                  channeling my curiosity into AI, machine learning, and software that solves real problems.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p>
                  My interests sit at the intersection of <span className="text-foreground">gaming</span>,
                  <span className="text-foreground"> tech research</span>, and <span className="text-foreground">IoT</span> —
                  domains where intelligent systems can create meaningful, tangible impact.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <p>
                  I describe myself as diligent, committed, and completion-oriented. I finish what I start,
                  and I treat quality as non-negotiable. My long-term ambition is to become a highly
                  professional AI/ML developer and to build intelligent systems that genuinely matter.
                </p>
              </Reveal>

              <Reveal delay={340}>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Diligent", desc: "Thorough by default." },
                    { label: "Committed", desc: "Owns the outcome." },
                    { label: "Polished", desc: "Quality over quantity." },
                  ].map((t) => (
                    <div
                      key={t.label}
                      className="rounded-2xl border border-border bg-card/40 p-5 shadow-card backdrop-blur transition-smooth hover:border-gold/50"
                    >
                      <div className="font-display text-lg text-foreground">{t.label}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{t.desc}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative bg-surface/40 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Skills"
              title={<>A toolkit for <span className="text-gold-gradient italic">intelligent</span> systems.</>}
              description="A curated stack spanning AI/ML foundations, modern web engineering, and the soft skills that move work forward."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {skillGroups.map((g, i) => {
              const Icon = g.icon;
              return (
                <Reveal key={g.title} delay={i * 100}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/60 p-7 shadow-card transition-smooth hover:-translate-y-1 hover:border-gold/50">
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition-smooth group-hover:bg-gold/10" />
                    <div className="relative">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold ring-1 ring-gold/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-display text-xl text-foreground">{g.title}</h3>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {g.items.map((s) => (
                          <li
                            key={s}
                            className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-muted-foreground"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Selected Work"
              title={<>Projects with <span className="text-gold-gradient italic">substance</span>.</>}
              description="A selection of work spanning applied AI, computer vision, healthtech, and developer-facing tools."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.name} delay={(i % 2) * 80}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/60 p-8 shadow-card transition-smooth hover:-translate-y-1 hover:border-gold/50">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/25 to-gold/5 text-gold ring-1 ring-gold/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>

                    <h3 className="mt-6 font-display text-2xl text-foreground">{p.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-gold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-gold" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6">
                      <div className="hairline pt-4 text-xs italic leading-relaxed text-muted-foreground">
                        {p.impact}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDUCATION + EXPERIENCE */}
      <section id="education" className="relative bg-surface/40 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Education"
                  title={<>Academic <span className="text-gold-gradient italic">foundation</span>.</>}
                />
              </Reveal>

              <Reveal delay={120}>
                <div className="relative mt-10 rounded-3xl border border-border bg-card/60 p-8 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-gold/25 to-gold/5 text-gold ring-1 ring-gold/20">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-xl text-foreground">B.Tech, Computer Science & Engineering</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Assam Down Town University</p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-gold">2022 — 2026</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Smart India Hackathon — Grand Finale Participant",
                      "IBM India — Top 10 Recognition",
                    ].map((a) => (
                      <div key={a} className="rounded-xl border border-border bg-background/40 p-4 text-sm text-muted-foreground">
                        <Trophy className="mb-2 h-4 w-4 text-gold" />
                        {a}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Experience"
                  title={<>Building toward <span className="text-gold-gradient italic">opportunity</span>.</>}
                />
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-10 rounded-3xl border border-border bg-card/60 p-8 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-gold/25 to-gold/5 text-gold ring-1 ring-gold/20">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-foreground">Independent Practice & Project Work</h3>
                      <p className="mt-1 text-xs uppercase tracking-wider text-gold">Ongoing</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    Currently focused on building a portfolio of AI/ML and full-stack projects, sharpening
                    advanced skills, and preparing for internships and professional roles in applied
                    intelligence and software engineering.
                  </p>

                  <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                    {[
                      "Shipping production-quality personal projects",
                      "Exploring deep learning, computer vision, and LLM tooling",
                      "Open to internships, collaborations, and research roles",
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-gold" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="mt-24">
            <Reveal>
              <SectionHeading
                eyebrow="Achievements"
                title={<>Recognition & <span className="text-gold-gradient italic">milestones</span>.</>}
              />
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {achievements.map((a, i) => {
                const Icon = a.icon;
                return (
                  <Reveal key={a.title} delay={i * 100}>
                    <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card/60 p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-gold/50">
                      <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-to-br from-gold/25 to-gold/5 text-gold ring-1 ring-gold/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-foreground">{a.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{a.subtitle}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              align="center"
              title={<>Let's build something <span className="text-gold-gradient italic">remarkable</span>.</>}
              description="Open to internships, collaborations, and conversations about AI, ML, and meaningful software."
            />
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-2" delay={80}>
              <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card/60 p-8 shadow-card">
                {[
                  { icon: Mail, label: "Email", value: "pritamjyotichutia@gmail.com", href: "mailto:pritamjyotichutia@gmail.com" },
                  { icon: Phone, label: "Phone", value: "+91 70029 29308", href: "tel:+917002929308" },
                  { icon: Linkedin, label: "LinkedIn", value: "pritamjyoti-chutia", href: "https://www.linkedin.com/in/pritamjyoti-chutia" },
                  { icon: Github, label: "GitHub", value: "Justreadingbro", href: "https://github.com/Justreadingbro" },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-2xl border border-transparent bg-background/40 p-4 transition-smooth hover:border-gold/40"
                    >
                      <div className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-to-br from-gold/25 to-gold/5 text-gold ring-1 ring-gold/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                        <div className="truncate text-sm text-foreground transition-colors group-hover:text-gold">{c.value}</div>
                      </div>
                      <ArrowRight className="ml-auto h-4 w-4 flex-none text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-gold" />
                    </a>
                  );
                })}
              </div>
            </Reveal>

            <Reveal className="lg:col-span-3" delay={160}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name") || "—"}`);
                  const body = encodeURIComponent(`${data.get("message") || ""}\n\n— ${data.get("name") || ""} (${data.get("email") || ""})`);
                  window.location.href = `mailto:pritamjyotichutia@gmail.com?subject=${subject}&body=${body}`;
                }}
                className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-card/60 p-8 shadow-card"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Name</span>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">Email</span>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project, role, or idea…"
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                </label>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 self-start rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold transition-smooth hover:scale-[1.02]"
                >
                  Send message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-soft text-primary-foreground font-display text-xs">P</span>
            Pritamjyoti Chutia
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Designed & built with intent.
          </p>
        </div>
      </footer>
    </div>
  );
}
