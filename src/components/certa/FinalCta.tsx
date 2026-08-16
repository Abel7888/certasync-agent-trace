import { CTA, Label, Reveal } from "./primitives";

export function FinalCta() {
  return (
    <section id="book" className="relative py-40 lg:py-56">
      <div className="shell">
        <Label>Certa Systems</Label>

        <Reveal>
          <h2 className="display-xl mt-16 max-w-4xl">
            Your agents are starting to act.
            <span className="mt-4 block text-muted-foreground">Know what happens next.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-14 max-w-lg text-[17px] leading-relaxed text-muted-foreground">
            If you're putting AI agents into real workflows, we'd like to show you what Certa is
            building.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-wrap items-center gap-4">
            <CTA href="mailto:hello@certa.systems?subject=Certa%20demo">Book a Demo</CTA>
            <CTA variant="ghost" href="#demo">
              Watch the Demo →
            </CTA>
          </div>
        </Reveal>

        <div className="label-tech mt-14">Early pilots available.</div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-hairline py-16">
      <div className="shell grid gap-12 md:grid-cols-[minmax(0,1fr)_auto_auto]">
        <div>
          <div className="font-display text-[15px] tracking-[0.3em]">CERTA</div>
          <div className="mt-3 text-[13px] text-muted-foreground">Accountability for AI agents.</div>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            ["Platform", "#platform"],
            ["Solutions", "#solutions"],
            ["Industries", "#industries"],
            ["About", "#about"],
            ["Contact", "#book"],
          ].map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="flex gap-8">
          {["Privacy", "Terms"].map((l) => (
            <span key={l} className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {l}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
