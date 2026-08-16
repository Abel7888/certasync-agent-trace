import { motion } from "motion/react";
import { Label, Reveal, staggerChild, staggerParent } from "./primitives";

const QUESTIONS = [
  "Which agents are running?",
  "Who is responsible for them?",
  "What have they been given access to?",
  "What are they actually doing?",
  "When should a human approve an action?",
  "What happens when something goes wrong?",
];

export function Shift() {
  return (
    <section id="platform" className="relative py-32 lg:py-48">
      <div className="shell">
        <Label>The Shift</Label>

        <div className="mt-16 max-w-4xl">
          <Reveal>
            <h2 className="display-lg text-muted-foreground">Software used to wait for a click.</h2>
          </Reveal>
          <Reveal delay={0.25}>
            <h2 className="display-xl mt-16">Agents can act on their own.</h2>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
          <Reveal>
            <p className="max-w-sm text-[17px] leading-relaxed text-muted-foreground">
              Agents are beginning to use tools, call APIs, retrieve data, interact with business
              systems and execute workflows.
              <span className="mt-6 block text-foreground">
                That creates a different set of questions.
              </span>
            </p>
          </Reveal>

          <motion.ul
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15% 0px" }}
            className="border-t border-hairline"
          >
            {QUESTIONS.map((q, i) => (
              <motion.li
                key={q}
                variants={staggerChild}
                className="group flex items-baseline gap-6 border-b border-hairline py-6"
              >
                <span className="font-mono text-[11px] text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl tracking-tight transition-colors duration-300 sm:text-2xl">
                  {q}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-24 font-display text-2xl tracking-tight sm:text-3xl">
            Certa is built around those questions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
