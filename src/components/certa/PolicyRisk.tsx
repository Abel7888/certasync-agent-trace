import { Reveal } from "./primitives";
import { Card, CardRow, SectionHead } from "./ui";

export function PolicyRisk() {
  return (
    <section className="py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <SectionHead eyebrow="Policy & Risk" title="Know When an Agent Crosses a Boundary" />
        </Reveal>

        <Reveal delay={0.06}>
          <Card className="mt-12">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-hairline md:border-b-0 md:border-r">
                <CardRow k="Agent" v="Procurement Agent" />
                <CardRow k="Action" v="Created $42,000 Purchase Order" />
                <CardRow k="Policy" v="Autonomous purchases ≤ $25,000" tone="muted" />
              </div>
              <div>
                <CardRow k="Human Approval" v="Required" />
                <CardRow k="Approval Detected" v="No" tone="risk" />
                <CardRow k="Finding" v="Approval Boundary Exceeded" tone="risk" />
              </div>
            </div>
            <div
              className="border-t px-5 py-4 font-mono text-[11px] uppercase tracking-[0.18em]"
              style={{
                borderColor: "color-mix(in oklab, var(--risk) 35%, transparent)",
                color: "var(--risk)",
                backgroundColor: "color-mix(in oklab, var(--risk) 8%, transparent)",
              }}
            >
              Finding · Approval Boundary Exceeded
            </div>
          </Card>
        </Reveal>

        <p className="mt-6 max-w-2xl text-[13.5px] text-muted-foreground">
          Policy decisions are deterministic. Certa does not use another AI model to decide whether a
          rule passed or failed.
        </p>
      </div>
    </section>
  );
}
