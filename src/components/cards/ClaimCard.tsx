import { useTranslation } from "react-i18next";
import { FileText, AlertTriangle } from "lucide-react";
import { EvidenceStatusBadge } from "./EvidenceStatusBadge";
import { NumberStatusBadge } from "./NumberStatusBadge";
import { Badge } from "@/components/shared/Badge";
import { Panel } from "@/components/shared/Panel";
import { sourceDocument } from "@/evidence-base";
import type { ClaimRegisterEntry } from "@/types/evidence";

export function ClaimCard({ claim }: { claim: ClaimRegisterEntry }) {
  const { t } = useTranslation();
  const doc = sourceDocument(claim.source_document);
  return (
    <Panel hover className="flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <span className="text-[10px] font-mono text-sand-300/50">
          {claim.claim_id} · {claim.claim_category}
        </span>
        <span className="flex items-center gap-1 text-[10px] text-sand-300/45">
          <FileText className="h-3 w-3" /> {claim.source_document}
        </span>
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-sand-100">
        {claim.claim_text}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <EvidenceStatusBadge status={claim.evidence_status} />
        <NumberStatusBadge status={claim.number_status} />
        {claim.validation_required && (
          <Badge tone="warning">{t("common.validation")}</Badge>
        )}
      </div>
      {claim.risk_if_overstated && (
        <div className="mt-3 flex items-start gap-2 border-t border-graphite-700/70 pt-3">
          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" />
          <p className="text-[11px] leading-relaxed text-sand-300/60">
            <span className="font-medium text-sand-200/70">
              {t("eb.riskIfOverstated")}:{" "}
            </span>
            {claim.risk_if_overstated}
          </p>
        </div>
      )}
      {doc && (
        <p className="mt-2 text-[10px] text-sand-300/40">{doc.title}</p>
      )}
    </Panel>
  );
}
