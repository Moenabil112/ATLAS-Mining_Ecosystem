import { useTranslation } from "react-i18next";
import { FolderLock, Grid3x3, BarChart3 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { DataRoomFolder } from "@/components/data-room/DataRoomFolder";
import { AccessMatrix } from "@/components/data-room/AccessMatrix";
import { DisclosureRulesPanel } from "@/components/data-room/DisclosureRulesPanel";
import { AccessLevelsChart } from "@/components/charts/AccessLevelsChart";
import { Panel } from "@/components/shared/Panel";
import { AccessLevelBadge } from "@/components/cards/AccessLevelBadge";
import { dataRoomFolders, accessLevels } from "@/data";
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
        {/* Access levels legend + chart */}
        <div className="grid gap-5 lg:grid-cols-3">
          <Panel className="lg:col-span-2">
            <SectionHeader
              icon={FolderLock}
              title={t("sections.accessLevels.title")}
              description={t("sections.accessLevels.desc")}
            />
            <ul className="space-y-3">
              {accessLevels.map((level) => (
                <li key={level.id} className="flex items-start gap-3">
                  <AccessLevelBadge level={level.id as AccessLevel} />
                  <p className="text-xs text-sand-300/65">{level.description}</p>
                </li>
              ))}
            </ul>
          </Panel>
          <Panel>
            <SectionHeader
              icon={BarChart3}
              title={t("sections.docsByAccess.title")}
            />
            <AccessLevelsChart />
          </Panel>
        </div>

        {/* Folders */}
        <section>
          <SectionHeader title={t("sections.documentFolders.title")} />
          <div className="space-y-3">
            {dataRoomFolders.map((folder, i) => (
              <DataRoomFolder
                key={folder.id}
                folder={folder}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </section>

        {/* Access matrix */}
        <section>
          <SectionHeader
            icon={Grid3x3}
            title={t("sections.accessMatrix.title")}
            description={t("sections.accessMatrix.desc")}
          />
          <AccessMatrix />
        </section>

        {/* Disclosure rules */}
        <section>
          <DisclosureRulesPanel />
        </section>
      </div>
    </div>
  );
}
