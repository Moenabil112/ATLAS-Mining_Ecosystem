import {
  MapPin,
  FlaskConical,
  Layers,
  Waves,
  FileText,
  ClipboardCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { EvidenceStatusBadge } from "@/components/cards/EvidenceStatusBadge";
import { NumberStatusBadge } from "@/components/cards/NumberStatusBadge";
import { AccessLevelBadge } from "@/components/cards/AccessLevelBadge";
import { ClaimCard } from "@/components/cards/ClaimCard";
import { SourceDocCard } from "@/components/data-room/SourceDocCard";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Panel } from "@/components/shared/Panel";
import { Callout } from "@/components/shared/Callout";
import { Badge } from "@/components/shared/Badge";
import { EvidenceMaturityChart } from "@/components/charts/EvidenceMaturityChart";
import {
  fieldVisit,
  assayRegister,
  assayHighlights,
  trenchRegister,
  sampleCollection,
  fieldConfidenceMatrix,
  geophysicsRecord,
  claimsForCategory,
  sourceDocuments,
} from "@/evidence-base";

export function EvidenceDashboard() {
  const { t } = useTranslation();
  const fieldLabClaims = [
    ...claimsForCategory("field-evidence"),
    ...claimsForCategory("assay"),
  ];
  const fieldLabDocs = sourceDocuments.filter(
    (d) => d.source_layer === "field-lab-evidence",
  );

  return (
    <div className="space-y-10">
      {/* Field visit */}
      <section>
        <SectionHeader
          icon={MapPin}
          title={t("sections.fieldVisit.title")}
          description={fieldVisit.report_title}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          <Panel className="lg:col-span-2">
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-sand-300/50">
                  {t("eb.visitPeriod")}
                </dt>
                <dd className="text-sm text-sand-100">{fieldVisit.visit_period}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-sand-300/50">
                  {t("eb.siteAccess")}
                </dt>
                <dd className="text-sm text-sand-100">{fieldVisit.site_access}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-sand-300/50">
                  {t("sections.trenchRegister.title")}
                </dt>
                <dd className="text-sm text-sand-100">
                  {fieldVisit.trenching.total_length_m} m ·{" "}
                  {fieldVisit.trenching.trench_count} trenches
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wide text-sand-300/50">
                  {t("evidence.table.sample")}
                </dt>
                <dd className="text-sm text-sand-100">
                  {fieldVisit.sampling.samples_submitted} → {fieldVisit.sampling.lab}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[11px] uppercase tracking-wide text-sand-300/50">
                  {t("eb.areasCovered")}
                </dt>
                <dd className="mt-1 flex flex-wrap gap-1.5">
                  {fieldVisit.areas_covered.map((a) => (
                    <Badge key={a} tone="sand">
                      {a}
                    </Badge>
                  ))}
                </dd>
              </div>
            </dl>
          </Panel>
          <Panel>
            <p className="eyebrow mb-2">{t("eb.recommendations")}</p>
            <ul className="space-y-2">
              {fieldVisit.recommendations.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-2 text-xs leading-relaxed text-sand-200/70"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper-500" />
                  {r}
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <EvidenceStatusBadge status={fieldVisit.evidence_status} />
            </div>
          </Panel>
        </div>
      </section>

      {/* Assay highlights */}
      <section>
        <SectionHeader
          icon={FlaskConical}
          title={t("sections.assayHighlights.title")}
          description={t("sections.assayHighlights.desc")}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {assayHighlights.map((a) => (
            <Panel key={a.sample_id} hover className="text-center">
              <p className="text-3xl font-semibold tracking-tight text-copper-300">
                {a.cu_percent.toFixed(2)}
                <span className="ml-1 text-base font-normal text-sand-300/70">
                  {t("common.cuUnit")}
                </span>
              </p>
              <p className="mt-1 text-xs font-medium text-sand-100">
                {a.sample_id}
              </p>
              <p className="mt-0.5 text-[10px] text-sand-300/50">{a.report}</p>
              <div className="mt-3 flex justify-center">
                <Badge tone="caution">{t("common.selectedSampleNote")}</Badge>
              </div>
            </Panel>
          ))}
        </div>
      </section>

      {/* AFRILAB assay register (full table) */}
      <section>
        <SectionHeader
          icon={FlaskConical}
          title={t("eb.assayRegister")}
          description={t("eb.assayRegisterDesc", {
            registered: assayRegister.registered_results,
            total: assayRegister.total_samples_submitted,
          })}
        />
        <div className="panel overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b border-graphite-700/70 text-start">
                {[
                  t("eb.table.sample"),
                  t("eb.table.cu"),
                  t("eb.table.trench"),
                  t("eb.table.report"),
                  t("eb.table.analysisDate"),
                  t("eb.table.status"),
                ].map((h) => (
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
              {assayRegister.records.map((r) => (
                <tr
                  key={r.sample_id}
                  className="border-b border-graphite-800/70 last:border-0"
                >
                  <td className="px-4 py-2.5 font-mono text-xs text-sand-100">
                    {r.sample_id}
                  </td>
                  <td className="px-4 py-2.5 font-semibold text-copper-300">
                    {r.cu_percent}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-sand-200/70">
                    {r.trench_id}
                  </td>
                  <td className="px-4 py-2.5 text-[11px] text-sand-300/55">
                    {r.report}
                  </td>
                  <td className="px-4 py-2.5 text-xs text-sand-300/60">
                    {r.analysis_date}
                  </td>
                  <td className="px-4 py-2.5">
                    <NumberStatusBadge status={r.number_status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Callout variant="warning" title={t("common.selectedSampleNote")}>
          {t("eb.samplesRegistered", {
            registered: sampleCollection.registered_with_ids,
            total: sampleCollection.total_samples,
          })}{" "}
          · {t("eb.pendingCount", { n: sampleCollection.pending_ids })}. {sampleCollection.note}
        </Callout>
      </section>

      {/* Trench register + maturity chart */}
      <div className="grid gap-5 lg:grid-cols-2">
        <section>
          <SectionHeader
            icon={Layers}
            title={t("sections.trenchRegister.title")}
            description={t("sections.trenchRegister.desc")}
          />
          <div className="space-y-3">
            {trenchRegister.map((tr) => (
              <Panel key={tr.trench_id}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-medium text-sand-50">
                      {tr.trench_id}
                    </h4>
                    <p className="mt-0.5 text-xs text-sand-300/60">{tr.evidence}</p>
                  </div>
                  <AccessLevelBadge level={tr.access_level} />
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {tr.samples.map((s) => (
                    <Badge key={s} tone="neutral">
                      {s}
                    </Badge>
                  ))}
                </div>
              </Panel>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title={t("sections.evidenceMaturity.title")} />
          <Panel>
            <EvidenceMaturityChart />
          </Panel>
          <div className="mt-4">
            <SectionHeader
              icon={Waves}
              title={t("eb.geophysics")}
            />
            <Panel>
              <p className="text-sm text-sand-100">
                {geophysicsRecord.recommendation}
              </p>
              <p className="mt-2 text-xs text-sand-300/60">
                {geophysicsRecord.drilling_context}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <EvidenceStatusBadge status={geophysicsRecord.evidence_status} />
                <Badge tone="copper">{geophysicsRecord.decision_gate}</Badge>
              </div>
            </Panel>
          </div>
        </section>
      </div>

      {/* Evidence confidence matrix */}
      <section>
        <SectionHeader
          icon={ClipboardCheck}
          title={t("sections.confidenceMatrix.title")}
          description={t("sections.confidenceMatrix.desc")}
        />
        <div className="panel overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-graphite-700/70 text-start">
                {[
                  t("evidence.table.item"),
                  t("evidence.table.status"),
                  t("evidence.table.confidence"),
                  t("evidence.table.use"),
                ].map((h) => (
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
              {fieldConfidenceMatrix.map((row) => (
                <tr
                  key={row.item}
                  className="border-b border-graphite-800/70 last:border-0"
                >
                  <td className="px-4 py-3 text-sand-100">{row.item}</td>
                  <td className="px-4 py-3">
                    <EvidenceStatusBadge status={row.status} />
                  </td>
                  <td className="px-4 py-3 capitalize text-sand-200/80">
                    {row.confidence}
                  </td>
                  <td className="px-4 py-3 text-xs text-sand-300/60">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Registered claims */}
      <section>
        <SectionHeader
          icon={ClipboardCheck}
          title={t("eb.registeredClaims")}
          description={t("eb.registeredClaimsDesc")}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {fieldLabClaims.map((c) => (
            <ClaimCard key={c.claim_id} claim={c} />
          ))}
        </div>
      </section>

      {/* Source documents */}
      <section>
        <SectionHeader
          icon={FileText}
          title={t("eb.sourceDocuments")}
          description={t("eb.sourceDocumentsDesc")}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {fieldLabDocs.map((d) => (
            <SourceDocCard key={d.document_id} doc={d} />
          ))}
        </div>
      </section>
    </div>
  );
}
