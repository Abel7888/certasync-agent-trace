import { useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ChevronDown,
  Fingerprint,
  Layers3,
  ShieldCheck,
  ScanLine,
} from "lucide-react";
import { DEMO_LINK } from "./ui";

const workflows = {
  finance: {
    label: "Financial services",
    agent: "Payments operations agent",
    owner: "Banking operations",
    action: "Submitted a $7,500 payment request",
    tool: "payments.submit_request",
    boundary: "Autonomous request limit: $5,000",
    finding: "Request amount exceeds configured limit",
    lead: "When an agent handles a payment request, can you explain its authority?",
    description:
      "Explore payment requests, account updates, and operations workflows using synthetic financial records.",
    normal: "Submit a request within the configured amount limit.",
    exception: "Submit a $7,500 request against a $5,000 limit.",
    learn:
      "Trace the request to its agent and owner, inspect the policy finding, and preserve the investigation evidence.",
    context: "A recorded request is not proof that funds moved. Business outcome not established.",
  },
  healthcare: {
    label: "Healthcare operations",
    agent: "Patient services agent",
    owner: "Patient services operations",
    action: "Recorded access to a synthetic patient record",
    tool: "patient_records.lookup",
    boundary: "Assigned workflow: appointment scheduling",
    finding: "Recorded access is outside configured workflow scope",
    lead: "When an agent accesses a record, can you connect it to an owner and purpose?",
    description:
      "Explore scheduling, patient service requests, and administrative workflows using fictional patient records.",
    normal: "Look up the fictional appointment details needed for scheduling.",
    exception: "Record access outside the agent’s configured workflow scope.",
    learn:
      "Inspect the recorded access, identity, workflow boundary, and finding without sharing real patient information.",
    context:
      "Illustrative administrative scenario. No real patient data, clinical decisions, or HIPAA compliance determination.",
  },
} as const;
type Workflow = keyof typeof workflows;

function BookLink({ children = "Book a 15-minute conversation" }: { children?: ReactNode }) {
  return (
    <a className="pilot-button" href={DEMO_LINK}>
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}
function Brand() {
  return (
    <a className="pilot-brand" href="#top" aria-label="Certa Systems home">
      <span className="pilot-brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>
        Certa<span className="pilot-brand-systems"> Systems</span>
      </span>
    </a>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="pilot-nav">
      <div className="shell pilot-nav-inner">
        <Brand />
        <nav aria-label="Main navigation" className="pilot-desktop-nav">
          <a href="#how-it-works">How it works</a>
          <a href="#solutions">Pilot workflows</a>
          <a href="#security">Security</a>
        </nav>
        <a className="pilot-nav-cta" href="#pilot">
          Explore a pilot <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          className="pilot-menu"
          type="button"
          aria-expanded={open}
          aria-controls="pilot-mobile-nav"
          onClick={() => setOpen(!open)}
        >
          Menu <ChevronDown size={16} aria-hidden="true" />
        </button>
      </div>
      {open && (
        <nav
          id="pilot-mobile-nav"
          className="shell pilot-mobile-nav"
          aria-label="Mobile navigation"
          onClick={() => setOpen(false)}
        >
          <a href="#how-it-works">How it works</a>
          <a href="#solutions">Pilot workflows</a>
          <a href="#security">Security</a>
          <a href="#pilot">Explore a pilot</a>
        </nav>
      )}
    </header>
  );
}
function ActionPreview({
  selected,
  setSelected,
}: {
  selected: Workflow;
  setSelected: (value: Workflow) => void;
}) {
  const flow = workflows[selected];
  return (
    <div className="pilot-console">
      <div className="pilot-console-top">
        <span>
          <span className="pilot-live-dot" /> Action record
        </span>
        <span>SYNTHETIC EXAMPLE</span>
      </div>
      <div className="pilot-switch" role="group" aria-label="Choose an example workflow">
        {(Object.keys(workflows) as Workflow[]).map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={selected === key}
            onClick={() => setSelected(key)}
          >
            {workflows[key].label}
          </button>
        ))}
      </div>
      <div className="pilot-console-body" aria-live="polite" aria-atomic="true">
        <div className="pilot-agent-line">
          <span className="pilot-agent-icon">
            <Layers3 size={22} aria-hidden="true" />
          </span>
          <div>
            <span className="pilot-small-label">Agent</span>
            <h2>{flow.agent}</h2>
          </div>
        </div>
        <div className="pilot-owner">
          <span>Accountable owner</span>
          <span>{flow.owner}</span>
        </div>
        <div className="pilot-event">
          <span className="pilot-small-label">Recorded action</span>
          <p>{flow.action}</p>
          <code>{flow.tool}</code>
        </div>
        <div className="pilot-policy">
          <span className="pilot-small-label">Policy check</span>
          <p>{flow.boundary}</p>
          <div>
            <span className="pilot-status-dot" />
            <strong>Flagged for review</strong>
          </div>
          <span>{flow.finding}</span>
        </div>
        <div className="pilot-evidence">
          <Fingerprint size={19} aria-hidden="true" />
          <div>
            <strong>From action to investigation</strong>
            <span>Context · policy finding · evidence record</span>
          </div>
          <ArrowRight size={16} aria-hidden="true" />
        </div>
        <p className="pilot-console-note">{flow.context}</p>
      </div>
    </div>
  );
}
function Platform() {
  return (
    <section className="pilot-section" id="platform">
      <div className="shell">
        <div className="pilot-section-heading">
          <div>
            <span className="pilot-eyebrow">The accountability layer</span>
            <h2>
              One action.
              <br />
              <span className="pilot-muted">The context to explain it.</span>
            </h2>
          </div>
          <p>
            Bring identity, authority, and recorded activity into the same investigation. Give
            business, security, and technical teams a shared place to ask what happened.
          </p>
        </div>
        <div className="pilot-pillars">
          <article>
            <span className="pilot-pillar-index">01 / OBSERVE</span>
            <ScanLine size={27} aria-hidden="true" />
            <h3>Know what happened.</h3>
            <p>
              Connect recorded actions to agents, identities, accountable owners, and the systems or
              resources involved.
            </p>
            <ul>
              <li>Agent inventory and ownership</li>
              <li>Runtime action context</li>
              <li>Reported MCP and tool activity</li>
            </ul>
          </article>
          <article>
            <span className="pilot-pillar-index">02 / GOVERN</span>
            <ShieldCheck size={27} aria-hidden="true" />
            <h3>Understand the boundary.</h3>
            <p>
              Compare recorded activity with defined rules and keep the authority and governance
              context alongside it.
            </p>
            <ul>
              <li>Technical and business authority</li>
              <li>Deterministic policy findings</li>
              <li>Investigation and response history</li>
            </ul>
          </article>
          <article>
            <span className="pilot-pillar-index">03 / PROVE</span>
            <Fingerprint size={27} aria-hidden="true" />
            <h3>Keep the evidence.</h3>
            <p>
              Preserve the context reviewed, the finding, and the decisions made so teams can
              revisit the record.
            </p>
            <ul>
              <li>Governance and data context</li>
              <li>Attributed tool-inventory links</li>
              <li>Exportable evidence packages</li>
            </ul>
          </article>
        </div>
        <p className="pilot-footnote">
          Coverage depends on the sources connected and the observations provided. Certa preserves
          gaps and source attribution rather than treating missing context as proof.
        </p>
      </div>
    </section>
  );
}
const stages = [
  {
    label: "Connect the context",
    title: "Whose agent? Which authority?",
    copy: "Start with the agent, its identity, accountable owner, and the configured business authority. Inspect the system, resource, and tool context available for the action.",
    fields: [
      ["Agent", "Payments operations agent"],
      ["Owner", "Banking operations"],
      ["Authority", "Requests up to $5,000"],
    ],
  },
  {
    label: "Inspect the action",
    title: "A request is recorded.",
    copy: "The synthetic action reports a $7,500 payment request. Certa retains the reported operation and runtime context. A successful tool response alone does not establish a completed payment.",
    fields: [
      ["Tool", "payments.submit_request"],
      ["Recorded amount", "$7,500"],
      ["Business outcome", "Not established"],
    ],
  },
  {
    label: "Review the finding",
    title: "The amount crosses a boundary.",
    copy: "A deterministic rule flags the amount above the configured $5,000 limit. An investigator can review the action, assign the finding, and record the response and resolution.",
    fields: [
      ["Rule", "Request amount ≤ $5,000"],
      ["Finding", "Configured limit exceeded"],
      ["Next step", "Investigator review"],
    ],
  },
  {
    label: "Preserve the evidence",
    title: "Leave a record someone can revisit.",
    copy: "Export the finding with its captured action context and investigation history. Keep source-reported observations distinct from customer-confirmed links and recorded governance decisions.",
    fields: [
      ["Record", "Action + policy finding"],
      ["History", "Investigation and response"],
      ["Handoff", "Exportable evidence"],
    ],
  },
];
function Walkthrough() {
  const [stage, setStage] = useState(0);
  const current = stages[stage]!;
  return (
    <section className="pilot-walkthrough pilot-section" id="how-it-works">
      <div className="shell">
        <div className="pilot-section-heading">
          <div>
            <span className="pilot-eyebrow">Follow one action</span>
            <h2>
              See the question.
              <br />
              Follow the evidence.
            </h2>
          </div>
          <p>
            A synthetic payment request makes the process concrete. Select a step to explore what
            your team would review.
          </p>
        </div>
        <div className="pilot-walkthrough-grid">
          <div className="pilot-steps" role="group" aria-label="Explore the accountability process">
            {stages.map((item, i) => (
              <button
                key={item.label}
                type="button"
                aria-pressed={stage === i}
                onClick={() => setStage(i)}
              >
                <span>0{i + 1}</span>
                {item.label}
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="pilot-step-detail" aria-live="polite" aria-atomic="true">
            <span className="pilot-small-label">Illustrative walkthrough / 0{stage + 1}</span>
            <h3>{current.title}</h3>
            <p>{current.copy}</p>
            <dl>
              {current.fields.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="pilot-observer-note">
          <span className="pilot-small-label">Designed to observe</span>
          <p>
            Certa evaluates recorded activity outside the execution path. Enforcement stays with
            your existing systems; this walkthrough does not demonstrate Certa blocking a payment.
          </p>
        </div>
      </div>
    </section>
  );
}
function Workflows({
  selected,
  setSelected,
}: {
  selected: Workflow;
  setSelected: (value: Workflow) => void;
}) {
  const flow = workflows[selected];
  return (
    <section className="pilot-section" id="solutions">
      <div className="shell">
        <div className="pilot-section-heading">
          <div>
            <span className="pilot-eyebrow">Start with your workflow</span>
            <h2>
              A practical test.
              <br />
              <span className="pilot-muted">A useful conversation.</span>
            </h2>
          </div>
          <p>
            Start with financial services or healthcare operations. Together, we choose one question
            your team needs to answer.
          </p>
        </div>
        <div className="pilot-workflow-select" role="group" aria-label="Choose your pilot industry">
          {(Object.keys(workflows) as Workflow[]).map((key) => (
            <button
              key={key}
              type="button"
              aria-pressed={selected === key}
              onClick={() => setSelected(key)}
            >
              {workflows[key].label}
              <ArrowUpRight size={19} aria-hidden="true" />
            </button>
          ))}
        </div>
        <div className="pilot-workflow-content" aria-live="polite" aria-atomic="true">
          <div>
            <span className="pilot-eyebrow">{flow.label} / proposed pilot</span>
            <h3>{flow.lead}</h3>
            <p>{flow.description}</p>
            <a className="pilot-text-link" href="#pilot">
              Explore this workflow <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="pilot-scenario-list">
            <div>
              <span>01</span>
              <div>
                <h4>Normal action</h4>
                <p>{flow.normal}</p>
              </div>
            </div>
            <div>
              <span>02</span>
              <div>
                <h4>Boundary exception</h4>
                <p>{flow.exception}</p>
              </div>
            </div>
            <div>
              <span>03</span>
              <div>
                <h4>What you review</h4>
                <p>{flow.learn}</p>
              </div>
            </div>
          </div>
        </div>
        <p className="pilot-footnote">
          Illustrative workflows to agree together during scoping. These examples are not claims of
          live banking, EHR, or clinical-system integrations.
        </p>
      </div>
    </section>
  );
}
function Pilot() {
  return (
    <section className="pilot-offer pilot-section" id="pilot">
      <div className="shell">
        <span className="pilot-eyebrow">Complimentary design-partner pilot</span>
        <div className="pilot-offer-heading">
          <h2>
            One workflow.
            <br />
            Synthetic data.
            <br />
            <span>A clearer picture.</span>
          </h2>
          <div>
            <p>You don’t need a large rollout to find out whether Certa is useful for your team.</p>
            <p>
              We’ll agree on a small scenario, walk through it together, and review what the
              evidence can—and cannot—tell us.
            </p>
            <BookLink />
            <span className="pilot-call-note">
              A short introduction. No obligation to continue.
            </span>
          </div>
        </div>
        <div className="pilot-offer-steps">
          <article>
            <span>01</span>
            <h3>Choose the question</h3>
            <p>
              Pick one workflow and the ownership, authority, or activity question you want to
              explore.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Run the scenario</h3>
            <p>
              Use synthetic records and simulated systems to compare expected behavior with a
              boundary exception.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Review the record</h3>
            <p>
              Walk through the finding, investigation, and evidence. Share honest feedback on what
              is useful and what is missing.
            </p>
          </article>
        </div>
        <div className="pilot-inclusions">
          {[
            "Complimentary",
            "Founder-led setup",
            "No production access required",
            "No real patient data or money",
          ].map((text) => (
            <span key={text}>
              <Check size={15} aria-hidden="true" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
function Security() {
  return (
    <section className="pilot-section" id="security">
      <div className="shell pilot-security-grid">
        <div>
          <span className="pilot-eyebrow">Start within clear boundaries</span>
          <h2>
            Explore the value.
            <br />
            <span className="pilot-muted">Keep the scope small.</span>
          </h2>
          <p className="pilot-body-copy">
            The first pilot is a controlled learning exercise. We agree the sources, scenario, and
            evidence to review before starting.
          </p>
          <a
            className="pilot-text-link"
            href="mailto:info@certasystem.xyz?subject=Certa%20pilot%20security%20questions"
          >
            Ask a security question <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="pilot-security-list">
          <article>
            <ShieldCheck size={21} aria-hidden="true" />
            <div>
              <h3>Synthetic first</h3>
              <p>
                Fictional records and simulated systems. No production credentials or sensitive
                customer information are needed for the initial walkthrough.
              </p>
            </div>
          </article>
          <article>
            <Layers3 size={21} aria-hidden="true" />
            <div>
              <h3>Organization-scoped records</h3>
              <p>
                Certa uses organization-scoped access and PostgreSQL row-level security to separate
                tenant records.
              </p>
            </div>
          </article>
          <article>
            <Fingerprint size={21} aria-hidden="true" />
            <div>
              <h3>Evidence with attribution</h3>
              <p>
                Review where observations came from and which links were confirmed by a person. Tool
                success is not treated as proof of business completion.
              </p>
            </div>
          </article>
          <p className="pilot-footnote">
            Certa is an early-stage platform. It does not currently claim SOC 2 certification or
            HIPAA compliance. Pilot evidence supports review; it does not certify regulatory
            compliance.
          </p>
        </div>
      </div>
    </section>
  );
}
function FAQ() {
  const questions = [
    [
      "Do we need an agent running in production?",
      "No. The initial walkthrough can use a reference agent, synthetic data, and simulated systems. We can discuss your workflow before considering any live connection.",
    ],
    [
      "What would our team need to contribute?",
      "A workflow to discuss, someone who understands its business boundaries, and feedback on the walkthrough. We agree the pilot scope and any further time commitment together.",
    ],
    [
      "What do we review at the end?",
      "The recorded action, available identity and authority context, policy finding, investigation history, and exportable evidence. We also discuss coverage gaps and whether a next step would be worthwhile.",
    ],
    [
      "Does Certa block actions or replace our existing tools?",
      "This pilot focuses on observation, deterministic policy evaluation, investigation, and evidence outside the execution path. Your existing systems remain responsible for enforcing access and approvals.",
    ],
    [
      "Can we explore MCP and tool activity?",
      "Yes, where supported observations are provided. We can examine reported MCP server and tool context, and attributable links to your tool inventory. An observation or confirmed inventory link does not by itself prove permission, execution, or a completed business outcome.",
    ],
    [
      "Is the pilot paid?",
      "The scoped design-partner pilot is complimentary, with no obligation to continue. If a broader engagement makes sense later, we would discuss it separately.",
    ],
  ];
  return (
    <section className="pilot-section pilot-faq-section">
      <div className="shell pilot-faq-grid">
        <div>
          <span className="pilot-eyebrow">Before we talk</span>
          <h2>
            A few practical
            <br />
            questions.
          </h2>
        </div>
        <div className="pilot-faq">
          {questions.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <ChevronDown size={18} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
function Closing({ selected }: { selected: Workflow }) {
  const email = `mailto:info@certasystem.xyz?subject=${encodeURIComponent(`Certa ${workflows[selected].label.toLowerCase()} pilot introduction`)}`;
  return (
    <>
      <section className="pilot-section pilot-closing">
        <div className="shell">
          <span className="pilot-eyebrow">Let’s start with a conversation</span>
          <h2>
            Have a workflow in mind?
            <br />
            <span className="pilot-muted">I’d like to hear about it.</span>
          </h2>
          <p>
            I’m Abel, the founder of Certa Systems. I’m looking for teams willing to explore a
            practical scenario and give honest feedback. I’ll walk you through the product myself.
          </p>
          <div className="pilot-closing-actions">
            <BookLink />
            <a href={email} className="pilot-text-link">
              Prefer email? Introduce yourself <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <span className="pilot-call-note">
            Complimentary pilot · Synthetic data · No obligation
          </span>
        </div>
      </section>
      <footer className="pilot-footer">
        <div className="shell">
          <div>
            <Brand />
            <p>Accountability for AI agents.</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#platform">Platform</a>
            <a href="#solutions">Pilot workflows</a>
            <a href="#security">Security</a>
            <a href="mailto:info@certasystem.xyz">Contact</a>
          </nav>
          <span>© {new Date().getFullYear()} Certa Systems</span>
        </div>
      </footer>
    </>
  );
}
export function PilotLanding() {
  const [selected, setSelected] = useState<Workflow>("finance");
  return (
    <div className="pilot-page">
      <a className="pilot-skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="pilot-hero" id="top">
          <div className="shell pilot-hero-grid">
            <div className="pilot-hero-copy">
              <a className="pilot-availability" href="#pilot">
                <span />
                Now exploring design-partner pilots
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <h1>
                Your agents can act.
                <br />
                <span>Make their actions accountable.</span>
              </h1>
              <p>
                Know who owns an AI agent, what authority it has, what it did, and the evidence
                behind it.
              </p>
              <div className="pilot-hero-actions">
                <a className="pilot-button" href="#pilot">
                  Explore a complimentary pilot
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a className="pilot-text-link" href="#how-it-works">
                  See how it works
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="pilot-hero-proof">
                <span>
                  <Check size={14} aria-hidden="true" />
                  Synthetic data
                </span>
                <span>
                  <Check size={14} aria-hidden="true" />
                  No production access required
                </span>
              </div>
            </div>
            <ActionPreview selected={selected} setSelected={setSelected} />
          </div>
          <div className="shell pilot-hero-bottom">
            <span>Built around the questions that matter</span>
            <div>
              <span>Who owns it?</span>
              <span>Was it within authority?</span>
              <span>What can we prove?</span>
            </div>
          </div>
        </section>
        <Platform />
        <Walkthrough />
        <Workflows selected={selected} setSelected={setSelected} />
        <Pilot />
        <Security />
        <FAQ />
        <Closing selected={selected} />
      </main>
    </div>
  );
}
