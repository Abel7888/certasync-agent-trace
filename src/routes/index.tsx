import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/certa/Nav";
import { Hero } from "@/components/certa/Hero";
import { Shift } from "@/components/certa/Shift";
import { Product } from "@/components/certa/Product";
import { Model } from "@/components/certa/Model";
import { Stories } from "@/components/certa/Stories";
import { OneAction } from "@/components/certa/OneAction";
import { DemoSection } from "@/components/certa/DemoSection";
import { Solutions } from "@/components/certa/Solutions";
import { Industries } from "@/components/certa/Industries";
import { Architecture } from "@/components/certa/Architecture";
import { Manifesto } from "@/components/certa/Manifesto";
import { FinalCta, Footer } from "@/components/certa/FinalCta";

const title = "Certa Systems — Accountability for AI agents";
const description =
  "Certa creates a clear record around autonomous AI activity — connecting agents to ownership, authority, policy, actions and evidence.";

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
        <Shift />
        <Product />
        <Model />
        <Stories />
        <OneAction />
        <DemoSection />
        <Solutions />
        <Industries />
        <Architecture />
        <Manifesto />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
