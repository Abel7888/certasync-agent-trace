import { Reveal } from "./primitives";
import { SectionHead } from "./ui";

const CARDS = [
  {
    title: "Observe",
    copy: "Know which agents exist and what they are doing.",
    items: [
      "Agent inventory",
      "Ownership",
      "Activity timeline",
      "Systems accessed",
      "Models and identities",
      "“What This Agent Did” summaries",
    ],
  },
  {
    title: "Govern",
    copy: "Understand whether agent behavior stayed within defined boundaries.",
    items: [
      "Deterministic policy checks",
      "Approval boundaries",
      "Unowned-agent findings",
      "Policy violations",
      "Risk visibility",
    ],
  },
  {
    title: "Prove",
    copy: "Build an evidence trail around important actions.",
    items: [
      "Trace evidence",
      "Ownership history",
      "Findings",
      "Resolution history",
      "Activity fingerprints",
      "Governance reports",
    ],
  },
];

export function CoreMessage() {
  return (
    <section id="platform" className="py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <SectionHead eyebrow="Platform" title="From Agent Activity to Accountability" />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="h-full border border-border bg-surface p-7">
                <div className="font-display text-[20px]">{c.title}</div>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">{c.copy}</p>
                <ul className="mt-6 space-y-2.5 border-t border-hairline pt-6">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[13.5px] text-foreground/85">
                      <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-signal" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
