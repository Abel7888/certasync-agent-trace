import { Reveal } from "./primitives";
import { DEMO_LINK } from "./ui";

const INCLUDES = [
  "Guided onboarding",
  "1–3 agents",
  "Agent inventory",
  "Ownership",
  "Activity summaries",
  "Policy evaluation",
  "Findings",
  "Evidence",
  "Direct founder support",
  "Product roadmap input",
];

export function PilotProgram() {
  return (
    <section id="pilot" className="border-y border-hairline bg-surface py-24 lg:py-32">
      <div className="shell grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
        <div className="max-w-xl">
          <div className="label-tech">Pilot Program</div>
          <h2 className="display-lg mt-5">Start With One Agent</h2>
          <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
            Certa is looking for a small number of teams already experimenting with AI agents.
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
            Connect one low-risk agent and see whether Certa gives your team useful visibility into
            ownership, activity, policy, risk, and evidence.
          </p>

          <div className="mt-10">
            <a
              href={DEMO_LINK}
              className="inline-flex rounded-sm bg-signal px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Book a Pilot Demo
            </a>
            <p className="mt-4 text-[13px] text-muted-foreground">No large rollout required.</p>
          </div>
        </div>

        <Reveal delay={0.05}>
          <div className="border border-border bg-background p-7">
            <div className="label-tech">Pilot includes</div>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {INCLUDES.map((i) => (
                <div key={i} className="flex items-start gap-3 text-[13.5px]">
                  <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-signal" />
                  {i}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
