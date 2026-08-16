import { motion } from "motion/react";
import { Reveal } from "./primitives";

const LAYERS = [
  { k: "IDENTITY", q: "What is it?" },
  { k: "OWNERSHIP", q: "Who is responsible?" },
  { k: "AUTHORITY", q: "What can it do?" },
  { k: "POLICY", q: "What are its boundaries?" },
  { k: "ACTIVITY", q: "What did it actually do?" },
  { k: "EVIDENCE", q: "Can we prove it?" },
];

export function Model() {
  return (
    <section className="relative py-32 lg:py-44">
      <div className="shell">
        <Reveal>
          <h2 className="display-lg max-w-2xl">Every agent needs context.</h2>
        </Reveal>

        <div className="relative mx-auto mt-24 max-w-2xl">
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-hairline" />
          <motion.div
            className="absolute left-[11px] top-0 w-px origin-top bg-signal"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            style={{ bottom: 0 }}
          />

          {LAYERS.map((l, i) => (
            <motion.div
              key={l.k}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-start gap-8 pb-16 pl-10"
            >
              <span className="absolute left-0 top-2 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-border bg-background">
                <span className="h-[5px] w-[5px] rounded-full bg-signal" />
              </span>
              <div className="min-w-0">
                <div className="font-display text-2xl tracking-[0.08em] sm:text-3xl">{l.k}</div>
                <div className="mt-2 text-[15px] text-muted-foreground">{l.q}</div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="ml-10 border border-signal/40 px-8 py-10"
            style={{ backgroundColor: "color-mix(in oklab, var(--signal) 6%, transparent)" }}
          >
            <div className="font-display text-3xl tracking-[0.35em] sm:text-4xl">CERTA</div>
            <div className="label-tech mt-4">From identity to evidence.</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
