import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/50" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-soft text-primary-foreground font-display text-sm shadow-gold">
            P
          </span>
          <span className="font-display text-base tracking-tight text-foreground">Pritamjyoti<span className="text-gold">.</span></span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-border px-4 py-2 text-sm text-foreground transition-smooth hover:border-gold hover:text-gold md:inline-block"
        >
          Get in touch
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-foreground ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
