import { PageHeader } from "@/components/layout/PageHeader";
import { OrientationStudyDashboard } from "@/components/dashboards/OrientationStudyDashboard";

export function OrientationStudy() {
  return (
    <div>
      <PageHeader
        eyebrow="Layer 03 · Industrial base case"
        title="Orientation Study Asset"
        description="The A.I.P.S preliminary orientation study gives Atlas a mine-construction and processing scenario. It is a strategic base case to be upgraded and validated — not a final feasibility study, reserve statement, or bankable CAPEX."
      />
      <OrientationStudyDashboard />
    </div>
  );
}
