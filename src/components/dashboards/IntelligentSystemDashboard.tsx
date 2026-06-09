import { BrainCircuit, Boxes, TrendingUp, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Panel } from "@/components/shared/Panel";
import { Callout } from "@/components/shared/Callout";
import { Badge } from "@/components/shared/Badge";
import { Icon } from "@/components/shared/Icon";
import {
  validationCoreStatement,
  validationBusinessQuestion,
  validationIndependenceNote,
  systemConcepts,
  systemModules,
  valueMechanisms,
  decisionStates,
  governanceRules,
  approvalFlow,
} from "@/data";

export function IntelligentSystemDashboard() {
  return (
    <div className="space-y-10">
      {/* Core statement */}
      <section>
        <Panel className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-copper-line" />
          <p className="eyebrow">The one commercial question</p>
          <p className="mt-2 text-lg font-medium text-sand-50">
            “{validationBusinessQuestion}”
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-sand-200/75">
            {validationCoreStatement}
          </p>
        </Panel>
      </section>

      {/* Concepts (Decision Room modules) */}
      <section>
        <SectionHeader
          icon={BrainCircuit}
          title="Decision-Support Modules"
          description="A businessperson's view: what the system does, in plain language."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systemConcepts.map((c) => (
            <Panel key={c.title} hover className="h-full">
              <span className="flex h-9 w-9 items-center justify-center rounded-md border border-copper-600/40 bg-copper-700/15 text-copper-300">
                <Icon name={c.icon} className="h-4 w-4" />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-sand-50">
                {c.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-sand-200/65">
                {c.description}
              </p>
            </Panel>
          ))}
        </div>
      </section>

      {/* Independence */}
      <Callout variant="info" title="Independent from the entry fee">
        {validationIndependenceNote}
      </Callout>

      {/* Core system modules */}
      <section>
        <SectionHeader
          icon={Boxes}
          title="Core System Modules"
          description="How license, field, assay and study data are organized."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {systemModules.map((m) => (
            <Panel key={m.title} hover>
              <div className="flex items-center gap-2">
                <Icon name={m.icon} className="h-4 w-4 text-copper-400" />
                <h4 className="text-sm font-medium text-sand-50">{m.title}</h4>
              </div>
              <p className="mt-2 text-xs text-sand-300/60">{m.description}</p>
            </Panel>
          ))}
        </div>
      </section>

      {/* Value mechanisms */}
      <section>
        <SectionHeader
          icon={TrendingUp}
          title="Productivity & Waste Reduction"
          description="How the digital layer creates economic value."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {valueMechanisms.map((v) => (
            <Panel key={v.title}>
              <h4 className="text-sm font-medium text-copper-300">{v.title}</h4>
              <p className="mt-1.5 text-xs leading-relaxed text-sand-200/70">
                {v.description}
              </p>
            </Panel>
          ))}
        </div>
      </section>

      {/* Governance + decision states */}
      <div className="grid gap-5 lg:grid-cols-2">
        <section>
          <SectionHeader icon={ShieldCheck} title="Digital Governance" />
          <Panel>
            <ul className="space-y-2">
              {governanceRules.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-2 text-xs leading-relaxed text-sand-200/75"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mineral-400" />
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-graphite-700/70 pt-4">
              <p className="eyebrow mb-2">Approval flow</p>
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-sand-200/70">
                {approvalFlow.map((step, i) => (
                  <span key={step} className="flex items-center gap-1.5">
                    <span className="rounded border border-graphite-700 bg-graphite-800 px-2 py-0.5">
                      {step}
                    </span>
                    {i < approvalFlow.length - 1 && (
                      <span className="text-copper-500/60">→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </Panel>
        </section>

        <section>
          <SectionHeader title="Decision States" />
          <Panel>
            <p className="mb-3 text-xs text-sand-300/60">
              Every zone and decision resolves to one controlled state:
            </p>
            <div className="flex flex-wrap gap-2">
              {decisionStates.map((s) => (
                <Badge key={s} tone="copper">
                  {s}
                </Badge>
              ))}
            </div>
          </Panel>
        </section>
      </div>
    </div>
  );
}
