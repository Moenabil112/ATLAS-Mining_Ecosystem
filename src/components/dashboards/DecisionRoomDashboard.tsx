import {
  Gavel,
  ListTodo,
  ShieldAlert,
  CheckCircle2,
  Activity,
  Flag,
  CircleDot,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Panel } from "@/components/shared/Panel";
import { Badge } from "@/components/shared/Badge";
import { RiskCard } from "@/components/cards/RiskCard";
import { DecisionGateCard } from "@/components/decision-room/DecisionGateCard";
import {
  nextDecisions,
  decisionGates,
  riskControls,
  claimControlsStatus,
  feasibilityUpgradeStatus,
  operatingEntryStatus,
  unresolvedValidationItems,
} from "@/data";

export function DecisionRoomDashboard() {
  const { t } = useTranslation();
  return (
    <div className="space-y-10">
      {/* Status strip */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Panel>
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-copper-400" />
            <p className="eyebrow">{t("dataRoom.feasibilityStatus")}</p>
          </div>
          <p className="mt-2 text-sm font-medium text-sand-50">
            {feasibilityUpgradeStatus.label}
          </p>
          <p className="mt-1 text-xs text-sand-300/60">
            {feasibilityUpgradeStatus.summary}
          </p>
        </Panel>
        <Panel>
          <div className="flex items-center gap-2">
            <Flag className="h-4 w-4 text-copper-400" />
            <p className="eyebrow">{t("dataRoom.operatingStatus")}</p>
          </div>
          <p className="mt-2 text-sm font-medium text-sand-50">
            {operatingEntryStatus.stage}
          </p>
          <p className="mt-1 text-xs text-sand-300/60">
            {operatingEntryStatus.summary}
          </p>
        </Panel>
      </div>

      {/* Next decisions */}
      <section>
        <SectionHeader
          icon={ListTodo}
          title={t("sections.nextDecisions.title")}
          description={t("sections.nextDecisions.desc")}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {nextDecisions.map((d) => (
            <Panel key={d.title} hover>
              <h3 className="text-sm font-medium text-sand-50">{d.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-sand-200/70">
                {d.detail}
              </p>
              <div className="mt-3">
                <Badge tone="copper">{d.owner}</Badge>
              </div>
            </Panel>
          ))}
        </div>
      </section>

      {/* Decision gates */}
      <section>
        <SectionHeader
          icon={Gavel}
          title={t("sections.decisionGates.title")}
          description={t("sections.decisionGates.desc")}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {decisionGates.map((gate) => (
            <DecisionGateCard key={gate.id} gate={gate} />
          ))}
        </div>
      </section>

      {/* Risk controls */}
      <section>
        <SectionHeader
          icon={ShieldAlert}
          title={t("sections.riskControls.title")}
          description={t("sections.riskControls.desc")}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskControls.map((risk) => (
            <RiskCard key={risk.id} risk={risk} />
          ))}
        </div>
      </section>

      {/* Claim controls + unresolved */}
      <div className="grid gap-5 lg:grid-cols-2">
        <section>
          <SectionHeader
            icon={CheckCircle2}
            title={t("sections.claimControls.title")}
            description={t("sections.claimControls.desc")}
          />
          <Panel>
            <ul className="space-y-2">
              {claimControlsStatus.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2 text-xs leading-relaxed text-sand-200/75"
                >
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mineral-400" />
                  {c}
                </li>
              ))}
            </ul>
          </Panel>
        </section>

        <section>
          <SectionHeader
            icon={CircleDot}
            title={t("sections.unresolvedItems.title")}
            description={t("sections.unresolvedItems.desc")}
          />
          <Panel>
            <ul className="space-y-2">
              {unresolvedValidationItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs leading-relaxed text-sand-200/75"
                >
                  <CircleDot className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Panel>
        </section>
      </div>
    </div>
  );
}
