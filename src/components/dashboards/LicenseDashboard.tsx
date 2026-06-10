import { MapPinned, ScrollText, Leaf, ShieldAlert } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LicenseCard } from "@/components/cards/LicenseCard";
import { EvidenceStatusBadge } from "@/components/cards/EvidenceStatusBadge";
import { AccessLevelBadge } from "@/components/cards/AccessLevelBadge";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Panel } from "@/components/shared/Panel";
import { Callout } from "@/components/shared/Callout";
import {
  licenseRegister,
  licenseRegisterRows,
  regulatoryReviewAreas,
  disclosureTiers,
  licenseRiskNotes,
} from "@/data";

export function LicenseDashboard() {
  const { t } = useTranslation();
  return (
    <div className="space-y-10">
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LicenseCard register={licenseRegister} />
        </div>
        {/* Map placeholder */}
        <Panel className="flex flex-col">
          <SectionHeader
            icon={MapPinned}
            title={t("sections.licensePerimeter.title")}
          />
          <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-md border border-dashed border-graphite-600 bg-graphite-950/60 py-10">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#2f3942 1px, transparent 1px), linear-gradient(90deg, #2f3942 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative text-center">
              <MapPinned className="mx-auto h-7 w-7 text-copper-500/70" />
              <p className="mt-2 text-xs text-sand-300/60">
                {t("license.mapPlaceholder")}
              </p>
              <p className="mt-1 text-[10px] text-sand-300/40">
                {licenseRegister.areaKm2} km² · {licenseRegister.region}
              </p>
            </div>
          </div>
        </Panel>
      </div>

      {/* License Intelligence Register */}
      <section>
        <SectionHeader
          icon={ScrollText}
          title={t("sections.licenseRegister.title")}
          description={t("sections.licenseRegister.desc")}
        />
        <div className="panel overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead>
              <tr className="border-b border-graphite-700/70 text-start">
                {[
                  t("license.table.field"),
                  t("license.table.value"),
                  t("license.table.evidence"),
                  t("license.table.disclosure"),
                  t("license.table.note"),
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
              {licenseRegisterRows.map((row) => (
                <tr
                  key={row.field}
                  className="border-b border-graphite-800/70 align-top last:border-0"
                >
                  <td className="px-4 py-3 font-medium text-sand-100">
                    {row.field}
                  </td>
                  <td className="px-4 py-3 text-sand-200/80">{row.value}</td>
                  <td className="px-4 py-3">
                    <EvidenceStatusBadge status={row.evidenceStatus} />
                  </td>
                  <td className="px-4 py-3">
                    <AccessLevelBadge level={row.disclosure} />
                  </td>
                  <td className="px-4 py-3 text-[11px] text-sand-300/55">
                    {row.note ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Regulatory + disclosure */}
      <div className="grid gap-5 lg:grid-cols-2">
        <section>
          <SectionHeader
            icon={Leaf}
            title={t("sections.regulatory.title")}
            description={t("sections.regulatory.desc")}
          />
          <Panel>
            <ul className="grid gap-3 sm:grid-cols-2">
              {regulatoryReviewAreas.map((area) => (
                <li key={area.area} className="text-xs">
                  <p className="font-medium text-sand-100">{area.area}</p>
                  <p className="text-sand-300/55">{area.note}</p>
                </li>
              ))}
            </ul>
          </Panel>
        </section>

        <section>
          <SectionHeader
            icon={ShieldAlert}
            title={t("sections.disclosureControl.title")}
            description={t("sections.disclosureControl.desc")}
          />
          <Panel>
            <ul className="space-y-3">
              {disclosureTiers.map((tier) => (
                <li
                  key={tier.level}
                  className="border-b border-graphite-800/70 pb-3 last:border-0 last:pb-0"
                >
                  <p className="text-sm font-medium text-sand-100">
                    {tier.level}
                  </p>
                  <p className="text-[11px] text-copper-300/80">{tier.audience}</p>
                  <p className="mt-0.5 text-xs text-sand-300/60">
                    {tier.content}
                  </p>
                </li>
              ))}
            </ul>
          </Panel>
        </section>
      </div>

      <Callout variant="warning" title={t("license.riskNotes")}>
        <ul className="mt-1 space-y-1.5">
          {licenseRiskNotes.map((note) => (
            <li key={note} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
              {note}
            </li>
          ))}
        </ul>
      </Callout>
    </div>
  );
}
