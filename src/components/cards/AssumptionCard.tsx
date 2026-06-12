import { NumberStatusBadge } from "./NumberStatusBadge";
import { Panel } from "@/components/shared/Panel";
import type { AssumptionRow } from "@/types";

export function AssumptionCard({ assumption }: { assumption: AssumptionRow }) {
  return (
    <Panel hover>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-mono text-sand-300/50">
            {assumption.id} · {assumption.category}
          </p>
          <h3 className="mt-1 text-sm font-medium text-sand-50">
            {assumption.assumption}
          </h3>
        </div>
        <span className="shrink-0 text-base font-semibold text-copper-300">
          {assumption.value}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <NumberStatusBadge status={assumption.numberStatus} />
        <span className="text-[11px] text-sand-300/60">
          Validation: {assumption.validationRequired}
        </span>
      </div>
    </Panel>
  );
}
