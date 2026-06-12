import { NumberStatusBadge } from "./NumberStatusBadge";
import { Panel } from "@/components/shared/Panel";
import type { KeyMetric } from "@/types";

export function MetricCard({ metric }: { metric: KeyMetric }) {
  return (
    <Panel hover className="flex flex-col justify-between">
      <div>
        <p className="eyebrow">{metric.label}</p>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-sand-50">
          {metric.value}
          {metric.unit && (
            <span className="ml-1 text-sm font-normal text-sand-300/70">
              {metric.unit}
            </span>
          )}
        </p>
      </div>
      <div className="mt-4 space-y-2">
        <NumberStatusBadge status={metric.numberStatus} />
        {metric.note && (
          <p className="text-[11px] leading-relaxed text-sand-300/60">
            {metric.note}
          </p>
        )}
      </div>
    </Panel>
  );
}
