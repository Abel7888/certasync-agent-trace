import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CTA, Label } from "./primitives";

type Signal = { id: string; key: string; value: string; x: number; y: number };

const SIGNALS: Signal[] = [
  { id: "owner", key: "OWNER", value: "Finance", x: 10, y: 14 },
  { id: "env", key: "ENV", value: "Production", x: 78, y: 10 },
  { id: "model", key: "MODEL", value: "gpt-class", x: 2, y: 48 },
  { id: "tool", key: "TOOL", value: "SAP", x: 84, y: 42 },
  { id: "action", key: "ACTION", value: "Approve", x: 8, y: 80 },
  { id: "amount", key: "AMOUNT", value: "$17,300", x: 74, y: 78 },
  { id: "policy", key: "POLICY", value: "≤ $10,000", x: 42, y: 92 },
];

const CENTER = { x: 46, y: 46 };
const TOTAL_STEPS = 16;

export function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setStep((s) => (s >= TOTAL_STEPS ? 0 : s + 1));
    }, 900);
    return () => window.clearInterval(t);
  }, []);

  const signalsVisible = Math.max(0, Math.min(SIGNALS.length, step - 1));
  const linesVisible = step >= 9;
  const centerVisible = step >= 10;
  const detailVisible = step >= 11;
  const violation = step >= 13;
  const evidence = step >= 15;

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--signal) 8%, transparent), transparent 70%)",
        }}
      />

      <div className="shell relative">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10">
          <div className="max-w-xl pt-6">
            <Label>AI Agent Accountability</Label>

            <h1 className="display-xl mt-10">
              AI agents can act.
              <span className="mt-4 block text-muted-foreground">
                Can you account for what they do?
              </span>
            </h1>

            <p className="mt-10 max-w-md text-[17px] leading-relaxed text-muted-foreground">
              Certa creates a clear record around autonomous AI activity — connecting agents to
              ownership, authority, policy, actions and evidence.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <CTA>Book a Demo</CTA>
              <CTA variant="ghost" href="#demo">
                Watch Certa in Action →
              </CTA>
            </div>

            <div className="label-tech mt-16">Read-only · Out-of-band · Auditable</div>
          </div>

          <div className="relative">
            <SignalCanvas
              signalsVisible={signalsVisible}
              linesVisible={linesVisible}
              centerVisible={centerVisible}
              detailVisible={detailVisible}
              violation={violation}
              evidence={evidence}
              agentVisible={step >= 1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalCanvas({
  signalsVisible,
  linesVisible,
  centerVisible,
  detailVisible,
  violation,
  evidence,
  agentVisible,
}: {
  signalsVisible: number;
  linesVisible: boolean;
  centerVisible: boolean;
  detailVisible: boolean;
  violation: boolean;
  evidence: boolean;
  agentVisible: boolean;
}) {
  return (
    <div className="relative h-[560px] w-full border border-hairline sm:h-[620px]">
      <div className="absolute inset-0 grid-lines opacity-60" />

      <div className="label-tech absolute left-4 top-4">Live correlation</div>
      <div className="absolute right-4 top-4 flex items-center gap-2">
        <span className="signal-dot" />
        <span className="label-tech">Streaming</span>
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {SIGNALS.map((s, i) => (
          <motion.line
            key={s.id}
            x1={s.x + 6}
            y1={s.y + 3}
            x2={CENTER.x + 4}
            y2={CENTER.y + 4}
            stroke={violation ? "var(--risk)" : "var(--signal)"}
            strokeWidth={0.12}
            strokeDasharray="1.2 1.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              linesVisible && i < signalsVisible
                ? { pathLength: 1, opacity: 0.55 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 0.7, delay: i * 0.06 }}
          />
        ))}
      </svg>

      {SIGNALS.map((s, i) => (
        <AnimatePresence key={s.id}>
          {i < signalsVisible && (
            <motion.div
              className="absolute"
              style={{ left: `${s.x}%`, top: `${s.y}%` }}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="border border-border bg-surface/80 px-3 py-2 backdrop-blur-sm">
                <div className="label-tech text-[9px]">{s.key}</div>
                <div className="mt-1 font-mono text-[12px] text-foreground">{s.value}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      <div
        className="absolute -translate-x-1/2"
        style={{ left: `${CENTER.x + 4}%`, top: `${CENTER.y - 6}%` }}
      >
        <AnimatePresence mode="wait">
          {agentVisible && !centerVisible && (
            <motion.div
              key="agent"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="whitespace-nowrap border border-border bg-surface px-4 py-3 text-center"
            >
              <div className="label-tech text-[9px]">Agent</div>
              <div className="mt-1 font-display text-[15px]">Invoice Agent</div>
            </motion.div>
          )}

          {centerVisible && (
            <motion.div
              key="action"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-[240px]"
            >
              <div
                className="border px-4 py-3 text-center transition-colors duration-700"
                style={{
                  borderColor: violation ? "var(--risk)" : "var(--signal)",
                  backgroundColor: violation
                    ? "color-mix(in oklab, var(--risk) 10%, var(--surface))"
                    : "color-mix(in oklab, var(--signal) 8%, var(--surface))",
                }}
              >
                <div className="label-tech text-[9px]">AgentAction</div>
                <div className="mt-1 font-display text-[15px] tracking-wide">AGENT ACTION</div>
              </div>

              <AnimatePresence>
                {detailVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-2 border border-border bg-surface/90 backdrop-blur"
                  >
                    <Row k="Invoice Agent" v="Approved invoice" />
                    <Row k="Amount" v="$17,300" strong />
                    <Row k="Policy boundary" v="$10,000" />
                    <Row k="Human approval" v="Not detected" risk={violation} />
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {violation && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-2 border px-3 py-2 text-center font-mono text-[11px] tracking-[0.18em]"
                    style={{ borderColor: "var(--risk)", color: "var(--risk)" }}
                  >
                    POLICY VIOLATION
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {evidence && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-2 flex items-center justify-between border border-border px-3 py-2"
                  >
                    <span className="label-tech text-[9px]">Evidence fingerprint</span>
                    <span className="font-mono text-[11px] text-signal">VERIFIED ✓</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Row({ k, v, strong, risk }: { k: string; v: string; strong?: boolean; risk?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-hairline px-3 py-2 last:border-b-0">
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{k}</span>
      <span
        className="font-mono text-[11px]"
        style={{
          color: risk ? "var(--risk)" : strong ? "var(--foreground)" : "var(--muted-foreground)",
        }}
      >
        {v}
      </span>
    </div>
  );
}
