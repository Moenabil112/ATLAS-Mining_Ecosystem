import { useTranslation } from "react-i18next";
import { Badge } from "@/components/shared/Badge";
import { evidenceStatusLabel, statusTone } from "@/lib/claims";
import type { EvidenceStatus } from "@/types";

export function EvidenceStatusBadge({ status }: { status: EvidenceStatus }) {
  const { t } = useTranslation();
  return (
    <Badge tone={statusTone(status)}>
      {t(`status.evidence.${status}`, evidenceStatusLabel(status))}
    </Badge>
  );
}
