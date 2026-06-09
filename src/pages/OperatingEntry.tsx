import { PageHeader } from "@/components/layout/PageHeader";
import { OperatingEntryDashboard } from "@/components/dashboards/OperatingEntryDashboard";

export function OperatingEntry() {
  return (
    <div>
      <PageHeader
        eyebrow="Layer 06 · Deal pathway"
        title="Structured Operating Entry"
        description="Atlas Mining's commercial offer for qualified operators or investors: structured entry into validation and operating negotiation. This is not a license sale."
      />
      <OperatingEntryDashboard />
    </div>
  );
}
