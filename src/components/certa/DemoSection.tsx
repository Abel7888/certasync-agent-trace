import { Label, Reveal } from "./primitives";

export function DemoSection() {
  return (
    <section id="demo" className="relative py-32 lg:py-44">
      <div className="shell">
        <Label>Product Demo</Label>
        <Reveal>
          <h2 className="display-lg mt-10 max-w-3xl">Don't take our word for it.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            Watch Certa follow real agent activity from action to finding to evidence.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-16">
        <div className="mx-auto w-full max-w-[1440px] px-4">
          <div className="relative border border-border bg-surface">
            <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
              <span className="label-tech text-[10px]">Certa · Agent activity walkthrough</span>
              <span className="signal-dot" />
            </div>
            <div className="relative aspect-video w-full bg-[oklch(0.13_0.005_260)]">
              <video
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/demo-poster.svg"
              >
                <source src="/certa-demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="shell mt-14 flex flex-wrap items-baseline gap-6">
        <span className="font-display text-xl tracking-tight">
          Want to see it with your own workflow?
        </span>
        <a
          href="#book"
          className="border-b border-signal pb-1 text-[15px] text-signal transition-opacity hover:opacity-70"
        >
          Book a Live Demo →
        </a>
      </div>
    </section>
  );
}
