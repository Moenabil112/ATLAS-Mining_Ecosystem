import { FileText } from "lucide-react";
import { AccessLevelBadge } from "@/components/cards/AccessLevelBadge";
import { Badge } from "@/components/shared/Badge";
import { Panel } from "@/components/shared/Panel";
import type { DataRoomDocument } from "@/types";

export function DocumentCard({ doc }: { doc: DataRoomDocument }) {
  return (
    <Panel hover>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <FileText className="mt-0.5 h-4 w-4 shrink-0 text-copper-400" />
          <div>
            <h4 className="text-sm font-medium text-sand-50">{doc.title}</h4>
            <p className="mt-1 text-xs leading-relaxed text-sand-200/65">
              {doc.description}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-graphite-700/70 pt-3">
        <AccessLevelBadge level={doc.accessLevel} />
        <Badge tone="neutral">{doc.status}</Badge>
        <Badge tone="sand">{doc.claimSensitivity}</Badge>
      </div>
    </Panel>
  );
}
