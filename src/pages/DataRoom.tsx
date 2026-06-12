import { useTranslation } from "react-i18next";
import { FolderLock, Grid3x3, BarChart3, SplitSquareHorizontal } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { EvidenceFolder } from "@/components/data-room/EvidenceFolder";
import { EvidenceAccessMatrix } from "@/components/data-room/EvidenceAccessMatrix";
import { DisclosureRulesPanel } from "@/components/data-room/DisclosureRulesPanel";
import { AccessLevelsChart } from "@/components/charts/AccessLevelsChart";
import { Panel } from "@/components/shared/Panel";
import { Badge } from "@/components/shared/Badge";
import { AccessLevelBadge } from "@/components/cards/AccessLevelBadge";
import {
  dataRoomFolderRecords,
  accessControlMatrix,
  investorVisibleClaims,
  ndaRequiredClaims,
  restrictedInternalClaims,
} from "@/evidence-base";
import type { AccessLevel } from "@/types";

export function DataRoom() {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        eyebrow={t("pages.dataRoom.eyebrow")}
        title={t("pages.dataRoom.title")}
        description={t("pages.dataRoom.description")}
      />

      <div className="space-y-10">
        {/* Access levels + chart */}
        <div className="grid gap-5 lg:grid-cols-3">
          <Panel className="lg:col-span-2">
            <SectionHeader
              icon={FolderLock}
              title={t("sections.accessLevels.title")}
              description={t("sections.accessLevels.desc")}
            />
            <div className="flex flex-wrap gap-2">
              {accessControlMatrix.levels.map((lvl) => (
                <AccessLevelBadge key={lvl} level={lvl as AccessLevel} />
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-sand-300/60">
              {t("eb.baseTag")}
            </p>
          </Panel>
          <Panel>
            <SectionHeader icon={BarChart3} title={t("sections.docsByAccess.title")} />
            <AccessLevelsChart />
          </Panel>
        </div>

        {/* Folders */}
        <section>
          <SectionHeader title={t("sections.documentFolders.title")} />
          <div className="space-y-3">
            {dataRoomFolderRecords.map((folder, i) => (
              <EvidenceFolder
                key={folder.folder_id}
                folder={folder}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </section>

        {/* Claim disclosure split */}
        <section>
          <SectionHeader
            icon={SplitSquareHorizontal}
            title={t("eb.disclosureSplit")}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <Panel>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-medium text-mineral-300">
                  {t("eb.investorVisible")}
                </h3>
                <Badge tone="mineral">{investorVisibleClaims.length}</Badge>
              </div>
              <ul className="space-y-2.5">
                {investorVisibleClaims.map((c) => (
                  <li key={c.claim_id} className="text-xs">
                    <p className="text-sand-100">{c.wording}</p>
                    <p className="mt-0.5 text-[10px] text-sand-300/45">
                      {c.claim_id} · {c.badge}
                    </p>
                  </li>
                ))}
              </ul>
            </Panel>
            <Panel>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-medium text-copper-300">
                  {t("eb.ndaRequired")}
                </h3>
                <Badge tone="copper">{ndaRequiredClaims.length}</Badge>
              </div>
              <ul className="space-y-2.5">
                {ndaRequiredClaims.map((c) => (
                  <li key={c.claim_id} className="text-xs">
                    <p className="text-sand-200/80">{c.restricted_wording}</p>
                    <p className="mt-0.5 text-[10px] text-sand-300/45">
                      {c.claim_id}
                    </p>
                  </li>
                ))}
              </ul>
            </Panel>
            <Panel>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-medium text-amber-300">
                  {t("eb.restrictedInternal")}
                </h3>
                <Badge tone="warning">{restrictedInternalClaims.length}</Badge>
              </div>
              <ul className="space-y-2.5">
                {restrictedInternalClaims.map((c) => (
                  <li key={c.claim_id} className="text-xs">
                    <p className="text-sand-200/80">{c.item}</p>
                    <p className="mt-0.5 text-[10px] text-amber-200/60">
                      {c.claim_id} · {c.status}
                    </p>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </section>

        {/* Access matrix */}
        <section>
          <SectionHeader
            icon={Grid3x3}
            title={t("sections.accessMatrix.title")}
            description={t("sections.accessMatrix.desc")}
          />
          <EvidenceAccessMatrix />
        </section>

        {/* Disclosure rules */}
        <section>
          <DisclosureRulesPanel />
        </section>
      </div>
    </div>
  );
}
