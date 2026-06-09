import { AlertTriangle, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Panel } from "@/components/shared/Panel";
import type { RiskItem } from "@/types";

const severityTone = {
  Low: "mineral",
  Medium: "copper",
  High: "warning",
} as const;

export function RiskCard({ risk }: { risk: RiskItem }) {
  return (
    <Panel>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-copper-400" />
          <span className="text-xs font-medium uppercase tracking-wide text-sand-300/60">
            {risk.category}
          </span>
        </div>
        <Badge tone={severityTone[risk.severity]}>{risk.severity}</Badge>
      </div>
      <p className="mt-3 text-sm text-sand-100">{risk.risk}</p>
      <div className="mt-3 flex items-start gap-2 rounded-md border border-graphite-700 bg-graphite-800/60 p-3">
        <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mineral-400" />
        <p className="text-xs leading-relaxed text-sand-200/70">{risk.control}</p>
      </div>
    </Panel>
  );
}
