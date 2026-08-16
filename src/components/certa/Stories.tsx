import { motion } from "motion/react";
import { Label, Reveal } from "./primitives";

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
        <span className="label-tech text-[10px]">{title}</span>
        <span className="signal-dot" />
      </div>
      {children}
    </div>
  );
}

function Story({
  index,
  kicker,
  title,
  body,
  children,
  flip,
}: {
  index: string;
  kicker: string;
  title: string;
  body: React.ReactNode;
  children: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <div className="grid items-center gap-14 py-24 lg:grid-cols-2 lg:gap-24 lg:py-32">
      <Reveal className={flip ? "lg:order-2" : ""}>
        <div className="max-w-md">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[11px] text-signal">{index}</span>
            <span className="label-tech">{kicker}</span>
          </div>
          <h3 className="display-md mt-8">{title}</h3>
          <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-muted-foreground">
            {body}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.12} className={flip ? "lg:order-1" : ""}>
        {children}
      </Reveal>
    </div>
  );
}

export function Stories() {
  return (
    <section id="how-it-works" className="relative">
      <div className="shell divide-y divide-[var(--hairline)]">
        <Story
          index="01"
          kicker="Discover"
          title="Know what's running."
          body={
            <>
              <p>
                See agents operating across your environment and build an inventory around them.
              </p>
              <p>
                If Certa sees activity from an agent without an owner, it doesn't hide it. It
                surfaces it.
              </p>
            </>
          }
        >
          <Frame title="Inventory">
            <div className="grid grid-cols-3 gap-px bg-[var(--hairline)]">
              {[
                ["Agent", "Invoice Agent"],
                ["Environment", "Production"],
                ["Owner", "Finance"],
                ["Purpose", "AP automation"],
                ["Model", "gpt-class"],
                ["Lifecycle", "Active"],
              ].map(([k, v]) => (
                <div key={k} className="bg-surface px-4 py-5">
                  <div className="label-tech text-[9px]">{k}</div>
                  <div className="mt-2 font-mono text-[12px]">{v}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-hairline px-4 py-4">
              <span className="font-mono text-[12px]">Research Agent</span>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em]"
                style={{ color: "oklch(0.8 0.11 90)", borderColor: "oklch(0.8 0.11 90)" }}
              >
                Owner Unassigned
              </motion.span>
            </div>
          </Frame>
        </Story>

        <Story
          index="02"
          kicker="Follow"
          title="See what actually happened."
          flip
          body={
            <>
              <p>Raw telemetry tells you events occurred. Certa builds context around them.</p>
              <p className="font-mono text-[12px] text-foreground">
                identity · trace · model · tool · resource · result → AgentAction
              </p>
            </>
          }
        >
          <div className="space-y-4">
            <div className="border border-hairline bg-surface px-5 py-6">
              <div className="label-tech text-[9px]">Raw telemetry</div>
              <div className="mt-3 font-mono text-[15px] text-muted-foreground">POST /tool 200</div>
            </div>
            <div className="flex justify-center">
              <span className="font-mono text-[14px] text-signal">↓</span>
            </div>
            <div
              className="border px-5 py-6"
              style={{
                borderColor: "color-mix(in oklab, var(--signal) 40%, transparent)",
                backgroundColor: "color-mix(in oklab, var(--signal) 6%, var(--surface))",
              }}
            >
              <div className="label-tech text-[9px]">AgentAction</div>
              <div className="mt-3 font-display text-lg leading-snug tracking-tight sm:text-xl">
                Invoice Agent used SAP to approve a $17,300 invoice.
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {["identity", "trace", "model", "tool", "resource", "result"].map((t) => (
                  <span
                    key={t}
                    className="border border-hairline px-2 py-1 font-mono text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Story>

        <Story
          index="03"
          kicker="Govern"
          title="Know when an agent crosses a boundary."
          body={
            <>
              <p>
                Certa evaluates defined rules against actual agent activity so important actions can
                be understood in context.
              </p>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em]">
                Deterministic policy evaluation. Explainable results.
              </p>
            </>
          }
        >
          <Frame title="Invoice Approval Policy">
            {[
              ["Agent", "Invoice Agent"],
              ["Maximum autonomous approval", "$10,000"],
              ["Human approval above limit", "Required"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between border-b border-hairline px-5 py-4"
              >
                <span className="label-tech text-[9px]">{k}</span>
                <span className="font-mono text-[12px]">{v}</span>
              </div>
            ))}
            <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
              <span className="label-tech text-[9px]">Actual activity</span>
              <span className="font-mono text-[13px]" style={{ color: "var(--risk)" }}>
                $17,300
              </span>
            </div>
            <div
              className="px-5 py-6"
              style={{ backgroundColor: "color-mix(in oklab, var(--risk) 10%, transparent)" }}
            >
              <div
                className="font-mono text-[13px] tracking-[0.2em]"
                style={{ color: "var(--risk)" }}
              >
                VIOLATION
              </div>
              <div className="mt-2 text-[13px] text-muted-foreground">
                Required human approval not detected.
              </div>
            </div>
          </Frame>
        </Story>

        <Story
          index="04"
          kicker="Prove"
          title="Keep the evidence."
          flip
          body={
            <>
              <p>Important actions shouldn't disappear into logs.</p>
              <p>
                Certa maintains an evidence trail connecting activity, context and policy results.
              </p>
            </>
          }
        >
          <Frame title="Evidence record">
            {[
              ["Action ID", "act_829fa21"],
              ["Agent", "Invoice Agent"],
              ["Timestamp", "10:42:11"],
              ["Policy Result", "Failed"],
              ["Human Approval", "Not detected"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between border-b border-hairline px-5 py-4"
              >
                <span className="label-tech text-[9px]">{k}</span>
                <span
                  className="font-mono text-[12px]"
                  style={{ color: v === "Failed" ? "var(--risk)" : undefined }}
                >
                  {v}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between px-5 py-5">
              <span className="label-tech text-[9px]">Integrity</span>
              <span className="font-mono text-[12px] text-signal">✓ Verified</span>
            </div>
          </Frame>
        </Story>
      </div>
    </section>
  );
}
