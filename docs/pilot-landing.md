# Pilot-focused landing page

The homepage is designed to help a prospective design partner understand a small pilot and start a conversation. It preserves Certa's graphite/blue identity and Observe → Govern → Prove framing.

## Visitor journey

1. Explain agent ownership, authority, recorded activity, and evidence.
2. Explore a labeled synthetic finance or healthcare example.
3. Follow a payment request through context, action, finding, and evidence.
4. Choose an industry and inspect a proposed normal action and boundary exception.
5. Understand the complimentary pilot: scope one question, run a synthetic scenario, and review the record with the founder.
6. Answer practical security, production-access, effort, and cost questions.
7. Book through the existing Calendly URL or introduce a workflow by email.

No new external services, tracking, lead-storage system, or backend changes are introduced. Industry selection is browser-local state shared between the hero, workflow panel, and email subject. Calendly and email are the existing contact destinations.

## Claims and scope

The page describes observational policy evaluation, investigation, and exportable evidence. MCP content is limited to source-reported observations and attributed tool-inventory links, consistent with the product's Phase 8.3 contract. Source reports and customer confirmations are not proof of permission or completed business outcomes. Examples are illustrative proposed pilot scenarios, not claims of live banking/EHR integrations. No customer endorsements, performance figures, certification claims, or inline prevention claims are added.

## Validation

- TypeScript: `npx tsc --noEmit` passes.
- Production build: `npm run build` passes for the existing Cloudflare-module target.
- React server render and JSDOM interaction smoke test: 35 checks pass, covering rendering, unique IDs, anchor destinations, shared industry state, email subjects, all four walkthrough stages, mobile menu state, FAQ structure, booking destinations, and scope labels.
- `git diff --check` passes.
- Browser visual/responsive QA was unavailable in this execution environment; CSS includes desktop, tablet, and mobile breakpoints and reduced-motion handling. Interaction tests are not a substitute for real-device layout review.

## Publication

This repository is connected to Lovable. Preserve published history. Merge the reviewed change without rewriting existing commits, then publish through the existing Lovable project if the custom domain has not updated automatically. Verify https://www.certasystem.xyz/ shows the new headline before treating the page as live.

## What to learn after launch

Use the relevant section in outreach: `#solutions` for proposed workflows, `#how-it-works` for the walkthrough, and `#pilot` for the offer. Compare qualified pilot conversations and agreed pilot scopes with the previous page. No conversion improvement is claimed before results exist.
