import { PageHeader } from "@/components/layout/PageHeader";
import { Roadmap180Dashboard } from "@/components/dashboards/Roadmap180Dashboard";

export function Roadmap180() {
  return (
    <div>
      <PageHeader
        eyebrow="Layer 05 · Validation pathway"
        title="180-Day Feasibility Upgrade"
        description="A six-phase roadmap that converts the preliminary orientation study and available evidence into a structured commercial decision — the bridge from documents and assumptions to a pilot or operating decision."
      />
      <Roadmap180Dashboard />
    </div>
  );
}
