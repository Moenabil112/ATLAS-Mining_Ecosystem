import { MapPin, CalendarClock, Ruler, Leaf, FileCheck } from "lucide-react";
import { AccessLevelBadge } from "./AccessLevelBadge";
import { Badge } from "@/components/shared/Badge";
import { Panel } from "@/components/shared/Panel";
import type { LicenseRegister } from "@/types";

export function LicenseCard({ register }: { register: LicenseRegister }) {
  const rows = [
    { icon: FileCheck, label: "Exploitation License", value: `No. ${register.licenseNumber}` },
    { icon: Ruler, label: "Surface Area", value: `${register.areaKm2} km²` },
    { icon: CalendarClock, label: "Validity", value: `${register.validFrom} — ${register.validTo}` },
    { icon: MapPin, label: "Region", value: register.region },
    { icon: Leaf, label: "Environmental Approval", value: register.environmentalApproval },
  ];
  return (
    <Panel className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-copper-line" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Atlas-controlled licensed copper asset</p>
          <h3 className="mt-1 text-lg font-semibold text-sand-50">
            {register.projectArea} — {register.licenseType}
          </h3>
        </div>
        <AccessLevelBadge level={register.disclosureLevel} />
      </div>

      <dl className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start gap-3">
            <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-copper-400" />
            <div>
              <dt className="text-[11px] uppercase tracking-wide text-sand-300/50">
                {row.label}
              </dt>
              <dd className="text-sm text-sand-100">{row.value}</dd>
            </div>
          </div>
        ))}
      </dl>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-graphite-700/70 pt-4">
        <Badge tone="copper">Primary mineral: {register.primaryMineral}</Badge>
        <Badge tone="warning">{register.status}</Badge>
      </div>
    </Panel>
  );
}
