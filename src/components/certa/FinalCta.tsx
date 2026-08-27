import { DEMO_LINK } from "./ui";

export function FinalCta() {
  return (
    <section className="py-28 lg:py-36">
      <div className="shell">
        <h2 className="display-lg max-w-3xl">
          As Agents Gain Authority, Accountability Has to Keep Up.
        </h2>
        <div className="mt-10">
          <a
            href={DEMO_LINK}
            className="inline-flex rounded-sm bg-signal px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-hairline py-12">
      <div className="shell flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-[2px] bg-signal" />
          <span className="font-display text-[14px]">Certa Systems</span>
          <span className="text-[13px] text-muted-foreground">
            · Know the agent. Know the owner.
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {[
            ["Platform", "#platform"],
            ["Solutions", "#solutions"],
            ["Security", "#security"],
            ["Pilot Program", "#pilot"],
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
      </div>
    </footer>
  );
}
