import { motion } from "motion/react";
import { Label, Reveal } from "./primitives";

const STEPS = [
  ["10:42:01", "Invoice received"],
  ["10:42:03", "Vendor retrieved"],
  ["10:42:06", "Invoice evaluated"],
  ["10:42:09", "SAP accessed"],
  ["10:42:11", "$17,300 approved"],
];

const CONTEXT = [
  ["Agent", "Invoice Agent"],
  ["Owner", "Finance"],
  ["Environment", "Production"],
  ["Policy", "Maximum $10,000"],
  ["Human approval", "Not detected"],
];

export function OneAction() {
  return (
    <section className="relative border-y border-hairline bg-[oklch(0.13_0.005_260)] py-32 lg:py-48">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
      <div className="shell relative">
        <Label>Follow the action</Label>

        <Reveal>
          <h2 className="display-xl mt-12 max-w-4xl">$17,300 was approved.</h2>
        </Reveal>

        <div className="mt-28 grid gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="relative">
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-hairline" />
            {STEPS.map(([t, label], i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.35 }}
                className="relative flex items-baseline gap-8 pb-14 pl-8"
              >
                <span className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border border-signal bg-background" />
                <span className="font-mono text-[12px] text-muted-foreground">{t}</span>
                <span className="font-display text-xl tracking-tight sm:text-2xl">{label}</span>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="border border-border bg-surface"
            >
              <div className="border-b border-hairline px-5 py-3">
                <span className="label-tech text-[10px]">Certa context</span>
              </div>
              {CONTEXT.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between border-b border-hairline px-5 py-4 last:border-b-0"
                >
                  <span className="label-tech text-[9px]">{k}</span>
                  <span
                    className="font-mono text-[12px]"
                    style={{ color: v === "Not detected" ? "var(--risk)" : undefined }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-4 border px-5 py-6"
              style={{
                borderColor: "var(--risk)",
                backgroundColor: "color-mix(in oklab, var(--risk) 8%, transparent)",
              }}
            >
              <div className="font-mono text-[13px] tracking-[0.22em]" style={{ color: "var(--risk)" }}>
                HIGH RISK
              </div>
              <div className="mt-2 text-[14px] text-muted-foreground">
                Approval authority exceeded.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.8, delay: 1.9 }}
              className="mt-4 flex items-center justify-between border border-hairline px-5 py-4"
            >
              <span className="label-tech text-[9px]">Evidence captured</span>
              <span className="font-mono text-[12px] text-signal">VERIFIED ✓</span>
            </motion.div>
          </div>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-32 max-w-3xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
            That's the difference between seeing activity and understanding accountability.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
