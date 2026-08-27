import { Reveal } from "./primitives";
import { SectionHead } from "./ui";

const OBS = ["Logs", "Traces", "Errors", "Latency", "Tool calls"];
const CERTA = [
  "Agent",
  "Owner",
  "Business action",
  "System accessed",
  "Policy",
  "Approval",
  "Outcome",
  "Evidence",
];

export function WhyCerta() {
  return (
    <section className="py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <SectionHead
            eyebrow="Why Certa"
            title="Logs Tell You an Event Happened. Certa Tells You What It Meant."
            copy="Certa complements existing observability tools by adding the accountability context around agent behavior."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="border border-border p-7">
            <div className="label-tech">Observability</div>
            <ul className="mt-6 space-y-3">
              {OBS.map((o) => (
                <li key={o} className="border-b border-hairline pb-3 text-[14px] text-muted-foreground last:border-b-0">
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-signal/35 bg-surface p-7">
            <div className="label-tech text-signal">Certa</div>
            <ul className="mt-6 space-y-3">
              {CERTA.map((c) => (
                <li key={c} className="border-b border-hairline pb-3 text-[14px] last:border-b-0">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
