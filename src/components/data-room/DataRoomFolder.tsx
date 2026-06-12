import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Folder } from "lucide-react";
import { DocumentCard } from "./DocumentCard";
import { cn } from "@/lib/cn";
import type { DataRoomFolderModel } from "@/types";

export function DataRoomFolder({
  folder,
  defaultOpen = false,
}: {
  folder: DataRoomFolderModel;
  defaultOpen?: boolean;
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(defaultOpen);
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
              {folder.index}. {folder.name}
            </h3>
            <p className="text-xs text-sand-300/55">{folder.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-sand-300/50">
            {t("common.docs", { count: folder.documents.length })}
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 text-sand-300/60 transition-transform",
              open && "rotate-180",
            )}
          />
        </div>
      </button>
      {open && (
        <div className="grid gap-3 border-t border-graphite-700/70 bg-graphite-950/40 p-4 sm:grid-cols-2">
          {folder.documents.map((doc) => (
            <DocumentCard key={doc.id} doc={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
