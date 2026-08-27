import { Card, CardRow, DEMO_LINK, Pill } from "./ui";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 0%, color-mix(in oklab, var(--signal) 10%, transparent), transparent 72%)",
        }}
      />

      <div className="shell relative grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
        <div className="max-w-xl">
          <div className="label-tech">AI Agent Accountability</div>

          <h1 className="display-xl mt-7">Know What Your AI Agents Are Doing.</h1>

          <p className="mt-7 text-[17px] leading-relaxed text-muted-foreground">
            Certa gives teams visibility into which AI agents are running, who owns them, what they
            actually do, whether their actions stay within policy, and the evidence behind important
            decisions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={DEMO_LINK}
              className="rounded-sm bg-signal px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Book a Pilot Demo
            </a>
            <a
              href="#platform"
              className="rounded-sm border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-signal hover:text-signal"
            >
              See the Platform
            </a>
          </div>

          <p className="mt-6 text-[13.5px] text-muted-foreground">
            Start with one agent. No large rollout required.
          </p>
        </div>

        <Card className="relative shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
          <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
            <div>
              <div className="label-tech text-[10px]">Agent</div>
              <div className="mt-1 font-display text-[16px]">Procurement Agent</div>
            </div>
            <Pill tone="signal">Monitored</Pill>
          </div>

          <div className="grid grid-cols-3 border-b border-hairline">
            {[
              ["Today", "47 actions"],
              ["Systems", "4"],
              ["Findings", "1"],
            ].map(([k, v]) => (
              <div key={k} className="border-r border-hairline px-5 py-4 last:border-r-0">
                <div className="label-tech text-[10px]">{k}</div>
                <div className="mt-1.5 font-display text-[18px]">{v}</div>
              </div>
            ))}
          </div>

          <CardRow k="Owner" v="Procurement" />

          <div className="border-b border-hairline px-5 py-4">
            <div className="label-tech text-[10px]">Latest activity</div>
            <div className="mt-2 text-[14px]">Created Purchase Order — $42,000</div>
          </div>

          <CardRow k="Policy" v="Autonomous purchase limit $25,000" tone="muted" />
          <CardRow k="Approval" v="Not detected" tone="muted" />
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Status
            </span>
            <Pill tone="risk">Flagged</Pill>
          </div>
        </Card>
      </div>
    </section>
  );
}
