import { PageHeader } from "@/components/layout/PageHeader";
import { LicenseDashboard } from "@/components/dashboards/LicenseDashboard";

export function LicensePosition() {
  return (
    <div>
      <PageHeader
        eyebrow="Layer 01 · Anchor asset"
        title="Atlas License Position"
        description="Atlas Mining controls a licensed copper asset in the Isseksi / Beni Mellal-Khénifra context. The license is the legal anchor of the entire ecosystem — presented as a controlled entry opportunity, not a license sale."
      />
      <LicenseDashboard />
    </div>
  );
}
