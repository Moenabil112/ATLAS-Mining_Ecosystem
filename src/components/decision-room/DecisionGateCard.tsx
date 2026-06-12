import { useTranslation } from "react-i18next";
import { Badge } from "@/components/shared/Badge";
import { Panel } from "@/components/shared/Panel";
import type { DecisionGate, DecisionState } from "@/types";

const stateTone: Record<DecisionState, "strong" | "caution" | "warning" | "neutral"> = {
  go: "strong",
  "ready-for-operator-review": "strong",
  complete: "strong",
  "in-progress": "caution",
  hold: "warning",
  redesign: "warning",
  "more-data-required": "warning",
  "internal-only": "neutral",
  "not-started": "neutral",
};

export function DecisionGateCard({ gate }: { gate: DecisionGate }) {
  const { t } = useTranslation();
  return (
    <Panel hover>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-graphite-700 bg-graphite-800 text-xs font-semibold text-copper-300">
            {gate.index}
          </span>
          <h3 className="text-sm font-medium text-sand-50">{gate.title}</h3>
        </div>
        <Badge tone={stateTone[gate.status]}>
          {t(`decisionState.${gate.status}`)}
        </Badge>
      </div>
      <dl className="mt-3 space-y-2 text-xs">
        <div>
          <dt className="text-sand-300/50">{t("decision.requiredEvidence")}</dt>
          <dd className="text-sand-200/80">{gate.requiredEvidence}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <div>
            <dt className="text-sand-300/50">{t("decision.owner")}</dt>
            <dd className="text-sand-200/80">{gate.owner}</dd>
          </div>
        </div>
        <div>
          <dt className="text-sand-300/50">{t("decision.nextAction")}</dt>
          <dd className="text-copper-300/90">{gate.nextAction}</dd>
        </div>
      </dl>
    </Panel>
  );
}
