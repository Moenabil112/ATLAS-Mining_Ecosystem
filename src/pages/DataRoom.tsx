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
  return (
    <div>
      <PageHeader
        eyebrow="Controlled disclosure"
        title="Data Room"
        description="Project documents organized into twelve folders. Every document carries a status, an access level, a source layer and a claim sensitivity. Technical detail requires NDA."
      />

      <div className="space-y-10">
        {/* Access levels legend + chart */}
        <div className="grid gap-5 lg:grid-cols-3">
          <Panel className="lg:col-span-2">
            <SectionHeader
              icon={FolderLock}
              title="Access Levels"
              description="Five disclosure tiers govern who sees what."
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
            <SectionHeader icon={BarChart3} title="Documents by Access Level" />
            <AccessLevelsChart />
          </Panel>
        </div>

        {/* Folders */}
        <section>
          <SectionHeader title="Document Folders" />
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
            title="Access Level Matrix"
            description="Folder-by-tier disclosure rules."
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
