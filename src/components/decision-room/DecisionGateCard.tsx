import { Badge } from "@/components/shared/Badge";
import { Panel } from "@/components/shared/Panel";
import type { DecisionGate, DecisionState } from "@/types";

const stateMeta: Record<DecisionState, { label: string; tone: "strong" | "caution" | "warning" | "neutral" }> = {
  go: { label: "Go", tone: "strong" },
  "ready-for-operator-review": { label: "Ready for review", tone: "strong" },
  complete: { label: "Complete", tone: "strong" },
  "in-progress": { label: "In progress", tone: "caution" },
  hold: { label: "Hold", tone: "warning" },
  redesign: { label: "Redesign", tone: "warning" },
  "more-data-required": { label: "More data required", tone: "warning" },
  "internal-only": { label: "Internal only", tone: "neutral" },
  "not-started": { label: "Not started", tone: "neutral" },
};

export function DecisionGateCard({ gate }: { gate: DecisionGate }) {
  const meta = stateMeta[gate.status];
  return (
    <Panel hover>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-graphite-700 bg-graphite-800 text-xs font-semibold text-copper-300">
            {gate.index}
          </span>
          <h3 className="text-sm font-medium text-sand-50">{gate.title}</h3>
        </div>
        <Badge tone={meta.tone}>{meta.label}</Badge>
      </div>
      <dl className="mt-3 space-y-2 text-xs">
        <div>
          <dt className="text-sand-300/50">Required evidence</dt>
          <dd className="text-sand-200/80">{gate.requiredEvidence}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <div>
            <dt className="text-sand-300/50">Owner</dt>
            <dd className="text-sand-200/80">{gate.owner}</dd>
          </div>
        </div>
        <div>
          <dt className="text-sand-300/50">Next action</dt>
          <dd className="text-copper-300/90">{gate.nextAction}</dd>
        </div>
      </dl>
    </Panel>
  );
}
