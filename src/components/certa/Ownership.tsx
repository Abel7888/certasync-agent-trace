import { Reveal } from "./primitives";
import { Card, CardRow, Pill, SectionHead } from "./ui";

export function Ownership() {
  return (
    <section className="py-24 lg:py-32">
      <div className="shell grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionHead
            eyebrow="Ownership"
            title="Every Agent Should Have an Owner"
            copy="Certa connects agent activity to the people and teams responsible for it and surfaces active agents operating without complete ownership."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <Card>
            <div className="flex items-center justify-between border-b border-hairline px-5 py-4">
              <div className="font-display text-[16px]">Procurement Agent</div>
              <Pill tone="ok">Assigned</Pill>
            </div>
            <CardRow k="Business Owner" v="Sarah Chen" />
            <CardRow k="Technical Owner" v="AI Platform" />
            <CardRow k="Department" v="Procurement" />
            <CardRow k="Purpose" v="Supplier sourcing and purchasing" />
            <CardRow k="Environment" v="Production" />
            <CardRow k="Ownership" v="Assigned" tone="signal" />
            <CardRow k="Next Review" v="October 15" tone="muted" />
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
