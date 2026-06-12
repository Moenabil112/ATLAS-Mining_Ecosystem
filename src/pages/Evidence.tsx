import { PageHeader } from "@/components/layout/PageHeader";
import { EvidenceDashboard } from "@/components/dashboards/EvidenceDashboard";

export function Evidence() {
  return (
    <div>
      <PageHeader
        eyebrow="Layer 02 · Evidence base"
        title="Field & Laboratory Evidence"
        description="The project has moved beyond a paper-stage asset: a May 2025 field visit, trenching, 29 AFRILAB samples and selected copper assays. This evidence justifies structured validation — it does not yet prove a resource or reserve."
      />
      <EvidenceDashboard />
    </div>
  );
}
