import { Label, Reveal } from "./primitives";

const INDUSTRIES = [
  {
    name: "Financial Services",
    flow: ["Agent", "Payment", "Approval", "Evidence"],
    items: ["Payments", "Underwriting", "Research", "Fraud operations", "Compliance", "Financial workflows"],
    question: "Did the agent operate within its delegated authority?",
  },
  {
    name: "Healthcare",
    flow: ["Agent", "Workflow", "System", "Evidence"],
    items: ["Scheduling", "Administrative workflows", "Revenue cycle", "Operational agents", "Internal systems"],
    question: "What did the agent access, what did it do and who was responsible?",
  },
  {
    name: "Manufacturing",
    flow: ["Agent", "Decision", "Production", "Evidence"],
    items: ["Procurement", "Maintenance", "Quality", "Production planning", "Operations"],
    question: "Which autonomous system initiated the action and was it expected?",
  },
  {
    name: "Supply Chain",
    flow: ["Agent", "Supplier", "Purchase", "Approval"],
    items: ["Procurement", "Inventory", "Transportation", "Warehousing", "Supplier operations"],
    question: "Did the agent remain within its purchasing authority?",
  },
  {
    name: "Technology",
    flow: ["Agent", "Tool", "API", "Action"],
    items: ["Customer agents", "IT automation", "Developer agents", "Internal workflows", "Support agents"],
    question: "What tools and systems are production agents actually using?",
  },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-32 lg:py-44">
      <div className="shell">
        <Label>Where actions matter</Label>
        <Reveal>
          <h2 className="display-lg mt-10 max-w-3xl">Built for agents entering real workflows.</h2>
        </Reveal>

        <div className="mt-20 border-t border-hairline">
          {INDUSTRIES.map((ind) => (
            <Reveal key={ind.name}>
              <div className="group grid gap-10 border-b border-hairline py-14 lg:grid-cols-[240px_minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-14">
                <h3 className="font-display text-xl tracking-[0.12em] uppercase">{ind.name}</h3>

                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    {ind.flow.map((f, i) => (
                      <span key={f} className="flex items-center gap-3">
                        <span
                          className="border border-hairline px-3 py-1.5 font-mono text-[11px] transition-colors duration-500 group-hover:border-signal/50"
                          style={{ color: i === ind.flow.length - 1 ? "var(--signal)" : undefined }}
                        >
                          {f}
                        </span>
                        {i < ind.flow.length - 1 && (
                          <span className="font-mono text-[11px] text-muted-foreground">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {ind.items.map((it) => (
                      <span key={it} className="text-[13px] text-muted-foreground">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="border-l border-hairline pl-6 text-[15px] leading-relaxed">
                  {ind.question}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
