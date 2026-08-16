import { motion } from "motion/react";
import { Reveal } from "./primitives";

const LINES = [
  "An agent needs an identity.",
  "Someone needs to own it.",
  "It needs credentials.",
  "It receives permissions.",
  "It operates within policies.",
  "Some actions need approval.",
  "Authority may need to expire.",
  "And everything important needs a history.",
];

export function Manifesto() {
  return (
    <section id="about" className="relative py-40 lg:py-56">
      <div className="shell">
        <Reveal>
          <h2 className="display-xl max-w-3xl">Intelligence isn't enough.</h2>
        </Reveal>

        <div className="mt-32 max-w-3xl space-y-8">
          {LINES.map((l, i) => (
            <motion.p
              key={l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-25% 0px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              className="font-display text-2xl tracking-tight text-muted-foreground sm:text-4xl"
            >
              {l}
            </motion.p>
          ))}
        </div>

        <div className="h-48" />

        <Reveal>
          <p className="display-lg max-w-3xl">
            We're giving software the ability to act.
            <span className="mt-6 block">We also need a way to hold it accountable.</span>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-24 grid gap-10 lg:grid-cols-2">
            <p className="text-[16px] leading-relaxed text-muted-foreground">
              As agents move deeper into real workflows, identity, security, governance and
              observability begin to meet around the same question:
            </p>
            <p className="font-display text-xl leading-snug tracking-tight sm:text-2xl">
              What did this system do — and was it supposed to?
            </p>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-40 border-t border-hairline pt-16 text-center"
        >
          <div className="font-display text-5xl sm:text-7xl">CERTA</div>
          <div className="label-tech mt-6 justify-center">Accountability for AI agents.</div>
        </motion.div>
      </div>
    </section>
  );
}
