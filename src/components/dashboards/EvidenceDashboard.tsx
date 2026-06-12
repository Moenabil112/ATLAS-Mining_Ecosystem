import { MapPin, FlaskConical, Layers, ListChecks } from "lucide-react";
import { AssayHighlightCard } from "@/components/cards/AssayHighlightCard";
import { EvidenceStatusBadge } from "@/components/cards/EvidenceStatusBadge";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Panel } from "@/components/shared/Panel";
import { Callout } from "@/components/shared/Callout";
import { Badge } from "@/components/shared/Badge";
import { EvidenceMaturityChart } from "@/components/charts/EvidenceMaturityChart";
import {
  fieldVisit,
  assayHighlights,
  trenchSampleRegister,
  evidenceConfidenceMatrix,
  evidenceNextActions,
  evidenceInterpretation,
} from "@/data";

export function EvidenceDashboard() {
  return (
    <div className="space-y-10">
      {/* Field visit */}
      <section>
        <SectionHeader
          icon={MapPin}
          title="Field Visit Summary"
          description={fieldVisit.source}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          <Panel className="lg:col-span-2">
            <dl className="grid gap-4 sm:grid-cols-2">
              {fieldVisit.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[11px] uppercase tracking-wide text-sand-300/50">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-sand-100">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Panel>
          <Panel>
            <h3 className="mb-3 text-sm font-medium text-sand-50">
              Trenching & sampling
            </h3>
            <ul className="space-y-2">
              {fieldVisit.summaryPoints.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 text-xs leading-relaxed text-sand-200/70"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper-500" />
                  {p}
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>

      {/* Assay highlights */}
      <section>
        <SectionHeader
          icon={FlaskConical}
          title="AFRILAB Assay Highlights"
          description="Selected high-grade copper assays. These are selected-sample evidence — not average project grade."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {assayHighlights.map((assay) => (
            <AssayHighlightCard key={assay.sampleId} assay={assay} />
          ))}
        </div>
        <Callout variant="warning" title="Selected-sample evidence — not average project grade">
          {evidenceInterpretation}
        </Callout>
      </section>

      {/* Trench register + confidence matrix */}
      <div className="grid gap-5 lg:grid-cols-2">
        <section>
          <SectionHeader
            icon={Layers}
            title="Trench & Sample Register (preview)"
            description="29 samples submitted to AFRILAB; full register held under NDA."
          />
          <div className="panel overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-graphite-700/70 text-left">
                  {["Sample", "Cu %", "Report", "Confidence"].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-2.5 text-xs font-medium uppercase tracking-wide text-sand-300/55"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {trenchSampleRegister.map((row) => (
                  <tr
                    key={row.sampleId}
                    className="border-b border-graphite-800/70 last:border-0"
                  >
                    <td className="px-4 py-2.5 font-mono text-xs text-sand-100">
                      {row.sampleId}
                    </td>
                    <td className="px-4 py-2.5 font-medium text-copper-300">
                      {row.cuPercent}
                    </td>
                    <td className="px-4 py-2.5 text-xs text-sand-300/60">
                      {row.reportNumber}
                    </td>
                    <td className="px-4 py-2.5 text-xs text-sand-200/70">
                      {row.confidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <SectionHeader title="Evidence Maturity Distribution" />
          <Panel>
            <EvidenceMaturityChart />
          </Panel>
        </section>
      </div>

      {/* Confidence matrix */}
      <section>
        <SectionHeader
          title="Evidence Confidence Matrix"
          description="Every evidence item carries a maturity status and confidence level."
        />
        <div className="panel overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-graphite-700/70 text-left">
                {["Evidence item", "Status", "Confidence", "Use"].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-sand-300/55"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {evidenceConfidenceMatrix.map((row) => (
                <tr
                  key={row.item}
                  className="border-b border-graphite-800/70 last:border-0"
                >
                  <td className="px-4 py-3 text-sand-100">{row.item}</td>
                  <td className="px-4 py-3">
                    <EvidenceStatusBadge status={row.status} />
                  </td>
                  <td className="px-4 py-3 text-sand-200/80">{row.confidence}</td>
                  <td className="px-4 py-3 text-xs text-sand-300/60">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Next actions */}
      <section>
        <SectionHeader icon={ListChecks} title="Required Next Validation Actions" />
        <div className="flex flex-wrap gap-2">
          {evidenceNextActions.map((a) => (
            <Badge key={a} tone="mineral">
              {a}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
