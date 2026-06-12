import { useTranslation } from "react-i18next";
import { ArrowRight, Pause, RotateCcw } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import { Panel } from "@/components/shared/Panel";
import type { DecisionGateRecord } from "@/types/evidence";

const statusTone = {
  "in-progress": "caution",
  open: "copper",
  pending: "neutral",
} as const;

const riskTone = {
  high: "warning",
  medium: "copper",
  low: "mineral",
} as const;

export function DecisionGateCard({ gate }: { gate: DecisionGateRecord }) {
  const { t } = useTranslation();
  return (
    <Panel hover className="flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-[10px] font-mono text-sand-300/50">
            {gate.gate_id} · {gate.phase}
          </span>
          <h3 className="mt-1 text-sm font-medium text-sand-50">
            {gate.decision_question}
          </h3>
        </div>
        <Badge tone={statusTone[gate.current_status]}>
          {t(`eb.gateStatus.${gate.current_status}`)}
        </Badge>
      </div>

      <dl className="mt-3 space-y-2 text-xs">
        <div>
          <dt className="text-sand-300/50">{t("decision.requiredEvidence")}</dt>
          <dd className="text-sand-200/80">{gate.required_evidence}</dd>
        </div>
      </dl>

      <div className="mt-3 grid grid-cols-3 gap-1.5 text-[10px]">
        <div className="rounded border border-mineral-600/30 bg-mineral-700/10 p-2">
          <p className="mb-0.5 flex items-center gap-1 font-medium text-mineral-300">
            <ArrowRight className="h-3 w-3" /> {t("eb.goCondition")}
          </p>
          <p className="text-sand-300/65">{gate.go_condition}</p>
        </div>
        <div className="rounded border border-copper-600/30 bg-copper-700/10 p-2">
          <p className="mb-0.5 flex items-center gap-1 font-medium text-copper-300">
            <Pause className="h-3 w-3" /> {t("eb.holdCondition")}
          </p>
          <p className="text-sand-300/65">{gate.hold_condition}</p>
        </div>
        <div className="rounded border border-amber-600/30 bg-amber-700/10 p-2">
          <p className="mb-0.5 flex items-center gap-1 font-medium text-amber-300">
            <RotateCcw className="h-3 w-3" /> {t("eb.redesignCondition")}
          </p>
          <p className="text-sand-300/65">{gate.redesign_condition}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-graphite-700/70 pt-3">
        <Badge tone="neutral">{gate.owner}</Badge>
        <Badge tone={riskTone[gate.risk_level]}>
          {t("eb.risk")}: {t(`eb.severity.${gate.risk_level}`)}
        </Badge>
      </div>
      <p className="mt-2 text-[11px] text-copper-300/90">
        <span className="text-sand-300/50">{t("decision.nextAction")}: </span>
        {gate.next_action}
      </p>
    </Panel>
  );
}
