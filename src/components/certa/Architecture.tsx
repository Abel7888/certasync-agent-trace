import { motion } from "motion/react";
import { Label, Reveal } from "./primitives";

const CHAIN = [
  { title: "YOUR AGENTS", sub: "" },
  { title: "SDK · COLLECTOR · TELEMETRY · WEBHOOK", sub: "" },
  { title: "CERTA CORRELATION", sub: "Signals become context." },
  { title: "AGENT ACTION", sub: "What actually happened." },
  { title: "POLICY", sub: "Was it within bounds?" },
  { title: "EVIDENCE", sub: "Can it be proven?" },
];

const PRINCIPLES = [
  ["Read-only", "Observe without controlling execution."],
  ["Out-of-band", "Agent workflows continue operating normally."],
  ["Evidence-first", "Preserve context around important actions."],
];

export function Architecture() {
  return (
    <section className="relative border-y border-hairline py-32 lg:py-44">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="shell relative">
        <Label>How Certa works</Label>
        <Reveal>
          <h2 className="display-lg mt-10 max-w-3xl">Observe without getting in the way.</h2>
        </Reveal>

        <div className="mx-auto mt-24 max-w-3xl">
          {CHAIN.map((c, i) => (
            <div key={c.title}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="border px-6 py-7 text-center"
                style={{
                  borderColor: i >= 2 ? "color-mix(in oklab, var(--signal) 30%, transparent)" : "var(--border)",
                  backgroundColor:
                    i >= 2 ? "color-mix(in oklab, var(--signal) 4%, var(--surface))" : "var(--surface)",
                }}
              >
                <div className="font-display text-[15px] tracking-[0.2em] sm:text-lg">{c.title}</div>
                {c.sub && <div className="mt-2 text-[13px] text-muted-foreground">{c.sub}</div>}
              </motion.div>

              {i < CHAIN.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.4, delay: i * 0.2 + 0.15 }}
                  className="mx-auto h-10 w-px origin-top bg-signal/50"
                />
              )}
            </div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-20 max-w-xl text-center text-[16px] leading-relaxed text-muted-foreground">
            Certa is designed to observe agent activity without becoming the execution path your
            agents depend on.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px border border-hairline bg-[var(--hairline)] md:grid-cols-3">
          {PRINCIPLES.map(([k, v]) => (
            <div key={k} className="bg-background px-7 py-10">
              <div className="label-tech">{k}</div>
              <div className="mt-4 text-[15px] leading-relaxed">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
