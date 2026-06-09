import { PageHeader } from "@/components/layout/PageHeader";
import { IntelligentSystemDashboard } from "@/components/dashboards/IntelligentSystemDashboard";

export function IntelligentSystem() {
  return (
    <div>
      <PageHeader
        eyebrow="Layer 04 · Digital decision layer"
        title="Intelligent Validation System"
        description="The ATLAS Intelligent Copper Targeting System is a decision-support layer that organizes license, field, assay and study data to decide where to sample, survey, drill — and where to avoid. It supports productivity and reduces waste. It does not replace geologists, engineers, labs, legal review, or feasibility studies — and it is independent from the entry fee."
      />
      <IntelligentSystemDashboard />
    </div>
  );
}
