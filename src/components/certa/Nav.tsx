import { useEffect, useState } from "react";
import { DEMO_LINK } from "./ui";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Security", href: "#security" },
  { label: "Pilot Program", href: "#pilot" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled
          ? "color-mix(in oklab, var(--background) 88%, transparent)"
          : "transparent",
        borderBottom: `1px solid ${scrolled ? "var(--hairline)" : "transparent"}`,
        backdropFilter: scrolled ? "blur(14px)" : undefined,
      }}
    >
      <nav className="shell flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-[2px] bg-signal" />
          <span className="font-display text-[15px] tracking-tight text-foreground">
            Certa Systems
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13.5px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={DEMO_LINK}
          className="rounded-sm bg-signal px-4 py-2 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
        >
          Book a Demo
        </a>
      </nav>
    </header>
  );
}
