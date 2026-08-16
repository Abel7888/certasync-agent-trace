import { motion } from "motion/react";
import { Label, Reveal } from "./primitives";

const STATS = [
  { v: "47", k: "Agents" },
  { v: "182K", k: "Actions" },
  { v: "23", k: "High-Risk Actions" },
  { v: "7", k: "Permission Risks" },
  { v: "4", k: "Policy Violations", risk: true },
];

const AGENTS = [
  {
    name: "Invoice Agent",
    meta: "Finance · Production",
    status: "High Risk",
    tone: "risk" as const,
    last: "Approved a $17,300 invoice via SAP · 10:42:11",
  },
  {
    name: "Support Agent",
    meta: "Customer Operations · Production",
    status: "Healthy",
    tone: "ok" as const,
    last: "Resolved ticket #48211 via Zendesk · 10:41:56",
  },
  {
    name: "Procurement Agent",
    meta: "Operations · Production",
    status: "Medium Risk",
    tone: "warn" as const,
    last: "Issued PO-9931 to Northwind Supply · 10:39:02",
  },
  {
    name: "Research Agent",
    meta: "Owner Unassigned · Production",
    status: "Medium Risk",
    tone: "warn" as const,
    last: "Retrieved 42 documents from S3 · 10:36:44",
  },
];

function toneColor(tone: "risk" | "ok" | "warn") {
  if (tone === "risk") return "var(--risk)";
  if (tone === "ok") return "var(--signal)";
  return "oklch(0.8 0.11 90)";
}

export function Product() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="shell">
        <Label>Certa Platform</Label>
        <Reveal>
          <h2 className="display-lg mt-10 max-w-3xl">One place to understand your agents.</h2>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-20">
        <div className="mx-auto w-full max-w-[1440px] px-4">
          <div className="border border-border bg-surface">
            {/* chrome */}
            <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
              <div className="flex items-center gap-6">
                <span className="font-display text-[13px] tracking-[0.3em]">CERTA</span>
                <span className="label-tech hidden sm:block">Agent Posture</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="signal-dot" />
                <span className="label-tech">Production</span>
              </div>
            </div>

            <div className="grid grid-cols-2 divide-x divide-[var(--hairline)] border-b border-hairline md:grid-cols-5">
              {STATS.map((s) => (
                <div key={s.k} className="px-6 py-10">
                  <div
                    className="font-display text-4xl tracking-tight lg:text-5xl"
                    style={{ color: s.risk ? "var(--risk)" : undefined }}
                  >
                    {s.v}
                  </div>
                  <div className="label-tech mt-3 text-[10px]">{s.k}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-[minmax(0,1fr)_320px]">
              <div>
                <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
                  <span className="label-tech">Agents</span>
                  <span className="label-tech text-[10px]">47 total · 4 shown</span>
                </div>
                {AGENTS.map((a) => (
                  <motion.div
                    key={a.name}
                    whileHover={{ backgroundColor: "var(--surface-2)" }}
                    transition={{ duration: 0.25 }}
                    className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-hairline px-6 py-6 last:border-b-0"
                  >
                    <div>
                      <div className="font-display text-lg tracking-tight">{a.name}</div>
                      <div className="mt-1 font-mono text-[11px] text-muted-foreground">{a.meta}</div>
                      <div className="mt-3 max-h-0 overflow-hidden font-mono text-[11px] text-signal opacity-0 transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100">
                        {a.last}
                      </div>
                    </div>
                    <span
                      className="border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em]"
                      style={{ color: toneColor(a.tone), borderColor: toneColor(a.tone) }}
                    >
                      {a.status}
                    </span>
                  </motion.div>
                ))}
              </div>

              <aside className="border-t border-hairline lg:border-l lg:border-t-0">
                <div className="border-b border-hairline px-6 py-4">
                  <span className="label-tech">Latest findings</span>
                </div>
                <div className="space-y-5 px-6 py-6">
                  {[
                    ["10:42:11", "Approval limit exceeded", "Invoice Agent"],
                    ["10:36:44", "Owner unassigned", "Research Agent"],
                    ["10:21:07", "New tool observed: SAP", "Invoice Agent"],
                    ["09:58:30", "Permission scope widened", "Procurement Agent"],
                  ].map(([t, title, agent]) => (
                    <div key={title} className="border-l border-hairline pl-4">
                      <div className="font-mono text-[10px] text-muted-foreground">{t}</div>
                      <div className="mt-1 text-[13px]">{title}</div>
                      <div className="mt-1 font-mono text-[10px] text-muted-foreground">{agent}</div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
