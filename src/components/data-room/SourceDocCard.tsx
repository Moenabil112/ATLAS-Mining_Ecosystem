import { useTranslation } from "react-i18next";
import { FileText, Clock, CheckCircle2 } from "lucide-react";
import { AccessLevelBadge } from "@/components/cards/AccessLevelBadge";
import { Badge } from "@/components/shared/Badge";
import { Panel } from "@/components/shared/Panel";
import type { SourceDocument } from "@/types/evidence";

export function SourceDocCard({ doc }: { doc: SourceDocument }) {
  const { t } = useTranslation();
  const lodged = !/pending|referenced/i.test(doc.file_status);
  return (
    <Panel hover>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <FileText className="mt-0.5 h-4 w-4 shrink-0 text-copper-400" />
          <div>
            <h4 className="text-sm font-medium text-sand-50">{doc.title}</h4>
            <p className="mt-0.5 text-[10px] font-mono text-sand-300/45">
              {doc.document_id} · {doc.document_type} · {doc.language}
            </p>
          </div>
        </div>
        <AccessLevelBadge level={doc.access_level} />
      </div>

      <p className="mt-2 text-xs leading-relaxed text-sand-200/65">
        {doc.summary}
      </p>

      {doc.key_numbers.length > 0 && (
        <div className="mt-3">
          <p className="eyebrow mb-1">{t("eb.keyNumbers")}</p>
          <div className="flex flex-wrap gap-1.5">
            {doc.key_numbers.map((n) => (
              <Badge key={n} tone="sand">
                {n}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="mt-3 flex items-start gap-2 border-t border-graphite-700/70 pt-3">
        {lodged ? (
          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mineral-400" />
        ) : (
          <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
        )}
        <p className="text-[11px] leading-relaxed text-sand-300/60">
          <span className="font-medium text-sand-200/70">
            {t("eb.fileStatus")}:{" "}
          </span>
          {doc.file_status}
        </p>
      </div>
    </Panel>
  );
}
