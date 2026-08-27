import { Reveal } from "./primitives";
import { SectionHead } from "./ui";

const ITEMS = [
  ["Tenant Isolation", "Organization-scoped access plus PostgreSQL Row-Level Security."],
  [
    "Encryption",
    "Public HTTPS, encrypted Railway private networking, Postgres transport encryption, ClickHouse TLS.",
  ],
  ["Database Role Separation", "Separate application, background, founder-admin, and migration roles."],
  ["Secrets Protection", "Credentials remain environment-driven and outside source code."],
  ["Secure Credentials", "API keys and webhook tokens use hash-at-rest patterns."],
  [
    "Read-Focused Pilot",
    "Start by observing agents without placing Certa directly in their execution path.",
  ],
];

export function Security() {
  return (
    <section id="security" className="py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <SectionHead eyebrow="Security" title="Built With Security Boundaries From the Start" />
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(([t, c]) => (
            <div key={t} className="bg-surface p-7">
              <div className="font-display text-[15.5px]">{t}</div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted-foreground">{c}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[13px] text-muted-foreground">
          Certa does not currently claim SOC 2, HIPAA, or other compliance certifications.
        </p>
      </div>
    </section>
  );
}
