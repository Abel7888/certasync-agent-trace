import { Reveal } from "./primitives";
import { Card, Pill, SectionHead } from "./ui";

const ACTIVITY = [
  ["10:42 AM", "Created purchase order", "Procurement API", "Success"],
  ["10:38 AM", "Queried supplier database", "Postgres", "Success"],
  ["10:31 AM", "Attempted purchase above approval limit", "Procurement API", "Flagged"],
];

const EVIDENCE = [
  ["Trace ID", "tr_9f2c41a8e0"],
  ["Tool", "procurement.create_po"],
  ["Resource", "PO-2291"],
  ["Model", "gpt-class-4o"],
  ["Workload Identity", "svc-procurement-agent"],
  ["Policy", "autonomous_purchase_limit"],
  ["Correlation Method", "trace + identity join"],
  ["Fingerprint", "a41f…9c72"],
  ["Timestamp", "2026-08-27 10:42:07Z"],
];

export function FeatureHighlight() {
  return (
    <section className="py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <SectionHead
            eyebrow="Activity"
            title="See What an Agent Actually Did"
            copy="Business teams see the story. Technical and security teams can inspect the evidence underneath."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Card>
            <div className="flex items-center justify-between border-b border-hairline px-6 py-5">
              <div className="font-display text-[16px]">Procurement Agent — Today</div>
              <Pill tone="signal">Monitored</Pill>
            </div>

            <div className="grid grid-cols-2 border-b border-hairline sm:grid-cols-4">
              {[
                ["Actions", "47"],
                ["Successful", "43"],
                ["Failed", "4"],
                ["Systems", "4"],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-r border-hairline px-6 py-5 last:border-r-0">
                  <div className="font-display text-[24px]">{v}</div>
                  <div className="label-tech mt-1 text-[10px]">{k}</div>
                </div>
              ))}
            </div>

            <div className="px-6 py-5">
              <div className="label-tech text-[10px]">Activity</div>
              <div className="mt-4 space-y-0">
                {ACTIVITY.map(([time, action, system, status]) => (
                  <div
                    key={time}
                    className="grid gap-1 border-b border-hairline py-4 last:border-b-0 sm:grid-cols-[88px_minmax(0,1fr)_auto] sm:items-center sm:gap-4"
                  >
                    <span className="font-mono text-[11px] text-muted-foreground">{time}</span>
                    <div>
                      <div className="text-[14px]">{action}</div>
                      <div className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                        {system}
                      </div>
                    </div>
                    <Pill tone={status === "Flagged" ? "risk" : "ok"}>{status}</Pill>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className="border-b border-hairline px-6 py-5">
              <div className="font-display text-[16px]">Evidence</div>
            </div>
            {EVIDENCE.map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline justify-between gap-6 border-b border-hairline px-6 py-3 last:border-b-0"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {k}
                </span>
                <span className="font-mono text-[11.5px] text-foreground/90">{v}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
}
