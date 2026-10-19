import { createFileRoute } from "@tanstack/react-router";
import { PilotLanding } from "@/components/certa/PilotLanding";
const title = "Certa Systems — AI Agent Accountability | Explore a Pilot";
const description =
  "See who owns an AI agent, what authority it has, what it did, and the evidence behind it. Explore a complimentary finance or healthcare operations pilot using synthetic data.";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.certasystem.xyz/" }],
  }),
  component: PilotLanding,
});
