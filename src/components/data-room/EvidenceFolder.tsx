import { useState } from "react";
import { ChevronDown, Folder } from "lucide-react";
import { SourceDocCard } from "./SourceDocCard";
import { AccessLevelBadge } from "@/components/cards/AccessLevelBadge";
import { Badge } from "@/components/shared/Badge";
import { cn } from "@/lib/cn";
import { sourceDocument } from "@/evidence-base";
import type { DataRoomFolderRecord } from "@/types/evidence";

export function EvidenceFolder({
  folder,
  defaultOpen = false,
}: {
  folder: DataRoomFolderRecord;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  // De-duplicate document ids and resolve to source-document records.
  const docs = Array.from(new Set(folder.documents))
    .map((id) => sourceDocument(id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <div className="panel overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-start transition-colors hover:bg-graphite-800/50"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-graphite-700 bg-graphite-800 text-copper-400">
            <Folder className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-sm font-medium text-sand-50">
              {folder.folder_id} · {folder.title}
            </h3>
            <p className="text-xs text-sand-300/55">{folder.status}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <AccessLevelBadge level={folder.access_level} />
          <ChevronDown
            className={cn(
              "h-4 w-4 text-sand-300/60 transition-transform",
              open && "rotate-180",
            )}
          />
        </div>
      </button>
      {open && (
        <div className="border-t border-graphite-700/70 bg-graphite-950/40 p-4">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge tone="sand">{folder.claim_sensitivity}</Badge>
          </div>
          {docs.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {docs.map((d) => (
                <SourceDocCard key={d.document_id} doc={d} />
              ))}
            </div>
          ) : (
            <p className="text-xs italic text-sand-300/45">{folder.status}</p>
          )}
        </div>
      )}
    </div>
  );
}
