import { Reveal } from "./primitives";
import { Card, CardRow, DEMO_LINK, Pill } from "./ui";

const CAPABILITIES = [
  "Token usage by agent",
  "Model usage",
  "Estimated cost",
  "Monthly agent spend",
  "Department spend",
  "Agent budgets",
  "Budget thresholds",
  "Spend alerts",
];

export function Roadmap() {
  return (
    <section className="py-20 lg:py-24">
      <div className="shell">
        <Reveal>
          <div className="border border-dashed border-border bg-surface/40 p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
              <div>
                <Pill tone="signal">Pilot Roadmap</Pill>
                <h3 className="display-md mt-6">Agent Budgeting &amp; Spend Visibility</h3>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                  For teams that want accountability around AI spend, Certa can expand into
                  agent-level usage and budgeting during pilot development.
                </p>

                <div className="label-tech mt-8">Potential capabilities</div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {CAPABILITIES.map((c) => (
                    <div key={c} className="flex items-start gap-3 text-[13.5px] text-foreground/80">
                      <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-muted-foreground" />
                      {c}
                    </div>
                  ))}
                </div>

                <a
                  href={DEMO_LINK}
                  className="mt-9 inline-flex rounded-sm border border-border px-5 py-3 text-[13.5px] transition-colors hover:border-signal hover:text-signal"
                >
                  Interested in Agent Budgeting? Talk to Us
                </a>
              </div>

              <Card className="h-fit">
                <div className="border-b border-hairline px-5 py-4">
                  <div className="label-tech text-[10px]">Concept</div>
                  <div className="mt-1 font-display text-[15px]">Customer Support Agent</div>
                </div>
                <CardRow k="Monthly Spend" v="$1,842" />
                <CardRow k="Budget" v="$2,500" tone="muted" />
                <CardRow k="Usage" v="74%" />
                <CardRow k="Tokens" v="18.4M" tone="muted" />
                <CardRow k="Status" v="Within Budget" tone="ok" />
              </Card>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
