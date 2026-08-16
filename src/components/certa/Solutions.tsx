import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./primitives";

const ITEMS = [
  {
    q: "What's running?",
    a: "Discover and inventory AI agents.",
    ui: [
      ["Invoice Agent", "Production"],
      ["Support Agent", "Production"],
      ["Research Agent", "Unowned"],
    ],
  },
  {
    q: "Who owns it?",
    a: "Establish accountable business and technical ownership.",
    ui: [
      ["Business owner", "Finance"],
      ["Technical owner", "Platform Eng"],
      ["Escalation", "On-call AP"],
    ],
  },
  {
    q: "What can it do?",
    a: "Understand the authority and permissions surrounding an agent.",
    ui: [
      ["SAP", "write:invoice"],
      ["S3", "read:documents"],
      ["Limit", "$10,000"],
    ],
  },
  {
    q: "What did it do?",
    a: "Reconstruct activity into understandable timelines.",
    ui: [
      ["10:42:06", "Invoice evaluated"],
      ["10:42:09", "SAP accessed"],
      ["10:42:11", "$17,300 approved"],
    ],
  },
  {
    q: "Did it cross a boundary?",
    a: "Evaluate actions against defined policies and approval rules.",
    ui: [
      ["Policy", "Max $10,000"],
      ["Observed", "$17,300"],
      ["Result", "Violation"],
    ],
  },
  {
    q: "Can we prove it?",
    a: "Preserve evidence around important activity.",
    ui: [
      ["Action ID", "act_829fa21"],
      ["Captured", "10:42:11"],
      ["Integrity", "Verified ✓"],
    ],
  },
];

export function Solutions() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="solutions" className="relative py-32 lg:py-44">
      <div className="shell">
        <Reveal>
          <h2 className="display-lg max-w-2xl">Questions Certa helps answer.</h2>
        </Reveal>

        <div className="mt-20 grid border-l border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <div
              key={it.q}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="relative min-h-[260px] border-b border-r border-hairline p-8 transition-colors duration-500"
              style={{
                backgroundColor: active === i ? "var(--surface)" : "transparent",
              }}
            >
              <span className="font-mono text-[11px] text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-2xl tracking-tight">{it.q}</h3>
              <p className="mt-3 max-w-[24ch] text-[14px] text-muted-foreground">{it.a}</p>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.35 }}
                    className="mt-7 border border-hairline"
                  >
                    {it.ui.map(([k, v]) => (
                      <div
                        key={k}
                        className="flex items-center justify-between border-b border-hairline px-3 py-2 last:border-b-0"
                      >
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          {k}
                        </span>
                        <span className="font-mono text-[11px]">{v}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
