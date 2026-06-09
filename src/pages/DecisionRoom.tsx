import { PageHeader } from "@/components/layout/PageHeader";
import { DecisionRoomDashboard } from "@/components/dashboards/DecisionRoomDashboard";

export function DecisionRoom() {
  return (
    <div>
      <PageHeader
        eyebrow="Board & investor control room"
        title="Decision Room"
        description="The control room for Atlas Mining and qualified parties: next decisions, ten decision gates, risk and claim controls, feasibility-upgrade status, operating-entry status, and unresolved validation items."
      />
      <DecisionRoomDashboard />
    </div>
  );
}
