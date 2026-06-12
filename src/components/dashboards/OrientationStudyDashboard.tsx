import { FileBarChart, Workflow, Droplets, Coins, Layers3 } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Panel } from "@/components/shared/Panel";
import { Callout } from "@/components/shared/Callout";
import { Badge } from "@/components/shared/Badge";
import { NumberStatusBadge } from "@/components/cards/NumberStatusBadge";
import { AssumptionCard } from "@/components/cards/AssumptionCard";
import { CapexDistributionChart } from "@/components/charts/CapexDistributionChart";
import {
  aipsStudy,
  productionScenario,
  capex,
  processSteps,
  infrastructure,
  scenarioCases,
  assumptionRegister,
  studyValidationNeeds,
  materialBalanceWarning,
} from "@/data";

const scenarioTone = {
  base: "copper",
  upside: "mineral",
  expansion: "sand",
} as const;

export function OrientationStudyDashboard() {
  return (
    <div className="space-y-10">
      {/* Study summary */}
      <section>
        <SectionHeader
          icon={FileBarChart}
          title="A.I.P.S Study Summary"
          description={`${aipsStudy.title} — prepared by ${aipsStudy.preparedBy}.`}
        />
        <Callout variant="info">{aipsStudy.coreMessage}</Callout>
      </section>

      {/* Production scenario + CAPEX */}
      <div className="grid gap-5 lg:grid-cols-2">
        <section>
          <SectionHeader title="Production Concept (Base Case)" />
          <Panel>
            <dl className="space-y-3">
              {productionScenario.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center justify-between gap-3 border-b border-graphite-800/70 pb-3 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-sand-200/75">{p.label}</dt>
                  <dd className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-sand-50">
                      {p.value}
                    </span>
                    <NumberStatusBadge status={p.numberStatus} />
                  </dd>
                </div>
              ))}
            </dl>
          </Panel>
        </section>

        <section>
          <SectionHeader
            icon={Coins}
            title="CAPEX Framework"
            description={`Preliminary total: ${capex.totalMad}M MAD HT`}
          />
          <Panel>
            <CapexDistributionChart />
            <div className="mt-3">
              <NumberStatusBadge status="preliminary-base-case" />
            </div>
          </Panel>
        </section>
      </div>

      <Callout variant="warning" title="Preliminary CAPEX orientation — subject to engineering update">
        {capex.note}
      </Callout>

      {/* Process flowsheet */}
      <section>
        <SectionHeader
          icon={Workflow}
          title="Process Flowsheet (Sulfide Route)"
          description="Flotation-based processing concept from the orientation study."
        />
        <Panel>
          <ol className="flex flex-wrap items-center gap-2">
            {processSteps.map((step, i) => (
              <li key={step.order} className="flex items-center gap-2">
                <span className="flex items-center gap-2 rounded-md border border-graphite-700 bg-graphite-800 px-3 py-1.5 text-xs text-sand-100">
                  <span className="font-mono text-[10px] text-copper-400">
                    {step.order}
                  </span>
                  {step.step}
                </span>
                {i < processSteps.length - 1 && (
                  <span className="text-copper-500/50">→</span>
                )}
              </li>
            ))}
          </ol>
        </Panel>
      </section>

      {/* Infrastructure */}
      <section>
        <SectionHeader
          icon={Droplets}
          title="Water, Power & Tailings Assumptions"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {infrastructure.map((item) => (
            <Panel key={item.label} hover>
              <p className="text-[11px] uppercase tracking-wide text-sand-300/50">
                {item.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-sand-50">
                {item.value}
              </p>
              <div className="mt-2">
                <NumberStatusBadge status={item.numberStatus} />
              </div>
            </Panel>
          ))}
        </div>
      </section>

      {/* Three scenarios */}
      <section>
        <SectionHeader
          icon={Layers3}
          title="Base Case · Upside Case · Expansion Case"
          description="The orientation study is the starting case — not the project ceiling."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {scenarioCases.map((sc) => (
            <Panel key={sc.id} className="flex flex-col">
              <Badge tone={scenarioTone[sc.id]}>{sc.title}</Badge>
              <p className="mt-3 text-xs leading-relaxed text-sand-300/65">
                {sc.language}
              </p>
              <ul className="mt-3 flex-1 space-y-1.5">
                {sc.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-xs text-sand-200/80"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper-500" />
                    {pt}
                  </li>
                ))}
              </ul>
              {sc.caveat && (
                <p className="mt-3 border-t border-graphite-700/70 pt-3 text-[11px] italic text-amber-200/70">
                  {sc.caveat}
                </p>
              )}
            </Panel>
          ))}
        </div>
      </section>

      {/* Material balance warning */}
      <Callout variant="warning" title="Validation item — feasibility upgrade requirement">
        {materialBalanceWarning}
      </Callout>

      {/* Assumption register preview */}
      <section>
        <SectionHeader
          title="Assumption Register (preview)"
          description="Every study assumption is tracked with a maturity status and a validation requirement."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {assumptionRegister.slice(0, 9).map((a) => (
            <AssumptionCard key={a.id} assumption={a} />
          ))}
        </div>
        <div className="mt-4">
          <SectionHeader title="Validation Needs" />
          <div className="flex flex-wrap gap-2">
            {studyValidationNeeds.map((n) => (
              <Badge key={n} tone="mineral">
                {n}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
