import {
  Gavel,
  ShieldAlert,
  Workflow,
  CircleDot,
  Activity,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Panel } from "@/components/shared/Panel";
import { Badge } from "@/components/shared/Badge";
import { Callout } from "@/components/shared/Callout";
import { DecisionGateCard } from "@/components/decision-room/DecisionGateCard";
import {
  decisionGateRecords,
  riskFlags,
  calculationReviewItems,
  validationWorkstreams,
  validationGaps,
  dashboardMetrics,
} from "@/evidence-base";

const severityTone = {
  severe: "warning",
  high: "warning",
  medium: "copper",
  low: "mineral",
} as const;

export function DecisionRoomDashboard() {
  const { t } = useTranslation();
  const { gates } = dashboardMetrics;

  const stats = [
    { label: t("eb.gates"), value: gates.total },
    { label: t("eb.gateStatus.in-progress"), value: gates.in_progress },
    { label: t("eb.gateStatus.open"), value: gates.open },
    { label: t("eb.gateStatus.pending"), value: gates.pending },
    { label: t("eb.validationGaps"), value: dashboardMetrics.validation_gaps_count },
  ];

  return (
    <div className="space-y-10">
      {/* Status strip */}
      <section>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <Panel key={s.label} className="text-center">
              <p className="text-2xl font-semibold text-copper-300">{s.value}</p>
              <p className="mt-1 text-[11px] text-sand-300/60">{s.label}</p>
            </Panel>
          ))}
        </div>
      </section>

      {/* Calculation review — AIPS-014 */}
      {calculationReviewItems.map((item) => (
        <Callout key={item.item_id} variant="warning" title={`${item.item_id} · ${item.title}`}>
          <p>{item.description}</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            <p>
              <span className="font-medium text-sand-100">{t("eb.framing")}: </span>
              {item.framing}
            </p>
            <p>
              <span className="font-medium text-sand-100">
                {t("eb.consequence")}:{" "}
              </span>
              {item.consequence}
            </p>
            <p className="flex items-center gap-2">
              <Badge tone="warning">{item.decision_gate}</Badge>
              <Badge tone="neutral">{item.owner}</Badge>
            </p>
          </div>
        </Callout>
      ))}

      {/* Decision gates */}
      <section>
        <SectionHeader
          icon={Gavel}
          title={t("eb.gates")}
          description={t("sections.decisionGates.desc")}
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {decisionGateRecords.map((gate) => (
            <DecisionGateCard key={gate.gate_id} gate={gate} />
          ))}
        </div>
      </section>

      {/* Risk flags */}
      <section>
        <SectionHeader
          icon={ShieldAlert}
          title={t("eb.riskFlags")}
          description={t("eb.riskFlagsDesc")}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskFlags.map((risk) => (
            <Panel key={risk.risk_id}>
              <div className="flex items-start justify-between gap-3">
                <span className="text-[10px] font-mono text-sand-300/50">
                  {risk.risk_id}
                </span>
                <Badge tone={severityTone[risk.severity]}>
                  {t(`eb.severity.${risk.severity}`)}
                </Badge>
              </div>
              <p className="mt-2 text-sm text-sand-100">{risk.flag}</p>
              <div className="mt-3 rounded-md border border-graphite-700 bg-graphite-800/60 p-3">
                <p className="text-[11px] leading-relaxed text-sand-200/70">
                  <span className="font-medium text-mineral-300">
                    {t("eb.control")}:{" "}
                  </span>
                  {risk.control}
                </p>
              </div>
              {risk.linked.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {risk.linked.map((l) => (
                    <Badge key={l} tone="sand">
                      {l}
                    </Badge>
                  ))}
                </div>
              )}
            </Panel>
          ))}
        </div>
      </section>

      {/* Validation workstreams + gaps */}
      <div className="grid gap-5 lg:grid-cols-2">
        <section>
          <SectionHeader icon={Workflow} title={t("eb.workstreams")} />
          <div className="space-y-3">
            {validationWorkstreams.map((ws) => (
              <Panel key={ws.id}>
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm font-medium text-sand-50">{ws.name}</h4>
                  <div className="flex flex-wrap gap-1">
                    {ws.gates.map((g) => (
                      <Badge key={g} tone="copper">
                        {g}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {ws.items.map((it) => (
                    <Badge key={it} tone="neutral">
                      {it}
                    </Badge>
                  ))}
                </div>
              </Panel>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader icon={CircleDot} title={t("eb.validationGaps")} />
          <Panel>
            <ul className="space-y-2">
              {validationGaps.map((gap) => (
                <li
                  key={gap}
                  className="flex items-start gap-2 text-xs leading-relaxed text-sand-200/75"
                >
                  <Activity className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                  {gap}
                </li>
              ))}
            </ul>
          </Panel>
        </section>
      </div>
    </div>
  );
}
