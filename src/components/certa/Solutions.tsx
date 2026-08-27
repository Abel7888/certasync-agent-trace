import { Reveal } from "./primitives";
import { SectionHead } from "./ui";

const ITEMS = [
  {
    name: "Financial Services",
    copy: "Agents moving money, updating financial records, reviewing transactions.",
    q: "Was the action within the agent's authority?",
  },
  {
    name: "Customer Support",
    copy: "Agents issuing refunds, modifying accounts, communicating with customers.",
    q: "What did the agent change and was it allowed?",
  },
  {
    name: "Software & IT",
    copy: "Agents calling APIs, querying databases, changing infrastructure.",
    q: "Which agent made the change?",
  },
  {
    name: "Procurement & Supply Chain",
    copy: "Agents creating purchase orders and interacting with suppliers.",
    q: "Did the agent exceed its purchasing authority?",
  },
  {
    name: "Healthcare Operations",
    copy: "Agents interacting with operational systems and workflows.",
    q: "What did the agent access and who owns it?",
  },
  {
    name: "Manufacturing",
    copy: "Agents interacting with production and operational workflows.",
    q: "What changed and was the action authorized?",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <SectionHead eyebrow="Solutions" title="One Accountability Layer. Different Business Actions." />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it) => (
            <div
              key={it.name}
              className="flex h-full flex-col border border-border bg-surface p-7 transition-colors duration-200 hover:border-signal/40"
            >
              <div className="font-display text-[17px]">{it.name}</div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{it.copy}</p>
              <div className="mt-auto border-t border-hairline pt-5 text-[13.5px] text-signal">
                {it.q}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
