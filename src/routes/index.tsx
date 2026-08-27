import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/certa/Nav";
import { Hero } from "@/components/certa/Hero";
import { CoreMessage } from "@/components/certa/CoreMessage";
import { FeatureHighlight } from "@/components/certa/FeatureHighlight";
import { Ownership } from "@/components/certa/Ownership";
import { PolicyRisk } from "@/components/certa/PolicyRisk";
import { Roadmap } from "@/components/certa/Roadmap";
import { Solutions } from "@/components/certa/Solutions";
import { Security } from "@/components/certa/Security";
import { WhyCerta } from "@/components/certa/WhyCerta";
import { PilotProgram } from "@/components/certa/PilotProgram";
import { FinalCta, Footer } from "@/components/certa/FinalCta";

const title = "Certa Systems — AI Agent Accountability Platform";
const description =
  "Know which AI agents are running, who owns them, what they did, whether they stayed within policy, and the evidence behind important decisions.";

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
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <CoreMessage />
        <FeatureHighlight />
        <Ownership />
        <PolicyRisk />
        <Roadmap />
        <Solutions />
        <Security />
        <WhyCerta />
        <PilotProgram />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
